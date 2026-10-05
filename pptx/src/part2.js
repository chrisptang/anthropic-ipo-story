const { C, FONT, MX, CW, W, H, bg, chrome, title, panel, rect, line, txt, chip, kpi, hbar, vbar, bullets, numItem, arrow, table, divider, notes, chart } = require("./theme");

// story spine for the OpenAI arc — a persistent 4-step progress strip under the subtitle
function spine(s, active) {
  const steps = ["四连败 · 失去开发者", "Code Red · 内部清算", "All-in 追赶", "收敛，但没追上"];
  const sw = CW / 4;
  steps.forEach((t, i) => {
    const x = MX + i * sw;
    const on = i === active;
    s.addShape("rect", { x, y: 1.7, w: sw - 0.1, h: 0.26, fill: { color: on ? C.CORAL : C.PANEL2 }, line: { type: "none" }, rectRadius: 0.05 });
    txt(s, (i + 1) + "　" + t, { x, y: 1.7, w: sw - 0.1, h: 0.26, fontSize: 9, bold: on, color: on ? "FFFFFF" : C.FAINT, align: "center", valign: "middle" });
  });
}

// ===================== Slide 9: Part II divider =====================
function div2(pres) {
  return divider(pres, 9, "02", "产业重构与格局战争", "PART II · INDUSTRY RESTRUCTURING & THE THRONE WAR",
    "旧世界的万亿市值正在蒸发；新王座前，OpenAI 知耻后勇、Google 全线溃败。",
    ["2.1 SaaSpocalypse\n2.2 席位制死锁", "2.3 即时软件\n2.4 MCP 论战", "2.5 OpenAI 知耻后勇\n2.6 Gemini 衰落"]);
}

// ===================== Slide 10: SaaSpocalypse =====================
function s10(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.1 资本大屠杀", "SaaSpocalypse：万亿美元市值大迁徙", "六大 SaaS 标杆自历史高点的最大回撤（2024–2026）");
  const dd = [
    ["Atlassian", 70.5], ["Snowflake", 51.1], ["ServiceNow", 40.4],
    ["Adobe", 35.7], ["Workday", 33.3], ["Salesforce", 30.8],
  ];
  dd.forEach((d, i) => hbar(s, MX, 1.95 + i * 0.72, 7.4, d[0], d[1], 75, C.RED, "-" + d[1] + "%", { labelW: 1.7, valW: 1.0, fs: 11 }));
  panel(s, 8.5, 1.9, 4.2, 4.7);
  txt(s, "六家合计蒸发", { x: 8.75, y: 2.1, w: 3.7, h: 0.3, fontSize: 11.5, color: C.MUT, bold: true });
  txt(s, ">$4,000 亿", { x: 8.75, y: 2.45, w: 3.7, h: 0.6, fontSize: 34, bold: true, color: C.RED });
  line(s, 8.75, 3.2, 3.7, 0, C.HAIR);
  txt(s, "全行业（BVP Cloud）", { x: 8.75, y: 3.4, w: 3.7, h: 0.3, fontSize: 11.5, color: C.MUT, bold: true });
  txt(s, ">$1.2 万亿", { x: 8.75, y: 3.72, w: 3.7, h: 0.6, fontSize: 34, bold: true, color: C.RED });
  line(s, 8.75, 4.5, 3.7, 0, C.HAIR);
  txt(s, "估值体系整体降维", { x: 8.75, y: 4.7, w: 3.7, h: 0.3, fontSize: 11.5, color: C.MUT, bold: true });
  txt(s, "EV/Sales 中位数 18.5x → 5.6x", { x: 8.75, y: 5.0, w: 3.7, h: 0.4, fontSize: 15, bold: true, color: C.GOLD });
  txt(s, "蒸发的市值几乎分文不差地重计入了底层模型公司的估值。", {
    x: 8.75, y: 5.55, w: 3.7, h: 0.9, fontSize: 10.5, color: C.MUT,
  });
  chrome(s, 10, "PART II · 2.1 SaaSpocalypse");
  notes(s, "SaaS 大浩劫：回撤条形图 + 蒸发总额 + 估值倍数降维，一页讲完失血侧。");
}

