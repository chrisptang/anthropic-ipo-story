const PptxGenJS = require("pptxgenjs");

const pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";

const COLORS = {
  bg: "FFFFFF",
  primary: "D97757",       // Claude Coral
  primaryDark: "B85638",   // Deep Coral
  secondary: "EBA073",     // Soft Coral Accent
  coralLight: "FFF5F0",    // Tinted Card BG
  grayLight: "F8F9FA",     // Neutral Card BG
  text: "1A1A1A",          // Charcoal Black
  muted: "5F6368",         // Neutral Gray
  accent: "1E293B",        // Slate Dark for numbers
  border: "E2E8F0",        // Crisp Card Border
  borderCoral: "FBD5C8"    // Highlight Border
};

// 1. Cover Slide
function addCoverSlide(title, subtitle, tag) {
  let slide = pres.addSlide();
  slide.background = { color: COLORS.bg };
  
  // Top brand bar
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: "100%", h: 0.15, fill: { color: COLORS.primary } });
  
  // Tag / Meta
  if (tag) {
    slide.addShape(pres.ShapeType.roundRect, { x: 1.0, y: 1.4, w: 2.8, h: 0.38, fill: { color: COLORS.coralLight }, line: { color: COLORS.borderCoral, width: 1 }, rectRadius: 0.05 });
    slide.addText(tag, { x: 1.0, y: 1.4, w: 2.8, h: 0.38, fontSize: 13, bold: true, color: COLORS.primary, align: "center", valign: "middle" });
  }
  
  slide.addText(title, { x: 1.0, y: 2.0, w: 8.0, h: 1.5, fontSize: 40, bold: true, color: COLORS.text, align: "left" });
  slide.addText(subtitle, { x: 1.0, y: 3.6, w: 8.0, h: 0.8, fontSize: 22, color: COLORS.primary, align: "left" });
  
  // Footer
  slide.addText("2026 产业深度推演报告 · 编码模型、Agentic 范式与 AGI 终局", { x: 1.0, y: 4.8, w: 8.0, h: 0.4, fontSize: 12, color: COLORS.muted, align: "left" });
}

// 2. Section Divider Slide
function addSectionSlide(number, title, subtitle) {
  let slide = pres.addSlide();
  slide.background = { color: COLORS.primary };
  
  slide.addShape(pres.ShapeType.rect, { x: 1.0, y: 1.8, w: 1.2, h: 0.08, fill: { color: "FFFFFF" } });
  slide.addText(`PART ${number}`, { x: 1.0, y: 2.1, w: 8.0, h: 0.5, fontSize: 18, bold: true, color: COLORS.coralLight, align: "left" });
  slide.addText(title, { x: 1.0, y: 2.6, w: 8.0, h: 1.2, fontSize: 42, bold: true, color: "FFFFFF", align: "left" });
  if (subtitle) {
    slide.addText(subtitle, { x: 1.0, y: 3.8, w: 8.0, h: 0.6, fontSize: 18, color: COLORS.coralLight, align: "left" });
  }
}

// Base Content Slide Header
function createBaseSlide(category, title) {
  let slide = pres.addSlide();
  slide.background = { color: COLORS.bg };
  
  // Category tracker
  if (category) {
    slide.addText(category.toUpperCase(), { x: 0.6, y: 0.35, w: 8.8, h: 0.25, fontSize: 11, bold: true, color: COLORS.primary, align: "left" });
  }
  
  // Title
  slide.addText(title, { x: 0.6, y: 0.62, w: 8.8, h: 0.55, fontSize: 24, bold: true, color: COLORS.text, align: "left" });
  // Subtle divider
  slide.addShape(pres.ShapeType.line, { x: 0.6, y: 1.22, w: 8.8, h: 0, line: { color: COLORS.border, width: 1.5 } });
  
  return slide;
}

