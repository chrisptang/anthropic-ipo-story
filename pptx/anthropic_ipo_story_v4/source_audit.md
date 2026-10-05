# V4 来源与叙事审计

检索日期：2026-10-04；IPO纪录修正：2026-10-05。主题：Anthropic 2万亿IPO的背后：编码模型与AGI。

## 与 V3 的关键纠正

1. Anthropic 官方明确确认 2026-06-01 秘密提交 S-1 草案。之前因媒体访问失败将整个 IPO 降成“想象”不恰当。新版恢复用户的 IPO 主线。
2. 用户提供的 Euronext 页面转载 Reuters 2026-09-28 报道，可完整读取。报道说上市可使估值超过 $2T；这是真实报道的目标，不是本演讲虚构情景，也不是已经完成定价/上市市值。6月官方公告未确定股数与价格。
3. 仓库财务 CSV 不是最新可用事实：融资轮次、金额、日期与公司公告存在冲突。没有逐点证据的季度 ARR 不使用。
4. 公司公告使用 run-rate revenue，不能等同全年确认收入或保证续约的订阅 ARR。演示统一标记“年化收入”。Claude Code 不等于公司全部业务。
5. ARR × 18–20 为收入倍数，而非 PE。100–111B 是倒算所需收入，不冒充公司已披露收入。

## 第一章：IPO 与财务

### IPO
- 官方提交：https://www.anthropic.com/news/confidential-draft-s1-sec
- Reuters 原文（访问检查无法读正文）：https://www.reuters.com/business/finance/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs-2026-09-28/
- 用户提供的可读转载：https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs
- 转载发布日期 2026-09-29，文内 Reuters 日期 Sept 28。
- 已提交不代表已上市；超过2T为报道估值目标。未写仓库中11月9日路演、NASDAQ、联席承销商和18B募资额，因为本次正文不支持。
- SpaceX 上市估值1.77T来自同一Reuters报道，未另外读SpaceX招股书。

### 大型IPO比较（只服务于Anthropic主线）

2026-10-05再次修正叙事：删除“SpaceX超过沙特阿美”的独立纪录页，将阿里巴巴、沙特阿美、SpaceX、Anthropic的IPO估值与募资额合并一页。历史比较落在“为什么五年的AI公司进入两万亿行列”，随后衔接Anthropic估值历史与收入，而不是讲SpaceX。历史核验记录保留如下。
- 可读二级历史来源：https://en.wikipedia.org/wiki/Initial_public_offering
- https://en.wikipedia.org/wiki/Industrial_and_Commercial_Bank_of_China
- https://en.wikipedia.org/wiki/Agricultural_Bank_of_China
- https://en.wikipedia.org/wiki/Alibaba_Group
- https://en.wikipedia.org/wiki/Saudi_Aramco
- **错误记录：原V4募资纪录停在2019，遗漏SpaceX；不能把这页称为截至2026完整的纪录递进。2026-10-05已纠正第3/4页。**
- 2006 ICBC21.9B、2010 ABC22.1B仍来自二级历史资料；阿里、Aramco、SpaceX重新按逐项来源取数。
- 阿里最终发行总额25.03B（250.3亿美元），含公司及出售股东，不是公司独得资金。官方2014-09-22：https://www.alibabagroup.com/en-US/document-1490842489823690752 。2014-09-18定价公告原21.77B不含超额配售：https://www.alibabagroup.com/en-US/document-1490841477796855808 。
- 阿里按68美元发行价估值167.62B，显示约1676亿美元：https://www.cnbc.com/2014/09/18/alibaba-prices-shares-at-68-a-share-dj.html 。首日收盘231.4B，显示2314亿美元：https://www.bbc.co.uk/news/business-29282407 。不混入发行价估值列。
- Aramco最终29.4B、定价估值1.7T，已读当时报导，不再靠首日价格倒算：https://www.cnbc.com/2020/01/12/saudi-aramco-raises-ipo-to-record-29point4-billion-through-greenshoe-option.html 及 https://www.cnbc.com/2019/12/05/saudi-aramco-prices-shares-at-the-top-of-the-range-for-record-ipo-report-says.html 。官方旧公告此前超时，本次来源为CNBC/Reuters报道，不称官方原公告核验。
- SpaceX官方2026-06-15交割公告明确含超额配售gross proceeds约85.7B（857亿美元）：https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx 。最初媒体75B不含超额配售，不与最终值混用。
- **来源自身不一致：**SpaceX公告股数638888888乘报道发行价135美元得86.25B，与公告85.7B不一致。本稿按官方明确写出的gross proceeds约85.7B，保留冲突，不擅自“修正”来源。85.7B亦被CNBC/BBC搜索结果支持。
- SpaceX1.77T发行估值仍来自用户提供的Reuters转载，不用首日超过2T市值替换。
- Anthropic募资额未取得；官方发行股数和价格未定，显示“发行规模待定”；2T为估值目标。
- `evidence/ipo_record_correction_sources.json`、`alibaba_ipo_correction_sources.json`、`aramco_ipo_correction_sources.json` 保存本次直接读取正文。

