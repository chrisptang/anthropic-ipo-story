# Anthropic 2万亿IPO的背后：编码模型与AGI · V4

27页故事结构。2026-10-05将IPO比较合并为一页，删除SpaceX募资纪录支线，恢复Anthropic主线；同日将第09/10页重做为Claude历代frontier模型编码与终端执行能力演进。V3及更早目录保留。

## 阅读顺序

- 01：封面
- 02–08：史上最大IPO——大型公司IPO估值与募资并排对照 → 为什么Anthropic五年就进入这个行列 → 估值历程 → 收入增长 → 收入倍数 → 技术原因。
- 09–19：不仅仅是程序员的梦中情模——编码成绩演进、Agent闭环、执行反馈、非程序员计算任务、MCP/Skills生态、Gemini反例与Codex正例。
- 20–25：编码模型与AGI——工作定义、数字/物理连接、AI参与研发、代际反馈、剩余门槛。
- 26–27：回到两万亿；员工与公司意味着什么。

## 交付

- `Anthropic_2万亿IPO的背后_编码模型与AGI.pptx`
- `Anthropic_2万亿IPO的背后_编码模型与AGI.key`
- `Anthropic_2万亿IPO的背后_编码模型与AGI.pdf`
- `slide_text.md`：PDF实际渲染文本。
- `speaker_notes.md`：来源与口径，作者用。
- `source_audit.md`：完整审计与数据边界。
- `frontier_history_verified.json`：历代Verified、最新Pro、分版本Terminal成绩与逐项官方来源；证据位于 `evidence/frontier_history/`。
- `preview/`：27页Keynote PDF渲染、3张联系表。

## 重要财务口径

已提交S-1；>$2T为Reuters报道的目标估值，不是虚构假设，也不是已上市市值。年化收入按官方run-rate revenue表述。18–20倍不是PE；$100–111B为目标收入倒算。Reuters全文没有披露仓库中的9月$100B ARR，因此不把它写成实绩。

## 构建与验证

```bash
node pptx/anthropic_ipo_story_v4/build.cjs
python3 /Users/tangpeng/.agents/skills/pptx/scripts/office/validate.py 'pptx/anthropic_ipo_story_v4/Anthropic_2万亿IPO的背后_编码模型与AGI.pptx'
```

生成器只更新PPTX/slides.json。修改后需重新导入Keynote、保存KEY、导出PDF，再用 `pptx/claude_coral_white/render_pdf.swift` 渲染检查；KEY/PDF不会自动更新。

## 兼容性

白底、珊瑚橙与浅黄，PingFang SC。保留10个原生图表与工作簿，附可编辑矢量显示层保证Keynote兼容。图表两层共享数据。所有流程/表格使用可编辑形状。

## 验收

PPTX结构校验通过；Keynote导入27页；导出KEY/PDF并渲染27页；全部联系表已检查；关键财务/评测数字和禁止过程用语检查通过；无负图形尺寸。
