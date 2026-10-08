# V5（Claude）来源与叙事审计

本文件以 V4 审计为基础。V4 已核验的条目原样保留在下方「继承自 V4 的审计」；
V5 新增与重做页面的来源、口径与边界集中记在开头的「V5 增量审计」。

检索日期：2026-10-04；IPO纪录修正：2026-10-05。主题：Anthropic 2万亿IPO的背后：编码模型与AGI。

## 新第 31 页：ARR 与估值双轨（2026-10-08）

插在第 30 页（OpenAI 逐代追赶）之后，全稿 42 页；原第 31 页起顺延一页。数据为用户提供的 28 条多来源汇总（ARR 15 条、估值 13 条），原样保存在 `arr_valuation_user_supplied.tsv`，本次未逐条独立核验。

| 状态 | 数据点 | 说明 |
| :--- | :--- | :--- |
| ✅ | Anthropic ARR 约 $1B（2025 初）/ >$5B（2025.08）/ $14B（2026.02）/ >$47B（2026.05） | 与第 10 页官方 run-rate 口径一致；汇总把 >$5B 记为 2025-09-01 |
| ✅ | Anthropic E / F / G / H 轮投后 $61.5B / $183B / $380B / $965B | 官方融资公告 |
| 🔶 | OpenAI $300B（软银轮）、$852B（$122B 轮） | 汇总标注 OpenAI 官方 / Reuters，本次未取得原文 |
| ❌ | OpenAI 全部 ARR 点（$8B → $69B） | 只来自汇总所列二手来源；“2.6 倍”和“GPT-5.6 Sol / GPT-6 Astra 驱动”是汇总的归因，页面只写时间共现 |
| ❌ | Anthropic $9B（2025 末）、$19B（2026.03）、$30B（2026.04）、$65B（2026.07）、$72B（2026.09） | 二手来源；$65B 的“泄露财报 + 首次经营利润”不上页面 |
| ❌ | Anthropic 条款书 $350B、二级 $1,350B；OpenAI 回购要约 $500B、Forge $894B、IPO 目标 $1,050B | 非一级融资口径，图中画空心点；$1,050B 取汇总给出的 $1.0–1.2T 目标区间 |

口径边界：ARR 是年化 run-rate，不是全年确认收入。两家口径（是否含云分成、是否按月度 ×12）未必一致，所以 2026.04 的交叉只说明所列数字的先后。估值线混合了投后、回购、二级成交和 IPO 目标。Anthropic 超过 $2T 的 IPO 目标（第 03 页，Reuters）没有画进图中，$1,350B 二级值与它并不冲突。横轴按真实日期等比例。

## 新第 04 页：Anthropic 是谁（2026-10-07）

插在第 03 页之后，全稿 41 页。下方所有历史记录中的页码均为插页前页码。核实结果：✅ 一手来源已核实；🔶 只有权威二手来源；❌ 未核实，不上页面。

### 谁创立的

- ✅ 2021 年 1 月成立（注册日 2021-01-26，Wikipedia「Anthropic」）。
- ✅ Anthropic 是 PBC：见官方 https://www.anthropic.com/company 。
- 🔶 「七位联合创始人」来自 Reuters 2026-09-28/29 所见的 S-1 草案。报道点名了 Dario Amodei（CEO）、Daniela Amodei（总裁兼董事长）、Tom Brown（首席算力官）、Chris Olah。Wikipedia 信息框列了八人，多出 Jared Kaplan、Jack Clark、Ben Mann、Sam McCandlish，同时正文写的是「七位前 OpenAI 员工」，两处没有对齐。页面写「七位」，只点名 Reuters 提到的人。Jared Kaplan 没有上页面，因为这次没有核实他是否算在七人之内。
- ✅ Dario 2016 年加入 OpenAI，任研究副总裁，2021 年离开（Wikipedia「Dario Amodei」）。Tom Brown 是 GPT-3 论文第一作者（arXiv 2005.14165）。

### 治理

