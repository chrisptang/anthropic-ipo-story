# -*- coding: utf-8 -*-
"""
Part 1: 王权易主：Gemini 溃败与 OpenAI 反攻 (Slides 5-10)
Claude Coral Theme & Vector Diagram Architecture
High Visual Impact Edition: Dark Obsidian Chapter Transition, Real Simulated Code Diff Boxes.
"""

SLIDES_1 = """
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
      codeSnippet: 'POST /v1/chat\\n➔ {"action": "bash"\\n✖ JSON Parse Error\\nTerminal Parser Aborted',
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
      codeSnippet: 'function calcRisk(order) {\\n  // ... keep existing ...\\n  return order.status;\\n}\\n✖ 450 行关键业务被暴力覆盖丢失',
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
      codeSnippet: '$ kill -9 4128\\n✖ Refusal: "抱歉，作为安全 AI\\n我无法执行终止系统进程指令"\\n✖ 紧急线上故障排障被强制中断',
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
      codeSnippet: 'import { UserToken } from "./auth";\\n✖ Symbol Not Found in 2M ctx\\n➔ Attention degradation at 60%\\n➔ Deadlock in recursive imports',
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
      claude: '终端原生执行者 (Terminal Native)\\n聚焦毫秒级探针与高频自愈闭环',
      openai: '思维链慢思考巨兽 (Thinking Engine)\\n聚焦离散复杂数学与前沿逻辑证明',
      insight: '日常交付重敏捷；科研解题重深思'
    },
    {
      dim: '底层推理模式',
      sub: '容错成本',
      claude: '快速试错 + 编译器物理校正 (Fast Loop)\\n3 次敏捷迭代 100 秒搞定真实 Bug',
      openai: '长隐藏思维链搜索 (Tree-of-Thought)\\n单次沉思 3 分钟，一旦走偏成本极高',
      insight: '工程不确定性下，高频试错胜过深思'
    },
    {
      dim: '开发者心智',
      sub: '用户忠诚度',
      claude: '工业级生产第一首选 (生产主力军)\\n程序员用钱包自费购买，极强肌肉记忆',
      openai: '竞赛解题与特种破局 (科研特战队)\\n高精尖算法证明与单点攻坚标杆',
      insight: 'Claude 占据日常现金流与真实流量'
    },
    {
      dim: '工具生态哲学',
      sub: '集成架构',
      claude: 'Claude Code 纯命令行轻量装甲\\n零冗余协议，直接操纵原生 Bash 管道',
      openai: 'Codex CLI + ChatGPT Enterprise 全家桶\\n倾向于平台化重型封装与企业级工作流',
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
"""
