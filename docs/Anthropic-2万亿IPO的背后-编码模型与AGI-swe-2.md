# 《Anthropic 2 万亿 IPO 的背后：编码模型与 AGI》大纲（swe-2 版）

> 叙事主线：**先回答"钱从哪来"（第一篇），再回答"谁的尸体在买单"（第二篇），最后回答"为什么这一切不会停"（第三篇）。** $2T 不是信仰定价，而是一条从 Token 单价到文明范式的完整证据链。

```
《Anthropic 2 万亿 IPO 的背后：编码模型与 AGI》
│
├── 序章：敲钟前夜的三个问题（The Night Before the Bell）
│   ├── 一家成立五年的公司，凭什么挂出比中国十大互联网总和还高 50% 的价格？
│   ├── 万亿美元市值从谁的报表上蒸发、又流进了谁的 ARR？
│   └── 为什么全世界最聪明的三家公司（OpenAI/Google/Meta）都在追同一个赛道，却追出了三种结局？
│
├── 第一篇：资本神话与 ARR 飞轮（The $2T Capital Machine & ARR Flywheel）
│   ├── 1.1 数字的坐标系：2 万亿美元意味着什么？
│   │   ├── 全球仅 6 家公司跨过 $2T 的会员名单（Apple/Microsoft/NVIDIA/Alphabet/Amazon/Aramco）
│   │   ├── 超过腾讯+阿里+拼多多+美团+…中国 Top 10 互联网市值总和的 1.5 倍
│   │   └── 估值跃升轨迹：$18B（2024）→ $965B（Series H）→ $1.8-2.0T（IPO 目标）
│   ├── 1.2 ARR 世纪逆转：从 16:1 到反超
│   │   ├── 16 个季度的追赶曲线与三个斜率拐点
│   │   └── 反超时刻：2026.05 Series H 节点 $450 亿 vs $350 亿
│   ├── 1.3 引爆点解剖：Claude Code 与 Token 消耗的百倍杠杆
│   │   ├── Chatbot 离散问答 → Agent 连续闭环：单任务 50 万-200 万 Tokens
│   │   ├── 单品 $25 亿 ARR；GitHub 新增 Commit 渗透率 ~7%
│   │   └── 杰文斯悖论：单价打一折，总消耗涨百倍
│   ├── 1.4 财务穿透：Gross vs Net 确认差异与 $420 亿"亏损"真相
│   │   ├── 云渠道全额确认 vs OpenAI 净分成口径——ARR 反超的会计含金量
│   │   └── 可转债公允价值调整：纸面巨亏 vs 真实经营烧钱
│   ├── 1.5 算力经济学：毛利率 30% → 68% 的逆袭账本
│   │   ├── Prompt Caching 的暴利数学：让利 90% 的业务反而毛利 77.5%
│   │   ├── 双 ASIC 对冲英伟达税（Trainium2 + TPU v6，Token 成本 -48%）
│   │   └── Sonnet 5.5 的帕累托最优：$2/$10 打出 70.6% T-Bench——固定资产周转率武器化
│   └── 1.6 中立国账本与 IPO 暗线 ◐
│       ├── "AI 瑞士"：AWS + Google 双云 Cap Table 的利益绑定与战略中立溢价
│       ├── 股东=供应商=渠道：三重身份循环交易质疑与审计口径（Nvidia↔OpenAI 式的对照组）
│       ├── 治理结构：PBC 身份 + Long-Term Benefit Trust——AGI 失控时谁在踩刹车
│       └── 交易本体：承销团、募资用途（算力）、流通盘与历史 mega-IPO 对标
│
├── 第二篇：产业重构与格局战争（Industry Restructuring & The Throne War）
│   ├── 2.1 资本大屠杀：SaaSpocalypse 详录
│   │   ├── 六巨头回撤全景（Atlassian -70% / ServiceNow -40% / Salesforce -31%…）与 $1.2T 蒸发
│   │   └── EV/NTM Sales 从 18.5x 到 5.6x：估值体系的整体降维
│   ├── 2.2 席位制公式的物理死锁
│   │   ├── ARR = 人头 × 单价：AI 冻结编制即冻结 SaaS 增长引擎
│   │   └── Agentforce 的创新者窘境：$2/次计费如何吃掉 $150/月坐席
│   ├── 2.3 即时软件（Just-In-Time Software）：边际制造成本归零
│   │   ├── 从"采购实施 9 个月"到"需求到部署 20 分钟"
│   │   └── 80% 横向 SaaS 被按需生成平替；Core Ledger 是最后的堡垒
│   ├── 2.4 架构大论战：MCP 黄昏与 CLI 逆袭
│   │   ├── 软肋一：Schema 隐形 Token 税（Context Bloat）
│   │   ├── 软肋二：Unix 管道对 JSON-RPC 的降维打击（50 年工具链的胜利）
│   │   ├── 软肋三：Claude Code 亲儿子的 Terminal-first 路线
│   │   └── 辩证终局：双环生态——CLI 内环 × MCP Gateway 外环的两面合围
│   ├── 2.5 王座攻防战：OpenAI 知耻后勇的反攻
│   │   ├── 耻辱纪元四幕：3.5 Sonnet 静默政变 → Claude Code 珍珠港 → Windsurf 崩盘 → GPT-5 遇冷
│   │   ├── Code Red 内部清算：合并三大 Agent 项目、Brockman 接管、微软资本重组解锁
│   │   ├── 认错式转身：Codex 2.0 终端原生化 + Fleet 舰队 + Atlas 8 亿用户漏斗
│   │   ├── 经济战：降价 35% 的 challenger 定价 + 人类史上最大算力囤积（Stargate/Oracle/AMD/Nvidia）
│   │   ├── 战果盘点：份额 12%→28%，收敛但没追上
│   │   ├── 单步可靠性复利税：0.98^50≈36% vs 0.995^50≈78%——8 个点的差距为何是代际
│   │   ├── 尾部注脚：开源权重模型（DeepSeek/Qwen 系）未追平 frontier，但构成长期定价压制
│   │   └── 三情景推演：收敛 25% / 僵持 55% / 发散 20% 对 $2T 的含义
│   ├── 2.6 反面教材：Gemini 的执行力赤字
│   │   ├── MALFORMED_FUNCTION_CALL、补丁懒惰、安全过敏、2M 上下文假象
│   │   └── 教训：多模态与长上下文补不齐"最后一步敲对命令"的执行力
│   └── 2.7 落地证据：企业采用实况 ◐
│       ├── Fortune 500 具名部署与金融/医药/政企垂直线（Fable 主场）
│       └── NDR 160% 的分层结构与编制冻结的微观证据
│
└── 第三篇：代码即 AGI——递归演化与文明拐点（Code is AGI: RSI & Civilizational Inflection）
    ├── 3.1 临界点证据：评测革命与终端自愈
    │   ├── SWE-bench Verified 98% 饱和：旧标尺失效本身即历史性事件
    │   ├── SWE-bench Pro：双边门禁 + 离线隔离 + Monorepo 重构（Celery 异步泄漏案例）
    │   ├── Terminal-Bench 4.0：沙箱真实执行力（Nginx mTLS 与 PyTorch DDP 死锁案例）
    │   └── 反直觉发现：Sonnet 5.5 逆袭 Opus 5.5——快速探测循环优于脑内仿真
    ├── 3.2 认知操作系统：为什么通用 Agent 必须以代码为思维中间表示（IR）
    │   ├── 四支柱：Code-as-Plan / 动态 API 合成 / 确定性反馈自愈 / 结构化状态解析
    │   └── 跨界实证：Instinct（个人管家）与 Meta Muse（VM 沙箱双模协同）——通用管家的内核是代码引擎
    ├── 3.3 护城河解剖：为什么偏偏是 Claude 赢了 ◐
    │   ├── Agentic RL 五代迭代 vs 对手的追赶起点（时间不可购买）
    │   ├── 终端轨迹数据飞轮：Claude Code 遥测是否反哺训练
    │   ├── Sonnet 蒸馏经济学：旗舰能力下放 $2 价位带的成本魔法
    │   └── 与 OpenAI 对照：agentic 原生 RL vs chat 优化 RLHF 的路径遗产
    ├── 3.4 Amodei 哲学与 AGI 预测坐标系（定性对照，不作 AGI 已至论断）
    │   ├── 《仁慈的机器》：生物物理学底色、"50 年压缩成 5 年"、2026-27 强大 AI 时间表
    │   ├── 坐标系对照：Altman"温和奇点已越过事件视界" / Karpathy"Agent 的十年" / LeCun"LLM 死胡同"
    │   ├── 关键校准：连怀疑派都不否认"代码先亡"——LeCun 的反驳精确绕开编码领域
    │   └── METR 任务时长倍增曲线：仅作"可测量斜坡"参照物，不作 AGI 证明
    ├── 3.5 终极自举：Claude 如何训练下一代 Claude（RSI 四大工业流水线）
    │   ├── 集群内核排错与 Triton 算子自优化
    │   ├── RLAIF 合成思考链：高阶 Claude 给低阶 Claude 当评委
    │   ├── 自动化红蓝对抗与 Sleeper Agent 探测
    │   └── 自建 RL 环境（Self-Evolving Gyms）：模型为自己出题
    ├── 3.6 安全防线：RSP 阶梯、ASL-3 跨越与商业双轨制
    │   ├── ASL 生物安全等级表与"宁可停训不越界"的制度化承诺
    │   ├── Fable vs Mythos：用 57.9% 的 T-Bench 通过率换取全球合规豁免
    │   └── SAE 白盒可解释性：部署前的"神经元 MRI"扫描——主权基金与五角大楼的采购背书
    └── 3.7 文明拐点：Software 3.0 话语谱系与 2 万亿的终极底色
        ├── 三代范式：1.0 人写代码 → 2.0 神经网络权重 → 3.0 自然语言编程（Karpathy 原典）
        ├── 预言谱系：黄仁勋"人人都是程序员"→ Nadella"SaaS 崩塌"→ Amodei"90% 代码"→ Altman"温和奇点"
        ├── 反方校准：Karpathy 自我刹车（decade of agents / march of nines）+ 工程派"prompt 是谈判不是程序"
        ├── 报告的落点：终端 Exit Code 闭环回答了 Software 3.0 的概率性软肋——代码范式自带裁判
        └── 终极定价：$2T 不是买软件公司，是对 Karpathy"自治滑杆"转速的杠杆化押注

── 尾声：定价一个时代 ──
   总情景表（Bull/Base/Bear）× 投资者季度 Watchlist
   （T-Bench 分差 / Codex DAU / 企业 logo 战 / Broadcom 流片 / 开源基准斜率）

── 附录 ──
   A. Claude 全代际基准数据集 / B. OpenAI Codex 基准演进 / C. 信源层级说明
   （S-1 > 官方披露 > 媒体报道 > 估算；◐ 标注为素材待补节点）
```

