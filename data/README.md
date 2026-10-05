# Anthropic 2 万亿 IPO 核心量化数据集目录 (Data Catalog)

本目录收录了支撑报告《Anthropic 2 万亿 IPO 的背后：编码模型与 AGI》的全部结构化量化数据集。所有数据均采用标准化 CSV 格式存储，字段清晰、具备严格时间序列和可复现口径，方便直接导入 Python、Pandas、R 或 Excel 进行透视分析。

---

## 1. 数据集清单与定位

| 数据集文件名 | 核心内容与指标 | 覆盖时间跨度 | 关键分析维度 |
| :--- | :--- | :---: | :--- |
| [`claude_agent_benchmark_evolution.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/claude_agent_benchmark_evolution.csv) | Claude 全代际模型评测演进表 (3.0 到 5.5) | 2024.03 - 2026.09 | SWE-bench (Verified/Pro)、Terminal-Bench (1.0-4.0)、TAU-bench、BFCL、价格与缓存折扣 |
| [`claude_agent_benchmark_evolution.json`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/claude_agent_benchmark_evolution.json) | 模型评测的完整元数据、沙箱配置与里程碑定义 | 2024.03 - 2026.09 | 评测沙箱技术规范、双边门禁判定细节、工程转折点 |
| [`anthropic_funding_and_valuation_history.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/anthropic_funding_and_valuation_history.csv) | Anthropic 历轮融资、投后估值与 Cap Table 演进 | 2021.05 - 2026.11(E) | 融资轮次、融资金额、估值倍数步长 (Step-up)、领投机构与双云战略伙伴 (Amazon/Google) |
| [`anthropic_vs_openai_arr_timeline.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/anthropic_vs_openai_arr_timeline.csv) | Anthropic 与 OpenAI 季度 ARR 世纪追赶走势表 | 2023-Q1 - 2026-Q4(E) | 季度 ARR ($M)、规模对比倍数、关键产品催化剂 (Claude Code, GPT-4, o1)、会计口径差异 (Gross vs Net) |
| [`saas_giants_valuation_drawdown.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/saas_giants_valuation_drawdown.csv) | SaaS 大屠杀 (SaaSpocalypse) 核心巨头市值血洗表 | 2021 - 2026 | 股价峰谷值、最大回撤幅度、市值蒸发量级 ($B)、EV/Sales 倍数压缩、Agent 侵蚀逻辑 |
| [`frontier_ai_coding_agent_competitors.csv`](file:///Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/data/frontier_ai_coding_agent_competitors.csv) | 前沿代码智能体五大流派横向终极对比矩阵 | 2025 - 2026 | 涵盖 Anthropic、OpenAI、Google、Meta 及开源阵营，对比基准得分、定价、开发者生态与底层硬伤 |

---

## 2. 字段字典与核心统计口径说明

### 2.1 `anthropic_funding_and_valuation_history.csv`
* `round_name`: 融资轮次（从 Series A 到 Series H 及 IPO 目标）；
* `amount_raised_usd_m`: 单轮融资金额（单位：百万美元）；
* `post_money_valuation_usd_m`: 投后估值（单位：百万美元）；
* `valuation_step_up_multiple`: 较上一轮投后估值的倍数步长（Step-up Multiple）；
* `primary_milestone_and_notes`: 轮次发生时的核心产品里程碑与重大事件。

### 2.2 `anthropic_vs_openai_arr_timeline.csv`
* `quarter` / `year_month`: 统计季度与时间锚点；
* `anthropic_arr_usd_m` / `openai_arr_usd_m`: 年化经常性收入（ARR，单位：百万美元）；
* `openai_to_anthropic_ratio`: OpenAI ARR / Anthropic ARR 的规模倍数（从 2023 年底的 16.0x 逐步收敛至 2026 年的反超 0.70x）；
* `accounting_notes`: 标注收入确认口径（全额总额法 Gross Contract Value vs 净额留存法 Net Retained Revenue）。

### 2.3 `saas_giants_valuation_drawdown.csv`
* `ticker`: 股票代码（涵盖 TEAM, CRM, NOW, ADBE, WDAY, SNOW, HUBS, ZM 及 BVP 行业中位数）；
* `drawdown_from_peak_pct`: 自股价高点以来的最大跌幅百分比；
* `market_cap_eroded_usd_b`: 蒸发的市值体量（单位：十亿美元）；
* `peak_ev_ntm_sales` ──► `current_ev_ntm_sales`: 远期企业价值倍数（EV/Sales）从 15x-25x 压缩至 4x-8x 的轨迹。

### 2.4 `frontier_ai_coding_agent_competitors.csv`
* 涵盖模型：Claude Sonnet 5.5, Claude Opus 5.5, Claude Fable 5.1, GPT-6 Astra, o3/o4-mini, Gemini 3.0/3.1 Pro, Meta Muse Spark, Qwen3-Coder-Next 70B, DeepSeek-Coder-V3；
* 对比核心：SWE-bench Verified / Pro, Terminal-Bench 4.0, BFCL 工具精度, 输入/输出/缓存读取单价, 主流 IDE 采纳度与真实失败模式。

---

## 3. Python 快速加载与多维透视示例

```python
import pandas as pd

# 1. 加载并透视 ARR 追赶轨迹
df_arr = pd.read_csv('data/anthropic_vs_openai_arr_timeline.csv')
print(df_arr[['quarter', 'anthropic_arr_usd_m', 'openai_arr_usd_m', 'openai_to_anthropic_ratio']].tail(6))

# 2. 计算 SaaS 大浩劫中蒸发的总市值与平均回撤
df_saas = pd.read_csv('data/saas_giants_valuation_drawdown.csv')
print(f"统计巨头总市值蒸发: ${df_saas['market_cap_eroded_usd_b'].sum():,.1f} 亿美元")

# 3. 筛选 Terminal-Bench 4.0 突破 60% 的顶尖前沿模型
df_comp = pd.read_csv('data/frontier_ai_coding_agent_competitors.csv')
print(df_comp[df_comp['terminal_bench_4_0_pct'] > '60%'][['model_name', 'terminal_bench_4_0_pct', 'input_price_per_m_usd']])
```
