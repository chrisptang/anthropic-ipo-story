const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33" x 7.5"
pres.author = 'Anthropic Frontier Strategy Research';
pres.company = 'Global Tech Strategy Institute';
pres.title = '编码模型与 AGI：Claude 登顶背后的人机演化史';

// Claude Signature Brand Palette (Warm Editorial Cream & High Impact Contrast)
const C = {
  BG_WARM: 'FBF9F5',        // Warm Editorial Cream background
  BG_DARK: '141210',        // Deep Obsidian Dark (for cinematic chapter dividers & terminals)
  SURFACE_WHITE: 'FFFFFF',  // Pure crisp white card
  SURFACE_SAND: 'F5F2EB',   // Warm Oyster Sand card
  SURFACE_MUTED: 'EFEBE1',  // Subtle container
  SURFACE_DARK: '1E1B18',   // Terminal & Code card body
  TITLEBAR_DARK: '2A2622',  // Terminal window title bar
  BORDER: 'E2DCD2',         // Subtle warm border
  BORDER_DARK: 'D1C9BC',    // Medium border
  BORDER_OBSIDIAN: '38332E',// Dark container border
  TEXT_MAIN: '1C1917',      // Deep warm charcoal (high contrast)
  TEXT_MUTED: '57534E',     // Warm stone body text
  TEXT_DIM: '8C857B',       // Muted captions
  TEXT_LIGHT: 'F5F5F4',     // Light text on dark
  TEXT_LIGHT_MUTED: 'A8A29E',// Muted light text
  CORAL: 'D97757',          // Anthropic Claude signature Coral
  CORAL_DEEP: 'C25E3E',     // Deep Terracotta
  CORAL_BG: 'FBF0EB',       // Coral tint badge background
  CORAL_BORDER: 'F0C2B2',   // Coral soft border
  AMBER: 'D97706',          // Warm Amber gold
  AMBER_BG: 'FEF3C7',
  GREEN: '16A34A',          // Emerald sage success
  GREEN_BG: 'DCFCE7',
  RED: 'DC2626',            // Crimson error / Gemini failure
  RED_BG: 'FEE2E2',
  SLATE: '475569',          // OpenAI slate blue
  SLATE_BG: 'F1F5F9',
  CODE_BG: '1E1B18',        // Deep obsidian charcoal for code
  CODE_TEXT: 'F5F5F4'       // Code text
};

// Standard Header for Content Slides (Warm Claude Aesthetic)
function addHeader(slide, title, category, slideNumber) {
  slide.background = { color: C.BG_WARM };
  
  // Category pill tag
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 0.42, w: 2.8, h: 0.28,
    fill: { color: C.CORAL_BG },
    line: { color: C.CORAL_BORDER, width: 1 }
  });
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.42, w: 2.8, h: 0.28,
    fontSize: 9, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', charSpacing: 1.2
  });

  // Slide Title
  slide.addText(title, {
    x: 0.8, y: 0.74, w: 10.8, h: 0.52,
    fontSize: 21, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });

  // Slide Number
  slide.addText(String(slideNumber).padStart(2, '0'), {
    x: 12.0, y: 0.42, w: 0.8, h: 0.35,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_DIM, align: 'right', bold: true
  });
}

// Standard Card Box
function addCard(slide, x, y, w, h, fill = C.SURFACE_WHITE, border = C.BORDER) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: border, width: 1 }
  });
}

// High-Impact Cinematic Section Divider (Deep Obsidian Theme)
function addDarkDivider(slide, partNum, partTitle, subtitle, tag, slideNum) {
  slide.background = { color: C.BG_DARK };
  
  // Left Radiant Coral Accent Pillar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.2, w: 0.15, h: 5.1,
    fill: { color: C.CORAL }
  });

  // Main Container Frame
  slide.addShape(pres.ShapeType.rect, {
    x: 1.3, y: 1.2, w: 11.2, h: 5.1,
    fill: { color: C.SURFACE_DARK },
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });

  // Tag Pill
  slide.addShape(pres.ShapeType.rect, {
    x: 1.9, y: 1.7, w: 3.4, h: 0.35,
    fill: { color: '261F1A' },
    line: { color: C.CORAL, width: 1 }
  });
  slide.addText(tag.toUpperCase(), {
    x: 1.9, y: 1.7, w: 3.4, h: 0.35,
    fontSize: 9.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', charSpacing: 1.5
  });

  // Huge Glowing Part Number
  slide.addText(partNum, {
    x: 1.9, y: 2.3, w: 10.0, h: 0.75,
    fontSize: 38, fontFace: 'Arial', color: C.CORAL, bold: true, margin: 0, charSpacing: 1.5
  });

  // White Part Title
  slide.addText(partTitle, {
    x: 1.9, y: 3.15, w: 10.0, h: 0.85,
    fontSize: 30, fontFace: 'Arial', color: 'FFFFFF', bold: true, margin: 0
  });

  // Subtle separator line
  slide.addShape(pres.ShapeType.line, {
    x: 1.9, y: 4.15, w: 9.8, h: 0,
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });

  // Warm Subtitle
  slide.addText(subtitle, {
    x: 1.9, y: 4.35, w: 9.8, h: 0.85,
    fontSize: 15, fontFace: 'Arial', color: 'D6D0C7', margin: 0, lineSpacing: 22
  });

  // Slide Number
  slide.addText(String(slideNum).padStart(2, '0'), {
    x: 11.3, y: 1.5, w: 0.9, h: 0.45,
    fontSize: 16, fontFace: 'Arial', color: '666059', align: 'right', bold: true
  });
}

// Backward compatible alias
const addDivider = addDarkDivider;