### 估值
| 时间 | 口径 | 十亿美元 |
|---|---|---:|
|2025-03-03|Series E 投后|61.5|
|2025-09-02|Series F 投后|183|
|2026-02-12|Series G 投后|380|
|2026-05-28|Series H 投后|965|
|2026-09-28报道|IPO目标|>2000|

对应官方公告：
- https://www.anthropic.com/news/anthropic-raises-series-e-at-usd61-5b-post-money-valuation
- https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation
- https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation
- https://www.anthropic.com/news/series-h

2021成立来自Reuters五年历史及公司研究上下文；没有采用仓库无原始证据的早期估值。事件轴为等距事件点，不声称时间间距相等。IPO目标在右侧独立显示，不当作已成交融资连接到曲线。

### 年化收入
- 公司：2025年初约1B，2025年8月>5B（Series F）；2026年2月14B（Series G）；2026年5月>47B（Series H）。折线中5与47是下限，显示“>”。
- Claude Code：2025年8月>0.5B；2026年2月>2.5B；同期企业收入占比>50%、企业订阅较2026年初4倍。
- Code预览2025-02-24：https://www.anthropic.com/news/claude-3-7-sonnet
- Code GA2025-05-22：https://www.anthropic.com/news/claude-4
- 时间对应不证明ClaudeCode导致全部公司收入增长。未画未经独立验证的OpenAI ARR反超曲线。

### 收入倍数与损益
- 965/47≈20.53；实际分母>47，倍数低于约20.5。
- 2000/47≈42.55（仅用五月47B作参照）。
- 2000/20=100；2000/18≈111.11，是所需年化收入倒算。
- Reuters2025确认营收近4.6B；经营亏损>8B；净亏损近42B含约34B融资估值会计费用。不把净亏损当现金烧钱。
- 未来518B为云、算力、基础设施义务，不是单年Capex。

## 第二章：编码与Agent

### 2026-10-05：两页重做为 Claude 历代 frontier model 能力演进

完整数据和逐项链接：`frontier_history_verified.json`；发布页摘录、官方图表、system card相关页保存在 `evidence/frontier_history/`。先读取repo CSV/文档，再核查发现CSV模型归属与分数多处错位，未直接复制。