// Custom Bar Chart Slide (Horizontal Bars using pure shapes for 100% Keynote stability)
function addCustomBarChartSlide(category, title, chartTitle, labels, values, maxVal, unit, bullets, useLogScale = false) {
  let slide = createBaseSlide(category, title);
  
  slide.addText(chartTitle, { x: 0.6, y: 1.35, w: 4.5, h: 0.35, fontSize: 13, bold: true, color: COLORS.muted, align: "left" });
  
  let startY = 1.8;
  let barHeight = 0.32;
  let gap = 0.23;
  let maxBarWidth = 1.75; // Safely bounded so max label + bar never touches right card at x: 4.8
  
  for(let i=0; i<labels.length; i++) {
    let ratio = Math.abs(values[i]) / maxVal;
    if (useLogScale) {
      let logVal = Math.log10(Math.max(1, values[i]));
      let logMax = Math.log10(maxVal);
      ratio = logVal / logMax;
    }
    let width = Math.max(0.08, ratio * maxBarWidth);
    slide.addText(labels[i], { x: 0.2, y: startY, w: 1.5, h: barHeight, fontSize: 12, bold: true, color: COLORS.text, align: "right" });
    slide.addShape(pres.ShapeType.rect, { x: 1.8, y: startY + 0.03, w: width, h: barHeight - 0.06, fill: { color: COLORS.primary } });
    slide.addText(`${values[i]}${unit}`, { x: 1.8 + width + 0.08, y: startY, w: 1.05, h: barHeight, fontSize: 12, bold: true, color: COLORS.accent, align: "left" });
    startY += barHeight + gap;
  }
  
  // Right side explanation box
  slide.addShape(pres.ShapeType.roundRect, { x: 4.8, y: 1.45, w: 4.6, h: 3.75, fill: { color: COLORS.grayLight }, line: { color: COLORS.border, width: 1 }, rectRadius: 0.05 });
  let formattedBullets = bullets.map(b => ({ text: b, options: { bullet: true, breakLine: true, fontSize: 13, color: COLORS.text, paraSpaceAfter: 5 } }));
  slide.addText(formattedBullets, { x: 5.0, y: 1.62, w: 4.2, h: 3.4, valign: "top" });
}

// Data Stats + Explanatory Text
function addDataTextSlide(category, title, leftItems, rightBullets) {
  let slide = createBaseSlide(category, title);
  
  // Left Stat Cards
  slide.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 1.45, w: 4.1, h: 3.75, fill: { color: COLORS.coralLight }, line: { color: COLORS.borderCoral, width: 1 }, rectRadius: 0.05 });
  let currentY = 1.7;
  leftItems.forEach(item => {
    slide.addText(item.stat, { x: 0.8, y: currentY, w: 3.7, h: 0.7, fontSize: 34, bold: true, color: COLORS.primaryDark, align: "center" });
    slide.addText(item.label, { x: 0.8, y: currentY + 0.7, w: 3.7, h: 0.35, fontSize: 13, bold: true, color: COLORS.muted, align: "center" });
    currentY += 1.4;
  });

  // Right Bullets Box
  slide.addShape(pres.ShapeType.roundRect, { x: 4.9, y: 1.45, w: 4.5, h: 3.75, fill: { color: COLORS.grayLight }, line: { color: COLORS.border, width: 1 }, rectRadius: 0.05 });
  let formattedBullets = rightBullets.map(b => ({ text: b, options: { bullet: true, breakLine: true, fontSize: 13, color: COLORS.text, paraSpaceAfter: 5 } }));
  slide.addText(formattedBullets, { x: 5.1, y: 1.62, w: 4.1, h: 3.4, valign: "top" });
}

// Two-Column Comparison Slide (e.g. Past vs Future, Bad vs Good)
function addComparisonSlide(category, title, leftTitle, leftBullets, rightTitle, rightBullets) {
  let slide = createBaseSlide(category, title);
  
  // Left Box
  slide.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 1.45, w: 4.3, h: 3.75, fill: { color: COLORS.grayLight }, line: { color: COLORS.border, width: 1 }, rectRadius: 0.05 });
  slide.addText(leftTitle, { x: 0.8, y: 1.6, w: 3.9, h: 0.4, fontSize: 16, bold: true, color: COLORS.muted, align: "center" });
  let lBullets = leftBullets.map(b => ({ text: b, options: { bullet: true, breakLine: true, fontSize: 13, color: COLORS.text, paraSpaceAfter: 6 } }));
  slide.addText(lBullets, { x: 0.8, y: 2.05, w: 3.9, h: 3.0, valign: "top" });
  
  // Right Box
  slide.addShape(pres.ShapeType.roundRect, { x: 5.1, y: 1.45, w: 4.3, h: 3.75, fill: { color: COLORS.coralLight }, line: { color: COLORS.borderCoral, width: 1 }, rectRadius: 0.05 });
  slide.addText(rightTitle, { x: 5.3, y: 1.6, w: 3.9, h: 0.4, fontSize: 16, bold: true, color: COLORS.primaryDark, align: "center" });
  let rBullets = rightBullets.map(b => ({ text: b, options: { bullet: true, breakLine: true, fontSize: 13, color: COLORS.text, paraSpaceAfter: 6 } }));
  slide.addText(rBullets, { x: 5.3, y: 2.05, w: 3.9, h: 3.0, valign: "top" });
}

