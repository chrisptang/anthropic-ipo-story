const pptxgen = require("pptxgenjs");
const p0 = require("./part0");
const p1 = require("./part1");
const p2 = require("./part2");
const p3 = require("./part3");
const pend = require("./end");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.title = "Anthropic 2 万亿 IPO 的背后：编码模型与 AGI";
pres.author = "Research Memo";

// 序章
p0.cover(pres);        // 1
p0.execSummary(pres);  // 2
p0.toc(pres);          // 3

// 第一篇 · 资本神话（4–8）
p1.div1(pres);  // 4
p1.s5(pres);    // 5
p1.s6(pres);    // 6
p1.s7(pres);    // 7
p1.s8(pres);    // 8

// 第二篇 · 产业重构与格局战争（9–22）
p2.div2(pres);  // 9
p2.s10(pres);   // 10
p2.s11(pres);   // 11
p2.s12(pres);   // 12
p2.s13(pres);   // 13
p2.s14(pres);   // 14
p2.s15(pres);   // 15
p2.s16(pres);   // 16
p2.s17(pres);   // 17
p2.s18(pres);   // 18
p2.s19(pres);   // 19
p2.s20(pres);   // 20
p2.s21(pres);   // 21
p2.s22(pres);   // 22

// 第三篇 · 代码即 AGI（23–34）
p3.div3(pres);  // 23
p3.s24(pres);   // 24
p3.s25(pres);   // 25
p3.s26(pres);   // 26
p3.s27(pres);   // 27
p3.s28(pres);   // 28
p3.s29(pres);   // 29
p3.s30(pres);   // 30
p3.s31(pres);   // 31
p3.s32(pres);   // 32
p3.s33(pres);   // 33
p3.s34(pres);   // 34

// 尾声（35–36）
pend.finale(pres);   // 35
pend.closing(pres);  // 36

pres.writeFile({ fileName: __dirname + "/../Anthropic-2万亿IPO的背后-编码模型与AGI-swe.pptx" })
  .then(f => console.log("written:", f))
  .catch(e => { console.error(e); process.exit(1); });
