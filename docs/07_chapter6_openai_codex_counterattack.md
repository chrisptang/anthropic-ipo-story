# 第六章：知耻后勇 —— OpenAI 的 Codex 反攻与双寡头格局的形成

> **章节定位**：补全竞品全景中最大的一块拼图。复盘 OpenAI 如何从"16 倍领先者的傲慢"跌入开发者心智崩塌的耻辱纪元，再到 ChatGPT 的 Code Red 应急提质与 Codex 本地、云端双线迭代，最终以史无前例的算力军备与价格战发动反攻。本章回答投研最关键的问题：**当 OpenAI 持续投入编码 Agent 时，Anthropic 的护城河还守得住吗？**  
> **数据时间**：2026 年 10 月  
> **关联报告**：
> - 演进数据：[`data/claude_agent_benchmark_evolution.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/claude_agent_benchmark_evolution.csv)
> - 竞品数据：[`data/openai_codex_benchmark_evolution.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/openai_codex_benchmark_evolution.csv)
> - 估值大盘：[`docs/03_anthropic_valuation_and_arr_deep_dive.md`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/docs/03_anthropic_valuation_and_arr_deep_dive.md)
> - 认知模型：[`docs/04_coding_models_as_general_agent_backbone.md`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/docs/04_coding_models_as_general_agent_backbone.md)
> - AGI 演化：[`docs/05_chapter4_rsi_and_safety_paradigms.md`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/docs/05_chapter4_rsi_and_safety_paradigms.md)
> - 商业终局：[`docs/06_chapter5_business_restructuring_and_saas_disruption.md`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/docs/06_chapter5_business_restructuring_and_saas_disruption.md)

---

## 1. 耻辱纪元：OpenAI 如何在 18 个月内失去开发者世界

2023 年底的 OpenAI 拥有开发者市场的绝对垄断起点：GPT-4 是 Copilot 的独家供模，ChatGPT 是"AI"的代名词，营收是 Anthropic 的 16 倍。然而正是这份傲慢，让它在三场标志性溃败中，亲手把开发者王座交给了 Anthropic。

### 1.1 无声失血期（2024）：Claude 3.5 Sonnet 的"静默政变"

* **2024 年 6 月**，Claude 3.5 Sonnet 发布。没有发布会烟花，没有高管直播，但 Cursor、Aider 的默认模型选项在数周内集体倒戈；
* OpenAI 管理层当时的判断是"代码补全只是垂类场景"，资源重心放在 ChatGPT 消费端与多模态演示上；
* **量化失血**：第三方网关口径下，OpenAI 在编码场景 Token 调用份额从 2024 年初的约 70% 滑落至年底的不足 40%——而管理层直到 2025 年才承认这不是周期性波动，而是结构性叛逃。

### 1.2 珍珠港时刻：Claude Code 发布（2025.02）

* **2025 年 2 月**，Anthropic 随 Claude 3.7 同步放出 Claude Code 研究预览版——一个终端原生、能跑 80 轮自愈循环的自主编程 Agent；
* 同一时期 OpenAI 在做什么？忙着发 Sora 视频生成、Operator 浏览器代理和 Deep Research——**三条产品线，没有一条对准开发者每天敲击键盘的 8 小时**；
* OpenAI 手里唯一像样的一线入口是 GitHub Copilot——但那是微软的资产。更致命的是，GitHub 早在 2024 年 10 月就把 Claude 接入了 Copilot 模型选择器，到 2025 年中，Copilot 的 Agent 模式里 Claude 已事实上成为多数开发者的首选供模。**OpenAI 连自己独家供模的渠道货架都守不住。**

### 1.3 Windsurf 事件：收购史上最屈辱的 90 天（2025.04–07）

这是理解 OpenAI 追赶叙事必须解剖的一段公案：

```
2025.04                2025.07 上旬               2025.07 中旬
┌──────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
│ OpenAI 洽购      │   │ 谈判崩盘：            │   │ Google $2.4B 反向雇佣 │
│ Windsurf ~$30亿  │──►│ 微软 IP 条款卡壳，    │──►│ CEO Varun Mohan+核心  │
│ 想要 IDE 入口    │   │ 团队股权诉求谈崩      │   │ 团队+技术授权         │
└──────────────────┘   └──────────────────────┘   └──────────┬───────────┘
                                                             │
                                   ┌─────────────────────────▼───────────┐
                                   │ 72 小时后：Cognition 收购 Windsurf    │
                                   │ 剩余公司与产品（Devin 获得 IDE 外壳） │
                                   └─────────────────────────────────────┘
```