// Three Horizontal Feature Cards Slide
function addThreeCardsSlide(category, title, cards) {
  let slide = createBaseSlide(category, title);
  
  let startX = 0.6;
  let cardW = 2.8;
  let gap = 0.2;
  
  cards.forEach((c, idx) => {
    let curX = startX + idx * (cardW + gap);
    let isHighlight = c.highlight;
    slide.addShape(pres.ShapeType.roundRect, { 
      x: curX, y: 1.45, w: cardW, h: 3.75, 
      fill: { color: isHighlight ? COLORS.coralLight : COLORS.grayLight }, 
      line: { color: isHighlight ? COLORS.borderCoral : COLORS.border, width: 1 }, 
      rectRadius: 0.05 
    });
    
    // Tag / Number
    slide.addText(c.badge || `0${idx+1}`, { x: curX + 0.2, y: 1.65, w: cardW - 0.4, h: 0.3, fontSize: 12, bold: true, color: isHighlight ? COLORS.primary : COLORS.muted });
    // Card Title
    slide.addText(c.title, { x: curX + 0.2, y: 1.95, w: cardW - 0.4, h: 0.45, fontSize: 15, bold: true, color: COLORS.text });
    // Bullets
    let bList = c.bullets.map(b => ({ text: b, options: { bullet: true, breakLine: true, fontSize: 12, color: COLORS.text, paraSpaceAfter: 6 } }));
    slide.addText(bList, { x: curX + 0.2, y: 2.45, w: cardW - 0.4, h: 2.6, valign: "top" });
  });
}

// Full-Width Bullet / Statement Slide
function addBulletSlide(category, title, bullets) {
  let slide = createBaseSlide(category, title);
  
  slide.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 1.45, w: 8.8, h: 3.75, fill: { color: COLORS.grayLight }, line: { color: COLORS.border, width: 1 }, rectRadius: 0.05 });
  let formattedBullets = bullets.map(b => ({ text: b, options: { bullet: true, breakLine: true, fontSize: 15, color: COLORS.text, paraSpaceAfter: 10 } }));
  slide.addText(formattedBullets, { x: 1.0, y: 1.75, w: 8.0, h: 3.2, valign: "top" });
}

// ---------------------- BUILD SLIDES ----------------------

// Slide 1: Cover
addCoverSlide(
  "Anthropic 2 万亿 IPO 的背后",
  "编码模型、Agentic 范式与 AGI 的真正破局",
  "ROADSHOW 2026"
);

// ==========================================
// PART I: 史上最大 IPO
// ==========================================
addSectionSlide("I", "史上最大 IPO", "资本奇观背后的真正定价逻辑");

// 1.1 历数曾经的“史上最大 IPO” (Slide 3 & 4)
addCustomBarChartSlide(
  "1.1 资本史上的分水岭",
  "历数曾经的“史上最大 IPO”：募资规模对比",
  "全球资本市场历史上最大 IPO 募资金额 (亿美元)",
  ["中国工商银行 (2006)", "中国农业银行 (2010)", "软银通信 (2018)", "阿里巴巴 (2014)", "沙特阿美 (2019)", "Anthropic (目标)"],
  [219, 221, 235, 250, 294, 200],
  320, " 亿",
  [
    "人类历史上的前五大 IPO，全部属于两类资产：资源垄断（沙特阿美石油）或传统金融与电商巨头",
    "沙特阿美以 $294 亿募资保持记录，挂牌估值达 $1.7 万亿",
    "Anthropic 计划募资约 $180-$200 亿，目标估值直指 $2.0 万亿美元",
    "这是人类历史上首个以‘2 万亿美元’作为挂牌起点的新股发行",
    "市场正在把对实体资源的溢价，全额转移给纯粹的智能底座"
  ]
);

addComparisonSlide(
  "1.1 资本史上的分水岭",
  "两万亿资产的本质变迁：从自然资源到算力智能",
  "沙特阿美 (2019)：实体资源垄断",
  [
    "商业基石：控制全球最大石油储量与开采权",
    "增长动力：绑定传统工业时代的实体能源消费",
    "边际成本：油田开发与物理运输成本居高不下",
    "本质：旧工业文明的皇冠，垄断物理世界的能量"
  ],
  "Anthropic (2026)：数字世界智能底座",
  [
    "商业基石：控制最前沿的自主代码执行与 Agentic 能力",
    "增长动力：全球数以亿计软件工作与脑力劳动的直接替代",
    "边际成本：Prompt Caching 与推理芯片压低单次调用成本",
    "本质：认知文明的新底座，承接一切可计算的劳动"
  ]
);

// 1.2 最快的 2 万亿 (Slide 5 & 6)
addCustomBarChartSlide(
  "1.2 最快的 2 万亿",
  "火箭跃迁：Anthropic 成立至今估值飙升历程",
  "Anthropic 各轮次投后估值增长 (亿美元，指数化展示)",
  ["A轮 (2021.05)", "B轮 (2022.04)", "战略轮 (2023.09)", "Amazon追加 (2024.03)", "G轮/Claude Code (2025.06)", "IPO 目标 (2026.11)"],
  [8.5, 14, 100, 184, 1800, 20000],
  20000, " 亿",
  [
    "成立仅 5 年，估值完成从 8.5 亿美元到 2 万亿美元的奇迹飞跃",
    "前三年处于学术研究与算力积累期，估值稳步提升至 $184 亿",
    "2025 年 6 月 Claude Code 与混合推理模型发布，单轮估值飙升至 $1,800 亿",
    "2026 年进入全行业规模化采购，直奔 2 万亿美元 IPO 估值",
    "估值飞跃的拐点，与模型‘自主写代码与跑终端’的能力完全重合"
  ],
  true
);