// 100% Vector Shape Bar Graphic (Fully Keynote & PowerPoint Compatible)
function addShapeBarChart(slide, x, y, w, h, items, maxVal = 100) {
  addCard(slide, x, y, w, h, C.SURFACE_WHITE, C.BORDER);
  const rowH = (h - 0.6) / items.length;
  
  items.forEach((it, idx) => {
    const yRow = y + 0.3 + idx * rowH;
    // Label
    slide.addText(it.label, {
      x: x + 0.3, y: yRow, w: 2.6, h: 0.35,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    // Track background
    const barX = x + 3.0;
    const barW = w - 4.4;
    slide.addShape(pres.ShapeType.rect, {
      x: barX, y: yRow + 0.08, w: barW, h: 0.22,
      fill: { color: C.SURFACE_MUTED }
    });
    // Fill bar
    const filledW = Math.max(0.1, barW * (it.val / maxVal));
    slide.addShape(pres.ShapeType.rect, {
      x: barX, y: yRow + 0.08, w: filledW, h: 0.22,
      fill: { color: it.color || C.CORAL }
    });
    // Value text
    slide.addText(String(it.displayVal || (it.val + '%')), {
      x: barX + barW + 0.15, y: yRow, w: 1.1, h: 0.35,
      fontSize: 11, fontFace: 'Arial', color: it.color || C.CORAL, bold: true
    });
  });
}

// Real macOS Dark Terminal Window Simulation
function addTerminalWindow(slide, x, y, w, h, title, lines) {
  // Main Window Body
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: C.SURFACE_DARK },
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });
  
  // Title Bar
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h: 0.36,
    fill: { color: C.TITLEBAR_DARK },
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });

  // Traffic Light Buttons
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.15, y: y + 0.11, w: 0.14, h: 0.14, fill: { color: 'EF4444' } });
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.35, y: y + 0.11, w: 0.14, h: 0.14, fill: { color: 'F59E0B' } });
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.55, y: y + 0.11, w: 0.14, h: 0.14, fill: { color: '10B981' } });

  // Window Title
  slide.addText(title, {
    x: x + 0.8, y: y + 0.06, w: w - 1.6, h: 0.24,
    fontSize: 8.5, fontFace: 'Courier New', color: 'A8A29E', align: 'center', bold: true
  });

  // Terminal Lines
  const lineH = (h - 0.5) / lines.length;
  lines.forEach((ln, idx) => {
    const yLn = y + 0.44 + idx * lineH;
    slide.addText(ln.text, {
      x: x + 0.2, y: yLn, w: w - 0.4, h: lineH,
      fontSize: 8.5, fontFace: 'Courier New', color: ln.color || 'F5F5F4', bold: ln.bold || false
    });
  });
}