// ===================== Slide 11: 席位制死锁 + Agentforce =====================
function s11(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.2 席位制死锁", "ARR = 人头 × 单价：被连根拔起的增长公式", "Agent 让企业在人头零增长的前提下业绩翻倍——坐席费模型失去自然增长动力");
  panel(s, MX, 1.95, 5.85, 2.3);
  txt(s, "传统 SaaS 增长公式", { x: MX + 0.25, y: 2.15, w: 5.4, h: 0.3, fontSize: 12, color: C.MUT, bold: true });
  txt(s, "ARR = 员工数 × 席位单价", { x: MX + 0.25, y: 2.55, w: 5.4, h: 0.6, fontSize: 22, bold: true, color: C.TXT });
  txt(s, "企业扩张一倍 → 坐席多买一倍。当 AI 冻结编制，等式第一项直接停转，NDR 跌破 100%。", {
    x: MX + 0.25, y: 3.2, w: 5.4, h: 0.9, fontSize: 10.5, color: C.MUT,
  });
  panel(s, 6.85, 1.95, 5.85, 2.3);
  txt(s, "Salesforce Agentforce 的困兽之斗", { x: 7.1, y: 2.15, w: 5.4, h: 0.3, fontSize: 12, color: C.RED, bold: true });
  txt(s, "$2 / 次对话", { x: 7.1, y: 2.55, w: 5.4, h: 0.55, fontSize: 22, bold: true, color: C.RED });
  txt(s, "结果制计费听起来性感：但 Agent 每解决 80% 售后咨询，CFO 第一件事就是砍掉 500 个 $150/月的坐席。", {
    x: 7.1, y: 3.15, w: 5.4, h: 1.0, fontSize: 10.5, color: C.MUT,
  });
  panel(s, MX, 4.5, 12.09, 2.0, { fill: C.PANEL2 });
  txt(s, "左口袋倒右口袋的坍塌算术", { x: MX + 0.25, y: 4.7, w: 6, h: 0.3, fontSize: 12.5, bold: true, color: C.GOLD });
  txt(s, "砍掉 500 个坐席  =  −$150 × 500 × 12 = −$90 万/月（确定性高毛利年费）", {
    x: MX + 0.25, y: 5.15, w: 11.5, h: 0.35, fontSize: 12, color: C.TXT,
  });
  txt(s, "换回 Agent 计费   =  零星 $2/次调用——收入断崖远大于增量收入。创新者的窘境，现场版。", {
    x: MX + 0.25, y: 5.6, w: 11.5, h: 0.6, fontSize: 11, color: C.MUT,
  });
  chrome(s, 11, "PART II · 2.2 席位制死锁");
  notes(s, "席位制公式瓦解 + Agentforce 自噬算术。");
}