addCustomBarChartSlide(
  "1.2 最快的 2 万亿",
  "时间压缩法则：跨越 2 万亿美元市值的年限对比",
  "达成 2 万亿美元市值所耗费的时间 (年)",
  ["Microsoft (微软)", "Apple (苹果)", "NVIDIA (英伟达)", "Alphabet (谷歌)", "Anthropic (目标)"],
  [46, 44, 31, 26, 5],
  50, " 年",
  [
    "微软花费 46 年建立 Windows 与 Azure 生态帝国",
    "苹果花费 44 年构建起 iPhone 硬件与应用商店护城河",
    "英伟达经历 31 年图形与 AI 算力长跑，才登顶两万亿",
    "Anthropic 仅用 5 年时间，走完了传统科技巨头半个世纪的道路",
    "这不是常规的线性增长，而是‘智能代工’对传统人力的降维压缩"
  ]
);

// 1.3 何以 2 万亿？ (Slide 7 & 8)
addDataTextSlide(
  "1.3 何以 2 万亿？",
  "收入核爆：Claude Code 发布以来的 ARR 狂飙",
  [
    { stat: "$1,000 亿+", label: "2026 年 Q3 年化营收运行率 (ARR)" },
    { stat: "50x 增长", label: "Claude Code 发布 18 个月内 ARR 增幅" }
  ],
  [
    "2024 年底（Claude 3.5 时代），公司 ARR 仅约 10 亿美元",
    "2025 年 3 月发布 Claude Code 终端代理，成为全网‘Token 焚化炉’",
    "从一问一答的短文本，变为一次任务触发数百轮自主调用的长执行",
    "2026 年中正式超越 OpenAI 商业化收入，Q3 突破千亿美元年化大关",
    "事实证明：市场愿意为‘能够把事情彻底做完的执行者’买单"
  ]
);

addComparisonSlide(
  "1.3 何以 2 万亿？",
  "估值逻辑锚点：18-20 倍倍数与杰文斯悖论",
  "资本乘数：合理的 18-20x 估值中枢",
  [
    "以 $1000 亿-$1200 亿美元 ARR 计算，两万亿对应 16.7x - 20x 运行率倍数",
    "相比传统 SaaS 巅峰期 30-50x PS，该倍数已充分吸收增长预期",
    "企业级合同留存率 (NDR) 高达 180%，开发者续约率近乎 100%",
    "市场给出的不是泡沫估值，而是高确定性基础设施的公允定价"
  ],
  "杰文斯悖论：单价暴跌反而催生天量需求",
  [
    "Prompt Caching 带来 90% 折扣，Token 单价大幅下调",
    "单次推理便宜了，但总消费量却爆炸了 100 倍以上：",
    "过去做不起的自动化脚本，现在可以随叫随到",
    "过去每月抽查一次的数据，现在每天跑全量巡检",
    "单位成本的暴跌，彻底击穿了所有非自动化工作的防线"
  ]
);

// ==========================================
// PART II: 不仅仅是程序员的梦中情模
// ==========================================
addSectionSlide("II", "不仅仅是程序员的梦中情模", "从代码补全助手，到全自主数字员工");

// 2.1 历代 Claude 模型在 coding benchmark 上的统治力 (Slide 10, 11, 12)
addCustomBarChartSlide(
  "2.1 统治力进化",
  "历代 Claude 模型在 SWE-bench Verified 上的跃迁",
  "真实开源工程 Bug 独立修复成功率 (%)",
  ["Claude 3 Opus", "Claude 3.5 Sonnet v1", "Claude 3.5 Sonnet v2", "Claude 3.7 Sonnet", "Claude 4.5 Sonnet", "Claude Sonnet 5.5"],
  [33.4, 49.0, 53.7, 70.3, 82.4, 98.1],
  100, "%",
  [
    "SWE-bench Verified 选取真实 GitHub 开源仓库的复杂 Bug",
    "两年前 Claude 3 Opus 仅能达到 33.4% 的基础水平",
    "Claude 3.7 引入思考模式突破 70% 工业级可用门槛",
    "最新发布的 Claude Sonnet 5.5 取得 98.1% 的压倒性成绩",
    "这意味着绝大多数常见工程缺陷，模型无需人类参与即可自行闭环修复"
  ]
);

