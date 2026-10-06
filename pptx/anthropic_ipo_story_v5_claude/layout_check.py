"""逐页解析最终 slide XML，检查文本框越界与显著重叠。"""

import re
import sys
import zipfile

from defusedxml import ElementTree as ET

A = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
P = '{http://schemas.openxmlformats.org/presentationml/2006/main}'
EMU = 914400.0
W, H = 13.333333, 7.5
OVERLAP = .35


def coordinate(element, attribute):
    """OOXML geometry must contain a valid integer EMU coordinate."""
    value = element.get(attribute)
    if value is None:
        raise ValueError(f'Missing geometry attribute: {attribute}')
    try:
        return int(value) / EMU
    except ValueError as error:
        raise ValueError(f'Invalid geometry attribute: {attribute}={value}') from error


def boxes(xml):
    root = ET.fromstring(xml)
    out = []
    for sp in root.iter(P + 'sp'):
        xfrm = sp.find('.//' + A + 'xfrm')
        if xfrm is None:
            continue
        off, ext = xfrm.find(A + 'off'), xfrm.find(A + 'ext')
        if off is None or ext is None:
            continue
        text = ''.join(e.text or '' for e in sp.iter(A + 't')).strip()
        if text:
            out.append((text, coordinate(off, 'x'), coordinate(off, 'y'),
                        coordinate(ext, 'cx'), coordinate(ext, 'cy')))
    return out


def slide_number(name):
    stem = name.rsplit('/', 1)[-1].removeprefix('slide').removesuffix('.xml')
    try:
        return int(stem)
    except ValueError as error:
        raise ValueError(f'Invalid slide filename: {name}') from error


def main():
    deck = sys.argv[1] if len(sys.argv) > 1 else 'Anthropic_2万亿IPO的背后_编码模型与AGI_Claude.pptx'
    issues = 0
    with zipfile.ZipFile(deck) as archive:
        names = sorted((n for n in archive.namelist()
                        if re.fullmatch(r'ppt/slides/slide\d+\.xml', n)), key=slide_number)
        for i, name in enumerate(names, 1):
            bs = boxes(archive.read(name))
            for text, x, y, w, h in bs:
                if x < -.01 or y < -.01 or x + w > W + .02 or y + h > H + .02:
                    print(f'p{i:02d} 越界 {x:.2f},{y:.2f} {w:.2f}x{h:.2f}  {text[:40]}')
                    issues += 1
            for a, (ta, xa, ya, wa, ha) in enumerate(bs):
                for tb, xb, yb, wb, hb in bs[a + 1:]:
                    ox = min(xa + wa, xb + wb) - max(xa, xb)
                    oy = min(ya + ha, yb + hb) - max(ya, yb)
                    if ox <= 0 or oy <= 0:
                        continue
                    area, small = ox * oy, min(wa * ha, wb * hb)
                    if small > 0 and area / small > OVERLAP:
                        print(f'p{i:02d} 重叠 {100 * area / small:.0f}%  {ta[:28]!r}  ×  {tb[:28]!r}')
                        issues += 1
    print(f'slides={len(names)} issues={issues}')
    return 1 if issues else 0


if __name__ == '__main__':
    sys.exit(main())
