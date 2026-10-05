const pptxgen = require('pptxgenjs');
const path = require('path');

// 1. Initialize Presentation
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33" x 7.5"
pres.author = 'Anthropic IPO Research Team';
pres.company = 'Global Tech Strategy Institute';
pres.title = 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI';

// Theme Colors (Hex WITHOUT #)
const C = {
  BG_DARK: '0B0F19',
  CARD_BG: '1E293B',
  CARD_BORDER: '334155',
  TEXT_MAIN: 'F8FAFC',
  TEXT_MUTED: '94A3B8',
  CYAN: '38BDF8',
  GOLD: 'F59E0B',
  GREEN: '10B981',
  RED: 'F43F5E',
  PURPLE: '818CF8',
  WHITE: 'FFFFFF'
};

// Helper: Add Standard Header
function addHeader(slide, title, category, slideNumber) {
  // Category badge
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.45, w: 9.0, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.CYAN, bold: true, charSpacing: 1.5
  });
  // Title
  slide.addText(title, {
    x: 0.8, y: 0.75, w: 10.5, h: 0.55,
    fontSize: 24, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  // Slide Number
  slide.addText(String(slideNumber).padStart(2, '0'), {
    x: 12.0, y: 0.45, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right', bold: true
  });
}

// Helper: Add Card Box
function addCard(slide, x, y, w, h, bgColor = C.CARD_BG, borderColor = C.CARD_BORDER) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: bgColor },
    line: { color: borderColor, width: 1 }
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
    x: 0.8, y: 1.2, w: 3.8, h: 0.4,
    fill: { color: '1E293B' },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('PRE-IPO INSTITUTIONAL RESEARCH', {
    x: 0.8, y: 1.2, w: 3.8, h: 0.4,
    fontSize: 11, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', charSpacing: 2
  });

  // Main Title
  slide.addText('Anthropic 2 万亿 IPO 的背后：', {
    x: 0.8, y: 1.8, w: 11.5, h: 0.9,
    fontSize: 40, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText('编码模型与 AGI', {
    x: 0.8, y: 2.7, w: 11.5, h: 0.9,
    fontSize: 40, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });

  // Subtitle
  slide.addText('资本神话、产业重构与硅基劳动力拐点深度研究', {
    x: 0.8, y: 3.7, w: 11.0, h: 0.5,
    fontSize: 18, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  // 3 Metric Callout Cards
  const metrics = [
    { num: '$2.0 Trillion', label: '目标 IPO 估值', sub: '超中国 Top 10 互联网巨头市值总和 1.5 倍', color: C.GOLD },
    { num: '$100B+ ARR', label: '2026 年化跑道营收', sub: '16 个季度实现对 OpenAI 的营收反超', color: C.GREEN },
    { num: '70.6% / 91.2%', label: 'Terminal-4 / SWE-Pro', sub: '人类复杂系统与软件工程进入全自动化时代', color: C.CYAN }
  ];

  metrics.forEach((m, idx) => {
    const x = 0.8 + idx * 3.9;
    addCard(slide, x, 4.6, 3.6, 1.8);
    slide.addText(m.num, {
      x: x + 0.3, y: 4.8, w: 3.0, h: 0.6,
      fontSize: 26, fontFace: 'Arial', color: m.color, bold: true, margin: 0
    });
    slide.addText(m.label, {
      x: x + 0.3, y: 5.4, w: 3.0, h: 0.35,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(m.sub, {
      x: x + 0.3, y: 5.75, w: 3.0, h: 0.5,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Footer Metadata
  slide.addText('发布时间：2026 年 10 月  |  核心标的：Anthropic (Claude)  |  分析对象：资本市场、SaaS 生态与 AGI 演进', {
    x: 0.8, y: 6.8, w: 11.5, h: 0.3,
    fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED
  });
  slide.addNotes('本演示文稿面向顶级投资机构、科技产业分析师及技术决策层，系统拆解 Anthropic 2 万亿美元超级 IPO 的商业底层与技术真相。');
}

// ==========================================
// SLIDE 2: Executive Summary (三大核心命题)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '执行总览：支撑 2 万亿美元的三大核心支柱', 'Executive Summary', 2);

  const pillars = [
    {
      title: '第一篇：资本神话与 ARR 飞轮',
      tag: 'CAPITAL & REVENUE',
      color: C.GOLD,
      bullets: [
        '2 万亿美金估值相当于 3.8 个腾讯或 8.5 个阿里巴巴，居全球超级 IPO 榜首',
        'ARR 从 2023 底落后 OpenAI 16 倍，到 2026 年以 $100B+ ARR 完成规模反超',
        'Claude Code 催化单任务 Token 消耗百倍膨胀，AWS/Google 双云资本中立护城河'
      ]
    },
    {
      title: '第二篇：产业重构与范式迭代',
      tag: 'INDUSTRY RESTRUCTURING',
      color: C.CYAN,
      bullets: [
        'SaaSpocalypse 抹去传统软件 $1.2 万亿市值，Atlassian 暴跌 70%，席位制死锁',
        '架构大论战：MCP 陷入“Token 税”黄昏，CLI / Unix 管道在开发者端逆袭',
        '即时软件使软件制造边际成本归零；Prompt Caching 推升综合毛利率至 68.4%'
      ]
    },
    {
      title: '第三篇：代码即 AGI 与文明拐点',
      tag: 'CODE AS AGI & RSI',
      color: C.GREEN,
      bullets: [
        '3.1 评测革命：SWE-bench Pro (91.2%) 与 Terminal-Bench 4.0 (70.6%) 确立执行力',
        '通用 Agent 认知中枢：Instinct 与 Meta Muse 证明代码是通用任务的唯一 IR',
        'RSI 递归自举：Claude 深度参与下一代 Claude 研发；ASL-3 构筑生物级安全防线'
      ]
    }
  ];

  pillars.forEach((p, idx) => {
    const x = 0.8 + idx * 3.9;
    addCard(slide, x, 1.6, 3.6, 5.2);

    // Tag
    slide.addText(p.tag, {
      x: x + 0.3, y: 1.9, w: 3.0, h: 0.3,
      fontSize: 10, fontFace: 'Arial', color: p.color, bold: true, charSpacing: 1
    });
    // Pillar Title
    slide.addText(p.title, {
      x: x + 0.3, y: 2.2, w: 3.0, h: 0.6,
      fontSize: 17, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });

    // Separator line
    slide.addShape(pres.ShapeType.line, {
      x: x + 0.3, y: 2.9, w: 3.0, h: 0,
      line: { color: C.CARD_BORDER, width: 1 }
    });

    // Bullets
    const bulletItems = p.bullets.map((b, bIdx) => ({
      text: b,
      options: {
        bullet: true,
        fontSize: 12,
        fontFace: 'Arial',
        color: C.TEXT_MUTED,
        breakLine: bIdx < p.bullets.length - 1,
        paraSpaceAfter: 14
      }
    }));
    slide.addText(bulletItems, {
      x: x + 0.3, y: 3.1, w: 3.0, h: 3.4,
      margin: 0
    });
  });

  slide.addNotes('本页清晰呈现整份报告的三大篇章逻辑架构，展示从资本报表、产业颠覆到 AGI 哲学的完整商业推导链条。');
}

// ==========================================
// SLIDE 3: 第一篇 - 2 万亿美元估值全局透视
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '资本神话：2 万亿美元意味着什么？', 'Part 1 · Valuation Context', 3);

  // Left Card: Global Context
  addCard(slide, 0.8, 1.6, 5.6, 5.2);
  slide.addText('全球超级资本坐标系', {
    x: 1.1, y: 1.9, w: 5.0, h: 0.4,
    fontSize: 18, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });
  slide.addText('人类商业史上最大规模的超级科技 IPO', {
    x: 1.1, y: 2.3, w: 5.0, h: 0.3,
    fontSize: 12, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const globalPoints = [
    { title: '全球前七俱乐部', desc: '历史上仅苹果、微软、英伟达、谷歌、亚马逊、沙特阿美跨过 2 万亿门槛，Anthropic 一旦挂牌将直接位列全球前七。' },
    { title: '私市倍数飞跃', desc: '从 2024 年底的 $18.4B，到 2025 年中的 $180B，再到 2026 年 5 月 Series H 的 $965B，估值仅用 2 年跃升超 100 倍。' },
    { title: '承销团阵容', desc: '高盛、摩根大通、摩根士丹利联席主承销，计划于 11 月 9 日开启全球路演，在感恩节前敲钟上市。' }
  ];
  globalPoints.forEach((pt, idx) => {
    slide.addText(pt.title, {
      x: 1.1, y: 2.8 + idx * 1.25, w: 5.0, h: 0.3,
      fontSize: 14, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(pt.desc, {
      x: 1.1, y: 3.1 + idx * 1.25, w: 5.0, h: 0.7,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right Card: Comparison with China Top 10 Internet Companies
  addCard(slide, 6.8, 1.6, 5.7, 5.2);
  slide.addText('对比中国前十大互联网巨头市值', {
    x: 7.1, y: 1.9, w: 5.1, h: 0.4,
    fontSize: 18, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });
  slide.addText('覆盖中国 10 亿网民全部数字生活资产总和的 1.5 倍', {
    x: 7.1, y: 2.3, w: 5.1, h: 0.3,
    fontSize: 12, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  // Comparison Mini-Cards Grid
  const comps = [
    { name: '中国 Top 10 总和', val: '~$1.32 Trillion', ratio: '仅占 Anthropic 目标的 66%', color: C.GOLD },
    { name: '腾讯控股 (Tencent)', val: '~$5,300 亿', ratio: 'Anthropic 相当于 3.8 个腾讯', color: C.TEXT_MAIN },
    { name: '阿里巴巴 (Alibaba)', val: '~$2,350 亿', ratio: 'Anthropic 相当于 8.5 个阿里', color: C.TEXT_MAIN },
    { name: '拼多多 (PDD)', val: '~$1,500 亿', ratio: 'Anthropic 相当于 13.3 个拼多多', color: C.TEXT_MAIN }
  ];
  comps.forEach((c, idx) => {
    const cy = 2.8 + idx * 0.95;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: cy, w: 5.1, h: 0.85,
      fill: { color: '0F172A' },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(c.name, {
      x: 7.3, y: cy + 0.12, w: 2.5, h: 0.3,
      fontSize: 12, fontFace: 'Arial', color: C.TEXT_MUTED, bold: true, margin: 0
    });
    slide.addText(c.val, {
      x: 9.8, y: cy + 0.12, w: 2.2, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: c.color, bold: true, align: 'right', margin: 0
    });
    slide.addText(c.ratio, {
      x: 7.3, y: cy + 0.45, w: 4.7, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: C.CYAN, margin: 0
    });
  });

  slide.addNotes('通过与中国科技巨头总市值及全球科技先驱的硬核对比，具象化展示 $2T 的历史量级与冲击力。');
}

// ==========================================
// SLIDE 4: 第一篇 - ARR 世纪大逆转 (Anthropic vs OpenAI)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '营收逆转：16 季度反超 OpenAI 的世纪大追赶', 'Part 1 · ARR Trajectory', 4);

  // Native Clustered Bar/Column Chart
  const chartData = [
    {
      name: 'OpenAI ARR ($B)',
      labels: ['23Q4', '24Q2', '24Q4', '25Q2', '25Q4', '26Q1', '26Q3'],
      values: [1.6, 2.8, 4.0, 8.5, 13.0, 22.0, 70.0]
    },
    {
      name: 'Anthropic ARR ($B)',
      labels: ['23Q4', '24Q2', '24Q4', '25Q2', '25Q4', '26Q1', '26Q3'],
      values: [0.1, 0.4, 1.0, 4.2, 9.0, 22.0, 100.0]
    }
  ];

  slide.addChart(pres.ChartType.bar, chartData, {
    x: 0.8, y: 1.6, w: 7.5, h: 5.2,
    barDir: 'col',
    chartColors: [C.TEXT_MUTED, C.CYAN],
    showTitle: true,
    title: 'Anthropic vs OpenAI 季度 ARR 演进对比 (亿美元)',
    titleColor: C.TEXT_MAIN,
    titleFontSize: 13,
    titleFontFace: 'Arial',
    valAxisLabelColor: C.TEXT_MUTED,
    catAxisLabelColor: C.TEXT_MUTED,
    valGridLine: { color: C.CARD_BORDER, size: 0.5 },
    catGridLine: { style: 'none' },
    showLegend: true,
    legendPos: 't',
    legendColor: C.TEXT_MAIN,
    showValue: true,
    dataLabelColor: C.WHITE,
    dataLabelFontSize: 9
  });

  // Right Card: Strategic Insights on Revenue
  addCard(slide, 8.6, 1.6, 3.9, 5.2);
  slide.addText('财务与会计核心透视', {
    x: 8.9, y: 1.9, w: 3.3, h: 0.35,
    fontSize: 16, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });

  const arrInsights = [
    {
      title: '从 16:1 到全面反超',
      desc: '2023 底 OpenAI 营收是 Anthropic 的 16 倍；2026 年初两者持平于 $22B；2026 年 9 月 Anthropic 凭借 $100B+ ARR 完成规模反超。'
    },
    {
      title: '全额（Gross）vs 净额（Net）',
      desc: 'Anthropic 约 80% 业务来自 AWS Bedrock 和 GCP，确认全额合同总值；OpenAI 对微软分成计净额。统一口径后两家处于旗鼓相当的双寡头格局。'
    },
    {
      title: '$420 亿账面“亏损”真相',
      desc: '2025 年报亏损主要来自于早期可转债估值暴涨引发的非现金公允价值调整（Fair Value Adjustment），并非实际经营性失血。'
    }
  ];

  arrInsights.forEach((item, idx) => {
    slide.addText(item.title, {
      x: 8.9, y: 2.45 + idx * 1.35, w: 3.3, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(item.desc, {
      x: 8.9, y: 2.75 + idx * 1.35, w: 3.3, h: 0.85,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('通过柱状图呈现 ARR 追赶轨迹，右侧深入解释会计确认口径与可转债非现金流亏损的财务真相。');
}

// ==========================================
// SLIDE 5: 第一篇 - Claude Code 与双云军火库
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '引爆点与军火库：Claude Code 与双云中立联盟', 'Part 1 · The Growth Engine', 5);

  // Left: Claude Code Impact
  addCard(slide, 0.8, 1.6, 5.6, 5.2);
  slide.addText('Claude Code：Token 消耗的百倍核爆', {
    x: 1.1, y: 1.9, w: 5.0, h: 0.35,
    fontSize: 18, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });
  slide.addText('发布于 2025 年 2 月，彻底改写单位用户代币密度', {
    x: 1.1, y: 2.25, w: 5.0, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const codeFeatures = [
    { label: '百倍杠杆 (100x)', desc: '传统 Chat 每次问答消耗数千 Tokens；Claude Code 在终端多轮循环自愈排错，单任务累计消耗 50 万~200 万 Tokens。' },
    { label: '$2.5B 单品 ARR', desc: '发布仅一年，Claude Code 单一产品线直接拉动的年化收入突破 25 亿美元，占据 GitHub 新增 Commit 的 7% 以上。' },
    { label: '开发者绝对绑定', desc: '成为 Cursor、Windsurf、Aider 等顶尖开发者的默认底座，牢牢俘获全球最具技术决策权的高端研发群体。' }
  ];
  codeFeatures.forEach((cf, idx) => {
    slide.addText(cf.label, {
      x: 1.1, y: 2.75 + idx * 1.25, w: 5.0, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(cf.desc, {
      x: 1.1, y: 3.05 + idx * 1.25, w: 5.0, h: 0.75,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right: Dual Hyperscaler Alliance
  addCard(slide, 6.8, 1.6, 5.7, 5.2);
  slide.addText('Cap Table 战略护城河：AI 瑞士中立国', {
    x: 7.1, y: 1.9, w: 5.1, h: 0.35,
    fontSize: 18, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });
  slide.addText('打破单点绑定：AWS 与 Google 双巨头共同托底', {
    x: 7.1, y: 2.25, w: 5.1, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const cloudAlliances = [
    {
      partner: 'Amazon (AWS Bedrock)',
      capital: '累计注资超 $80 亿美元',
      role: 'AWS Tier-1 核心主打模型，打造 Project Rainier 万卡超算集群，深度适配 Trainium2 定制芯片。'
    },
    {
      partner: 'Google (Cloud Vertex AI)',
      capital: '累计注资超 $20 亿美元',
      role: '即使自研 Gemini，也必须在 GCP 全面提供 Claude 算力以防客户流失；提供海量 TPU v6 Trillium 算力支撑。'
    },
    {
      partner: '对决 OpenAI 单边依赖',
      capital: '跨云全渗透优势',
      role: 'OpenAI 深度受制于微软 Azure 单边协议；Anthropic 跨双云中立架构，垄断了全球财富 500 强的多云采购渠道。'
    }
  ];
  cloudAlliances.forEach((ca, idx) => {
    slide.addText(`${ca.partner} · ${ca.capital}`, {
      x: 7.1, y: 2.75 + idx * 1.25, w: 5.1, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(ca.role, {
      x: 7.1, y: 3.05 + idx * 1.25, w: 5.1, h: 0.75,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('深入解密 Claude Code 这一单品杀手锏对代币消耗的百倍放大效应，以及亚马逊和谷歌双巨头战略股东对 Anthropic 的护航格局。');
}

// ==========================================
// SLIDE 6: 第二篇 - SaaSpocalypse 资本大屠杀
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '资本大屠杀：SaaSpocalypse 与市值腰斩全景', 'Part 2 · The SaaSpocalypse', 6);

  // Context Header Banner
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.5, w: 11.7, h: 0.65,
    fill: { color: '1E293B' },
    line: { color: C.CARD_BORDER, width: 1 }
  });
  slide.addText('SaaS 行业中位数 EV/Sales 倍数从 18.5x 崩塌至 5.6x  |  全行业市值蒸发逾 1.2 万亿美元  |  席位制（Seat-based）物理死锁', {
    x: 1.0, y: 1.65, w: 11.3, h: 0.35,
    fontSize: 12, fontFace: 'Arial', color: C.GOLD, bold: true, align: 'center', margin: 0
  });

  // Table of Destroyed SaaS Companies
  const headers = ['巨头公司', '股票代码', '历史高点', '2026 低点', '最大回撤', 'EV/Sales 压缩', '市值蒸发量', '智能体侵蚀根因'];
  const rows = [
    ['Atlassian', 'TEAM', '$458', '$135', '-70.5%', '22.0x ──► 4.8x', '$830 亿美元', 'Jira 工单与 Confluence 被 Claude 终端 PR 审查全流程绕开'],
    ['ServiceNow', 'NOW', '$940', '$560', '-40.4%', '16.5x ──► 7.8x', '$790 亿美元', '传统 ITSM 流程被本地 Terminal-Bench 自愈 Agent 彻底替代'],
    ['Adobe', 'ADBE', '$638', '$410', '-35.7%', '12.0x ──► 6.2x', '$1,020 亿美元', 'Artifacts 前端代码直出与多模态生成剥夺设计工具垄断溢价'],
    ['Workday', 'WDAY', '$315', '$210', '-33.3%', '8.5x ──► 4.5x', '$280 亿美元', '企业员工编制因 AI 提效全面冻结，席位增长停滞 NDR 破 100%'],
    ['Salesforce', 'CRM', '$318', '$220', '-30.8%', '8.5x ──► 5.1x', '$950 亿美元', '客服与销售线索清洗被 Agent 替代，客户大面积砍掉云端坐席']
  ];

  const tableData = [
    headers.map(h => ({
      text: h,
      options: { fill: { color: '0F172A' }, color: C.CYAN, bold: true, fontSize: 10, align: 'center' }
    })),
    ...rows.map(r => r.map((cell, cIdx) => ({
      text: cell,
      options: {
        fill: { color: C.CARD_BG },
        color: cIdx === 4 ? C.RED : (cIdx === 6 ? C.GOLD : C.TEXT_MAIN),
        bold: cIdx === 0 || cIdx === 4 || cIdx === 6,
        fontSize: 9.5,
        align: cIdx >= 2 && cIdx <= 6 ? 'center' : 'left'
      }
    })))
  ];

  slide.addTable(tableData, {
    x: 0.8, y: 2.35, w: 11.7, h: 3.4,
    colW: [1.3, 0.9, 0.9, 0.9, 1.1, 1.5, 1.2, 3.9],
    border: { color: C.CARD_BORDER, width: 0.5 }
  });

  // Bottom Takeaway
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 5.95, w: 11.7, h: 0.85,
    fill: { color: '0F172A' },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('投研核心判断：传统软件蒸发出来的 4,000+ 亿美金市值并未离场，而是被全球二级市场重新集中定价，全量虹吸并注入给提供替代能力的底层基础设施提供商——Anthropic！', {
    x: 1.0, y: 6.1, w: 11.3, h: 0.55,
    fontSize: 12, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, align: 'center', margin: 0
  });

  slide.addNotes('通过权威量化表格呈现 Atlassian、ServiceNow、Adobe 等巨头的股价崩塌与倍数压缩，论证软件资产向 Agent 底座转移的本质。');
}

// ==========================================
// SLIDE 7: 第二篇 - 架构大论战：MCP 黄昏之辩与 CLI 逆袭
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '架构大论战：MCP 是否走向黄昏？CLI 为何在开发者端逆袭？', 'Part 2 · The Protocol Debate', 7);

  // Left Card: The Fall of MCP (Schema Bloat)
  addCard(slide, 0.8, 1.6, 5.6, 5.2);
  slide.addText('开发者为何反思 MCP 的“黄昏”？', {
    x: 1.1, y: 1.9, w: 5.0, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.RED, bold: true, margin: 0
  });

  const mcpFlaws = [
    {
      title: '高昂的“Schema 隐形 Token 税”',
      desc: '挂载 10 个 MCP Server 需要在会话初始全量注入数万 Token 的 JSON-RPC 元数据，还没开始干活就吃光了有限的工作记忆与上下文预算。'
    },
    {
      title: 'Unix 哲学对 JSON-RPC 的降维打击',
      desc: 'Linux 历经 50 年沉淀的 CLI 工具（gh, aws, psql, curl, jq）天然支持管道拼接。当模型精通 Shell，何必费劲写一个臃肿的专用 MCP Server？'
    },
    {
      title: 'Claude Code 亲儿子的“终端优先”',
      desc: 'Anthropic 自身的战略杀手级工具 Claude Code 从一开始就完全采用 Terminal-first，证明了命令行才是自主智能体的最优宿主。'
    }
  ];
  mcpFlaws.forEach((mf, idx) => {
    slide.addText(mf.title, {
      x: 1.1, y: 2.45 + idx * 1.35, w: 5.0, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(mf.desc, {
      x: 1.1, y: 2.75 + idx * 1.35, w: 5.0, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right Card: The Dual-Ring Equilibrium (CLI + MCP Gateway)
  addCard(slide, 6.8, 1.6, 5.7, 5.2);
  slide.addText('辩证终局：双环生态法则', {
    x: 7.1, y: 1.9, w: 5.1, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.GREEN, bold: true, margin: 0
  });

  const dualRing = [
    {
      title: '开发者内环 (Inner Loop) ── 归 CLI / Terminal',
      desc: '本地开发、单机脚本与敏捷探索彻底拥抱 Shell。零 Schema 预加载，执行耗时 200ms，Token 消耗不足 50 个，速度与灵活性登顶。'
    },
    {
      title: '企业治理外环 (Outer Loop) ── 归 MCP Gateway',
      desc: 'MCP 并未死亡，而是退守并升维为“企业安全防火墙”。跨国 500 强绝不可能向外部 Agent 开放直接 sudo 权限，必须通过 MCP 进行 OAuth 鉴权与审计留痕。'
    },
    {
      title: '两面合围的统治力',
      desc: 'Anthropic 一手用 Claude Code 统治了内环 CLI，一手用 MCP 标准卡位了外环企业安全网关，形成了软硬件两端的无缝闭环。'
    }
  ];
  dualRing.forEach((dr, idx) => {
    slide.addText(dr.title, {
      x: 7.1, y: 2.45 + idx * 1.35, w: 5.1, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
    });
    slide.addText(dr.desc, {
      x: 7.1, y: 2.75 + idx * 1.35, w: 5.1, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('深入剖析 2026 技术圈最具争议的 MCP 黄昏论与 CLI 逆袭，得出 Inner Loop 归 CLI、Outer Loop 归 MCP Gateway 的前沿架构共识。');
}

// ==========================================
// SLIDE 8: 第二篇 - 算力账本与毛利率跃升模型
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '算力账本：综合毛利率从 30% 跃升至 68.4% 的数学拆解', 'Part 2 · Unit Economics', 8);

  // Left Metric Callout
  addCard(slide, 0.8, 1.6, 3.6, 5.2);
  slide.addText('毛利率大逆转', {
    x: 1.1, y: 2.0, w: 3.0, h: 0.35,
    fontSize: 16, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });
  slide.addText('68.4%', {
    x: 1.1, y: 2.4, w: 3.0, h: 0.9,
    fontSize: 48, fontFace: 'Arial', color: C.GREEN, bold: true, margin: 0
  });
  slide.addText('打破“AI 大模型是低毛利算力倒卖商”的华尔街偏见，从 2024 初的 32% 成功修复至传统软件级高毛利水平。', {
    x: 1.1, y: 3.4, w: 3.0, h: 1.2,
    fontSize: 12, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 4.8, w: 3.0, h: 1.5,
    fill: { color: '0F172A' },
    line: { color: C.GOLD, width: 1 }
  });
  slide.addText('净留存率 (NDR) > 160%\n传统优质 SaaS 标杆仅 115%~120%，Token 飞轮使单客终身价值（LTV）呈现指数开口向上。', {
    x: 1.25, y: 4.95, w: 2.7, h: 1.2,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });

  // Right: 3 Core Pillars of Margin Expansion
  addCard(slide, 4.7, 1.6, 7.8, 5.2);
  slide.addText('三大工程杀手锏驱动毛利率跃迁', {
    x: 5.0, y: 1.9, w: 7.2, h: 0.35,
    fontSize: 18, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });

  const marginPillars = [
    {
      title: '1. Prompt Caching 暴利经济学（缓存读取毛利达 77.5%）',
      detail: '写入单价 $3.75/M，多轮交互读取降至 $0.20/M（主动让利 90%）。但显存 KV Cache 命中后无需矩阵乘法，纯电力与折旧成本不足 $0.045/M，单项毛利率倒挂高达 77.5%！'
    },
    {
      title: '2. 摆脱英伟达税 —— AWS Trainium2 与 Google TPU v6 双 ASIC 对冲',
      detail: 'OpenAI 承担了英伟达 70%+ 的硬件毛利溢价；Anthropic 在 AWS（Project Rainier）和 GCP 全量部署定制 ASIC 芯片，单 Token 硬件折旧与电费直降 48%。'
    },
    {
      title: '3. Sonnet 5.5 极高吞吐带来的资产周转率（TPS > 120）',
      detail: '高生成速度使得单张算力卡在 24 小时内能消化 3 倍的企业并发，不仅避免了昂贵的脑内过度规划，更将服务器集群固定折旧极大摊薄。'
    }
  ];

  marginPillars.forEach((mp, idx) => {
    const my = 2.45 + idx * 1.35;
    slide.addShape(pres.ShapeType.rect, {
      x: 5.0, y: my, w: 7.2, h: 1.15,
      fill: { color: '0F172A' },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(mp.title, {
      x: 5.2, y: my + 0.12, w: 6.8, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(mp.detail, {
      x: 5.2, y: my + 0.45, w: 6.8, h: 0.6,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('通过严密的算力数学账本，拆解 Prompt Caching、定制 ASIC 芯片与吞吐效率如何支撑起 68.4% 的高毛利率。');
}

// ==========================================
// SLIDE 9: 第三篇 - 3.1 评测革命与终端自愈
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '3.1 评测革命：从 SWE-bench Pro 到 Terminal-Bench 4.0', 'Part 3 · The Benchmark Leap', 9);

  // Left Card: The Shift to SWE-bench Pro & TB 4.0
  addCard(slide, 0.8, 1.6, 5.6, 5.2);
  slide.addText('为什么传统评测全面失效？', {
    x: 1.1, y: 1.9, w: 5.0, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });

  const benchmarkShifts = [
    {
      title: 'SWE-bench Verified 的饱和 (98%)',
      desc: '原先 500 道单文件 Bug 题被 Claude 5.x 刷至 98%，已无法衡量工业级大型 Monorepo 跨文件重构能力。'
    },
    {
      title: 'SWE-bench Pro (91.2%)：双边门禁判定',
      desc: 'Scale AI 推出 642 道大型任务，严苛锁定离线零污染协议；注入参考补丁必通过、空白补丁必失败，杜绝侥幸。'
    },
    {
      title: 'Terminal-Bench 4.0 (70.6%)：真实终端执行',
      desc: 'Stanford / Harbor 维护，在真实 Docker 沙箱中进行编译、运维、调试与安全渗透，考核系统级完整自愈闭环。'
    }
  ];
  benchmarkShifts.forEach((bs, idx) => {
    slide.addText(bs.title, {
      x: 1.1, y: 2.45 + idx * 1.35, w: 5.0, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(bs.desc, {
      x: 1.1, y: 2.75 + idx * 1.35, w: 5.0, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right Card: Sonnet vs Opus & Gemini Failure Modes
  addCard(slide, 6.8, 1.6, 5.7, 5.2);
  slide.addText('工程自愈真相与反面教材', {
    x: 7.1, y: 1.9, w: 5.1, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });

  const benchmarkTruths = [
    {
      title: 'Sonnet 5.5 (70.6%) 逆袭 Opus 5.5 (66.4%)',
      desc: '在 Linux 终端沙箱中，真实报错（stderr/pytest）是极低成本的真理依据。“快速探测循环（Fast Loop）”远胜于重型模型的脑内慢思考过度规划。'
    },
    {
      title: 'Google Gemini 3.0 Pro 的工程溃败',
      desc: 'Terminal-Bench 仅 38%~46%，频繁出现 MALFORMED_FUNCTION_CALL、补丁格式错位与过敏安全拒答，被 Cursor/Aider 开发者事实性抛弃。'
    },
    {
      title: '代码工程跨过全自动化临界点',
      desc: '真实用例证明模型已能在 15 分钟内自主修复 Celery 异步泄漏、搭建 Nginx mTLS 代理与排查 PyTorch 分布式死锁。'
    }
  ];
  benchmarkTruths.forEach((bt, idx) => {
    slide.addText(bt.title, {
      x: 7.1, y: 2.45 + idx * 1.35, w: 5.1, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(bt.desc, {
      x: 7.1, y: 2.75 + idx * 1.35, w: 5.1, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('系统解析 SWE-bench Pro 与 Terminal-Bench 4.0 的评测革命，阐明 Sonnet 快速循环胜过脑内慢思考的底层工程逻辑。');
}

// ==========================================
// SLIDE 10: 第三篇 - 3.2 认知操作系统与通用智能
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '3.2 认知操作系统：为什么通用 Agent 必须以代码为核心？', 'Part 3 · Code as Universal IR', 10);

  // Core Thesis Card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.5, w: 11.7, h: 0.7,
    fill: { color: '1E293B' },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('核心认知突破：代码不是程序员写业务的垂直工具，而是所有通用智能体进行确定性推理、状态管理与工具调度的“思维中间表示（IR）”。', {
    x: 1.0, y: 1.65, w: 11.3, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, align: 'center', margin: 0
  });

  // Two Real-world Case Studies
  // Left: Instinct
  addCard(slide, 0.8, 2.4, 5.6, 4.4);
  slide.addText('Instinct 个人自主管家', {
    x: 1.1, y: 2.7, w: 5.0, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });
  slide.addText('以代码驱动日常订票、税务申报与跨应用报销', {
    x: 1.1, y: 3.05, w: 5.0, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const instinctSteps = [
    '用户指令：“核对过去一年 Uber 和 Lyft 账单并导出报销表”',
    '模型内部并不进行低效的自然语言多轮问答，而是现场编写无头异步 Python 脚本',
    '调用 Playwright 模拟登录抓取收据 PDF，利用本地 OCR 抽取金额',
    '构建 SQLite 内存表执行 SQL JOIN 计算浮点差额并生成报表',
    '底层代码能力的缺失，会导致哪怕一个 CSS 变动或浮点截断都直接让任务崩溃'
  ];
  instinctSteps.forEach((st, idx) => {
    slide.addText(`•  ${st}`, {
      x: 1.1, y: 3.45 + idx * 0.6, w: 5.0, h: 0.55,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, margin: 0
    });
  });

  // Right: Meta Muse
  addCard(slide, 6.8, 2.4, 5.7, 4.4);
  slide.addText('Meta Muse (Muse Spark / Code)', {
    x: 7.1, y: 2.7, w: 5.1, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });
  slide.addText('虚拟机沙箱中的模型-宿主协同设计 (Harness-Model Co-Design)', {
    x: 7.1, y: 3.05, w: 5.1, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const museSteps = [
    'Meta 2026 年推出的个人通用 Agent，底层直接基于 Muse Spark 编码基座',
    '为每个用户建立专属的受限云端虚拟机（Private VM）与 Sentinel 安全网关',
    '同一模型既充当日常管家协调日历与购物，又在终端执行复杂的代码重构',
    '印证了 Meta 的设计哲学：通用生活管理与编程工程，底层共享完全相同的沙箱执行逻辑',
    '多模态听得懂、看得见无法弥补“执行力赤字”，代码是通向行动的唯一铁律'
  ];
  museSteps.forEach((st, idx) => {
    slide.addText(`•  ${st}`, {
      x: 7.1, y: 3.45 + idx * 0.6, w: 5.1, h: 0.55,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, margin: 0
    });
  });

  slide.addNotes('通过 Instinct 与 Meta Muse 两大现实通用智能体案例，严密论证代码能力是通用 AGI 行动中枢的哲学本质。');
}

// ==========================================
// SLIDE 11: 第三篇 - 3.3 终极自举（Claude 训练 Claude 的 RSI 闭环）
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '3.3 终极自举：Claude 如何训练下一代 Claude？（RSI 递归闭环）', 'Part 3 · Recursive Self-Improvement', 11);

  // Left: Official Development Stats
  addCard(slide, 0.8, 1.6, 3.6, 5.2);
  slide.addText('内部研发数据披露', {
    x: 1.1, y: 1.9, w: 3.0, h: 0.35,
    fontSize: 16, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });

  const stats = [
    { num: '26%', label: '内部模型 R&D 任务自主主导率' },
    { num: '90%+', label: '研发流程包含 Claude 协同参与' },
    { num: '8x', label: '研究员人均代码交付产出倍增' }
  ];
  stats.forEach((st, idx) => {
    slide.addText(st.num, {
      x: 1.1, y: 2.4 + idx * 1.35, w: 3.0, h: 0.65,
      fontSize: 36, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
    });
    slide.addText(st.label, {
      x: 1.1, y: 3.05 + idx * 1.35, w: 3.0, h: 0.45,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right: 4 Industrial RSI Pipelines
  addCard(slide, 4.7, 1.6, 7.8, 5.2);
  slide.addText('四大工业级自举流水线（The RSI Machine）', {
    x: 5.0, y: 1.9, w: 7.2, h: 0.35,
    fontSize: 18, fontFace: 'Arial', color: C.GREEN, bold: true, margin: 0
  });

  const rsiPipelines = [
    {
      num: '01',
      title: '分布式超算集群与 Triton/CUDA 算子守护',
      desc: '在 AWS Trainium2 与 Google TPU 集群中，智能体自动用 py-spy/gdb 捕获通信死锁，编写高性能定制 Triton 算子，压榨显存带宽利用率（MFU）。'
    },
    {
      num: '02',
      title: '高保真合成思考链与 RLAIF 宪法监督',
      desc: '在沙箱中通过自我提问、自我解题、单元测试验证，产出数以亿计的高质量包含反思轨迹的合成数据（Thinking Traces），高阶 Claude 直接作为评委打分。'
    },
    {
      num: '03',
      title: '自动化红蓝对抗与潜伏期后门检测 (Sleeper Agents)',
      desc: '特化红队 Claude 对候选检查点发起数百万次极端越狱渗透，专门挖掘模型在生产触发词下的暗中背叛行为，出厂前强制对齐。'
    },
    {
      num: '04',
      title: '自进化模拟沙箱与强化学习环境构建',
      desc: '自动编写高度拟真的系统漏洞沙箱与复杂金融网关，让新生模型在自己构建的环境中进行自我对弈强化学习。'
    }
  ];

  rsiPipelines.forEach((rp, idx) => {
    const ry = 2.4 + idx * 1.05;
    slide.addText(rp.num, {
      x: 5.0, y: ry, w: 0.6, h: 0.4,
      fontSize: 18, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
    });
    slide.addText(rp.title, {
      x: 5.6, y: ry, w: 6.6, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(rp.desc, {
      x: 5.6, y: ry + 0.3, w: 6.6, h: 0.65,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('展示 Anthropic 内部如何使用 Claude 参与下一代模型训练的四大流水线，证明递归自我演化（RSI）已从理论走向工业现实。');
}

// ==========================================
// SLIDE 12: 第三篇 - 3.4 安全防线与商业双轨制
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '3.4 安全防线：负责任扩展政策（RSP）与双轨商业体系', 'Part 3 · The Safety Moat', 12);

  // Left Card: RSP & ASL-3
  addCard(slide, 0.8, 1.6, 5.6, 5.2);
  slide.addText('RSP 机制与 ASL-3 跨越', {
    x: 1.1, y: 1.9, w: 5.0, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });
  slide.addText('对标美国 CDC 生物安全等级的硬性安全承诺', {
    x: 1.1, y: 2.25, w: 5.0, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const rspLevels = [
    { lvl: 'ASL-1 / ASL-2', desc: '无或轻量自主风险，采用常规云端防护与基础输出审查（Claude 1.0 ~ 3.5）。' },
    { lvl: 'ASL-3 (现行 5.x 世代触发)', desc: '当终端自主漏洞挖掘与生化辅助突破门槛时，强制启动物理硬件级隔离（Air-Gapped）、多方签名密钥与硬性停训熔断承诺。' },
    { lvl: '白盒可解释性 (SAE)', desc: '利用稀疏自编码器提取百万级单语义特征神经元，出厂前为大模型做“脑部医学级 MRI”，在权重层面杜绝欺骗性对齐。' }
  ];
  rspLevels.forEach((rl, idx) => {
    slide.addText(rl.lvl, {
      x: 1.1, y: 2.75 + idx * 1.3, w: 5.0, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(rl.desc, {
      x: 1.1, y: 3.05 + idx * 1.3, w: 5.0, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right Card: Dual-Track System (Fable vs Mythos)
  addCard(slide, 6.8, 1.6, 5.7, 5.2);
  slide.addText('商业双轨制：Fable vs Mythos', {
    x: 7.1, y: 1.9, w: 5.1, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.CYAN, bold: true, margin: 0
  });
  slide.addText('兼顾前沿国家级科研与万亿企业商业合规', {
    x: 7.1, y: 2.25, w: 5.1, h: 0.3,
    fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
  });

  const dualTrackCards = [
    {
      title: 'Claude Mythos（专研特许内核）',
      tag: 'RESEARCH TIER',
      tagColor: C.GOLD,
      desc: '具备最极限的未受限推理与底层系统穿透力；绝不流入公开消费级市场，仅限国家级安全防务与受限顶尖学术深研。'
    },
    {
      title: 'Claude Fable 5.0 / 5.1（商用合规旗舰）',
      tag: 'COMMERCIAL TIER',
      tagColor: C.GREEN,
      desc: '搭载高灵敏度网络攻击与生化合成内置双轨分类器。遇高危探针主动防御性拒答，虽压低了终端通过率，却为全球跨国企业提供了零合规风险的生产级兜底。'
    }
  ];
  dualTrackCards.forEach((dt, idx) => {
    const dty = 2.75 + idx * 1.9;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.1, y: dty, w: 5.1, h: 1.7,
      fill: { color: '0F172A' },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(dt.tag, {
      x: 7.3, y: dty + 0.15, w: 4.7, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: dt.tagColor, bold: true, charSpacing: 1, margin: 0
    });
    slide.addText(dt.title, {
      x: 7.3, y: dty + 0.4, w: 4.7, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(dt.desc, {
      x: 7.3, y: dty + 0.75, w: 4.7, h: 0.8,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('系统阐述 Anthropic 独创的 RSP 安全分级与 Fable/Mythos 双轨商业落地架构，展示其在合规安全性上的行业绝对溢价。');
}

// ==========================================
// SLIDE 13: 第三篇 - 3.5 文明拐点与 Software 3.0 哲学
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '3.5 文明拐点：Karpathy 的 Software 3.0 哲学与 AGI 终局', 'Part 3 · The Civilizational Shift', 13);

  // 3 Evolutionary Steps
  const eras = [
    {
      era: 'Software 1.0',
      title: '人类显式编写逻辑',
      desc: '程序员用 C++/Python 编写确定的分支与算法规则，逻辑由人类碳基大脑逐行设计。',
      color: C.TEXT_MUTED
    },
    {
      era: 'Software 2.0',
      title: '数据训练神经网络权重',
      desc: '深度学习时代，人类收集海量数据，通过优化器反向传播训练出由权重张量定义的黑盒逻辑。',
      color: C.CYAN
    },
    {
      era: 'Software 3.0',
      title: '智能体自举统治两者',
      desc: 'AI Agent 自主编写与运行 Software 1.0 代码，并自主设计、训练 Software 2.0 神经网络！',
      color: C.GOLD
    }
  ];

  eras.forEach((e, idx) => {
    const x = 0.8 + idx * 3.9;
    addCard(slide, x, 1.6, 3.6, 2.5);
    slide.addText(e.era, {
      x: x + 0.3, y: 1.85, w: 3.0, h: 0.3,
      fontSize: 12, fontFace: 'Arial', color: e.color, bold: true, margin: 0
    });
    slide.addText(e.title, {
      x: x + 0.3, y: 2.2, w: 3.0, h: 0.35,
      fontSize: 15, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(e.desc, {
      x: x + 0.3, y: 2.6, w: 3.0, h: 1.3,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Bottom Grand Synthesis Card
  addCard(slide, 0.8, 4.4, 11.7, 2.4);
  slide.addText('为什么攻克软件工程等于跨越 AGI？', {
    x: 1.1, y: 4.65, w: 11.0, h: 0.35,
    fontSize: 18, fontFace: 'Arial', color: C.GREEN, bold: true, margin: 0
  });

  const conclusionBullets = [
    '软件是人类首个被彻底形式化、具备完全客观验证环境的智能领域；代码没有语言歧义，只有绝对的物理与编译真理。',
    '现代人类文明所有的数字基础设施（全球金融清算、电网调度、药物分子筛选、聚变控制）本质皆以软件运行。',
    '当一个系统能够自主编写代码、自主调试终端、自我繁育下一代算法时，所有的数字物理世界就全变成了它的可执行函数。'
  ];
  conclusionBullets.forEach((cb, idx) => {
    slide.addText(`•  ${cb}`, {
      x: 1.1, y: 5.1 + idx * 0.48, w: 11.0, h: 0.45,
      fontSize: 11.5, fontFace: 'Arial', color: C.TEXT_MAIN, margin: 0
    });
  });

  slide.addNotes('引用 Andrej Karpathy 的 Software 3.0 哲学，从文明进化的高度升华“攻克代码工程即跨越 AGI”的深刻论据。');
}

// ==========================================
// SLIDE 14: 投资研判与下行风险压力测试 (The Bear Case)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };
  addHeader(slide, '投资研判：估值支撑与下行压力测试（The Bear Case）', 'Valuation & Risk Analysis', 14);

  // Left Card: Bull Case Drivers
  addCard(slide, 0.8, 1.6, 5.6, 5.2);
  slide.addText('多头催化剂（Bull Case）', {
    x: 1.1, y: 1.9, w: 5.0, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.GREEN, bold: true, margin: 0
  });

  const bullPoints = [
    { title: '$100B+ ARR 与 16x-18x P/S', desc: '对标历史上高增长科技巨头初登资本市场，对应 $1.8T - $2.0T 估值区间具备坚实的收入与毛利支撑。' },
    { title: '企业 IT 预算的大转移', desc: '承接全球传统 SaaS 蒸发的上千亿软件席位费，企业将预算集中迁移至按 Token 消耗的 Claude 基础设施。' },
    { title: '无法撼动的开发者心智', desc: '统治 Terminal-Bench 4.0 与 SWE-bench Pro，Prompt Caching 形成了数倍迁移成本的技术锁死。' }
  ];
  bullPoints.forEach((bp, idx) => {
    slide.addText(bp.title, {
      x: 1.1, y: 2.45 + idx * 1.35, w: 5.0, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(bp.desc, {
      x: 1.1, y: 2.75 + idx * 1.35, w: 5.0, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Right Card: Bear Case & Downside Risks
  addCard(slide, 6.8, 1.6, 5.7, 5.2);
  slide.addText('空头风险与黑天鹅压力测试（Bear Case）', {
    x: 7.1, y: 1.9, w: 5.1, h: 0.35,
    fontSize: 17, fontFace: 'Arial', color: C.RED, bold: true, margin: 0
  });

  const bearPoints = [
    { title: '百万卡前沿训练集群的 Capex 侵蚀', desc: '虽然推理毛利率达到 68.4%，但下一代前沿训练集群的巨额资本开支可能推迟自由现金流（FCF）的全面转正。' },
    { title: '开源代码模型的极限价格战', desc: 'Meta Muse Spark、阿里 Qwen3-Coder-Next 及 DeepSeek 持续压低基础 Token 价格，低阶场景可能面临边际替代压力。' },
    { title: '宏观流动性与科技股估值倍数回撤', desc: '若全球宏观科技股在 2027 年遭遇流动性周期拐点，整体 SaaS 与 AI 赛道可能面临估值乘数压缩风险。' }
  ];
  bearPoints.forEach((bp, idx) => {
    slide.addText(bp.title, {
      x: 7.1, y: 2.45 + idx * 1.35, w: 5.1, h: 0.3,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(bp.desc, {
      x: 7.1, y: 2.75 + idx * 1.35, w: 5.1, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  slide.addNotes('通过严密的多空对战视角，评估估值倍数的合理性及 Capex 资本开支和开源平替等下行压力。');
}

// ==========================================
// SLIDE 15: 结语与投资裁决 (Valuation Verdict)
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };

  // Big Central Verdict Card
  addCard(slide, 1.2, 1.2, 10.9, 5.1);

  slide.addText('终局裁决：2 万亿美元买下的究竟是什么？', {
    x: 1.6, y: 1.6, w: 10.1, h: 0.5,
    fontSize: 26, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', margin: 0
  });

  slide.addText('Anthropic IPO 不是一个孤立的商业事件，而是人类科技文明由“软件时代”迈向“自主智能体时代”的权力交接仪式。', {
    x: 2.0, y: 2.2, w: 9.3, h: 0.6,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'center', margin: 0
  });

  // 3 Final Takeaways
  const finals = [
    {
      title: '数字劳动力的统一母体',
      desc: '它不是一个给人类敲键盘提效的插件，而是拥有自我编程、自我调试、7x24 小时自我迭代能力的自举式硅基母体。',
      color: C.GOLD
    },
    {
      title: '万亿传统软件的继承者',
      desc: 'SaaS 界面正在消亡，即时软件取而代之；每年数千亿美元的席位费预算，正不可逆转地被 Anthropic 的 Token 飞轮全量虹吸。',
      color: C.GREEN
    },
    {
      title: '确定性最高的 AGI 门票',
      desc: '死磕最苛刻的终端代码执行，构筑最严密的生物级安全防线。在通往 AGI 的全球竞逐中，Anthropic 拥有最坚实的物理底座。',
      color: C.CYAN
    }
  ];

  finals.forEach((f, idx) => {
    const fx = 1.6 + idx * 3.45;
    slide.addShape(pres.ShapeType.rect, {
      x: fx, y: 2.9, w: 3.2, h: 2.8,
      fill: { color: '0F172A' },
      line: { color: C.CARD_BORDER, width: 1 }
    });
    slide.addText(f.title, {
      x: fx + 0.25, y: 3.2, w: 2.7, h: 0.4,
      fontSize: 15, fontFace: 'Arial', color: f.color, bold: true, margin: 0
    });
    slide.addText(f.desc, {
      x: fx + 0.25, y: 3.7, w: 2.7, h: 1.7,
      fontSize: 11.5, fontFace: 'Arial', color: C.TEXT_MAIN, margin: 0
    });
  });

  slide.addNotes('结语页高度升华整份报告的核心思想，为 $2T IPO 提供不可动摇的产业与文明历史定性。');
}

// 3. Save File
const outputPath = path.join(__dirname, 'Anthropic_2万亿IPO的背后_编码模型与AGI.pptx');
pres.writeFile({ fileName: outputPath }).then(fileName => {
  console.log('Successfully generated presentation at:', fileName);
}).catch(err => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
