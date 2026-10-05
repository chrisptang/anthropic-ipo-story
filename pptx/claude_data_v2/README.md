# 数据增强版 · 23 页

参考 `Anthropic_2T_IPO_Presentation.pptx` 的数据呈现：具体数字或案例在先，解释在后。保留白底、珊瑚橙、柔黄色；财务仅一页。

## 交付

- `Anthropic_编码模型与AGI_数据增强版.pptx`
- `Anthropic_编码模型与AGI_数据增强版.key`：由本机 Keynote 12.0 导入最终 PPTX 后保存。
- `Anthropic_编码模型与AGI_数据增强版.pdf`：最终 Keynote 导出。
- `preview_verified/`：2026-10-04 更新第 05 页后的逐页 PNG 与 PDF 文本；`preview_final/` 为上次版本。
- `slide_text.md`：正文提取。

## 主要增强

- 四项 Claude 评测成绩单。
- Verified 五代模型曲线：33.4% → 98.1%。
- 第 05 页已改为 Opus 5.5 / GPT-6 Astra / Gemini 3.1 Pro Preview 的 Artificial Analysis 真实第三方数据：Terminal-Bench 4.0 为 59.6% / 59.1% / 4.0%；Intelligence Index v4.3.2 为 58 / 53 / 30。
- 能力与价格对比：输入 $15 → $2，输出 $75 → $10。
- 可复算的 $0.50 调用成本假设与缓存费用示例。
- 命令、文件、测试和产物组成的执行轨迹。
- 500 / 642 / 66 个评测任务的规模切面。
- Nginx 四项具体验收，以及 Codex 43.8% → 83.5% 演进曲线。
- 对账输入输出示例、领域能力剖面、26% / >90% 研发参与数据。

除第 05 页外，数据仍沿用仓库，不构成新增外部核验。第 05 页已于 2026-10-04 直接读取 Artificial Analysis；数据与 URL 保存于 `benchmark_comparison_verified.json`，原始页面摘录在 `evidence/`。统一 mini-swe-agent、66 题、每题 3 次平均 pass@1；Opus 为 max with fallback，Astra 为 max，Gemini 为 Preview。AA 厂商 Agent 榜与厂商官方成绩使用其他配置，不混用。未核实到完整同版本 SWE-bench Pro 三方成绩，因此右图明确改为综合指数，不能解读为编码成功率。0.5 个百分点不证明统计显著领先。算例、伪代码、教学样本与实际数据分别标注。参考版 $150 / 半天 / 3分钟、8倍研发效率没有作为独立实测沿用。

## 兼容

八个普通数据图保留 PPTX 原生 chart 与嵌入工作簿；其上使用可编辑的原生矢量显示层，让 Keynote 导入即使忽略 chart frame 仍可显示图表。PowerPoint 调整原生数据时，显示层也需同步修改。

封面 SVG 以 PNG 兼容格式嵌入；源图在 `../claude_coral_white/assets/intelligence.svg`。

## 验证

PPTX skill 文件校验通过；Keynote 最终导入 23 页并导出 PDF；全篇渲染检查；2026-10-04 修改后再次核对第 05 页图表、模型名与数值。原 11.4 个百分点已删除，现为 0.5。正文、图形非负尺寸与 0.50 美元算例此前已检查。

重建：`node pptx/claude_data_v2/build.cjs`。重建后 `.key` 和 PDF 必须重新导入并导出。