// ===================== Slide 12: JIT Software =====================
function s12(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.3 即时软件", "Just-In-Time Software：边际制造成本归零", "从「买软件」到「生成软件」");
  panel(s, MX, 1.95, 5.85, 3.3);
  txt(s, "旧范式 · 采购", { x: MX + 0.25, y: 2.15, w: 5.4, h: 0.3, fontSize: 13, bold: true, color: C.RED });
  const oldSteps = ["提出需求", "招标选型 3 个月", "采购实施 6 个月", "付费 $500,000", "培训 + 忍受死板系统"];
  oldSteps.forEach((st, i) => {
    txt(s, st, { x: MX + 0.25, y: 2.6 + i * 0.5, w: 5.2, h: 0.4, fontSize: 11, color: C.MUT });
    if (i < oldSteps.length - 1) txt(s, "→", { x: MX + 0.25, y: 2.86 + i * 0.5, w: 0.4, h: 0.3, fontSize: 10, color: C.FAINT });
  });
  panel(s, 6.85, 1.95, 5.85, 3.3);
  txt(s, "新范式 · 生成（20 分钟）", { x: 7.1, y: 2.15, w: 5.4, h: 0.3, fontSize: 13, bold: true, color: C.GREEN });
  const newSteps = ["「要一个跨部门大额报销工单流」", "Claude 自动写 FastAPI + React", "挂载接口 / 部署内部 K8s", "即刻使用 · 业务变了就再生成"];
  newSteps.forEach((st, i) => {
    txt(s, st, { x: 7.1, y: 2.6 + i * 0.5, w: 5.4, h: 0.4, fontSize: 11, color: C.TXT });
    if (i < newSteps.length - 1) txt(s, "→", { x: 7.1, y: 2.86 + i * 0.5, w: 0.4, h: 0.3, fontSize: 10, color: C.FAINT });
  });
  panel(s, MX, 5.5, 12.09, 1.25, { fill: C.PANEL2 });
  txt(s, "终局推演：除国家级财务账本外，全行业 ~80% 横向功能性 SaaS（审批/看板/报表/营销自动化）正在被即时软件全量平替。", {
    x: MX + 0.25, y: 5.75, w: 11.6, h: 0.8, fontSize: 12, bold: true, color: C.GOLD,
  });
  chrome(s, 12, "PART II · 2.3 即时软件");
  notes(s, "JIT 软件：采购 9 个月 vs 生成 20 分钟的对照。");
}

// ===================== Slide 13: MCP 黄昏三软肋 =====================
function s13(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.4 架构大论战", "MCP 是否走向黄昏？三大软肋", "2024 年的「AI 界 USB-C」，两年后被开发者重新审视");
  const cards = [
    ["软肋一 · Schema 隐形 Token 税", C.RED,
      "每个 MCP Server 要把全部 API Schema 预注入 System Prompt：单个 GitHub/Jira MCP 就占 2,000–5,000 tokens，挂 10 个 = 会话未开始先烧 3 万 tokens。"],
    ["软肋二 · Unix 管道降维打击", C.TEAL,
      "gh / aws / psql / jq 是 50 年工业淬炼的现成工具。一行 gh pr list | jq：零 Schema、200ms、<50 tokens——繁琐的 MCP 包装显得过度工程化。"],
    ["软肋三 · Claude Code 身体力行", C.CORAL,
      "Anthropic 自家杀手级产品的底座极其精简：受限 Bash + 文件编辑器 + ripgrep。它从没逼用户去配几十个 MCP Server。"],
  ];
  cards.forEach((cd, i) => {
    const x = MX + i * 4.12;
    panel(s, x, 1.95, 3.87, 3.5);
    txt(s, cd[0], { x: x + 0.22, y: 2.15, w: 3.4, h: 0.6, fontSize: 12.5, bold: true, color: cd[1] });
    txt(s, cd[2], { x: x + 0.22, y: 2.8, w: 3.45, h: 2.4, fontSize: 10.5, color: C.MUT });
  });
  txt(s, "gh pr list --state open --json number,title | jq '.[] | select(.author.login==\"alice\")'", {
    x: MX, y: 5.7, w: CW, h: 0.4, fontSize: 11, color: C.TEAL, fontFace: "Courier New", align: "center",
  });
  txt(s, "一行 Unix 管道：零 Schema 预加载 · 200ms · <50 tokens", { x: MX, y: 6.15, w: CW, h: 0.3, fontSize: 10, color: C.FAINT, align: "center" });
  chrome(s, 13, "PART II · 2.4 MCP 黄昏");
  notes(s, "MCP 黄昏论战的三大软肋。");
}