- ✅ LTBT 页面 https://www.anthropic.com/news/the-long-term-benefit-trust （2023-09-19）：五名无财务利益的受托人，持有 Class T 股，按时间和融资里程碑逐步选任董事，「4 年内选出董事会多数」。脚注写明后续人员变动：Fontaine 2025-05 加入、Cuéllar 2026-01 加入、Bernanke 2026-07 加入。但官方公司页目前只列了 Shah、Fontaine、Bernanke 三人，和脚注对不上，所以页面不写受托人人数。
- 🔶 IPO 后的结构来自 Reuters（https://www.investing.com/news/stock-market-news/exclusiveanthropic-leaders-to-control-ai-lab-via-founder-llc-to-promote-public-good-over-market-forces-4921448 ，2026-09-28/29，Reuters 看到的 S-1 草案，Anthropic 不予置评），并由 Columbia CLS Blue Sky Blog 2026-10-02 文章交叉印证。具体是：Founder LLC 由创始人多数决定，指挥唯一一股 Class F，在关键事项上拥有 50.1% 表决权；7 席董事中 LTBT 选 4 席，Class A 与 Class F 选 3 席；公众持有 Class A，一股一票，是五类股份之一，不能单独选董事；创始人剩两人及以下时，特殊权利开始失效。这些都是**草案报道**，不是最终公开的注册文件，notes 里已写明。

### 算力

- ✅ Amazon：2024-11-22 新增 $4B，累计 $8B；AWS 是「主要云与训练伙伴」。来源 https://www.anthropic.com/news/anthropic-amazon-trainium
- ✅ Google：2025-10-23 宣布最多 100 万颗 TPU，2026 年上线「远超 1GW」，「价值数百亿美元」。来源 https://www.anthropic.com/news/expanding-our-use-of-google-cloud-tpus-and-services
- 🔶 Google 的股权投资金额：2023.10 投 $500M，并承诺后续 $1.5B；2025.03 再投 $1B。这些只见于 Wikipedia，没在官方页核实，页面只写「股东」，不写金额。
- ✅ Microsoft 最多 $5B、NVIDIA 最多 $10B，Anthropic 承诺采购 $30B Azure 算力（2025-11-18）。来源 https://www.anthropic.com/news/microsoft-nvidia-anthropic-announce-strategic-partnerships
- ❌ 不采用 `data/anthropic_funding_and_valuation_history.csv` 里「Google 持股约 10%」这类说法。「股东 = 供应商」只描述结构，不判断是否构成循环交易。

### 彩蛋与互动提问（只进 notes）

- ✅ Dario 2014-11 至 2015-10 在百度（Wikipedia）。Lex Fridman 访谈 #452 原话：「I first joined the AI world when I was working at Baidu with Andrew Ng in late 2014」，并说正是在语音识别工作中第一次感到「数据、算力、训练越多越好」。Deep Speech 2（arXiv 1512.02595）署名为 Amodei 等人，按字母排序，所以他排第一不代表他是一作。
- ✅ 2025-09-04 官方公告 https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions ：限制对象是「由不支持地区的公司直接或间接持股超过 50% 的实体」，不论这些实体在哪里运营。公告给出的理由是法律、监管与安全风险，包括可能被强制向情报机构提供数据、被用于蒸馏等。
- 🔶 百度经历与对华立场的关系：
  - 2026-06 Bloomberg《The Circuit》Emily Chang 长访谈（YouTube x2VHFgyawPE）。二手转述（websearchapi.ai）称，他在百度一年，印象深的是一句「在中国不在乎隐私」的随口话。
  - 中文论坛 linux.do 帖子标题称他表示「我对中国的看法与百度无关」。帖子返回 403，没能读到正文。
  - 原视频这次没有核实。
- 结论：没有证据支持「因为百度经历才封号」的因果关系。官方的理由是国家安全与合规，中国本来也不是支持地区。这个问题只作为可选的提问引子写进 notes，页面上只写「在百度做语音识别」这一条事实。

## 新第 21 页：推理模型 vs 编码 Agent 模型（2026-10-06）

- 插在原第 19 / 20 页之间，原第 20 页起顺延。插入第 04 页后，它现在是第 21 页。下方所有历史记录中的页码均为插页前页码。
- 本页是概念对照，不含任何分数；对比的是优化重心，不是互斥分类，也不是能力排名。
- DeepSeek R1：GitHub README 已核验，写明 R1-Zero「通过大规模强化学习训练、不以 SFT 为前置步骤」，报告 AIME 2024、Codeforces 和 SWE Verified。规则奖励（答案对错、格式）的描述出自论文 arXiv 2501.12948。
- OpenAI o1（2024.09）、o3 / o4-mini（2025.04）以及同期 Codex CLI：两个发布页直接访问都返回 403，这次没能复核原文。页面只用了「推理模型」「竞赛题为主要战场」这类定性描述；发布月份写在 notes 里，未在页面展示。
- Claude 3.7 Sonnet（2025.02，混合推理 + Claude Code 研究预览）、Claude 4（2025.05，思考与工具调用交替）沿用全稿已引用的官方发布页。
- 边界：推理模型同样能调用工具，Claude 同样有 extended thinking。右栏「算力花在工具调用之间」说的是思考放进了与仓库、终端的多轮交互里，不是说不思考。
- 本页刻意不放 Codeforces 与 SWE-bench 的交叉比较，避免把不同 harness、不同子集的分数并列。

