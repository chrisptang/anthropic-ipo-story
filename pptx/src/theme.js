// Design system for "Anthropic 2万亿IPO的背后：编码模型与AGI" deck
// pptxgenjs 4.x · LAYOUT_WIDE 13.333 x 7.5 · Claude light theme (cream bg + clay accent)

const C = {
  BG: "FAF9F4",      // Claude cream
  PANEL: "FFFFFF",   // white cards
  PANEL2: "F1EDE3",  // warm light fill — chip bg / bar track / table header
  LINE: "E3DCCB",    // card borders
  HAIR: "EAE4D6",    // hairlines / chart gridlines
  TXT: "201B14",     // warm ink
  MUT: "6E6655",     // warm gray body
  FAINT: "A79D8B",   // footer / tick labels
  CORAL: "D97757",   // Anthropic clay — 主线强调
  GOLD: "B8872F",    // 资本/财务（白底加深版）
  TEAL: "1B8F88",    // 技术/模型
  BLUE: "3E74D8",    // OpenAI / 对照
  RED: "C7453A",     // 风险/空头/回撤
  GREEN: "2E9B66",   // 多头/正向
};
const FONT = "PingFang SC";
const W = 13.333, H = 7.5, MX = 0.62; // page margins
const CW = W - MX * 2;               // content width = 12.093

function bg(slide, color) {
  slide.background = { color: color || C.BG };
}

// ---- slide chrome: kicker + page number + footer (text only, no stripes) ----
function chrome(slide, pageNo, kicker) {
  slide.addText(kicker.toUpperCase(), {
    x: MX, y: 0.26, w: 8, h: 0.24, margin: 0,
    fontFace: FONT, fontSize: 9.5, color: C.FAINT, charSpacing: 2.2, align: "left",
  });
  slide.addText(String(pageNo).padStart(2, "0"), {
    x: W - MX - 0.5, y: H - 0.4, w: 0.5, h: 0.22, margin: 0,
    fontFace: FONT, fontSize: 9, color: C.FAINT, align: "right",
  });
  slide.addText("Anthropic 2 万亿 IPO 的背后：编码模型与 AGI", {
    x: MX, y: H - 0.4, w: 6, h: 0.22, margin: 0,
    fontFace: FONT, fontSize: 9, color: C.FAINT, align: "left",
  });
}

function title(slide, kicker, t, sub) {
  if (kicker) {
    slide.addText(kicker, {
      x: MX, y: 0.52, w: CW, h: 0.26, margin: 0,
      fontFace: FONT, fontSize: 11, color: C.CORAL, bold: true, charSpacing: 1.5,
    });
  }
  slide.addText(t, {
    x: MX, y: 0.78, w: CW, h: 0.62, margin: 0,
    fontFace: FONT, fontSize: 27, color: C.TXT, bold: true,
  });
  if (sub) {
    slide.addText(sub, {
      x: MX, y: 1.36, w: CW, h: 0.3, margin: 0,
      fontFace: FONT, fontSize: 12, color: C.MUT,
    });
  }
}

// ---- primitives ----
function panel(slide, x, y, w, h, opts) {
  opts = opts || {};
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.06,
    fill: { color: opts.fill || C.PANEL },
    line: opts.border === false ? { type: "none" } : { color: opts.line || C.LINE, width: 0.75 },
    shadow: opts.shadow ? { type: "outer", color: "7A6F58", opacity: 0.18, blur: 8, offset: 2, angle: 90 } : undefined,
  });
}

function rect(slide, x, y, w, h, color, opts) {
  opts = opts || {};
  slide.addShape("rect", { x, y, w, h, fill: { color }, line: { type: "none" }, rectRadius: opts.r, shape: opts.shape });
}

function line(slide, x, y, w, h, color, opts) {
  opts = opts || {};
  slide.addShape("line", { x, y, w, h, line: { color: color || C.LINE, width: opts.width || 0.75, dashType: opts.dash } });
}

function txt(slide, t, o) {
  slide.addText(t, Object.assign({ margin: 0, fontFace: FONT, color: C.TXT, align: "left", valign: "top" }, o));
}

// small pill / chip
function chip(slide, x, y, t, color, w) {
  const tw = w || Math.max(0.6, t.length * 0.14 + 0.3);
  slide.addText(t, {
    x, y, w: tw, h: 0.3, margin: 0, fontFace: FONT, fontSize: 10, bold: true,
    color: color || C.TEAL, align: "center", valign: "middle",
    fill: { color: C.PANEL2 }, line: { color: color || C.TEAL, width: 0.75 },
    rectRadius: 0.15,
  });
  return tw;
}

