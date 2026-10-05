# 全稿数据与来源审计（作者参考，不进入演示正文）

核验日期：2026-10-04。优先 Artificial Analysis；缺项使用官方公开数据。可见页面保留模型配置、指标版本、单位和数据所属时期，不展示制作过程说明。完整核验摘录在 `evidence/`，逐页讲者备注也保存来源与口径。

## 逐页处置

| 页 | 原稿问题 / 类型 | 本版处置与来源 |
|---|---|---|
| 01–02 | $2T IPO 目标与2026 IPO时间表缺可读取证据 | 唯一既有媒体链接本次HTTP403。改为“两万亿IPO的想象”和“如果估值迈向两万亿”的情景开场；不宣称已确认目标或发行时间。无法访问不等于新闻虚假。 |
| 03 | Sonnet98.1 Verified、91.2 Pro、98.8 BFCL缺本次可追溯证据 | 改Opus成绩单：AA Terminal4 59.6%、II58；官方FrontierCode1.1 Main54.4%、CursorBench4 57.8%。 |
| 04 | 33.4→98.1历史拼接曲线缺逐点配置证据 | 改为官方同版Terminal4 Sonnet5 10.3%→Sonnet5.5 70.6%，增60.3pp。删掉旧Verified曲线及近饱和结论。 |
| 05 | 已单页更新 | 保留AA mini-swe-agent 59.6/59.1/4.0与II58/53/30；删掉“未找到所以改用”正文。 |
| 06 | 旧代际性能与价格混排 | 当前Sonnet5.5 / Opus5.5官方价格：输入2/4、输出10/20、缓存0.2/0.2美元/M Token；AA输出速率132.3/92.0 t/s。速率不是任务运行时间。 |
| 07 | $0.50是假设，不是代表性Bug账单 | 改AA实际测量平均API任务费用：ClaudeCode Sonnet5.5 max14.20、Opus5.5 max13.00、Codex Astra max7.47美元。包含尝试，不是只成功任务的费用；不含审查/基础设施。 |
| 08 | 原Sonnet缓存折扣可核，但未展示Opus | 官方缓存读取比输入分别便宜90%/95%；2M缓存读取均0.40美元，与普通输入4/8美元对比。明确算例、输出与缓存写入另计。 |
| 09 | 教学执行轨迹 | 保留示例，不声称是运行日志或实际成功案例。工具与Harness机制核到工程文章。 |
| 10 | Harness说明 | 核对官方上下文、工具、长任务文档。特征列表、进度文件、Git与验收均有支持。 |
| 11 | “200万字”缺明确单位关系 | 删除数字，保留上下文筛选机制。 |
| 12 | 数学算例 | 98%^50=36.4%，99.5%^50=77.8%，重算正确；保留独立、恒定、不可恢复假设，明确不是模型测量。 |
| 13 | 数据集版本可能混写 | 原500/642/66均核到原始来源并保留。Verified500；ProV2 642（v1为731）；Terminal4为66。它们是评测规模，不是训练规模；公开基准不可加入训练语料。 |
| 14 | codex-1披露本次无法直读 | OpenAI introducingCodex本次403，移除具体归因；用DeepSeek-R1官方公开RL研究支持自我验证/反思；编码Agent轨迹图仍是通用机制示意，不宣称Claude私有训练配方。 |
| 15 | 仓库Nginx案例不是核实官方题 | 替换AA公开Terminal4题目live-database-cutover：零停机迁移MySQL→PostgreSQL、零不一致、p95最多增10ms。是题目要求，不是模型完成案例。 |
| 16 | Codex43.8→83.5 Pro历史曲线缺来源 | 替换当前AA Codex配置：Sol6.1 xhigh指数63、15.5分钟、1.04美元；Astra max指数62、29.4分钟、7.47美元。不是只改变模型的受控实验。 |
| 17 | 对账教学金额 | 保留教学样本，980−950=30、1200−1200=0、600−0=600核算正确。 |
| 18 | 原伪代码无量化证据 | 改官方MCP工程示例：工具上下文150000→2000Tokens，减少98.7%。不是整张账单或成功率。 |
| 19 | Sonnet旧TAU/OSWorld数值无当前出处 | 替换Opus官方Chartography89% with tools、OSWorld2.1 81.8% partial、TerminalScience0.1 58.7%、AutomationBench40.0%。集合和评分不同，不能当领域总能力排行。 |
| 20 | 26/>90基本正确但仅仓库引用 | 核对官方原型指数，保留2026-08快照；26% AL4人类监督，>90% AL3及以上（含AL4），AL5所测类别未报告；不是独立原创发现占比。 |
| 21 | 原研发用途表是示意 | 用官方平台规模替换：任一时刻约30000研究工程Agent；100%平台动作执行前过监控；8月分析>10亿决策。厂商自报，监控覆盖不等于风险全被识别。 |
| 22 | RSI方向性推演 | 保留代际反馈示意，不声称完全自主递归改进或智能爆炸已经发生。 |
| 23 | 员工与组织建议 | 保留方向分析，无新增量化事实。 |

## 主来源

- Sonnet5.5正式发布（2026-09-28）：https://www.anthropic.com/claude-sonnet-5-5
- Opus5.5正式发布（2026-09-22）：https://www.anthropic.com/news/claude-opus-5-5
- AA Opus：https://artificialanalysis.ai/models/claude-opus-5-5
- AA Sonnet：https://artificialanalysis.ai/models/claude-sonnet-5-5
- AA Astra：https://artificialanalysis.ai/models/gpt-6-astra
- AA Gemini：https://artificialanalysis.ai/models/gemini-3-1-pro-preview
- AA统一模型评测：https://artificialanalysis.ai/evaluations/terminalbench-4-0?models=claude-opus-5-5%2Cgpt-6-astra%2Cgemini-3-1-pro-preview
- AA厂商Agent评测：https://artificialanalysis.ai/agents/coding-agents
- 基准发布：https://www.tbench.ai/news/terminal-bench-4-0
- Verified数量：https://www.swebench.com/SWE-bench/
- ProV2数量：https://github.com/scaleapi/SWE-bench_Pro-os
- 公开RL：https://github.com/deepseek-ai/DeepSeek-R1
- MCP工程：https://www.anthropic.com/engineering/code-execution-with-mcp
- 上下文工程：https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- 工具工程：https://www.anthropic.com/engineering/writing-tools-for-agents
- 长任务Harness：https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- 内部研发指数及平台规模：https://www.anthropic.com/institute/measuring-pace-of-ai-development
- Codex产品存在及CLI/Web：https://github.com/openai/codex

## 重要口径

AA统一模型Terminal4使用mini-swe-agent，66题×3次，平均pass@1。AA Coding Agent Index v1.5使用各厂商Harness、DeepSWE1.1/Terminal4/SWE-Atlas-QnA均权，不能与前者合并。官方Terminal4又是不同配置，不把70.6或66.4填入AA图。

Opus模型评测为max with fallback，安全干预可能转由其他模型完成部分任务。官方FrontierCode Main max54.4与默认medium54.6属于不同effort，不能混标。

研发指数为厂商自报原型、2026-08快照，不能推断全行业。26与>90是嵌套集合。

曾向用户提示Sonnet5.5版本可能矛盾；进一步核验发现2026-09-28正式发布。因此纠正了这个初步判断，而不是将已发布Sonnet误判为未来模型。