## 新第 04 页：中国互联网 Top 10 对比（2026-10-06）

- 按用户要求插在原第 03 / 04 页之间，采用仓库 `docs/03_anthropic_valuation_and_arr_deep_dive.md` §1.2 的参考数据；原始数值保存在 `china_internet_market_cap_reference.json`。
- 腾讯5300、阿里2350、拼多多1500、美团1100、小米850、网易650、京东500、携程380、百度320、快手270，单位亿美元，合计13220亿美元。
- 20000 / 13220 = 1.512859，显示1.51倍；差额20000 − 13220 = 6780亿美元。
- 面积图整框=20000亿，十家公司占66.1%，剩余区域占33.9%；每个公司块按市值比例计算面积，白色分隔线为边界。详细金额不再逐项罗列在主视觉中。
- 仓库表格为2026年参考估算，缺少逐家公司报价出处和具体交易日，未重新验证Top 10排名；不含未上市公司，不称整个行业总和。Anthropic沿用全稿IPO目标估值，不是已经完成挂牌的市值。
- 按用户要求，数据来源和边界只留在notes与本审计，页面不加解释性脚注，沿用白底、珊瑚色强调与大数字风格。
- 下方历史记录中的页码是插页前的38页版本页码，原第04页起均顺延一页。

## V5 增量审计

构建日期：2026-10-05。相对 V4 新增 7 页、重做 6 页，不改动 V4 已审计的财务与评测数字。

### 总则

- 参考稿 `Anthropic_2T_IPO_Presentation.pptx`（33 页）与 `gemini_deck.md`（28 页，另一份稿）只被用来识别"V4 缺哪种叙事装置"，其中的数字一个都没有采用。
- 该参考稿存在自相矛盾与与官方公告冲突，已逐条记录在下面「参考稿冲突清单」，作为不采用的依据。
- 仓库 `data/*.csv` 继续不作为事实来源，理由见 V4 审计第 3 条。

### 新增页：05 同样的两万亿，被定价的不是同一种东西

- 沙特阿美约 $1.7T 为 IPO 定价时估值，沿用 V4 已核验来源：
  https://www.cnbc.com/2019/12/05/saudi-aramco-prices-shares-at-the-top-of-the-range-for-record-ipo-report-says.html
- Anthropic >$2T 为 Reuters 报道的上市估值目标，沿用 V4 来源。
- **口径不同已在页面上写明**：左为已完成定价的上市估值，右为尚未定价的目标估值，两者不在同一状态，不是同口径财务比较。
- 左右两栏的"定价基础 / 增长来自 / 每多卖一单位 / 本质上卖的"为性质对照框架，不是引自任何一方财报的科目。
- 右栏"每多卖一单位＝复制一份执行能力"描述的是软件的复制特性，不声称边际成本为零，也不声称已盈利；V4 第 11 页仍保留 $518B 云与算力义务与 >$8B 经营亏损。
- 不对两类资产谁更值得投资作判断。

### 新增页：06 走到两万亿，别人用了几十年

成立年份与市值首次突破 $2T 的年份，取公开资料整年数：

| 公司 | 成立 | 市值首破 $2T | 用时 |
| :--- | :---: | :---: | :---: |
| Microsoft | 1975 | 2021 | 46 年 |
| Apple | 1976 | 2020 | 44 年 |
| NVIDIA | 1993 | 2024 | 31 年 |
| Alphabet（Google） | 1998 | 2024 | 26 年 |
| Anthropic | 2021 | 2026（IPO 目标） | 5 年 |

- **这是全页最需要防守的口径**：前四家是二级市场市值首次突破，Anthropic 是 IPO 发行估值目标、尚未定价，两者不是同一种"达到"。页面副标题、尾注与右侧卡片三处都写明了这一点，右卡另注"口径不同，仅作尺度参照"。
- 不声称 Anthropic 已经是两万亿公司，不预测它一定达成。
- 未做通胀调整：2020 年的两万亿与 2026 年的两万亿购买力不同，已在尾注写明。
- 参考稿同一页把这五个数字直接并列、无任何口径说明，并额外写入未经核验的断言，本页不采用其表述。

