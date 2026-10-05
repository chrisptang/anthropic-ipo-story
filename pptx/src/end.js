const { C, FONT, MX, CW, W, H, bg, chrome, title, panel, txt, bullets, table, notes } = require("./theme");

// ===================== Slide 35: 尾声 — Watchlist =====================
function finale(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "EPILOGUE", "定价一个时代：投资者季度跟踪清单", "五个可证伪的观察点——把它们钉在你的终端上");
  const wl = [
    ["① Terminal-Bench 4.0 逐季分差", "最能反映终端自主性代差；OpenAI 每缩 3pt，估值中枢下移一档"],
    ["② Codex 开发者 DAU 与留存", "看使用而非注册——GA 后 90 天留存率决定份额是反弹还是假摔"],
    ["③ 企业具名 logo 争夺战", "金融/医药/政企是 Fable 主场，也是 OpenAI 最难啃的阵地"],
    ["④ Broadcom 自研芯片流片", "决定 OpenAI 价格战能打多久：自有 ASIC 落地前，它在用高成本打别人的低成本"],
    ["⑤ 开源权重模型基准斜率", "DeepSeek/Qwen 距 frontier 尚有代差，但斜率决定 API 定价的长期天花板"],
  ];
  wl.forEach((w, i) => {
    const y = 1.9 + i * 0.78;
    panel(s, MX, y, 12.09, 0.66, { fill: i % 2 ? C.PANEL : C.PANEL2 });
    txt(s, w[0], { x: MX + 0.25, y: y + 0.08, w: 4.6, h: 0.5, fontSize: 11.5, bold: true, color: C.TXT, valign: "middle" });
    txt(s, w[1], { x: MX + 5.0, y: y + 0.08, w: 7.4, h: 0.5, fontSize: 10, color: C.MUT, valign: "middle" });
  });
  txt(s, "基准情形：僵持 55% · $1.8–2.0T ｜ 上行：RSI 发散 → >$2T ｜ 下行：基准收敛 → $1.2–1.5T", {
    x: MX, y: 6.05, w: CW, h: 0.35, fontSize: 11.5, bold: true, color: C.GOLD, align: "center",
  });
  chrome(s, 35, "尾声 · Watchlist");
  notes(s, "尾声：五条可证伪 watchlist + 三情景一行收束。");
}

// ===================== Slide 36: 结语 =====================
function closing(pres) {
  const s = pres.addSlide(); bg(s);
  txt(s, "$2T", { x: 6.2, y: 0.9, w: 7, h: 4.4, fontSize: 190, bold: true, color: "F1DED3", align: "right" });
  txt(s, "CLOSING", { x: MX, y: 0.9, w: 8, h: 0.3, fontSize: 11, color: C.CORAL, bold: true, charSpacing: 2.5 });
  txt(s, "这不是一家软件公司的上市。", {
    x: MX, y: 1.9, w: 11.5, h: 0.9, fontSize: 32, bold: true, color: C.TXT,
  });
  txt(s, "这是人类第一次为「能自我演化的生产力母体」定价。", {
    x: MX, y: 2.9, w: 11.5, h: 0.9, fontSize: 32, bold: true, color: C.CORAL,
  });
  const answers = [
    ["凭什么是 $2T", "编码 Agent 重构了收入引擎：百倍 Token 杠杆 × 开发者心智垄断"],
    ["谁在为它买单", "蒸发的 SaaS 万亿市值；知耻后勇的 OpenAI 反而验证了赛道"],
    ["为什么不会停", "代码是智能唯一被形式化的领域，RSI 飞轮已经开始转动"],
  ];
  answers.forEach((a, i) => {
    const x = MX + i * 4.12;
    panel(s, x, 4.4, 3.87, 1.7);
    txt(s, a[0], { x: x + 0.22, y: 4.58, w: 3.4, h: 0.3, fontSize: 11.5, bold: true, color: [C.GOLD, C.RED, C.TEAL][i] });
    txt(s, a[1], { x: x + 0.22, y: 4.92, w: 3.4, h: 1.0, fontSize: 10.5, color: C.MUT });
  });
  txt(s, "研究备忘录 · 非投资建议", { x: MX, y: 6.6, w: 6, h: 0.3, fontSize: 10, color: C.FAINT });
  chrome(s, 36, "结语");
  notes(s, "结语：三问回收 + 一句话收束全篇。");
}

module.exports = { finale, closing };
