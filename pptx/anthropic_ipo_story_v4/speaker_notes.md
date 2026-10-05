# 演讲备注与来源

## 01 

来源：https://www.anthropic.com/news/confidential-draft-s1-sec
https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs

IPO已提交；超过两万亿美元为Reuters预期上市估值目标，非完成定价或当前上市市值。

## 02 一家成立五年的公司，正在冲击两万亿 IPO

来源：https://www.anthropic.com/news/confidential-draft-s1-sec
https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs

官方6月公告未确定发行股数、价格。Reuters9月预计美国中期选举后上市，不设定已确定敲钟日。

## 03 从阿里巴巴到 Anthropic：超级 IPO 的尺度

来源：https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs
https://www.alibabagroup.com/en-US/document-1490842489823690752
https://www.cnbc.com/2014/09/18/alibaba-prices-shares-at-68-a-share-dj.html
https://www.cnbc.com/2020/01/12/saudi-aramco-raises-ipo-to-record-29point4-billion-through-greenshoe-option.html
https://www.cnbc.com/2019/12/05/saudi-aramco-prices-shares-at-the-top-of-the-range-for-record-ipo-report-says.html
https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx

2026-10-05叙事纠正：合并原第3/4页，删除SpaceX纪录支线。历史公司只用于建立Anthropic估值尺度。公司估值按发行价：阿里167.62B（不是首日231.4B）；Aramco1.7T；SpaceX1.77T来自Reuters。发行总额含超额配售：阿里25.03B含公司及售股股东；Aramco29.4B；SpaceX官方85.7B，其股数乘135美元与公告金额不一致，按公告明确gross proceeds，冲突保留audit。Anthropic募资未定、>2T为报道目标。不是完整所有IPO名单，不宣称Anthropic募资额破纪录。

## 04 从成立到两万亿目标：仅仅五年

来源：https://www.anthropic.com/news/anthropic-raises-series-e-at-usd61-5b-post-money-valuation
https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation
https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation
https://www.anthropic.com/news/series-h
https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs

早期融资CSV日期轮次金额有错，保留2021成立而不画无原始证据的早期估值；折线各点等距展示事件，不代表等时距。IPO目标不用作为已成交融资点。

## 05 Claude Code 发布之后，公司年化收入陡增

来源：https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation
https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation
https://www.anthropic.com/news/series-h
https://www.anthropic.com/news/claude-3-7-sonnet
https://www.anthropic.com/news/claude-4

run-rate revenue不是全年确认营收、不是保证续约ARR，采用官方名称。公司整体收入并非全部来自ClaudeCode；时间共现不证明Code单独导致全部增长。年初约1B、8月>5B、2月14B、5月>47B，下限点。

## 06 Claude Code 本身，也跑出了十亿美元级生意

来源：https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation
https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation

2025.08 Code >0.5B；2026.02 >2.5B。业务订阅从2026年初增4倍，企业占Code收入过半。不是整个公司企业收入比例。

## 07 18–20 倍收入，怎样才能支撑两万亿？

来源：https://www.anthropic.com/news/series-h
https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs

Reuters全文没有100B ARR；仓库9月100B没有独立来源，不作为实际收入。以下100–111B是所需收入倒算。965/47=20.53；2000/47=42.55；2000/20=100；2000/18=111.11。

## 08 高增长之外，市场还在押注什么？

来源：https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs

2025净亏损近42B含约34B融资估值会计费用，不等于现金烧钱；经营亏损>8B。未来cloud/compute/infrastructure义务518B不是单年Capex。

## 09 从 Sonnet 的突破，到旗舰模型的工程能力跃迁

