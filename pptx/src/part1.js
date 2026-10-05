const { C, FONT, MX, CW, W, H, bg, chrome, title, panel, rect, line, txt, chip, kpi, hbar, vbar, bullets, numItem, arrow, table, divider, notes, chart } = require("./theme");

// ===================== Slide 4: Part I divider =====================
function div1(pres) {
  return divider(pres, 4, "01", "资本神话与 ARR 飞轮", "PART I · THE $2T QUESTION",
    "先回答最表面的问题：这家成立五年的公司，收入从哪来、为什么敢要 2 万亿。",
    ["1.1 坐标系\n1.2 估值跃升", "1.3 ARR 逆转\n1.4 百倍杠杆"]);
}

// ===================== Slide 5: $2T 坐标系 =====================
function s5(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "1.1 数字的坐标系", "2 万亿美元意味着什么？", "全球史上仅六家公司跨过 $2T ——Anthropic 将是第七家，也是唯一一家成立不足六年的");
  const data = [
    ["NVIDIA", 4.8], ["Apple", 3.9], ["Microsoft", 3.6], ["Alphabet", 3.1],
    ["Amazon", 2.6], ["Saudi Aramco", 1.9], ["Anthropic（IPO 目标）", 1.9],
  ];
  data.forEach((d, i) => hbar(s, MX, 1.95 + i * 0.62, 6.6, d[0], d[1], 5.0, i === 6 ? C.CORAL : C.MUT, i === 6 ? "$1.8–2.0T" : "$" + d[1] + "T", { labelW: 2.15 }));
  // right panel: speed + China comparison
  panel(s, 7.85, 1.9, 4.85, 4.6);
  txt(s, "历史最快", { x: 8.1, y: 2.1, w: 4.3, h: 0.3, fontSize: 12, color: C.GOLD, bold: true });
  txt(s, "5.7 年", { x: 8.1, y: 2.45, w: 4.3, h: 0.7, fontSize: 42, bold: true, color: C.TXT });
  txt(s, "从成立到 $2T：Apple 用了 42 年，Microsoft 33 年，NVIDIA 31 年", {
    x: 8.1, y: 3.25, w: 4.3, h: 0.6, fontSize: 10.5, color: C.MUT,
  });
  line(s, 8.1, 3.95, 4.3, 0, C.HAIR);
  txt(s, "另一种坐标系", { x: 8.1, y: 4.15, w: 4.3, h: 0.3, fontSize: 12, color: C.CORAL, bold: true });
  txt(s, "≈ 中国 Top 10 互联网巨头市值总和 × 1.5", { x: 8.1, y: 4.5, w: 4.3, h: 0.4, fontSize: 16, bold: true, color: C.TXT });
  txt(s, "腾讯 + 阿里 + 拼多多 + 美团 + 小米 + 网易 + 京东 + 携程 + 百度 + 快手 ≈ $1.32 万亿——十家公司覆盖十亿网民的全部数字生活，Anthropic 卖的是给所有行业供能的智能底座。", {
    x: 8.1, y: 5.05, w: 4.3, h: 1.3, fontSize: 10, color: C.MUT,
  });
  chrome(s, 5, "PART I · 1.1 坐标系");
  notes(s, "2T 坐标系：全球前七 + 历史最快速度 + 中国互联网全行业对照。");
}

