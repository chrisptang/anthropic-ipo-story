# 编码模型与 AGI · 珊瑚白版

## 交付

- `Anthropic_编码模型与AGI_珊瑚白.pptx`：27 页，16:9，白底、珊瑚橙与柔黄色。
- `Anthropic_编码模型与AGI_珊瑚白.key`：本机 Keynote 12.0 导入并保存的版本。
- `Anthropic_编码模型与AGI_珊瑚白.pdf`：最终版本经 Keynote 导出的预览。
- `preview_final/`：最终 Keynote PDF 渲染的逐页 PNG 与提取文本。
- `slide_text.md`：PPTX 正文提取，用于内容检查。

## 内容

财务仅保留一页开场。主体依次解释 Claude 的工程判断与工作系统、编码模型的执行反馈与训练机制、代码作为通用行动和 AI 研发能力的作用。来源和更完整的数据口径位于演讲者备注。

数据沿用仓库现有材料及其中列出的来源；本次制作不构成独立外部事实核验。

## 图表与兼容

三个数据图保留 PPTX 原生图表及嵌入工作簿。实测 Keynote 12.0 未导入其 chart frame，因此在同一位置加了可编辑的原生矢量图形显示层，确保 Keynote 实际展示不缺图。原生图表位于白色显示层下，PowerPoint 如需修改原生图表，可以通过选择窗格定位；修改数据时也需同步矢量显示层。流程、对比、时间轴均由原生图形和可编辑文本组成。

封面图由 `assets/intelligence.svg` 创作，以高分辨率 PNG 嵌入，避免 SVG 导入差异；SVG 源文件随目录保留。

## 验证

- PPTX skill 的 `scripts/office/validate.py`：全部通过。
- 本机 Keynote 12.0：最终 PPTX 导入 27 页，导出 PDF，保存 `.key`。
- 27 页渲染检查；第 9、10、22 页图表兼容修正后再次渲染检查。
- 正文提取检查：无 TODO、占位文案及面向演讲者的制作指令。

## 重建

从仓库根目录执行：

```bash
node pptx/claude_coral_white/build.cjs
python3 pptx/claude_coral_white/compat.py
python3 /Users/tangpeng/.agents/skills/pptx/scripts/office/validate.py pptx/claude_coral_white/Anthropic_编码模型与AGI_珊瑚白.pptx
```

`.key` 与 PDF 需从重建后的 PPTX 重新导入 Keynote 保存或导出，不会由 Node 脚本自动更新。
