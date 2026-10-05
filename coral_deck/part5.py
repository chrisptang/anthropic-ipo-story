# -*- coding: utf-8 -*-
"""
Part 5: 安全防线与文明定格 (Slides 27-28)
Claude Coral Theme & Vector Diagram Architecture
High Visual Impact Edition: Stepped Safety Ladder, Neural Clamping Panels, Civilization Grand Finale.
"""

SLIDES_5 = """
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
"""