### 新增页：20 真正变便宜的，是"再试一次"

- **本页不给任何金额与工时**。没有取得"同一个缺陷下人工耗时与 Agent 费用"的可核验同口径数据，因此不做 ROI 对比，避免编造。
- 参考稿同位置给出"资深工程师 3–4 小时 / $150–200"与"Agent 3–5 分钟 / $0.50"，四个数字均无来源，不采用。
- 本页只讲结构差异：串行一条线 vs 同时多条线。右栏六个任务名与进度条为示意，不是实际运行记录。
- 页面与结论行写明约束：并行度取决于授权范围、环境隔离与人能审查多少；不是所有任务都适合并行；每条线的产出仍需人审查后合并。
- 机制参考：
  https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
  https://www.anthropic.com/engineering/code-execution-with-mcp

### 新增页：29 什么是 AGI？本场只用三条标准

- 三条（持续学习、自主使用工具、自我迭代）取自本次大纲 3.1 的原文表述，是本演讲的工作定义，**不是业界统一判定标准，也没有公认的通过线**，页面尾注已写明。
- 三条都满足也不等于 AGI 达成，页面尾注已写明。
- 本页只给定义与"怎么判断有没有"的问题，不给当前进度评分；进度评估留在第 35 页门槛表，避免同一概念在两页用不同语气重复解释。
- 不借用任何厂商的能力分级命名。
- 相应地，第 30 页底部原有的三问（跨领域 / 留存经验 / 改进工具）已改为"每往右一档要多配什么"（授权范围 / 可恢复 / 审查量），消除与本页的重复。

### 新增页：02 / 12 / 28 章节过渡页

无数据，无新增论断，只交代该章要回答的问题。不进入任何引用。

### 重做页：07 估值曲线把 IPO 目标画进坐标系

- 数值与来源完全沿用 V4：E 轮 61.5 / F 轮 183 / G 轮 380 / H 轮 965（官方公告），IPO 目标 >2000（Reuters 报道）。
- 仅改变呈现：纵轴 0–2200，五点进同一坐标系。**已成交轮次用实线与实心点，尚未定价的目标用虚线段与空心点**，在图上即可区分状态，不把目标混同为已完成融资。
- 2021–2024 各轮因公开口径不一致未入图，尾注已写明，所以横轴不是从成立年起算。
- 横轴为事件点、不按时间等比例，尾注已写明。

### 重做页：08 年化收入曲线标出 Claude Code 发布点

- 数值与来源沿用 V4：2025 年初约 1、2025.08 >5、2026.02 14、2026.05 >47（官方 run-rate revenue）。
- 新增两条竖虚线：2025.02 研究预览（claude-3-7-sonnet 发布页）、2025.05 全面开放（claude-4 发布页）。
- **定位方式已在尾注写明**：首段"2025 年初 → 2025.08"按月份比例定位两个发布点；其余横轴仍为事件点，不按时间等比例。
- 尾注保留 V4 的因果边界：时间上的先后不等于全部收入增长都来自这一个产品。

### 重做页：18 同一对手，换一套 harness，差距就不一样

- 左栏（Artificial Analysis 独立复测，mini-swe-agent，66 题 × 3 次平均 pass@1）：Opus 5.5 max with fallback 59.6%，GPT-6 Astra max 59.1%。来源沿用 `benchmark_comparison_verified.json`。
- 右栏（各自发布配置）：Opus 5.5 xhigh 66.4%，GPT-6 Astra high 57.9%。来自同一 JSON 的 `official_cross_check`；其中 57.9 为 OpenAI 自报并由 Anthropic 发布页转述，**OpenAI 公告直接访问返回 403，未取得原文复核**，页面副标题已标"Astra 为 OpenAI 自报"。
- **两栏不可混用、不可相减**，页面尾注已写明：harness、effort、重复次数、是否含 fallback 都不同；8.5pp 不是模型能力差。
- Opus 的 fallback 可能调用其他模型，59.6 与 59.1 的 0.5pp 观测差不构成统计显著领先，沿用 V4 结论。
- V4 此页原含 Gemini 与 AA 综合指数；V5 把 Gemini 与综合指数整体移到第 26 页，此页只做两种口径的对照，避免同组数字在两页重复出现。

### 重做页：23 MCP → Skills 三层结构图