---

## 与参考结构的关键差异说明

| 调整 | 理由 |
| :--- | :--- |
| 毛利账本从第二篇挪至 §1.5 | 毛利率是估值论证（P/S 倍数资格），属资本叙事而非产业叙事 |
| "双云 Cap Table"扩写为 §1.6 暗线 | 原结构只讲利益绑定的正面；补入股东-供应商-渠道循环交易质疑、PBC/LTBT 治理、募资用途——这是 IPO 报告区别于公司分析报告的本体 |
| 新增序章与尾声 | 原结构缺 hook 与收束；序章三问直接对应三篇主旨，尾声把全篇情景推演收敛为可执行 Watchlist |
| 第二篇新增 §2.5/§2.6/§2.7 | 原结构只有"旧世界之死"（SaaS/MCP/JIT），缺"新王座之争"——OpenAI 反攻与 Gemini 溃败是护城河论证里不可省略的对照组 |
| 第三篇新增 §3.3 护城河解剖 | 原结构证明了"Claude 赢了"，没解释"为什么能赢"——RL 代差与数据飞轮是 $2T 可持续性的关键论证 |
| §3.4 改为"预测坐标系" | AGI 未实现，只能定性：把 Amodei 的时间表放进 Altman/Karpathy/LeCun 的对照坐标里呈现，并主动引入 METR 作参照物而非证据——报告的可信度靠诚实边界建立 |
| §3.7 扩为完整话语谱系 | 不止引用 Karpathy 概念，还纳入预言追踪表与反方校准（含造词者自我刹车），落点是"终端闭环回答了 3.0 范式的确定性软肋"——与 3.1 形成首尾呼应 |