// ===================== Slide 6: 估值跃升轨迹 =====================
function s6(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "1.2 定价重构", "估值跃升：11 个月再翻一倍", "从 $180 亿到 $2 万亿——四年 111 倍，每一级台阶都对应一次能力验证");
  const steps = [
    { d: "2024 底", v: "$180 亿", h: 0.9, n: "Claude 3.5 统治 IDE 插件时代" },
    { d: "2025 下半年", v: "$1,500–2,000 亿", h: 1.9, n: "Claude Code 发布，ARR 斜率拐点" },
    { d: "2026.05 Series H", v: "$9,650 亿", h: 3.2, n: "ARR 反超 OpenAI 的定价确认" },
    { d: "2026.11 IPO（目标）", v: "$1.8 – 2.0 万亿", h: 4.4, n: "二级市场为 AGI 期权定价" },
  ];
  const baseY = 6.15, bw = 2.2, gap = 0.75;
  steps.forEach((st, i) => {
    const x = MX + i * (bw + gap);
    s.addShape("rect", { x, y: baseY - st.h, w: bw, h: st.h, fill: { color: i === 3 ? C.CORAL : C.PANEL }, line: { color: C.LINE, width: 0.75 }, rectRadius: 0.05 });
    txt(s, st.v, { x: x - 0.1, y: baseY - st.h - 0.5, w: bw + 0.2, h: 0.45, fontSize: i === 3 ? 19 : 15, bold: true, color: i === 3 ? C.CORAL : C.TXT, align: "center" });
    txt(s, st.d, { x: x - 0.1, y: baseY + 0.12, w: bw + 0.2, h: 0.3, fontSize: 11, bold: true, color: C.TXT, align: "center" });
    txt(s, st.n, { x: x - 0.1, y: baseY + 0.44, w: bw + 0.2, h: 0.6, fontSize: 9.5, color: C.MUT, align: "center" });
    if (i < 3) arrow(s, x + bw + 0.16, baseY - 0.35, C.FAINT);
  });
  txt(s, "倍率 ×6.5", { x: 3.3, y: 4.55, w: 1.2, h: 0.25, fontSize: 10, color: C.GOLD, italic: true });
  txt(s, "倍率 ×5", { x: 6.3, y: 3.1, w: 1.2, h: 0.25, fontSize: 10, color: C.GOLD, italic: true });
  txt(s, "×2 in 11 个月", { x: 9.3, y: 1.55, w: 1.8, h: 0.25, fontSize: 10, color: C.GOLD, italic: true });
  chrome(s, 6, "PART I · 1.2 估值跃升");
  notes(s, "估值跃升台阶图：每一级台阶都对应一次 ARR 或模型的验证事件。");
}

// ===================== Slide 7: ARR 逆转 =====================
function s7(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "1.3 营收逆转", "ARR 世纪追赶：从 16:1 到反超", "年化营收（亿美元）· 2023–2026E");
  const arrLabels = ["23末", "24中", "24末", "25.02", "25末", "26.05", "26.07", "26.09", "26末E"];
  chart(s, MX + 0.7, 2.0, 7.0, 3.7, [
    { values: [1, 4, 10, 20, 90, 450, 650, 1000, 1200], color: C.CORAL, width: 3, endLabel: "$1,200亿", endLabelPos: "above" },
    { values: [16, 28, 40, 60, 130, 350, 400, 700, 900], color: C.BLUE, width: 2.5, endLabel: "$900亿", endLabelPos: "below" },
  ], { min: 0, max: 1250, ticks: [0, 400, 800, 1200], fmtTick: t => "$" + t + "亿", labels: arrLabels });
  // manual legend
  line(s, MX + 0.75, 6.15, 0.35, 0, C.CORAL, { width: 3 });
  txt(s, "Anthropic", { x: MX + 1.18, y: 6.05, w: 1.6, h: 0.24, fontSize: 10, color: C.MUT });
  line(s, MX + 2.5, 6.15, 0.35, 0, C.BLUE, { width: 2.5 });
  txt(s, "OpenAI", { x: MX + 2.93, y: 6.05, w: 1.6, h: 0.24, fontSize: 10, color: C.MUT });
  // pricing formula band
  panel(s, MX, 6.45, 8.1, 0.6, { fill: C.PANEL2 });
  txt(s, "定价公式：$1,000–1,200 亿 ARR × 16–18x P/S = $1.8–2.0T", {
    x: MX + 0.25, y: 6.58, w: 7.8, h: 0.35, fontSize: 12.5, bold: true, color: C.GOLD,
  });
  // right panel
  panel(s, 8.75, 1.9, 3.95, 5.15);
  txt(s, "倍数坍缩", { x: 9.0, y: 2.1, w: 3.4, h: 0.3, fontSize: 11.5, color: C.MUT, bold: true });
  txt(s, "16.0x → 0.7x", { x: 9.0, y: 2.42, w: 3.4, h: 0.55, fontSize: 26, bold: true, color: C.GOLD });
  bullets(s, 9.0, 3.15, 3.45, 3.6, [
    { t: "2025.02 Claude Code 发布：追赶斜率的决定性拐点", fs: 10.5 },
    { t: "2026.05 ARR 首次反超（$450 亿 vs $350 亿）", fs: 10.5, color: C.CORAL, bold: true },
    { t: "2026.09 突破 $1,000 亿年化", fs: 10.5 },
    { t: "斜率拐点永远落在编码模型发布节点上——不是巧合", fs: 10, color: C.MUT },
  ]);
  chrome(s, 7, "PART I · 1.3 ARR 逆转");
  notes(s, "ARR 双线图 + 定价公式：反超发生在 2026.05；拐点总在模型发布节点。");
}

