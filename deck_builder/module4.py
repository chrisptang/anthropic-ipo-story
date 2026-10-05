# -*- coding: utf-8 -*-
"""
Module 4: Part 4 - Valuation Verdict, Investment Scenarios & Watchlist (Slides 39-42)
Visual & Diagram-Oriented Redesign
"""

SLIDES_4 = """
// ==========================================
// SLIDE 39: Section Divider - Part 4
// ==========================================
{
  const slide = pres.addSlide();
  addSectionDivider(
    slide,
    '第四篇：终局裁决、投资情景与风险沙盘',
    '估值沙盘模型、机构监控清单与时代裁决',
    '本篇为全球顶级投资机构提供可落地的二级市场投资沙盘。通过牛、基、熊三种宏观估值情景推演，设定五大核心季报追踪指标 (Watchlist)，并最终回答本研报最核心的历史命题：2 万亿美元买下的究竟是什么？',
    'PART 4 · SCENARIOS & VERDICT',
    39
  );
  slide.addNotes('【演讲提示】进入第四篇。作为机构投资研报，我们必须为买方客户提供精准的量化沙盘与决策依据。我们将给出三种明确的情景概率分布，并提供清晰的季报跟踪清单。');
}

// ==========================================
// SLIDE 40: 4.1 估值沙盘推演：三种未来情景模型
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '4.1 估值沙盘推演：三种未来情景模型 (Bull / Base / Bear)', 'Part 4 · Valuation Scenarios', 40);

  // 3 Large Scenario Column Cards
  const scenarios = [
    {
      caseName: '牛市超预期 (BULL)',
      prob: '概率 25%',
      target: '$3.0 万亿美元',
      color: C.GREEN,
      metrics: [
        { label: '2027E 预期 ARR', val: '$135 B+' },
        { label: '动态 PS 倍数', val: '22.2x' },
        { label: '净留存率 (NDR)', val: '180%' },
        { label: '硬件综合毛利', val: '75.0%' }
      ],
      catalysts: [
        '全球 80% 内部软件实现全自动 JIT 即时生成',
        'Claude 从代码跨界接管金融量化与生物制药',
        '自研 ASIC 算力成本再降 40%，实现巨额自由现金流'
      ]
    },
    {
      caseName: '基准情景 (BASE)',
      prob: '概率 55%',
      target: '$2.0 万亿美元',
      color: C.CYAN,
      metrics: [
        { label: '2026E 跑道 ARR', val: '$105 B' },
        { label: '动态 PS 倍数', val: '19.0x' },
        { label: '净留存率 (NDR)', val: '160%' },
        { label: '硬件综合毛利', val: '68.4%' }
      ],
      catalysts: [
        '巩固全球开发者与 500 强企业编码第一心智',
        'Claude Code 成为事实上的研发操作系统标准',
        '经调整 EBITDA 持续转正，消化现有估值溢价'
      ]
    },
    {
      caseName: '熊市滞胀 (BEAR)',
      prob: '概率 20%',
      target: '$8,000 亿美元',
      color: C.RED,
      metrics: [
        { label: '2026E 跑道 ARR', val: '$65 B' },
        { label: '动态 PS 倍数', val: '12.3x' },
        { label: '净留存率 (NDR)', val: '110%' },
        { label: '硬件综合毛利', val: '52.0%' }
      ],
      catalysts: [
        '开源模型大幅缩短代差至 2 个月内引发恶性降价',
        '大企业因数据主权与成本压力转向私有化自研',
        '巨额算力资本开支拖累，自由现金流承压转负'
      ]
    }
  ];

  scenarios.forEach((sc, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 5.35);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.68, w: 3.25, h: 0.3,
      fill: { color: C.INNER_CARD },
      line: { color: sc.color, width: 1 }
    });
    slide.addText(sc.caseName + ' · ' + sc.prob, {
      x: x + 0.25, y: 1.68, w: 3.25, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: sc.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(sc.target, {
      x: x + 0.25, y: 2.08, w: 3.25, h: 0.45,
      fontSize: 22, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.6, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    // 4 Metrics Grid inside card
    sc.metrics.forEach((m, mIdx) => {
      const xM = mIdx % 2 === 0 ? x + 0.25 : x + 1.95;
      const yM = mIdx < 2 ? 2.75 : 3.4;
      slide.addShape(pres.ShapeType.rect, {
        x: xM, y: yM, w: 1.55, h: 0.58,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(m.label, {
        x: xM + 0.1, y: yM + 0.06, w: 1.35, h: 0.18,
        fontSize: 8, fontFace: 'Arial', color: C.TEXT_MUTED
      });
      slide.addText(m.val, {
        x: xM + 0.1, y: yM + 0.25, w: 1.35, h: 0.28,
        fontSize: 11, fontFace: 'Arial', color: sc.color, bold: true
      });
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 4.15, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    // Catalysts
    slide.addText('核心催化剂与驱动前提：', {
      x: x + 0.25, y: 4.25, w: 3.25, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    sc.catalysts.forEach((cat, cIdx) => {
      const yC = 4.55 + cIdx * 0.68;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.25, y: yC, w: 3.25, h: 0.6,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(cat, {
        x: x + 0.35, y: yC + 0.1, w: 3.05, h: 0.42,
        fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12
      });
    });
  });

  slide.addNotes('【演讲提示】本页为机构投资者提供了清晰的概率分布。基准情景给予 55% 概率，对应 2 万亿美元市值与 19 倍 PS，这在高速增长的科技巨头中并不夸张。牛市情景看 3 万亿，熊市有 8,000 亿安全底线。');
}

// ==========================================
// SLIDE 41: 4.2 机构投资者季报监控清单 (Watchlist)：五大核心跟踪指标
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '4.2 机构投资者季报监控清单 (Watchlist)：五大核心指标', 'Part 4 · Quarterly Watchlist', 41);

  const watchItems = [
    {
      num: '01',
      title: 'Terminal-Bench 分差',
      sub: '基准技术缓冲区',
      target: '> 5% 领先优势',
      color: C.CYAN,
      desc: '监控 Claude 是否保持对 OpenAI 与开源模型的绝对领先。若分差跌破 5%，警惕护城河收窄。'
    },
    {
      num: '02',
      title: 'Claude Code DAU & 消耗',
      sub: '超级单品健康度',
      target: '> 500k Tokens/任务',
      color: C.GOLD,
      desc: '单任务中位数消耗若维持在数十万级别，说明客户未发生弃用或回退人工手写作业。'
    },
    {
      num: '03',
      title: 'Fortune 500 NDR 留存',
      sub: '企业现金流飞轮',
      target: '维持 150%–160%',
      color: C.GREEN,
      desc: '验证“从单部门研发效能扩容到全集团各职能渗透”的关键证据，判断扩容是否停滞。'
    },
    {
      num: '04',
      title: '自研 ASIC 算力渗透率',
      sub: '毛利与供应链安全',
      target: '> 65% 集群占比',
      color: C.PURPLE,
      desc: '追踪 AWS Trainium2 与 Google TPU 在总推理集群中的负载占比，直接决定 68%+ 毛利能否维持。'
    },
    {
      num: '05',
      title: '开源追赶滞后天数',
      sub: '定价权防御底色',
      target: '> 6 个月时间差',
      color: C.RED,
      desc: '监测全球顶级开源模型（DeepSeek/Qwen）达到同等编码能力的滞后时间；若缩短至 2 个月内降价压力陡增。'
    }
  ];

  watchItems.forEach((wi, idx) => {
    const x = 0.8 + idx * 2.36;
    addCard(slide, x, 1.45, 2.24, 5.35);

    slide.addText(wi.num, {
      x: x + 0.15, y: 1.65, w: 1.94, h: 0.45,
      fontSize: 22, fontFace: 'Arial', color: wi.color, bold: true
    });
    slide.addText(wi.title, {
      x: x + 0.15, y: 2.15, w: 1.94, h: 0.55,
      fontSize: 12.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 15
    });
    slide.addText(wi.sub, {
      x: x + 0.15, y: 2.72, w: 1.94, h: 0.25,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED
    });

    // Target Box
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 3.05, w: 1.94, h: 0.48,
      fill: { color: C.INNER_CARD },
      line: { color: wi.color, width: 1 }
    });
    slide.addText(wi.target, {
      x: x + 0.15, y: 3.14, w: 1.94, h: 0.3,
      fontSize: 10, fontFace: 'Arial', color: wi.color, bold: true, align: 'center'
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.15, y: 3.7, w: 1.94, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    slide.addText(wi.desc, {
      x: x + 0.15, y: 3.85, w: 1.94, h: 2.7,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
    });
  });

  slide.addNotes('【演讲提示】本页是提供给基金经理与分析师的“操作手册”。上市之后看什么？看这 5 个硬核指标：基准分差、Claude Code 真实消耗、大客户留存率、自研芯片渗透率，以及开源阵营的追赶时差。');
}

// ==========================================
// SLIDE 42: 4.3 终局裁决：2 万亿美元买下的究竟是什么？
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '4.3 终局裁决：2 万亿美元买下的究竟是什么？', 'Part 4 · The Final Verdict', 42);

  // 3 Grand Pillars of Valuation Verdict
  const verdicts = [
    {
      num: 'PILLAR 01',
      title: '全球知识经济的认知操作系统',
      tag: 'THE COGNITIVE OS',
      color: C.CYAN,
      desc: '资本定价的绝不是一个写代码的插件，而是接管全人类软硬件交互、调控百万台服务器的“认知操作系统”。掌控代码即掌控数字世界支配权。'
    },
    {
      num: 'PILLAR 02',
      title: '传统万亿 SaaS 存量价值的终极吸纳者',
      tag: 'THE VALUE VACUUM',
      color: C.GOLD,
      desc: 'SaaSpocalypse 蒸发的 1.2 万亿美元并未消失，而是通过 JIT 即时软件，彻底转移为对 Anthropic 算力 Token 的持续采购。'
    },
    {
      num: 'PILLAR 03',
      title: '人类文明首个自我演化的硅基劳动力资产',
      tag: 'SYNTHETIC LABOR & RSI',
      color: C.GREEN,
      desc: '资本市场第一次为“能够制造下一代智能的智能”定价。26% 内部研发自举与 8 倍科研加速，意味着它摆脱了生物学劳动力极限。'
    }
  ];

  verdicts.forEach((v, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 4.0);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.32,
      fill: { color: C.INNER_CARD },
      line: { color: v.color, width: 1 }
    });
    slide.addText(v.num + ' · ' + v.tag, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.32,
      fontSize: 9, fontFace: 'Arial', color: v.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(v.title, {
      x: x + 0.25, y: 2.15, w: 3.25, h: 0.65,
      fontSize: 16, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 20
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.9, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    slide.addText(v.desc, {
      x: x + 0.25, y: 3.05, w: 3.25, h: 2.2,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 16
    });
  });

  // Bottom Grand Conclusion Banner
  addCard(slide, 0.8, 5.65, 11.73, 1.15, C.INNER_CARD, C.GOLD);
  slide.addText('“2 万亿美元，不是终点，而是硅基文明定价新纪元的序章。”', {
    x: 1.1, y: 5.78, w: 11.13, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: C.GOLD, bold: true, align: 'center'
  });
  slide.addText('当代码跨越了从“人类书写”到“智能自举”的物理临界点，Anthropic 已经不再是一家普通的科技企业，而是一台驱动人类所有科学加速的永动机。', {
    x: 1.1, y: 6.22, w: 11.13, h: 0.4,
    fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'center'
  });

  slide.addNotes('【演讲提示】第四篇收尾页，也是全篇最恢弘的落脚点。2 万亿美元买下的不是普通股票，而是三大历史资产：全球数字世界的操作系统、传统 SaaS 万亿蒸发价值的承接者，以及人类历史上第一个能自我迭代的硅基劳动力。');
}
"""