// ==================== PART 0 ====================

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
      v1: '~100 Tokens\n(局部单行概率联想)',
      v2: '~3,000 Tokens\n(单函数问答与解释)',
      v3: '500k – 1.5M Tokens\n(跨大仓深思自愈 · 暴涨万倍)',
      heroPill: '万倍算力跃迁'
    },
    {
      dim: '人机控制权分配',
      sub: '研发主次分工演进',
      v1: '人类 95% 主导\n(AI 仅负责敲 Tab 补全)',
      v2: '人机对半 (50% / 50%)\n(频繁复制粘贴、人工调试)',
      v3: '智能体 85% 自主接管\n(人类定目标，Agent 自愈交付)',
      heroPill: '主权颠覆'
    },
    {
      dim: '执行环境与反馈',
      sub: '物理世界真实感知',
      v1: '零环境感知\n(仅限编辑器单文件光标)',
      v2: '弱环境感知\n(脱离实际终端与编译器运行)',
      v3: '原生宿主终端接管\n(直接操作 Bash/Git/自测自愈)',
      heroPill: '物理闭环'
    },
    {
      dim: '工程交付最终成果',
      sub: '资产形态与生命周期',
      v1: '单行代码补全\n(容易产生语法幻觉)',
      v2: '孤立代码片段\n(易脱节导致业务逻辑损坏)',
      v3: '生产级完整 PR\n(跨多文件重构 + 全量回归跑通)',
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
  slide.addText('范式质变定论\nPARADIGM SHIFT', {
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


// ==================== PART 1 ====================

// ==========================================
// SLIDE 5: Section Divider (PART 01 - High-Impact Dark Obsidian)
// ==========================================
{
  const slide = pres.addSlide();
  addDarkDivider(
    slide,
    'PART 01',
    '王权易主：Gemini 溃败与 OpenAI 反攻',
    '从千亿算力幻觉到终端工程绝地，复盘真实研发场景中的大模型权力更迭。',
    'PARADIGM IN CRISIS',
    5
  );
  slide.addNotes('【演说备注】进入第一篇章。2024至2025年，全球大模型格局发生了剧烈震荡。谷歌携 Gemini 1.5/2.0/3.0 系列以两百万超长上下文和浩瀚算力高调入场，却在真实工程师终端中遭遇滑铁卢；而遭遇偷袭的 OpenAI 彻底拉响 Code Red，展开惨烈的自救反攻。');
}

// ==========================================
// SLIDE 6: Gemini 3.0 真实工程滑铁卢：四大致命缺陷尸检 (带实机代码/故障模拟)
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, 'Google Gemini 真实工程滑铁卢：四大致命缺陷尸检', 'Gemini Autopsy', 6);

  const flaws = [
    {
      num: '01',
      title: '协议崩坏与格式漂移',
      stat: '14.2% 格式崩溃率',
      color: C.RED,
      tag: 'MALFORMED_CALL',
      codeTitle: 'TERMINAL CRASH LOG',
      codeSnippet: 'POST /v1/chat\n➔ {"action": "bash"\n✖ JSON Parse Error\nTerminal Parser Aborted',
      desc: '在长程 Agent 多轮工具调用中，频繁出现非闭合 JSON 或把参数写为 Markdown 散文，直接搞崩终端解析器。',
      sub: '致命后果：自动化流水线彻底中断 (Claude 仅 0.12%)'
    },
    {
      num: '02',
      title: '偷懒 Diff 与代码截断',
      stat: '61.8% 惰性省略率',
      color: C.AMBER,
      tag: 'LAZY CODE GEN',
      codeTitle: 'DESTRUCTIVE OVERWRITE',
      codeSnippet: 'function calcRisk(order) {\n  // ... keep existing ...\n  return order.status;\n}\n✖ 450 行关键业务被暴力覆盖丢失',
      desc: '重构超 300 行文件时输出 `// ... keep existing code ...` 注释，覆盖原文件导致关键业务逻辑永久丢失。',
      sub: '致命后果：智能体演变为生产代码破坏者，引发线上事故'
    },
    {
      num: '03',
      title: '过度对齐与安全瘫痪',
      stat: '28.5% 误拒率',
      color: C.RED,
      tag: 'SAFETY OVERKILL',
      codeTitle: 'FALSE POSITIVE REFUSAL',
      codeSnippet: '$ kill -9 4128\n✖ Refusal: "抱歉，作为安全 AI\n我无法执行终止系统进程指令"\n✖ 紧急线上故障排障被强制中断',
      desc: '遭遇合法运维指令（如 `kill -9`、`chown`、排障 SQL 测试用例）时触发安全关键词，直接拒绝执行。',
      sub: '致命后果：在生死攸关的生产排障中沦为“合规说教机器人”'
    },
    {
      num: '04',
      title: '虚幻的 2M 针眼盲区',
      stat: '42.0% 寻址失误率',
      color: C.SLATE,
      tag: 'LOST IN CONTEXT',
      codeTitle: 'ATTENTION COLLAPSE',
      codeSnippet: 'import { UserToken } from "./auth";\n✖ Symbol Not Found in 2M ctx\n➔ Attention degradation at 60%\n➔ Deadlock in recursive imports',
      desc: '宣称支持 200 万超长窗口，但当跨模块存在同名变量或隐式依赖时，中间注意力塌缩，频繁引发虚假引用死循环。',
      sub: '致命后果：超大上下文变成海量注意力噪点毒药'
    }
  ];

  flaws.forEach((f, idx) => {
    const x = 0.8 + idx * 2.95;
    const cardW = 2.8;
    addCard(slide, x, 1.45, cardW, 5.35, C.SURFACE_WHITE, C.BORDER);

    // Top Header Block
    slide.addShape(pres.ShapeType.rect, {
      x, y: 1.45, w: cardW, h: 0.92,
      fill: { color: f.color }
    });
    slide.addText(f.num + ' · ' + f.tag, {
      x: x + 0.12, y: 1.52, w: cardW - 0.24, h: 0.2,
      fontSize: 8, fontFace: 'Arial', color: 'FFFFFF', bold: true, charSpacing: 1.1
    });
    slide.addText(f.title, {
      x: x + 0.12, y: 1.74, w: cardW - 0.24, h: 0.52,
      fontSize: 12.5, fontFace: 'Arial', color: 'FFFFFF', bold: true, lineSpacing: 15
    });

    // Stat banner (Solid high-contrast callout)
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.12, y: 2.45, w: cardW - 0.24, h: 0.44,
      fill: { color: C.RED_BG },
      line: { color: C.RED, width: 1 }
    });
    slide.addText(f.stat, {
      x: x + 0.15, y: 2.52, w: cardW - 0.3, h: 0.3,
      fontSize: 12, fontFace: 'Arial', color: f.color, bold: true, align: 'center'
    });

    // Dark Simulated Code / Incident Log Box (VISUAL PUNCH!)
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.12, y: 2.97, w: cardW - 0.24, h: 1.75,
      fill: { color: C.SURFACE_DARK },
      line: { color: C.BORDER_OBSIDIAN, width: 1 }
    });
    // Code header
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.12, y: 2.97, w: cardW - 0.24, h: 0.26,
      fill: { color: '2A2622' }
    });
    slide.addText(f.codeTitle, {
      x: x + 0.15, y: 3.02, w: cardW - 0.3, h: 0.18,
      fontSize: 7.5, fontFace: 'Courier New', color: f.color, bold: true, align: 'center'
    });
    // Code text
    slide.addText(f.codeSnippet, {
      x: x + 0.2, y: 3.28, w: cardW - 0.4, h: 1.35,
      fontSize: 7.5, fontFace: 'Courier New', color: 'E7E5E4', lineSpacing: 11
    });

    // Impact / Explanation Box
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.12, y: 4.8, w: cardW - 0.24, h: 1.88,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(f.desc, {
      x: x + 0.2, y: 4.9, w: cardW - 0.4, h: 0.95,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
    slide.addText(f.sub, {
      x: x + 0.2, y: 5.92, w: cardW - 0.4, h: 0.68,
      fontSize: 8.5, fontFace: 'Arial', color: C.RED, bold: true, lineSpacing: 12
    });
  });

  slide.addNotes('【演说备注】深入复盘 Gemini 的工程败局。宣传材料上的多模态与长上下文跑分，在进入真实生产研发时全面崩塌。格式错乱让 Agent 无法执行，偷懒代码破坏仓库完整性，过度安全阻碍合法维护，2M 窗口在复杂交叉引用中失准。这四个致命伤彻底宣判了 Gemini 在专业开发者心智中的死刑。');
}

