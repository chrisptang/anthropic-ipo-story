"""把 pptxgenjs 产出的原生图表规范化，使 Keynote 与 PowerPoint 都能无修复提示打开。

生成器留下三处不规范，两端表现不同但来源相同：
1. 幻灯片 rels 里图表用绝对部件名 `/ppt/charts/chartN.xml`；Keynote 对绝对 Target 不稳定。
2. 二维柱/折线图在绘图区声明了第三个 axId，但文件里只有 catAx 与 valAx；
   PowerPoint 会据此判定文件损坏并弹出修复。
3. 分类缓存用 multiLvlStrRef；单层分类用标准 strRef 两端都稳。

图表本身是数据载体：可见层是同一数据绘制的可编辑矢量形状，因此规范化不改变外观。
在 build.cjs 之后运行。
"""
import re
import sys
import zipfile
from pathlib import Path

DECK = Path(__file__).parent / 'Anthropic_2万亿IPO的背后_编码模型与AGI_Claude.pptx'
PHANTOM_AX_ID = b'<c:axId val="2094734556"/>'
MULTI_LVL = re.compile(
    r'<c:multiLvlStrRef>\s*<c:f>(.*?)</c:f>\s*<c:multiLvlStrCache>\s*'
    r'<c:ptCount val="(\d+)"/>\s*<c:lvl>(.*?)</c:lvl>\s*</c:multiLvlStrCache>\s*</c:multiLvlStrRef>',
    re.S,
)


def main() -> int:
    if not DECK.exists():
        print(f'missing deck: {DECK}', file=sys.stderr)
        return 1
    with zipfile.ZipFile(DECK) as z:
        items = {n: z.read(n) for n in z.namelist()}

    fixed = {'targets': 0, 'axids': 0, 'caches': 0}
    for name, data in list(items.items()):
        if name.startswith('ppt/slides/_rels/') and name.endswith('.rels'):
            new = data.replace(b'Target="/ppt/charts/', b'Target="../charts/')
            fixed['targets'] += new != data
            data = new
        if name.startswith('ppt/charts/chart') and name.endswith('.xml'):
            if PHANTOM_AX_ID in data:
                data = data.replace(PHANTOM_AX_ID, b'')
                fixed['axids'] += 1
            text = data.decode('utf-8')
            text, n = MULTI_LVL.subn(
                r'<c:strRef><c:f>\1</c:f><c:strCache><c:ptCount val="\2"/>\3</c:strCache></c:strRef>',
                text,
            )
            fixed['caches'] += n
            data = text.encode('utf-8')
        items[name] = data

    with zipfile.ZipFile(DECK, 'w', zipfile.ZIP_DEFLATED) as z:
        for name, data in items.items():
            z.writestr(name, data)

    leftover_abs = sum(
        1 for n, d in items.items()
        if n.endswith('.rels') and b'Target="/ppt/' in d
    )
    leftover_ax = sum(1 for n, d in items.items() if PHANTOM_AX_ID in d)
    leftover_multi = sum(1 for n, d in items.items() if b'multiLvlStrRef' in d)
    print(
        f"normalized: targets={fixed['targets']} axids={fixed['axids']} caches={fixed['caches']}"
    )
    print(
        f'remaining: absolute_targets={leftover_abs} phantom_axid={leftover_ax} multiLvl={leftover_multi}'
    )
    return 1 if (leftover_abs or leftover_ax or leftover_multi) else 0


if __name__ == '__main__':
    raise SystemExit(main())