来源：{
  "checked_at": "2026-10-05",
  "provenance": "Anthropic release pages and system cards; repo CSV used as discovery only, conflicting scores replaced",
  "early": {
    "model": "Claude 2",
    "date": "2023-07-11",
    "benchmark": "HumanEval",
    "score": 71.2,
    "previous_model": "Claude 1.3",
    "previous_score": 56,
    "source": "https://www.anthropic.com/news/claude-2",
    "note": "No model named Sonnet 2 in official releases; Claude 2 predates Sonnet naming. Claude 3 Opus release does not disclose a comparable SWE Verified score."
  },
  "swe_verified": [
    {
      "name": "Sonnet 3.5",
      "date": "2024.06",
      "score": 33.4,
      "source": "https://www.anthropic.com/news/3-5-models-and-computer-use"
    },
    {
      "name": "Sonnet 3.5 v2",
      "date": "2024.10",
      "score": 49,
      "source": "https://www.anthropic.com/news/3-5-models-and-computer-use"
    },
    {
      "name": "Sonnet 3.7",
      "date": "2025.02",
      "score": 62.3,
      "source": "https://www.anthropic.com/news/claude-3-7-sonnet",
      "note": "Full 500 pass@1; custom scaffold 70.3 is on 489 eligible tasks, not plotted."
    },
    {
      "name": "Opus 4",
      "date": "2025.05",
      "score": 72.5,
      "source": "https://www.anthropic.com/news/claude-4"
    },
    {
      "name": "Sonnet 4",
      "date": "2025.05",
      "score": 72.7,
      "source": "https://www.anthropic.com/news/claude-4"
    },
    {
      "name": "Opus 4.1",
      "date": "2025.08",
      "score": 74.5,
      "source": "https://www.anthropic.com/news/claude-opus-4-1"
    },
    {
      "name": "Sonnet 4.5",
      "date": "2025.09",
      "score": 77.2,
      "source": "https://www.anthropic.com/news/claude-sonnet-4-5"
    },
    {
      "name": "Opus 4.5",
      "date": "2025.11",
      "score": 80.9,
      "source": "https://www.anthropic.com/claude-opus-4-5-system-card",
      "page": 20
    },
    {
      "name": "Opus 4.6",
      "date": "2026.02",
      "score": 80.8,
      "source": "https://www.anthropic.com/claude-opus-4-6-system-card",
      "page": 19
    },
    {
      "name": "Sonnet 4.6",
      "date": "2026.02",
      "score": 79.6,
      "source": "https://www.anthropic.com/claude-sonnet-4-6-system-card",
      "page": 16
    },
    {
      "name": "Mythos Preview",
      "date": "2026.04",
      "score": 93.9,
      "source": "https://www.anthropic.com/claude-mythos-preview-system-card",
      "page": 189
    },
    {
      "name": "Opus 4.7",
      "date": "2026.04",
      "score": 87.6,
      "source": "https://www.anthropic.com/news/claude-opus-4-7"
    },
    {
      "name": "Opus 4.8",
      "date": "2026.05",
      "score": 88.6,
      "source": "https://www.anthropic.com/claude-opus-4-8-system-card",
      "page": 195
    },
    {
      "name": "Mythos / Fable 5",
      "date": "2026.06",
      "score": 95.5,
      "paired_score": 95,
      "source": "https://www.anthropic.com/claude-fable-5-mythos-5-system-card",
      "page": 253
    },
    {
      "name": "Sonnet 5",
      "date": "2026.06",
      "score": 85.2,
      "source": "https://www.anthropic.com/claude-sonnet-5-system-card",
      "page": 116
    },
    {
      "name": "Opus 5",
      "date": "2026.07",
      "score": 96,
      "source": "https://www.anthropic.com/claude-opus-5-system-card",
      "page": 153
    }
  ],
  "new_swe_pro": [
    {
      "name": "Mythos / Fable 5.1",
      "score": 81.2,
      "source": "https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card",
      "page": 167
    },
    {
      "name": "Opus 5.5",
      "score": 89.9,
      "source": "https://www.anthropic.com/claude-opus-5-5-system-card",
      "page": 175
    },
    {
      "name": "Sonnet 5.5",
      "score": 81.3,
      "source": "https://www.anthropic.com/claude-sonnet-5-5-system-card",
      "page": 109
    }
  ],
  "terminal_panels": [
    {
      "version": "原版 · 2025",
      "harness": "发布时配置；Opus 4 使用 Claude Code",
      "rows": [
        [
          "Opus 4",
          43.2
        ],
        [
          "Sonnet 4",
          35.5
        ],
        [
          "Opus 4.1",
          43.3
        ],
        [
          "Sonnet 4.5",
          50
        ]
      ],
      "sources": [
        "https://www.anthropic.com/news/claude-4",
        "https://www.anthropic.com/news/claude-opus-4-1",
        "https://www.anthropic.com/news/claude-sonnet-4-5"
      ]
    },
    {
      "version": "2.0 · 2025–26",
      "harness": "Terminus-2；各代发布配置",
      "rows": [
        [
          "Opus 4.5",
          59.3
        ],
        [
          "Opus 4.6",
          65.4
        ],
        [
          "Sonnet 4.6",
          59.1
        ],
        [
          "Mythos Preview",
          82
        ],
        [
          "Opus 4.7",
          69.4
        ]
      ],
      "sources": [
        "https://www.anthropic.com/claude-opus-4-5-system-card",
        "https://www.anthropic.com/claude-opus-4-6-system-card",
        "https://www.anthropic.com/claude-sonnet-4-6-system-card",
        "https://www.anthropic.com/claude-mythos-preview-system-card",
        "https://www.anthropic.com/news/claude-opus-4-7"
      ]
    },
    {
      "version": "2.1 · 2026",
      "harness": "4.8: Terminus-2；后续含不同 harness",
      "rows": [
        [
          "Opus 4.8",
          74.6
        ],
        [
          "Fable 5",
          84.3
        ],
        [
          "Mythos 5",
          88
        ],
        [
          "Sonnet 5",
          80.4
        ]
      ],
      "sources": [
        "https://www.anthropic.com/claude-opus-4-8-system-card",
        "https://www.anthropic.com/claude-fable-5-mythos-5-system-card",
        "https://www.anthropic.com/claude-sonnet-5-system-card"
      ],
      "note": "Fable/Mythos5 card reruns Opus4.8 at82.7, not substituted for release74.6. Sonnet5 uses mini-swe-agent."
    },
    {
      "version": "4.0 · 2026",
      "harness": "Claude Code --bare；5.5 含 fallback",
      "rows": [
        [
          "Sonnet 5",
          10.3
        ],
        [
          "Fable 5",
          42
        ],
        [
          "Opus 5",
          52.3
        ],
        [
          "Fable 5.1",
          55.8
        ],
        [
          "Mythos 5.1",
          60.9
        ],
        [
          "Opus 5.5",
          66.4
        ],
        [
          "Sonnet 5.5",
          70.6
        ]
      ],
      "sources": [
        "https://www.anthropic.com/claude-sonnet-5-5",
        "https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card",
        "https://www.anthropic.com/claude-opus-5-5-system-card",
        "https://www.anthropic.com/claude-sonnet-5-5-system-card"
      ],
      "note": "Opus5.5 xhigh (max64.8), other shown 5.1/5.5 models max; Mythos and Fable are same core with different safeguards/access. 5/10/15 repeats vary. Sonnet5 10.3 from latest release body, no finer setting disclosed there."
    }
  ]
}