// ===================== Slide 8: 百倍杠杆（Claude Code 核爆） =====================
function s8(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "1.4 催化核爆", "Claude Code：同一开发者，百倍 Token 消耗", "它改变的不是功能，而是单位用户的算力消费模型——这就是 ARR 爆炸的微观机制");
  // left: chatbot era
  panel(s, MX, 1.95, 5.1, 2.9);
  txt(s, "Chatbot 时代", { x: MX + 0.25, y: 2.15, w: 4.6, h: 0.35, fontSize: 14, bold: true, color: C.MUT });
  txt(s, "1–2K", { x: MX + 0.25, y: 2.55, w: 4.6, h: 0.7, fontSize: 38, bold: true, color: C.MUT });
  txt(s, "tokens / 次交互 · 问一句答一段", { x: MX + 0.25, y: 3.3, w: 4.6, h: 0.3, fontSize: 11, color: C.FAINT });
  // center badge
  s.addShape("ellipse", { x: 6.0, y: 2.75, w: 1.35, h: 1.35, fill: { color: C.CORAL }, line: { type: "none" } });
  txt(s, "×100", { x: 6.0, y: 3.17, w: 1.35, h: 0.5, fontSize: 20, bold: true, color: "FFFFFF", align: "center" });
  // right: agent era
  panel(s, 7.62, 1.95, 5.1, 2.9);
  txt(s, "Agent 时代（Claude Code）", { x: 7.87, y: 2.15, w: 4.6, h: 0.35, fontSize: 14, bold: true, color: C.CORAL });
  txt(s, "0.5–2M", { x: 7.87, y: 2.55, w: 4.6, h: 0.7, fontSize: 38, bold: true, color: C.TXT });
  txt(s, "tokens / 单次端到端任务 · 40–150 轮「改码→跑测→自愈」", { x: 7.87, y: 3.3, w: 4.6, h: 0.55, fontSize: 11, color: C.MUT });
  // KPI strip
  const kpis = [["$25 亿+", "Claude Code 单品年化 ARR"], ["~7%", "GitHub 全网新增 commit 渗透"], ["5 个月", "研究预览 → 全面商用"]];
  kpis.forEach((k, i) => {
    const x = MX + i * 4.12;
    panel(s, x, 5.05, 3.87, 1.1, { fill: C.PANEL2 });
    txt(s, k[0], { x: x + 0.22, y: 5.22, w: 3.5, h: 0.45, fontSize: 20, bold: true, color: C.CORAL });
    txt(s, k[1], { x: x + 0.22, y: 5.68, w: 3.5, h: 0.35, fontSize: 10, color: C.MUT });
  });
  // Jevons band
  txt(s, "杰文斯悖论：单价 −90%，任务消耗 +100× —— 企业不止不省钱，反而启动 Agent 舰队，ARR 指数爆发。", {
    x: MX, y: 6.5, w: CW, h: 0.4, fontSize: 12.5, bold: true, color: C.GOLD, align: "center",
  });
  chrome(s, 8, "PART I · 1.4 百倍杠杆");
  notes(s, "百倍杠杆 + Claude Code 三个 KPI + 杰文斯悖论收束第一篇。");
}

module.exports = { div1, s5, s6, s7, s8 };