// ===================== Slide 14: 双环生态 =====================
function s14(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.4 架构大论战", "辩证终局：双环生态法则", "MCP 的「黄昏」是工具幻觉破灭；「黎明」是企业合规网关的加冕");
  panel(s, MX, 1.95, 5.85, 3.9);
  txt(s, "内环 · CLI / Terminal 原生", { x: MX + 0.25, y: 2.15, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.TEAL });
  txt(s, "The Action Engine", { x: MX + 0.25, y: 2.5, w: 5.4, h: 0.3, fontSize: 10.5, color: C.FAINT, italic: true });
  bullets(s, MX + 0.25, 2.95, 5.4, 2.7, [
    { t: "使用者：本地开发者、Claude Code、单机任务", fs: 10.5 },
    { t: "权限：几乎不受限的本地 Shell", fs: 10.5 },
    { t: "开销：零 Schema 预加载、Token 极低", fs: 10.5 },
    { t: "风险：高危提权——禁入核心生产库", fs: 10.5, color: C.RED },
  ]);
  panel(s, 6.85, 1.95, 5.85, 3.9);
  txt(s, "外环 · MCP Gateway 网关", { x: 7.1, y: 2.15, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.GOLD });
  txt(s, "The Security Perimeter", { x: 7.1, y: 2.5, w: 5.4, h: 0.3, fontSize: 10.5, color: C.FAINT, italic: true });
  bullets(s, 7.1, 2.95, 5.4, 2.7, [
    { t: "使用者：Fortune 500 IT 架构师、合规部门", fs: 10.5 },
    { t: "权限：OAuth 2.0 / RBAC / 只读写审计", fs: 10.5 },
    { t: "开销：预加载结构化接口，类型安全", fs: 10.5 },
    { t: "定位：SAP / Salesforce 的防火墙——不可能给外部 Agent 开 sudo psql", fs: 10.5, color: C.GREEN },
  ]);
  txt(s, "Anthropic 同时统治终端 CLI（Claude Code）与企业协议标准（MCP）——两端市场两面合围。", {
    x: MX, y: 6.1, w: CW, h: 0.4, fontSize: 12.5, bold: true, color: C.CORAL, align: "center",
  });
  chrome(s, 14, "PART II · 2.4 双环生态");
  notes(s, "双环生态：CLI 执行引擎 + MCP 安全边界。");
}

// ===================== Slide 15: OpenAI 耻辱纪元（故事弧 1/4） =====================
function s15(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.5 OpenAI 知耻后勇", "耻辱纪元：四幕连失", "曾 16 倍领先的公司，如何在 18 个月内失去开发者世界");
  spine(s, 0);
  const acts = [
    ["第一幕 · 2024.06", "静默政变", "Claude 3.5 Sonnet 发布后，Cursor/Aider 数周内把默认模型集体切走。", "编码 Token 份额\n70% → <40%", C.MUT],
    ["第二幕 · 2025.02", "珍珠港", "Claude Code 两个月成为开发者标配；OpenAI 的资源当时在 Sora 和 Operator。", "终端 Agent 赛道\nOpenAI 缺席", C.CORAL],
    ["第三幕 · 2025.04–07", "Windsurf 崩盘", "$30 亿收购因微软 IP 条款卡壳流产；Google $24 亿反向雇佣其 CEO，Cognition 72 小时捡漏。", "想买没买到\n人财两空", C.RED],
    ["第四幕 · 2025.08", "GPT-5 遇冷", "SWE-bench 74.9% 低于预期，路由误判叠加 4o 下架抗议——社区宣判：会做聊天，不会做工程。", "旗舰发布\n口碑翻车", C.RED],
  ];
  acts.forEach((a, i) => {
    const x = MX + i * 3.03;
    panel(s, x, 2.25, 2.83, 4.15);
    txt(s, a[0], { x: x + 0.18, y: 2.42, w: 2.5, h: 0.3, fontSize: 9.5, bold: true, color: a[4] });
    txt(s, a[1], { x: x + 0.18, y: 2.75, w: 2.5, h: 0.45, fontSize: 15, bold: true, color: C.TXT });
    txt(s, a[2], { x: x + 0.18, y: 3.3, w: 2.5, h: 1.9, fontSize: 9.5, color: C.MUT });
    line(s, x + 0.18, 5.25, 2.45, 0, C.HAIR);
    txt(s, a[3], { x: x + 0.18, y: 5.4, w: 2.5, h: 0.85, fontSize: 11, bold: true, color: a[4] === C.MUT ? C.RED : a[4] });
  });
  chrome(s, 15, "PART II · 2.5 OpenAI 知耻后勇");
  notes(s, "耻辱纪元四幕：政变/珍珠港/Windsurf/GPT-5。故事弧第一步。");
}

