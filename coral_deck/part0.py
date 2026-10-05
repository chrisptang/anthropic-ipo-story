# -*- coding: utf-8 -*-
"""
Part 0: Introduction & Master Paradigm (Slides 1-4)
Claude Coral Theme & Vector Diagram Architecture
Completely upgraded: Zero floating disconnected boxes, Executive Comparison Matrix & Visual Flowcharts.
"""

SLIDES_0 = """
// ==========================================
// SLIDE 1: Cover Slide
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_WARM };

  // Category Badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.1, w: 4.8, h: 0.38,
    fill: { color: C.CORAL_BG },
    line: { color: C.CORAL_BORDER, width: 1 }
  });
  slide.addText('FRONTIER AI RESEARCH | 人机演化深度研报', {
    x: 0.8, y: 1.1, w: 4.8, h: 0.38,
    fontSize: 9.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', charSpacing: 1.5
  });

  // Main Title
  slide.addText('编码模型与 AGI：', {
    x: 0.8, y: 1.75, w: 11.5, h: 0.85,
    fontSize: 38, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText('Claude 登顶背后的人机演化史', {
    x: 0.8, y: 2.6, w: 11.5, h: 0.85,
    fontSize: 38, fontFace: 'Arial', color: C.CORAL, bold: true, margin: 0
  });

  // Subtitle
  slide.addText('从辅助编程到通用智能的物理跳板，兼论 OpenAI 的反击与 Gemini 的溃败', {
    x: 0.8, y: 3.6, w: 11.0, h: 0.45,
    fontSize: 17, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  // 3 Hero Metric Cards
  const heroCards = [
    { num: '70.6%', label: 'Terminal-Bench 4.0 登顶', sub: '复杂工业级系统自主排错与终端自愈', color: C.CORAL, tag: '自愈临界点' },
    { num: '0.995⁵⁰ = 77.8%', label: '单步可靠性复利税壁垒', sub: '长程工程任务对平庸模型的指数级绞杀', color: C.AMBER, tag: '数学护城河' },
    { num: '26.4%', label: 'Anthropic 内部研发自主化', sub: 'Claude 参与训练下一代 Claude 的自举飞轮', color: C.GREEN, tag: 'RSI 递归演化' }
  ];

  heroCards.forEach((c, idx) => {
    const x = 0.8 + idx * 3.95;
    addCard(slide, x, 4.45, 3.75, 1.9, C.SURFACE_WHITE, C.BORDER);

    // Indicator tag
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: 4.65, w: 1.4, h: 0.24,
      fill: { color: C.SURFACE_SAND },
      line: { color: c.color, width: 1 }
    });
    slide.addText(c.tag, {
      x: x + 0.25, y: 4.65, w: 1.4, h: 0.24,
      fontSize: 8.5, fontFace: 'Arial', color: c.color, bold: true, align: 'center'
    });

    slide.addText(c.num, {
      x: x + 0.25, y: 4.95, w: 3.25, h: 0.55,
      fontSize: 24, fontFace: 'Arial', color: c.color, bold: true, margin: 0
    });
    slide.addText(c.label, {
      x: x + 0.25, y: 5.5, w: 3.25, h: 0.3,
      fontSize: 12.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
    });
    slide.addText(c.sub, {
      x: x + 0.25, y: 5.8, w: 3.25, h: 0.45,
      fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0
    });
  });

  // Footer Metadata
  slide.addText('深度研报 · 2026 年 10 月  |  核心标的：Anthropic (Claude) vs OpenAI vs Google Gemini', {
    x: 0.8, y: 6.75, w: 11.5, h: 0.35,
    fontSize: 10, fontFace: 'Arial', color: C.TEXT_DIM
  });
  slide.addNotes('【演说备注】欢迎各位读者。本份研报将彻底撕下大模型只是“程序员补全插件”的肤浅认知，系统剖析为什么代码能力是通向通用人工智能 (AGI) 的唯一物理跳板，深度复盘谷歌 Gemini 在真实工程中的滑铁卢与 OpenAI 的自救反攻。');
}

// ==========================================
// SLIDE 2: Core Thesis (四大底层支柱 - 架构柱形一体化卡片)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '核心立论：为什么 AGI 必须通过编码模型实现？', 'Core Thesis', 2);

  const pillars = [
    {
      num: '01',
      title: '机器世界的动作语言',
      tag: 'ACTION LANGUAGE',
      color: C.CORAL,
      axiom: '公理：自然语言 = 模糊意图 | 代码 = 确定性执行',
      items: [
        { label: '控制流唯一性', desc: '自然语言充满多义与歧义，代码是机器唯一能严格解释执行的精确控制流。' },
        { label: '系统级动作调度', desc: 'API 调用、进程启动、网络通信全由代码精确驱动，脱离代码智能体即失去动作。' },
        { label: '接管文明软件', desc: '代码赋予智能体直接操作现代文明全部软件基础设施与云平台的物理双手。' }
      ],
      impact: '▸ 赋予模型操作物理数字世界的肢体'
    },
    {
      num: '02',
      title: '确定性物理硬反馈',
      tag: 'GROUND TRUTH',
      color: C.AMBER,
      axiom: '公理：Exit Code 0 vs 1 构成不可收买的物理裁判',
      items: [
        { label: '终结语言幻觉', desc: '自然语言推理缺乏摩擦阻力，编译器断言与单测通过率形成无可辩驳的真理边界。' },
        { label: 'STDERR 现实撞击', desc: '真实的退出码与堆栈报错直接将智能体从主观自欺拉回客观现实。' },
        { label: '客观奖惩函数', desc: '机器在不可收买的编译器环境下才能真正完成有效强化学习收敛。' }
      ],
      impact: '▸ 终结大模型无休止的概率自欺与幻觉'
    },
    {
      num: '03',
      title: '自愈闭环与纠错机制',
      tag: 'SELF-HEALING LOOP',
      color: C.GREEN,
      axiom: '公理：报错信息 = 下一步高密推理的最优物理上下文',
      items: [
        { label: '动态探针自愈', desc: '从“盲猜祈祷正确”跃迁为“执行探针 ➔ 捕获错误 ➔ 假设归因 ➔ 最小修补”。' },
        { label: '试错逼近真理', desc: '智能本质不是首次命中，而是在与环境的反复试错碰撞中动态逼近唯一正解。' },
        { label: '自主排障飞轮', desc: '端到端自愈闭环使智能体首次具备独立交付完整工程项目的工业可行性。' }
      ],
      impact: '▸ 从静态文本生成跃迁为动态控制闭环'
    },
    {
      num: '04',
      title: '递归演化的唯一载体',
      tag: 'RSI VEHICLE',
      color: C.SLATE,
      axiom: '公理：修改自身沙箱与训练算子必须依赖高精度代码',
      items: [
        { label: '跨越文本空想', desc: '通用智能无法通过自然语言空想来改进自身权重与超参数。' },
        { label: '重写训练基建', desc: '编写测试套件、提炼训练轨迹、优化 GPU 底层算子均由代码完全承载。' },
        { label: '自举奇点杠杆', desc: '代码是实现系统递归自我改进 (RSI) 的唯一数学工具与物理杠杆。' }
      ],
      impact: '▸ 撬动超级智能递归自举进化的关键杠杆'
    }
  ];

  pillars.forEach((p, idx) => {
    const x = 0.8 + idx * 2.95;
    const cardW = 2.8;
    addCard(slide, x, 1.45, cardW, 5.35, C.SURFACE_WHITE, C.BORDER);

    // Top Solid Colored Accent Header Block
    slide.addShape(pres.ShapeType.rect, {
      x, y: 1.45, w: cardW, h: 1.05,
      fill: { color: p.color }
    });
    // Header Tag
    slide.addText(p.num + ' · ' + p.tag, {
      x: x + 0.15, y: 1.55, w: cardW - 0.3, h: 0.22,
      fontSize: 8, fontFace: 'Arial', color: 'FFFFFF', bold: true, charSpacing: 1.2
    });
    // Header Title
    slide.addText(p.title, {
      x: x + 0.15, y: 1.8, w: cardW - 0.3, h: 0.55,
      fontSize: 13.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, lineSpacing: 16
    });

    // Core Axiom Strip
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 2.62, w: cardW - 0.3, h: 0.48,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(p.axiom, {
      x: x + 0.22, y: 2.68, w: cardW - 0.44, h: 0.38,
      fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 12
    });

    // Integrated Structured Items (Clean list with custom numbered badges - ZERO floating sand boxes!)
    p.items.forEach((it, itIdx) => {
      const yIt = 3.22 + itIdx * 0.95;
      
      // Index circle badge
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.2, y: yIt + 0.04, w: 0.22, h: 0.22,
        fill: { color: p.color }
      });
      slide.addText(String(itIdx + 1), {
        x: x + 0.2, y: yIt + 0.04, w: 0.22, h: 0.22,
        fontSize: 7.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center'
      });

      // Item Label
      slide.addText(it.label, {
        x: x + 0.48, y: yIt, w: cardW - 0.65, h: 0.25,
        fontSize: 10, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
      });
      // Item Description
      slide.addText(it.desc, {
        x: x + 0.48, y: yIt + 0.26, w: cardW - 0.65, h: 0.6,
        fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
      });

      // Subtle hairline divider between items
      if (itIdx < 2) {
        slide.addShape(pres.ShapeType.line, {
          x: x + 0.2, y: yIt + 0.88, w: cardW - 0.4, h: 0,
          line: { color: C.BORDER, width: 0.75 }
        });
      }
    });

    // Bottom Impact Strip
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.15, y: 6.18, w: cardW - 0.3, h: 0.48,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(p.impact, {
      x: x + 0.2, y: 6.24, w: cardW - 0.4, h: 0.36,
      fontSize: 8.5, fontFace: 'Arial', color: p.color, bold: true, align: 'center'
    });
  });

  slide.addNotes('【演说备注】本页开宗明义确立全篇论点：代码绝不是程序员的专用技能，而是通用智能与真实世界交互的“操作系统”。没有代码作为无歧义的动作语言和确定性反馈机制，大模型就只能停留在自然语言的概率幻觉中。');
}

// ==========================================
// SLIDE 3: 范式大跃迁：从“代码补全”到“自主智能体” (专业横向对比矩阵表)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '范式大跃迁：从“代码补全”到“自主智能体”', 'Paradigm Shift Matrix', 3);

  // 1. Top Evolution Progression Ribbon (Horizontal Chevrons)
  const phases = [
    { title: '1.0 辅助时代 (2021–2023)', sub: 'GitHub Copilot 局部联想', color: C.SLATE, x: 3.15, w: 2.85 },
    { title: '2.0 对话时代 (2023–2024)', sub: 'ChatGPT / Web 代码答疑', color: C.AMBER, x: 6.15, w: 2.85 },
    { title: '3.0 代理时代 (2025–2026)', sub: 'Claude Code 终端自主接管 ★', color: C.CORAL, x: 9.15, w: 3.38 }
  ];

  // Col 0 Header (Dimension Label)
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 2.2, h: 0.72,
    fill: { color: C.SURFACE_SAND },
    line: { color: C.BORDER, width: 1 }
  });
  slide.addText('演进阶段 / 核心维度', {
    x: 0.9, y: 1.62, w: 2.0, h: 0.38,
    fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, align: 'center'
  });

  phases.forEach((p, idx) => {
    slide.addShape(pres.ShapeType.rect, {
      x: p.x, y: 1.45, w: p.w, h: 0.72,
      fill: { color: p.color }
    });
    slide.addText(p.title, {
      x: p.x + 0.1, y: 1.54, w: p.w - 0.2, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center'
    });
    slide.addText(p.sub, {
      x: p.x + 0.1, y: 1.82, w: p.w - 0.2, h: 0.25,
      fontSize: 8.5, fontFace: 'Arial', color: 'FFFFFF', align: 'center'
    });
  });

  // 2. Executive Specification Matrix Rows
  const rows = [
    {
      dim: '单任务 Token 消耗',
      sub: '算力吞吐与思考深度',
      v1: '~100 Tokens\\n(局部单行概率联想)',
      v2: '~3,000 Tokens\\n(单函数问答与解释)',
      v3: '500k – 1.5M Tokens\\n(跨大仓深思自愈 · 暴涨万倍)',
      heroPill: '万倍算力跃迁'
    },
    {
      dim: '人机控制权分配',
      sub: '研发主次分工演进',
      v1: '人类 95% 主导\\n(AI 仅负责敲 Tab 补全)',
      v2: '人机对半 (50% / 50%)\\n(频繁复制粘贴、人工调试)',
      v3: '智能体 85% 自主接管\\n(人类定目标，Agent 自愈交付)',
      heroPill: '主权颠覆'
    },
    {
      dim: '执行环境与反馈',
      sub: '物理世界真实感知',
      v1: '零环境感知\\n(仅限编辑器单文件光标)',
      v2: '弱环境感知\\n(脱离实际终端与编译器运行)',
      v3: '原生宿主终端接管\\n(直接操作 Bash/Git/自测自愈)',
      heroPill: '物理闭环'
    },
    {
      dim: '工程交付最终成果',
      sub: '资产形态与生命周期',
      v1: '单行代码补全\\n(容易产生语法幻觉)',
      v2: '孤立代码片段\\n(易脱节导致业务逻辑损坏)',
      v3: '生产级完整 PR\\n(跨多文件重构 + 全量回归跑通)',
      heroPill: '工业级交付'
    }
  ];

  rows.forEach((r, idx) => {
    const yR = 2.28 + idx * 0.86;
    const isEven = idx % 2 === 0;
    const rowBg = isEven ? C.SURFACE_WHITE : C.SURFACE_SAND;

    // Col 0: Dimension Cell
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: yR, w: 2.2, h: 0.8,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.dim, {
      x: 0.9, y: yR + 0.14, w: 2.0, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(r.sub, {
      x: 0.9, y: yR + 0.42, w: 2.0, h: 0.25,
      fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED
    });

    // Col 1: Era 1.0 Cell
    slide.addShape(pres.ShapeType.rect, {
      x: 3.15, y: yR, w: 2.85, h: 0.8,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.v1, {
      x: 3.25, y: yR + 0.12, w: 2.65, h: 0.56,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'center', lineSpacing: 13
    });

    // Col 2: Era 2.0 Cell
    slide.addShape(pres.ShapeType.rect, {
      x: 6.15, y: yR, w: 2.85, h: 0.8,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(r.v2, {
      x: 6.25, y: yR + 0.12, w: 2.65, h: 0.56,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MAIN, align: 'center', lineSpacing: 13
    });

    // Col 3: Era 3.0 Hero Cell (Highlighted with Coral Soft Tint & crisp border)
    slide.addShape(pres.ShapeType.rect, {
      x: 9.15, y: yR, w: 3.38, h: 0.8,
      fill: { color: C.CORAL_BG },
      line: { color: C.CORAL_BORDER, width: 1 }
    });
    slide.addText(r.v3, {
      x: 9.25, y: yR + 0.1, w: 3.18, h: 0.58,
      fontSize: 9.2, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', lineSpacing: 13
    });
  });

  // 3. Bottom Paradigm Verdict Banner
  addCard(slide, 0.8, 5.86, 11.73, 0.95, C.SURFACE_WHITE, C.CORAL_BORDER);
  // Left Badge
  slide.addShape(pres.ShapeType.rect, {
    x: 1.05, y: 6.05, w: 1.8, h: 0.55,
    fill: { color: C.CORAL }
  });
  slide.addText('范式质变定论\\nPARADIGM SHIFT', {
    x: 1.05, y: 6.12, w: 1.8, h: 0.42,
    fontSize: 8.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', lineSpacing: 11
  });

  // Right Text
  slide.addText('单任务 Token 消耗从百级向百万级的万倍跃迁，标志着 AI 已从“程序员语法外挂”彻底蜕变为“拥有物理终端执行权与独立排障能力的数字工程师”。人类角色全面从手动打字编写跃迁为目标架构定义与 PR 验收。', {
    x: 3.05, y: 6.02, w: 9.25, h: 0.65,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 15
  });

  slide.addNotes('【演说备注】本页通过结构化对照矩阵展示了 AI 编码的三代进化轨迹。从辅助补全，到聊天问答，再到今天由 Claude Code 开启的 Autonomous Harness 无人值守接管。单任务 Token 消耗从百级别膨胀到百万级别，标志着软件研发真正跨入自动化工业时代。');
}

// ==========================================
// SLIDE 4: 全篇目录导航 (横向全景 5 大篇章线路图)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '研报全景架构导航：五大核心篇章', 'Master Agenda', 4);

  const parts = [
    {
      num: 'PART 01',
      title: '王权易主：Gemini 溃败与 OpenAI 反攻',
      slides: 'P.05 – 10',
      color: C.RED,
      bullets: [
        { label: 'Gemini 3.0 尸检', sub: '四大工程致命死穴' },
        { label: 'Google 执行力赤字', sub: '搜索基因与组织内耗' },
        { label: '全球开发者大迁徙', sub: 'Cursor 流量逃亡实录' },
        { label: 'OpenAI Code Red', sub: '耻感反扑与 o3 动员' }
      ],
      tag: '权力更迭'
    },
    {
      num: 'PART 02',
      title: '终极解密：Claude 的统治级护城河',
      slides: 'P.11 – 16',
      color: C.CORAL,
      bullets: [
        { label: '0.995⁵⁰ 复利税', sub: '长程工程任务数学绞杀' },
        { label: '五步自愈物理闭环', sub: '从 STDERR 到生产合入' },
        { label: 'Sonnet 反超 Opus', sub: '敏捷试错的工程经济学' },
        { label: 'Claude Code 装甲', sub: '850k 压缩与 CLI 降维' }
      ],
      tag: '护城河解密'
    },
    {
      num: 'PART 03',
      title: '代码即 AGI：通用认知操作系统',
      slides: 'P.17 – 22',
      color: C.AMBER,
      bullets: [
        { label: '4 层认知 OS 堆栈', sub: '真理、调度、记忆、反思' },
        { label: 'Instinct 与 Muse', sub: '哲学与艺术的跨界铁证' },
        { label: 'Software 3.0 革命', sub: '即生即灭的思维中间态' },
        { label: '做题家成不了 AGI', sub: '物理硬碰撞终结幻觉' }
      ],
      tag: '认知基座'
    },
    {
      num: 'PART 04',
      title: '终极自举：Dario Amodei 哲学与 RSI',
      slides: 'P.23 – 26',
      color: C.GREEN,
      bullets: [
        { label: '生物物理学世界观', sub: '信息热力学与演化标度律' },
        { label: '《仁慈的机器》', sub: '50 年医学进展压缩至 5 年' },
        { label: 'RSI 四大自训练飞轮', sub: '用例合成到 GPU 算子' },
        { label: '26.4% 内部代码自研', sub: '人类工程师退居审判官' }
      ],
      tag: '递归自举'
    },
    {
      num: 'PART 05',
      title: '安全防线与文明定格',
      slides: 'P.27 – 28',
      color: C.SLATE,
      bullets: [
        { label: 'RSP 分级防御金字塔', sub: 'ASL-3 自动化物理熔断' },
        { label: 'SAE 稀疏自编码器', sub: '白盒神经元特征精准钳夹' },
        { label: '人类与超智能契约', sub: '代码定盘星与文明跃迁' },
        { label: '前沿终局定论', sub: '超越商业成败的物种跃迁' }
      ],
      tag: '文明定格'
    }
  ];

  parts.forEach((p, idx) => {
    const x = 0.8 + idx * 2.36;
    const cardW = 2.24;
    addCard(slide, x, 1.45, cardW, 5.35, C.SURFACE_WHITE, C.BORDER);

    // Top Solid Colored Accent Header
    slide.addShape(pres.ShapeType.rect, {
      x, y: 1.45, w: cardW, h: 0.95,
      fill: { color: p.color }
    });
    slide.addText(p.num, {
      x: x + 0.1, y: 1.54, w: cardW - 0.2, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, charSpacing: 1.2
    });
    slide.addText(p.slides, {
      x: x + 0.1, y: 1.76, w: cardW - 0.2, h: 0.25,
      fontSize: 9.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x + cardW - 0.85, y: 1.54, w: 0.72, h: 0.22,
      fill: { color: 'FFFFFF' }
    });
    slide.addText(p.tag, {
      x: x + cardW - 0.85, y: 1.54, w: 0.72, h: 0.22,
      fontSize: 7.5, fontFace: 'Arial', color: p.color, bold: true, align: 'center'
    });

    // Module Title
    slide.addText(p.title, {
      x: x + 0.12, y: 2.5, w: cardW - 0.24, h: 0.65,
      fontSize: 11.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 15
    });

    // Divider
    slide.addShape(pres.ShapeType.line, {
      x: x + 0.12, y: 3.2, w: cardW - 0.24, h: 0,
      line: { color: C.BORDER, width: 1 }
    });

    // Checklist Items (Zero floating sand boxes!)
    p.bullets.forEach((b, bIdx) => {
      const yB = 3.32 + bIdx * 0.92;

      // Circle Index Badge
      slide.addShape(pres.ShapeType.ellipse, {
        x: x + 0.12, y: yB + 0.04, w: 0.2, h: 0.2,
        fill: { color: p.color }
      });
      slide.addText(String(bIdx + 1), {
        x: x + 0.12, y: yB + 0.04, w: 0.2, h: 0.2,
        fontSize: 7.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center'
      });

      slide.addText(b.label, {
        x: x + 0.38, y: yB, w: cardW - 0.48, h: 0.24,
        fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
      });
      slide.addText(b.sub, {
        x: x + 0.38, y: yB + 0.24, w: cardW - 0.48, h: 0.5,
        fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 11
      });

      if (bIdx < 3) {
        slide.addShape(pres.ShapeType.line, {
          x: x + 0.12, y: yB + 0.84, w: cardW - 0.24, h: 0,
          line: { color: C.BORDER, width: 0.5 }
        });
      }
    });

    // Bottom Pill
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.12, y: 6.22, w: cardW - 0.24, h: 0.42,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText('深入 P.' + p.slides.split('–')[0].replace('P.', '').trim() + ' 展开 ▸', {
      x: x + 0.12, y: 6.28, w: cardW - 0.24, h: 0.3,
      fontSize: 8.5, fontFace: 'Arial', color: p.color, bold: true, align: 'center'
    });
  });

  slide.addNotes('【演说备注】本页为整场报告的完整路线图。从第一章双雄争霸（Gemini 溃败与 OpenAI 反扑），到第二章 Claude 护城河揭秘，再到第三章 AGI 理论基座与第四章 RSI 终极自举，层层递进。');
}
"""