- 日期与来源沿用 V4：MCP 2024-11-25 发布；Skills 2025-10-16 发布、2025-12-18 成为开放标准。
- 由三行文字表改为三层堆叠图，底层最宽表示地基，向上收窄；右侧表示"调用往下、反馈往上"。
- 每层四个 chip 是对该层职责的举例，不是官方给出的完备清单。
- 页面保留 V4 的判断：三层解决不同问题，MCP 不是被 Skills 替代。

### 重做页：26 Gemini 反例改为斜率图

- 数值沿用 `benchmark_comparison_verified.json`：AA 综合智能指数 v4.3.2 为 Opus 5.5 = 58、GPT-6 Astra = 53、Gemini 3.1 Pro Preview = 30；Terminal-Bench 4.0 平均 pass@1 为 59.6% / 59.1% / 4.0%。
- **斜率图的量纲风险是本页最大的表达风险，已在页面尾注正面写明**：左轴是指数分（0–60，不是百分比），右轴是通过率（0–80%），两轴各自独立归一化；连线只表示同一模型在两套评测中的相对位置，**不是分数变化，也不可相减**。
- 59.6 与 59.1 在右轴几乎重合，为可读性把两个标注上下分开，并用引线指回真实点位；尾注已写明这一处理。
- 只说明本次型号在本次配置下终端评测弱，不据此断言 Google 整体衰落，不编造组织、训练或产品关停原因。参考稿在这一点上写了四项带精确百分比的"致命缺陷"与组织归因，全部无来源，不采用。

### 重做页：32 物理世界改为闭环图

- 仍为机制示意，不是 Claude 机器人实测，也不是产品能力承诺；页面尾注已写明。
- 由三个并排文字块改为四节点闭环（模型与代码 → 设备接口与控制系统 → 物理动作 → 传感器与测量 → 回到模型），中心是"每一步都要过这道闸：设备授权 / 安全保护 / 仿真先验证 / 现场随时可停"。
- 新增一句对比：软件里失败只花一次重试，物理世界里失败可能不可逆。这是本页改为闭环的理由，不是对任何系统可靠性的量化断言。

### 行文去重（2026-10-05）

按「副标题 / 页内元素 / 脚注 / 结论行」四者分工交叉比对全篇，共改 30 处：副标题只交代量纲、口径与这页在看什么，不再复述图内标签或结论行；脚注只说边界，不照抄页内已有文字。

其中一处是事实矛盾而非措辞问题：第 26 页副标题原写"同一套第三方评测"，与同页脚注"左右是两套不同量纲的评测"冲突，改为"同一家第三方机构的两套评测"。

第 33 页原 23pt 强调行与结论行同义，降级为脚注并补上 AL1–AL5 层级定义与"厂商自报、AL3+ 与 AL4 为包含关系不可相加"的边界。

### 重做页：27 OpenAI 的正例（2026-10-06：扩展到三代评测）

本版按用户最新提供的 25 条汇总记录重绘，替换此前仅覆盖 2025-11 至 2026-04 的图及右侧费用卡。原表完整保存于 `terminal_bench_user_supplied.tsv`，由生成器读取，不在代码中另抄一套分数；日期、型号、系列、harness 和来源标签均原样保留。

**数据状态**：用户提供的多来源资料，未在本轮逐条独立核验，不称“统一复测”或“已验证的官方榜”。Source 列是原表的来源标签，不是本轮已访问的逐条证据。Score 与 Source 括号中的替代数字可能不同（如 58.1 / 53.5、88.0 / 88.8、88.4 / 89.5 / 87.3），图中只使用 Score 列，不平均、不择高。

| 独立图 | 记录数 | OpenAI 轨迹 | Claude 轨迹 |
| :--- | ---: | :--- | :--- |
| Terminal-Bench 2.0 | 9 | 5.1 45.5（独立点）；5.1-Max 58.1 → 5.2 62.9 → 5.3 Codex 77.3 → 5.4 75.1 → 5.5 82.0 | Opus 4.5 69.5 → Opus 4.6 73.2；Sonnet 5 80.4（独立点） |
| Terminal-Bench 2.1 | 6 | 5.6 Sol 88.0 → 6 Astra 88.4 | Opus 4.8 74.6 → Fable 5 86.0 → Opus 5 89.1 → Opus 5.5 87.6 |
| Terminal-Bench 4.0 | 10 | 5.6 Sol 基线 37.3 → 6 Astra 58.2；6 Sol 44.4 → 6.1 Sol 55.1（单独虚线支线） | Opus 5 基线 52.3 → Mythos 5.1 60.9 → Opus 5.5 66.4 → Sonnet 5.5 70.6；Sonnet 5 基线 10.3、Fable 5.1 57.9（独立点） |