// ===================== Slide 16: Code Red（故事弧 2/4） =====================
function s16(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.5 OpenAI 知耻后勇", "Code Red：内部清算与认错式转身", "2025.12 内部备忘录：推迟广告与电商，全公司资源压向 Agentic Coding");
  spine(s, 1);
  panel(s, MX, 2.25, 5.85, 4.3);
  txt(s, "内部清算清单", { x: MX + 0.25, y: 2.45, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.RED });
  bullets(s, MX + 0.25, 2.9, 5.4, 3.4, [
    { t: "合并 Operator / Deep Research / Codex → 统一 Agent Platform", fs: 10.5, bold: true },
    { t: "Greg Brockman 亲自接管 agentic 训练基础设施", fs: 10.5 },
    { t: "微软资本重组：PBC 化，摆脱 Azure 算力优先权", fs: 10.5 },
    { t: "从终端工具创业公司批量 acquihire，补终端交互课", fs: 10.5 },
  ]);
  panel(s, 6.85, 2.25, 5.85, 4.3);
  txt(s, "Codex 的架构认错", { x: 7.1, y: 2.45, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.BLUE });
  table(s, 7.1, 2.9, 5.4, [1.5, 1.95, 1.95], [
    { cells: ["", "Codex 1.0", "Codex 2.0"] },
    { cells: [{ t: "范式", bold: true }, { t: "云端沙箱+异步队列" }, { t: "终端原生+实时闭环", bold: true, color: C.GREEN }] },
    { cells: [{ t: "心智", bold: true }, { t: "把开发者当验收 PM" }, { t: "并肩作战的工程师", bold: true, color: C.GREEN }] },
    { cells: [{ t: "失败", bold: true }, { t: "交还坏 PR" }, { t: "原地自愈重试", bold: true, color: C.GREEN }] },
  ], { rh: 0.5, fs: 9.5 });
  txt(s, "本质是公开承认：Claude Code 的交互范式是对的。", { x: 7.1, y: 5.5, w: 5.3, h: 0.4, fontSize: 11, italic: true, color: C.MUT });
  txt(s, "外加 Codex Fleet 并行舰队 + Atlas 浏览器 8 亿 WAU 漏斗捆绑分发。", { x: 7.1, y: 5.95, w: 5.3, h: 0.5, fontSize: 10.5, color: C.TXT });
  chrome(s, 16, "PART II · 2.5 OpenAI 知耻后勇");
  notes(s, "Code Red 重组 + Codex 1.0→2.0 架构认错。");
}

// ===================== Slide 17: 追赶曲线（故事弧 3/4） =====================
function s17(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.5 OpenAI 知耻后勇", "追赶曲线：收敛了，但没追上", "SWE-bench Pro 同期最强分对比");
  spine(s, 2);
  const proLabels = ["25.08", "25.11", "26.01", "26.05", "26.08", "26.09"];
  chart(s, MX + 0.55, 2.3, 6.9, 3.9, [
    { values: [38.5, 58.7, 58.7, 82.4, 82.4, 91.2], color: C.CORAL, width: 3, endLabel: "91.2" },
    { values: [43.8, 51.4, 63.9, 74.8, 83.5, 83.5], color: C.BLUE, width: 2.5, endLabel: "83.5" },
  ], { min: 30, max: 95, ticks: [30, 50, 70, 90], fmtTick: t => t + "%", labels: proLabels });
  line(s, MX + 0.6, 6.5, 0.35, 0, C.CORAL, { width: 3 });
  txt(s, "Claude 最强模型", { x: MX + 1.03, y: 6.4, w: 2.4, h: 0.24, fontSize: 10, color: C.MUT });
  line(s, MX + 3.1, 6.5, 0.35, 0, C.BLUE, { width: 2.5 });
  txt(s, "OpenAI Codex 系", { x: MX + 3.53, y: 6.4, w: 2.4, h: 0.24, fontSize: 10, color: C.MUT });
  panel(s, 8.75, 2.15, 3.95, 4.4);
  txt(s, "差距复盘", { x: 9.0, y: 2.35, w: 3.4, h: 0.3, fontSize: 11.5, color: C.MUT, bold: true });
  bullets(s, 9.0, 2.75, 3.45, 3.5, [
    { t: "OpenAI 两度短暂反超，都被 Claude 新版本重新拉开", fs: 10.5 },
    { t: "终端自主性（T-Bench）仍有两位数分差——一个代际", fs: 10.5 },
    { t: "编码 Token 份额：OpenAI 12%→28%，Anthropic 仍占 ~63%", fs: 10.5 },
  ]);
  chrome(s, 17, "PART II · 2.5 OpenAI 知耻后勇");
  notes(s, "追赶曲线：两次短暂反超都被重新拉开；终端代差仍在。");
}

