"""由 slides.json 生成 speaker_notes.md，由 preview/*.txt 生成 slide_text.md。

speaker_notes.md 是作者用的来源与口径备忘，不出现在页面上。
slide_text.md 是 Keynote 导出 PDF 的实际渲染文本，用来核对页面上到底写了什么。
在 build.cjs → compat.py → Keynote 导出 → render_pdf.swift 之后运行。
"""
import json
from pathlib import Path

HERE = Path(__file__).parent
TITLE = 'Anthropic 2万亿IPO的背后：编码模型与AGI'


def speaker_notes() -> None:
    rows = json.loads((HERE / 'slides.json').read_text(encoding='utf-8'))
    out = [f'# {TITLE} · V5 演讲备注（来源与口径）', '',
           '每页记录来源链接与口径边界。备注只给作者，不出现在页面上。', '']
    for r in rows:
        out.append(f"## {r['page']:02d} {r['title'] or '封面'}")
        out.append('')
        out.append(f"**章节**：{r['section']}")
        out.append('')
        src = (r.get('source') or '').strip()
        if src:
            out.append('**来源**：')
            out.append('')
            for ln in src.splitlines():
                ln = ln.strip()
                if ln:
                    out.append(f'- {ln}' if ln.startswith('http') else f'- {ln}')
            out.append('')
        note = (r.get('notes') or '').strip()
        if note:
            out.append(f'**口径与边界**：{note}')
            out.append('')
    (HERE / 'speaker_notes.md').write_text('\n'.join(out), encoding='utf-8')
    print(f'speaker_notes.md: {len(rows)} pages')


def slide_text() -> None:
    files = sorted((HERE / 'preview').glob('slide-*.txt'))
    if not files:
        print('slide_text.md: skipped (no preview/*.txt yet)')
        return
    out = [f'# {TITLE} · PDF 渲染文本', '',
           '以下为 Keynote 导出 PDF 的实际渲染文本，逐页提取，用于核对页面文字。', '']
    for f in files:
        num = f.stem.split('-')[1]
        body = f.read_text(encoding='utf-8').strip()
        out.append(f'## {num}')
        out.append('')
        out.append(body)
        out.append('')
    (HERE / 'slide_text.md').write_text('\n'.join(out), encoding='utf-8')
    print(f'slide_text.md: {len(files)} pages')


if __name__ == '__main__':
    speaker_notes()
    slide_text()