以repo数据发现节点，再按官方发布页和system card逐项重建。Claude 2不是Sonnet 2；71.2为HumanEval，不能入Verified。Claude 3 Opus原发布未提供同口径Verified，不用CSV错标33.4。3.7用500题62.3；定制scaffold70.3为489题，旁注不入主图。历代harness、thinking、trial数变化，是官方能力足迹，不是控制配置的逐代实验。Mythos/Fable5 95.5/95来自card253页；Opus5 96来自card153页。5.1/5.5未报Verified，不能用repo96.5/97.8/98.1；右栏独立Pro81.2/89.9/81.3。

## 10 Terminal-Bench：Claude 历代旗舰的执行能力

来源：[
  {
    "version": "原版 · 2025",
    "harness": "发布时配置；Opus 4 使用 Claude Code",
    "rows": [
      [
        "Opus 4",
        43.2
      ],
      [
        "Sonnet 4",
        35.5
      ],
      [
        "Opus 4.1",
        43.3
      ],
      [
        "Sonnet 4.5",
        50
      ]
    ],
    "sources": [
      "https://www.anthropic.com/news/claude-4",
      "https://www.anthropic.com/news/claude-opus-4-1",
      "https://www.anthropic.com/news/claude-sonnet-4-5"
    ]
  },
  {
    "version": "2.0 · 2025–26",
    "harness": "Terminus-2；各代发布配置",
    "rows": [
      [
        "Opus 4.5",
        59.3
      ],
      [
        "Opus 4.6",
        65.4
      ],
      [
        "Sonnet 4.6",
        59.1
      ],
      [
        "Mythos Preview",
        82
      ],
      [
        "Opus 4.7",
        69.4
      ]
    ],
    "sources": [
      "https://www.anthropic.com/claude-opus-4-5-system-card",
      "https://www.anthropic.com/claude-opus-4-6-system-card",
      "https://www.anthropic.com/claude-sonnet-4-6-system-card",
      "https://www.anthropic.com/claude-mythos-preview-system-card",
      "https://www.anthropic.com/news/claude-opus-4-7"
    ]
  },
  {
    "version": "2.1 · 2026",
    "harness": "4.8: Terminus-2；后续含不同 harness",
    "rows": [
      [
        "Opus 4.8",
        74.6
      ],
      [
        "Fable 5",
        84.3
      ],
      [
        "Mythos 5",
        88
      ],
      [
        "Sonnet 5",
        80.4
      ]
    ],
    "sources": [
      "https://www.anthropic.com/claude-opus-4-8-system-card",
      "https://www.anthropic.com/claude-fable-5-mythos-5-system-card",
      "https://www.anthropic.com/claude-sonnet-5-system-card"
    ],
    "note": "Fable/Mythos5 card reruns Opus4.8 at82.7, not substituted for release74.6. Sonnet5 uses mini-swe-agent."
  },
  {
    "version": "4.0 · 2026",
    "harness": "Claude Code --bare；5.5 含 fallback",
    "rows": [
      [
        "Sonnet 5",
        10.3
      ],
      [
        "Fable 5",
        42
      ],
      [
        "Opus 5",
        52.3
      ],
      [
        "Fable 5.1",
        55.8
      ],
      [
        "Mythos 5.1",
        60.9
      ],
      [
        "Opus 5.5",
        66.4
      ],
      [
        "Sonnet 5.5",
        70.6
      ]
    ],
    "sources": [
      "https://www.anthropic.com/claude-sonnet-5-5",
      "https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card",
      "https://www.anthropic.com/claude-opus-5-5-system-card",
      "https://www.anthropic.com/claude-sonnet-5-5-system-card"
    ],
    "note": "Opus5.5 xhigh (max64.8), other shown 5.1/5.5 models max; Mythos and Fable are same core with different safeguards/access. 5/10/15 repeats vary. Sonnet5 10.3 from latest release body, no finer setting disclosed there."
  }
]