// ===================== Slide 18: 经济战（故事弧 3/4 续） =====================
function s18(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.5 OpenAI 知耻后勇", "经济战：史上最大算力囤积 + 挑战者价格战", "OpenAI 用资产负债表反攻——但打的是一场结构性成本劣势的仗");
  spine(s, 2);
  panel(s, MX, 2.25, 5.85, 4.3);
  txt(s, "算力军备清单（2025 累计披露）", { x: MX + 0.25, y: 2.45, w: 5.4, h: 0.35, fontSize: 13, bold: true, color: C.BLUE });
  bullets(s, MX + 0.25, 2.9, 5.4, 3.4, [
    { t: "Stargate 计划：$500B 框架", fs: 11 },
    { t: "Oracle：~$300B / 4.5GW 云合同", fs: 11 },
    { t: "NVIDIA：最高 $100B 投资换部署", fs: 11 },
    { t: "AMD：6GW GPU + 认股权证", fs: 11 },
    { t: "本质：为超大规模 RL Gym 储备弹药", fs: 10.5, color: C.MUT },
  ]);
  panel(s, 6.85, 2.25, 5.85, 4.3);
  txt(s, "价格战 + 捆绑分发", { x: 7.1, y: 2.45, w: 5.4, h: 0.35, fontSize: 13, bold: true, color: C.RED });
  table(s, 7.1, 2.9, 5.4, [2.7, 1.35, 1.35], [
    { cells: ["模型", "输入/M", "输出/M"] },
    { cells: ["GPT-5.5-Codex", { t: "$1.30", bold: true, color: C.BLUE }, { t: "$8", bold: true, color: C.BLUE }] },
    { cells: ["Claude Sonnet 5.5", { t: "$2.00", bold: true, color: C.CORAL }, { t: "$10", bold: true, color: C.CORAL }] },
  ], { rh: 0.5, fs: 10.5 });
  bullets(s, 7.1, 4.55, 5.4, 1.9, [
    { t: "同档比 Sonnet 便宜 ~35%：亏损换份额", fs: 10.5 },
    { t: "Codex 额度捆绑进 ChatGPT 全系订阅", fs: 10.5 },
    { t: "软肋：主力仍是 Azure GPU——背着英伟达税打价格战", fs: 10.5, color: C.RED, bold: true },
  ]);
  chrome(s, 18, "PART II · 2.5 OpenAI 知耻后勇");
  notes(s, "经济战：军备清单 + 价格对照 + 成本结构软肋。");
}