20 个实际模型（OpenAI / Anthropic 各 10 个），同型号在不同评测版本上重复出现不算新模型。三个 Baseline 记录是旧模型在新评测中的参考成绩，不是新型号。

**制图边界**：

- 2.0 / 2.1 / 4.0 各自独立坐标系，不跨版本连线、不计算跨版本差值；不把 2.0 与 2.1 合并成同口径历史曲线。
- 各图横轴按本版本原表日期排序后的事件等距排列，不是等时距。日期仅作资料所列日期，不称官方发布日期，也不据发布日期推断该时点已完成新版本评测。
- 原表 GPT-5.3 Codex（01.15）、Opus 4.6（01.20）等日期与此前审计的官方发布日期（02.05）冲突；本版没有沿用“同日反超”“领先三次易手”等旧结论。原日期保留以便追溯，而非重新认证。
- 同版本仍有多个 harness、reasoning effort 与来源。连线只表示所列公开配置的迭代轨迹，不是等条件模型排名，也不是严格的旗舰能力上限。
- 4.0 的 Sol 效率型号单独虚线，不接到 Astra 前沿线上；3 个基线用空心标记。Fable 5.1 与 Sonnet 5 基线单独标点，不把所有产品线拼成一条旗舰曲线。
- 本次资料没有耗时或费用，删除旧版“时间 −47%、费用 −86%”及相关卡片，不从型号定位推导已实测的成本优势。

**视觉**：三张等高小图，共用 Claude 珊瑚色 / OpenAI 灰绿色图例；所有 25 条记录均有点与型号、分数标签。仅保留一句页内口径说明，完整来源与限制放在本文件及演讲备注。

### 新增页：38 结束页

无数据。像素吉祥物按用户提供的参考图逐格量化、用原生方块重绘（coral 实色，眼睛镂空），非 Claude Code 官方素材文件；跨端渲染为纯矩形，无图片依赖。

### 参考稿冲突清单（不采用的依据）

逐条来自 `Anthropic_2T_IPO_Presentation.pptx`（33 页）：

1. **自相矛盾**：第 11 页"Gemini 3.1 Pro 仅 46.2%"与第 19 页"38.0% Terminal-Bench 4.0"，同一稿、同一模型、同一评测，两个互相冲突的数，且都与 AA 实测 4.0% 不符。
2. **融资线错位**：第 5 页"G 轮 / Claude Code（2025.06）1800 亿"取自 `data/anthropic_funding_and_valuation_history.csv`；该表缺 E 轮与 F 轮，并把 2025-06 的 1800 亿标为 G 轮。官方公告为 E 轮 $61.5B（2025-03）、F 轮 $183B（2025-09）、G 轮 $380B（2026-02）。
3. **把未披露数字当实绩**：第 7 页"2026 Q3 突破千亿美元年化大关"取自同目录 CSV 的 `2026-Q3 = 100000`；Reuters 正文未披露该数，V4 与 V5 均不采用。
4. **SWE-bench 口径错误**：第 10 页"Claude Sonnet 5.5 98.1%"取自 `frontier_ai_coding_agent_competitors.csv`；5.5 代 system card 已不再报告 Verified，只报 Pro（Sonnet 5.5 = 81.3%）。同页"Claude 3.7 Sonnet 70.3%"是定制 scaffold / 489 题的结果，标准 500 题 pass@1 为 62.3%。
5. **无来源的市场与成本数字**：第 8 页"开发者 68.4% / 企业 80% 绑定"、第 12 页"$150–200 vs $0.50、3–5 分钟"、第 28 页"8x 迭代提速"，均未给出来源。
6. **无来源的时间表**：第 30 页"2027–2028 RSI 跨越临界视界、2029 全自主 AGI 降临"。V5 第 35 页继续采用 V4 的做法：不猜日期，只列可观察的门槛。

另一份 `gemini_deck.md`（28 页）与上述 pptx 不是同一稿，且不按本次大纲组织，其中"14.2% 格式崩溃率 / 61.8% 惰性省略率 / 28.5% 误拒率 / 42.0% 寻址失误率 / Claude 仅 0.12%"等均无来源，整份不作为参考。

### 文件验证（V5）