* **三重羞辱**：没买到资产；把最懂 Agentic IDE 的核心团队送进了 Google；让直接竞对 Cognition 用捡漏价补齐了产品线；
* **战略含义**：OpenAI 未能通过收购获得 Windsurf 的 IDE 入口，需要继续发展自建产品；此时 Codex CLI 已于 2025 年 4 月发布，云端 Codex 也已于 5 月推出。Windsurf 收购受挫影响的是 IDE 布局，不能据此推断 OpenAI 当时没有自己的编码 Agent 入口。[官方 Codex CLI 发布说明](https://openai.com/index/introducing-o3-and-o4-mini/)、[云端 Codex 发布说明](https://openai.com/index/introducing-codex/)

### 1.4 GPT-5 发布遇冷（2025.08）：压垮耐心的最后一根稻草

* GPT-5 采用自动路由架构，发布首日即因路由误判引发大规模负评；仓库记录其 SWE-bench Verified 成绩为 74.9%。后续发布的 Claude 4.5 Sonnet 在仓库中记为 82.4%，但这是跨发布期的版本对照，不能作为 GPT-5 在 2025 年 8 月发布时已落后该模型的证据；
* 社区因 GPT-4o 下架爆发抗议，Sam Altman 不得不公开道歉恢复；
* 开发者社区形成的残酷共识：**"OpenAI 会做聊天，Anthropic 会做工程。"**

---

## 2. Code Red 与 Codex：ChatGPT 应急提质与编码产品持续迭代（2025 Q4 – 2026 Q1）

### 2.1 耻辱的量化：当倍数开始反向收缩

到 2025 年底，两组数字终于刺穿了 OpenAI 的叙事防线：

* 开发者侧：编码 Agent 场景的 Token 份额跌至 **~18%**，Claude Code 单品 ARR 突破 **$25 亿**；
* 收入侧：ARR 倍数从 2023 年的 16.0x 被压缩到 **1.4x**（$130 亿 vs $90 亿），按曲线斜率推算，2026 年内被反超已成定局。

**2025 年 12 月 1 日**，据 Reuters 转述 The Information 对内部备忘录的报道，Sam Altman 宣布 "Code Red"，要求优先改善 **ChatGPT 的产品质量**，并推迟广告等其他项目。同期竞争背景包括 Google Gemini 3 的压力；公开报道不能支持将这次备忘录解释为"全公司资源转向 Agentic Coding 与 Agent 平台"。[Reuters 报道](https://www.investing.com/news/stock-market-news/openai-plans-to-improve-chatgpt-and-delay-initiatives-such-as-advertising-the-information-reports-4385026)、[Reuters 对 Gemini 竞争背景的分析](https://www.breakingviews.com/columns/breaking-view/openais-panic-button-risks-sounding-false-alarm-2025-12-02/)

### 2.2 两条竞争应对：ChatGPT 提质与 Codex 迭代

* **Code Red 的直接目标**：集中精力改善 ChatGPT，并推迟广告等项目；这是消费端产品的应急提质；
* **Codex 的发展有独立时间线**：2025 年 4 月发布本地 CLI、5 月推出云端 Agent，随后继续更新编码模型与开发者工具，这条路线在 Code Red 之前已经展开；
* **本文的战略解读**：OpenAI 同时面对通用助手与编码 Agent 两个战场的竞争。不能把 Codex 的发展归因于这次备忘录，也不能据此推断内部汇报关系、团队合并或收购安排。

### 2.3 微软和解：资本重组换来的自由（2025.10）

* OpenAI 完成营利性重组（PBC 架构），微软持股 ~27%，IP 许可延至 2032 年，微软放弃算力优先采购权（ROFR）；
* **战略含义**：OpenAI 终于摆脱 Azure 独家绑定，理论上可以学 Anthropic 的"多云中立"打法——虽然实际上它反而走向了更重的自建算力路线（见 §3.3）。

### 2.4 GPT-5-Codex（2025.09–10）：第一记有效反击

* 面向 agentic coding 的 GPT-5 系列专用模型：仓库记录 SWE-bench Verified 78.2%、SWE-bench Pro 51.4%，较 GPT-5 的对应成绩提升。编码专项训练此前已经存在：2025 年 5 月发布的 codex-1 就使用真实编码任务的强化学习训练。[codex-1 官方说明](https://openai.com/index/introducing-codex/)
* 同期动作：Codex CLI 用 Rust 重写、DevDay 2025 发布 AgentKit、Codex 正式 GA 并接入 Slack——**OpenAI 第一次把 Codex 当作一个产品平台而非研究副产物来经营。**

---

## 3. 2026 反攻三部曲：产品深化、模型爬坡、军备竞赛

### 3.1 产品：从本地与云端并行，到持续完善开发者工作流

Codex 在 2025 年就同时布局本地终端与云端异步任务。下面对照的是 **2025 年 5 月发布的云端 Codex** 与 Claude Code 的典型交互，不能代表整个 Codex 产品线，也不能据此判断 OpenAI 当时缺少终端路线：

| | 云端 Codex（2025.05） | Claude Code（2025） |
| :--- | :--- | :--- |
| 交互范式 | 云端沙箱 + 异步任务队列 + PR 审阅 | 本地终端 + 实时交互 + 同机执行 |
| 心智模型 | 把开发者当"验收需求的 PM" | 把开发者当"并肩作战的同事" |
| 反馈延迟 | 任务排队分钟级 | 命令回显亚秒级 |
| 失败姿态 | 任务失败交还一个坏 PR | 报错当场自愈、原地重试 |

* **Codex CLI（2025.04.16）**：开源终端编码 Agent，直接在用户电脑上处理本地代码，最初支持 o3、o4-mini 等模型；本地闭环路线从此时就已存在。[官方发布说明](https://openai.com/index/introducing-o3-and-o4-mini/)
* **云端 Codex（2025.05.16）**：在独立云端沙箱中并行执行任务，支持读取代码、运行测试和提交 PR。它与 CLI 是并行发展的两种工作方式。[官方发布说明](https://openai.com/index/introducing-codex/)
* **GPT-5.2-Codex（2026.01，按仓库记录）**：后续编码模型迭代，应理解为既有产品路线的能力更新，不能标为 OpenAI 首次转向终端，或据此宣称其放弃云端任务；
* **Codex Fleet（2026.05）**：并行 Agent 舰队与 headless 批量模式，对标 Claude Code 在企业 CI/CD 里的无人值守用法；
* **分发奇招**：ChatGPT Atlas 浏览器 + 8 亿周活的消费漏斗，把 Codex 捆绑进 Plus/Pro/Enterprise 订阅——用 C 端流量池倒灌 B 端产品，这是 Anthropic 没有也不可能有的武器。

### 3.2 模型：Benchmark 爬坡曲线

| 模型 | 发布 | SWE-bench Verified | SWE-bench Pro | T-Bench 2.0 | T-Bench 3.0 | T-Bench 4.0 | TAU (Air/Ret/Bank) | BFCL | OSWorld | 输入/输出 ($/M) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| GPT-5 | 2025-08 | 74.9% | 43.8% | 37.6% | - | - | 61.5/72.0/18.4% | 89.6% | 24.8% | $1.25/$10 |
| GPT-5-Codex | 2025-09 | 78.2% | 51.4% | 44.0% | - | - | 65.8/77.5/21.0% | 92.4% | 27.9% | $1.25/$10 |
| GPT-5.2-Codex | 2026-01 | 85.6% | 63.9% | 53.8% | 42.5% | - | 70.4/82.6/26.8% | 95.0% | 33.5% | $1.50/$10 |
| GPT-5.5-Codex | 2026-05 | 90.3% | 74.8% | 60.2% | 54.6% | 47.9% | 75.0/86.5/30.2% | 96.7% | 38.0% | $1.30/$8 |
| GPT-6-Codex（预览） | 2026-08 | 93.6% | 83.5% | - | 61.0% | 59.2% | 78.6/90.1/34.4% | 97.9% | 43.6% | $2.50/$15 |
| **Claude Sonnet 5.5** | **2026-09** | **98.1%** | **91.2%** | **75.3%** | **68.5%** | **70.6%** | **84.2/94.8/40.1%** | **98.8%** | **47.2%** | **$2.00/$10** |

**比较口径**：以下沿用仓库记录的成绩，并逐项注明双方发布时间。它们是跨发布期的模型版本对照，不是"同期最强"榜单，也不能直接串成历史市场差距的收敛曲线。

| OpenAI 模型（发布） | Claude 模型（发布） | SWE-bench Pro（OpenAI / Claude） | Claude 高出（百分点） |
| :--- | :--- | :---: | :---: |
| GPT-5（2025.08） | Claude 4.5 Sonnet（2025.11） | 43.8% / 58.7% | 14.9 |
| GPT-5-Codex（2025.09） | Claude 4.5 Sonnet（2025.11） | 51.4% / 58.7% | 7.3 |
| GPT-5.5-Codex（2026.05） | Claude Fable 5.0（2026.06） | 74.8% / 82.4% | 7.6 |
| GPT-6-Codex 预览（2026.08） | Claude Sonnet 5.5（2026.09） | 83.5% / 91.2% | 7.7 |

OpenAI 自身的 SWE-bench Pro 成绩在仓库中从 GPT-5 的 43.8% 提升至 GPT-6-Codex 预览的 83.5%，说明其编码能力持续爬坡。另按双方截至 2026 年 10 月所列版本对照，Terminal-Bench 4.0 为 59.2% vs 70.6%，相差 11.4 个百分点；这描述的是当前所列版本的差异，不是 2026 年 8 月的同期分差。

### 3.3 经济战：价格战 + 捆绑 + 人类史上最大算力囤积

OpenAI 的反攻不只是产品战役，更是一场资产负债表级别的经济战：

1. **价格奇袭**：GPT-5.5-Codex 定价 $1.30/$8，比同档 Sonnet 5.5 低约 35%——明确用亏损换份额的 challenger 定价；
2. **订阅捆绑**：Codex 额度打包进 ChatGPT 全系列订阅，边际分发成本趋近于零，对 Anthropic 的纯 API 计价模型形成不对称压力；
3. **算力军备（2025 全年累计披露）**：
   * Stargate 计划（$500B 框架）；
   * Oracle 约 $300B / 4.5GW 云合同；
   * NVIDIA 最高 $100B 投资换部署协议；
   * AMD 6GW GPU + 1.6 亿股认股权证；
   * Broadcom 10GW 自研推理芯片（预计 2027 年起流片落地）；
   * **逻辑**：这些史无前例的算力承诺，本质是为 GPT-6 时代的超大规模 RL 环境（Agent Gym）储备弹药——OpenAI 想用钱把"agentic 训练数据飞轮"的时间差买回来。

---

## 4. 战果盘点（2026.10）：成绩提升，但所列版本对照仍有差距

### 4.1 赢回的阵地

* **指标止跌**：编码 Agent Token 份额从谷底 ~12–18% 修复至 **~28%**（Anthropic 仍占 ~63%）；
* **Codex 业务线**：年化 ARR 约 $140 亿，其中约四成来自 Copilot/企业捆绑渠道；
* **价格敏感市场**：中型企业与新兴市场开发者大量转向 GPT-5.5-Codex——"够用且便宜 35%"；
* **微软货架**：Copilot 仍保留 OpenAI 默认槽位，企业批量部署场景守住了基本盘。

### 4.2 没赢回的阵地

* **顶级开发者心智**：Cursor、Cognition Devin、Aider、Windsurf 的核心 Agent 模式仍以 Claude 为默认引擎——一线工程师用脚投票的结果没有逆转；
* **终端自主性**：Terminal-Bench 4.0 上 11.4 个百分点的差距，对应的是"敢不敢让它无人值守跑过夜"的信任差；
* **Monorepo 级可靠性口碑**：SWE-bench Pro 差 7.7pt 看着不大，但在跨 20+ 文件的长程重构里，这是"能交付"与"要返工"的分界线；
* **收入质量**：OpenAI $700 亿 ARR 中约 45% 仍依赖 C 端 ChatGPT 订阅——高获客成本、低毛利、与 Agent 主航道弱相关。

---

## 5. 为什么 8 个点的差距比看起来更大：追赶者的五个结构性劣势

### 核心洞察：单步可靠性的复利诅咒（The Per-Step Compounding Tax）

这是理解"benchmark 差距 ≠ 体感差距"的关键。一个 50 步的 Agent 任务链，任务成功率 ≈ 单步可靠性的 50 次幂：

```
单步可靠性     50 步任务成功率
  98.0%   →    0.98^50  ≈  36%   ← "看着能用，实际要盯"
  99.0%   →    0.99^50  ≈  61%
  99.5%   →    0.995^50 ≈  78%   ← "敢放它跑过夜"
```

**每提升 0.5 个百分点的单步可靠性，长程任务成功率提升 ~17 个百分点。** Terminal-Bench 4.0 上 59% vs 71% 的差值，在真实工程里对应的是"Demo 惊艳"与"生产可用"之间的鸿沟——这正是为什么指标差距在收敛，而心智差距没有。

### 劣势一：Agentic RL 的工程积累
终端轨迹、工具回显与报错自愈，是编码 Agent 训练与产品迭代的重要反馈。OpenAI 至少在 2025 年 5 月的 codex-1 发布时就已明确披露真实编码任务的强化学习训练，不能写成直到 GPT-5 才进入这一领域。双方具体训练积累的代差仍需更多公开信息，但 **RL 环境、轨迹清洗、reward shaping 的工程 know-how 需要持续迭代，不能仅凭算力投入推断体验立即追平。**[codex-1 官方说明](https://openai.com/index/introducing-codex/)

### 劣势二：工作流引力锁定
开发者的 `CLAUDE.md`、Skills 配置、MCP 接线、已 warm 的 Prompt Cache 会话——这些沉没的工程资产构成了转换成本。Codex 即便体验追平，也要回答一个尴尬问题：**"我凭什么把调了八个月的 Agent 配置推倒重来？"**

### 劣势三：Nvidia 税与成本结构
OpenAI 推理主力仍是 Azure 的通用 GPU 集群，承担英伟达 70%+ 的硬件毛利；自研 Broadcom 芯片 2027 年前无法上量。反观 Anthropic 的 Trainium2/TPU v6 双 ASIC 路线已把 Token 成本砍掉 48%（见 [`06`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/docs/06_chapter5_business_restructuring_and_saas_disruption.md)）。**OpenAI 打价格战，是在用结构性高成本打别人结构性低成本的生意。**

### 劣势四：消费营收的甜蜜枷锁
8 亿周活是分发武器，也是战略枷锁：C 端收入占比近半，支撑成本重、毛利薄，却无法割舍——它是整个增长叙事的底座。这让 OpenAI 在资源分配上永远面临"C 端体验 vs B 端工程"的两难，而 Anthropic 没有这个撕裂。

### 劣势五：Copilot 渠道悖论
微软既是 OpenAI 最大的分销渠道（Copilot/Azure），又是多模型化的受益者——GitHub 乐见 Claude 与 GPT 竞价压价。OpenAI 在自家股东的产品里，反而失去了独占货架。

---

## 6. 情景推演：对 $2T 估值的三种含义

| 情景 | 触发条件 | 概率评估 | 对 Anthropic 估值影响 |
| :--- | :--- | :---: | :--- |
| **收敛（Bear）** | GPT-6 正式版在 T-Bench 4.0 追至 ±3pt；价格战迫使 Anthropic 全系降价 20%+ | ~25% | 开发者心智溢价瓦解，P/S 压至 10–12x，估值落回 $1.2–1.5T |
| **僵持（Base）** | 差距维持 7–12pt 一个世代；双方 ARR 同涨但份额格局固化 | ~55% | 双寡头格局被定价，$1.8–2.0T 区间获支撑 |
| **发散（Bull）** | RSI 飞轮见效（见 [`05`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/docs/05_chapter4_rsi_and_safety_paradigms.md)），Claude 6.x 重新拉开代差；OpenAI 算力军备陷入交付延误 | ~20% | "AGI 唯一候选"叙事成型，突破 $2T 上限 |

**季度跟踪清单（Watchlist）**：
1. Terminal-Bench 4.0 的逐季分差——比 SWE Pro 更能反映终端自主性代差；
2. Codex GA 后的开发者 DAU 与留存（而非注册量）；
3. 企业侧具名 logo 争夺战（金融/医药政企是 Fable 的主场，也是 OpenAI 最难啃的阵地）；
4. Broadcom 自研芯片流片与上量时点——决定 OpenAI 价格战能打多久；
5. Copilot 默认模型槽位的占比变化——微软货架的最终归属。

---

## 7. 结语：知耻后勇本身，就是对赛道最大的背书

值得玩味的是，OpenAI 对编码 Agent 的持续投入，既给 Anthropic 带来竞争压力，也为这条赛道的重要性提供了验证：

> **一个曾经领先 16 倍、拥有 8 亿用户和千亿美元算力承诺的公司，也在持续发展编码 Agent——本文据此判断，编码 Agent 是通往 AGI 与万亿美元企业收入的重要竞争方向。**

竞争的真实结果不是"谁吃掉谁"，而是双寡头把"模型即商品"的旧叙事彻底埋葬：当 GPT-6-Codex 和 Claude 5.5 都在为百万 Token 级的无人值守任务定价时，市场已经为"智能劳动力"而非"聊天机器人"支付了 2 万亿美元级别的对价。

唯一的悬念是——这场追赶消耗战里，OpenAI 烧的是融资和算力承诺，而 Anthropic 烧的是已经转起来的飞轮。
