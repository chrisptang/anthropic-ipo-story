# -*- coding: utf-8 -*-
"""
Build master script for generating the complete 28-slide Coral presentation.
Stitches theme.py, part0.py, part1.py, part2.py, part3.py, part4.py, part5.py
into build_coral_deck.js and executes it via node.
"""

import os
import subprocess
import shutil

from theme import JS_HEADER
from part0 import SLIDES_0
from part1 import SLIDES_1
from part2 import SLIDES_2
from part3 import SLIDES_3
from part4 import SLIDES_4
from part5 import SLIDES_5

TARGET_NAME_SPACE = "Anthropic 2 万亿 IPO 的背后：编码模型与 AGI_Gemini.pptx"
TARGET_NAME_UNDERSCORE = "Anthropic_2万亿IPO的背后_编码模型与AGI_Gemini.pptx"

def build():
    workspace = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_path_space = os.path.join(workspace, TARGET_NAME_SPACE)
    
    js_content = []
    js_content.append(JS_HEADER)
    js_content.append("\n// ==================== PART 0 ====================")
    js_content.append(SLIDES_0)
    js_content.append("\n// ==================== PART 1 ====================")
    js_content.append(SLIDES_1)
    js_content.append("\n// ==================== PART 2 ====================")
    js_content.append(SLIDES_2)
    js_content.append("\n// ==================== PART 3 ====================")
    js_content.append(SLIDES_3)
    js_content.append("\n// ==================== PART 4 ====================")
    js_content.append(SLIDES_4)
    js_content.append("\n// ==================== PART 5 ====================")
    js_content.append(SLIDES_5)
    
    # Save call
    js_content.append(f"""
// Save Presentation
const outputPath = path.resolve('{target_path_space}');
pres.writeFile({{ fileName: outputPath }})
  .then(f => console.log('SUCCESS: Generated presentation at: ' + f))
  .catch(err => {{
    console.error('ERROR during generation:', err);
    process.exit(1);
  }});
""")
    
    out_js = os.path.join(workspace, "build_coral_deck.js")
    with open(out_js, "w", encoding="utf-8") as f:
        f.write("\n".join(js_content))
    
    print(f"Generated {out_js}, running node...")
    res = subprocess.run(["node", out_js], cwd=workspace, capture_output=True, text=True)
    print("Node STDOUT:", res.stdout)
    if res.stderr:
        print("Node STDERR:", res.stderr)
        
    if res.returncode != 0:
        raise RuntimeError("Node execution failed!")
        
    # Keep only the single requested file
    print(f"File size: {os.path.getsize(target_path_space)} bytes")

if __name__ == "__main__":
    build()