不同版本不连线、不计算跨版本增幅。原版Opus4 43.2 ClaudeCode；Opus4.1 43.3 Terminus1，Sonnet4.5 50.0发布表。2.0 Opus4.5 59.3为128Kthinking原始发布而非后续重测59.8；Opus4.6 65.4 max；Sonnet4.6 59.1无thinking；Mythos Preview82 max；Opus4.7 69.4无thinking。2.1 Opus4.8发布74.6 Terminus2，后续重跑82.7不混入发布点；Fable84.3/Mythos88.0取card251；Sonnet5 80.4 mini-swe-agent。4.0 Opus5.5 66.4 xhigh+fallback；其他5.1和Sonnet5.5为max；各点重复次数不同。Mythos/Fable5.1同一基础模型，差异是safeguards/access。Sonnet5 10.3由Sonnet5.5发布正文提供，不能将它与Sonnet5 TB2.1 80.4相减。数据与AA模型-only59.6不同。Terminal-Bench始于2025，不能为Claude2/3.x补造分数。

## 11 今天的第三方对照：Claude 强，但领先不是天赋

来源：{
  "retrieved_at": "2026-10-04",
  "scope": "Slide 05 only",
  "source_priority": "Artificial Analysis independent evaluations; official releases for missing entries only",
  "terminal_bench": {
    "version": "4.0",
    "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0?models=claude-opus-5-5%2Cgpt-6-astra%2Cgemini-3-1-pro-preview",
    "harness": "mini-swe-agent",
    "tasks": 66,
    "repeats_per_task": 3,
    "metric": "pass@1 averaged over three repeats per task",
    "scores_percent": [
      59.6,
      59.1,
      4
    ]
  },
  "intelligence_index": {
    "version": "4.3.2",
    "metric": "Artificial Analysis Intelligence Index, not a percentage or coding success rate",
    "scores": [
      58,
      53,
      30
    ]
  },
  "models": [
    {
      "display_name": "Opus 5.5",
      "evaluated_variant": "Claude Opus 5.5 (max with fallback)",
      "url": "https://artificialanalysis.ai/models/claude-opus-5-5"
    },
    {
      "display_name": "GPT-6 Astra",
      "evaluated_variant": "GPT-6 Astra (max)",
      "url": "https://artificialanalysis.ai/models/gpt-6-astra"
    },
    {
      "display_name": "Gemini 3.1 Pro",
      "evaluated_variant": "Gemini 3.1 Pro Preview",
      "url": "https://artificialanalysis.ai/models/gemini-3-1-pro-preview"
    }
  ],
  "swe_bench_pro": {
    "status": "No complete same-version three-model comparison verified in inspected public sources",
    "action": "Replace right panel with explicitly labelled AA Intelligence Index rather than retain unverified repository scores"
  },
  "official_cross_check": {
    "url": "https://www.anthropic.com/news/claude-opus-5-5",
    "terminal_bench_percent": {
      "opus_5_5_xhigh": 66.4,
      "gpt_6_astra_high_as_reported_by_openai": 57.9
    },
    "used_in_chart": false,
    "reason": "Different harness/effort/setup from AA; official table does not list SWE-bench Pro. OpenAI direct announcement access returned HTTP 403 / challenge."
  },
  "interpretation": "0.5 percentage point observed Terminal-Bench difference; not evidence of a statistically significant model lead. Results are configuration-specific. Other deck pages remain repository-sourced and are not reverified by this update."
}

