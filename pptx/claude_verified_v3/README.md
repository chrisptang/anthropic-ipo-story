# 全稿更新版（23 页）

核验于2026-10-04。完整逐页处置和来源见 `source_audit.md`；原始网页摘录在 `evidence/`。旧版 `../claude_data_v2/` 保留。

## 文件

- `Anthropic_编码模型与AGI_全稿更新版.pptx`
- `Anthropic_编码模型与AGI_全稿更新版.key`
- `Anthropic_编码模型与AGI_全稿更新版.pdf`
- `preview/`：最终Keynote PDF逐页渲染与联系表
- `slide_text.md`：可见正文文本
- `slides.json`：逐页标题、来源与作者备注
- `source_audit.md`：作者用数据核验记录，不进入演示正文

## 内容更新

删除未经追溯的Verified98.1、Pro91.2、BFCL98.8、Codex历史Pro83.5及旧TAU/OSWorld分数。保留已核实的当前模型成绩、官方Sonnet代际Terminal4对比、价格/缓存、Pro642和研发26/>90；新增真实平均任务成本、Codex执行效率、公开数据库迁移验收、MCP工具上下文削减与内部研发Agent规模。

IPO既有链接本次403，开场改为明确的“两万亿想象”情景，不当作已确认IPO目标。其他抽象工程与业务机制保留；示例明确，数学算例重算。

正文无“仓库记录”“本次未核验”“未找到所以改用”等作者过程话语。必要单位、基准版本、数据快照和算例标识仍保留。

## 显示兼容与验证

6个数据图保留原生PPTX charts和嵌入工作簿，并用原生可编辑矢量层显示，以兼容Keynote12.0导入。改数据时须同时改显示层。

PPTX技能校验通过；最终导入Keynote23页、保存key、导出PDF并检查全篇；正文不含作者过程话语，关键数据在PDF中可提取，算术检查通过。

重建：`node pptx/claude_verified_v3/build.cjs`；Keynote和PDF需重新导入导出，不随脚本自动更新。