- 38 页；PPTX 结构校验通过（`validate.py`：All validations PASSED）。
- `compat.py` 修正三处生成器不规范并自检剩余为 0：绝对图表 Target 6 处、二维图表幽灵 `axId` 10 处、`multiLvlStrRef` 10 处。其中幽灵 `axId` 是 PowerPoint 弹出"需要修复"的实际原因。
- 自动版面检查：逐页解析 PPTX 几何，文本框越界 0 处、显著重叠 0 处。
- Keynote 导入 38 页，导出 KEY 与 PDF；PDF 渲染 38 页，新增与重做的各页逐页目视检查。
- **未验证**：本机未安装 PowerPoint，Windows / Mac 版 PowerPoint 的实际渲染未经目视确认。
- 字体：每个 run 显式声明 `latin` / `ea` / `cs` = PingFang SC；Windows 无此字体会发生替换，所有文本框带 `fit:'shrink'`（`<a:normAutofit/>`）兜底，溢出时缩字号而不跑版。
- 过程审计只在本文件与演讲备注中，不出现在页面与页脚。

## 继承自 V4 的审计

以下为 V4 审计原文，仅调整标题层级，内容未改。其中的页码与页数指 V4 的 30 页版本。

### 与 V3 的关键纠正

1. Anthropic 官方明确确认 2026-06-01 秘密提交 S-1 草案。之前因媒体访问失败将整个 IPO 降成“想象”不恰当。新版恢复用户的 IPO 主线。
2. 用户提供的 Euronext 页面转载 Reuters 2026-09-28 报道，可完整读取。报道说上市可使估值超过 $2T；这是真实报道的目标，不是本演讲虚构情景，也不是已经完成定价/上市市值。6月官方公告未确定股数与价格。
3. 仓库财务 CSV 不是最新可用事实：融资轮次、金额、日期与公司公告存在冲突。没有逐点证据的季度 ARR 不使用。
4. 公司公告使用 run-rate revenue，不能等同全年确认收入或保证续约的订阅 ARR。演示统一标记“年化收入”。Claude Code 不等于公司全部业务。
5. ARR × 18–20 为收入倍数，而非 PE。100–111B 是倒算所需收入，不冒充公司已披露收入。

### 第一章：IPO 与财务

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

### 第二章：编码与Agent

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

### 第三章：AGI

- 工具使用、持续学习、自我迭代是本演讲的工作定义/框架，不声称AGI已有统一公认判定标准。三项不是人类级通用智能的充分证明。
- 物理连接图为机制示意，不是Claude机器人实测；需要设备授权、传感器、保护与现场反馈。
- 研发指标：https://www.anthropic.com/institute/measuring-pace-of-ai-development
- 2026年8月原型指数：26% AL4（AI主导，人监督）、>90% AL3+（包含AL4），没有在所测类别报告AL5。厂商自报、非独立审计；不是原创发现比例。
- 代际反馈/RSI为分析机制，不声称完全自主递归改进或智能爆炸已经完成。记忆文件/Skills不等于模型权重持续学习。
- 员工、组织、估值溢价判断为方向性分析，不是投资建议。

### 文件验证（V4 当时的记录）

- 最新27页，原第3/4页合并，删除SpaceX募资纪录支线；V3及更早版保留。
- 原生图表与工作簿10个；Keynote显示用可编辑矢量兼容层，两个层的数据均由同一生成器产生。
- 通过PPTX结构校验；Keynote导入27页，导出KEY/PDF；PDF渲染27页并逐组视觉检查。
- 过程审计只在本文件与演讲备注中，不出现在页脚。
- 上次修改第09/10页，保持27页与IPO→收入→编码/Agent→AGI主线；两页Keynote渲染已逐页检查，修正Terminal配置注释与末行重叠。

### Gemini 五页吸收：不增页数

当前参考 `Anthropic_2T_IPO_Presentation.pptx` 为33页，吸收13/14/24/25/31页的表达作用，不复制其大段文字或未经核验数字。对应本版12/14/20/21/27页，其他页、10个原生图表及财务/评测JSON不改。

