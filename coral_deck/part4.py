# -*- coding: utf-8 -*-
"""
Part 4: 终极自举：Dario Amodei 哲学与 RSI (Slides 23-26)
Claude Coral Theme & Vector Diagram Architecture
High Visual Impact Edition: Dark Obsidian Chapter Transition, Left-Accent Panels, Flywheel Cards.
"""

SLIDES_4 = """
// ==========================================
// SLIDE 23: Section Divider (PART 04 - High-Impact Dark Obsidian)
// ==========================================
{
  const slide = pres.addSlide();
  addDarkDivider(
    slide,
    'PART 04',
    '终极自举：Dario Amodei 哲学与 RSI',
    '当模型开始编写训练自身的代码：探秘硅谷最神秘的智能递归自举实验。',
    'RECURSIVE SELF-IMPROVEMENT',
    23
  );
  slide.addNotes('【演说备注】进入第四篇章。这是全篇研报最惊心动魄的部分。我们将深入 Dario Amodei 的生物物理世界观，拆解 Claude 是如何通过代码飞轮一步步接管自身模型的训练、评测与内核优化，揭开 26.4% 内部自主提交背后的智能奇点真相。');
}

// ==========================================
// SLIDE 24: Dario Amodei 的生物物理哲学与《仁慈的机器》
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, 'Dario Amodei 的生物物理哲学与《仁慈的机器》', 'Amodei Worldview', 24);

  // Left Column: Biophysics Worldview
  addCard(slide, 0.8, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.CORAL }
  });
  slide.addText('世界观：普林斯顿生物物理学者底色与标度律', {
    x: 1.1, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const bioPoints = [
    {
      tag: '01 · 热力学演化',
      title: '智能的物理本质：信息热力学耗散演化',
      body: 'Dario Amodei 拒绝将 AGI 视作神秘不可捉摸的产物，而是将其还原为遵循确定性标度律（Scaling Laws）的物理演化过程。算力与硬反馈如同热力学能量注入。'
    },
    {
      tag: '02 · 生物学映射',
      title: '生物学作为最高阶的复杂系统参考系',
      body: '自然界用数十亿年演化出人类神经元网络；而在硅基芯片中，通过高度形式化的代码控制流，人类能够在数年内完成生物演化数千万年的知识压缩。'
    },
    {
      tag: '03 · 严谨科学主义',
      title: '谨慎而坚定的技术理性乐观主义',
      body: '与单纯追求商业变现的巨头不同，Anthropic 将“确保前沿智能造福人类”写入公司宪法，主张通过极度严谨的实验物理科学去驾驭这股浩瀚的计算力量。'
    }
  ];

  bioPoints.forEach((b, idx) => {
    const yB = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yB, w: 0.08, h: 1.32,
      fill: { color: C.CORAL }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.18, y: yB, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(b.tag, {
      x: 1.32, y: yB + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.CORAL, bold: true
    });
    slide.addText(b.title, {
      x: 1.32, y: yB + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(b.body, {
      x: 1.32, y: yB + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Right Column: Machines of Loving Grace Vision
  addCard(slide, 6.78, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 6.78, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.AMBER }
  });
  slide.addText('宏伟愿景：《仁慈的机器》终极科学图景', {
    x: 7.08, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const visionPoints = [
    {
      tag: '01 · 医学压缩',
      title: '“50 年人类医学科研进展压缩至 5 年”',
      body: 'Amodei 论证：借助具备自主代码编写与实验控制能力的超级智能，癌症攻克、传染病根除与神经退行性疾病逆转等宏伟科研，将在未来 5 到 10 年内集中爆发。'
    },
    {
      tag: '02 · 信息同构',
      title: '从数字代码跃迁到基因与生命碱基代码',
      body: '软件工程代码与生物界 DNA/RNA 碱基序列在信息论上具有同构性。掌握了复杂系统代码编译的模型，将无缝接管湿实验室的自动化机器人。'
    },
    {
      tag: '03 · 唯一定盘星',
      title: '代码是通往物理世界奇迹的唯一硬基石',
      body: '所有这一切跨越的先决条件，依然是机器必须具备 100% 绝对严密的代码逻辑——因为一个致命的基因编辑排错失误，现实世界将付出无可挽回的代价。'
    }
  ];

  visionPoints.forEach((v, idx) => {
    const yV = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.08, y: yV, w: 0.08, h: 1.32,
      fill: { color: C.AMBER }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 7.16, y: yV, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(v.tag, {
      x: 7.3, y: yV + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.AMBER, bold: true
    });
    slide.addText(v.title, {
      x: 7.3, y: yV + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(v.body, {
      x: 7.3, y: yV + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  slide.addNotes('【演说备注】本页深度解析 Dario Amodei 的学术渊源与《仁慈的机器》一书的核心洞见。作为普林斯顿生物物理博士，Amodei 从信息热力学和生物演化视角透视智能。他预言的 50 年医学大爆发并非空谈，其底层驱动力正是高精度代码模型对机器人和实验模拟的全面掌控。');
}

// ==========================================
// SLIDE 25: 递归自我改进 (RSI) 的四大自训练飞轮
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '递归自我改进 (RSI) 的四大自训练飞轮', 'RSI Flywheels', 25);

  const wheels = [
    {
      num: 'WHEEL 01',
      title: '合成单测用例对抗生成',
      tag: 'SYNTHETIC TEST SUITE',
      color: C.CORAL,
      body: 'Claude 负责为下一代候选模型自动构建上千万个包含极端边界条件、死锁与内存溢出的高难度测试套件，倒逼模型突破能力天花板。',
      impact: '▸ 自动化生成千亿级高难度对抗样本'
    },
    {
      num: 'WHEEL 02',
      title: '终端自愈轨迹挖掘蒸馏',
      tag: 'TRAJECTORY MINING',
      color: C.AMBER,
      body: '从数百万次真实终端交互中提取“报错 ➔ 假设 ➔ 修复”的黄金自校正轨迹，经过剪枝与压缩，转化为强化学习的高信噪比训练语料。',
      impact: '▸ 终结纯人工专家标注的产能天花板'
    },
    {
      num: 'WHEEL 03',
      title: '编译器硬反馈奖励模型',
      tag: 'FORMAL VERIFIER RM',
      color: C.GREEN,
      body: '摒弃主观、昂贵且脆弱的人工 RLHF，引入 GCC/Clang、Rust 编译器与形式化逻辑验证器作为奖励函数，杜绝奖励作弊与刷分投机。',
      impact: '▸ 构建不可贿赂的形式化真理裁判'
    },
    {
      num: 'WHEEL 04',
      title: '底层 GPU 训练内核自主调优',
      tag: 'AUTONOMOUS KERNEL TUNING',
      color: C.SLATE,
      body: 'Claude 自主分析集群分布式通信瓶颈，手写 Triton / CUDA 高性能算子，将集群整体训练吞吐量显著拉升 14% 以上。',
      impact: '▸ 智能体直接优化自身运转的物理基建'
    }
  ];

  wheels.forEach((w, idx) => {
    const x = 0.8 + idx * 2.95;
    const cardW = 2.8;
    addCard(slide, x, 1.45, cardW, 5.35, C.SURFACE_WHITE, C.BORDER);

    // Top Header Block
    slide.addShape(pres.ShapeType.rect, {
      x, y: 1.45, w: cardW, h: 0.95,
      fill: { color: w.color }
    });
    slide.addText(w.num, {
      x: x + 0.15, y: 1.54, w: cardW - 0.3, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, charSpacing: 1.1
    });
    slide.addText(w.title, {
      x: x + 0.15, y: 1.76, w: cardW - 0.3, h: 0.55,
      fontSize: 12.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, lineSpacing: 15
    });

    slide.addText(w.body, {
      x: x + 0.2, y: 2.65, w: cardW - 0.4, h: 3.3,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
    });

    // Bottom Impact Bar
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 6.18, w: cardW - 0.3, h: 0.48,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(w.impact, {
      x: x + 0.2, y: 6.24, w: cardW - 0.4, h: 0.36,
      fontSize: 8.5, fontFace: 'Arial', color: w.color, bold: true, align: 'center'
    });
  });

  slide.addNotes('【演说备注】本页披露了 Anthropic 内部神秘的 RSI（递归自我改进）四大飞轮。从用例合成、轨迹挖掘，到编译器硬奖励以及底层 Triton 算子优化，Claude 已经深度卷入了生产下一代 Claude 的每一个关键技术节点。递归自举不再是科幻设定，而是真实的工业管线。');
}

// ==========================================
// SLIDE 26: 26.4% 内部代码自研真相：智能自举临界点与研发重构
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '26.4% 内部代码自研真相：智能自举临界点与研发重构', 'Self-Authoring Reality', 26);

  // Left Column: Vector Shape Bar Chart tracking AI Commit Ratio inside Anthropic
  addShapeBarChart(
    slide,
    0.8, 1.45, 6.2, 5.35,
    [
      { label: '2026 Q1 (当前基线)', val: 26.4, displayVal: '26.4%', color: C.CORAL },
      { label: '2025 Q1 (一年前)', val: 17.8, displayVal: '17.8%', color: C.AMBER },
      { label: '2024 Q1 (两年前)', val: 8.5, displayVal: '8.5%', color: C.SLATE },
      { label: '2023 Q1 (早期起步)', val: 1.2, displayVal: '1.2%', color: C.BORDER_DARK }
    ],
    100
  );

  slide.addText('数据源：Anthropic 内部工程大仓 Git 提交元数据审计 (不含第三方库导入)', {
    x: 1.1, y: 6.2, w: 5.6, h: 0.35,
    fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_DIM, italic: true
  });

  // Right Column: The 3 Structural Shifts in Human R&D (Left-Accent Panels)
  const shifts = [
    {
      title: '基建与测试类代码渗透率超过 60%',
      tag: 'INFRA & TEST · 自动化渗透',
      color: C.CORAL,
      desc: '在分布式训练调度脚本、容灾迁移监控与自动化回归测试中，超过 60% 的代码已完全由 Claude 自主生成并合入主分支。'
    },
    {
      title: '人类角色的彻底重构：从码农到审判官',
      tag: 'ROLE SHIFT · 架构审判官',
      color: C.AMBER,
      desc: 'Anthropic 科学家已不再手写常规业务代码，核心工作转型为定义顶层架构规范、编写反思提示词与检阅 Agent 提交的 PR。'
    },
    {
      title: '1:20 的恐怖人效比与资本飞轮',
      tag: 'LEVERAGE · 20倍人效杠杆',
      color: C.GREEN,
      desc: '凭借极高程度的自举闭环，Anthropic 仅凭数百名核心研发人员，便在技术产出与模型迭代速度上全面抗衡数万人的科技巨头。'
    }
  ];

  shifts.forEach((s, idx) => {
    const yS = 1.45 + idx * 1.78;
    addCard(slide, 7.22, yS, 5.3, 1.62, C.SURFACE_WHITE, C.BORDER);

    // Left Accent Bar
    slide.addShape(pres.ShapeType.rect, {
      x: 7.22, y: yS, w: 0.08, h: 1.62,
      fill: { color: s.color }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 7.42, y: yS + 0.16, w: 2.2, h: 0.24,
      fill: { color: C.SURFACE_SAND },
      line: { color: s.color, width: 1 }
    });
    slide.addText(s.tag, {
      x: 7.42, y: yS + 0.16, w: 2.2, h: 0.24,
      fontSize: 8, fontFace: 'Arial', color: s.color, bold: true, align: 'center'
    });

    slide.addText(s.title, {
      x: 7.42, y: yS + 0.45, w: 4.8, h: 0.32,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(s.desc, {
      x: 7.42, y: yS + 0.78, w: 4.85, h: 0.75,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演说备注】本页以确凿的 Git 提交审计数据揭示了 26.4% 内部代码自研的真相。在基础设施和测试领域，AI 自主编写比例已越过 60%。Anthropic 正在亲身验证智能自举的临界点：当模型写代码训练自身，人类工程师正式退居二线成为架构审判官，组织人效实现了 20 倍的指数跃升。');
}
"""