// ===================== Slide 19: 复利税（故事弧 4/4 · signature insight） =====================
function s19(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.5 OpenAI 知耻后勇", "为什么还是没追上：单步可靠性的复利税", "Benchmark 差距 ≠ 体感差距——Agent 循环把小差距放大成任务成败");
  spine(s, 3);
  txt(s, "任务成功率 ≈ 单步可靠性 ⁿ（n = 任务链步数）", { x: MX, y: 2.3, w: CW, h: 0.4, fontSize: 15, bold: true, color: C.TXT, align: "center" });
  const cases = [
    { r: "98.0%", res: "0.98⁵⁰ ≈ 36%", verdict: "「看着能用，实际要盯」", c: C.RED },
    { r: "99.0%", res: "0.99⁵⁰ ≈ 61%", verdict: "「偶尔敢放手」", c: C.GOLD },
    { r: "99.5%", res: "0.995⁵⁰ ≈ 78%", verdict: "「敢放它跑过夜」", c: C.GREEN },
  ];
  cases.forEach((cs, i) => {
    const x = MX + i * 4.12;
    panel(s, x, 2.95, 3.87, 2.6);
    txt(s, "单步可靠性 " + cs.r, { x: x + 0.22, y: 3.15, w: 3.4, h: 0.35, fontSize: 13, bold: true, color: C.TXT });
    txt(s, cs.res, { x: x + 0.22, y: 3.6, w: 3.4, h: 0.7, fontSize: 30, bold: true, color: cs.c });
    txt(s, "50 步任务链 → " + cs.verdict, { x: x + 0.22, y: 4.45, w: 3.4, h: 0.7, fontSize: 11, color: C.MUT });
  });
  panel(s, MX, 5.85, 12.09, 1.15, { fill: C.PANEL2 });
  txt(s, "指标上差几个百分点，生产里是「Demo 惊艳」与「无人值守可交付」之间的鸿沟——这就是为何数字在收敛，心智差距没有。", {
    x: MX + 0.3, y: 6.1, w: 11.5, h: 0.7, fontSize: 12, color: C.GOLD, bold: true,
  });
  chrome(s, 19, "PART II · 2.5 OpenAI 知耻后勇");
  notes(s, "复利税：benchmark 小差距 = 生产大差距。OpenAI 故事弧收束。");
}

// ===================== Slide 20: Gemini 落差 =====================
function s20(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.6 反面教材", "Gemini：纸面霸主如何输掉开发者战争", "Google 什么都有——除了把最后一步做对的能力");
  panel(s, MX, 1.95, 5.0, 4.55);
  txt(s, "手里的牌", { x: MX + 0.25, y: 2.15, w: 4.5, h: 0.35, fontSize: 14, bold: true, color: C.TEAL });
  bullets(s, MX + 0.25, 2.6, 4.5, 3.7, [
    { t: "自研 TPU 全栈，不受英伟达税", fs: 10.5 },
    { t: "2M token 上下文窗口", fs: 10.5 },
    { t: "Android + Chrome + Workspace 分发", fs: 10.5 },
    { t: "DeepMind 人才密度 + I/O 舞台演示", fs: 10.5 },
  ]);
  // center verdict
  s.addShape("ellipse", { x: 5.95, y: 3.2, w: 1.45, h: 1.45, fill: { color: C.PANEL2 }, line: { color: C.RED, width: 1.5 } });
  txt(s, "资源≠\n工程力", { x: 5.95, y: 3.5, w: 1.45, h: 0.8, fontSize: 11.5, bold: true, color: C.RED, align: "center" });
  panel(s, 7.7, 1.95, 5.0, 4.55);
  txt(s, "生态的判决", { x: 7.95, y: 2.15, w: 4.5, h: 0.35, fontSize: 14, bold: true, color: C.RED });
  bullets(s, 7.95, 2.6, 4.5, 3.7, [
    { t: "Cursor / Aider / Windsurf 默认模型集体切向 Claude", fs: 10.5 },
    { t: "apply_diff 成功率 <60%：改不动别人的代码库", fs: 10.5 },
    { t: "运维高危命令一律拒答：能 demo，不能上岗", fs: 10.5 },
    { t: "Terminal-Bench 4.0 仅 46.2%（Claude 70.6%）", fs: 10.5, bold: true, color: C.RED },
  ]);
  txt(s, "Anthropic 把模型训练成「工程师」；Google 停在把模型训练成「答题家」。", {
    x: MX, y: 6.65, w: CW, h: 0.35, fontSize: 12.5, bold: true, color: C.GOLD, align: "center",
  });
  chrome(s, 20, "PART II · 2.6 Gemini 衰落");
  notes(s, "Gemini 落差：纸面资源 vs 生态判决——衰落是能力结构问题，不是资源问题。");
}