- 12：同一个支付重试缺陷，Chatbot回答、Copilot协作、Agent推进一段任务；保留查/读/改/跑/再修和可审查交付。三种方式可以共存，不是产品的严格历史分类；轨迹是教学示意。
- 14：人肉胶水是常见流程比喻，不是对员工价值的贬低或公司现状调查。导出→匹配→核对→汇报图接原对账表，980−950=30、1200−1200=0、600−0=600。脚本处理规则运算，异常含义由业务核对；不自动改账。
- 20：建议→协作→任务委托→持续运行为交互方式，非R&D AL级别。持续运行要有调度、权限、监控与恢复，不是通用AGI证明。跨领域、留存经验、改进工具仍作为AGI讨论的三个问题。
- 21：数字义肢指调用已授权工具；石斧指为任务编写适用脚本。代码不能制造任意工具、不能绕过授权，脚本仍需测试与校验。
- 27：用同一30/600差额呼应目标选择、业务解释、下一步行动，留下员工/研发/公司三个具体落点；不使用伪工作、被淘汰等训导语。执行更便宜是方向性判断，不称已无限廉价。
- 27页PPTX结构验证通过；从最新PPTX重新导入Keynote并保存KEY、导出PDF；五页实际渲染已检查并修正断行。

### 2026-10-05：30页视觉升级与产品路线转折

之前两页成绩清单拆为四页，新增一页转折，后续页码顺延3页。原五页吸收现在是15/17/23/24/30页。第09产品路线、第10三大Verified里程碑、第11完整Verified与独立Pro、第12旧Terminal版本、第13新Terminal4.0；第三方对照在14页，仍不把官方66.4替换AA59.6。财务与评测JSON未改。

### SVG与可编辑数据层
- 百格与数据图保留PPTX可编辑形状；10个原生图表/工作簿仍在。SVG源图在 `assets/`，机制图与图标嵌入PNG供Keynote显示，不把普通数据图改成不可编辑SVG截图。
- 33.4/62.3/96百格每格1个百分点，部分格按比例填充。平均pass@1不等同逐题成功记录，不能说一定解出480个特定问题。
- Verified完整历史连接是记录导览；同月家族节点横向等距、不表示等时距；不声称单一模型单调提升。Pro与HumanEval独立。
- Terminal三个旧版所示最高点50/82/88%，不是全榜最新最优；每版零起点。不说所有旧版本接近满分。4.0单独展示0–100，不与旧版本相减。
- 官方4.0说明： https://www.tbench.ai/news/terminal-bench-4-0 。校准资源、修19题、删8题；2道因饱和（所有最新家族/档位均5/5解出）、2拒答、2公开答案、2质量或平台问题。不能推断Claude单独逼出所有新版本，也不称4.0全部新题；官方未来5.0为new tasks。正文保存 `evidence/visual_revision_0.txt`。

### 产品路线边界
- Anthropic当前模型目录： https://platform.claude.com/docs/en/about-claude/models/overview 。主目录文本/图像输入、文本输出，无独立图像/视频/语音生成产品线；不证明内部完全没有研发。
- 图像功能： https://support.claude.com/en/articles/9002504-can-claude-produce-images 。官方说不生成照片/插画，但可以HTML/SVG创建图表、能理解图像；不能说不具备任何图形生成能力。
- voice mode： https://support.claude.com/en/articles/11101966-using-voice-mode 。可语音双向对话，不写没有语音能力；独立公开语音生成模型与语音界面区别。未证明幕后模型来源，不推断外包或自研。
- Google Veo： https://deepmind.google/models/veo/ ；原Imagen链接目前指向Gemini图像入口 https://deepmind.google/models/imagen/ ；Gemini Audio： https://deepmind.google/models/gemini-audio/ ，包括3.8 Flash TTS。图中不另展开Pro/Flash型号谱系。
- OpenAI： https://platform.openai.com/docs/models 公开GPT-Image及TTS/Realtime； https://developers.openai.com/api/docs/guides/video-generation 标注Sora2及Videos API于2026-09-24关闭，因此图中写Sora·已停服，不写仍可用。先前直接Sora发布页403不是否证；以上文档取得正文。
- 来源保存在 `evidence/product_scope_1.txt`（Veo）、`product_scope_2.txt`（Gemini图像）、`product_scope_3.txt`（OpenAI模型）、`product_scope_4.txt`（Claude图像）、`google_audio.txt`、`openai_video.txt`、`visual_revision_1.txt`（Claude目录）、`visual_revision_2.txt`（voice mode）。
- 估值仍为>$2T IPO目标，不写第一家已经超过2T；未取得所有纯AI公司可比估值排名。Google公司归类用户只作提示，不写deck。
- 当前30页，PPTX校验通过、Keynote导出30页；新5页经实际渲染检查，修正历史数值标签碰线与Terminal短条表达。
