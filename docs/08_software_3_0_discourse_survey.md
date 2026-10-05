# Software 3.0 话语谱系调研：当整个行业都在说"代码是第一个倒下的多米诺"

> **文档定位**：§3.8（Software 3.0 与文明拐点）的素材底稿。梳理"自然语言编程/代码即新范式"这一命题在 2023–2026 年间被哪些行业领袖提出、如何演绎、谁唱反调，并分析本报告应如何在既有论战中卡位。  
> **调研时间**：2026 年 10 月  
> **服务章节**：`docs/00_master_outline.md` §3.8，兼供 §3.5（Amodei 哲学）引注

---

## 1. 概念溯源：Karpathy 的原始论述（2025.06）

**出处**：Andrej Karpathy 在 YC AI Startup School 的主题演讲《Software Is Changing (Again)》，2025 年 6 月。  
（[演讲视频](https://youtu.be/LCEmiRjPEtQ) / [文字实录](https://singjupost.com/andrej-karpathy-software-is-changing-again/) / [Latent Space 纪要](https://www.latent.space/p/s3)）

### 1.1 三代范式定义

| 范式 | 程序是什么 | 程序员是谁 | 本质 |
| :---: | :--- | :--- | :--- |
| Software 1.0 | 人写的代码（C++/Python） | 掌握语法的人 | 确定性指令集 |
| Software 2.0 | 神经网络权重 | 调数据与损失函数的人 | 训练出来的黑盒函数 |
| Software 3.0 | **自然语言 Prompt** | **任何会说英语的人** | 可编程的 LLM 计算机 |

* 核心论断："Your prompts are now programs that program the LLM. And remarkably, these prompts are written in English."
* 历史叙事：Software 2.0 曾在特斯拉 Autopilot 里"吃掉"了大片 C++ 代码库（"The neural net ate through the C++ codebase"）；现在 **Software 3.0 is eating 1.0/2.0**，"a huge amount of software will be rewritten"。

### 1.2 多数人引用时漏掉的五个限定条件

Karpathy 的原始论述远比流行的标题党版本精细：

1. **LLM 是"人群的随机模拟"（stochastic simulations of people）**，不是传统计算机——锯齿状智能（jagged intelligence），会解奥数却数不清字母；
2. **顺行性遗忘（anterograde amnesia）**：模型没有持续学习，告诉它的事睡一觉就忘——上下文窗口就是工作记忆；
3. **自治滑杆（Autonomy Slider）**：未来软件是"部分自治"的（Cursor 的 Tab→Cmd+K→Cmd+I→全 Agent 四档），人始终握着放权刻度；
4. **GUI 的存在意义是"审计易错系统"**：给人类做生成-验证循环加速，不是摆设；
5. **要为 Agent 重写软件与文档**（llms.txt、可编程接口优先于 UI）。

---

## 2. 同阵营：大牛们的"代码先亡"预言谱系

早于并独立于 Karpathy 的术语，一批领袖在 2023–2025 年给出了同构论述：

| 人物 | 时间/场合 | 核心论述 | 关键引语 |
| :--- | :--- | :--- | :--- |
| **Jensen Huang** | 2023.05 Computex  keynote | 生成式 AI 是"用人类语言编程的新型计算机"，编程门槛归零，数字鸿沟被填平 | "Everyone is a programmer now—you just have to say something to the computer." |
| **Satya Nadella** | 2024.12 BG2 播客 | 企业软件本质是"CRUD 数据库 + 业务逻辑"，业务逻辑将整体迁移到 AI tier，SaaS 应用将在 Agent 时代"崩塌" | "Why do I need Excel?"——Agent 直接交付答案，应用沦为壳 |
| **Dario Amodei** | 2025.03 CFR 活动 | 3-6 个月内 AI 写 90% 的代码，12 个月内"几乎所有代码" | 后在 2026.02 Dwarkesh 播客上自我修正：该预测"在 Anthropic 内部已发生"，但承认"90% 行数是非常弱的判据"，端到端软件工程还需 1-2 年 |
| **Mark Zuckerberg** | 2025.01 Rogan / 2025.04 LlamaCon & Dwarkesh | 2025 年内出现"中级工程师水平"的 AI；2026 年 Meta 半数代码由 AI 撰写；12-18 个月内"大部分代码"出自 AI | Nadella 当场接话：微软仓库已有 20-30% 代码由 AI 生成 |
| **Thomas Dohmke** | 2025.08 GitHub 博文《Developers, Reinvented》 | 开发者四阶段演化（怀疑者→探索者→协作者→战略家）；未来头衔是"代码创意总监"（Creative Director of Code） | "Either you embrace the AI, or you get out of your career." |
| **Sam Altman** | 2025.06 博文《The Gentle Singularity》 | "我们已越过事件视界"；2025 Agent 能做真实认知工作→2026 产生新见解→2027 机器人进物理世界 | "ChatGPT is already more powerful than any human who has ever lived." |

### 预言追踪表（对报告最有用的对照素材）

| 预言 | 兑现情况（截至 2026.10） |
| :--- | :--- |
| Amodei"90% 代码由 AI 写"（2025.03 立论） | 形式上在 Anthropic 内部兑现，但行数≠工程师替代，本人已主动降级该判据 |
| Zuckerberg"2026 年 Meta 半数代码 AI 写" | 方向性兑现，但"行数口径"遮蔽了审查/返工成本 |
| Nadella"SaaS 崩塌" | 估值层面兑现（SaaSpocalypse，见 `docs/06 §1`），但企业核心系统迁移远慢于叙事 |
| Altman"2026 出现新见解系统" | RSI 流水线部分兑现（Claude 主导 26% 内部研发，见 `docs/05 §2`） |

---

## 3. 反方阵营：三重冷水

### 3.1 造词者本人的刹车（最锋利的一盆）

Karpathy 在 2025.10 Dwarkesh 播客中公开"反动"自己的热度：

* **"这是 Agents 的十年，不是一年"**（"decade of agents, not year of agents"）——直接反驳"2025 是 Agent 元年"的行业叙事；
* 理由：现有 Agent（包括他日常使用的 Claude 与 Codex）缺乏持续学习、多模态不足、cognitive deficits 明显，"还雇不起一个实习生级别的 Agent"；
* **"九的行军"（march of nines）**：类比自动驾驶——2014 年他看过完美的 Waymo demo，十年后仍未完工；demo 容易，产品难，每多一个 9 的可靠性都要花同等力气；
* **"我们召唤的是幽灵，不是动物"**：LLM 是对人类文本分布的模仿训练，不是进化出来的心智。

### 3.2 LeCun 的路线否决

Yann LeCun（2025.11 离开 Meta 创办世界模型公司 AMI Labs 后，2026.04 Brown 演讲）：

* "整个行业押注 LLM 通往人类级智能，这是 complete BS"；
* LLM 缺失四大能力：物理世界理解、持久记忆、推理、规划——自回归文本预测是死胡同，正解是 world model（JEPA 路线）；
* **注意反驳边界的精确性**：LeCun 否认的是"LLM 理解物理世界"，他从没否认代码能力——这反而从侧面支持本报告"代码是首个被形式化攻克的领域"的论点（见 `docs/05 §4`）。

### 3.3 工程实践派对 3.0 范式的本体论质疑

* **"Prompt 不是程序，是谈判"**：代码是确定性的，prompt 是概率性的——"you're not commanding the model, you're negotiating with it"；没有 IDE、调试器、类型系统、测试框架的 Software 3.0 缺乏 Software 1.0 的全部脚手架；
* **并存论**：2.0 没有消灭 1.0，3.0 也不会消灭前两者——三者将长期分层共存，监管行业（金融/医疗/航空）永远需要确定性可审计系统；
* **swyx（Latent Space）的修正**：真正能打的不是"纯 prompt 工程师"，而是"1+2=3"——同时驾驭代码与模型的 AI Engineer。

---

## 4. 本报告的卡位策略：如何用这场论战为 §3.8 服务

### 洞察一：连怀疑派都承认"代码先亡"——这是全场唯一共识
LeCun 反 LLM-as-AGI，但从未反"LLM 能写代码"；Karpathy 泼冷水泼在"时间"而非"方向"。**"代码是第一个被形式化攻克的智能领域"是整场论战中唯一的全行业共识**——报告应把这个共识当成地板而非靶子。

### 洞察二：批评者的最强质疑，恰好是本报告的已有武器
工程派说"prompt 是概率契约、不是确定性代码"——但 `docs/02` 与 `docs/04` 早已给出答案：**终端沙箱的 Exit Code/Stderr 把概率性输出重新接回了确定性地面（ground truth loop）**。Software 3.0 批评者指认的范式软肋，正是 Claude 在 Terminal-Bench 4.0 拿到 70.6% 的领域。这不是巧合，是 Anthropic 战略选择的结果。

### 洞察三：Karpathy 的内部分裂是全章最好的叙事张力
"Software 3.0 范式是真的（他自己命名的）+ Agent 成熟还要十年（他自己泼的冷水）"——这两个立场出自同一人之口，恰好是本报告可以骑上去的那道裂缝：**Anthropic 的 $2T 估值，本质上是对自治滑杆转速的一次杠杆化押注。** 报告不必回避十年派，而应将 bear case 定义为"自治滑杆转得比招股书假设慢"。

### §3.8 建议结构
1. 范式史：1.0→2.0→3.0（Karpathy 原始论述 + Tesla 代码被吃的实证）；
2. 预言与兑现：大牛语录表 + 追踪表（§2 素材）——证明这不是一家之言而是行业级共识；
3. 反方校准：LeCun 边界 + 工程派质疑 + Karpathy 自刹车（§3 素材）——展示报告不是软文；
4. 本报告论点：终端反馈闭环解决了 3.0 的概率性缺陷 → 代码范式之所以能通向 AGI，是因为它自带"裁判"；
5. 收束：文明拐点 = 自治滑杆转到"无人值守"档位的时刻（接 `docs/05 §4` 与 `docs/06 §5`）。

---

## 5. 引用与信源层级

| 素材 | 信源等级 |
| :--- | :--- |
| Karpathy YC 演讲原视频/transcript | 一手（本人公开演讲） |
| Karpathy × Dwarkesh 播客（2025.10） | 一手（本人访谈） |
| Amodei CFR 发言（2025.03）/ Dwarkesh（2026.02） | 一手 |
| Nadella BG2 播客（2024.12）/ LlamaCon（2025.04） | 一手 |
| Zuckerberg Rogan/Dwarkesh/LlamaCon（2025） | 一手 |
| Dohmke《Developers, Reinvented》（2025.08） | 一手（官方博文） |
| Altman《The Gentle Singularity》（2025.06） | 一手（个人博文） |
| LeCun Brown 演讲（2026.04）/ Lex 播客 | 一手 |
| 各第三方解读/批评文章 | 二手，仅作舆论佐证 |