// ===================== Slide 21: Gemini 死因解剖 =====================
function s21(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.6 反面教材", "死因解剖：四个工程硬伤", "万卡 TPU + 2M 上下文 + 华丽演示，输给「最后一步敲不对命令」");
  const fails = [
    ["MALFORMED_FUNCTION_CALL", "多轮拼接后 Schema 遵循度劣化：未转义引号、尾随逗号——一次解析失败，整条状态机挂起"],
    ["补丁懒惰", "数千行文件回「// existing code…」或擅改缩进锚点——补丁打不上"],
    ["安全过敏拒答", "rm -rf、socket.bind、CVE 分析都触发防御性拒答——系统运维场景事实不可用"],
    ["2M 上下文幻觉", "大海捞针尚可；跨 20 个文件梳理类继承即符号混淆——长 ≠ 懂"],
  ];
  fails.forEach((f, i) => {
    const x = MX + (i % 2) * 6.24, y = 1.95 + Math.floor(i / 2) * 1.95;
    panel(s, x, y, 5.85, 1.75);
    txt(s, f[0], { x: x + 0.22, y: y + 0.14, w: 5.4, h: 0.35, fontSize: 12.5, bold: true, color: C.RED });
    txt(s, f[1], { x: x + 0.22, y: y + 0.55, w: 5.4, h: 1.1, fontSize: 10.5, color: C.MUT });
  });
  table(s, MX, 6.0, 12.09, [3.4, 2.2, 2.2, 4.29], [
    { cells: ["Terminal-Bench 4.0", "Gemini 3.1 Pro", "Claude Sonnet 5.5", "含义"] },
    { cells: ["真实终端任务通过率", { t: "46.2%", color: C.RED, bold: true }, { t: "70.6%", color: C.CORAL, bold: true }, { t: "24pt = 能否无人值守的分界线" }] },
  ], { rh: 0.5, fs: 10.5 });
  chrome(s, 21, "PART II · 2.6 Gemini 衰落");
  notes(s, "Gemini 四大硬伤 + T-Bench 对比。");
}

// ===================== Slide 22: 三情景 =====================
function s22(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "2.7 格局定价", "三情景推演：对 $2T 定价的含义", "竞争格局收敛到哪一档，决定估值落在哪个区间");
  const sc = [
    { t: "收敛 · Bear", p: "~25%", v: "$1.2–1.5T", c: C.RED, d: "GPT-6 正式版追至 ±3pt；价格战迫使 Anthropic 全系降价 → 心智溢价瓦解" },
    { t: "僵持 · Base", p: "~55%", v: "$1.8–2.0T", c: C.GOLD, d: "差距维持一个世代；双方 ARR 同涨、份额固化 → 双寡头格局被定价" },
    { t: "发散 · Bull", p: "~20%", v: ">$2T", c: C.GREEN, d: "RSI 飞轮见效、Claude 重新拉开代差 →「AGI 唯一候选」叙事成型" },
  ];
  sc.forEach((c, i) => {
    const x = MX + i * 4.12;
    panel(s, x, 1.95, 3.87, 4.4);
    txt(s, c.t, { x: x + 0.25, y: 2.15, w: 3.4, h: 0.35, fontSize: 14, bold: true, color: c.c });
    txt(s, c.p, { x: x + 0.25, y: 2.55, w: 1.8, h: 0.4, fontSize: 15, color: C.MUT });
    txt(s, c.v, { x: x + 0.25, y: 3.0, w: 3.4, h: 0.75, fontSize: 34, bold: true, color: c.c });
    txt(s, c.d, { x: x + 0.25, y: 3.95, w: 3.4, h: 2.2, fontSize: 10.5, color: C.MUT });
  });
  chrome(s, 22, "PART II · 2.7 三情景");
  notes(s, "三情景卡：收敛/僵持/发散，基准情形支撑 1.8-2.0T。");
}

module.exports = { div2, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22 };