// KPI stat card
function kpi(slide, x, y, w, h, value, label, color, sub) {
  panel(slide, x, y, w, h);
  txt(slide, value, { x: x + 0.18, y: y + 0.16, w: w - 0.36, h: 0.55, fontSize: 30, bold: true, color: color || C.GOLD });
  txt(slide, label, { x: x + 0.18, y: y + 0.74, w: w - 0.36, h: 0.3, fontSize: 11.5, color: C.TXT, bold: true });
  if (sub) txt(slide, sub, { x: x + 0.18, y: y + 1.04, w: w - 0.36, h: h - 1.1, fontSize: 9.5, color: C.MUT, valign: "top" });
}

// horizontal bar row: label | bar | value
function hbar(slide, x, y, w, label, val, maxVal, color, valText, opts) {
  opts = opts || {};
  const labelW = opts.labelW || 2.0, valW = opts.valW || 0.9;
  const barX = x + labelW, barW = w - labelW - valW;
  txt(slide, label, { x, y: y - 0.02, w: labelW - 0.12, h: 0.32, fontSize: opts.fs || 10.5, color: C.TXT, valign: "middle" });
  const bw = Math.max(0.04, (val / maxVal) * barW);
  slide.addShape("rect", { x: barX, y: y + 0.02, w: barW, h: 0.22, fill: { color: C.PANEL2 }, line: { type: "none" }, rectRadius: 0.03 });
  slide.addShape("rect", { x: barX, y: y + 0.02, w: bw, h: 0.22, fill: { color }, line: { type: "none" }, rectRadius: 0.03 });
  txt(slide, valText || String(val), { x: barX + barW + 0.08, y: y - 0.02, w: valW, h: 0.32, fontSize: opts.fs || 10.5, bold: true, color, valign: "middle" });
}

// vertical bar column
function vbar(slide, x, bottomY, w, h, color, label, valText) {
  slide.addShape("rect", { x, y: bottomY - h, w, h, fill: { color }, line: { type: "none" }, rectRadius: 0.03 });
  if (valText) txt(slide, valText, { x: x - 0.15, y: bottomY - h - 0.32, w: w + 0.3, h: 0.28, fontSize: 10.5, bold: true, color, align: "center" });
  if (label) txt(slide, label, { x: x - 0.25, y: bottomY + 0.08, w: w + 0.5, h: 0.3, fontSize: 9.5, color: C.MUT, align: "center" });
}

// bulleted list block
function bullets(slide, x, y, w, h, items, opts) {
  opts = opts || {};
  const runs = [];
  items.forEach((it, i) => {
    if (typeof it === "string") it = { t: it };
    runs.push({
      text: it.t,
      options: {
        bullet: { code: "25AA", indent: opts.indent == null ? 12 : opts.indent },
        breakLine: true,
        color: it.color || C.TXT,
        bold: !!it.bold,
        fontSize: it.fs || opts.fs || 11.5,
        paraSpaceAfter: i === items.length - 1 ? 0 : (opts.gap == null ? 8 : opts.gap),
      },
    });
  });
  slide.addText(runs, { x, y, w, h, margin: 0, fontFace: FONT, align: "left", valign: "top", bullet: false });
}

// numbered item row: ① big number + title + desc
function numItem(slide, x, y, w, n, t, d, color) {
  txt(slide, n, { x, y, w: 0.5, h: 0.42, fontSize: 22, bold: true, color: color || C.CORAL });
  txt(slide, t, { x: x + 0.55, y: y + 0.02, w: w - 0.55, h: 0.3, fontSize: 12.5, bold: true, color: C.TXT });
  txt(slide, d, { x: x + 0.55, y: y + 0.36, w: w - 0.55, h: 0.5, fontSize: 10, color: C.MUT });
}

// flow arrow between boxes
function arrow(slide, x, y, color, opts) {
  opts = opts || {};
  slide.addShape(opts.right === false ? "leftArrow" : "rightArrow", {
    x, y, w: opts.w || 0.42, h: opts.h || 0.26, fill: { color: color || C.FAINT }, line: { type: "none" },
  });
}

// generic data table (header row + rows)
function table(slide, x, y, w, colWs, rows, opts) {
  opts = opts || {};
  const rh = opts.rh || 0.34, fs = opts.fs || 10;
  rows.forEach((r, ri) => {
    const isHead = ri === 0;
    const yy = y + ri * rh;
    if (isHead) slide.addShape("rect", { x, y: yy, w, h: rh, fill: { color: C.PANEL2 }, line: { type: "none" } });
    else if (r.hl) slide.addShape("rect", { x, y: yy, w, h: rh, fill: { color: r.hl }, line: { type: "none" } });
    line(slide, x, yy + rh, w, 0, C.HAIR, { width: 0.5 });
    let cx = x;
    r.cells.forEach((cell, ci) => {
      const cw = colWs[ci];
      const o = typeof cell === "string" ? { t: cell } : cell;
      txt(slide, o.t, {
        x: cx + 0.08, y: yy, w: cw - 0.16, h: rh, margin: 0,
        fontSize: o.fs || fs, bold: isHead || !!o.bold,
        color: o.color || (isHead ? C.MUT : C.TXT),
        align: o.align || (ci === 0 ? "left" : "center"), valign: "middle",
      });
      cx += cw;
    });
  });
}