addDataTextSlide(
  "2.1 统治力进化",
  "决胜终端：Terminal-Bench 为什么是最高标准？",
  [
    { stat: "70.6%", label: "Claude Sonnet 5.5 真实终端成功率" },
    { stat: "No. 1", label: "全球唯一突破 70% 的前沿模型" }
  ],
  [
    "SWE-bench 考查的是‘会不会改代码’，而 Terminal-bench 考查的是‘能不能把任务做完’",
    "包含在 Linux 终端中配置依赖、解析报错、管理进程与交互式调试",
    "竞品现状：GPT-6 Astra 仅 58.2%，Gemini 3.1 Pro 仅 46.2%",
    "Terminal-bench 70%+ 代表 AI 第一次真正具备了人类初中级运维与研发的执行能力",
    "不再是纸上谈兵的代码补全，而是全天候自治的环境操作员"
  ]
);

addComparisonSlide(
  "2.1 统治力进化",
  "经济账本：解决同一个 Bug 的成本与效率对比",
  "资深工程师 (人类)",
  [
    "平均耗时：半个工作日 (3-4 小时)",
    "综合用人成本：约 $150 - $200 美元",
    "工作模式：需要上下文切换、看文档、反复打断",
    "并发上限：单人同时只能集中精力处理 1 个缺陷"
  ],
  "Claude Code (智能体)",
  [
    "平均耗时：3 - 5 分钟 (TPS > 120 极速推演)",
    "Token 推理成本：约 $0.50 美元 (Prompt Caching 后)",
    "工作模式：自动看栈、自动修改、自动跑测试套件验证",
    "并发上限：数千个 Agent 舰队全天候并行推进"
  ]
);

// 2.2 Claude Code 代表的 agentic 新范式 (Slide 13, 14, 15)
addThreeCardsSlide(
  "2.2 Agentic 新范式",
  "范式转移：从‘聊天生成代码’到‘全自动闭环代理’",
  [
    {
      badge: "Generation 1",
      title: "Chatbot (一问一答)",
      bullets: [
        "局限在网页聊天框内",
        "人问一句，AI 答一段代码片段",
        "需要人类手动复制、粘贴到项目并测试",
        "一旦报错，需要人再次截图问 AI"
      ]
    },
    {
      badge: "Generation 2",
      title: "Copilot (补全助手)",
      bullets: [
        "嵌入 IDE 编辑器中",
        "根据光标上下文单行或函数预测",
        "人依然是整套工作流的主驾驶员",
        "无法跨越文件或理解多服务架构"
      ]
    },
    {
      badge: "Generation 3",
      title: "Agentic (闭环代理)",
      highlight: true,
      bullets: [
        "直接驻留在黑底白字的命令行 (CLI)",
        "自主读取代码库、修改文件、运行编译",
        "根据 Exit Code 自主纠错重试，直至通过",
        "人类只需审查最终产出的 Git Diff"
      ]
    }
  ]
);

addComparisonSlide(
  "2.2 Agentic 新范式",
  "办公室的真相：每个人都在充当系统的“人肉胶水”",
  "旧世界：被困在 UI 里的数据搬运工",
  [
    "从业务系统导出 Excel，手动进行多表 VLOOKUP",
    "把数据复制进分析软件制作图表，再截图贴进汇报文档",
    "打开审批流后台，逐个核对纸质发票扫描件",
    "本质：人不是在使用一套完整软件，而是用自己把不相通的软件粘起来"
  ],
  "新范式：用 Code 处理一切可计算的部分",
  [
    "任何业务流程本质上都是一段‘未被写出的程序’",
    "人类只需用自然语言交代终极业务目标",
    "Agent 在后台实时生成 Python 脚本并自动执行：",
    "脚本查库、脚本洗数、脚本调接口、脚本发送通知",
    "无形的代码在后台秒级缝合一切，不再需要任何人肉中转"
  ]
);

addComparisonSlide(
  "2.2 Agentic 新范式",
  "商业实战：非程序员如何用 Code 完成降维打击？",
  "HR / 行政：告别传统招聘系统",
  [
    "过去：在招聘后台挨个点击 PDF 简历，肉眼比对技能点",
    "CLI 实战：在终端敲入‘扫描本地 300 份简历，按岗位 JD 评分并导出排序 Excel’",
    "结果：Agent 2 分钟写完 PDF 提取脚本并执行，完美交付报表"
  ],
  "财务 / 运营：终结手工对账折磨",
  [
    "过去：双开表格手动校对流水，遇到异常账目反复扯皮",
    "CLI 实战：输入‘交叉对比销售账单与银行流水，差额超 $100 自动发飞书群报警’",
    "结果：完全绕过任何笨重 SaaS 界面，一行命令搞定企业级审计"
  ]
);

