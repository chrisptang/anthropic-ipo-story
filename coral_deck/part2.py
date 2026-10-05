# -*- coding: utf-8 -*-
"""
Part 2: 终极解密：Claude 的统治级护城河 (Slides 11-16)
Claude Coral Theme & Vector Diagram Architecture
High Visual Impact Edition: Dark Obsidian Chapter Transition, Real macOS Dark Terminal Window.
"""

SLIDES_2 = """
// ==========================================
// SLIDE 11: Section Divider (PART 02 - High-Impact Dark Obsidian)
// ==========================================
{
  const slide = pres.addSlide();
  addDarkDivider(
    slide,
    'PART 02',
    '终极解密：Claude 的统治级护城河',
    '深入底层数学与系统架构，解密为什么只有 Claude 跨过了工程自愈临界点。',
    'ARCHITECTURAL MOAT',
    11
  );
  slide.addNotes('【演说备注】进入第二篇章。我们将从工程和数学底层彻底揭开 Claude 的核心秘密。为什么微小的单步概率差异会在 50 步长程任务中演变成生与死的差距？为什么 Sonnet 5.5 凭速度反超了更昂贵的 Opus？Claude Code 是如何通过自愈闭环统治终端的？');
}

// ==========================================
// SLIDE 12: 0.995⁵⁰ 的致命数学：长程任务中的“可靠性复利税”
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '0.995⁵⁰ 的致命数学：长程任务中的“可靠性复利税”', 'Reliability Compounding', 12);

  // Left Column: Vector Shape Bar Chart comparing 50-step end-to-end success rates
  addShapeBarChart(
    slide,
    0.8, 1.45, 6.2, 5.35,
    [
      { label: 'Claude 5.5 (p=0.995)', val: 77.8, displayVal: '77.8%', color: C.CORAL },
      { label: 'OpenAI o-series (p=0.980)', val: 36.4, displayVal: '36.4%', color: C.SLATE },
      { label: 'Gemini 3.0 Pro (p=0.957)', val: 10.9, displayVal: '10.9%', color: C.RED },
      { label: '开源代码模型 (p=0.920)', val: 1.5, displayVal: '1.5%', color: C.AMBER }
    ],
    100
  );

  // High Impact Banner below chart
  slide.addShape(pres.ShapeType.rect, {
    x: 1.1, y: 5.95, w: 5.6, h: 0.65,
    fill: { color: C.RED_BG },
    line: { color: C.RED, width: 1 }
  });
  slide.addText('💥 数学断崖：0.995⁵⁰ (77.8%) vs 0.957⁵⁰ (10.9%) ➔ 7.1 倍通过率差距！长程工程任务对平庸模型造成指数级残酷绞杀。', {
    x: 1.2, y: 6.02, w: 5.4, h: 0.52,
    fontSize: 8.8, fontFace: 'Arial', color: C.RED, bold: true, lineSpacing: 12.5
  });

  // Right Column: Left-Accent Executive Cards
  const mathCards = [
    {
      title: '从 95% 到 99.5%：非线性质变的残酷鸿沟',
      tag: 'NON-LINEAR CLIFF · 指数断崖',
      color: C.CORAL,
      desc: '在单轮基准测试（如 HumanEval）中，95% 与 99.5% 看起来只是几分的微小差异；但在包含 50 次命令行交互的长程任务中，前者成功率暴跌至 10.9%，系统几乎必然崩溃，而后者依然保持 77.8% 的高稳态。'
    },
    {
      title: '错误级联放大：智能体长程执行的串联诅咒',
      tag: 'ERROR CASCADING · 级联崩塌',
      color: C.RED,
      desc: '长程软件工程不是简单概率相加，而是严格的串联电路。任意一步输出错误的格式或污染了环境，后续所有步骤都将在错误上下文上滑向虚无，导致 Token 与算力的彻底浪费。'
    },
    {
      title: '工业工程的本质：确定性碾压一切花哨技巧',
      tag: 'DETERMINISTIC STABILITY · 确定性护城河',
      color: C.AMBER,
      desc: 'Anthropic 在模型对齐与代码后训练上付出了极致代价，将单步工具调用的稳健性推向物理极限，构筑起竞品哪怕耗费千卡集群也无法轻易逾越的数学护城河。'
    }
  ];

  mathCards.forEach((c, idx) => {
    const yC = 1.45 + idx * 1.78;
    addCard(slide, 7.22, yC, 5.3, 1.62, C.SURFACE_WHITE, C.BORDER);

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 7.22, y: yC, w: 0.08, h: 1.62,
      fill: { color: c.color }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 7.42, y: yC + 0.16, w: 2.2, h: 0.24,
      fill: { color: C.SURFACE_SAND },
      line: { color: c.color, width: 1 }
    });
    slide.addText(c.tag, {
      x: 7.42, y: yC + 0.16, w: 2.2, h: 0.24,
      fontSize: 8, fontFace: 'Arial', color: c.color, bold: true, align: 'center'
    });

    slide.addText(c.title, {
      x: 7.42, y: yC + 0.45, w: 4.8, h: 0.32,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(c.desc, {
      x: 7.42, y: yC + 0.78, w: 4.85, h: 0.75,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演说备注】本页揭示了长程软件工程的硬核数学本质。单步 99.5% 与 95.7% 在日常使用中貌似区别不大，但在 50 步的长链条任务中，0.995 的 50 次方仍有 77.8%，而 0.957 的 50 次方仅剩 10.9%。这就是为什么在真实复杂项目中，开发者感觉 Gemini 总是跑着跑着就死机，而 Claude 能一条龙搞定。');
}

// ==========================================
// SLIDE 13: 终端自愈的物理闭环：从 STDERR 到生产级修复 (实机终端 + 流程对照)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '终端自愈的物理闭环：从 STDERR 报错到生产级修复的五步飞轮', 'Terminal Self-Healing Pipeline', 13);

  // Left Screen: REAL macOS Dark Terminal Window Simulation
  addTerminalWindow(
    slide,
    0.8, 1.45, 5.5, 4.45,
    'terminal — claude-code — 80x24',
    [
      { text: '$ claude-code "fix: memory leak in stream buffer"', color: '10B981', bold: true },
      { text: '● [1/5] Executing test suite: pytest tests/buffer_test.py', color: 'A8A29E' },
      { text: '✖ [2/5] FAILED: AssertionError: limit 1024 exceeded', color: 'EF4444', bold: true },
      { text: '  Process terminated with Exit Code: 1', color: 'EF4444' },
      { text: '⚡ [3/5] Trapping STDERR stack trace...', color: 'F59E0B' },
      { text: '  AST Root-Cause: buffer_allocator.py line 84', color: 'F59E0B' },
      { text: '✔ [4/5] Synthesized minimal patch: -1 line, +3 lines', color: '38BDF8' },
      { text: '● [5/5] Re-running test suite: pytest tests/buffer_test.py', color: 'A8A29E' },
      { text: '✔ 142 passed, 0 failed in 1.42s [Exit Code 0]', color: '10B981', bold: true },
      { text: '➔ Auto-committed to branch: a8f419c (PR Ready)', color: 'D97757', bold: true }
    ]
  );

  // Right Screen: 5-Step Process Cards (Connected Flow)
  const steps = [
    { num: '01', title: '探针下发', tag: 'EXECUTE', color: C.SLATE, desc: '接管终端，下发测试或构建命令，自动捕获环境状态。' },
    { num: '02', title: '拦截报错', tag: 'TRAP STDERR', color: C.RED, desc: '精准拦截非零 Exit Code 与堆栈行号，过滤无关日志。' },
    { num: '03', title: 'AST 假设', tag: 'HYPOTHESIS', color: C.AMBER, desc: '结合语法树检索依赖关系，形成因果链，锁定裂隙。' },
    { num: '04', title: '最小补丁', tag: 'PATCH DIFF', color: C.CORAL, desc: '仅输出最小行级差分，严禁全量覆盖以防破坏业务。' },
    { num: '05', title: '闭环复测', tag: 'VERIFY', color: C.GREEN, desc: '全量回归测试直到 Exit Code 0 合入；失败则即刻重试。' }
  ];

  steps.forEach((s, idx) => {
    const yS = 1.45 + idx * 0.9;
    const cardW = 6.08;
    addCard(slide, 6.45, yS, cardW, 0.82, C.SURFACE_WHITE, C.BORDER);

    // Left accent pill
    slide.addShape(pres.ShapeType.rect, {
      x: 6.45, y: yS, w: 0.85, h: 0.82,
      fill: { color: s.color }
    });
    slide.addText(s.num, {
      x: 6.45, y: yS + 0.16, w: 0.85, h: 0.28,
      fontSize: 12, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center'
    });
    slide.addText(s.tag, {
      x: 6.45, y: yS + 0.46, w: 0.85, h: 0.2,
      fontSize: 6.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center'
    });

    slide.addText(s.title, {
      x: 7.45, y: yS + 0.12, w: 1.5, h: 0.26,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(s.desc, {
      x: 9.05, y: yS + 0.12, w: 3.35, h: 0.58,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12
    });
  });

  // Connecting Loop Ribbon
  addCard(slide, 0.8, 6.05, 11.73, 0.85, C.CORAL_BG, C.CORAL_BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.05, y: 6.2, w: 1.8, h: 0.55,
    fill: { color: C.CORAL }
  });
  slide.addText('自愈闭环飞轮\\nCLOSED LOOP', {
    x: 1.05, y: 6.27, w: 1.8, h: 0.42,
    fontSize: 8.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', lineSpacing: 11
  });

  slide.addText('“Exit Code != 0 ➔ 报错即输入 ➔ 毫秒级重试”：报错不是灾难，而是下一步推理最宝贵的真实物理上下文。模型在与编译器的对抗中逼近唯一真理。', {
    x: 3.05, y: 6.18, w: 9.25, h: 0.6,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 14
  });

  slide.addNotes('【演说备注】本页拆解了 Claude 的终端自愈五步法。传统 Chatbot 面对报错只会让人类去改；而 Claude Code 形成了一个严密的物理闭环：探测、拦截、假设、最小打补丁、回归测试。没有这套闭环，任何声称具备自主能力的智能体都是空中楼阁。');
}

// ==========================================
// SLIDE 14: 速度胜过深思？Sonnet 5.5 反超 Opus 4.5 的工程经济学
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '速度胜过深思？Sonnet 5.5 反超 Opus 4.5 的工程经济学', 'Fast Loop Economics', 14);

  // Top 2 Comparative Specification Cards
  const models = [
    {
      name: 'Sonnet 5.5 (高频敏捷执行战士)',
      tag: 'FAST ITERATION CHAMPION · 70.6% 登顶',
      color: C.CORAL,
      bench: 'Terminal-Bench 4.0 通过率: 70.6%',
      latency: '单轮反馈时延: ~35 秒 (快 5 倍)',
      cost: 'API 价格: $3 / $15 每百万 Token (仅 Opus 1/5)',
      strategy: '“快速尝试 3 次不同排错路径，总耗时 100 秒直接跑通全量单测”'
    },
    {
      name: 'Opus 4.5 (慢思考学术研究巨兽)',
      tag: 'SLOW DEEP REASONER · 58.4%',
      color: C.SLATE,
      bench: 'Terminal-Bench 4.0 通过率: 58.4%',
      latency: '单轮反馈时延: ~180 秒 (极度漫长)',
      cost: 'API 价格: $15 / $75 每百万 Token (昂贵 5 倍)',
      strategy: '“苦思冥想 3 分钟，一旦第一步假设有偏差则整条长链全盘崩溃”'
    }
  ];

  models.forEach((m, idx) => {
    const x = 0.8 + idx * 5.95;
    const cardW = 5.75;
    addCard(slide, x, 1.45, cardW, 2.65, C.SURFACE_WHITE, C.BORDER);

    // Header strip
    slide.addShape(pres.ShapeType.rect, {
      x, y: 1.45, w: cardW, h: 0.65,
      fill: { color: m.color }
    });
    slide.addText(m.tag, {
      x: x + 0.2, y: 1.54, w: cardW - 0.4, h: 0.2,
      fontSize: 8, fontFace: 'Arial', color: 'FFFFFF', bold: true
    });
    slide.addText(m.name, {
      x: x + 0.2, y: 1.74, w: cardW - 0.4, h: 0.3,
      fontSize: 12.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
    });

    const items = [m.bench, m.latency, m.cost];
    items.forEach((it, itIdx) => {
      const yI = 2.18 + itIdx * 0.44;
      slide.addShape(pres.ShapeType.rect, {
        x: x + 0.2, y: yI, w: cardW - 0.4, h: 0.38,
        fill: { color: C.SURFACE_SAND },
        line: { color: C.BORDER, width: 1 }
      });
      slide.addText(it, {
        x: x + 0.3, y: yI + 0.08, w: cardW - 0.6, h: 0.24,
        fontSize: 9, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
      });
    });

    slide.addText(m.strategy, {
      x: x + 0.2, y: 3.6, w: cardW - 0.4, h: 0.42,
      fontSize: 9, fontFace: 'Arial', color: m.color, bold: true, italic: true
    });
  });

  // Bottom 3 Strategic Takeaways (Left-Accent Panels)
  const insights = [
    {
      title: '高频敏捷胜过低频沉思',
      body: '软件工程充满隐式依赖与不确定性，没有任何模型能保证首发必中。快速失败、快速获得编译器反馈的工程价值，远胜于慢思考的纸上谈兵。'
    },
    {
      title: 'Token 消耗与财务 ROI 飞轮',
      body: 'Sonnet 5.5 以 Opus 20% 的成本提供了更高的工程通过率，使得企业能够以极其经济的算力成本大规模铺设自动化 PR 审查与无人排障机器人。'
    },
    {
      title: 'AGI 路径启示：反馈带宽决定智能',
      body: '物理世界的探索不是单次高考试卷，而是连续动态控制。与现实环境交互反馈频率更高的系统，其智能演化速率呈现出压倒性的指数级优势。'
    }
  ];

  insights.forEach((ins, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 4.25, 3.75, 2.55, C.SURFACE_WHITE, C.BORDER);

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x, y: 4.25, w: 0.08, h: 2.55,
      fill: { color: C.CORAL }
    });

    slide.addText('0' + (idx + 1), {
      x: x + 0.25, y: 4.45, w: 0.6, h: 0.3,
      fontSize: 14, fontFace: 'Arial', color: C.CORAL, bold: true
    });
    slide.addText(ins.title, {
      x: x + 0.85, y: 4.45, w: 2.65, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addShape(pres.ShapeType.line, {
      x: x + 0.25, y: 4.85, w: 3.25, h: 0,
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(ins.body, {
      x: x + 0.25, y: 5.0, w: 3.25, h: 1.6,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13.5
    });
  });

  slide.addNotes('【演说备注】本页揭示了颠覆性的工程经济学常识：为什么更小、更快的 Sonnet 5.5 居然在实际工程中战胜了更大、更贵的 Opus 4.5？因为工程不是静态做题，而是高频试错。3 次快速尝试 100 秒搞定，胜过沉思 3 分钟一枪未中。这个发现彻底重塑了 Anthropic 的模型迭代路线。');
}

// ==========================================
// SLIDE 15: Claude Code 解构：850k 上下文压缩与自主 Harness 引擎
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, 'Claude Code 解构：850k 上下文压缩与自主 Harness 引擎', 'Claude Code Architecture', 15);

  const pillars = [
    {
      title: 'AST 符号级索引网络',
      tag: 'SYMBOL-AWARE INDEXING',
      color: C.CORAL,
      body: '不盲目吞入几十万行无关源代码，而是预先抽取项目符号定义、函数签名与调用图，确保上下文窗口始终保持极高的信噪比。'
    },
    {
      title: '自适应 Diff 压缩算法',
      tag: 'DYNAMIC DIFF COMPACTOR',
      color: C.AMBER,
      body: '对代码补丁进行智能行级切片，剔除未更改的上下文样板代码，使多轮长任务中的 Token 消耗速率骤降 65% 以上。'
    },
    {
      title: '隔离沙箱与探针子智能体',
      tag: 'SANDBOXED SUBAGENTS',
      color: C.GREEN,
      body: '将高风险的探索性命令（如全文 Grep、第三方依赖下载）委托给轻量级只读子智能体，防止主对话状态被海量终端输出污染。'
    },
    {
      title: 'Git 状态原生契约守护',
      tag: 'GIT-NATIVE SAFETY NET',
      color: C.SLATE,
      body: '每个修复动作均挂载在原子 Git Stash/Commit 之上，一旦发现编译回归或偏离预期，智能体可毫秒级自我回滚重置，永不损坏主仓。'
    }
  ];

  pillars.forEach((p, idx) => {
    const x = 0.8 + idx * 2.95;
    const cardW = 2.8;
    addCard(slide, x, 1.45, cardW, 5.35, C.SURFACE_WHITE, C.BORDER);

    // Top Solid Colored Accent Header Block
    slide.addShape(pres.ShapeType.rect, {
      x, y: 1.45, w: cardW, h: 0.95,
      fill: { color: p.color }
    });
    slide.addText(p.tag, {
      x: x + 0.15, y: 1.54, w: cardW - 0.3, h: 0.22,
      fontSize: 8, fontFace: 'Arial', color: 'FFFFFF', bold: true, charSpacing: 1.1
    });
    slide.addText(p.title, {
      x: x + 0.15, y: 1.76, w: cardW - 0.3, h: 0.55,
      fontSize: 13, fontFace: 'Arial', color: 'FFFFFF', bold: true, lineSpacing: 15
    });

    slide.addText(p.body, {
      x: x + 0.2, y: 2.65, w: cardW - 0.4, h: 3.9,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
    });
  });

  slide.addNotes('【演说备注】本页深度解构了 Claude Code 这一划时代产品的内部设计。很多人以为 Claude 强只是因为基座模型好，其实不然——Claude Code 的 Harness（装甲控制层）凝聚了极高的工程智慧：符号树过滤、Diff 压缩、轻量沙箱子智能体以及与 Git 深度咬合的回滚保障，共同构成了这款无敌利器。');
}

// ==========================================
// SLIDE 16: 工具调用的黄昏之辩：从 MCP 到终端命令的降维回归
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '工具调用的黄昏之辩：从 MCP 到终端命令的降维回归', 'Tool Protocol Evolution Matrix', 16);

  // Table Header Row
  const cols = [
    { title: '对比维度', x: 0.8, w: 2.2, color: C.TEXT_MAIN },
    { title: 'MCP 协议 (企业数据互联外环)', x: 3.05, w: 4.3, color: C.AMBER },
    { title: '原生 Bash CLI (终端执行内环统治)', x: 7.4, w: 5.13, color: C.CORAL }
  ];

  cols.forEach(c => {
    slide.addShape(pres.ShapeType.rect, {
      x: c.x, y: 1.45, w: c.w, h: 0.45,
      fill: { color: c.color }
    });
    slide.addText(c.title, {
      x: c.x + 0.1, y: 1.54, w: c.w - 0.2, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center'
    });
  });

  // Table Data Rows
  const rows = [
    {
      dim: '角色定位与边界',
      mcp: '跨企业数据孤岛的标准桥梁（Slack, Jira, GitHub, S3, SQL）\\n负责标准化鉴权、资源目录暴露与异构系统数据互通',
      cli: '直接操纵 Unix 管道与文件系统的高性能执行物理引擎\\n负责代码编译、执行测试、环境探针与系统进程管理'
    },
    {
      dim: '通信开销与延迟',
      mcp: '基于 JSON-RPC 封装，协议元数据偏重，往返网络与解析延迟高\\n高频密集交互易导致上下文膨胀与执行超时',
      cli: '零协议封装损耗，亚毫秒级管道重定向与退出码捕获\\n直接在宿主环境流式输出，速度胜出数个数量级'
    },
    {
      dim: '核心适用场景',
      mcp: '企业外部信息检索、跨系统凭据鉴权、低频业务流程触发\\n作为智能体感知企业宏观环境的“望远镜”',
      cli: '代码重构、回归验证、文本过滤 (grep/awk/sed)、Git 版本控制\\n作为智能体深入物理终端排障的“手术刀”'
    },
    {
      dim: '降维压制与演化定论',
      mcp: '陷入“过度抽象封装”困境：为简单排错编写复杂 Server 得不偿失\\n退守为企业生态连接的“外环路由器”',
      cli: '一行 Bash 管道组合命令即可干翻 10 个笨拙冗长的 MCP Server\\n在软件工程内环完成坚不可摧的降维回归'
    }
  ];

  rows.forEach((r, idx) => {
    const yR = 1.95 + idx * 0.96;
    const isEven = idx % 2 === 0;
    const rowBg = isEven ? C.SURFACE_WHITE : C.SURFACE_SAND;

    // Col 0
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: yR, w: 2.2, h: 0.9,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.dim, {
      x: 0.9, y: yR + 0.3, w: 2.0, h: 0.35,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    // Col 1: MCP
    slide.addShape(pres.ShapeType.rect, {
      x: 3.05, y: yR, w: 4.3, h: 0.9,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.mcp, {
      x: 3.15, y: yR + 0.12, w: 4.1, h: 0.68,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });

    // Col 2: CLI
    slide.addShape(pres.ShapeType.rect, {
      x: 7.4, y: yR, w: 5.13, h: 0.9,
      fill: { color: C.CORAL_BG },
      line: { color: C.CORAL_BORDER, width: 1 }
    });
    slide.addText(r.cli, {
      x: 7.5, y: yR + 0.12, w: 4.93, h: 0.68,
      fontSize: 8.8, fontFace: 'Arial', color: C.CORAL, bold: true, lineSpacing: 13
    });
  });

  // Bottom Conclusion Card
  addCard(slide, 0.8, 5.92, 11.73, 0.88, C.SURFACE_WHITE, C.CORAL_BORDER);
  slide.addText('双环协同定论：MCP 并没有消失，而是退守为企业数据互联的“外环路由器”；而在软件工程与代码执行的核心内环，Unix 命令行以其不可替代的原子性与零损耗完成降维回归。', {
    x: 1.1, y: 6.16, w: 11.13, h: 0.45,
    fontSize: 10, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, align: 'center', lineSpacing: 14
  });

  slide.addNotes('【演说备注】本页正面回应了业界关于“MCP 是否进入黄昏期”的激烈讨论。我们的结论是清晰的：MCP 并没有消亡，它在企业级数据连接（外环）依然是事实标准；但在核心代码开发与排错（内环），开发者和智能体最终都会降维回归到最朴素、最强悍的 Bash CLI 终端命令。');
}
"""