// section divider page
function divider(pres, pageNo, num, titleCn, titleEn, thesis, sections) {
  const s = pres.addSlide();
  bg(s);
  // ghost numeral in near-background tone
  txt(s, num, { x: MX, y: 1.5, w: 3, h: 1.6, fontSize: 92, bold: true, color: "F1DED3", align: "left" });
  txt(s, titleCn, { x: MX, y: 3.0, w: CW, h: 0.8, fontSize: 34, bold: true, color: C.TXT });
  txt(s, titleEn, { x: MX, y: 3.85, w: CW, h: 0.3, fontSize: 12, color: C.CORAL, charSpacing: 2, bold: true });
  txt(s, thesis, { x: MX, y: 4.35, w: 9.5, h: 0.7, fontSize: 13, color: C.MUT, italic: true });
  if (sections) {
    sections.forEach((sec, i) => {
      txt(s, sec, { x: MX + i * 4.1, y: 5.6, w: 3.9, h: 1.2, fontSize: 10.5, color: C.MUT, valign: "top" });
      txt(s, sec.split(" ")[0], { x: MX + i * 4.1, y: 5.3, w: 3.9, h: 0.3, fontSize: 12, bold: true, color: C.CORAL });
    });
  }
  chrome(s, pageNo, "Anthropic · 2T IPO");
  return s;
}

function notes(slide, t) { slide.addNotes(t); }

// hand-drawn polyline chart — Keynote/PowerPoint-safe replacement for native chart XML
// series: [{ values:[..], color, endLabel? }] ; opts: { min, max, ticks, fmtTick, labels, unit }
function chart(slide, x, y, w, h, series, opts) {
  opts = opts || {};
  const allVals = [];
  series.forEach(sr => sr.values.forEach(v => allVals.push(v)));
  const min = opts.min != null ? opts.min : Math.min.apply(null, allVals);
  const max = opts.max != null ? opts.max : Math.max.apply(null, allVals);
  const n = series[0].values.length;
  const px = i => x + (n === 1 ? w / 2 : (i / (n - 1)) * w);
  const py = v => y + h - ((v - min) / ((max - min) || 1)) * h;
  // y gridlines + tick labels
  (opts.ticks || [min, (min + max) / 2, max]).forEach(t => {
    const yy = py(t);
    line(slide, x, yy, w, 0, C.HAIR, { width: 0.5 });
    txt(slide, opts.fmtTick ? opts.fmtTick(t) : String(t), {
      x: x - 0.6, y: yy - 0.11, w: 0.52, h: 0.22, fontSize: 8.5, color: C.FAINT, align: "right",
    });
  });
  // x labels
  (opts.labels || []).forEach((lb, i) => {
    txt(slide, lb, { x: px(i) - 0.4, y: y + h + 0.1, w: 0.8, h: 0.22, fontSize: 8.5, color: C.MUT, align: "center" });
  });
  // axis baseline
  line(slide, x, y + h, w, 0, C.LINE, { width: 1 });
  series.forEach(sr => {
    for (let i = 0; i < n - 1; i++) {
      const y1 = py(sr.values[i]), y2 = py(sr.values[i + 1]);
      slide.addShape("line", {
        x: px(i), y: Math.min(y1, y2), w: px(i + 1) - px(i), h: Math.abs(y2 - y1),
        flipV: y2 < y1,
        line: { color: sr.color, width: sr.width || 2.5 },
      });
    }
    sr.values.forEach((v, i) => {
      const r = i === n - 1 ? 0.075 : 0.05;
      slide.addShape("ellipse", { x: px(i) - r, y: py(v) - r, w: r * 2, h: r * 2, fill: { color: sr.color }, line: { type: "none" } });
    });
    if (sr.endLabel) {
      const pos = sr.endLabelPos || "right";
      const ey = py(sr.values[n - 1]);
      const lbl = pos === "right"
        ? { x: px(n - 1) + 0.14, y: ey - 0.24, align: "left" }
        : pos === "above"
          ? { x: px(n - 1) - 1.3, y: ey - 0.36, align: "right" }
          : { x: px(n - 1) - 1.3, y: ey + 0.14, align: "right" }; // "below"
      txt(slide, sr.endLabel, {
        x: lbl.x, y: lbl.y, w: 1.3, h: 0.26,
        fontSize: 10, bold: true, color: sr.color, align: lbl.align,
      });
    }
  });
}

module.exports = { C, FONT, W, H, MX, CW, bg, chrome, title, panel, rect, line, txt, chip, kpi, hbar, vbar, bullets, numItem, arrow, table, divider, notes, chart };