// 2.3 从 MCP 到 skills (Slide 16, 17, 18)
addComparisonSlide(
  "2.3 从 MCP 到 Skills",
  "打破软件孤岛：Model Context Protocol (MCP) 的诞生",
  "MCP 诞生前：被困在孤岛上的大脑",
  [
    "每个大模型都是封闭在沙箱里的‘缸中之脑’",
    "无法访问私有数据：Git、本地文件、内部数据库、SaaS 接口",
    "每个厂商重复开发专有插件系统，生态四分五裂",
    "企业难以安全、合规地将核心系统授权给 AI 调用"
  ],
  "MCP 架构：为 AI 打造标准化的“数据吸管”",
  [
    "Anthropic 开源的通用上下文协议 (Model Context Protocol)",
    "一头连接 AI 大模型，一头连接企业无数现有服务",
    "即插即用：本地文件系统、GitHub、Postgres、Slack、飞书",
    "AI 可以根据任务需要，像插拔 USB 设备一样自主调取数据"
  ]
);

addComparisonSlide(
  "2.3 从 MCP 到 Skills",
  "从 MCP 到 Skills：从“连接工具”升维到“封装经验”",
  "MCP 协议：提供基础连通能力 (API / IO)",
  [
    "定义了数据如何传输、接口如何暴露",
    "相当于给智能体配上了手、脚和眼睛",
    "解决了‘能连上系统’的硬件通信问题",
    "每次执行依然依赖模型当场的发散式推理"
  ],
  "Skills 架构：封装可传承的专家经验 (SOP)",
  [
    "把一整套业务标准操作流程 (SOP)、业务规则与脚本固化",
    "支持跨任务复用、团队共享与自主进化",
    "AI 不仅会调 API，更学会了资深员工的‘办事套路’",
    "从单纯的‘工具调用者’进化为拥有特定岗位资质的‘熟练工’"
  ]
);

addThreeCardsSlide(
  "2.3 从 MCP 到 Skills",
  "潮流引领者：Anthropic 如何重塑智能体基础设施？",
  [
    {
      badge: "标准制定",
      title: "定义协议标准",
      bullets: [
        "拒绝闭门造车，主动开源 MCP 协议规范",
        "成为 Linux 基金会及开源社区事实上的工业标杆",
        "打破单一云厂商的专有接口壁垒"
      ]
    },
    {
      badge: "生态汇聚",
      title: "开发者生态引力",
      highlight: true,
      bullets: [
        "全球顶级开发者与企业主动为 MCP 编写 Connectors",
        "从数据库厂商到生产力工具全线兼容",
        "构建了 OpenAI 无法通过闭源策略复制的生态护城河"
      ]
    },
    {
      badge: "架构进化",
      title: "Agent 原生演进",
      bullets: [
        "率先验证：Agentic 系统的核心不是模型多大，而是环境交互有多顺畅",
        "为整个 AI 行业指明了从 LLM 到 Agent 的落地路径"
      ]
    }
  ]
);

// 2.4 反例与正例 (Slide 19, 20, 21)
addDataTextSlide(
  "2.4 赛道验证",
  "反例：Google Gemini 3.0/3.1 Pro 的滑铁卢",
  [
    { stat: "38.0%", label: "Terminal-Bench 4.0 挣扎在及格线" },
    { stat: "大逃亡", label: "Cursor 与独立开发者抛弃 Gemini" }
  ],
  [
    "战略失误：过分迷恋原生多模态视频/音频，轻视终端底层执行场景",
    "技术硬伤：高并发下频繁爆发 Malformed Function Call，代码惰性严重",
    "生态倒退：强行下线轻量独立的 CLI 工具，迫使开发者绑定臃肿云控制台",
    "现实惩罚：在顶级开发工具（Cursor、Windsurf）中，默认主模地位被全盘蚕食",
    "教训深刻：一个无法稳定跑通终端命令的模型，再聪明也成不了生产力"
  ]
);

addBulletSlide(
  "2.4 赛道验证",
  "正例：OpenAI 的战略断腕与知耻后勇",
  [
    "【战略清醒】意识到纯思维链（o3/o4 系列）在复杂多轮工程落地中难以闭环，果断放缓纯推理演进",
    "【全面押注】重整研发资源，全面押注具备深度代码执行能力与极速吞吐的 GPT-6 (Sol) 核心模型",
    "【争夺终端】紧急上线面向开发者的 Codex CLI 交互系统，并推出全天候自治体“Dots”",
    "【行业结论】OpenAI 的紧急调头证明了同一个事实：闲聊与解题是虚妄的，得‘代码执行者’得天下"
  ]
);

addComparisonSlide(
  "2.4 赛道验证",
  "行业分水岭：为什么“代码执行力”成了唯一生死线？",
  "会说漂亮话的自然语言模型",
  [
    "文字对话充满了模糊性，缺乏客观标准",
    "极易产生‘言之凿凿’的概率性幻觉",
    "无法感知外部计算环境的真实状态",
    "最终只能停留在咨询、陪聊与文本摘要"
  ],
  "具备代码闭环的 Agentic 编码模型",
  [
    "每一行代码都要接受编译器与单元测试的无情拷打",
    "Exit Code 0 是真实世界最坚固的客观反馈",
    "能在计算机环境中自行建立沙箱、尝试、试错",
    "成为能够真正代人类行使生产责任的数字员工"
  ]
);

