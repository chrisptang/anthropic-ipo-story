const { C, FONT, MX, CW, W, H, bg, chrome, title, panel, line, txt, chip, kpi, bullets, numItem, notes } = require("./theme");

// ---------- Slide 1: Cover ----------
function cover(pres) {
  const s = pres.addSlide();
  bg(s);
  // ghost giant watermark
  txt(s, "$2T", { x: 6.2, y: 1.1, w: 7, h: 4.4, fontSize: 190, bold: true, color: "F1DED3", align: "right" });
  txt(s, "深度研究备忘录 · RESEARCH MEMO", { x: MX, y: 0.7, w: 8, h: 0.3, fontSize: 11, color: C.CORAL, bold: true, charSpacing: 2.5 });
  txt(s, "Anthropic 2 万亿 IPO 的背后", { x: MX, y: 1.6, w: 11, h: 1.1, fontSize: 40, bold: true, color: C.TXT });
  txt(s, "编码模型与 AGI", { x: MX, y: 2.75, w: 11, h: 1.0, fontSize: 40, bold: true, color: C.CORAL });
  txt(s, "资本飞轮 × 产业大迁徙 × 递归自我演化 —— 一份投研级拆解", {
    x: MX, y: 4.0, w: 10, h: 0.4, fontSize: 14.5, color: C.MUT,
  });
  // three theme chips
  let cx = MX;
  ["第一篇 · 资本神话与 ARR 飞轮", "第二篇 · 产业重构与格局战争", "第三篇 · 代码即 AGI"].forEach((t, i) => {
    const w = chip(s, cx, 4.85, t, [C.GOLD, C.CORAL, C.TEAL][i]);
    cx += w + 0.25;
  });
  txt(s, "数据截至 2026 年 10 月 · 全文 36 页", {
    x: MX, y: 6.3, w: 10, h: 0.3, fontSize: 10.5, color: C.FAINT,
  });
  notes(s, "封面。一句话定位：这不是一家软件公司的上市，而是人类历史上第一次为『数字硅基生产力母体』定价。");
}

// ---------- Slide 2: Executive summary / three questions ----------
function execSummary(pres) {
  const s = pres.addSlide();
  bg(s);
  title(s, "EXECUTIVE SUMMARY", "三个问题，一条证据链", "序章：敲钟前夜 —— 每一问对应一篇论证");
  const qs = [
    {
      n: "Q1", t: "一家成立五年的公司，凭什么挂出 $2T？",
      d: "年化 ARR 突破 $1,000 亿、单一产品 Claude Code 年入 $25 亿——收入引擎是编码 Agent，不是聊天订阅。",
      a: "第一篇 · 资本神话", color: C.GOLD,
    },
    {
      n: "Q2", t: "对手是谁，王座有多稳？",
      d: "SaaS 万亿市值蒸发是注脚；真正的攻防在模型层——OpenAI 知耻后勇连追三代，Google 全线溃败。",
      a: "第二篇 · 产业重构", color: C.CORAL,
    },
    {
      n: "Q3", t: "为什么这一切不会停在今天？",
      d: "代码是人类首个被彻底形式化的智能领域；Claude 已深度参与训练下一代 Claude——RSI 飞轮一旦转起，差距按复利拉开。",
      a: "第三篇 · 代码即 AGI", color: C.TEAL,
    },
  ];
  qs.forEach((q, i) => {
    const x = MX + i * 4.12, w = 3.87;
    panel(s, x, 1.95, w, 4.3);
    txt(s, q.n, { x: x + 0.25, y: 2.15, w: 1, h: 0.5, fontSize: 26, bold: true, color: q.color });
    txt(s, q.t, { x: x + 0.25, y: 2.75, w: w - 0.5, h: 1.0, fontSize: 15.5, bold: true, color: C.TXT });
    txt(s, q.d, { x: x + 0.25, y: 3.85, w: w - 0.5, h: 1.9, fontSize: 11, color: C.MUT });
    chip(s, x + 0.25, 5.72, q.a, q.color, 2.2);
  });
  chrome(s, 2, "序章");
  notes(s, "执行摘要。三个问题分别对应三篇：资本（凭什么）、产业（谁买单）、技术-AGI（为何可持续）。");
}

// ---------- Slide 3: TOC ----------
function toc(pres) {
  const s = pres.addSlide();
  bg(s);
  title(s, "CONTENTS", "目录 · 三篇递进", "先回答钱从哪来，再回答谁在买单，最后回答为什么不会停");
  const cols = [
    {
      t: "第一篇", en: "资本神话与 ARR 飞轮", color: C.GOLD,
      items: ["1.1 $2T 的坐标系：全球前七", "1.2 估值跃升：四年 111 倍", "1.3 ARR 大逆转：16x → 0.7x", "1.4 Claude Code 与百倍杠杆"],
    },
    {
      t: "第二篇", en: "产业重构与格局战争", color: C.CORAL,
      items: ["2.1 SaaSpocalypse：$1.2T 蒸发", "2.2 席位制死锁与 Agentforce", "2.3 即时软件：边际成本归零", "2.4 MCP 黄昏与双环生态", "2.5 OpenAI 知耻后勇：四幕反攻", "2.6 Gemini 衰落：执行力赤字", "2.7 三情景定价"],
    },
    {
      t: "第三篇", en: "代码即 AGI：递归演化与文明拐点", color: C.TEAL,
      items: ["3.1 评测革命与终端自愈", "3.2 代码即思维中间表示", "3.3 护城河解剖：为何是 Claude", "3.4 AGI 预测坐标系", "3.5 RSI 四大自举流水线", "3.6 ASL-3 与安全双轨", "3.7 Software 3.0 与自治滑杆"],
    },
  ];
  cols.forEach((c, i) => {
    const x = MX + i * 4.12, w = 3.87;
    panel(s, x, 1.95, w, 4.55);
    txt(s, c.t, { x: x + 0.22, y: 2.12, w: w - 0.4, h: 0.35, fontSize: 16, bold: true, color: c.color });
    txt(s, c.en, { x: x + 0.22, y: 2.5, w: w - 0.4, h: 0.55, fontSize: 11, bold: true, color: C.TXT });
    bullets(s, x + 0.22, 3.15, w - 0.44, 3.2, c.items, { fs: 10.5, gap: 7 });
  });
  txt(s, "尾声：投资者季度跟踪清单 P35 · 结语 P36", {
    x: MX, y: 6.7, w: CW, h: 0.3, fontSize: 10, color: C.FAINT,
  });
  chrome(s, 3, "目录");
  notes(s, "目录页：三篇递进结构——资本→产业→AGI。");
}

module.exports = { cover, execSummary, toc };
