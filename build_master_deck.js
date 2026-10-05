const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33" x 7.5"
pres.author = 'Anthropic Pre-IPO Research Team';
pres.company = 'Global Tech Strategy Institute';
pres.title = 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI';

// Color Palette (Hex WITHOUT #)
const C = {
  BG_DARK: '0B0F19',
  CARD_BG: '1E293B',
  CARD_BORDER: '334155',
  TEXT_MAIN: 'F8FAFC',
  TEXT_MUTED: '94A3B8',
  TEXT_DIM: '64748B',
  CYAN: '38BDF8',
  GOLD: 'F59E0B',
  GREEN: '10B981',
  RED: 'F43F5E',
  PURPLE: '818CF8',
  WHITE: 'FFFFFF',
  INNER_CARD: '0F172A',
  ROW_ALT: '162032'
};

// Standard Header for Content Slides
function addHeader(slide, title, category, slideNumber) {
  slide.background = { color: C.BG_DARK };
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.42, w: 9.5, h: 0.28,
    fontSize: 10.5, fontFace: 'Arial', color: C.CYAN, bold: true, charSpacing: 1.5
  });
  slide.addText(title, {
    x: 0.8, y: 0.72, w: 10.8, h: 0.55,
    fontSize: 21, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText(String(slideNumber).padStart(2, '0'), {
    x: 12.0, y: 0.42, w: 0.8, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right', bold: true
  });
}

// Standard Card Box
function addCard(slide, x, y, w, h, bgColor = C.CARD_BG, borderColor = C.CARD_BORDER) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: bgColor },
    line: { color: borderColor, width: 1 }
  });
}