// ==========================================
// PART III: 编码模型与 AGI
// ==========================================
addSectionSlide("III", "编码模型与 AGI", "智能的终极跃迁：制造工具与自我进化");

// 3.1 什么是 AGI？ (Slide 23, 24)
addThreeCardsSlide(
  "3.1 什么是 AGI？",
  "剥离玄学迷雾：重新定义 AGI 的三大硬核支柱",
  [
    {
      badge: "支柱一",
      title: "持续学习能力",
      bullets: [
        "摆脱训练周期的停滞约束",
        "在与真实环境的持续交互中动态吸收新知识",
        "在错误堆栈中提炼规律，不断沉淀长效记忆"
      ]
    },
    {
      badge: "支柱二",
      title: "自主制造与使用工具",
      highlight: true,
      bullets: [
        "面对未知任务无需人类预先编写接口",
        "自主阅读说明书、现场编写调用代码、现场造工具",
        "这是人类区别于动物的核心分水岭"
      ]
    },
    {
      badge: "支柱三",
      title: "跨任务自我迭代",
      bullets: [
        "无需人类裁判在场提供单步反馈",
        "在沙箱环境中进行成千上万次自我对抗与代码重构",
        "实现逻辑与执行能力的自主指数演进"
      ]
    }
  ]
);

addComparisonSlide(
  "3.1 什么是 AGI？",
  "自治滑杆的右移：人类与智能协作关系的重构",
  "过去（人类主驾驶）",
  [
    "Level 1: 提示建议（Prompting）—— AI 仅作为参考词典",
    "Level 2: 人机协同（Copilot）—— 人类决定每一步，AI 辅助输入",
    "局限：人类的大脑依然是整个交付流程的绝对瓶颈",
    "只要人类没有空，整个生产流水线就会彻底停滞"
  ],
  "未来（数字员工自治）",
  [
    "Level 3: 任务内闭环（Agentic）—— 接受模糊目标，自主规划并执行完毕",
    "Level 4: 无人值守自治（Autonomous Fleet）—— 智能体舰队 24 小时自我运转",
    "变革：人类从‘一线操作工人’升维为‘目标定义者与最终验收官’"
  ]
);

// 3.2 为什么说编码模型是 AGI 的敲门砖？ (Slide 25, 26, 27)
addComparisonSlide(
  "3.2 AGI 的敲门砖",
  "智力的杠杆：会写代码 = 能够自主制造任何智能工具",
  "人类文明的进化跃迁",
  [
    "南方古猿与黑猩猩的分野，始于人类学会打造第一把石斧",
    "制造工具的能力，让人类突破了肉体力量的生理极限",
    "工具制造工具，推动了蒸汽机、内燃机与计算机的爆发"
  ],
  "人工智能的奇点跃迁",
  [
    "如果 AI 只会说话，它永远只是一个‘被困在屏幕里的聊天客’",
    "但当 AI 掌握了编码，它便掌握了在数字世界制造一切工具的元能力：",
    "缺数据？现场写爬虫；缺分析？现场写脚本；接口不通？现场写适配器",
    "代码就是 AI 延伸向整个外部世界的数字义肢与石斧"
  ]
);

addComparisonSlide(
  "3.2 AGI 的敲门砖",
  "连接物理世界：Exit Code 0 与确定性的现实反馈",
  "自然语言的泥潭：缺乏绝对真理",
  [
    "文学、哲学或闲聊没有绝对的对错标准",
    "AI 容易在人类虚伪的迎合中陷入自欺欺人的幻觉",
    "依赖极其昂贵且带有偏见的人类反馈强化学习 (RLHF)",
    "无法在完全脱离人类介入的情况下实现大规模自我进化"
  ],
  "代码执行的冷酷法则：无情却客观",
  [
    "一段代码要么通过编译，要么崩溃报错，毫无妥协余地",
    "Exit Code 0 是数字世界里最无情、也最可靠的客观反馈",
    "让模型可以在沙箱中以每秒万次的速度自主试错与自我惩罚",
    "通过 API 和传感器，将这种严密的确定性直接延伸到外部物理世界"
  ]
);

addComparisonSlide(
  "3.2 AGI 的敲门砖",
  "Software 3.0：传统软件开发的终结与液态能力",
  "Software 1.0 & 2.0 (固态的盒装软件)",
  [
    "1.0 时代由程序员手工逐行编写 C++/Java 逻辑",
    "2.0 时代由数据驱动训练出深度神经网络权重",
    "共性：软件依然是一个固化的‘产品’，必须经历漫长立项、排期与交付",
    "业务的想法永远被研发排期的产能瓶颈死死卡住"
  ],
  "Software 3.0 (液态的即时软件能力)",
  [
    "软件不再是你购买的一款软件产品，而是随叫随到的液态能力",
    "为了一个特定临时活动或跨系统对账，现场用自然语言生成专属工具",
    "使用完毕后随时丢弃或就地重构",
    "代码不再是固化在磁盘里的资产，而是即用即抛的业务执行流"
  ]
);

