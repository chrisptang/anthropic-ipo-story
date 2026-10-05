# -*- coding: utf-8 -*-
"""
Module 1: Part 1 - Capital Myth & ARR Flywheel (Slides 4-13)
Visual & Diagram-Oriented Redesign
"""

SLIDES_1 = """
// ==========================================
// SLIDE 4: Section Divider - Part 1
// ==========================================
{
  const slide = pres.addSlide();
  addSectionDivider(
    slide,
    '第一篇：资本神话与 ARR 飞轮',
    '财务机器、增长飞轮与超级 IPO 定价逻辑',
    '本篇深入穿透 Anthropic 2 万亿美元估值背后的财务本质。从全球市值坐标系的量化对标，到 16 个季度对 OpenAI 的史诗级逆转，再到单品 Claude Code 掀起的百倍 Token 杠杆与双云中立护城河。',
    'PART 1 · CAPITAL & ARR FLYWHEEL',
    4
  );
  slide.addNotes('【演讲提示】进入第一篇。本篇我们要解决的核心疑问是：2 万亿美元究竟是虚无的资本泡沫，还是一台可以精确拆解到每百万 Token 利润率与单任务产出的超级财务机器？我们将用详实的逐季数据揭开真相。');
}

// ==========================================
// SLIDE 5: 1.1 2 万亿美元量化坐标系：全球超级巨头排位赛
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.1 2 万亿美元量化坐标系：全球超级巨头排位赛', 'Part 1 · Capital Benchmark', 5);

  // Left: Native Bar Chart of Global Tech Giants Market Cap ($T)
  const megaCapData = [
    {
      name: '市值 ($ Trillion)',
      labels: ['Meta', 'Anthropic (IPO)', 'Amazon', 'Alphabet', 'Microsoft', 'Nvidia', 'Apple'],
      values: [1.65, 2.00, 2.15, 2.25, 3.10, 3.20, 3.45]
    }
  ];

  slide.addChart(pres.ChartType.bar, megaCapData, {
    x: 0.8, y: 1.45, w: 6.2, h: 5.35,
    showLegend: false,
    chartColors: [C.CYAN],
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MAIN,
    valAxisLabelColor: C.TEXT_MUTED
  });

  // Right Side: Macro Comparison & KPI Cards
  addCard(slide, 7.2, 1.45, 5.33, 5.35);
  slide.addText('超中国 Top 10 互联网巨头总和 1.5 倍', {
    x: 7.45, y: 1.7, w: 4.8, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  // Ratio Visual Bar
  slide.addShape(pres.ShapeType.rect, {
    x: 7.45, y: 2.15, w: 4.8, h: 0.7,
    fill: { color: C.INNER_CARD },
    line: { color: C.CARD_BORDER, width: 1 }
  });
  slide.addText('Anthropic 目标估值: $2.00 T (150.3%)', {
    x: 7.6, y: 2.22, w: 4.5, h: 0.25,
    fontSize: 10.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });
  slide.addText('中国前十互联网合计: $1.33 T (腾讯+阿里+拼多多等十强)', {
    x: 7.6, y: 2.48, w: 4.5, h: 0.28,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  // 3 Visual KPI Blocks
  const kpis = [
    {
      num: '$8,500 万 / 人',
      label: '单人创收极限',
      desc: '全公司仅约 1,200 名全职员工，打破人类商业史最高人效（苹果为 $2,100万/人）',
      color: C.CYAN
    },
    {
      num: '19.0x 动态 PS 倍数',
      label: '估值倍数理性回归',
      desc: '基于 2026 年化跑道营收 $105B 计算，已从概念期 60x+ 降至成熟成长倍数',
      color: C.GREEN
    },
    {
      num: '全球第 6 大超级巨头',
      label: '资本重构定调',
      desc: '超越 Meta，直接比肩亚马逊与 Alphabet，全球资产由流量转向硅基生产力',
      color: C.GOLD
    }
  ];

  kpis.forEach((kp, idx) => {
    const yK = 3.05 + idx * 1.15;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.45, y: yK, w: 4.8, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(kp.num, {
      x: 7.6, y: yK + 0.1, w: 3.2, h: 0.32,
      fontSize: 14, fontFace: 'Arial', color: kp.color, bold: true
    });
    slide.addText(kp.label, {
      x: 10.5, y: yK + 0.1, w: 1.6, h: 0.3,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right'
    });
    slide.addText(kp.desc, {
      x: 7.6, y: yK + 0.45, w: 4.5, h: 0.52,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】本页从宏观量化坐标建立冲击感。左侧柱状图清晰展示 Anthropic 以 2 万亿美元挂牌，直接超越 Meta，位列全球第 6 大科技超级巨头。右侧突出两大人效与估值指标：1,200 人的公司，人均支撑估值 8,500 万美元，远超苹果的 2,100 万美元。');
}

// ==========================================
// SLIDE 6: 1.1.2 估值跃迁轨迹：从 $18B 到 $2T 的五级火箭
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.1.2 估值跃迁轨迹：从 $18B 到 $2T 的五级火箭路线图', 'Part 1 · Valuation History', 6);

  // Table of Funding & Valuation History
  const tableRows = [
    [
      { text: '轮次/时点', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '融资金额', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '投后估值', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '领投及关键资方', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '对应产品与技术拐点', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'left', fontSize: 10 } }
    ],
    [
      { text: '2023 Q1 (Series A/B)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$12.4 亿', options: { fill: C.INNER_CARD, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$180 亿', options: { fill: C.INNER_CARD, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Spark Capital, Google ($3亿)', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 1.0 发布；确立 Constitutional AI 宪法级对齐路线', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: '2023 Q3 (Series C)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$40.0 亿', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$350 亿', options: { fill: C.CARD_BG, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Amazon (首笔 $40亿 承诺)', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 2.0 推出 100k 上下文；绑定 AWS Bedrock 企业分销网络', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: '2024 Q2 (Series D)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$27.5 亿', options: { fill: C.INNER_CARD, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$600 亿', options: { fill: C.INNER_CARD, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Amazon 追加, Menlo Ventures', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 3.5 Sonnet 问世；首次在编码与推理指标上反超 GPT-4o', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: '2025 Q1 (Series E)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$60.0 亿', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$1,800 亿', options: { fill: C.CARD_BG, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Google 追加 ($20亿), 顶级对冲基金', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 3.7 / 4.0 混合动态推理；SWE-bench Verified 达 70.3%', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: '2025 Q4 (Series F)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$150 亿', options: { fill: C.INNER_CARD, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$9,650 亿', options: { fill: C.INNER_CARD, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '主权财富基金, Coatue, Fidelity', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: 'Claude Code 杀手级工具爆发；企业 ARR 单季净增超 $25 亿', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: '2026 Q4 (IPO Target)', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '$200 亿募资', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '$20,000 亿', options: { fill: '2A374A', color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '高盛、大摩、摩根大通主承销团', options: { fill: '2A374A', color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 5.5 发布；Terminal-Bench 70.6%；实现 ASL-3 安全下 RSI', options: { fill: '2A374A', color: C.WHITE, align: 'left', fontSize: 9.5 } }
    ]
  ];

  slide.addTable(tableRows, {
    x: 0.8, y: 1.45, w: 11.73,
    colW: [1.8, 1.2, 1.3, 2.8, 4.63],
    border: { type: 'solid', pt: 1, color: C.CARD_BORDER }
  });

  // 3 Process Highlights Below Table
  const stages = [
    { step: 'STAGE 1 · 技术原型', val: '$18B -> $60B', sub: '耗时 15 个月，验证 Constitutional AI 与对齐架构' },
    { step: 'STAGE 2 · 编码引爆', val: '$60B -> $180B', sub: '耗时 9 个月，3.5 Sonnet 夺取开发者统治心智' },
    { step: 'STAGE 3 · 超级自举', val: '$180B -> $2,000B', sub: '耗时 18 个月，Claude Code 与 RSI 引发指数级重估' }
  ];

  stages.forEach((st, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 5.35, 3.75, 1.45);
    slide.addText(st.step, {
      x: x + 0.2, y: 5.48, w: 3.35, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true
    });
    slide.addText(st.val, {
      x: x + 0.2, y: 5.72, w: 3.35, h: 0.35,
      fontSize: 16, fontFace: 'Arial', color: C.GOLD, bold: true
    });
    slide.addText(st.sub, {
      x: x + 0.2, y: 6.08, w: 3.35, h: 0.6,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】本页展示了五级火箭式的融资轨迹。请投资人特别注意 2025 年的斜率变化：Claude Code 的推出直接推动估值从 $1,800 亿跨入近万亿美元，使市场彻底确认了“编码 Agent = 工业级现金流引擎”的逻辑。');
}

// ==========================================
// SLIDE 7: 1.2 ARR 逐季大逆转：从 16:1 差距到全面反超
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.2 ARR 逐季大逆转：从 16:1 差距到全面反超', 'Part 1 · ARR Trajectory', 7);

  // Left Chart: ARR Timeline
  const chartData = [
    {
      name: 'Anthropic ARR ($B)',
      labels: ['23Q1', '23Q3', '24Q1', '24Q3', '25Q1', '25Q3', '26Q1', '26Q4'],
      values: [0.01, 0.04, 0.25, 0.70, 2.2, 8.5, 28.0, 105.0]
    },
    {
      name: 'OpenAI ARR ($B)',
      labels: ['23Q1', '23Q3', '24Q1', '24Q3', '25Q1', '25Q3', '26Q1', '26Q4'],
      values: [0.20, 1.0, 2.5, 4.2, 9.8, 22.0, 52.0, 92.0]
    }
  ];

  slide.addChart(pres.ChartType.line, chartData, {
    x: 0.8, y: 1.45, w: 6.5, h: 5.35,
    showLegend: true, legendPos: 't',
    chartColors: [C.CYAN, C.GOLD],
    lineDataSymbol: 'circle',
    lineDataSymbolSize: 6,
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MUTED,
    valAxisLabelColor: C.TEXT_MUTED,
    legendColor: C.TEXT_MAIN
  });

  // Right Side: 3-Phase Milestone Flow Cards
  addCard(slide, 7.5, 1.45, 5.0, 5.35);
  slide.addText('16 个季度追赶反超的三个阶段', {
    x: 7.75, y: 1.7, w: 4.5, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const phases = [
    {
      phase: '阶段一：追赶期 (2023–2024H1)',
      tag: '16x 差距',
      color: C.RED,
      stats: 'Anthropic $100M vs OpenAI $1.6B',
      desc: 'OpenAI 凭借 ChatGPT 垄断消费级入口；Anthropic 避其锋芒，深耕底层 API 与对齐架构。'
    },
    {
      phase: '阶段二：胶着期 (2024H2–2025)',
      tag: '缩小至 2x',
      color: C.GOLD,
      stats: 'Anthropic $14B vs OpenAI $28B',
      desc: 'Claude 3.5 Sonnet 引发全球工程师大迁徙；企业工作流收入爆发，营收差距急剧收窄。'
    },
    {
      phase: '阶段三：反超期 (2026 全年)',
      tag: '反超登顶',
      color: C.GREEN,
      stats: 'Anthropic $105B vs OpenAI $92B',
      desc: 'Claude Code 引爆百倍 Token 杠杆；无人值守任务全面进入 500 强采购，登顶全球 AI 第一。'
    }
  ];

  phases.forEach((p, idx) => {
    const y = 2.15 + idx * 1.6;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.75, y: y, w: 4.5, h: 1.45,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(p.phase, {
      x: 7.9, y: y + 0.1, w: 3.0, h: 0.25,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(p.tag, {
      x: 10.9, y: y + 0.1, w: 1.2, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: p.color, bold: true, align: 'right'
    });
    slide.addText(p.stats, {
      x: 7.9, y: y + 0.38, w: 4.2, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: p.color, bold: true
    });
    slide.addText(p.desc, {
      x: 7.9, y: y + 0.68, w: 4.2, h: 0.65,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】这张 ARR 趋势图是本研报的核心量化图表之一。请重点强调：2023 年两者相差 16 倍，但到 2026 年底 Anthropic 实现逆转。反超的动力并非来自普通网民的闲聊，而是全球 Fortune 500 强企业的生产级研发工作流采购。');
}

// ==========================================
// SLIDE 8: 1.2.2 增长动因双轨制：C 端订阅触顶 vs B 端工作流裂变
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.2.2 增长动因双轨制：C 端订阅触顶 vs B 端工作流裂变', 'Part 1 · Revenue Engines', 8);

  // Left: Consumer Leaky Funnel (OpenAI)
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 1.7, w: 3.2, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.RED, width: 1 }
  });
  slide.addText('C 端消费级流量陷阱 (OPENAI)', {
    x: 1.1, y: 1.7, w: 3.2, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.RED, bold: true, align: 'center'
  });

  // 3 Process Blocks of C-End Trap
  const cSteps = [
    { title: 'MAU 增速见顶 & 高流失率', stat: '年化流失率 > 45%', desc: '泛问答娱乐用户缺乏长期刚性需求，$20/月订阅极易因开源或免费竞品流失。' },
    { title: '单次问答交互极低 Token 密度', stat: '仅 1k–3k Tokens/次', desc: '用户用完即走，无法持续产生计算负载，客单价受限于人工打字阅读物理带宽。' },
    { title: '消费级日用品化与无情价格战', stat: '边际定价权快速丧失', desc: '手机厂商与搜索引擎免费集成对话助理，传统聊天窗口逐步丧失溢价空间。' }
  ];

  cSteps.forEach((cs, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(cs.title, {
      x: 1.25, y: y + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(cs.stat, {
      x: 4.4, y: y + 0.12, w: 1.6, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: C.RED, bold: true, align: 'right'
    });
    slide.addText(cs.desc, {
      x: 1.25, y: y + 0.45, w: 4.8, h: 0.75,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  // Right: Enterprise Compounding Flywheel (Anthropic)
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 7.1, y: 1.7, w: 3.5, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.GREEN, width: 1 }
  });
  slide.addText('B 端企业工作流裂变飞轮 (ANTHROPIC)', {
    x: 7.1, y: 1.7, w: 3.5, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.GREEN, bold: true, align: 'center'
  });

  const bSteps = [
    { title: '深度嵌入核心研发 CI/CD 管线', stat: '无缝接入生产环境', desc: '作为后端无头引擎执行无人值守测试与自愈，脱离人类打字速度限制。' },
    { title: '长程自动化任务算力无上限', stat: '500k–1.5M Tokens/次', desc: '单次代码重构任务消耗数百万 Tokens，企业账单随自动化深入指数级飙升。' },
    { title: '极高组织切换成本与生态绑定', stat: 'NDR 维持 160% 高位', desc: '研发流程、自动化脚本与合规链条深度绑定 Claude，形成极强护城河。' }
  ];

  bSteps.forEach((bs, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(bs.title, {
      x: 7.25, y: y + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(bs.stat, {
      x: 10.4, y: y + 0.12, w: 1.6, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: C.GREEN, bold: true, align: 'right'
    });
    slide.addText(bs.desc, {
      x: 7.25, y: y + 0.45, w: 4.8, h: 0.75,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】这一页通过对比图解清晰展示了两种商业模式的分水岭：左侧是 OpenAI 的漏斗式 C 端消费模型，面临流失与天花板；右侧是 Anthropic 的复合扩张飞轮，嵌入企业基础设施，实现无上限的 Token 消费拉动。');
}

// ==========================================
// SLIDE 9: 1.3 Claude Code：单品 $25 亿 ARR 的引爆点
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.3 Claude Code：单品 $25 亿 ARR 的引爆点与百倍 Token 杠杆', 'Part 1 · The Killer Product', 9);

  // Left Chart: Native Column Chart of Token Consumption per Task
  const tokenChartData = [
    {
      name: '单任务 Token 消耗量 (k Tokens)',
      labels: ['传统对话 (Chat)', '代码补全 (Copilot)', '多轮对话 (Multi-turn)', 'Claude Code 任务'],
      values: [3.0, 25.0, 60.0, 850.0]
    }
  ];

  slide.addChart(pres.ChartType.col, tokenChartData, {
    x: 0.8, y: 1.45, w: 6.0, h: 5.35,
    showLegend: false,
    chartColors: [C.GOLD],
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MAIN,
    valAxisLabelColor: C.TEXT_MUTED
  });

  // Right Side: 4-Step Autonomous Task Loop
  addCard(slide, 7.0, 1.45, 5.53, 5.35);
  slide.addText('Claude Code 单任务百倍膨胀机制', {
    x: 7.25, y: 1.7, w: 5.0, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  const taskLoop = [
    { step: '01. 仓库拓扑扫描与检索', cost: '120k Tokens', desc: '深度索引跨模块依赖，加载数十个关联源文件上下文。' },
    { step: '02. 动态沙箱执行与报错捕获', cost: '180k Tokens', desc: '执行 npm test / pytest，抓取真实运行时 STDERR 栈追踪。' },
    { step: '03. 跨多文件闭环修复与重构', cost: '350k Tokens', desc: '修改 8 个核心文件，解决编译器语法告警与潜在竞态。' },
    { step: '04. 回归测试验证与 PR 自动提交', cost: '200k Tokens', desc: '反复重试直到全部测试通过，自动编写提交日志并合入。' }
  ];

  taskLoop.forEach((tl, idx) => {
    const y = 2.15 + idx * 1.18;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.25, y: y, w: 5.0, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(tl.step, {
      x: 7.4, y: y + 0.1, w: 3.4, h: 0.25,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(tl.cost, {
      x: 10.8, y: y + 0.1, w: 1.3, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: C.GOLD, bold: true, align: 'right'
    });
    slide.addText(tl.desc, {
      x: 7.4, y: y + 0.4, w: 4.7, h: 0.55,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】Claude Code 是 Anthropic 历史上最关键的商业转折点。左侧柱状图清晰对比了单任务消耗：传统聊天仅 3k，而 Claude Code 达到 850k，整整 280 倍的膨胀！右侧展示了任务拆解：索引、测试、重构、回归闭环，让大模型真正变成了自动吃算力的无人值守工兵。');
}

// ==========================================
// SLIDE 10: 1.3.2 开发者飞轮与自蔓延网络：NDR 160% 驱动机制
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.3.2 开发者飞轮与自蔓延网络：NDR 160% 驱动机制', 'Part 1 · The Adoption Flywheel', 10);

  // 4 Horizontal Pipeline Stages
  const stages = [
    {
      step: 'STAGE 01',
      title: '极客自发采纳',
      tag: 'BOTTOM-UP',
      color: C.CYAN,
      metric: '首周留存率 > 85%',
      items: ['极客本地安装 CLI 工具', '终端极速响应与自愈', '个人付费转团队报销']
    },
    {
      step: 'STAGE 02',
      title: '团队脚本化集成',
      tag: 'VIRAL EXPANSION',
      color: C.GOLD,
      metric: '研发人效提升 3x',
      items: ['编写 Bash 管道协同', '嵌入本地 Lint 与构建', '团队口口相传自发扩散']
    },
    {
      step: 'STAGE 03',
      title: '部门 CI/CD 接入',
      tag: 'WORKFLOW LOCK',
      color: C.GREEN,
      metric: '百万 Token/次 消耗',
      items: ['接入 GitLab / GitHub Actions', '夜间无人值守回归测试', '效能部门正式立项预算']
    },
    {
      step: 'STAGE 04',
      title: '集团战略采购',
      tag: 'ENTERPRISE DEAL',
      color: C.PURPLE,
      metric: 'NDR 高达 160%',
      items: ['全员研发席位批量采购', 'VPC 私有安全网关落地', '锁定千万级美元保底']
    }
  ];

  stages.forEach((st, idx) => {
    const x = 0.8 + idx * 2.95;
    addCard(slide, x, 1.45, 2.8, 5.35);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 1.7, w: 2.4, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: st.color, width: 1 }
    });
    slide.addText(st.step + ' · ' + st.tag, {
      x: x + 0.2, y: 1.7, w: 2.4, h: 0.28,
      fontSize: 8.5, fontFace: 'Arial', color: st.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(st.title, {
      x: x + 0.2, y: 2.1, w: 2.4, h: 0.45,
      fontSize: 15, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    // KPI Badge inside card
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.2, y: 2.65, w: 2.4, h: 0.45,
      fill: { color: '26354A' },
      line: { color: st.color, width: 1 }
    });
    slide.addText(st.metric, {
      x: x + 0.2, y: 2.72, w: 2.4, h: 0.3,
      fontSize: 10.5, fontFace: 'Arial', color: st.color, bold: true, align: 'center'
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.2, y: 3.3, w: 2.4, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    // Bullets
    st.items.forEach((it, iIdx) => {
      const yI = 3.5 + iIdx * 1.0;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.2, y: yI, w: 2.4, h: 0.85,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(it, {
        x: x + 0.3, y: yI + 0.15, w: 2.2, h: 0.55,
        fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
      });
    });
  });

  slide.addNotes('【演讲提示】本页通过四阶段横向推进图，解析了开发者驱动 (PLG) 的自蔓延路径。工程师个人体验好 -> 团队写脚本 -> 部门挂 CI/CD -> 集团签下千万大单，推动净收入留存率 (NDR) 达到 160%。');
}

// ==========================================
// SLIDE 11: 1.4 财务会计穿透：Gross vs Net 口径与 420 亿公允价值亏损真相
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.4 财务会计穿透：Gross vs Net 口径与 420 亿亏损真相', 'Part 1 · Financial Deep Dive', 11);

  // Left Card: Revenue Bridge Diagram (Gross to Net)
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addText('云渠道分成收入确认桥接 (2026E)', {
    x: 1.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  const revBridge = [
    { label: 'Gross ARR (终端客户实际总消耗)', val: '$105.0 B', color: C.CYAN, sub: '华尔街衡量生态系统规模核心指标' },
    { label: '(-) AWS / GCP 云渠道分成与托管费 (~16%)', val: '-$17.0 B', color: C.RED, sub: '换取两大巨头顶级销售网络推广' },
    { label: 'Net ARR (直接进入 Anthropic 财报)', val: '$88.0 B', color: C.GREEN, sub: '真实自留净软件授权与 API 收入' }
  ];

  revBridge.forEach((rb, idx) => {
    const y = 2.25 + idx * 1.4;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.25,
      fill: { color: C.INNER_CARD },
      line: { color: rb.color, width: 1.2 }
    });
    slide.addText(rb.label, {
      x: 1.25, y: y + 0.12, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(rb.val, {
      x: 1.25, y: y + 0.42, w: 4.8, h: 0.42,
      fontSize: 18, fontFace: 'Arial', color: rb.color, bold: true
    });
    slide.addText(rb.sub, {
      x: 1.25, y: y + 0.88, w: 4.8, h: 0.25,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED
    });
  });

  // Right Card: The $42B Non-Cash Loss Reality
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('解密所谓的“420 亿美元净亏损”', {
    x: 7.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  // Comparison Blocks
  slide.addShape(pres.ShapeType.rect, {
    x: 7.1, y: 2.25, w: 5.1, h: 2.1,
    fill: { color: C.INNER_CARD },
    line: { color: C.GOLD, width: 1.5 }
  });
  slide.addText('US GAAP 会计规则下的“非现金重估”', {
    x: 7.25, y: 2.38, w: 4.8, h: 0.28,
    fontSize: 12, fontFace: 'Arial', color: C.GOLD, bold: true
  });
  slide.addText('-$360 亿美元 (85%+) 源于可转换优先股公允价值变动', {
    x: 7.25, y: 2.7, w: 4.8, h: 0.32,
    fontSize: 13, fontFace: 'Arial', color: C.RED, bold: true
  });
  slide.addText('由于 Anthropic 在 18 个月内估值从 $60B 暴涨至 $965B，会计准则强制将早期优先股增值计入当期账面亏损！\\n\\n该科目 100% 属于非现金性记账调整，企业没有任何资金流出！', {
    x: 7.25, y: 3.1, w: 4.8, h: 1.15,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
  });

  // Real OCF Block
  slide.addShape(pres.ShapeType.rect, {
    x: 7.1, y: 4.55, w: 5.1, h: 2.05,
    fill: { color: C.INNER_CARD },
    line: { color: C.GREEN, width: 1.5 }
  });
  slide.addText('真实运营造血能力透视 (2026E)', {
    x: 7.25, y: 4.68, w: 4.8, h: 0.28,
    fontSize: 12, fontFace: 'Arial', color: C.GREEN, bold: true
  });
  slide.addText('+$14.2 亿美元 经营现金流 (OCF) / EBITDA 转正 +12.4%', {
    x: 7.25, y: 5.0, w: 4.8, h: 0.32,
    fontSize: 13, fontFace: 'Arial', color: C.GREEN, bold: true
  });
  slide.addText('预付年度企业合同保障了极佳的营运资本周转；\\n算力资本开支 (Capex $28B) 完全由云巨头专项融资覆盖，经营底盘极为稳固。', {
    x: 7.25, y: 5.4, w: 4.8, h: 1.05,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
  });

  slide.addNotes('【演讲提示】投资人必须看透财报假象。媒体宣称的 420 亿巨亏是由于估值暴涨导致的可转股公允价值记账，这是典型的会计“好消息变成坏数字”。实际上公司 2026 年经调整 EBITDA 已转正为 12.4%，经营现金流高达 +14.2 亿美元。');
}

// ==========================================
// SLIDE 12: 1.5 双云阵营与中立护城河：AWS & Google 的三角闭环
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.5 双云阵营与中立护城河：AWS & Google 的三角闭环', 'Part 1 · Cloud Alliance', 12);

  // Triangular Alliance 3 Strategic Pillar Cards
  const pillars = [
    {
      title: '亚马逊 AWS 核心基座',
      role: '主算力与首选渠道',
      tag: '累计投资 $80 亿+',
      color: C.GOLD,
      items: [
        '【超大规模数据中心】绑定俄亥俄与俄勒冈算力基地',
        '【Trainium2 深度联调】长上下文存取延迟降低 3.2x',
        '【AWS Bedrock 推荐】全线大企业首选托管大模型',
        '【数千名销售佣金激励】直接背负 Claude 消耗 KPI'
      ]
    },
    {
      title: 'Anthropic 中立中枢',
      role: '“AI 瑞士”资本中立国',
      tag: '保持绝对控制权',
      color: C.CYAN,
      items: [
        '【拒绝单一依附】吸取 OpenAI 依附微软的治理惨痛教训',
        '【动态跨云比价】在 AWS 与 GCP 间调度获得最低电价',
        '【破除大企业锁死顾虑】多云部署消除世界 500 强安全担忧',
        '【保留算法全主权】模型权重与核心资产独立托管'
      ]
    },
    {
      title: '谷歌 Google 战略制衡',
      role: '备用算力与生态对冲',
      tag: '累计投资 $40 亿+',
      color: C.GREEN,
      items: [
        '【TPU v6 算力矩阵】提供 Trillium 超算农场峰值支持',
        '【Vertex AI 补充通道】覆盖安卓与 GCP 企业客户生态',
        '【有效牵制 AWS 定价】防止单一供应商恶意提价或断供',
        '【跨洲际光纤骨干】享受谷歌全球低时延网络互联'
      ]
    }
  ];

  pillars.forEach((p, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 5.35);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.3,
      fill: { color: C.INNER_CARD },
      line: { color: p.color, width: 1 }
    });
    slide.addText(p.tag, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: p.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(p.title, {
      x: x + 0.25, y: 2.1, w: 3.25, h: 0.45,
      fontSize: 16, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(p.role, {
      x: x + 0.25, y: 2.55, w: 3.25, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.9, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    p.items.forEach((it, iIdx) => {
      const yI = 3.1 + iIdx * 0.95;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.25, y: yI, w: 3.25, h: 0.85,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(it, {
        x: x + 0.35, y: yI + 0.1, w: 3.05, h: 0.65,
        fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
      });
    });
  });

  slide.addNotes('【演讲提示】Anthropic 的战略天才之处在于“双云制衡”。它同时接纳了全球最大的两家云巨头（亚马逊与谷歌）作为股东兼渠道，打造出如同国际中立国“瑞士”般的商业身位。这不仅保证了无尽的廉价算力供给，更彻底消除了大企业对单一云厂商绑定的恐惧。');
}

// ==========================================
// SLIDE 13: 1.6 IPO 交易结构与公司治理：PBC 架构、LTBT 与 S-1 风险因子
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '1.6 IPO 交易结构与公司治理：PBC 架构与 S-1 风险因子', 'Part 1 · Governance & S-1', 13);

  // Left Card: Dual Governance Structure Diagram
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addText('治理架构：公共利益公司 (PBC) 与 LTBT 信托', {
    x: 1.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  const govDiagram = [
    { title: 'Anthropic 董事会 (Board)', sub: '法定平衡公众福祉与股东商业利益 (PBC 法定要求)' },
    { title: '长期利益信托 (LTBT)', sub: '独立专家委员会，持有关键决策一票否决权（超级金股）' },
    { title: '负责任扩展政策 (RSP)', sub: '达到高危等级未有防护则强制冻结发布，不妥协商业进度' }
  ];

  govDiagram.forEach((gd, idx) => {
    const y = 2.25 + idx * 1.4;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.25,
      fill: { color: C.INNER_CARD },
      line: { color: C.CYAN, width: 1.2 }
    });
    slide.addText(gd.title, {
      x: 1.25, y: y + 0.15, w: 4.8, h: 0.3,
      fontSize: 12, fontFace: 'Arial', color: C.CYAN, bold: true
    });
    slide.addText(gd.sub, {
      x: 1.25, y: y + 0.5, w: 4.8, h: 0.65,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  // Right Card: 4 S-1 Risk Factors
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('S-1 招股书核心风险因子清单 (Risk Factors)', {
    x: 7.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.RED, bold: true
  });

  const risks = [
    { risk: '01. 算力供应链依赖', tag: '高风险', desc: '高度依赖 AWS Trainium 与 Google TPU 流片，封装良率直接影响毛利。' },
    { risk: '02. 客户集中度偏高', tag: '中高风险', desc: '前五大企业客户贡献约 32% ARR，若发生自研平替将造成营收震荡。' },
    { risk: '03. 预训练数据版权诉讼', tag: '中风险', desc: '全球开源版权组织对代码训练集的集体诉讼可能带来巨额合规清退成本。' },
    { risk: '04. 双寡头算力价格战', tag: '中风险', desc: 'OpenAI 依托微软提供激进算力补贴，可能对企业级单价形成压制。' }
  ];

  risks.forEach((rk, idx) => {
    const y = 2.25 + idx * 1.15;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.02,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(rk.risk, {
      x: 7.25, y: y + 0.1, w: 3.4, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(rk.tag, {
      x: 10.8, y: y + 0.1, w: 1.2, h: 0.28,
      fontSize: 9.5, fontFace: 'Arial', color: C.RED, bold: true, align: 'right'
    });
    slide.addText(rk.desc, {
      x: 7.25, y: y + 0.4, w: 4.8, h: 0.55,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】第一篇收尾页。在为 2 万亿美元估值背书的同时，我们必须保持审慎客观。PBC 架构与 LTBT 信托委员会展现了 Anthropic 的治理情怀，但 S-1 中的四大风险（尤其是算力依赖与客户集中度）是二级市场投资人建仓时必须持续监控的变量。');
}
"""