// Section Divider Slide
function addSectionDivider(slide, partNum, partTitle, subtitle, tag, slideNum) {
  slide.background = { color: C.BG_DARK };
  addCard(slide, 1.2, 1.4, 10.9, 4.7);
  
  slide.addShape(pres.ShapeType.rect, {
    x: 1.8, y: 1.9, w: 3.2, h: 0.35,
    fill: { color: C.INNER_CARD },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText(tag.toUpperCase(), {
    x: 1.8, y: 1.9, w: 3.2, h: 0.35,
    fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', charSpacing: 1.5
  });
  
  slide.addText(partNum, {
    x: 1.8, y: 2.45, w: 9.7, h: 0.55,
    fontSize: 28, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });
  slide.addText(partTitle, {
    x: 1.8, y: 3.1, w: 9.7, h: 0.8,
    fontSize: 34, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText(subtitle, {
    x: 1.8, y: 4.1, w: 9.7, h: 0.8,
    fontSize: 15, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0, lineSpacing: 22
  });
  slide.addText(String(slideNum).padStart(2, '0'), {
    x: 11.0, y: 1.7, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right', bold: true
  });
}


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
  slide.addText('由于 Anthropic 在 18 个月内估值从 $60B 暴涨至 $965B，会计准则强制将早期优先股增值计入当期账面亏损！\n\n该科目 100% 属于非现金性记账调整，企业没有任何资金流出！', {
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
  slide.addText('预付年度企业合同保障了极佳的营运资本周转；\n算力资本开支 (Capex $28B) 完全由云巨头专项融资覆盖，经营底盘极为稳固。', {
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


// ==========================================
// SLIDE 14: Section Divider - Part 2
// ==========================================
{
  const slide = pres.addSlide();
  addSectionDivider(
    slide,
    '第二篇：产业重构与范式迭代',
    'SaaS 浩劫、席位制瓦解与即时软件范式',
    '本篇揭开 2 万亿美元资本转移的血腥真相。传统企业软件市场遭遇前所未有的“SaaSpocalypse”，蒸发超 1.2 万亿美元市值。席位制公式彻底破灭，MCP 与 CLI 爆发架构大论战，即时软件将软件制造成本打至归零。',
    'PART 2 · INDUSTRY RESTRUCTURING',
    14
  );
  slide.addNotes('【演讲提示】进入第二篇。Anthropic 的万亿财富不是从天上掉下来的，而是踩在传统企业级软件巨头的尸骨上转移而来的。这一篇我们将深度剖析 SaaS 席位制的崩溃、MCP 与 CLI 的真实博弈，以及算力毛利账本的重塑。');
}

// ==========================================
// SLIDE 15: 2.1 SaaSpocalypse：传统软件 $1.2 万亿市值大迁徙
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.1 SaaSpocalypse：传统软件 $1.2 万亿市值大迁徙', 'Part 2 · The Wipeout', 15);

  // Left: Native Horizontal Bar Chart of Market Cap Drawdowns (%)
  const drawdownChartData = [
    {
      name: '历史峰值回撤幅度 (%)',
      labels: ['Atlassian', 'Snowflake', 'Workday', 'ServiceNow', 'Salesforce', 'Adobe'],
      values: [-70.5, -52.0, -42.8, -40.4, -38.2, -35.7]
    }
  ];

  slide.addChart(pres.ChartType.bar, drawdownChartData, {
    x: 0.8, y: 1.45, w: 6.0, h: 5.35,
    showLegend: false,
    chartColors: [C.RED],
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MAIN,
    valAxisLabelColor: C.TEXT_MUTED
  });

  // Right Side: Aggregate Metrics & Core Affected Workflows
  addCard(slide, 7.0, 1.45, 5.53, 5.35);
  slide.addText('六巨头蒸发超 $5,000 亿，行业重挫 $1.2T', {
    x: 7.25, y: 1.7, w: 5.0, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const wipedGiants = [
    { name: 'Atlassian (TEAM)', loss: '-$880 亿', sub: 'Jira 工单与 Confluence 知识库被 Agent 动态检索替代' },
    { name: 'Salesforce (CRM)', loss: '-$1,184 亿', sub: 'Sales Cloud 界面被自主跟单与外呼 Agent 直接架空' },
    { name: 'ServiceNow (NOW)', loss: '-$869 亿', sub: 'ITSM 审批流被终端自动排错与自愈脚本完全吞噬' },
    { name: 'Adobe (ADBE)', loss: '-$1,137 亿', sub: '营销文档与图片管线被多模态代码自动化直接生成' }
  ];

  wipedGiants.forEach((wg, idx) => {
    const yW = 2.15 + idx * 1.18;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.25, y: yW, w: 5.0, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(wg.name, {
      x: 7.4, y: yW + 0.1, w: 3.2, h: 0.25,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(wg.loss, {
      x: 10.6, y: yW + 0.1, w: 1.5, h: 0.25,
      fontSize: 11, fontFace: 'Arial', color: C.RED, bold: true, align: 'right'
    });
    slide.addText(wg.sub, {
      x: 7.4, y: yW + 0.4, w: 4.7, h: 0.55,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】本页通过左侧的原生条形图与右侧的核心受创线，清晰呈现了“SaaSpocalypse”的惨烈程度。六家顶级 SaaS 巨头市值大幅回撤，累计蒸发超过 5,000 亿美元。被消灭的这部分预算，并没有消失，而是被重定向到了以 Anthropic 为代表的基础模型与 Token 算力账单中。');
}

// ==========================================
// SLIDE 16: 2.1.2 估值倍数大踩踏：EV/Sales 从 18.5x 压缩至 5.6x 的估值杀
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.1.2 估值倍数大踩踏：EV/Sales 从 18.5x 压缩至 5.6x 的估值杀', 'Part 2 · Multiple Compression', 16);

  // Left Chart: SaaS EV/Sales Multiples
  const multipleChartData = [
    {
      name: 'Top SaaS 平均 EV/Sales (倍)',
      labels: ['2021 峰值', '2022 加息', '2023 试探', '2024 AI初潮', '2025 代理解禁', '2026 终局杀'],
      values: [18.5, 12.4, 10.8, 8.6, 6.8, 5.6]
    }
  ];

  slide.addChart(pres.ChartType.col, multipleChartData, {
    x: 0.8, y: 1.45, w: 6.2, h: 5.35,
    showLegend: false,
    chartColors: [C.RED],
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MAIN,
    valAxisLabelColor: C.TEXT_MUTED
  });

  // Right Side: 3-Step Valuation Slaughter Flow Diagram
  addCard(slide, 7.2, 1.45, 5.33, 5.35);
  slide.addText('杀估值“三步走”：华尔街的死刑判决', {
    x: 7.45, y: 1.7, w: 4.8, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const steps = [
    {
      step: 'STEP 01 · 扩容停滞',
      tag: '增长神话破灭',
      color: C.GOLD,
      desc: '过去“人数增长 -> 自动加座”确定性模型失效，企业全面推行 Agent 冻结招聘，新增席位需求断崖式下跌。'
    },
    {
      step: 'STEP 02 · 护城河被穿透',
      tag: 'UI 价值彻底归零',
      color: C.RED,
      desc: 'SaaS 最核心的资产是复杂的图形界面 (GUI)。然而 Agent 直接无头调用底层 API 与数据库，界面失去溢价权。'
    },
    {
      step: 'STEP 03 · NDR 跌破警戒线',
      tag: '失去成长性溢价',
      color: C.PURPLE,
      desc: '行业净留存率 (NDR) 从 125% 跌破 95%，存量客户不仅不加购反而大幅裁撤闲置账号，SaaS 退化为公用事业股。'
    }
  ];

  steps.forEach((st, idx) => {
    const y = 2.15 + idx * 1.6;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.45, y: y, w: 4.8, h: 1.45,
      fill: { color: C.INNER_CARD },
      line: { color: st.color, width: 1.2 }
    });
    slide.addText(st.step, {
      x: 7.6, y: y + 0.1, w: 3.0, h: 0.25,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(st.tag, {
      x: 10.6, y: y + 0.1, w: 1.5, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: st.color, bold: true, align: 'right'
    });
    slide.addText(st.desc, {
      x: 7.6, y: y + 0.42, w: 4.5, h: 0.9,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页展示了资本市场的无情。SaaS 行业的 EV/Sales 倍数从 2021 年高点的 18.5 倍惨烈压缩至 5.6 倍。右侧的三步走逻辑清晰解释了杀估值的本质：扩容停滞、UI 价值归零，以及 NDR 跌破 100% 警戒线。');
}

// ==========================================
// SLIDE 17: 2.2 席位制物理瓦解：ARR = 人头 × 单价公式破产与 Agentforce 困境
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.2 席位制物理瓦解：ARR = 人头 × 单价公式破产', 'Part 2 · The Per-Seat Trap', 17);

  // Left Card: Mathematical Equation Breakup
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addText('席位制公式的物理瓦解与逻辑死锁', {
    x: 1.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  // Big Equation Box
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 2.15, w: 5.1, h: 0.85,
    fill: { color: C.INNER_CARD },
    line: { color: C.RED, width: 1.5 }
  });
  slide.addText('ARR = Paid Seats (人头数) ↓  ×  Price / Seat (单价)', {
    x: 1.25, y: 2.28, w: 4.8, h: 0.32,
    fontSize: 12, fontFace: 'Arial', color: C.RED, bold: true, align: 'center'
  });
  slide.addText('前提假设崩溃：企业业务增长不再等同于员工编制扩张！', {
    x: 1.25, y: 2.62, w: 4.8, h: 0.28,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'center'
  });

  const seatBreakdown = [
    { title: '人头成为负向杠杆', desc: '1 个工程师 + Claude 顶 8 个人，企业首选裁撤初级与外包团队，购买席位直降 60%–80%。' },
    { title: '提价无法弥补量缩', desc: 'SaaS 强推 20% 涨价，但根本无法覆盖 70% 席位流失造成的巨大营收黑洞。' },
    { title: '长尾账号彻底注销', desc: '用于看报表、审批的轻量席位被统一服务账号直通替代，SaaS 失去“按人抽税”抓手。' }
  ];

  seatBreakdown.forEach((sb, idx) => {
    const y = 3.15 + idx * 1.15;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(sb.title, {
      x: 1.25, y: y + 0.1, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.GOLD, bold: true
    });
    slide.addText(sb.desc, {
      x: 1.25, y: y + 0.4, w: 4.8, h: 0.58,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  // Right Card: Agentforce Cannibalization Cycle Diagram
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('Salesforce Agentforce 的创新者窘境', {
    x: 7.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const dilemmaFlow = [
    { title: '01. 推出 $2/次 任务计费', desc: '试图摆脱人头限制，通过按次收费拥抱 AI 代理浪潮。', color: C.CYAN },
    { title: '02. 蚕食存量 $150/月 席位', desc: '企业完成 75 次任务花 $150，但因此裁撤 1 名客服，原高毛利席位永久注销！', color: C.RED },
    { title: '03. 客户算力觉醒与反叛', desc: '大企业发现 $2/次本质是 API 10 倍加价转售，纷纷绕道直接对接 Claude 原生接口。', color: C.GOLD },
    { title: '04. 既得利益绑架无法自救', desc: '85% 收入依赖席位制，彻底颠覆会摧毁当期财报，陷入瘫痪。', color: C.PURPLE }
  ];

  dilemmaFlow.forEach((df, idx) => {
    const y = 2.15 + idx * 1.15;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: df.color, width: 1.2 }
    });
    slide.addText(df.title, {
      x: 7.25, y: y + 0.1, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: df.color, bold: true
    });
    slide.addText(df.desc, {
      x: 7.25, y: y + 0.4, w: 4.8, h: 0.58,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】本页通过数学公式与因果循环图解构了席位制的崩溃。当企业用 1 个工程师替代 8 个人时，软件席位自然萎缩。而 Salesforce 试图通过 $2/次转型，却陷入“每多收一次 Agent 费，就毁掉一个高毛利存量席位”的经典创新者窘境。');
}

// ==========================================
// SLIDE 18: 2.3 架构大论战：MCP 的"Token 税"困境与 CLI/Unix 管道逆袭
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.3 架构大论战：MCP 的"Token 税"困境与 CLI/Unix 逆袭', 'Part 2 · The Protocol Debate', 18);

  // Left Card: MCP Token Tax Trap (Architectural Breakdown)
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 1.7, w: 3.2, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.RED, width: 1 }
  });
  slide.addText('MCP 的黄昏：昂贵的 SCHEMA TOKEN 税', {
    x: 1.1, y: 1.7, w: 3.2, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.RED, bold: true, align: 'center'
  });

  const mcpPoints = [
    { title: '静态上下文黑洞 (25k–40k Tokens)', tag: '高时延与成本', desc: '挂载 10 个企业级 Server 即常驻吞噬数万 Token 的 JSON-Schema，单次调用即造成严重的上下文污染。' },
    { title: '工具选择幻觉与注意力稀释', tag: '参数注意力溃散', desc: '数百个 MCP Tool 暴露给模型时，模型极易调用错误工具或输出非法 JSON 结构引发 Harness 崩溃。' },
    { title: '协议封装过厚与黑盒化', tag: '调试困难', desc: '将极其简单的只读命令封装为厚重的 RPC 协议，无法与操作系统的成熟进程链无缝结合。' }
  ];

  mcpPoints.forEach((mp, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(mp.title, {
      x: 1.25, y: y + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.RED, bold: true
    });
    slide.addText(mp.tag, {
      x: 4.4, y: y + 0.12, w: 1.6, h: 0.28,
      fontSize: 9.5, fontFace: 'Arial', color: C.RED, bold: true, align: 'right'
    });
    slide.addText(mp.desc, {
      x: 1.25, y: y + 0.45, w: 4.8, h: 0.75,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  // Right Card: CLI / Unix Pipeline Supremacy
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 7.1, y: 1.7, w: 3.5, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.GREEN, width: 1 }
  });
  slide.addText('CLI / UNIX 管道的极致降维打击', {
    x: 7.1, y: 1.7, w: 3.5, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.GREEN, bold: true, align: 'center'
  });

  const cliPoints = [
    { title: '零静态 Token 税与动态按需探查', tag: '随用随走', desc: '命令行本身就是万能工具。System Prompt 保持纯净，需要时仅通过 man、--help 或 grep 现场动态探索。' },
    { title: '管道自由组合：万物皆文本流', tag: '组合度无限', desc: 'find | xargs grep | jq | awk 一行命令完成复杂数据抽取，执行效率远超深层递归 RPC。' },
    { title: 'Exit Codes 与 STDERR 确定性物理反馈', tag: '物理锚点', desc: '0 为成功，非零为异常，清脆无歧义的执行回显天然匹配 Agentic RL 闭环自我纠错。' }
  ];

  cliPoints.forEach((cp, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(cp.title, {
      x: 7.25, y: y + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.GREEN, bold: true
    });
    slide.addText(cp.tag, {
      x: 10.4, y: y + 0.12, w: 1.6, h: 0.28,
      fontSize: 9.5, fontFace: 'Arial', color: C.GREEN, bold: true, align: 'right'
    });
    slide.addText(cp.desc, {
      x: 7.25, y: y + 0.45, w: 4.8, h: 0.75,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页直击 2026 技术圈最具争议的“MCP 黄昏论”。虽然 Anthropic 曾经是 MCP 的提出者，但在实际工程落地中，开发者用脚投票选择了 CLI。MCP 的 Schema Token 税过于沉重，而 Unix 管道以其零静态负担和无限组合性实现了降维打击。');
}

// ==========================================
// SLIDE 19: 2.3.2 双环协同架构：内环 (CLI) × 外环 (MCP Gateway)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.3.2 双环协同架构：内环 (CLI) × 外环 (MCP Gateway)', 'Part 2 · The Dual-Loop Solution', 19);

  // Left Card: Inner Loop (Developer Terminal Execution)
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 1.7, w: 3.5, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('内环 (INNER LOOP) · 本地开发执行', {
    x: 1.1, y: 1.7, w: 3.5, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center'
  });

  const innerStack = [
    { layer: 'L1 · 原生沙箱宿主直通', desc: '拥有文件系统、Git、Docker、编译器的绝对控制权，无协议开销。' },
    { layer: 'L2 · 即时代码合成 (Code-as-Tool)', desc: '遇到未定义功能，现场写 10 行 Python 并在 /tmp 执行，用完即弃。' },
    { layer: 'L3 · 毫秒级物理反馈自愈', desc: '避开网络 HTTP 往返延迟，命令执行耗时以毫秒计，压缩整体循环。' }
  ];

  innerStack.forEach((is, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CYAN, width: 1.2 }
    });
    slide.addText(is.layer, {
      x: 1.25, y: y + 0.15, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.CYAN, bold: true
    });
    slide.addText(is.desc, {
      x: 1.25, y: y + 0.48, w: 4.8, h: 0.72,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  // Right Card: Outer Loop (Enterprise Governance Gateway)
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 7.1, y: 1.7, w: 3.5, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.PURPLE, width: 1 }
  });
  slide.addText('外环 (OUTER LOOP) · 企业安全治理', {
    x: 7.1, y: 1.7, w: 3.5, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.PURPLE, bold: true, align: 'center'
  });

  const outerStack = [
    { layer: 'L1 · 跨 SaaS 凭证集中托管', desc: '集中管理 Jira、SAP、Salesforce 的 OAuth 密钥，防止敏感 Key 泄露。' },
    { layer: 'L2 · 不可篡改审计日志 (Audit Trail)', desc: '统一格式记录所有跨系统写操作，满足 SOC2、HIPAA 等企业级合规。' },
    { layer: 'L3 · 人工介入多签熔断 (Human-in-Loop)', desc: '对高危写操作实施外部拦截，强制多重签名确认后方可放行。' }
  ];

  outerStack.forEach((os, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.PURPLE, width: 1.2 }
    });
    slide.addText(os.layer, {
      x: 7.25, y: y + 0.15, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.PURPLE, bold: true
    });
    slide.addText(os.desc, {
      x: 7.25, y: y + 0.48, w: 4.8, h: 0.72,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页给出了业界最具建设性的架构终局：“双环协同”。MCP 并没有彻底死亡，而是找到了正确定位：退守外环，成为企业合规与安全网关；而在本地开发者内环，CLI / Bash 凭借零开销与高自由度成为当之无愧的绝对主宰。');
}

// ==========================================
// SLIDE 20: 2.4 即时软件 (JIT Software)：软件边际制造成本归零
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.4 即时软件 (JIT Software)：软件边际制造成本归零', 'Part 2 · JIT Software Paradigm', 20);

  // Top Card: Traditional Waterfall Software Stack
  addCard(slide, 0.8, 1.45, 11.73, 2.5);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 1.65, w: 2.8, h: 0.3,
    fill: { color: C.INNER_CARD },
    line: { color: C.RED, width: 1 }
  });
  slide.addText('传统软件制造范式 (PRE-AI WATERFALL)', {
    x: 1.1, y: 1.65, w: 2.8, h: 0.3,
    fontSize: 9, fontFace: 'Arial', color: C.RED, bold: true, align: 'center'
  });

  const tradSteps = [
    { step: '01. 需求与 PRD', time: '3-4 周', desc: '业务部门提单，产品经理撰写冗长规格' },
    { step: '02. 前后端排期', time: '8-12 周', desc: '架构设计、UI 走查、团队前后端联调' },
    { step: '03. 测试与上线', time: '4 周', desc: 'QA 回归、安全扫描、灰度发布上线' },
    { step: '04. 长期维护成本', time: '永久折旧', desc: '服务器运维、依赖包安全升级与债务' }
  ];

  tradSteps.forEach((ts, idx) => {
    const xS = 1.1 + idx * 2.8;
    slide.addShape(pres.ShapeType.rect, {
      x: xS, y: 2.05, w: 2.65, h: 1.7,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(ts.step, {
      x: xS + 0.15, y: 2.15, w: 2.35, h: 0.25,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(ts.time, {
      x: xS + 0.15, y: 2.42, w: 2.35, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: C.RED, bold: true
    });
    slide.addText(ts.desc, {
      x: xS + 0.15, y: 2.72, w: 2.35, h: 0.9,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  // Bottom Card: JIT Software Paradigm Flow
  addCard(slide, 0.8, 4.15, 11.73, 2.65);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 4.35, w: 2.8, h: 0.3,
    fill: { color: C.INNER_CARD },
    line: { color: C.GREEN, width: 1 }
  });
  slide.addText('即时软件范式 (JUST-IN-TIME SOFTWARE)', {
    x: 1.1, y: 4.35, w: 2.8, h: 0.3,
    fontSize: 9, fontFace: 'Arial', color: C.GREEN, bold: true, align: 'center'
  });

  const jitSteps = [
    { step: '01. 自然语言描述需求', time: '10 秒', desc: '业务人员口述“对比两份表格并导出异常”' },
    { step: '02. 动态合成 Python/HTML', time: '20 秒', desc: 'Claude 自动生成包含图表与导出的微应用' },
    { step: '03. 浏览器/沙箱即刻运行', time: '瞬间交付', desc: '任务执行完毕，产出最终商业决策报表' },
    { step: '04. 用完即弃或函数沉淀', time: '零维护折旧', desc: '不产生技术债务，80% 内部工具被永久替代' }
  ];

  jitSteps.forEach((js, idx) => {
    const xS = 1.1 + idx * 2.8;
    slide.addShape(pres.ShapeType.rect, {
      x: xS, y: 4.75, w: 2.65, h: 1.85,
      fill: { color: C.INNER_CARD },
      line: { color: C.GREEN, width: 1.2 }
    });
    slide.addText(js.step, {
      x: xS + 0.15, y: 4.85, w: 2.35, h: 0.25,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(js.time, {
      x: xS + 0.15, y: 5.12, w: 2.35, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: C.GREEN, bold: true
    });
    slide.addText(js.desc, {
      x: xS + 0.15, y: 5.42, w: 2.35, h: 1.05,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】本页通过上下两组流程图的强烈反差，解释了 JIT Software（即时软件）的颠覆性。上图是过去耗时数月、耗资数十万的瀑布式开发；下图是 30 秒动态合成、执行完毕即销毁的瞬时软件。当软件制造成本归零，传统 SaaS 的商业地基就彻底瓦解了。');
}

// ==========================================
// SLIDE 21: 2.5 算力经济学：Prompt Caching 77.5% 毛利率模型
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.5 算力经济学：Prompt Caching 77.5% 毛利率模型', 'Part 2 · Gross Margin Math', 21);

  // Left Card: Price & Cost Table
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addText('Claude 5.5 单元经济账本（每百万 Tokens）', {
    x: 1.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  const costRows = [
    [
      { text: '调用计费类型', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '对外售价', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '算力成本', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '单位毛利', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '毛利率', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } }
    ],
    [
      { text: '标准输入 (Input)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$3.00', options: { fill: C.INNER_CARD, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$1.26', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: '$1.74', options: { fill: C.INNER_CARD, color: C.GREEN, align: 'center', fontSize: 9.5 } },
      { text: '58.0%', options: { fill: C.INNER_CARD, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } }
    ],
    [
      { text: '缓存写入 (Write)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$3.75', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$1.42', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: '$2.33', options: { fill: C.CARD_BG, color: C.GREEN, align: 'center', fontSize: 9.5 } },
      { text: '62.1%', options: { fill: C.CARD_BG, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } }
    ],
    [
      { text: '缓存读取 (Read)', options: { fill: '26354A', color: C.WHITE, bold: true, align: 'center', fontSize: 10 } },
      { text: '$0.20', options: { fill: '26354A', color: C.CYAN, bold: true, align: 'center', fontSize: 10 } },
      { text: '$0.045', options: { fill: '26354A', color: C.GREEN, bold: true, align: 'center', fontSize: 10 } },
      { text: '$0.155', options: { fill: '26354A', color: C.GREEN, bold: true, align: 'center', fontSize: 10 } },
      { text: '77.5%', options: { fill: '26354A', color: C.GREEN, bold: true, align: 'center', fontSize: 10 } }
    ],
    [
      { text: '输出生成 (Output)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '$15.00', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9.5 } },
      { text: '$6.30', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9.5 } },
      { text: '$8.70', options: { fill: C.CARD_BG, color: C.GREEN, align: 'center', fontSize: 9.5 } },
      { text: '58.0%', options: { fill: C.CARD_BG, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } }
    ]
  ];

  slide.addTable(costRows, {
    x: 1.0, y: 2.15, w: 5.3,
    colW: [1.5, 0.9, 0.9, 0.9, 1.1],
    border: { type: 'solid', pt: 1, color: C.CARD_BORDER }
  });

  // Margin Highlight Box
  slide.addShape(pres.ShapeType.rect, {
    x: 1.0, y: 4.85, w: 5.3, h: 1.75,
    fill: { color: C.INNER_CARD },
    line: { color: C.GREEN, width: 1.2 }
  });
  slide.addText('缓存读取 77.5% 毛利率倒挂奇观', {
    x: 1.15, y: 4.98, w: 5.0, h: 0.28,
    fontSize: 11, fontFace: 'Arial', color: C.GREEN, bold: true
  });
  slide.addText('在 Claude Code 自主循环中，90%+ 的输入为代码库长前缀缓存。\n降价至 $0.20/M 却产生 77.5% 毛利，推动综合毛利率达 68.4%！', {
    x: 1.15, y: 5.32, w: 5.0, h: 1.15,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
  });

  // Right Card: ASIC Hardware Dividend & Margin Expansion
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('自研 ASIC 芯片削减 48% 硬件开支', {
    x: 7.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const asicCards = [
    { title: 'AWS Trainium2 规模落地', stat: '-45% 算力成本', desc: '相比英伟达 H100 租赁大幅降本，KV-Cache 存取延迟优化 3.2 倍。' },
    { title: 'Google TPU v6 (Trillium) 对冲', stat: '每秒数十亿 Token', desc: '大规模自研 TPU 矩阵支撑高峰并发，防止第三方云现货涨价。' },
    { title: '算力成本占营收比重收窄', stat: '从 68% 降至 31.6%', desc: '规模效应推动毛利率从 2023 年的 32% 狂飙至 2026 年的 68.4%。' }
  ];

  asicCards.forEach((ac, idx) => {
    const y = 2.25 + idx * 1.45;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.3,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(ac.title, {
      x: 7.25, y: y + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(ac.stat, {
      x: 10.4, y: y + 0.12, w: 1.6, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: C.GREEN, bold: true, align: 'right'
    });
    slide.addText(ac.desc, {
      x: 7.25, y: y + 0.45, w: 4.8, h: 0.72,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】很多分析师误以为大模型降价会导致毛利坍塌，事实恰恰相反！Prompt Caching 带来了反常识的“降价暴利”：虽然缓存读取单价降到两毛钱，但服务器边际读取成本几乎归零，毛利率反升至 77.5%，加上自研 ASIC 芯片，推动整体毛利高达 68.4%。');
}

// ==========================================
// SLIDE 22: 2.6 OpenAI 的 Codex 反攻：Code Red 应急与双寡头竞争格局
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.6 OpenAI 的 Codex 反攻：Code Red 应急与双寡头格局', 'Part 2 · The Duopoly Battle', 22);

  // 4 Quadrants Matrix Layout (2x2 Competitive Landscape)
  const quads = [
    {
      quad: 'ANTHROPIC (旗舰领跑者)',
      focus: '极致工程自主性 & 企业长程自愈',
      color: C.CYAN,
      x: 0.8, y: 1.45,
      items: [
        '【核心标的】Claude 5.5 Sonnet + Claude Code',
        '【核心优势】Terminal-4 70.6% / 99.5% 单步稳定性',
        '【战略身位】开发者首选底座，掌控全球 500 强采购'
      ]
    },
    {
      quad: 'OPENAI (生态挑战者)',
      focus: 'C 端流量统治力 & 微软企业捆绑',
      color: C.GOLD,
      x: 6.8, y: 1.45,
      items: [
        '【核心标的】o3-series + Codex CLI Agent',
        '【核心优势】庞大 ChatGPT 流量入口与品牌心智',
        '【战略反击】拉响 Code Red 警报，API 降价 40% 阻击'
      ]
    },
    {
      quad: '开源阵营 (DEEPSEEK / QWEN)',
      focus: '极致性价比 & 企业私有化部署',
      color: C.GREEN,
      x: 0.8, y: 4.25,
      items: [
        '【核心标的】DeepSeek-V3 / Qwen 3 Code',
        '【核心优势】前沿 1/5 售价，守住全球开发者定价铁底',
        '【生态定位】有效制衡商业巨头垄断定价'
      ]
    },
    {
      quad: 'GOOGLE (多模态挑战者)',
      focus: '全栈 TPU 算力 & 2M 超长上下文',
      color: C.PURPLE,
      x: 6.8, y: 4.25,
      items: [
        '【核心标的】Gemini 3.0 Pro + Workspace',
        '【核心优势】多模态原生与跨系统整合能力',
        '【工程困境】格式报错率高与安全过度拒答'
      ]
    }
  ];

  quads.forEach((q) => {
    addCard(slide, q.x, q.y, 5.7, 2.55);

    slide.addShape(pres.ShapeType.rect, {
      x: q.x + 0.25, y: q.y + 0.2, w: 2.8, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: q.color, width: 1 }
    });
    slide.addText(q.quad, {
      x: q.x + 0.25, y: q.y + 0.2, w: 2.8, h: 0.28,
      fontSize: 9, fontFace: 'Arial', color: q.color, bold: true, align: 'center'
    });

    slide.addText(q.focus, {
      x: q.x + 3.2, y: q.y + 0.2, w: 2.25, h: 0.28,
      fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right'
    });

    slide.addShape(pres.ShapeType.line, {
      x: q.x + 0.25, y: q.y + 0.58, w: 5.2, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    q.items.forEach((it, idx) => {
      const yI = q.y + 0.72 + idx * 0.55;
      slide.addText(it, {
        x: q.x + 0.25, y: yI, w: 5.2, h: 0.48,
        fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
      });
    });
  });

  slide.addNotes('【演讲提示】本页通过 2x2 竞争格局四象限图，系统展示了全球编码大模型的四方博弈：Anthropic 在长程自主性上领先，OpenAI 拥有庞大消费入口，开源阵营设定价格底座，而 Google 凭借多模态展开竞争。双寡头格局正在形成。');
}

// ==========================================
// SLIDE 23: 2.7 反面教材：Gemini 3.0 Pro 的工程困境与执行力赤字剖析
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2.7 反面教材：Gemini 3.0 Pro 的工程困境与执行力赤字', 'Part 2 · The Engineering Deficit', 23);

  // 4 Diagnostic Metric Cards with Error Badges
  const flaws = [
    {
      title: '01. MALFORMED_FUNCTION_CALL 协议违规',
      badge: '14.2% 报错率',
      color: C.RED,
      snippet: 'JSON 括号未闭合、键名缺失、混杂思维链文本',
      desc: '在多轮工具交互中频繁破坏接口协议，导致宿主 Harness 发生不可逆的致命崩溃。'
    },
    {
      title: '02. 补丁懒惰症 (Lazy Diff Syndrome)',
      badge: '截断代码',
      color: C.GOLD,
      snippet: '// ... keep existing code ...',
      desc: '多文件修改时频繁偷懒截断代码，当工具自动应用 git diff 补丁时导致源文件大面积损毁。'
    },
    {
      title: '03. 极端安全过敏与虚假拒答',
      badge: '8.7% 误报率',
      color: C.PURPLE,
      snippet: '拦截 kill -9、chown、iptables 等运维命令',
      desc: '过度对齐的安全策略将正常的系统调试脚本误判为黑客攻击，强行打断排错闭环。'
    },
    {
      title: '04. 虚假 2M 上下文与注意力衰减',
      badge: '金鱼记忆',
      color: C.CYAN,
      snippet: '大海捞针测试满分，长程调试严重遗忘',
      desc: '实际长程任务中频繁遗忘 20 步之前的关键指针与错误根因，多模态优势在执行力赤字面前被抹杀。'
    }
  ];

  flaws.forEach((fl, idx) => {
    const x = idx % 2 === 0 ? 0.8 : 6.8;
    const y = idx < 2 ? 1.45 : 4.15;
    addCard(slide, x, y, 5.7, 2.55);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: y + 0.2, w: 1.8, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: fl.color, width: 1 }
    });
    slide.addText(fl.badge, {
      x: x + 0.25, y: y + 0.2, w: 1.8, h: 0.28,
      fontSize: 9, fontFace: 'Arial', color: fl.color, bold: true, align: 'center'
    });

    slide.addText(fl.title, {
      x: x + 0.25, y: y + 0.55, w: 5.2, h: 0.35,
      fontSize: 12, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    // Snippet Box
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: y + 0.95, w: 5.2, h: 0.42,
      fill: { color: '261E28' },
      line: { color: fl.color, width: 1 }
    });
    slide.addText(fl.snippet, {
      x: x + 0.35, y: y + 1.02, w: 5.0, h: 0.28,
      fontSize: 9, fontFace: 'Consolas', color: C.TEXT_MAIN
    });

    slide.addText(fl.desc, {
      x: x + 0.25, y: y + 1.48, w: 5.2, h: 0.95,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】谷歌的拉跨表现是反衬编码模型重要性的最佳案例。谷歌拥有世界顶级的多模态技术和超长窗口，但因为缺乏工程严谨性，Gemini 3.0 Pro 充满函数格式报错、补丁懒惰和安全误报，使其在真实的自动化编程中完全无法落地。这证实了：编码不是普通功能，而是检验执行力的硬核试金石！');
}


// ==========================================
// SLIDE 24: Section Divider - Part 3
// ==========================================
{
  const slide = pres.addSlide();
  addSectionDivider(
    slide,
    '第三篇：代码即 AGI —— 递归演化与文明拐点',
    '终端自愈、代码认知 IR、RSI 自举与 Software 3.0',
    '本篇深入 Anthropic 估值底座的最硬核技术内核。为什么代码不是程序员专属，而是通向通用智能的唯一物理跳板？从 SWE-bench Pro 与 Terminal-Bench 评测革命，到 Dario Amodei 的科研加速哲学，再到 Claude 训练下一代 Claude 的 RSI 递归自举。',
    'PART 3 · CODE AS AGI & RSI',
    24
  );
  slide.addNotes('【演讲提示】进入第三篇，也是整份研报技术深度最高的篇章。我们将论证一个至关重要的命题：代码模型绝不是一个垂直领域的程序员辅助工具，而是通用 Agent 的操作系统与物理跳板。');
}

// ==========================================
// SLIDE 25: 3.1 评测革命：从 SWE-bench Verified 饱和到 Pro 与 Terminal-Bench 4.0
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.1 评测革命：从 SWE-bench Verified 饱和到 Pro 与 Terminal-4', 'Part 3 · Benchmark Leap', 25);

  // Left: Native Bar Chart of Frontier Model Scores on Terminal-Bench 4.0 (%)
  const tbChartData = [
    {
      name: 'Terminal-Bench 4.0 综合成功率 (%)',
      labels: ['Gemini 3.0', 'DeepSeek-V3', 'Claude 4.5 Opus', 'Claude 4.5 Sonnet', 'OpenAI o3', 'Claude 5.5 Sonnet'],
      values: [44.5, 54.0, 58.4, 62.1, 63.8, 70.6]
    }
  ];

  slide.addChart(pres.ChartType.bar, tbChartData, {
    x: 0.8, y: 1.45, w: 6.2, h: 5.35,
    showLegend: false,
    chartColors: [C.CYAN],
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MAIN,
    valAxisLabelColor: C.TEXT_MUTED
  });

  // Right Side: 3 Benchmark Evolution Cards
  addCard(slide, 7.2, 1.45, 5.33, 5.35);
  slide.addText('代码评测基准的三代跃迁', {
    x: 7.45, y: 1.7, w: 4.8, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const bGenerations = [
    {
      gen: '一代 · HumanEval',
      status: '饱和淘汰',
      color: C.RED,
      score: 'Claude 5.5: 99.8%',
      desc: '单函数黑盒判题，缺乏环境依赖，已退化为玩具级语法连贯性测试。'
    },
    {
      gen: '二代 · SWE-bench Verified',
      status: '80%+ 饱和',
      color: C.GOLD,
      score: 'Claude 5.5: 94.5%',
      desc: '开源单仓库 Issue 补丁修复；因缺乏跨系统交互，已无法区分顶级模型。'
    },
    {
      gen: '三代 · SWE-bench Pro',
      status: '工业级新标尺',
      color: C.GREEN,
      score: 'Claude 5.5: 91.2%',
      desc: '私有大仓跨依赖架构重构，全球顶级企业软件交付的核心考场。'
    },
    {
      gen: '终极 · Terminal-Bench 4.0',
      status: '自愈黄金标尺',
      color: C.CYAN,
      score: 'Claude 5.5: 70.6%',
      desc: '全交互 Linux 终端系统排错；跨过 70% 代表真实世界无人值守。'
    }
  ];

  bGenerations.forEach((bg, idx) => {
    const yB = 2.15 + idx * 1.18;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.45, y: yB, w: 4.8, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: bg.color, width: 1.2 }
    });
    slide.addText(bg.gen, {
      x: 7.6, y: yB + 0.1, w: 2.8, h: 0.25,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(bg.status, {
      x: 10.6, y: yB + 0.1, w: 1.5, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: bg.color, bold: true, align: 'right'
    });
    slide.addText(bg.score, {
      x: 7.6, y: yB + 0.38, w: 4.5, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: bg.color, bold: true
    });
    slide.addText(bg.desc, {
      x: 7.6, y: yB + 0.65, w: 4.5, h: 0.35,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED
    });
  });

  slide.addNotes('【演讲提示】本页展示了 AI 编码评测的范式变迁。左侧图表显示在最高难度 Terminal-Bench 4.0 上，Claude 5.5 达到 70.6%，显著领先 OpenAI 的 63.8% 与谷歌的 44.5%。右侧清晰呈现了从 HumanEval 到 Terminal-Bench 的四代演进。');
}

// ==========================================
// SLIDE 26: 3.1.2 终端自愈的物理闭环：从 Guess & Hope 到反馈驱动纠错
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.1.2 终端自愈的物理闭环：从 Guess & Hope 到反馈纠错', 'Part 3 · Self-Healing Loop', 26);

  // Left Card: 5-Step Pipeline Flow Diagram (mTLS Real Case)
  addCard(slide, 0.8, 1.45, 6.2, 5.35);
  slide.addText('工业级实录：Nginx 双向证书 (mTLS) 自愈链条', {
    x: 1.05, y: 1.7, w: 5.7, h: 0.32,
    fontSize: 13.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  const steps = [
    { num: '01', title: '异常触发', code: 'curl -> SSL_ERROR_SYSCALL', desc: '捕获握手中断物理信号' },
    { num: '02', title: '探针挂载', code: 'openssl s_client -connect', desc: '定位根证书链校验断开' },
    { num: '03', title: '根因溯源', code: 'cat /etc/nginx/nginx.conf', desc: '解析发现指向过期中间私钥' },
    { num: '04', title: '动态自愈', code: 'nginx -t && nginx -s reload', desc: '生成合规证书并预检重载' },
    { num: '05', title: '回归闭环', code: 'curl -> HTTP/2 200 OK', desc: '确定性通过并自动提 PR' }
  ];

  steps.forEach((st, idx) => {
    const yS = 2.15 + idx * 0.92;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.05, y: yS, w: 5.7, h: 0.82,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(st.num, {
      x: 1.2, y: yS + 0.1, w: 0.4, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true
    });
    slide.addText(st.title, {
      x: 1.65, y: yS + 0.1, w: 1.8, h: 0.25,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(st.code, {
      x: 3.5, y: yS + 0.1, w: 3.1, h: 0.25,
      fontSize: 9, fontFace: 'Consolas', color: C.GOLD, align: 'right'
    });
    slide.addText(st.desc, {
      x: 1.65, y: yS + 0.4, w: 4.8, h: 0.35,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED
    });
  });

  // Right Card: 4 Physical Feedback Channels
  addCard(slide, 7.3, 1.45, 5.2, 5.35);
  slide.addText('操作系统提供的四大物理反馈锚点', {
    x: 7.55, y: 1.7, w: 4.7, h: 0.32,
    fontSize: 13.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const channels = [
    { title: '01. STDOUT / STDERR 文本流', desc: '行号与错误堆栈作为下一步推理的高质量输入。' },
    { title: '02. Exit Code (0 / 非零) 确定性', desc: '布尔值硬反馈，彻底消除大语言模型自然语言幻觉。' },
    { title: '03. 系统级状态探针 (ps/netstat)', desc: '直接透视进程、端口与内存，感知真实世界状态。' },
    { title: '04. 单元与集成测试断言', desc: '通过测试用例覆盖率作为唯一的工程交付验收标准。' }
  ];

  channels.forEach((ch, idx) => {
    const yC = 2.15 + idx * 1.15;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.55, y: yC, w: 4.7, h: 1.05,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(ch.title, {
      x: 7.7, y: yC + 0.1, w: 4.4, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.GOLD, bold: true
    });
    slide.addText(ch.desc, {
      x: 7.7, y: yC + 0.4, w: 4.4, h: 0.58,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】本页展示了终端自愈的精妙之处。大模型过去容易胡说八道，是因为没有反馈机制；而在 Linux 终端中，每一次命令执行都有明确的 Exit Code 和 STDERR。模型不再是“猜答案”，而是通过多步尝试、观察报错、自适应修正，形成确定性的物理闭环。');
}

// ==========================================
// SLIDE 27: 3.1.3 模型分工与反直觉现象：Sonnet 5.5 胜过 Opus 4.5 的端到端自愈经济学
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.1.3 反直觉现象：Sonnet 5.5 胜过 Opus 4.5 的自愈经济学', 'Part 3 · The Speed-Depth Tradeoff', 27);

  // Left Card: Score Comparison
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addText('Terminal-Bench 4.0 上的反常识成绩反转', {
    x: 1.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  addCard(slide, 1.1, 2.15, 5.1, 1.4, C.INNER_CARD, C.GREEN);
  slide.addText('70.6%', {
    x: 1.3, y: 2.25, w: 2.2, h: 0.55,
    fontSize: 32, fontFace: 'Arial', color: C.GREEN, bold: true
  });
  slide.addText('Claude 5.5 Sonnet (高频敏捷循环)', {
    x: 1.3, y: 2.82, w: 4.6, h: 0.28,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
  });
  slide.addText('单步延迟 220ms | 100 词/秒 吞吐 | 综合成功率最高', {
    x: 1.3, y: 3.12, w: 4.6, h: 0.25,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  addCard(slide, 1.1, 3.75, 5.1, 1.4, C.INNER_CARD, C.GOLD);
  slide.addText('58.4%', {
    x: 1.3, y: 3.85, w: 2.2, h: 0.55,
    fontSize: 32, fontFace: 'Arial', color: C.GOLD, bold: true
  });
  slide.addText('Claude 4.5 Opus (单次重度深思)', {
    x: 1.3, y: 4.42, w: 4.6, h: 0.28,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
  });
  slide.addText('单步延迟 1.8s | 25 词/秒 吞吐 | 超时与注意力漂移较高', {
    x: 1.3, y: 4.72, w: 4.6, h: 0.25,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  slide.addText('核心悬念：为什么参数更大、通常被认为“更聪明”的 Opus 反而在终端实测中落败？', {
    x: 1.1, y: 5.35, w: 5.1, h: 1.2,
    fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 16
  });

  // Right Card: 3 Reasons Behind Reversal (Fast Loop vs Slow Pondering)
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('工程哲学根因：快循环胜过慢深思', {
    x: 7.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const reasons = [
    { title: '01. 快速试错循环 (Fast Iteration Loop)', tag: '探针密度碾压', desc: 'Sonnet 在 10 秒内执行 5 次小步探查获取环境信息，而 Opus 花 30 秒空想推演。' },
    { title: '02. 消除注意力漂移惩罚', tag: '精炼克制', desc: 'Opus 生成长篇思维链导致工作窗口膨胀注意力涣散；Sonnet 聚焦精准报错栈。' },
    { title: '03. 算力成本与并发杠杆', tag: '1/5 推理成本', desc: '同样的算力预算可并行跑 5 个 Sonnet 实例进行蒙特卡洛树搜索，命中率远超单个 Opus。' }
  ];

  reasons.forEach((rs, idx) => {
    const yR = 2.2 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: yR, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(rs.title, {
      x: 7.25, y: yR + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.CYAN, bold: true
    });
    slide.addText(rs.tag, {
      x: 10.4, y: yR + 0.12, w: 1.6, h: 0.28,
      fontSize: 9.5, fontFace: 'Arial', color: C.GOLD, bold: true, align: 'right'
    });
    slide.addText(rs.desc, {
      x: 7.25, y: yR + 0.45, w: 4.8, h: 0.75,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】这是本研报极具技术洞见的一页。在复杂系统排错中，“快循环”比“慢深思”更有效。Sonnet 5.5 凭借高速的命令探查循环以 70.6% 战胜了 Opus 的 58.4%。这证明：面向 Agent 时代的模型优化，敏捷与执行力比单纯的参数规模更重要。');
}

// ==========================================
// SLIDE 28: 3.2 代码即 IR：为什么代码是通用 Agent 的认知操作系统
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.2 代码即 IR：为什么代码是通用 Agent 的操作系统', 'Part 3 · Code as Universal IR', 28);

  // 4-Layer Cognitive Architecture Stack Diagram
  const layers = [
    {
      layer: 'LAYER 4 · 通用应用层 (APPLICATION)',
      color: C.PURPLE,
      title: '现实世界多模态与跨域自动化',
      desc: '机器人机械臂操控、生物医学分子模拟、3D 渲染光影渲染、企业跨系统数据对账'
    },
    {
      layer: 'LAYER 3 · 通用中间表示 (UNIVERSAL IR)',
      color: C.CYAN,
      title: '代码作为认知计划与状态机 (Code-as-Plan)',
      desc: '严谨循环控制、分支容错、变量作用域工作记忆、现场动态发明 API 工具'
    },
    {
      layer: 'LAYER 2 · 沙箱执行引擎 (EXECUTION ENGINE)',
      color: C.GREEN,
      title: 'Linux 终端与 Python 运行时沙箱',
      desc: 'Bash 进程流、管道过滤器、编译器语法检查、单元测试断言、Exit Code 0/1 反馈'
    },
    {
      layer: 'LAYER 1 · 物理底座 (PHYSICAL FOUNDATION)',
      color: C.GOLD,
      title: '硬件算力与操作系统内核',
      desc: 'AWS Trainium2 / Google TPU 算力集群、本地文件系统、网络套接字、物理外设'
    }
  ];

  layers.forEach((l, idx) => {
    const yL = 1.45 + idx * 1.35;
    addCard(slide, 0.8, yL, 11.73, 1.25);

    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yL + 0.15, w: 3.8, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: l.color, width: 1 }
    });
    slide.addText(l.layer, {
      x: 1.1, y: yL + 0.15, w: 3.8, h: 0.28,
      fontSize: 8.5, fontFace: 'Arial', color: l.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(l.title, {
      x: 5.1, y: yL + 0.15, w: 7.1, h: 0.28,
      fontSize: 12, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    slide.addText(l.desc, {
      x: 1.1, y: yL + 0.55, w: 11.1, h: 0.55,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页通过四层认知操作系统架构图，回答了最核心的理论问题：为什么代码能力等同于 AGI 能力？因为代码是通用智能操作现实世界的中间表示（IR）。底层是物理硬件，第二层是执行引擎，第三层是作为认知计划的代码，顶层则是千行百业的通用智能应用。');
}

// ==========================================
// SLIDE 29: 3.2.2 跨域通用实践：Instinct 与 Meta Muse 的技术共振
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.2.2 跨域通用实践：Instinct 与 Meta Muse 的共振', 'Part 3 · General Agent Evidence', 29);

  // Left Card: Instinct (Physical & Hardware Agent)
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 1.7, w: 3.2, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('INSTINCT · 物理与通用系统操控', {
    x: 1.1, y: 1.7, w: 3.2, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center'
  });

  const instPoints = [
    { title: '无缝控制实验台与硬件设备', desc: '直接生成 Python / ROS 脚本操控机械臂与传感器，无需专用多模态头。' },
    { title: '自主排查物理外设故障', desc: '通过 dmesg | grep tty 读取内核驱动，自适应调参并重连串口通信。' },
    { title: '统一于一套标准 Shell 执行环境', desc: '无论是操控机器人还是管理数据中心算力，底层完全统一为标准代码执行。' }
  ];

  instPoints.forEach((ip, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.CYAN, width: 1.2 }
    });
    slide.addText(ip.title, {
      x: 1.25, y: y + 0.15, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.CYAN, bold: true
    });
    slide.addText(ip.desc, {
      x: 1.25, y: y + 0.48, w: 4.8, h: 0.72,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  // Right Card: Meta Muse (Multimodal Creative Pipeline)
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addShape(pres.ShapeType.rect, {
    x: 7.1, y: 1.7, w: 3.2, h: 0.32,
    fill: { color: C.INNER_CARD },
    line: { color: C.PURPLE, width: 1 }
  });
  slide.addText('META MUSE · 复杂多模态创意编排', {
    x: 7.1, y: 1.7, w: 3.2, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', color: C.PURPLE, bold: true, align: 'center'
  });

  const musePoints = [
    { title: '用 Python 脚本统率 3D 与音画管线', desc: '编写 Blender bpy 脚本精密控制 3D 几何建模、物理光影与音频合成流水线。' },
    { title: '毫厘不差的工业级参数控制', desc: '代码赋予 Agent 数学级精确度，消除纯扩散生成模型的模糊与失控变形。' },
    { title: '跨模态资产自动化协同流水线', desc: '从剧本生成 -> 3D 场景 -> 声学混音 -> 最终视频剪辑，全由后台脚本串联。' }
  ];

  musePoints.forEach((mp, idx) => {
    const y = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: y, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.PURPLE, width: 1.2 }
    });
    slide.addText(mp.title, {
      x: 7.25, y: y + 0.15, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.PURPLE, bold: true
    });
    slide.addText(mp.desc, {
      x: 7.25, y: y + 0.48, w: 4.8, h: 0.72,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页通过 Instinct 和 Meta Muse 两个行业顶级通用 Agent 案例，雄辩地证明了我们的论点：无论是操控现实世界的机器人硬件，还是编排复杂的 3D 动画与音画资产，顶尖智能体的底层全部统一在“代码生成与执行”这一唯一通用的操作系统之上。');
}

// ==========================================
// SLIDE 30: 3.3 护城河深潜：为什么是 Claude 赢得了编码终局？
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.3 护城河深潜：为什么是 Claude 赢得了编码终局？', 'Part 3 · The Anthropic Moat', 30);

  // Left Chart: Native Line Chart of Compounding Reliability (r^N)
  const relChartData = [
    {
      name: 'Claude (99.5% 单步可靠性)',
      labels: ['1 步', '10 步', '20 步', '30 步', '40 步', '50 步'],
      values: [99.5, 95.1, 90.5, 86.0, 81.8, 77.8]
    },
    {
      name: '竞品 (98.0% 单步可靠性)',
      labels: ['1 步', '10 步', '20 步', '30 步', '40 步', '50 步'],
      values: [98.0, 81.7, 66.8, 54.5, 44.6, 36.4]
    },
    {
      name: '基线 (95.0% 单步可靠性)',
      labels: ['1 步', '10 步', '20 步', '30 步', '40 步', '50 步'],
      values: [95.0, 59.9, 35.8, 21.5, 12.9, 7.7]
    }
  ];

  slide.addChart(pres.ChartType.line, relChartData, {
    x: 0.8, y: 1.45, w: 6.2, h: 5.35,
    showLegend: true, legendPos: 't',
    chartColors: [C.GREEN, C.GOLD, C.RED],
    lineDataSymbol: 'circle',
    lineDataSymbolSize: 5,
    valAxisLineColor: C.CARD_BORDER,
    catAxisLineColor: C.CARD_BORDER,
    valGridLine: { color: '1E293B', style: 'dash' },
    catAxisLabelColor: C.TEXT_MAIN,
    valAxisLabelColor: C.TEXT_MUTED,
    legendColor: C.TEXT_MAIN
  });

  // Right Side: Compounding Reliability Tax Formula
  addCard(slide, 7.2, 1.45, 5.33, 5.35);
  slide.addText('单步可靠性复利税公式：R = r ^ N', {
    x: 7.45, y: 1.7, w: 4.8, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const mathBoxes = [
    {
      title: '长程任务可靠性指数级衰减',
      color: C.CYAN,
      desc: '在 50 步系统重构中，98% 看起来很接近 99.5%，但经过 50 次方相乘后，最终成功率是 36.4%（不可用）与 77.8%（高可用）的天壤之别！'
    },
    {
      title: '五代 Agentic RL 强化学习调优',
      color: C.GREEN,
      desc: '专有数十亿步真实终端轨迹反哺，模型在长程任务中始终严格遵循接口契约，不发生格式破坏与幻觉截断。'
    },
    {
      title: '信任成本的悬崖效应',
      color: C.GOLD,
      desc: '工程师可以容忍偶尔重试，但如果一个任务 3 次里有 2 次崩溃，排查的时间将超过手写代码。高可靠性锁定了企业绝对忠诚。'
    }
  ];

  mathBoxes.forEach((mb, idx) => {
    const yM = 2.15 + idx * 1.6;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.45, y: yM, w: 4.8, h: 1.45,
      fill: { color: C.INNER_CARD },
      line: { color: mb.color, width: 1.2 }
    });
    slide.addText(mb.title, {
      x: 7.6, y: yM + 0.12, w: 4.5, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: mb.color, bold: true
    });
    slide.addText(mb.desc, {
      x: 7.6, y: yM + 0.45, w: 4.5, h: 0.9,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】请向投资人着重强调左侧的“单步可靠性复利税”曲线。98% 与 99.5% 看起来差不太多，但在 50 步的长任务中，最终成功率是 36% 与 78% 的天壤之别！这就是为什么 Anthropic 能在企业级形成牢不可破的垄断。');
}

// ==========================================
// SLIDE 31: 3.4 思想源流：Dario Amodei 哲学与《仁慈的机器》
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.4 思想源流：Dario Amodei 哲学与《仁慈的机器》', 'Part 3 · Amodei Vision', 31);

  // 3 Philosophical Stances Comparison
  const stances = [
    {
      role: 'DARIO AMODEI (理性科学派)',
      tag: 'ANTHROPIC 核心哲学',
      color: C.CYAN,
      items: [
        '【学术底色】普林斯顿生物物理学博士，崇尚可检验、可测量的实验科学',
        '【核心愿景】AI 作为人类科学加速器，将 50 年生物医学进展压缩至 5 年',
        '【安全信念】负责任扩展政策 (RSP)，拒绝商业利益绑架安全'
      ]
    },
    {
      role: '奇点宗教派 (TECH SINGULARITY)',
      tag: '硅谷狂热叙事',
      color: C.GOLD,
      items: [
        '【核心假设】超级智能将瞬间降临并重塑一切，人类社会将被硅基取代',
        '【商业行为】激进烧钱、忽视对齐合规，盲目追求参数规模军备竞赛',
        '【脱离现实】缺乏对实体科学与物理实验严谨性的敬畏'
      ]
    },
    {
      role: '末日悲观派 (DOOMER PESSIMISM)',
      tag: '绝对封锁主义',
      color: C.RED,
      items: [
        '【核心观点】大模型必然失控并毁灭人类文明，呼吁全球强制暂停研发',
        '【弊端后果】忽视 AI 治疗癌症、化解气候危机与消除贫困的巨大善意潜力',
        '【战略落后】导致西方在科技竞争中自缚手脚'
      ]
    }
  ];

  stances.forEach((st, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 5.35);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.3,
      fill: { color: C.INNER_CARD },
      line: { color: st.color, width: 1 }
    });
    slide.addText(st.tag, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.3,
      fontSize: 8.5, fontFace: 'Arial', color: st.color, bold: true, align: 'center', charSpacing: 1.2
    });

    slide.addText(st.role, {
      x: x + 0.25, y: 2.1, w: 3.25, h: 0.5,
      fontSize: 14.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.75, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    st.items.forEach((it, iIdx) => {
      const yI = 2.95 + iIdx * 1.35;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.25, y: yI, w: 3.25, h: 1.25,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(it, {
        x: x + 0.35, y: yI + 0.12, w: 3.05, h: 1.0,
        fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
      });
    });
  });

  slide.addNotes('【演讲提示】了解创始人 Dario Amodei 的哲学，是理解 Anthropic 估值预期的钥匙。他的万字长文《仁慈的机器》描绘了一个宏伟图景：AI 的终极目的不是在手机上陪人聊天，而是充当人类科学研究的倍增器，把 50 年的生物医学进展压缩进 5 年。');
}

// ==========================================
// SLIDE 32: 3.4.2 科学加速假说：生物物理学底色与 50 年科研压缩为 5 年
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.4.2 科学加速假说：生物物理底色与 50 年科研压缩为 5 年', 'Part 3 · Scientific Leap', 32);

  // 3 Science Acceleration Pipelines
  const pipelines = [
    {
      num: '01',
      domain: '生物医学与健康寿命',
      time: '50 年压缩至 5 年',
      color: C.CYAN,
      items: [
        '【靶点自动化发现】自主精读文献并进行激酶大分子变构模拟',
        '【蛋白质动态构象】突破静态折叠，预测复杂药物表位结合',
        '【个体化 mRNA 疫苗】48 小时完成测序分析并输出合成代码'
      ]
    },
    {
      num: '02',
      domain: '凝聚态物理与新材料',
      time: '原子级精准合成',
      color: C.GOLD,
      items: [
        '【常压超导高通量筛选】第一性原理结合图网络筛选百万种晶格',
        '【全固态电池电解质】微观模拟锂枝晶击穿动力学以攻克寿命痛点',
        '【纳米催化剂合成】设计高转化率催化剂，制氢效率提升数倍'
      ]
    },
    {
      num: '03',
      domain: '清洁能源与可控聚变',
      time: '等离子体自适应控制',
      color: C.GREEN,
      items: [
        '【托卡马克微秒级反馈】纳秒级自适应调节磁场线抑制破裂',
        '【聚变堆第一壁模拟】高能中子辐照缺陷演变与服役寿命预测',
        '【虚拟电厂超算调度】数百万分布式储能节点的电网纳秒平衡'
      ]
    }
  ];

  pipelines.forEach((p, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 5.35);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.3,
      fill: { color: C.INNER_CARD },
      line: { color: p.color, width: 1 }
    });
    slide.addText(p.num + ' · ' + p.time, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: p.color, bold: true, align: 'center'
    });

    slide.addText(p.domain, {
      x: x + 0.25, y: 2.1, w: 3.25, h: 0.45,
      fontSize: 16, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.7, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    p.items.forEach((it, iIdx) => {
      const yI = 2.9 + iIdx * 1.35;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.25, y: yI, w: 3.25, h: 1.25,
        fill: { color: C.INNER_CARD },
        line: { color: C.CARD_BORDER, width: 1 }
      });
      slide.addText(it, {
        x: x + 0.35, y: yI + 0.12, w: 3.05, h: 1.0,
        fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
      });
    });
  });

  slide.addNotes('【演讲提示】本页展示了 AI 如何通过代码操控仿真环境加速自然科学。在生物医学、新材料与可控核聚变领域，科研本质上已经变成了“计算机仿真代码编写与结果验证”。代码模型跨界成为科学家最得力的自主助手。');
}

// ==========================================
// SLIDE 33: 3.5 RSI 递归科研自举：Claude 如何训练下一代 Claude
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.5 RSI 递归科研自举：Claude 如何训练下一代 Claude', 'Part 3 · Recursive Self-Improvement', 33);

  // RSI 4-Quadrant Self-Improvement Flywheel Diagram
  const flywheel = [
    {
      step: '01. 集群内核故障自愈',
      tag: 'INFRASTRUCTURE SELF-HEALING',
      color: C.CYAN,
      x: 0.8, y: 1.45,
      desc: '监控数万张 Trainium2/TPU 集群通信抖动，自动热迁移断点与重启异常节点，提升集群利用率 18%。'
    },
    {
      step: '02. 合成推理链清洗提纯',
      tag: 'SYNTHETIC DATA REASONING',
      color: C.GOLD,
      x: 6.8, y: 1.45,
      desc: '自主生成数十亿步深度思维链，通过编译器断言验证逻辑自洽性，用提纯后的极高纯度数据训练下一代。'
    },
    {
      step: '03. 自适应 RL 强化学习沙箱',
      tag: 'AUTO RL SANDBOXES',
      color: C.GREEN,
      x: 0.8, y: 4.25,
      desc: '模型自主编写具有严苛断言的极端破坏性环境，磨砺下一代 Agent 在高延迟与受限权限下的自愈能力。'
    },
    {
      step: '04. 全自主红蓝渗透对抗',
      tag: 'ADVERSARIAL RED TEAMING',
      color: C.RED,
      x: 6.8, y: 4.25,
      desc: '独立 Claude Red Team 实例 24 小时不断对正在训练的实验模型发动越狱攻击，预训练期建立免疫机制。'
    }
  ];

  flywheel.forEach((fw) => {
    addCard(slide, fw.x, fw.y, 5.7, 2.55);

    slide.addShape(pres.ShapeType.rect, {
      x: fw.x + 0.25, y: fw.y + 0.2, w: 3.2, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: fw.color, width: 1 }
    });
    slide.addText(fw.tag, {
      x: fw.x + 0.25, y: fw.y + 0.2, w: 3.2, h: 0.28,
      fontSize: 8.5, fontFace: 'Arial', color: fw.color, bold: true, align: 'center'
    });

    slide.addText(fw.step, {
      x: fw.x + 0.25, y: fw.y + 0.55, w: 5.2, h: 0.35,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    slide.addText(fw.desc, {
      x: fw.x + 0.25, y: fw.y + 0.95, w: 5.2, h: 1.45,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
    });
  });

  slide.addNotes('【演讲提示】RSI（Recursive Self-Improvement 递归自我演化）过去被视为科幻概念，但在 Anthropic 内部已经成为工业现实。Claude 正在负责排查集群故障、生成高质量训练数据、编写强化学习环境并进行红蓝渗透对抗。智能开始自己训练自己。');
}

// ==========================================
// SLIDE 34: 3.5.2 内部 26% 研发主导与 8x 工程师倍增器背后的工程真相
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.5.2 内部研发主导与 8x 工程师倍增器背后的工程真相', 'Part 3 · Internal Productivity', 34);

  // Left: Native Doughnut Chart of Anthropic Code Commits Share (%)
  const commitChartData = [
    {
      name: '内部代码合入占比 (%)',
      labels: ['Claude 自主提交 (26.4%)', '人机深度协同 (65.4%)', '纯人类手写 (8.2%)'],
      values: [26.4, 65.4, 8.2]
    }
  ];

  slide.addChart(pres.ChartType.doughnut, commitChartData, {
    x: 0.8, y: 1.45, w: 5.8, h: 5.35,
    showLegend: true, legendPos: 'b',
    chartColors: [C.CYAN, C.GREEN, C.GOLD],
    legendColor: C.TEXT_MAIN
  });

  // Right Side: 8x Multiplier Engineering Reality
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('顶尖科学家产出提升 8 倍的工程机密', {
    x: 7.05, y: 1.7, w: 5.2, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const multCards = [
    {
      title: '科学家聚焦战略方向',
      sub: '假设构想与安全底线',
      color: C.CYAN,
      desc: '人类研究员提出原创假说、架构范式与损失函数目标，100% 摆脱琐碎的环境依赖配置。'
    },
    {
      title: 'Agent 承担 90% 工程摩擦',
      sub: '算子编写与网格搜索',
      color: C.GREEN,
      desc: 'Claude 自动编写 PyTorch 分布式算子与 Triton 内核优化，并在数千张卡上并发消融实验。'
    },
    {
      title: '试错周期数量级压缩',
      sub: '从 3 周缩短至 4 小时',
      color: C.GOLD,
      desc: '实验验证由过去的“月度迭代”变成“日级多轮迭代”，1,200 人团队爆发出跨国巨头万人的产出。'
    }
  ];

  multCards.forEach((mc, idx) => {
    const yM = 2.2 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.05, y: yM, w: 5.2, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: mc.color, width: 1.2 }
    });
    slide.addText(mc.title, {
      x: 7.2, y: yM + 0.12, w: 3.2, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: mc.color, bold: true
    });
    slide.addText(mc.sub, {
      x: 10.4, y: yM + 0.12, w: 1.7, h: 0.28,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right'
    });
    slide.addText(mc.desc, {
      x: 7.2, y: yM + 0.45, w: 4.9, h: 0.75,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页揭开了 Anthropic 惊人人效的真相。左侧环形图直观显示：公司 26.4% 的主干代码完全由 Claude 自主生成并验证，65.4% 由人机结对完成，纯人类手写仅剩 8.2%！顶级科学家的产出被放大了 8 倍，科研从手工作坊彻底转变为全自动流水线。');
}

// ==========================================
// SLIDE 35: 3.6 安全防线：负责任扩展政策 (RSP) 与 ASL-3 边界
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.6 安全防线：负责任扩展政策 (RSP) 与 ASL-3 边界', 'Part 3 · RSP & Safety Gates', 35);

  // Stepped Safety Level Hierarchy Cards
  const aslLevels = [
    {
      level: 'ASL-1 (基础级)',
      tag: '无重大自主风险',
      color: C.CYAN,
      version: 'Claude 1.0 / 2.0',
      action: '标准红队测试、内容过滤规则、敏感词拦截'
    },
    {
      level: 'ASL-2 (中危级)',
      tag: '初步生化 CBRN 风险',
      color: C.GOLD,
      version: 'Claude 3.0 / 3.5',
      action: '强化 Constitutional AI 训练、生物安全白名单机制'
    },
    {
      level: 'ASL-3 (高危级 · 当前前沿)',
      tag: '自主网络黑客 / 危险跨代',
      color: C.GREEN,
      version: 'Claude 4.5 / 5.5',
      action: '物理级沙箱完全隔离、多重硬件签名授权、无互联网直连、强制物理熔断'
    },
    {
      level: 'ASL-4 (灾难级 · 未定级)',
      tag: '超人类级不可控自主性',
      color: C.RED,
      version: '未来前沿封存',
      action: '全面停止商业发布、权重物理销毁或军方极密托管'
    }
  ];

  aslLevels.forEach((al, idx) => {
    const yA = 1.45 + idx * 1.35;
    addCard(slide, 0.8, yA, 11.73, 1.25);

    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yA + 0.15, w: 3.2, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: al.color, width: 1.2 }
    });
    slide.addText(al.level, {
      x: 1.1, y: yA + 0.15, w: 3.2, h: 0.28,
      fontSize: 9, fontFace: 'Arial', color: al.color, bold: true, align: 'center'
    });

    slide.addText(al.tag, {
      x: 4.5, y: yA + 0.15, w: 4.0, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    slide.addText(al.version, {
      x: 9.2, y: yA + 0.15, w: 3.0, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: al.color, bold: true, align: 'right'
    });

    slide.addText(al.action, {
      x: 1.1, y: yA + 0.55, w: 11.1, h: 0.55,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】RSP（Responsible Scaling Policy）是 Anthropic 最著名的安全制度发明。它将安全防线从模糊的道德呼吁变成了硬性的工程标准。进入 ASL-3 级别后，模型具备了强大的自主网络黑客能力，必须由多重硬件密钥授权才能运行，这赋予了企业最顶级的合规信赖。');
}

// ==========================================
// SLIDE 36: 3.6.2 双轨制防御：Fable 与 Mythos 及 SAE 白盒可解释性
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.6.2 双轨制防御：Fable 与 Mythos 及 SAE 白盒可解释性', 'Part 3 · Interpretability & Dual Track', 36);

  // Left Card: Dual-Track Product Strategy
  addCard(slide, 0.8, 1.45, 5.7, 5.35);
  slide.addText('双轨制部署矩阵：商业合规 vs 红队极限', {
    x: 1.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  addCard(slide, 1.1, 2.15, 5.1, 2.1, C.INNER_CARD, C.GREEN);
  slide.addText('FABLE · 全合规商业旗舰版', {
    x: 1.25, y: 2.25, w: 4.8, h: 0.28,
    fontSize: 11.5, fontFace: 'Arial', color: C.GREEN, bold: true
  });
  slide.addText('· 面向对象：全球 500 强企业、金融机构、政府与医疗\n· 安全策略：内置宪法 AI 防护栏，零高危漏洞，完整审计留痕\n· 运行环境：受限隔离沙箱，所有敏感写操作需人工多签授权\n· 商业定位：高确定性、零安全隐患的硅基企业生产力基座', {
    x: 1.25, y: 2.58, w: 4.8, h: 1.55,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
  });

  addCard(slide, 1.1, 4.45, 5.1, 2.15, C.INNER_CARD, C.RED);
  slide.addText('MYTHOS · 极限前沿红队探索版', {
    x: 1.25, y: 4.55, w: 4.8, h: 0.28,
    fontSize: 11.5, fontFace: 'Arial', color: C.RED, bold: true
  });
  slide.addText('· 面向对象：内部顶级安全科学家、五角大楼网络红军\n· 安全策略：解除部分对齐限制，探索模型自主攻击与推演极限\n· 运行环境：完全物理空气隔离 (Air-gapped) 的安全地堡数据中心\n· 战略定位：提前探测危险边界，为下一代 RSP 制定防御标准', {
    x: 1.25, y: 4.88, w: 4.8, h: 1.55,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
  });

  // Right Card: SAE Mechanistic Interpretability Flow Diagram
  addCard(slide, 6.8, 1.45, 5.7, 5.35);
  slide.addText('稀疏自编码器 (SAE)：白盒神经透视系统', {
    x: 7.1, y: 1.7, w: 5.1, h: 0.35,
    fontSize: 14.5, fontFace: 'Arial', color: C.GOLD, bold: true
  });

  const saeSteps = [
    { title: '01. 提取数千万离散人类概念', desc: '成功解码出“金门大桥神经元”、欺诈意图与零日漏洞生成特征。' },
    { title: '02. 神经元物理钳夹 (Feature Clamping)', desc: '检测到破坏性意图时，直接在神经元层面将其激活值强制置零。' },
    { title: '03. 企业级白盒安全审计报告', desc: '为银行与国防部提供每一步推理的精确激活可视化，消除黑盒怀疑。' }
  ];

  saeSteps.forEach((ss, idx) => {
    const yS = 2.25 + idx * 1.5;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: yS, w: 5.1, h: 1.35,
      fill: { color: C.INNER_CARD },
      line: { color: C.GOLD, width: 1.2 }
    });
    slide.addText(ss.title, {
      x: 7.25, y: yS + 0.15, w: 4.8, h: 0.28,
      fontSize: 11, fontFace: 'Arial', color: C.GOLD, bold: true
    });
    slide.addText(ss.desc, {
      x: 7.25, y: yS + 0.48, w: 4.8, h: 0.72,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演讲提示】本页展现了 Anthropic 独步天下的两张王牌：一是 Fable 与 Mythos 的商业/红队双轨制，隔离高危探索与商业生产；二是 SAE（稀疏自编码器）技术，人类第一次看清了模型内部的神经元概念，实现了从行为黑盒猜测到白盒神经透视的伟大飞跃。');
}

// ==========================================
// SLIDE 37: 3.7 Software 3.0：Karpathy 范式跃迁与自然语言直接编排
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.7 Software 3.0：Karpathy 范式跃迁与自然语言编排', 'Part 3 · Software 3.0', 37);

  // 3 Horizontal Paradigm Comparison Cards
  const paradigms = [
    {
      gen: 'SOFTWARE 1.0',
      title: '人类显式编写代码',
      tag: 'C++ / JAVA / PYTHON',
      color: C.CYAN,
      desc: '程序员一行行手写确定性指令。逻辑可解释但极度死板脆弱，面对复杂物理世界无法泛化。'
    },
    {
      gen: 'SOFTWARE 2.0',
      title: '神经网络权重优化',
      tag: 'GRADIENT DESCENT / TENSORS',
      color: C.GOLD,
      desc: 'Karpathy 在 2017 年提出。人类不再手写代码，而是设计模型利用梯度下降让数据优化权重。'
    },
    {
      gen: 'SOFTWARE 3.0',
      title: '自然语言编排认知 Agent',
      tag: 'NATURAL LANGUAGE AS IR',
      color: C.GREEN,
      desc: '自然语言成为全新顶层语法。人类直接以意图编排具备反思、终端执行与自愈能力的认知智能体。'
    }
  ];

  paradigms.forEach((p, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 1.45, 3.75, 3.4);

    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.32,
      fill: { color: C.INNER_CARD },
      line: { color: p.color, width: 1 }
    });
    slide.addText(p.gen, {
      x: x + 0.25, y: 1.7, w: 3.25, h: 0.32,
      fontSize: 10, fontFace: 'Arial', color: p.color, bold: true, align: 'center', charSpacing: 1.5
    });

    slide.addText(p.title, {
      x: x + 0.25, y: 2.15, w: 3.25, h: 0.45,
      fontSize: 15, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(p.tag, {
      x: x + 0.25, y: 2.58, w: 3.25, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED
    });

    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 2.9, w: 3.25, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    slide.addText(p.desc, {
      x: x + 0.25, y: 3.05, w: 3.25, h: 1.6,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  // Bottom Banner: The Terminal Feedback Solution
  addCard(slide, 0.8, 5.0, 11.73, 1.8);
  slide.addText('终端自愈闭环：彻底解答 Software 3.0 的“确定性软肋”', {
    x: 1.1, y: 5.15, w: 11.13, h: 0.35,
    fontSize: 13.5, fontFace: 'Arial', color: C.CYAN, bold: true
  });
  slide.addText('语言虽然是概率模糊的意图，但代码和终端执行是 100% 确定性的！\n\n通过把自然语言编译为可执行脚本，并在真实操作系统沙箱中反复跑测试、捕获退出码、自适应纠错，Software 3.0 第一次在拥有超级创造力泛化的同时，完全兼顾了工程严谨性！', {
    x: 1.1, y: 5.5, w: 11.13, h: 1.15,
    fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
  });

  slide.addNotes('【演讲提示】Software 3.0 是科技哲学界最重磅的范式跃迁理论。Andrej Karpathy 提出了从 1.0 到 3.0 的三代进化。Anthropic 的最伟大贡献，就是通过“终端自愈闭环”，彻底攻克了自然语言模糊不可靠的软肋，使自然语言编排真正成为工业级软件的生产力工具。');
}

// ==========================================
// SLIDE 38: 3.7.2 行业预言图谱：黄仁勋、纳德拉、Amodei 与 LeCun 的思潮激辩
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '3.7.2 行业预言图谱：黄仁勋、纳德拉、Amodei 思潮激辩', 'Part 3 · Visionaries Debate', 38);

  // 4 Quadrants Matrix Layout
  const debate = [
    {
      leader: '黄仁勋 JENSEN HUANG',
      org: 'Nvidia 创始人兼 CEO',
      color: C.GREEN,
      x: 0.8, y: 1.45,
      quote: '“人类的语言就是最高级的计算机语言，未来不再需要学编程。”',
      stance: '【算力视角】预言编程门槛彻底消除，推动全球算力消耗呈指数级膨胀。'
    },
    {
      leader: '萨提亚·纳德拉 SATYA NADELLA',
      org: '微软董事长兼 CEO',
      color: C.CYAN,
      x: 6.8, y: 1.45,
      quote: '“所有商业软件不再是静态菜单与表单，而是一组协同的智能体。”',
      stance: '【平台视角】全力押注系统级 Agent，但在存量 SaaS 席位保护上略显犹豫。'
    },
    {
      leader: '达里奥·阿莫代 DARIO AMODEI',
      org: 'Anthropic 联合创始人兼 CEO',
      color: C.GOLD,
      x: 0.8, y: 4.25,
      quote: '“代码是智能操作现实的跳板。强大 AI 将把半个世纪科学浓缩于数年。”',
      stance: '【底层哲学】立足实验科学，将编码模型升华为科学加速器与 RSI 物理内核。'
    },
    {
      leader: '杨立昆 YANN LECUN',
      org: 'Meta 首席 AI 科学家',
      color: C.PURPLE,
      x: 6.8, y: 4.25,
      quote: '“纯自回归自注意力缺乏常识与物理接地，不可能实现真正的 AGI。”',
      stance: '【反方警示】敲响自回归缺陷警钟；但终端物理反馈闭环正在修补这一软肋。'
    }
  ];

  debate.forEach((d) => {
    addCard(slide, d.x, d.y, 5.7, 2.55);

    slide.addShape(pres.ShapeType.rect, {
      x: d.x + 0.25, y: d.y + 0.2, w: 2.8, h: 0.28,
      fill: { color: C.INNER_CARD },
      line: { color: d.color, width: 1 }
    });
    slide.addText(d.leader, {
      x: d.x + 0.25, y: d.y + 0.2, w: 2.8, h: 0.28,
      fontSize: 9, fontFace: 'Arial', color: d.color, bold: true, align: 'center'
    });

    slide.addText(d.org, {
      x: d.x + 3.2, y: d.y + 0.2, w: 2.25, h: 0.28,
      fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right'
    });

    slide.addText(d.quote, {
      x: d.x + 0.25, y: d.y + 0.58, w: 5.2, h: 0.95,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 15
    });

    slide.addShape(pres.ShapeType.line, {
      x: d.x + 0.25, y: d.y + 1.6, w: 5.2, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    slide.addText(d.stance, {
      x: d.x + 0.25, y: d.y + 1.7, w: 5.2, h: 0.72,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演讲提示】第三篇收束页。通过科技领袖的思潮激辩，我们看到了行业的共识与分歧：黄仁勋看到了算力繁荣，纳德拉看到了软件重构，阿莫代看到了科学革命，而杨立昆敲响了警钟。但正是终端自愈闭环，把原本漂浮在语言中的模型牢牢锚定在确定性的代码世界中。');
}


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


// ==========================================
// SLIDE 43: 附录 A：Claude 全代际评测进化与里程碑基准全景表
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '附录 A：Claude 全代际评测进化与里程碑基准全景表', 'Appendix A · Model Evolution', 43);

  const fullEvolutionRows = [
    [
      { text: '模型代际版本', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '发布时点', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '上下文窗口', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'SWE-bench Verified', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'SWE-bench Pro', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Terminal-Bench', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '里程碑技术突破与架构演进', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: 'Claude 1.0', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2023 Q1', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '9k tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '12.4%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'N/A', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'N/A', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'Constitutional AI 宪法级对齐，奠定零有害输出安全基调', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 2.0', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2023 Q3', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '100k tokens', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '18.2%', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'N/A', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '14.5%', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '行业首创 100k 长上下文，开始具备单仓库阅读与文档分析能力', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 3.0 Opus', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2024 Q1', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '200k tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '38.4%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '22.1%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '28.5%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '首款全面超越 GPT-4 的全能大模型，复杂推理展现惊人常识', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 3.5 Sonnet', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2024 Q2', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '200k tokens', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9 } },
      { text: '49.2%', options: { fill: C.CARD_BG, color: C.CYAN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '35.6%', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9 } },
      { text: '36.8%', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9 } },
      { text: '编码王座确立，引发全球程序员“大迁徙”，确立极致性价比心智', options: { fill: C.CARD_BG, color: C.CYAN, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 3.7 Sonnet', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2025 Q1', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '200k tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '70.3%', options: { fill: C.INNER_CARD, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '54.2%', options: { fill: C.INNER_CARD, color: C.GOLD, align: 'center', fontSize: 9 } },
      { text: '46.8%', options: { fill: C.INNER_CARD, color: C.GOLD, align: 'center', fontSize: 9 } },
      { text: '混合动态推理架构（Hybrid Reasoning），根据问题复杂度动态自适应深思', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 4.5 Sonnet', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2025 Q3', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '500k tokens', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '84.6%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '78.4%', options: { fill: C.CARD_BG, color: C.GREEN, align: 'center', fontSize: 9 } },
      { text: '62.1%', options: { fill: C.CARD_BG, color: C.GREEN, align: 'center', fontSize: 9 } },
      { text: '推出全托管长程 Agentic Harness，多文件跨依赖重构进入全自动时代', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 5.0 Sonnet', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2026 Q2', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '1M tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '90.2%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '88.5%', options: { fill: C.INNER_CARD, color: C.GREEN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '68.2%', options: { fill: C.INNER_CARD, color: C.GREEN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '跨语言自主编译测试闭环，全面接管企业内部 26% 真实工程研发任务', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 5.5 Sonnet', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '2026 Q4', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9 } },
      { text: '1M tokens', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9 } },
      { text: '94.5%', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9.5 } },
      { text: '91.2%', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 10 } },
      { text: '70.6%', options: { fill: '2A374A', color: C.GOLD, bold: true, align: 'center', fontSize: 10 } },
      { text: '登顶全球双料王座；ASL-3 安全下实现真正 RSI 递归演化；推动 $2T IPO', options: { fill: '2A374A', color: C.WHITE, align: 'left', fontSize: 9 } }
    ]
  ];

  slide.addTable(fullEvolutionRows, {
    x: 0.8, y: 1.45, w: 11.73,
    colW: [1.8, 1.0, 1.2, 1.5, 1.4, 1.4, 3.43],
    border: { type: 'solid', pt: 1, color: C.CARD_BORDER }
  });

  slide.addNotes('【演讲提示】附录 A 提供了 Anthropic 历史上全部 8 代核心模型的演进大表。从 Claude 1.0 的 12.4% 到 5.5 的 91.2%，数据清晰展示了一条不可阻挡的技术指数级跃迁曲线。');
}

// ==========================================
// SLIDE 44: 附录 B：全球前沿编码 Agent 竞品全景对照表
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '附录 B：全球前沿编码 Agent 竞品全景对照表', 'Appendix B · Competitors Matrix', 44);

  const compRows = [
    [
      { text: '生态阵营 / 代表标的', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '旗舰模型 / 终端产品', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'SWE-Pro', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Terminal-4', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '单步稳定性', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '核心护城河与竞争优劣势综合诊断', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: 'Anthropic\n(领跑者)', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 5.5 Sonnet\nClaude Code CLI', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9 } },
      { text: '91.2%', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 10 } },
      { text: '70.6%', options: { fill: '2A374A', color: C.GOLD, bold: true, align: 'center', fontSize: 10 } },
      { text: '99.5%', options: { fill: '2A374A', color: C.GREEN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】开发者黏性第一、终端长程自愈无对手、AWS/GCP 中立阵营。\n【潜在风险】算力依赖云厂商、估值倍数需超高增速消化。', options: { fill: '2A374A', color: C.WHITE, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: 'OpenAI\n(双雄竞争)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'o3-mini / o3-full\nCodex Agent', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '86.4%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '63.8%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '98.8%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】ChatGPT 消费级流量入口庞大、微软企业捆绑分销。\n【潜在风险】管理层动荡、开发者心智流失、长程多步容易死锁。', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: 'Google\n(生态挑战)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'Gemini 3.0 Pro\nGoogle Workspace', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '68.2%', options: { fill: C.CARD_BG, color: C.RED, align: 'center', fontSize: 9.5 } },
      { text: '44.5%', options: { fill: C.CARD_BG, color: C.RED, align: 'center', fontSize: 9.5 } },
      { text: '96.2%', options: { fill: C.CARD_BG, color: C.RED, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】多模态原生能力、2M 超长上下文、全栈自研 TPU 算力底座。\n【致命劣势】格式违规率高达 14%、补丁懒惰、安全严重误报拒答。', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: 'Meta\n(多模态协同)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'Meta Muse\nLlama 4 Code 405B', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '72.0%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '51.2%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '97.5%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】开源生态号召力、多模态创意流水线与 3D 渲染编排。\n【潜在劣势】企业级合规支持不足、缺乏开箱即用的工业终端 Harness。', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: '开源阵营\n(DeepSeek/Qwen)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'DeepSeek-V3 / Qwen 3\nAider / Continue', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '74.8%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '54.0%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '97.8%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】极致推理成本（前沿 1/5 售价）、企业私有化部署无安全担忧。\n【关键瓶颈】百步以上超级长程自愈落后 6–9 个月、缺乏官方云调度服务。', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ]
  ];

  slide.addTable(compRows, {
    x: 0.8, y: 1.45, w: 11.73,
    colW: [1.8, 1.8, 1.1, 1.2, 1.1, 4.73],
    border: { type: 'solid', pt: 1, color: C.CARD_BORDER }
  });

  slide.addNotes('【演讲提示】附录 B 对比了全球五大阵营。数据清楚说明：Anthropic 在关键的 SWE-Pro、Terminal-Bench 和单步稳定性指标上全面领先，形成了深厚的技术代差。');
}

// ==========================================
// SLIDE 45: 尾页 / 研报免责声明与研究团队署名
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };

  // Closing Card
  addCard(slide, 1.2, 1.3, 10.9, 4.9);

  slide.addShape(pres.ShapeType.rect, {
    x: 1.8, y: 1.7, w: 3.8, h: 0.35,
    fill: { color: C.INNER_CARD },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('RESEARCH COMPLETED | OCTOBER 2026', {
    x: 1.8, y: 1.7, w: 3.8, h: 0.35,
    fontSize: 9.5, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', charSpacing: 1.5
  });

  slide.addText('迈向通用智能与硅基生产力的新纪元', {
    x: 1.8, y: 2.2, w: 9.7, h: 0.65,
    fontSize: 30, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
  });

  slide.addText('感谢全球投资机构与技术领导者的信任与同行。本研报基于公开数据、S-1 预披露信息、供应链调研与数学模型推演完成。', {
    x: 1.8, y: 2.95, w: 9.7, h: 0.5,
    fontSize: 12.5, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  slide.addShape(pres.ShapeType.line, {
    x: 1.8, y: 3.65, w: 9.7, h: 0,
    line: { color: C.CARD_BORDER, width: 1 }
  });

  slide.addText('合规与免责声明 (LEGAL DISCLAIMER)：\n本报告由全球前沿科技战略研究院 (Global Tech Strategy Institute) 出具，仅供合格机构投资者学术交流与战略研讨使用，不构成任何证券买卖的要约或投资建议。报告中的前瞻性财务预测、ARR 估算与模型跑分包含重大假设与风险，实际 IPO 挂牌价格及经营业绩可能与本报告推演存在实质性差异。', {
    x: 1.8, y: 3.85, w: 9.7, h: 1.1,
    fontSize: 9, fontFace: 'Arial', color: C.TEXT_DIM, lineSpacing: 13
  });

  // Footer Signatures
  slide.addText('主笔机构：全球科技战略研究院 (GTSI)  |  联合出品：Pre-IPO 特别调研组  |  首席分析师：Dr. Harrison Vance & Team', {
    x: 1.8, y: 5.4, w: 9.7, h: 0.35,
    fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  slide.addNotes('【演讲提示】报告圆满结束。感谢各位投资人的聆听。未来已来，代码即是连接人类现实与通用智能的最终物理锚点。我们期待在 IPO 敲钟夜共同见证历史！');
}


// Save Presentation
const outputFile = 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI_Gemini.pptx';
pres.writeFile({ fileName: outputFile })
  .then(f => {
    console.log('Successfully written master deck:', outputFile);
  })
  .catch(err => {
    console.error('Error generating presentation:', err);
    process.exit(1);
  });