// 3.3 AGI 还有多远？ (Slide 28, 29, 30)
addDataTextSlide(
  "3.3 AGI 还有多远？",
  "终极护城河：递归自我演化 (RSI) 已经真实运转",
  [
    { stat: "26%", label: "Anthropic 内部研发管线由 Claude 全权领导" },
    { stat: "8x", label: "模型架构迭代与交付速度提升倍数" }
  ],
  [
    "最震撼的不是 Claude 能替外部客户写业务代码",
    "而是 Claude 正在全力编写代码，训练并打磨下一代更强大的 Claude",
    "自动排查 TPU/GPU 集群通信故障、自动生成数以亿计的高难度合成训练集",
    "自动构建极度复杂的红蓝军攻防对抗测试沙箱",
    "当智能开始作为生产要素制造更高阶的智能，人类已被甩入指数加速通道"
  ]
);

addComparisonSlide(
  "3.3 AGI 还有多远？",
  "双螺旋加速：商业正循环与智力自演进的碰撞",
  "商业飞轮 (资金与算力基石)",
  [
    "千亿美元 ARR 提供充沛现金流",
    "不再依赖外部风险投资的无底洞输血",
    "数十万台顶级计算集群 24 小时满载运转",
    "构建起资本市场上坚不可摧的商业城墙"
  ],
  "研发飞轮 (智能制造智能)",
  [
    "现有高阶模型作为研发员接管工程脏活累活",
    "人类顶级科学家专注于提出假设与架构突破",
    "有效实验吞吐量爆发式提升 10 倍以上",
    "下一代模型迭代周期从 12 个月急剧压缩至 3 个月"
  ]
);

addThreeCardsSlide(
  "3.3 AGI 还有多远？",
  "临界点与时间表：未来 3-5 年的智能演化路线图",
  [
    {
      badge: "2025 - 2026",
      title: "全自主数字员工落地",
      bullets: [
        "编码模型在终端环境全面成熟",
        "白领办公室工作的大规模‘代码化接管’",
        "传统席位制 SaaS 遭遇剧烈价值重估"
      ]
    },
    {
      badge: "2027 - 2028",
      title: "RSI 跨越临界视界",
      highlight: true,
      bullets: [
        "AI 承担 80% 以上算法与算子优化工作",
        "在数学、芯片设计、生物制药领域跨界自制工具",
        "软件工程全面迈入无人值守自治时代"
      ]
    },
    {
      badge: "2029 及以后",
      title: "全自主 AGI 降临",
      bullets: [
        "AI 能够全流程自主推进前沿科学探索",
        "与物理世界机器人与工业制造完全打通",
        "人类社会整体生产力范式发生不可逆重构"
      ]
    }
  ]
);

// ==========================================
// 尾声与抉择 (Slide 31, 32, 33)
// ==========================================
addComparisonSlide(
  "尾声与抉择",
  "终极追问：当执行能力无限廉价，稀缺的究竟是什么？",
  "正在被无情抛弃的旧技能树",
  [
    "熟练点击各类复杂企业软件后台的操作技巧",
    "在各孤立系统之间充当“人肉数据搬运工”",
    "只会机械“执行”由别人规定好的既定工作流",
    "靠信息不对称与流程繁琐维持的伪工作"
  ],
  "新时代最稀缺的超级个人资产",
  [
    "对真实业务痛点与商业价值的深刻洞察",
    "极其清晰的计算思维与系统架构拆解力",
    "明确定义：目标是什么、约束是什么、怎样才算做对",
    "从单纯的“软件操作员”晋升为“数字舰队的统帅”"
  ]
);

addBulletSlide(
  "尾声与抉择",
  "历史的答卷：新时代的组织变革",
  [
    "这 2 万亿美元的 IPO 目标，绝不是一场虚妄的资本狂欢，",
    "而是人类文明对‘全自动脑力劳动时代’做出的第一次庄严定价。",
    "",
    "代码，仅仅是 AGI 降临物理世界的第一块垫脚石；",
    "而由编码模型驱动的无人值守自治，才是不可阻挡的滚滚洪流。",
    "",
    "当你的工位旁已经站着一支懂代码、会造工具、24小时待命的数字团队——",
    "你还会按照过去的方式，组织你的工作、组织你的公司吗？"
  ]
);

// Slide 33: Q&A
addCoverSlide(
  "Q & A",
  "感谢聆听 · 共同见证 AGI 时代大幕拉开",
  "THE END"
);

// Save presentation
pres.writeFile({ fileName: "Anthropic_2T_IPO_Presentation.pptx" }).then(fileName => {
  console.log(`Successfully generated ${fileName}`);
}).catch(err => {
  console.error("Error generating presentation:", err);
});
