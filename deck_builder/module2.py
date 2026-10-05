# -*- coding: utf-8 -*-
"""
Module 2: Part 2 - Industry Restructuring & Paradigm Shifts (Slides 14-23)
Visual & Diagram-Oriented Redesign
"""

SLIDES_2 = """
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
  slide.addText('在 Claude Code 自主循环中，90%+ 的输入为代码库长前缀缓存。\\n降价至 $0.20/M 却产生 77.5% 毛利，推动综合毛利率达 68.4%！', {
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
"""