// ==========================================
// SLIDE 7: 谷歌为何输掉代码王座：战略错位与大企业官僚化
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '谷歌为何输掉代码王座：战略错位与大企业官僚化剖析', 'Google Pathology', 7);

  // Left Column: Strategic Roots (Executive Left-Accent Panel)
  addCard(slide, 0.8, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.RED }
  });
  slide.addText('战略根源：搜索基因与工具执行的本质冲突', {
    x: 1.1, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const mismatches = [
    {
      tag: '01 · 目标错位',
      title: '检索导向 vs 终端执行导向',
      body: 'Google 核心商业利益是保护其搜索护城河，大模型设计理念偏向“生成看起来完美的维基百科答案”，而非在终端环境下承受 Exit Code 0 的严苛物理测试。'
    },
    {
      tag: '02 · 算力盲从',
      title: '算力虚骄与盲目堆叠上下文',
      body: '过度迷信 TPU 集群带来的 2M 窗口红利，以为“把整个仓库塞进上下文”就能替代严谨的代码 AST 解析与符号索引，结果引入海量无关噪音，严重摊薄注意力。'
    },
    {
      tag: '03 · 官僚对齐',
      title: '政治正确与过度防御瘫痪',
      body: '经历过图像生成公关危机后，内部对齐委员会施加多重极严过滤，导致系统在面对合法命令行工具、网络抓包与排障测试用例时频繁误判拒绝。'
    }
  ];

  mismatches.forEach((m, idx) => {
    const yM = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yM, w: 0.08, h: 1.32,
      fill: { color: C.RED }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.18, y: yM, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(m.tag, {
      x: 1.32, y: yM + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.RED, bold: true
    });
    slide.addText(m.title, {
      x: 1.32, y: yM + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(m.body, {
      x: 1.32, y: yM + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Right Column: Organizational Breakdown
  addCard(slide, 6.78, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 6.78, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.CORAL }
  });
  slide.addText('组织病灶：产品割裂、内耗与 Anthropic 对照', {
    x: 7.08, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const orgIssues = [
    {
      tag: '01 · 组织高墙',
      title: 'Brain 与 DeepMind 的技术栈博弈',
      body: '合并后的团队在算法技术栈（JAX vs PyTorch、Gemini vs Alpha 系列）与内部政治中持续博弈，底层基座频繁改版，缺乏对工程师真实体验的敬畏与打磨。'
    },
    {
      tag: '02 · 生态割裂',
      title: '多团队各自为政与重复造轮子',
      body: 'Project IDX、Gemini Code Assist、Android Studio Bot 等多团队各自维护独立产品，互相争夺预算，未能形成如同 Claude Code 般单点打穿的终极终端生态。'
    },
    {
      tag: '03 · 极简突围',
      title: 'Anthropic：全员一线终端实战',
      body: 'Anthropic 研发人员不足谷歌五分之一，但全员高强度在 Claude 终端自研自测，甚至将 Claude 自主合入代码比例作为战略 KPI，形成了惊人的产品飞轮。'
    }
  ];

  orgIssues.forEach((o, idx) => {
    const yO = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.08, y: yO, w: 0.08, h: 1.32,
      fill: { color: C.CORAL }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 7.16, y: yO, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(o.tag, {
      x: 7.3, y: yO + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.CORAL, bold: true
    });
    slide.addText(o.title, {
      x: 7.3, y: yO + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(o.body, {
      x: 7.3, y: yO + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  slide.addNotes('【演说备注】本页深度剖析谷歌的制度性悲剧。Google 是典型的“大公司病”牺牲品：战略上将大模型视作搜索外延，技术上误以为算力堆叠即可解决智能，组织上深陷内部政治与产品割裂。反观 Anthropic 目标纯粹，全员聚焦于代码与终端闭环，最终以小博大。');
}

// ==========================================
// SLIDE 8: 全球开发者大迁徙：从 Cursor、GitHub 到终端的全域逃离
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '全球开发者大迁徙：从 Cursor 到终端的全域逃离', 'Developer Migration', 8);

  // Left side: Shape Bar Graphic of IDE/Agent market share
  addShapeBarChart(
    slide,
    0.8, 1.45, 6.2, 5.35,
    [
      { label: 'Claude 3.5 / 5.5 系列', val: 68.4, displayVal: '68.4%', color: C.CORAL },
      { label: 'OpenAI o-series / GPT-5', val: 24.2, displayVal: '24.2%', color: C.SLATE },
      { label: 'Google Gemini 3.0 Pro', val: 4.1, displayVal: '4.1%', color: C.RED },
      { label: '开源系列 (DeepSeek/Qwen)', val: 3.3, displayVal: '3.3%', color: C.AMBER }
    ],
    100
  );

  slide.addText('数据口径：Cursor / Windsurf / Claude Code 活跃工程流量采样 (2026 Q1)', {
    x: 1.1, y: 6.2, w: 5.6, h: 0.35,
    fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_DIM, italic: true
  });

  // Right side: 3 Migration phenomenon cards (Left-Accent Panels)
  const phenoms = [
    {
      title: '“默认切 Claude”：开发者的直觉肌肉记忆',
      tag: 'DEFAULT OPTION · 肌肉记忆',
      color: C.CORAL,
      desc: '在 Cursor 等头部 AI IDE 中，即便平台对 Gemini 提供免费额度，开发者仍自费购买 Claude API。程序员用钱包投票：省下 1 小时排错时间远超 API 成本。'
    },
    {
      title: '开源社区与企业私有仓的单向倾斜',
      tag: 'ENTERPRISE SHIFT · 架构锁定',
      color: C.SLATE,
      desc: 'GitHub 顶级开源项目 CI/CD 自动审查、企业级微服务重构脚本，超过 80% 明确绑定 Anthropic API 规范，形成了强大的技术生态壁垒。'
    },
    {
      title: '从 IDE 窗口向终端 Agent (CLI) 的结构性跃迁',
      tag: 'CLI OVER IDE · 终端降维',
      color: C.AMBER,
      desc: '开发者逐渐厌倦了在编辑器侧边栏进行手动确认，直接迁移到基于终端的 Claude Code 等自动化 Harness，完成从“人敲代码”到“检阅 Agent PR”的范式切换。'
    }
  ];

  phenoms.forEach((p, idx) => {
    const yP = 1.45 + idx * 1.78;
    addCard(slide, 7.22, yP, 5.3, 1.62, C.SURFACE_WHITE, C.BORDER);

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 7.22, y: yP, w: 0.08, h: 1.62,
      fill: { color: p.color }
    });

    slide.addShape(pres.ShapeType.rect, {
      x: 7.42, y: yP + 0.16, w: 2.2, h: 0.24,
      fill: { color: C.SURFACE_SAND },
      line: { color: p.color, width: 1 }
    });
    slide.addText(p.tag, {
      x: 7.42, y: yP + 0.16, w: 2.2, h: 0.24,
      fontSize: 8, fontFace: 'Arial', color: p.color, bold: true, align: 'center'
    });

    slide.addText(p.title, {
      x: 7.42, y: yP + 0.45, w: 4.8, h: 0.32,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(p.desc, {
      x: 7.42, y: yP + 0.78, w: 4.85, h: 0.75,
      fontSize: 9, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 13
    });
  });

  slide.addNotes('【演说备注】本页用真实市场数据展现惨烈的开发者大迁徙。在最严苛的 AI IDE 和终端工具中，Claude 凭借近乎 70% 的市占率碾压全场。即便谷歌倒贴算力，也无法扭转开发者对劣质代码生成的时间惩罚。程序员的肌肉记忆与企业研发流已全面向 Anthropic 靠拢。');
}

// ==========================================
// SLIDE 9: OpenAI 的耻感与动员：Altman 的 2025 Code Red 备忘录
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, 'OpenAI 的耻感与动员：Altman 的 2025 Code Red 备忘录', 'OpenAI Code Red', 9);

  // Left Column: The Crisis Awakening
  addCard(slide, 0.8, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.SLATE }
  });
  slide.addText('战略迷失：GPT-4 后的虚荣与偏航警报', {
    x: 1.1, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const crisisPoints = [
    {
      tag: '01 · 战略偏航',
      title: '沉溺于消费级聊天与玩具 Demo',
      body: 'GPT-4 发布后，OpenAI 管理层将大量精力和算力押注在 Sora 视频生成、多模态拟人语音助手（Voice Mode）等消费端热点，严重忽视了底层软件工程基建。'
    },
    {
      tag: '02 · 阵地失守',
      title: '开发者大逃亡的震怒时刻',
      body: '2024 年下半年，OpenAI 内部监测发现硅谷核心科技公司与 YC 创业团队的 API 调用出现雪崩式迁移：顶级极客全面弃用 GPT-4o，拥抱 Claude 3.5 Sonnet。'
    },
    {
      tag: '03 · 认知警醒',
      title: '失去了代码，就失去了 AGI',
      body: 'Altman 痛定思痛发布全员 Code Red 警报：聊天对话只是智能的皮毛，如果失去对软件代码的绝对控制权，OpenAI 就将丧失定义下一代计算平台的资格。'
    }
  ];

  crisisPoints.forEach((c, idx) => {
    const yC = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yC, w: 0.08, h: 1.32,
      fill: { color: C.SLATE }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.18, y: yC, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(c.tag, {
      x: 1.32, y: yC + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.SLATE, bold: true
    });
    slide.addText(c.title, {
      x: 1.32, y: yC + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(c.body, {
      x: 1.32, y: yC + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Right Column: The Counter-Strike Mobilization
  addCard(slide, 6.78, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 6.78, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.AMBER }
  });
  slide.addText('绝地反扑：Codex 重生与 o-系列攻坚动员', {
    x: 7.08, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const counterPoints = [
    {
      tag: '01 · 重组突击队',
      title: '抽调百名核心科学家成立 Codex 兵团',
      body: '打破原有部门壁垒，将 RL 强化学习专家与编译器工程团队深度整合，全面对齐生产级 Git 仓库环境，放弃单一 LeetCode 语法糖优化。'
    },
    {
      tag: '02 · 慢思考突破',
      title: '推出 o1/o3/o-series 慢思考推理架构',
      body: '引入测试时计算（Test-time Compute）扩展定律，在代码生成前进行数千步隐藏链式推演，在离散逻辑算法与数理证明上取得了断层级分数提升。'
    },
    {
      tag: '03 · 战局胶着',
      title: '思维链强项 vs 终端敏捷响应短板',
      body: 'OpenAI 成功稳住了算法理论天花板，但在单步毫秒级响应、终端自适应修补与工具链无缝配合上，依然面临 Claude 高度垂直打磨的顽强抵抗。'
    }
  ];

  counterPoints.forEach((cp, idx) => {
    const yCp = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.08, y: yCp, w: 0.08, h: 1.32,
      fill: { color: C.AMBER }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 7.16, y: yCp, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(cp.tag, {
      x: 7.3, y: yCp + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.AMBER, bold: true
    });
    slide.addText(cp.title, {
      x: 7.3, y: yCp + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(cp.body, {
      x: 7.3, y: yCp + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  slide.addNotes('【演说备注】本页刻画了 OpenAI 充满耻感与血性的反击。被 Anthropic 夺走开发者王座是 OpenAI 创立以来最大的战略耳光。Altman 的 Code Red 备忘录彻底纠正了沉迷消费娱乐 Demo 的偏航，直接催生了强化学习驱动的 o-系列与 Codex 架构重生。');
}

// ==========================================
// SLIDE 10: 2026 双雄并立：Anthropic vs OpenAI 编码对抗全景战役
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '2026 双雄并立：Anthropic vs OpenAI 编码对抗全景战役', 'Duopoly Showdown Matrix', 10);

  // Table Header Row
  const cols = [
    { title: '战略对比维度', x: 0.8, w: 2.2, color: C.TEXT_MAIN },
    { title: 'Anthropic (Claude 3.5 / 5.5)', x: 3.05, w: 3.2, color: C.CORAL },
    { title: 'OpenAI (Codex / o-series)', x: 6.3, w: 3.2, color: C.SLATE },
    { title: '工程与战略本质启示', x: 9.55, w: 2.98, color: C.AMBER }
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
  const matrix = [
    {
      dim: '核心产品定位',
      sub: '终端哲学',
      claude: '终端原生执行者 (Terminal Native)\n聚焦毫秒级探针与高频自愈闭环',
      openai: '思维链慢思考巨兽 (Thinking Engine)\n聚焦离散复杂数学与前沿逻辑证明',
      insight: '日常交付重敏捷；科研解题重深思'
    },
    {
      dim: '底层推理模式',
      sub: '容错成本',
      claude: '快速试错 + 编译器物理校正 (Fast Loop)\n3 次敏捷迭代 100 秒搞定真实 Bug',
      openai: '长隐藏思维链搜索 (Tree-of-Thought)\n单次沉思 3 分钟，一旦走偏成本极高',
      insight: '工程不确定性下，高频试错胜过深思'
    },
    {
      dim: '开发者心智',
      sub: '用户忠诚度',
      claude: '工业级生产第一首选 (生产主力军)\n程序员用钱包自费购买，极强肌肉记忆',
      openai: '竞赛解题与特种破局 (科研特战队)\n高精尖算法证明与单点攻坚标杆',
      insight: 'Claude 占据日常现金流与真实流量'
    },
    {
      dim: '工具生态哲学',
      sub: '集成架构',
      claude: 'Claude Code 纯命令行轻量装甲\n零冗余协议，直接操纵原生 Bash 管道',
      openai: 'Codex CLI + ChatGPT Enterprise 全家桶\n倾向于平台化重型封装与企业级工作流',
      insight: 'Unix 极简哲学在终端更具生命力'
    }
  ];

  matrix.forEach((m, idx) => {
    const yR = 1.95 + idx * 0.96;
    const isEven = idx % 2 === 0;
    const rowBg = isEven ? C.SURFACE_WHITE : C.SURFACE_SAND;

    // Col 0
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: yR, w: 2.2, h: 0.9,
      fill: { color: C.SURFACE_MUTED },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(m.dim, {
      x: 0.9, y: yR + 0.16, w: 2.0, h: 0.28,
      fontSize: 10, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(m.sub, {
      x: 0.9, y: yR + 0.46, w: 2.0, h: 0.25,
      fontSize: 8.5, fontFace: 'Arial', color: C.TEXT_MUTED
    });

    // Col 1: Claude
    slide.addShape(pres.ShapeType.rect, {
      x: 3.05, y: yR, w: 3.2, h: 0.9,
      fill: { color: C.CORAL_BG },
      line: { color: C.CORAL_BORDER, width: 1 }
    });
    slide.addText(m.claude, {
      x: 3.15, y: yR + 0.12, w: 3.0, h: 0.68,
      fontSize: 8.8, fontFace: 'Arial', color: C.CORAL, bold: true, lineSpacing: 13
    });

    // Col 2: OpenAI
    slide.addShape(pres.ShapeType.rect, {
      x: 6.3, y: yR, w: 3.2, h: 0.9,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(m.openai, {
      x: 6.4, y: yR + 0.12, w: 3.0, h: 0.68,
      fontSize: 8.8, fontFace: 'Arial', color: C.SLATE, bold: true, lineSpacing: 13
    });

    // Col 3: Insight
    slide.addShape(pres.ShapeType.rect, {
      x: 9.55, y: yR, w: 2.98, h: 0.9,
      fill: { color: rowBg },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(m.insight, {
      x: 9.65, y: yR + 0.2, w: 2.78, h: 0.52,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, lineSpacing: 13
    });
  });

  // Bottom Verdict Card
  addCard(slide, 0.8, 5.92, 11.73, 0.88, C.SURFACE_WHITE, C.CORAL_BORDER);
  slide.addText('战局战略定论：谷歌在工程真实战场彻底掉队；全球代码与 AGI 的终极王冠，已演化为 Anthropic（终端敏捷自愈）与 OpenAI（深度慢思考突破）的双雄绝巅博弈。', {
    x: 1.1, y: 6.16, w: 11.13, h: 0.45,
    fontSize: 10.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center'
  });

  slide.addNotes('【演说备注】本页总结第一篇章。大模型从战国群雄争霸最终收敛为 Anthropic 与 OpenAI 的双雄对决。谷歌由于战略错位与大企业病而在真实的软件工程一线彻底掉队。接下来，我们将深入解密：Claude 究竟凭什么建立起如此坚不可摧的技术护城河？');
}


// ==================== PART 2 ====================

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
  slide.addText('自愈闭环飞轮\nCLOSED LOOP', {
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
      mcp: '跨企业数据孤岛的标准桥梁（Slack, Jira, GitHub, S3, SQL）\n负责标准化鉴权、资源目录暴露与异构系统数据互通',
      cli: '直接操纵 Unix 管道与文件系统的高性能执行物理引擎\n负责代码编译、执行测试、环境探针与系统进程管理'
    },
    {
      dim: '通信开销与延迟',
      mcp: '基于 JSON-RPC 封装，协议元数据偏重，往返网络与解析延迟高\n高频密集交互易导致上下文膨胀与执行超时',
      cli: '零协议封装损耗，亚毫秒级管道重定向与退出码捕获\n直接在宿主环境流式输出，速度胜出数个数量级'
    },
    {
      dim: '核心适用场景',
      mcp: '企业外部信息检索、跨系统凭据鉴权、低频业务流程触发\n作为智能体感知企业宏观环境的“望远镜”',
      cli: '代码重构、回归验证、文本过滤 (grep/awk/sed)、Git 版本控制\n作为智能体深入物理终端排障的“手术刀”'
    },
    {
      dim: '降维压制与演化定论',
      mcp: '陷入“过度抽象封装”困境：为简单排错编写复杂 Server 得不偿失\n退守为企业生态连接的“外环路由器”',
      cli: '一行 Bash 管道组合命令即可干翻 10 个笨拙冗长的 MCP Server\n在软件工程内环完成坚不可摧的降维回归'
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


// ==================== PART 3 ====================

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
  slide.addText('▲\n认\n知\n抽\n象\n提\n炼', {
    x: 0.8, y: 2.2, w: 0.65, h: 3.8,
    fontSize: 9.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', lineSpacing: 16
  });

  // Right Vertical Flow Track: Action / Execution
  slide.addShape(pres.ShapeType.rect, {
    x: 11.88, y: 1.45, w: 0.65, h: 5.35,
    fill: { color: C.SLATE_BG },
    line: { color: C.BORDER_DARK, width: 1 }
  });
  slide.addText('▼\n物\n理\n动\n作\n下\n发', {
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
      v1: '人类显式编写指令\n大脑构思算法，用字符逐行编写 C++/Java',
      v2: '数据驱动权重搜索\n人类定义损失函数，神经网络优化浮点张量',
      v3: '自然语言即时编译\n人类表达高层意图，智能体沙箱动态生成临时代码'
    },
    {
      dim: '核心资产交付物',
      sub: '代码存在形式',
      v1: '静态源代码文件\n需要永久存储维护的二进制或脚本仓库',
      v2: '黑盒模型权重\n以 Checkpoints 形式存在的稠密/稀疏矩阵',
      v3: '业务计算结果\n代码沦为即生即灭的“思维运行时中间态”'
    },
    {
      dim: '工程生命周期',
      sub: '维护与进化成本',
      v1: '年/月为单位人工维护\n面临不可避免的技术债务、腐化与重构',
      v2: '数据收集与重训练\n依赖海量算力与长周期微调更新',
      v3: '零维护即时动态生成\n每次调用根据当前现实环境实时合成执行'
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
  slide.addText('范式跃迁定论\nSOFTWARE 3.0', {
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


// ==================== PART 4 ====================

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


// ==================== PART 5 ====================

// ==========================================
// SLIDE 27: Responsible Scaling Policy (RSP) 与 ASL-3 自动化熔断
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, 'Responsible Scaling Policy (RSP) 与 ASL-3 自动化熔断', 'Safety Governance', 27);

  // Left Column: 4-Tier ASL Ladder (Stepped Defense Hierarchy)
  addCard(slide, 0.8, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.CORAL }
  });
  slide.addText('RSP 安全梯级：ASL 分级防御金字塔', {
    x: 1.1, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const aslTiers = [
    { level: 'ASL-1', name: '基础统计防线 (早期模型)', desc: '无自主危害性，仅实施常规敏感词过滤与浅层合规对齐。', color: C.BORDER_DARK },
    { level: 'ASL-2', name: '当前普遍基线 (Claude 3 / GPT-4o)', desc: '具备高级编程与常识推理，实施基础红队对抗与动态越狱防范。', color: C.SLATE },
    { level: 'ASL-3', name: '自动化警报触发点 (当前前沿临界点)', desc: '具备自主编写复杂黑客渗透脚本、自我复制或生物化学风险，强制冷绝缘物理沙箱与自动化熔断。', color: C.AMBER },
    { level: 'ASL-4', name: '超智能禁闭防线 (未来演进假说)', desc: '具备战略级自主科研与软硬件逃逸能力，实施全冷绝缘物理锁死与形式化数学证明校验。', color: C.RED }
  ];

  aslTiers.forEach((t, idx) => {
    const yT = 2.22 + idx * 1.12;
    slide.addShape(pres.ShapeType.rect, {
      x: 1.1, y: yT, w: 0.08, h: 0.98,
      fill: { color: t.color }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 1.18, y: yT, w: 5.07, h: 0.98,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(t.level + ' · ' + t.name, {
      x: 1.32, y: yT + 0.1, w: 4.8, h: 0.25,
      fontSize: 9.8, fontFace: 'Arial', color: t.color, bold: true
    });
    slide.addText(t.desc, {
      x: 1.32, y: yT + 0.36, w: 4.8, h: 0.55,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  // Right Column: SAE White-Box Neural Clamping
  addCard(slide, 6.78, 1.45, 5.75, 5.35, C.SURFACE_WHITE, C.BORDER);
  slide.addShape(pres.ShapeType.rect, {
    x: 6.78, y: 1.45, w: 5.75, h: 0.65,
    fill: { color: C.GREEN }
  });
  slide.addText('机制可解释性：SAE 稀疏自编码器白盒透视', {
    x: 7.08, y: 1.62, w: 5.15, h: 0.32,
    fontSize: 11.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
  });

  const saePoints = [
    {
      tag: '01 · 黑盒解构',
      title: '解开神经网络内部的黑盒特征',
      body: '利用稀疏自编码器（SAE）将数百万隐藏神经元分解为人类完全可读的数百万个单一语义特征（如“越狱企图”、“漏洞利用”、“欺骗诱导”）。'
    },
    {
      tag: '02 · 神经钳夹',
      title: '神经元级精准钳夹与抑制 (Feature Clamping)',
      body: '当模型在编写危险系统命令或潜在渗透代码时，系统通过激活钳夹毫秒级强行关闭该特征通路，实现比传统词表过滤更底层的物理免疫。'
    },
    {
      tag: '03 · 算力释放',
      title: '安全不是紧箍咒，而是释放算力的前提',
      body: '只有掌握了完全白盒化的神经透视与熔断底牌，Anthropic 才敢于将最具杀伤力的终端代码执行权限全权赋予智能体，实现极致工程生产力。'
    }
  ];

  saePoints.forEach((s, idx) => {
    const yS = 2.22 + idx * 1.48;
    slide.addShape(pres.ShapeType.rect, {
      x: 7.08, y: yS, w: 0.08, h: 1.32,
      fill: { color: C.GREEN }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 7.16, y: yS, w: 5.07, h: 1.32,
      fill: { color: C.SURFACE_SAND },
      line: { color: C.BORDER, width: 1 }
    });
    slide.addText(s.tag, {
      x: 7.3, y: yS + 0.1, w: 4.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Arial', color: C.GREEN, bold: true
    });
    slide.addText(s.title, {
      x: 7.3, y: yS + 0.34, w: 4.8, h: 0.28,
      fontSize: 10.5, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    slide.addText(s.body, {
      x: 7.3, y: yS + 0.62, w: 4.8, h: 0.65,
      fontSize: 8.8, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 12.5
    });
  });

  slide.addNotes('【演说备注】本页展现了 Anthropic 业界标杆级的安全治理体系。负责任扩展策略（RSP）明确划定了 ASL-1 到 ASL-4 的安全红线；而 SAE 稀疏自编码器技术打破了黑盒迷雾，实现了对危险行为的神经级钳夹抑制。正是因为安全底座足够坚固，Claude 才敢在生产终端中全面释放自愈与执行能力。');
}

// ==========================================
// SLIDE 28: 尾声与文明定格：代码作为人类与超智能的终极契约
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_WARM };

  // Center Hero Card
  addCard(slide, 1.2, 1.1, 10.93, 5.4, C.SURFACE_WHITE, C.BORDER);

  // Top Pill
  slide.addShape(pres.ShapeType.rect, {
    x: 4.66, y: 1.45, w: 4.0, h: 0.35,
    fill: { color: C.CORAL_BG },
    line: { color: C.CORAL_BORDER, width: 1 }
  });
  slide.addText('研报终局定论 · CIVILIZATIONAL VERDICT', {
    x: 4.66, y: 1.45, w: 4.0, h: 0.35,
    fontSize: 9.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', charSpacing: 1.5
  });

  // Big Title
  slide.addText('代码：人类与超智能的终极契约', {
    x: 1.5, y: 2.05, w: 10.33, h: 0.65,
    fontSize: 28, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, align: 'center'
  });

  slide.addText('从千亿市值到通用智能：我们正在见证一场超越商业成败的物种级跃迁', {
    x: 1.5, y: 2.75, w: 10.33, h: 0.35,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'center'
  });

  // 3 Final Takeaway Boxes
  const finals = [
    {
      num: '01',
      title: '重构智力杠杆',
      tag: 'LEVERAGE · 主权者',
      body: '人类不再是低效代码的搬运工，而是复杂系统架构的主权者。每一个掌握高层意图表达的个体，都拥有了调动整座硅基软件工厂的指挥棒。'
    },
    {
      num: '02',
      title: '物理现实定盘星',
      tag: 'GROUND TRUTH · 真理裁判',
      body: '脱离了代码的严密性与物理检验，大模型只能在自然语言的迷魂阵中徘徊；有了代码与编译器，机器才真正长出辨别真伪的眼睛与改变现实的手臂。'
    },
    {
      num: '03',
      title: '自举驱动文明跃迁',
      tag: 'SINGULARITY · 奇点齿轮',
      body: '当代码开始训练下一代代码，递归自我改进的齿轮已悄然咬合。Anthropic 登顶的不仅是商业价值的珠峰，更是人类文明迈入全新计算纪元的启明星。'
    }
  ];

  finals.forEach((f, idx) => {
    const x = 1.6 + idx * 3.45;
    const cardW = 3.2;

    // Card Container
    addCard(slide, x, 3.35, cardW, 2.75, C.SURFACE_SAND, C.BORDER);

    // Top Header Strip
    slide.addShape(pres.ShapeType.rect, {
      x, y: 3.35, w: cardW, h: 0.65,
      fill: { color: C.CORAL }
    });
    slide.addText(f.num + ' · ' + f.tag, {
      x: x + 0.15, y: 3.44, w: cardW - 0.3, h: 0.2,
      fontSize: 8, fontFace: 'Arial', color: 'FFFFFF', bold: true
    });
    slide.addText(f.title, {
      x: x + 0.15, y: 3.64, w: cardW - 0.3, h: 0.3,
      fontSize: 12.5, fontFace: 'Arial', color: 'FFFFFF', bold: true
    });

    slide.addText(f.body, {
      x: x + 0.2, y: 4.18, w: cardW - 0.4, h: 1.75,
      fontSize: 9.2, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 14
    });
  });

  slide.addNotes('【演说备注】全场演讲结束语。各位读者，回顾全篇，Anthropic 的登顶绝不是偶然的商业奇迹，而是代码工程物理主义的伟大胜利。代码是人类赋予机器最神圣的契约——它既是机器认知的骨骼，也是人类守护自身主权的终极缰绳。感谢各位！');
}


// Save Presentation
const outputPath = path.resolve('/Users/tangpeng/Documents/github/anthropic-and-its-2t-ipo/Anthropic 2 万亿 IPO 的背后：编码模型与 AGI_Gemini.pptx');
pres.writeFile({ fileName: outputPath })
  .then(f => console.log('SUCCESS: Generated presentation at: ' + f))
  .catch(err => {
    console.error('ERROR during generation:', err);
    process.exit(1);
  });