- 第09页包括16个Verified节点：Sonnet3.5 33.4、v2 49.0、3.7 62.3；Opus4 72.5、Sonnet4 72.7、Opus4.1 74.5、Sonnet4.5 77.2、Opus4.5 80.9、Opus4.6 80.8、Sonnet4.6 79.6、Mythos Preview93.9、Opus4.7 87.6、Opus4.8 88.6、Mythos/Fable5 95.5/95、Sonnet5 85.2、Opus5 96.0。
- Claude2是Sonnet命名之前的模型：71.2为HumanEval，单独列为起点，不入Verified图；Claude3 Opus未从其原发布获得同口径Verified分数，CSV误标33.4不能使用。Sonnet早期v2节点保留。
- Sonnet3.7发布图的62.3为500题pass@1，超过当时对照模型；70.3为489个基础设施可运行任务上的定制scaffold，不作为主柱。图只表达官方历代能力足迹，不声称每代都高于同代所有竞争者。
- Mythos/Fable5.1、Opus5.5、Sonnet5.5 system card未再报告Verified，右侧独立列SWE-bench Pro81.2/89.9/81.3；不将repo96.5/97.8/98.1冒充Verified。Opus5 96%来自card153页；Mythos/Fable5 95.5/95来自card253页。
- 历史配置、thinking、harness、重复次数变化；柱高从0开始。不是AA统一复测，也不是受控训练实验。
- 第10页按Terminal-Bench原版/2.0/2.1/4.0四区列出模型，跨区不连线、不相减；每个模型按已披露版本取分，未发布的早代不补造Terminal成绩。
- 原版Opus4 43.2使用Claude Code；4.1 43.3使用Terminus1，Sonnet4.5 50.0来自发布表。Opus4.5 2.0用原发布59.3（128K thinking），不换成后续复测59.8。Mythos Preview82、Opus4.7 69.4在2.0；后者无thinking。
- 2.1 Opus4.8原发布74.6（Terminus2）与Fable5 card复测82.7不同；取原发布点并记录差异。Fable5 84.3、Mythos5 88.0；Sonnet5 80.4使用mini-swe-agent，不声称同harness对照。
- 4.0：Sonnet5 10.3（Sonnet5.5发布正文）；Fable5 42.0、Opus5 52.3、Fable5.1 55.8、Mythos5.1 60.9、Opus5.5 66.4、Sonnet5.5 70.6。5.1同一基础模型、不同safeguards/access。Opus5.5 xhigh，其他近期点max；5.5包含server-side fallback；重复5/10/15次不同。Sonnet5正文未提供更细评测配置，因此不把10.3当作严格受控训练增幅。
- 第11页AA独立横向对照保持不变；官方Code harness66.4不替换AA mini-swe-agent59.6。
- AA当前三模型对照沿用已保存的 `benchmark_comparison_verified.json` 和V3证据。TB4：59.6/59.1/4.0%，mini-swe-agent，66题每题3次平均pass@1；Opus max with fallback，Astra max，Gemini Pro Preview。回退可能使用其他模型；0.5pp观测差不意味着显著领先。AA综合指数58/53/30 v4.3.2不是百分比也不是纯编码分数。
- Gemini叙事仅定位本型号本配置终端掉队，不宣称Google整体衰落，不编造关停/迁移/训练组织原因。
- Codex AA Agent Index1.5：Astra max62/29.4min/7.47USD；Sol xhigh63/15.5min/1.04USD。是配置快照，不是受控变量实验，不推断公司动机或完整历史反攻。
- RL机制：https://github.com/deepseek-ai/DeepSeek-R1 。支持公开反思、自检的RL研究，不是Claude私有训练配方。运行纠错与训练权重更新分开；评测集不是训练集。
- CLI轨迹与对账数字为教学样本，不声称真实运行或公司账目。
- MCP发布2024-11-25：https://www.anthropic.com/news/model-context-protocol
- Skills发布2025-10-16、开放标准2025-12-18：https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- MCP捐赠与生态2025-12-09：https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation 。10000+活跃公共服务、97M+月Python/TS SDK下载为官方生态快照，不是市场份额或独立用户人数。
- 按需工具上下文150000→2000、减少98.7%：https://www.anthropic.com/engineering/code-execution-with-mcp 。不是全任务成本降低98.7%。

## 第三章：AGI

- 工具使用、持续学习、自我迭代是本演讲的工作定义/框架，不声称AGI已有统一公认判定标准。三项不是人类级通用智能的充分证明。
- 物理连接图为机制示意，不是Claude机器人实测；需要设备授权、传感器、保护与现场反馈。
- 研发指标：https://www.anthropic.com/institute/measuring-pace-of-ai-development
- 2026年8月原型指数：26% AL4（AI主导，人监督）、>90% AL3+（包含AL4），没有在所测类别报告AL5。厂商自报、非独立审计；不是原创发现比例。
- 代际反馈/RSI为分析机制，不声称完全自主递归改进或智能爆炸已经完成。记忆文件/Skills不等于模型权重持续学习。
- 员工、组织、估值溢价判断为方向性分析，不是投资建议。

## 文件验证

- 最新27页，原第3/4页合并，删除SpaceX募资纪录支线；V3及更早版保留。
- 原生图表与工作簿10个；Keynote显示用可编辑矢量兼容层，两个层的数据均由同一生成器产生。
- 通过PPTX结构校验；Keynote导入27页，导出KEY/PDF；PDF渲染27页并逐组视觉检查。
- 过程审计只在本文件与演讲备注中，不出现在页脚。
- 本次只修改第09/10页，保持27页与IPO→收入→编码/Agent→AGI主线；两页Keynote渲染已逐页检查，修正Terminal配置注释与末行重叠。
