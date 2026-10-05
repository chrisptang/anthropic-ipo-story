# -*- coding: utf-8 -*-
"""
Part 3: 代码即 AGI：通用认知操作系统 (Slides 17-22)
Claude Coral Theme & Vector Diagram Architecture
High Visual Impact Edition: Dark Obsidian Chapter Transition, Layered Blueprint Stack.
"""

SLIDES_3 = """
// ==========================================
// SLIDE 17: Section Divider (PART 03 - High-Impact Dark Obsidian)
// ==========================================
{
  const slide = pres.addSlide();
  addDarkDivider(
    slide,
    'PART 03',
    '代码即 AGI：通用认知操作系统',
    '超越编程工具论：代码为何是实现通用认知、自我检验与人机协同的唯一基座。',
    'UNIVERSAL COGNITION',
    17
  );
  slide.addNotes('【演说备注】进入第三篇章。我们将上升到哲学与认知科学高度，解答核心追问：为什么 AGI 的突破口一定是编码模型，而不是聊天、画画或多模态娱乐？代码究竟如何重构了人类认知与软件生产力的底层范式？');
}

// ==========================================
// SLIDE 18: 代码是通用智能的操作系统：四层认知架构全景 (垂直分层蓝图堆栈)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '代码是通用智能的操作系统：四层认知架构全景', 'Cognitive OS Blueprint', 18);

  // Left Vertical Flow Track: Perception / Abstraction
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 0.65, h: 5.35,
    fill: { color: C.CORAL_BG },
    line: { color: C.CORAL_BORDER, width: 1 }
  });
  slide.addText('▲\\n认\\n知\\n抽\\n象\\n提\\n炼', {
    x: 0.8, y: 2.2, w: 0.65, h: 3.8,
    fontSize: 9.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', lineSpacing: 16
  });

  // Right Vertical Flow Track: Action / Execution
  slide.addShape(pres.ShapeType.rect, {
    x: 11.88, y: 1.45, w: 0.65, h: 5.35,
    fill: { color: C.SLATE_BG },
    line: { color: C.BORDER_DARK, width: 1 }
  });
  slide.addText('▼\\n物\\n理\\n动\\n作\\n下\\n发', {
    x: 11.88, y: 2.2, w: 0.65, h: 3.8,
    fontSize: 9.5, fontFace: 'Arial', color: C.SLATE, bold: true, align: 'center', lineSpacing: 16
  });

  const layers = [
    {
      level: 'LAYER 04',
      title: '元认知与反思层 (Metacognition & Planning)',
      tag: 'SELF-REFLECTION · 规划反思',
      color: C.CORAL,
      body: '生成假设、监控执行状态、反向推演因果关系。当遭遇未知崩溃时，主动推翻前序结论并规划重试。'
    },
    {
      level: 'LAYER 03',
      title: '上下文压缩与工作记忆 (AST Working Memory)',
      tag: 'AST & COMPACT STATE · 符号记忆',
      color: C.AMBER,
      body: '利用抽象语法树与符号表，将海量非结构化文本动态提炼为高密度的状态图谱，彻底抵御注意力遗忘。'
    },
    {
      level: 'LAYER 02',
      title: '物理动作与执行调度总线 (Action Dispatch)',
      tag: 'BASH & IO CONTROLLER · 动作肢体',
      color: C.GREEN,
      body: '下发管道命令、启动网络请求、管理文件系统与进程生命周期，将内部思考直接转化为外部物理世界的影响。'
    },
    {
      level: 'LAYER 01',
      title: '确定性物理真理地基 (Ground Truth Foundation)',
      tag: 'EXIT CODE & ASSERTION · 物理地基',
      color: C.SLATE,
      body: '以编译器断言、单元测试通过率、STDERR 与 Exit Code 0 为不可辩驳的物理硬边界，终结主观幻觉。'
    }
  ];

  layers.forEach((l, idx) => {
    const yL = 1.45 + idx * 1.34;
    addCard(slide, 1.6, yL, 10.13, 1.22, C.SURFACE_WHITE, C.BORDER);

    // Left Solid Accent Block
    slide.addShape(pres.ShapeType.rect, {
      x: 1.6, y: yL, w: 2.0, h: 1.22,
      fill: { color: l.color }
    });
    slide.addText(l.level, {
      x: 1.65, y: yL + 0.25, w: 1.9, h: 0.32,
      fontSize: 12, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', charSpacing: 1.2
    });
    slide.addText(l.tag.split('·')[0].trim(), {
      x: 1.65, y: yL + 0.62, w: 1.9, h: 0.28,
      fontSize: 8, fontFace: 'Arial', color: 'FFFFFF', align: 'center'
    });

    // Layer Title
    slide.addText(l.title, {
      x: 3.85, y: yL + 0.2, w: 7.6, h: 0.35,
      fontSize: 13, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });

    // Divider
    slide.addShape(pres.ShapeType.line, {
      x: 3.85, y: yL + 0.58, w: 7.6, h: 0,
      line: { color: C.BORDER, width: 0.75 }
    });

    // Layer Description
    slide.addText(l.body, {
      x: 3.85, y: yL + 0.68, w: 7.6, h: 0.48,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演说备注】本页构建了代码作为“认知操作系统”的四层全景架构。从最底层的确定性物理反馈，到动作执行、记忆压缩，直至顶层的元认知反思。代码不仅是人机沟通的语法，更是大模型演化出高阶智能的完整认知支架。');
}

// ==========================================
// SLIDE 19: 跨领域的通用性铁证：Instinct 哲学逻辑与 Meta Muse 创作
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '跨领域的通用性铁证：Instinct 哲学逻辑与 Meta Muse 创作', 'Cross-Domain Transfer', 19);

  // Left Column: Instinct Formal Philosophy & Logic
  addCard(slide, 0.8, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.CORAL }
  });
  slide.addText('Instinct 案例：代码符号逻辑迁移至抽象哲学思辨', {
    x: 1.1, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const instinctPoints = [
    {
      tag: '01 · 严密性',
      title: '符号严密性赋能高阶形式化论证',
      body: '代码训练培养了模型对前置条件、边界条件与逻辑矛盾的绝对敏感度。面对康德纯粹理性批判或维特根斯坦命题时，Claude 能以符号证明级的严谨性拆解反驳谬误。'
    },
    {
      tag: '02 · 反例搜索',
      title: '形式化反例搜索与边界探查',
      body: '类似于代码排错中的边缘用例挖掘（Edge Cases），模型能自主构建精巧的思想实验，在复杂伦理与法学长文本中快速揪出隐蔽的逻辑漏洞。'
    },
    {
      tag: '03 · 确定性',
      title: '跨越“常识语义”的概率模糊',
      body: '普通 Chatbot 容易被修辞话术迷惑，而具备深度代码基因的模型视文本为严密的状态机推演，展现出断层级的高维思辨定力。'
    }
  ];

  instinctPoints.forEach((p, idx) => {
    const yP = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yP, w: 0.08, h: 1.32,
      fill: { color: C.CORAL }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.18, y: yP, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(p.tag, {
      x: 1.32, y: yP + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.CORAL, bold: true
    });
    slide.addText(p.title, {
      x: 1.32, y: yP + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(p.body, {
      x: 1.32, y: yP + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Right Column: Meta Muse Multimodal Creation
  addCard(slide, 6.78, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 6.78, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.AMBER }
  });
  slide.addText('Meta Muse 案例：代码解耦架构反哺复杂艺术创作', {
    x: 7.08, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const musePoints = [
    {
      tag: '01 · 模块化',
      title: '解耦架构重塑宏大长篇叙事',
      body: '长篇小说或复杂剧本创作不再是随机信马由缰，模型采用类似“高内聚低耦合”的微服务解耦设计，严格管理伏笔、人物属性字典与故事线依赖图。'
    },
    {
      tag: '02 · 算法编排',
      title: '算法级视听节奏与视觉渲染编排',
      body: '在影视分镜、三维场景设计与乐谱编排中，Claude 直接通过 Python 脚本或 SVG 几何向量生成中间表达，将灵感精确量化为毫秒级的时间线。'
    },
    {
      tag: '03 · 思维微积分',
      title: '结论：代码即思维的形式化微积分',
      body: '代码不是一门狭隘的计算机专业技术，而是人类文明史上唯一一套完全无歧义、能够自我演化并映射万物的思想数学。'
    }
  ];

  musePoints.forEach((m, idx) => {
    const yM = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.08, y: yM, w: 0.08, h: 1.32,
      fill: { color: C.AMBER }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 7.16, y: yM, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(m.tag, {
      x: 7.3, y: yM + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.AMBER, bold: true
    });
    slide.addText(m.title, {
      x: 7.3, y: yM + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(m.body, {
      x: 7.3, y: yM + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  slide.addNotes('【演说备注】本页有力反驳了“编码模型只能写代码”的偏见。我们通过 Instinct 哲学思辨与 Meta Muse 结构化艺术创作两个极致案例证明：精通代码的模型在严密逻辑推演、长程记忆组织以及消除语义模糊上具有无可比拟的泛化优势。代码能力是全域认知的发动机。');
}

// ==========================================
// SLIDE 20: Software 3.0 革命：从编写代码到自然语言直接编排
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, 'Software 3.0 革命：从编写代码到自然语言直接编排', 'Software 3.0 Matrix', 20);

  // Table Header Row
  const cols = [
    { title: '对比维度', x: 0.8, w: 2.2, color: C.TEXT_MAIN },
    { title: 'Software 1.0 (1950–2012)', x: 3.05, w: 2.9, color: C.SLATE },
    { title: 'Software 2.0 (2012–2024)', x: 6.0, w: 2.9, color: C.AMBER },
    { title: 'Software 3.0 (2025–2026+) ★', x: 8.95, w: 3.58, color: C.CORAL }
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
      dim: '核心实现机制',
      sub: '指令生成方式',
      v1: '人类显式编写指令\\n大脑构思算法，用字符逐行编写 C++/Java',
      v2: '数据驱动权重搜索\\n人类定义损失函数，神经网络优化浮点张量',
      v3: '自然语言即时编译\\n人类表达高层意图，智能体沙箱动态生成临时代码'
    },
    {
      dim: '核心资产交付物',
      sub: '代码存在形式',
      v1: '静态源代码文件\\n需要永久存储维护的二进制或脚本仓库',
      v2: '黑盒模型权重\\n以 Checkpoints 形式存在的稠密/稀疏矩阵',
      v3: '业务计算结果\\n代码沦为即生即灭的“思维运行时中间态”'
    },
    {
      dim: '工程生命周期',
      sub: '维护与进化成本',
      v1: '年/月为单位人工维护\\n面临不可避免的技术债务、腐化与重构',
      v2: '数据收集与重训练\\n依赖海量算力与长周期微调更新',
      v3: '零维护即时动态生成\\n每次调用根据当前现实环境实时合成执行'
    }
  ];

  rows.forEach((r, idx) => {
    const yR = 1.95 + idx * 1.25;
    const isEven = idx % 2 === 0;
    const rowBg = isEven ? C.SURFACE_WHITE : C.SURFACE_SAND;

    // Col 0
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: yR, w: 2.2, h: 1.18,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.dim, {
      x: 0.9, y: yR + 0.28, w: 2.0, h: 0.3,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(r.sub, {
      x: 0.9, y: yR + 0.6, w: 2.0, h: 0.25,
      fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED
    });

    // Col 1
    slide.addShape(pres.ShapeType.rect, {
      x: 3.05, y: yR, w: 2.9, h: 1.18,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.v1, {
      x: 3.15, y: yR + 0.18, w: 2.7, h: 0.85,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'center', lineSpacing: 13
    });

    // Col 2
    slide.addShape(pres.ShapeType.rect, {
      x: 6.0, y: yR, w: 2.9, h: 1.18,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.v2, {
      x: 6.1, y: yR + 0.18, w: 2.7, h: 0.85,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MAIN, align: 'center', lineSpacing: 13
    });

    // Col 3: Software 3.0 Hero
    slide.addShape(pres.ShapeType.rect, {
      x: 8.95, y: yR, w: 3.58, h: 1.18,
      fill: { color: C.CORAL_BG },
      line: { color: C.CORAL_BORDER, width: 1 }
    });
    slide.addText(r.v3, {
      x: 9.05, y: yR + 0.18, w: 3.38, h: 0.85,
      fontSize: 9, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', lineSpacing: 13
    });
  });

  // Bottom Takeaway Banner
  addCard(slide, 0.8, 5.86, 11.73, 0.95, C.SURFACE_WHITE, C.CORAL_BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 1.05, y: 6.05, w: 1.8, h: 0.55,
    fill: { color: C.CORAL }
  });
  slide.addText('范式跃迁定论\\nSOFTWARE 3.0', {
    x: 1.05, y: 6.12, w: 1.8, h: 0.42,
    fontSize: 8.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', lineSpacing: 11
  });

  slide.addText('“在 Software 3.0 时代，代码不再是需要人类永久存储、维护的静态资产，而是沦为智能体在沙箱中动态编译、执行一次即刻销毁的思维中间态。代码成为了机器自己的原生肌肉。”', {
    x: 3.05, y: 6.05, w: 9.25, h: 0.6,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 14
  });

  slide.addNotes('【演说备注】本页阐明了 Andrej Karpathy 提出的软件三代范式进化。在 Software 3.0 时代，代码不再是需要人类永久存储、维护的静态祖传资产，而是变成了智能体在沙箱中动态编译、执行一次即刻销毁的“思维中间态”。代码成了机器自己的原生肌肉。');
}

// ==========================================
// SLIDE 21: 评测体系的范式转移：从刷榜做题到生产自愈
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '评测体系的范式转移：从刷榜做题到生产自愈', 'Benchmark Paradigm Shift', 21);

  // Left Column: Vector Shape Bar Chart showing Terminal-Bench 4.0 Standings
  addShapeBarChart(
    slide,
    0.8, 1.45, 6.2, 5.35,
    [
      { label: 'Claude 5.5 Sonnet', val: 70.6, displayVal: '70.6%', color: C.CORAL },
      { label: 'OpenAI o-series (o3)', val: 62.1, displayVal: '62.1%', color: C.SLATE },
      { label: 'Claude 4.5 Opus', val: 58.4, displayVal: '58.4%', color: C.AMBER },
      { label: 'Gemini 3.0 Pro', val: 10.9, displayVal: '10.9%', color: C.RED }
    ],
    100
  );

  slide.addText('Terminal-Bench 4.0：真实容器环境下跨多文件自愈排障终极评测 (2026)', {
    x: 1.1, y: 6.2, w: 5.6, h: 0.35,
    fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_DIM, italic: true
  });

  // Right Column: The 4 Generations of Code Benchmarks (Left-Accent Panels)
  const gens = [
    {
      gen: '第一代：语法填空 (HumanEval, 2021)',
      tag: 'GEN 1 · 刷题饱和',
      color: C.BORDER_DARK,
      desc: '164 道独立函数题，完全无外部依赖。各家模型早已刷到 98%+ 严重饱和，对工业生产毫无参考价值。'
    },
    {
      gen: '第二代：静态 Issue 修补 (SWE-bench Lite, 2023)',
      tag: 'GEN 2 · 静态盲猜',
      color: C.SLATE,
      desc: '从 GitHub 真实 Issue 抽取，单次盲猜生成 Patch。暴露了模型缺乏环境反馈时的严重不适应。'
    },
    {
      gen: '第三代：人工清洗验证 (SWE-bench Verified, 2024)',
      tag: 'GEN 3 · 多文件协同',
      color: C.AMBER,
      desc: '过滤单元测试瑕疵，考验多文件协同。Claude 率先突破 65% 临界点，确立全球研发优势。'
    },
    {
      gen: '第四代：终端全域自愈 (Terminal-Bench 4.0, 2026)',
      tag: 'GEN 4 · 容器终极排位',
      color: C.CORAL,
      desc: '全交互式 Bash 容器环境，模拟网络抖动、内核死锁与依赖冲突，只有具备自愈飞轮的模型才能存活。'
    }
  ];

  gens.forEach((g, idx) => {
    const yG = 1.45 + idx * 1.34;
    addCard(slide, 7.22, yG, 5.3, 1.22, C.SURFACE_WHITE, C.BORDER);

    // Left Accent Bar
    slide.addShape(pres.ShapeType.rect, {
      x: 7.22, y: yG, w: 0.08, h: 1.22,
      fill: { color: g.color }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 7.42, y: yG + 0.14, w: 2.2, h: 0.24,
      fill: { color: C.SURFACE_SAND },
      line: { color: g.color, width: 1 }
    });
    slide.addText(g.tag, {
      x: 7.42, y: yG + 0.14, w: 2.2, h: 0.24,
      fontSize: 8, fontFace: 'Arial', color: g.color, bold: true, align: 'center'
    });

    slide.addText(g.gen, {
      x: 7.42, y: yG + 0.44, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(g.desc, {
      x: 7.42, y: yG + 0.72, w: 4.85, h: 0.45,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  slide.addNotes('【演说备注】本页梳理了代码评测的四代演进史。传统的 HumanEval 已经彻底沦为玩具题刷榜；而 Terminal-Bench 4.0 真正把大模型扔进了残酷的真实生产容器。在这里，Claude 5.5 Sonnet 以 70.6% 傲视群雄，展现出跨越工程临界点的绝对统治力。');
}

// ==========================================
// SLIDE 22: 为什么做题家模型成不了 AGI：确定性物理反馈与自然语言自欺
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '为什么做题家模型成不了 AGI：确定性反馈与语言自欺', 'Ground Truth vs Illusion', 22);

  // Left Box: Natural Language Trap (Chat / Reasoning without execution)
  addCard(slide, 0.8, 1.45, 5.75, 4.4, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.RED }
  });
  slide.addText('自然语言的陷阱：修辞自欺、无摩擦滑行与幻觉', {
    x: 1.1, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const chatTraps = [
    { tag: '01 · 零摩擦', title: '无阻力滑行：流利的虚假陈述', desc: '纯自然语言推理缺乏物理阻力，模型可以用极其华丽流畅的句式编造错误事实而毫无自知。' },
    { tag: '02 · 难证伪', title: '无法被客观裁决：陷入诡辩沼泽', desc: '在商业分析或纯文本对话中，人类很难当场判定模型是深刻洞见还是巧言令色的伪造。' },
    { tag: '03 · 偏好作弊', title: 'RLHF 强化学习盲区：讨好人类裁判', desc: '基于人类表面偏好的对齐容易促使模型“投其所好”，最终演化为道貌岸然的合规说教。' }
  ];

  chatTraps.forEach((t, idx) => {
    const yT = 2.22 + idx * 1.18;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yT, w: 0.08, h: 1.05,
      fill: { color: C.RED }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.18, y: yT, w: 5.07, h: 1.05,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(t.tag + ' · ' + t.title, {
      x: 1.32, y: yT + 0.12, w: 4.8, h: 0.26,
      fontSize: 10, fontFace: 'Arial', color: C.RED, bold: true
    });
    slide.addText(t.desc, {
      x: 1.32, y: yT + 0.42, w: 4.8, h: 0.55,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Right Box: Code Execution Reality (Deterministic Hard Ground Truth)
  addCard(slide, 6.78, 1.45, 5.75, 4.4, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 6.78, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.GREEN }
  });
  slide.addText('代码执行的真理：不可收买的物理硬碰撞裁决', {
    x: 7.08, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const codeTruths = [
    { tag: '01 · 二元判定', title: 'Exit Code 0 vs 1：绝对黑白分明', desc: '编译器和单元测试不接受辩解。要么跑通返回 0，要么报错非零中断，没有任何中间灰色地带。' },
    { tag: '02 · 无穷数据', title: '取之不尽的自动可验证合成语料', desc: '只要有编译器和沙箱，机器就能自主生成百亿行代码并自动验证，彻底摆脱人类标注瓶颈。' },
    { tag: '03 · 演化直梯', title: '物理硬反馈：通向 AGI 的唯一直梯', desc: '唯有在具备绝对硬反馈的物理环境中经历数亿次撞击与自校正，系统才能演化出真正坚固的通用智能。' }
  ];

  codeTruths.forEach((t, idx) => {
    const yT = 2.22 + idx * 1.18;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.08, y: yT, w: 0.08, h: 1.05,
      fill: { color: C.GREEN }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 7.16, y: yT, w: 5.07, h: 1.05,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(t.tag + ' · ' + t.title, {
      x: 7.3, y: yT + 0.12, w: 4.8, h: 0.26,
      fontSize: 10, fontFace: 'Arial', color: C.GREEN, bold: true
    });
    slide.addText(t.desc, {
      x: 7.3, y: yT + 0.42, w: 4.8, h: 0.55,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Bottom Takeaway Card
  addCard(slide, 0.8, 6.0, 11.73, 0.8, C.SURFACE_WHITE, C.CORAL_BORDER);
  slide.addText('文明认知定律：聪明的做题家只会刷高试卷分数，但真正的文明创造者必须直面残酷物理现实的检验。代码是连接二者的唯一不可动摇的脐带。', {
    x: 1.1, y: 6.2, w: 11.13, h: 0.45,
    fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, align: 'center'
  });

  slide.addNotes('【演说备注】本页完成了第三篇章的理论升华。做题家模型擅长在无摩擦的纯文本中编织幻觉，但这绝不是 AGI。通用智能必须建立在可证伪、有碰撞的物理硬反馈之上。Exit Code 0 是不可贿赂的裁判，代码为大模型提供了通向客观真理的唯一现实锚点。');
}
"""