AA TB4 mini-swe-agent 66题3次平均pass@1；fallback可能用其他模型，0.5pp观测差不证明显著领先。AA综合指数v4.3.2不是编码通过率。

## 12 Claude Code 的新范式：交给目标，而不是索取答案

来源：https://www.anthropic.com/news/claude-3-7-sonnet
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents

命令文件回显为教学示意，非本次真实运行；修改在测试环境，生产上线另行授权。

## 13 为什么 coding model 会越来越强？

来源：https://github.com/deepseek-ai/DeepSeek-R1
https://www.tbench.ai/news/terminal-bench-4-0

机制图不是Claude私有训练配方；公开RL研究支持反思自检。评测数据不是训练数据，不把TB基准放进训练语料。运行中纠错不等于在线更新权重。

## 14 用 code 处理一切需要计算的部分

来源：https://www.anthropic.com/engineering/code-execution-with-mcp

表内数据是教学样本，非真实账务；订单980到账950差30、1200/1200差0、600/0差600。不直接修改账目。

## 15 从 MCP 到 Skills：接入系统，再保存做事方法

来源：https://www.anthropic.com/news/model-context-protocol
https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

MCP2024.11.25；Skills2025.10.16，2025.12.18开放标准。Skills包含指令脚本资源，渐进加载。

## 16 它引领的潮流，已经超出 Claude 自己

来源：https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

2025.12.09官方生态快照，自报非独立市场份额；10000+ active public servers，97M+月SDK下载，不是使用人数。

## 17 更好的 Agent，不是把所有信息都塞进提示词

来源：https://www.anthropic.com/engineering/code-execution-with-mcp

150000到2000 Tokens，98.6667%舍入98.7%，仅工具相关上下文，不是全任务费用。

## 18 Gemini 的反例：综合聪明，不自动等于工程能干

来源：https://artificialanalysis.ai/models/gemini-3-1-pro-preview
https://artificialanalysis.ai/evaluations/terminalbench-4-0

只说明本次型号在TB4弱，不据此断言Google整体衰落、组织训练原因、产品关闭或迁移导致失败。综合指数30、TB4 4%，两者不同单位不可相减。

## 19 OpenAI 的正例：把竞争带到执行效率

来源：https://artificialanalysis.ai/agents/coding-agents
https://github.com/openai/codex

63/62分，15.5/29.4min，1.04/7.47USD；不是控制所有变量的模型训练实验。不能从两个快照声称历史知耻或放弃o系列。

## 20 AGI：不是更会聊天，而是能够持续扩展能力

来源：演讲工作定义；不是AGI已有统一公认判定标准

工具使用、持续学习、自我迭代为演讲框架；仅三条件不充分证明人类级通用性。需跨域迁移可靠性自主程度。

## 21 编码，是把理解变成行动的通用接口

来源：https://www.anthropic.com/engineering/code-execution-with-mcp
https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

方向性机制，不把所有任务归约为编码；授权、接口、现场反馈仍必要。

## 22 从软件世界，到物理世界：代码搭起最后一段桥

来源：机制示意；非Claude机器人实测或产品能力承诺

物理动作必须有被授权硬件、传感器反馈、保护系统；不能把API访问等同物理通用智能。

## 23 AGI 还有多远？先看它是否开始参与自己的研发

来源：https://www.anthropic.com/institute/measuring-pace-of-ai-development

厂商原型指标自报：26% AL4 AI主导、人监督；>90% AL3+协作包含AL4，不相加；不是发现占比或26%模型改进，未报告AL5完全自主。

## 24 下一轮智能，开始吃到上一轮智能的红利

来源：https://www.anthropic.com/institute/measuring-pace-of-ai-development

RSI为可能的代际反馈机制；不等于完全自主递归改进已实现或智能爆炸已证实。创意、验证、算力与安全为约束。

## 25 距离 AGI，剩下的是哪些可观察的门槛？

来源：分析框架
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
https://www.anthropic.com/institute/measuring-pace-of-ai-development

文件记忆和skills改善运行系统不等于权重持续学习。AI主导研发仍人监督；物理世界长期可靠性未由代码基准证明。

## 26 两万亿押注的，不是一个更好的代码补全工具

来源：https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs
https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation
https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation
https://www.anthropic.com/news/series-h
https://www.anthropic.com/institute/measuring-pace-of-ai-development

结尾为商业与技术方向性判断，非目标估值合理性的确定结论或投资建议。

## 27 岗位不会只剩“会不会写代码”这一条分界线

来源：组织方向性分析；授权、隐私与生产操作责任保留在人类组织

