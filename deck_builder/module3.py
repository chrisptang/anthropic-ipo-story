# -*- coding: utf-8 -*-
"""
Module 3: Part 3 - Code as AGI: Recursive Evolution & Civilizational Shift (Slides 24-38)
Visual & Diagram-Oriented Redesign
"""

SLIDES_3 = """
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
  slide.addText('· 面向对象：全球 500 强企业、金融机构、政府与医疗\\n· 安全策略：内置宪法 AI 防护栏，零高危漏洞，完整审计留痕\\n· 运行环境：受限隔离沙箱，所有敏感写操作需人工多签授权\\n· 商业定位：高确定性、零安全隐患的硅基企业生产力基座', {
    x: 1.25, y: 2.58, w: 4.8, h: 1.55,
    fontSize: 9.5, fontFace: 'Arial', color: C.TEXT_MUTED, lineSpacing: 15
  });

  addCard(slide, 1.1, 4.45, 5.1, 2.15, C.INNER_CARD, C.RED);
  slide.addText('MYTHOS · 极限前沿红队探索版', {
    x: 1.25, y: 4.55, w: 4.8, h: 0.28,
    fontSize: 11.5, fontFace: 'Arial', color: C.RED, bold: true
  });
  slide.addText('· 面向对象：内部顶级安全科学家、五角大楼网络红军\\n· 安全策略：解除部分对齐限制，探索模型自主攻击与推演极限\\n· 运行环境：完全物理空气隔离 (Air-gapped) 的安全地堡数据中心\\n· 战略定位：提前探测危险边界，为下一代 RSP 制定防御标准', {
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
  slide.addText('语言虽然是概率模糊的意图，但代码和终端执行是 100% 确定性的！\\n\\n通过把自然语言编译为可执行脚本，并在真实操作系统沙箱中反复跑测试、捕获退出码、自适应纠错，Software 3.0 第一次在拥有超级创造力泛化的同时，完全兼顾了工程严谨性！', {
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
"""
