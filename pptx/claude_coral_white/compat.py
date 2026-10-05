"""Normalize chart relationships for Keynote; retain editable native charts."""
import re
import zipfile
from pathlib import Path
p=Path(__file__).parent/'Anthropic_编码模型与AGI_珊瑚白.pptx'
with zipfile.ZipFile(p) as z:
    items={n:z.read(n) for n in z.namelist()}
for n,data in list(items.items()):
    if n.startswith('ppt/slides/_rels/') and n.endswith('.rels'):
        data=data.replace(b'Target="/ppt/charts/',b'Target="../charts/')
    if n.startswith('ppt/charts/chart') and n.endswith('.xml'):
        # A 2-D bar chart has no series axis. Drop the generator's undeclared id.
        data=data.replace(b'<c:axId val="2094734556"/>',b'')
        # Keynote supports the standard single-level string cache reliably.
        s=data.decode()
        s=re.sub(r'<c:multiLvlStrRef>\s*<c:f>(.*?)</c:f>\s*<c:multiLvlStrCache>\s*<c:ptCount val="(\d+)"/>\s*<c:lvl>(.*?)</c:lvl>\s*</c:multiLvlStrCache>\s*</c:multiLvlStrRef>',r'<c:strRef><c:f>\1</c:f><c:strCache><c:ptCount val="\2"/>\3</c:strCache></c:strRef>',s,flags=re.S)
        data=s.encode()
    items[n]=data
with zipfile.ZipFile(p,'w',zipfile.ZIP_DEFLATED) as z:
    for n, data in items.items():
        z.writestr(n, data)
print('Normalized native charts for Keynote')
