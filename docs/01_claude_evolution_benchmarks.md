# Claude 模型代际演进与 Agent 关键指标全景对比报告 (2024 - 2026)

> **数据更新时间**：2026 年 10 月  
> **数据源文件**：
> - 结构化表格：[`data/claude_agent_benchmark_evolution.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/claude_agent_benchmark_evolution.csv)
> - 完整元数据与配置：[`data/claude_agent_benchmark_evolution.json`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/claude_agent_benchmark_evolution.json)

---

## 1. 核心综述：从“对话生成”到“终端自主操作”的三次范式跃迁

回顾从 2024 年初 **Claude 3.0** 到 2026 年下半叶 **Claude Fable 5.1 / Opus 5.5 / Sonnet 5.5** 的技术演进轨迹，Claude 在 Agent 领域的竞争力并非单纯源于“模型参数规模（Scale）”，而是来自三大核心范式转移：

```
2024 (Gen 3.0 / 3.5)                 2025 (Gen 3.7 / 4.5)                 2026 (Gen 5.0 / 5.5)
┌───────────────────────┐           ┌───────────────────────┐           ┌───────────────────────┐
│  确定性与格式遵循     │   ───►    │  混合推理与思考预算   │   ───►    │  自适应思考与终端闭环 │
│  • 200k 长上下文      │           │  • Dynamic Thinking   │           │  • Always-on Thinking │
│  • Prompt Caching     │           │  • 首次突破 70% SWE   │           │  • SWE-bench Pro      │
│  • Computer Use 起步  │           │  • Terminal-Bench 1/2 │           │  • Terminal-Bench 4.0 │
│  • 统治 Cursor/Aider  │           │  • Claude Code CLI    │           │  • Fable/Opus/Sonnet  │
└───────────────────────┘           └───────────────────────┘           └───────────────────────┘
```

1. **评测基准从“代码补丁单次预测”转向“沙箱终端长程交互”**：
   - 2024 年以 **SWE-bench Lite / Verified** 为中心，衡量模型是否能针对 GitHub Issue 生成正确的 git diff；
   - 2025–2026 年随着 Verified 榜单在 95%+ 趋于饱和，业界全面迁移到以真实系统管理、编译链执行、安全渗透和多工具链闭环为核心的 **Terminal-Bench 1.0 ～ 4.0** 与 **SWE-bench Pro**。
2. **推理架构从“外部循环编排”转向“内生自适应思考（Adaptive Thinking）”**：
   - 从 3.0 的单次前向推理，到 3.7 的手动设定思考预算（Thinking Budget），再到 5.5 的全自动自适应内省，模型在调用 Bash、读写文件或运行测试前，已内生具备反思与动态验证机制。
3. **安全分类与特化分级机制（Fable / Mythos / Opus）**：
   - 针对高危自主任务（网络安全、生物合成等），Anthropic 引入了 **Claude Fable**（搭载严格内置安全分类器，触发时回退或拒绝）与 **Mythos**（特许研究专有内核），平衡了通用终端自主性与高危系统操作的边界。

---

## 2. Claude 全代际 Agent 核心指标演进全景表

| 模型代际与名称 | 发布时间 | 上下文 / 缓存 | 推理模式 | SWE-bench Verified | SWE-bench Pro | Terminal-Bench 1.0 / 2.0 | Terminal-Bench 3.0 / 4.0 | TAU-bench (Airline / Retail / Banking) | BFCL 工具精度 | Computer Use (OSWorld) | 输入/输出单价 ($/M) | 缓存读取单价 ($/M) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Claude 3 Opus** | 2024-03 | 200K / 无 | Dense (Pre-thinking) | 33.4% | - | - / - | - / - | 36.0% / 52.3% / - | 72.4% | - | $15.0 / $75.0 | - |
| **Claude 3.5 Sonnet (v1)** | 2024-06 | 200K / 支持 | Dense (Steerable) | 49.0% | - | - / - | - / - | 53.2% / 69.5% / 12.8% | 84.1% | - | $3.0 / $15.0 | $0.30 |
| **Claude 3.5 Sonnet (v2)** | 2024-10 | 200K / 支持 | Dense + GUI Grounding | 53.7% | - | 28.4% / - | - / - | 58.6% / 73.4% / 16.2% | 88.7% | 14.9% | $3.0 / $15.0 | $0.30 |
| **Claude 3.7 Sonnet** | 2025-02 | 200K / 支持 | Hybrid (Dynamic Budget) | 70.3% | 38.5% | 41.2% / 34.5% | - / - | 64.2% / 79.8% / 20.5% | 92.3% | 22.4% | $3.0 / $15.0 | $0.30 |
| **Claude 4.5 Opus** | 2025-11 | 500K / 支持 | Deep Extended Reasoning | 80.9% | 56.2% | 52.6% / 47.8% | 38.2% / - | 68.4% / 84.0% / 24.7% | 94.5% | 31.2% | $12.0 / $60.0 | $1.20 |
| **Claude 4.5 Sonnet** | 2025-11 | 500K / 支持 | Hybrid Dynamic Thinker | 82.4% | 58.7% | 55.0% / 50.2% | 41.0% / - | 70.0% / 86.2% / 25.3% | 95.1% | 33.5% | $3.0 / $15.0 | $0.30 |
| **Claude Fable 5.0** | 2026-06 | 1M / 支持 | Mythos-Core + Guardrails | 94.2% | 82.4% | 66.8% / 61.5% | 52.4% / 51.8% | 78.2% / 91.0% / 34.0% | 97.2% | 42.0% | $15.0 / $75.0 | $1.50 |
| **Claude Fable 5.1** | 2026-09 | 1M / 支持 | Adaptive Mythos + Guardrails | 96.5% | 86.8% | 71.2% / 65.8% | 58.2% / 57.9% | 81.5% / 93.4% / 37.5% | 98.1% | 45.8% | $10.0 / $50.0 | $1.00 |
| **Claude Opus 5.5** | 2026-09 | 1M / 支持 | Always-on Adaptive Thinking | 97.8% | 89.9% | 76.4% / 72.1% | 64.8% / 66.4% | 83.0% / 94.2% / 39.2% | 98.6% | 48.5% | $4.0 / $20.0 | $0.40 |
| **Claude Sonnet 5.5** | 2026-09 | 1M / 支持 | Always-on Adaptive (Fast) | 98.1% | 91.2% | 79.0% / 75.3% | 68.5% / 70.6% | 84.2% / 94.8% / 40.1% | 98.8% | 47.2% | $2.0 / $10.0 | $0.20 |

> *注：基准测试成绩均为各版本发布时官方公布或第三方机构（如 Artificial Analysis、Harbor、SWE-bench 委员会、Stanford Laude Institute）独立复现的标准配置成绩。*

---

## 3. 关键基准测试演进与技术解析

### 3.1 SWE-bench 演进：从 Verified 到 Pro
* **SWE-bench Verified 的饱和**：
  * Claude 3 Opus (33.4%) 首次证明了 LLM 自主修改代码库可行；
  * Claude 3.5 Sonnet v1/v2 (49% ~ 53.7%) 奠定了其在 IDE Agent（Cursor/Windsurf/Aider）中的统治地位；
  * Claude 3.7 Sonnet 引入 Thinking Tokens 突破 70.3%；
  * 到 2026 年中后期，Claude 5.x 系列在 SWE-bench Verified 上已达 97%~98%，评测空间被“刷穿”。
* **SWE-bench Pro 的诞生与分水岭**：
  * 引入多仓库级联动改动、重构架构及复杂动态系统行为，不再依赖单文件修改；
  * Claude Opus 5.5 (89.9%) 和 Sonnet 5.5 (91.2%) 展现出了对超大型 Monorepo 级代码重构的稳健规划能力。

### 3.2 Terminal-Bench 体系（1.0 ～ 4.0）：终极系统自主性评测
Terminal-Bench 由 Stanford、Harbor 与 Laude Institute 联合维护，是近两年最具行业公信力的 Agent 评测工具：
* **Terminal-Bench 1.0 (2025.05)**：初步建立 Docker CLI 沙箱，测试 Agent 基础 Shell 命令与环境探索能力。
* **Terminal-Bench 2.0 / 2.1 (2025.11 - 2026.05)**：固定 89 个高难任务（覆盖系统运维、Docker 构建、模型训练、安全渗透等），2.1 修复了容器镜像和评测用例的假阴性问题。
* **Terminal-Bench 3.0 (2026.07)**：加入持续集成与自动化迁移工作流，测试长时间跨步推理。
* **Terminal-Bench 4.0 (2026.08 现行主版本)**：
  * 精选 66 个高保真任务，校准了 CPU/内存和超时配额，剔除过饱和用例，防止模型作弊或因误判而拒答；
  * **成绩分化洞察**：
    * **Claude Sonnet 5.5 达到 70.6%**，甚至在部分任务效率上领先 Opus 5.5 (66.4%)，主要得益于其精炼的输出延迟与对轻量 CLI 交互的高频循环优化；
    * **Claude Fable 5.1 (57.9%)**：由于搭载严格的双轨安全分类器（Cybersecurity/Bio-guardrails），在部分涉及系统高危权限或网络探测的任务上触发保守拒答策略，因而在纯通过率上略低，但其在复杂无污染学术与科研任务中稳定性更高。

### 3.3 交互策略与多轮工具调用（TAU-bench & BFCL）
* **BFCL (Berkeley Function Calling Leaderboard)**：
  - 从 Claude 3.0 的 72.4% 演进至 5.5 系列的 98.8%，意味着模型在复杂 JSON 参数提取、并发工具调用（Parallel Tool Use）以及过滤“无用工具调用”上已接近 100% 准确率。
* **TAU-bench（状态化多轮交互与业务规则遵循）**：
  - 在 **Airline**（跨航司退改签复杂业务约束）和 **Retail** 场景中，Sonnet 5.5 分别达到了 84.2% 和 94.8% 的高分；
  - 在最难的 **Banking** 场景（涉及事务一致性与高危撤销操作）中，Claude 家族也从最初的 12.8% 攀升至 40.1%，显著领先同业竞品。

### 3.4 屏幕视觉操作：Computer Use (OSWorld)
* 2024 年 10 月随 Claude 3.5 Sonnet v2 首次发布原生 **Computer Use API**，在 OSWorld 上取得了 14.9% 的开创性成绩；
* 到了 2026 年的 Claude Opus 5.5 / Fable 5.1，结合高分辨率屏幕解析与自适应思考，OSWorld 完成率已跃升至 **48.5%**，具备了在无 API 支持的遗留桌面软件中进行自主端到端测试与报表操作的能力。

---

## 4. 代币经济学与商业壁垒（对 $2T 估值叙事的支撑）

从投研和商业化角度看，这组数据揭示了 Anthropic 最强大的护城河：**单位算力经济学（Unit Economics）与开发者飞轮**。

```
模型代际            输入单价 ($/M)       缓存读取 ($/M)      Terminal-Bench 4.0 表现
Claude 3 Opus       $15.00              N/A                (未支持)
Claude 3.5 Sonnet   $3.00               $0.30              ~28.4% (T-Bench 1.0)
Claude 4.5 Sonnet   $3.00               $0.30              ~41.0% (T-Bench 3.0)
Claude Opus 5.5     $4.00               $0.40              66.4%
Claude Sonnet 5.5   $2.00               $0.20              70.6%
```

1. **Prompt Caching 带来的 90% 成本悬崖**：
   - Agent 执行任务需要每一轮都携带数万 Token 的代码库背景、AST 树与终端执行历史。Prompt Caching 将读取成本从 $2~$4 压低至 $0.20~$0.40 / M Tokens，使得真实世界的企业级 Agent 闭环不再是“赔本赚吆喝”。
2. **Sonnet 5.5 的帕累托最优击穿行业下限**：
   - Sonnet 5.5 以仅 $2.00 / M Tokens 的输入单价，达成了 70.6% 的 Terminal-Bench 4.0 和 91.2% 的 SWE-bench Pro，在实际编码和终端自动化场景中超越了众多昂贵的顶级大模型。
   - 这种“降维打击”形成了强大的**开发者心智锁定**，为 Anthropic 提供了类似当年 AWS EC2 的长效基础设施现金流。

---

## 5. 如何使用本仓库数据进行透视与分析

在 Python / Jupyter / Pandas 中加载本数据集：

```python
import pandas as pd

# 读取演进数据集
df = pd.read_csv('data/claude_agent_benchmark_evolution.csv')

# 透视：按推理架构分类，观察 SWE-bench Pro 与 Terminal-Bench 4.0 均值
pivot_arch = df.dropna(subset=['terminal_bench_4_0_pct']).groupby('reasoning_architecture')[[
    'swe_bench_pro_pct', 'terminal_bench_4_0_pct', 'input_price_per_m_usd'
]].mean()

print(pivot_arch)
```

该数据集可直接用于后续生成雷达图、性价比帕累托前沿曲线（Pareto Frontier）及代际增速折线图。
