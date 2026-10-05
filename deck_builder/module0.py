# -*- coding: utf-8 -*-
"""
Module 0: Cover, Executive Summary, Master Agenda (Slides 1-3)
Visual & Diagram-Oriented Redesign
"""

SLIDES_0 = """
// ==========================================
// SLIDE 1: Title Slide (Cover)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };

  // Category Badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.1, w: 4.8, h: 0.4,
    fill: { color: C.CARD_BG },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('PRE-IPO INSTITUTIONAL RESEARCH | 45-SLIDE MASTER DECK', {
    x: 0.8, y: 1.1, w: 4.8, h: 0.4,
    fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', charSpacing: 1.5
  });

  // Main Title
  slide.addText('Anthropic 2 万亿 IPO 的背后：', {
    x: 0.8, y: 1.7, w: 11.5, h: 0.85,
    fontSize: 38, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText('编码模型与 AGI', {
    x: 0.8, y: 2.55, w: 11.5, h: 0.85,
    fontSize: 38, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });

  // Subtitle
  slide.addText('资本神话、产业重构与硅基劳动力拐点深度研究报告', {
    x: 0.8, y: 3.55, w: 11.0, h: 0.45,
    fontSize: 18, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  // 3 Hero KPI Cards (Visual Data Metrics)
  const metrics = [
    { num: '$2.0 Trillion', label: '目标 IPO 估值', sub: '超中国 Top 10 互联网巨头总和 1.5 倍', color: C.GOLD, tag: 'VALUATION' },
    { num: '$105B ARR', label: '2026 年化跑道营收', sub: '16 个季度实现对 OpenAI 的营收反超', color: C.GREEN, tag: 'RUNWAY ARR' },
    { num: '91.2% / 70.6%', label: 'SWE-Pro / Terminal-4', sub: '人类复杂软件与系统工程进入自愈时代', color: C.CYAN, tag: 'AI AUTONOMY' }
  ];

  metrics.forEach((m, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 4.45, 3.75, 1.9, C.CARD_BG, C.CARD_BORDER);

    // Indicator pill
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 4.65, w: 1.2, h: 0.22,
      fill: { color: C.INNER_CARD },
      line: { color: m.color, width: 1 }
    });
    slide.addText(m.tag, {
      x: x + 0.25, y: 4.65, w: 1.2, h: 0.22,
      fontSize: 8, fontFace: 'Arial', color: m.color, bold: true, align: 'center'
    });

    slide.addText(m.num, {
      x: x + 0.25, y: 4.95, w: 3.25, h: 0.55,
      fontSize: 27, fontFace: 'Arial', color: m.color, bold: true, margin: 0
    });
    slide.addText(m.label, {
      x: x + 0.25, y: 5.5, w: 3.25, h: 0.3,
      fontSize: 12.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(m.sub, {
      x: x + 0.25, y: 5.8, w: 3.25, h: 0.45,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Footer Metadata
  slide.addText('发布时间：2026 年 10 月  |  核心标的：Anthropic (Claude)  |  分析维度：资本市场、SaaS 覆灭与 AGI 终局', {
    x: 0.8, y: 6.75, w: 11.5, h: 0.35,
    fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MUTED
  });
  slide.addNotes('【演讲提示】欢迎各位投资人与行业专家。本研报面向全球顶级机构投资者与技术战略决策层，共 45 页，系统拆解 Anthropic 以 2 万亿美元估值冲刺 IPO 的历史性事件。通过大量结构图、数据图表与工程对比，穿透其从资本神话到软件产业颠覆，再到代码作为 AGI 物理跳板的技术本质。');
}

// ==========================================
// SLIDE 2: Executive Summary (三大核心支柱系统架构图)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '执行总览：支撑 2 万亿美元估值的三大核心支柱', 'Executive Summary', 2);

  const pillars = [
    {
      num: '01',
      title: '资本神话与 ARR 飞轮',
      tag: 'CAPITAL ENGINE',
      color: C.GOLD,
      metrics: [
        { label: '目标估值', val: '$2.0 Trillion', sub: '超中国十强总和 1.5 倍' },
        { label: '2026 ARR', val: '$105 Billion', sub: '16 季度逆转 OpenAI ($92B)' },
        { label: '人均产出', val: '$8,500 万/人', sub: '打破人类商业史人效纪录' },
        { label: '资本架构', val: 'AWS + Google', sub: '双云中立护城河' }
      ]
    },
    {
      num: '02',
      title: '产业重构与范式迭代',
      tag: 'INDUSTRY DISRUPTION',
      color: C.CYAN,
      metrics: [
        { label: 'SaaS 市值崩塌', val: '-$1.20 Trillion', sub: 'Atlassian 暴跌 70.5%' },
        { label: '估值倍数踩踏', val: '18.5x -> 5.6x', sub: '席位制公理物理破灭' },
        { label: '架构双环', val: 'CLI 内环 × MCP 外环', sub: '解决 30k Token 税' },
        { label: '算力综合毛利', val: '68.4% 高毛利', sub: 'Prompt Caching 77.5% 倒挂' }
      ]
    },
    {
      num: '03',
      title: '代码即 AGI 与文明拐点',
      tag: 'RSI & SOFTWARE 3.0',
      color: C.PURPLE,
      metrics: [
        { label: '自愈黄金标尺', val: 'Terminal-4 70.6%', sub: 'SWE-bench Pro 91.2%' },
        { label: '代码认知 IR', val: 'Instinct + Muse', sub: '通用 Agent 的操作系统' },
        { label: '递归自举 RSI', val: '26.4% 内部代码自研', sub: 'Claude 训练下一代 Claude' },
        { label: '软件新范式', val: 'Software 3.0', sub: '自然语言直接编排认知' }
      ]
    }
  ];

  pillars.forEach((p, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 5.35);

    // Header badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.68, w: 3.25, h: 0.3,
      fill: { color: C.INNER_CARD },
      line: { color: p.color, width: 1 }
    });
    slide.addText(p.num + ' · ' + p.tag, {
      x: x + 0.25, y: 1.68, w: 3.25, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: p.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(p.title, {
      x: x + 0.25, y: 2.1, w: 3.25, h: 0.45,
      fontSize: 16.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.65, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    // 4 Visual KPI Blocks inside card
    p.metrics.forEach((m, mIdx) => {
      const yBox = 2.85 + mIdx * 1.0;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.25, y: yBox, w: 3.25, h: 0.88,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(m.label, {
        x: x + 0.4, y: yBox + 0.08, w: 2.95, h: 0.22,
        fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED
      });
      slide.addText(m.val, {
        x: x + 0.4, y: yBox + 0.28, w: 2.95, h: 0.32,
        fontSize: 13.5, fontFace: 'Arial', color: p.color, bold: true
      });
      slide.addText(m.sub, {
        x: x + 0.4, y: yBox + 0.58, w: 2.95, h: 0.22,
        fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED
      });
    });
  });

  slide.addNotes('【演讲提示】本页通过结构化卡片与核心量化指标，将整份报告的三大立论浓缩于一个屏幕上。注意引导投资人观察从“资本机器（第一篇）”到“产业吸血（第二篇）”，最终落脚到“智能自举跳板（第三篇）”的递进逻辑。');
}

// ==========================================
// SLIDE 3: Master Agenda (五段式全景推进流水线图)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '研报全景架构导航：五段式逻辑推进流水线', 'Master Agenda', 3);

  const stages = [
    {
      num: 'STAGE 01',
      title: '资本神话与 ARR 飞轮',
      range: 'Slides 04 – 13',
      color: C.GOLD,
      bullets: ['$2T 坐标系与人效', '16 季度逆转 OpenAI', 'Claude Code 百倍杠杆', 'Gross/Net 会计穿透', '双云阵营中立护城河']
    },
    {
      num: 'STAGE 02',
      title: '产业重构与范式迭代',
      range: 'Slides 14 – 23',
      color: C.CYAN,
      bullets: ['SaaSpocalypse $1.2T 蒸发', '席位制公理物理破灭', 'MCP 困境与 CLI 逆袭', 'JIT 即时软件微应用', 'Prompt Cache 77.5% 毛利']
    },
    {
      num: 'STAGE 03',
      title: '代码即 AGI：递归演化',
      range: 'Slides 24 – 38',
      color: C.PURPLE,
      bullets: ['SWE-Pro & Terminal-4', 'Nginx 故障自愈实录', '通用 Agent 认知 IR', 'Amodei 科学加速哲学', 'Claude 训练 Claude RSI']
    },
    {
      num: 'STAGE 04',
      title: '终局裁决与投资沙盘',
      range: 'Slides 39 – 42',
      color: C.GREEN,
      bullets: ['牛/基/熊三种估值模型', '机构季报 5 大 Watchlist', '2 万亿买下的底层资产', '硅基文明定价新纪元']
    },
    {
      num: 'STAGE 05',
      title: '附录与基准数据仓库',
      range: 'Slides 43 – 45',
      color: C.TEXT_MUTED,
      bullets: ['8 代模型全景进化大表', '全球前沿 5 大竞品矩阵', '研报合规免责声明', '研究团队致谢与署名']
    }
  ];

  stages.forEach((st, idx) => {
    const x = 0.8 + idx * 2.36;
    addCard(slide, x, 1.45, 2.24, 5.35);

    // Step Header
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 1.65, w: 1.94, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: st.color, width: 1 }
    });
    slide.addText(st.num, {
      x: x + 0.15, y: 1.65, w: 1.94, h: 0.28,
      fontSize: 8.5, fontFace: 'Arial', color: st.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(st.title, {
      x: x + 0.15, y: 2.05, w: 1.94, h: 0.55,
      fontSize: 12.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 15
    });
    slide.addText(st.range, {
      x: x + 0.15, y: 2.62, w: 1.94, h: 0.22,
      fontSize: 9, fontFace: 'Arial', color: C.CYAN
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.15, y: 2.95, w: 1.94, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    // 5 Bullet Tags
    st.bullets.forEach((b, bIdx) => {
      const yB = 3.15 + bIdx * 0.72;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.15, y: yB, w: 1.94, h: 0.6,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(b, {
        x: x + 0.22, y: yB + 0.12, w: 1.8, h: 0.36,
        fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12
      });
    });
  });

  slide.addNotes('【演讲提示】本页展示了全篇 45 页的五段式推进流水线。让投资人一眼看清全篇报告的逻辑脉络与重点分布。');
}
"""
