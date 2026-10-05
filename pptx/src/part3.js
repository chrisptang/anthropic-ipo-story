const { C, FONT, MX, CW, W, H, bg, chrome, title, panel, rect, line, txt, chip, kpi, hbar, vbar, bullets, numItem, arrow, table, divider, notes } = require("./theme");

// ===================== Slide 23: Part III divider =====================
function div3(pres) {
  return divider(pres, 23, "03", "代码即 AGI：递归演化与文明拐点", "PART III · CODE IS AGI",
    "代码能力是通往 AGI 唯一已被验证的跳板——$2T 买的究竟是什么。",
    ["3.1 评测革命\n3.2 代码即 IR", "3.3 护城河\n3.4 AGI 坐标系", "3.5 RSI 闭环\n3.6 安全双轨\n3.7 文明拐点"]);
}

// ===================== Slide 24: Verified 饱和 =====================
function s24(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.1 临界点证据", "SWE-bench Verified 的饱和：旧标尺被刷穿", "一个基准从『黄金标尺』到『失去区分度』，本身就是能力跃迁的历史见证");
  const gens = [
    ["Claude 3 Opus", 33.4, "24.03"], ["3.5 Sonnet v1", 49.0, "24.06"], ["3.5 Sonnet v2", 53.7, "24.10"],
    ["3.7 Sonnet", 70.3, "25.02"], ["4.5 Sonnet", 82.4, "25.11"], ["Fable 5.0", 94.2, "26.06"],
    ["Opus 5.5", 97.8, "26.09"], ["Sonnet 5.5", 98.1, "26.09"],
  ];
  const baseY = 6.0, maxH = 3.9, bw = 1.05, gap = 0.42;
  gens.forEach((g, i) => {
    const x = MX + 0.25 + i * (bw + gap);
    const last = i >= 6;
    vbar(s, x, baseY, bw, (g[1] / 100) * maxH, last ? C.CORAL : C.TEAL, g[0] + "\n" + g[2], g[1] + "%");
  });
  line(s, MX, 6.0 - 0.98 * maxH, 12.09, 0, C.RED, { dash: "dash", width: 1 });
  txt(s, "── ≈98% 饱和线：到 5.x 世代 Verified 已无法拉开代际差距", {
    x: MX + 0.25, y: 1.82, w: 6.5, h: 0.3, fontSize: 10, color: C.RED, align: "left",
  });
  chrome(s, 24, "PART III · 3.1 评测革命");
  notes(s, "Verified 饱和曲线：33%→98%，标尺被刷穿。");
}

// ===================== Slide 25: 双核新标尺 =====================
function s25(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.1 临界点证据", "新双核：SWE-bench Pro × Terminal-Bench 4.0", "从「单文件补丁猜测」到「沙箱终端长程自主」的评测范式跃迁");
  panel(s, MX, 1.95, 5.85, 4.5);
  txt(s, "SWE-bench Pro（Scale AI）", { x: MX + 0.25, y: 2.15, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.TEAL });
  bullets(s, MX + 0.25, 2.6, 5.4, 2.1, [
    { t: "642 个任务 × 11 个企业级巨型仓库", fs: 10.5 },
    { t: "断网隔离：杜绝查阅 PR 作弊", fs: 10.5 },
    { t: "双边门禁：参考补丁必过 + 空补丁必挂", fs: 10.5 },
    { t: "考核跨文件 Monorepo 级重构闭环", fs: 10.5 },
  ]);
  panel(s, MX + 0.25, 4.85, 5.35, 1.4, { fill: C.PANEL2 });
  txt(s, "任务实例 · Celery 连接池泄漏", { x: MX + 0.45, y: 5.0, w: 5, h: 0.3, fontSize: 10.5, bold: true, color: C.TXT });
  txt(s, "跨 3 文件 / 120 行补丁 / 并发回归测试，全程自主复现-定位-修复-验证", { x: MX + 0.45, y: 5.32, w: 5, h: 0.8, fontSize: 9.5, color: C.MUT });
  panel(s, 6.85, 1.95, 5.85, 4.5);
  txt(s, "Terminal-Bench 4.0（Stanford / Harbor / Laude）", { x: 7.1, y: 2.15, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.CORAL });
  bullets(s, 7.1, 2.6, 5.4, 2.1, [
    { t: "66 个校准任务：运维/编译链/安全渗透/ML 排错", fs: 10.5 },
    { t: "资源硬约束：4C/8GB + 15–30 分钟超时", fs: 10.5 },
    { t: "程序化 Verifier 检查系统终态，不看 diff", fs: 10.5 },
    { t: "剔除可暴力试错与易误触发拒答的用例", fs: 10.5 },
  ]);
  panel(s, 7.1, 4.85, 5.35, 1.4, { fill: C.PANEL2 });
  txt(s, "任务实例 · Nginx mTLS / PyTorch DDP 死锁", { x: 7.3, y: 5.0, w: 5, h: 0.3, fontSize: 10.5, bold: true, color: C.TXT });
  txt(s, "全配 mTLS + Lua HMAC 签名；定位 Rank 屏障死锁并改代码——真实运维级难度", { x: 7.3, y: 5.32, w: 5, h: 0.8, fontSize: 9.5, color: C.MUT });
  chrome(s, 25, "PART III · 3.1 双核标尺");
  notes(s, "SWE Pro vs T-Bench 机制对比 + 真实任务实例。");
}

// ===================== Slide 26: Sonnet 逆袭 =====================
function s26(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.1 临界点证据", "反直觉发现：Sonnet 5.5 为何逆袭旗舰 Opus", "Terminal-Bench 4.0 通过率——「快速探测循环」胜过「昂贵脑内仿真」");
  const bars = [
    ["Sonnet 5.5\n$2/$10", 70.6, C.CORAL], ["Opus 5.5\n$4/$20", 66.4, C.TEAL],
    ["GPT-6-Codex\n预览版", 59.2, C.BLUE], ["Fable 5.1\n安全税", 57.9, C.GOLD], ["Gemini 3.1\nPro", 46.2, C.RED],
  ];
  const baseY = 5.5, maxH = 3.0;
  bars.forEach((b, i) => {
    const x = MX + 0.5 + i * 1.5;
    vbar(s, x, baseY, 1.05, (b[1] / 80) * maxH, b[2], b[0], b[1] + "%");
  });
  panel(s, 8.6, 1.95, 4.1, 4.6);
  txt(s, "工程定律", { x: 8.85, y: 2.15, w: 3.6, h: 0.3, fontSize: 12, bold: true, color: C.GOLD });
  bullets(s, 8.85, 2.55, 3.6, 3.8, [
    { t: "终端反馈是廉价且确定的真值：一次 pytest 胜过 5000 字脑内推导", fs: 10.5 },
    { t: "低延迟 → 同等超时内多 30–50%「试错-回溯」轮次", fs: 10.5 },
    { t: "报错即反思的轻量内省，避免过度规划陷阱", fs: 10.5 },
    { t: "Fable 的 57.9% 是「安全税」：高危任务主动拒答换合规", fs: 10, color: C.MUT },
  ]);
  chrome(s, 26, "PART III · 3.1 Sonnet 逆袭");
  notes(s, "Sonnet>Opus：快探测循环定律；Fable 低分=安全税而非智力。");
}

// ===================== Slide 27: 代码即 IR =====================
function s27(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.2 认知操作系统", "代码不是垂类：是通用 Agent 的思维中间表示", "顶级通用 Agent 的底层，几乎 100% 运行在顶级编码基座之上");
  const stages = [
    ["现实世界任务", "跨国行程 / 报销核对\n跨 App 调度 / 系统协同", C.MUT],
    ["认知引擎 · Code-as-Thought", "任务解构为循环/分支/异常\n状态机与变量持久化\n动态合成 API SDK", C.CORAL],
    ["沙箱执行与反馈", "Exit Code / Stderr / HTTP\n编译报错的确定性裁判", C.TEAL],
  ];
  stages.forEach((st, i) => {
    const x = MX + i * 4.25;
    panel(s, x, 1.95, 3.75, 1.9);
    txt(s, st[0], { x: x + 0.2, y: 2.1, w: 3.4, h: 0.35, fontSize: 12.5, bold: true, color: st[2] });
    txt(s, st[1], { x: x + 0.2, y: 2.5, w: 3.4, h: 1.2, fontSize: 10, color: C.MUT });
    if (i < 2) arrow(s, x + 3.85, 2.75, C.FAINT);
  });
  const pillars = [
    ["Code-as-Plan", "循环/分支/Try-Except 是长程行为的形式化骨架"],
    ["动态 API 合成", "不可能预写所有 Tool Call——现场读文档、合成、执行"],
    ["确定性自愈", "代码有 Exit Code：训练出「报错→回溯→修补」闭环"],
    ["结构化状态解析", "DOM/文件系统/AST 都是代码树——UI 操作的本质是符号理解"],
  ];
  pillars.forEach((p, i) => {
    const x = MX + i * 3.03;
    panel(s, x, 4.25, 2.83, 2.2, { fill: C.PANEL2 });
    txt(s, "支柱 " + (i + 1), { x: x + 0.18, y: 4.4, w: 2.5, h: 0.28, fontSize: 10, color: C.CORAL, bold: true });
    txt(s, p[0], { x: x + 0.18, y: 4.68, w: 2.5, h: 0.55, fontSize: 11.5, bold: true, color: C.TXT });
    txt(s, p[1], { x: x + 0.18, y: 5.25, w: 2.5, h: 1.1, fontSize: 9.5, color: C.MUT });
  });
  chrome(s, 27, "PART III · 3.2 代码即 IR");
  notes(s, "代码即 IR：四支柱论证 + 任务→引擎→沙箱管线图。");
}

// ===================== Slide 28: 跨界实证 =====================
function s28(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.2 认知操作系统", "跨界实证：通用管家的内核是代码引擎", "两个 2026 年现象级 Agent 的解剖——它们都运行在编码基座上");
  panel(s, MX, 1.95, 5.85, 4.5);
  txt(s, "Instinct · 个人履职 Agent", { x: MX + 0.25, y: 2.15, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.TEAL });
  bullets(s, MX + 0.25, 2.6, 5.4, 3.6, [
    { t: "任务：汇总一年打车收据、按月归类、与信用卡对账", fs: 10.5 },
    { t: "内部动作：现场写 Python → 无头浏览器登录 → 抓 PDF → OCR → 对账报表", fs: 10.5, color: C.TXT },
    { t: "失败面：任一 CSS 选择器变更 / JSON 未转义 / 浮点舍入错 = 崩溃", fs: 10, color: C.RED },
  ]);
  panel(s, 6.85, 1.95, 5.85, 4.5);
  txt(s, "Meta Muse · VM 沙箱双模 Agent", { x: 7.1, y: 2.15, w: 5.4, h: 0.35, fontSize: 14, bold: true, color: C.GOLD });
  bullets(s, 7.1, 2.6, 5.4, 3.6, [
    { t: "双重身份：个人管家（日程/购票）+ 终端工程师（重构仓库）", fs: 10.5 },
    { t: "底层：自研 Muse Spark 编码基座 + 终端专属模型 + 安全网关", fs: 10.5, color: C.TXT },
    { t: "设计哲学：管家与写代码共享同一套「受限 VM 里调工具并验证」的行动逻辑", fs: 10.5, color: C.MUT },
  ]);
  txt(s, "没有顶级代码能力，就没有通用 Agent —— 两家不约而同地回答了同一个问题。", {
    x: MX, y: 6.6, w: CW, h: 0.35, fontSize: 12, italic: true, color: C.CORAL, align: "center",
  });
  chrome(s, 28, "PART III · 3.2 跨界实证");
  notes(s, "Instinct 与 Muse 案例：通用 Agent=代码内核的行业实证。");
}

// ===================== Slide 29: 护城河解剖 =====================
function s29(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.3 护城河解剖", "为什么偏偏是 Claude 赢了", "Benchmark 证明「赢了」；这一节回答「为什么能赢」");
  panel(s, MX, 1.95, 5.85, 4.6);
  txt(s, "终端轨迹数据飞轮", { x: MX + 0.25, y: 2.15, w: 5.4, h: 0.35, fontSize: 13.5, bold: true, color: C.CORAL });
  const fly = ["Claude Code 全网部署", "真实终端交互轨迹回流", "合成高保真思考链（RLAIF）", "下一代 Claude 更强", "开发者心智进一步锁定"];
  fly.forEach((f, i) => {
    txt(s, f, { x: MX + 0.45, y: 2.6 + i * 0.62, w: 5.2, h: 0.4, fontSize: 11, color: i === 4 ? C.CORAL : C.TXT, bold: i === 4 });
    txt(s, i === 4 ? "↺ 回到起点，复利加速" : "↓", { x: MX + 0.45, y: 2.98 + i * 0.62, w: 5, h: 0.3, fontSize: 10, color: C.FAINT });
  });
  panel(s, 6.85, 1.95, 5.85, 4.6);
  txt(s, "三笔「时间买不回来」的资产", { x: 7.1, y: 2.15, w: 5.4, h: 0.35, fontSize: 13.5, bold: true, color: C.TEAL });
  bullets(s, 7.1, 2.6, 5.4, 3.8, [
    { t: "Agentic RL 五代迭代：环境工程、轨迹清洗、reward shaping 只能用时间换", fs: 10.5 },
    { t: "蒸馏经济学：旗舰能力下放 $2 价位带——对手的成本结构学不会", fs: 10.5 },
    { t: "长程可靠性复利：单步每 +0.5pt，50 步任务成功率 +约 17pt", fs: 10.5 },
    { t: "对照：OpenAI 的 chat 优先 RLHF 路径遗产，到 GPT-6 才把 agentic RL 提为一等公民", fs: 10, color: C.MUT },
  ]);
  chrome(s, 29, "PART III · 3.3 护城河");
  notes(s, "护城河：飞轮 + 三笔时间资产 + OpenAI 路径遗产对照。");
}

// ===================== Slide 30: AGI 预测坐标系 =====================
function s30(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.4 AGI 预测坐标系", "同一张地图，四个位置", "AGI 尚未到来——但预言家们站位的分布，本身就是信息");
  const axY = 3.3, axX = MX + 0.5, axW = 11.1;
  line(s, axX, axY, axW, 0, C.LINE, { width: 2 });
  txt(s, "激进 · 「已越过事件视界」", { x: axX, y: axY - 0.4, w: 4, h: 0.3, fontSize: 10, color: C.FAINT });
  txt(s, "保守 · 「LLM 是死胡同」", { x: axX + axW - 4, y: axY - 0.4, w: 4, h: 0.3, fontSize: 10, color: C.FAINT, align: "right" });
  const pos = [
    { n: "Sam Altman", x: 0.08, d: "「已越过事件视界」\n2025 Agent→2026 新见解→2027 机器人", c: C.BLUE },
    { n: "Dario Amodei", x: 0.3, d: "「强大 AI：2026–27」\n50 年科研压缩成 5 年", c: C.CORAL },
    { n: "Andrej Karpathy", x: 0.62, d: "「Agent 的十年，不是一年」\nmarch of nines · 幽灵非动物", c: C.GOLD },
    { n: "Yann LeCun", x: 0.9, d: "「LLM 通往 AGI 是 BS」\n需要世界模型，已离场创业", c: C.RED },
  ];
  pos.forEach(p => {
    const px = axX + axW * p.x;
    s.addShape("ellipse", { x: px - 0.09, y: axY - 0.09, w: 0.18, h: 0.18, fill: { color: p.c }, line: { type: "none" } });
    txt(s, p.n, { x: px - 1.1, y: axY + 0.25, w: 2.2, h: 0.3, fontSize: 11.5, bold: true, color: p.c, align: "center" });
    txt(s, p.d, { x: px - 1.35, y: axY + 0.6, w: 2.7, h: 1.0, fontSize: 9, color: C.MUT, align: "center" });
  });
  panel(s, MX, 5.05, 5.85, 1.65, { fill: C.PANEL2 });
  txt(s, "全场唯一共识", { x: MX + 0.25, y: 5.2, w: 5.4, h: 0.3, fontSize: 12, bold: true, color: C.GREEN });
  txt(s, "连怀疑派都不否认「代码先亡」——LeCun 的反驳精确地绕开了编码领域。代码是第一个被形式化攻克的智能领域。", {
    x: MX + 0.25, y: 5.55, w: 5.4, h: 1.0, fontSize: 10.5, color: C.MUT,
  });
  panel(s, 6.85, 5.05, 5.85, 1.65, { fill: C.PANEL2 });
  txt(s, "一个可测量的参照物", { x: 7.1, y: 5.2, w: 5.4, h: 0.3, fontSize: 12, bold: true, color: C.TEAL });
  txt(s, "METR 任务时长曲线：Agent 能自主完成的任务长度约每 7 个月翻倍——它度量的是斜坡，不是终点。", {
    x: 7.1, y: 5.55, w: 5.4, h: 1.0, fontSize: 10.5, color: C.MUT,
  });
  chrome(s, 30, "PART III · 3.4 AGI 坐标系");
  notes(s, "预测坐标系：Altman/Amodei/Karpathy/LeCun 四点位 + 共识与参照物。");
}

// ===================== Slide 31: RSI 四流水线 =====================
function s31(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.5 终极自举", "Claude 如何训练下一代 Claude", "Claude 已不只是产品——它是 Anthropic 内部研发流水线的核心研究员");
  const stats = [["~26%", "内部研发与消融任务由 Claude 自主领导"], ["90%+", "研发流水线含 Claude Agent 协作"], ["8×", "研究员人均代码交付 vs 2021–25"]];
  stats.forEach((st, i) => {
    const x = MX + i * 4.12;
    panel(s, x, 1.95, 3.87, 1.35);
    txt(s, st[0], { x: x + 0.22, y: 2.08, w: 1.6, h: 0.6, fontSize: 26, bold: true, color: C.CORAL });
    txt(s, st[1], { x: x + 1.85, y: 2.2, w: 1.9, h: 1.0, fontSize: 9.5, color: C.MUT });
  });
  const pipes = [
    ["① 集群运维与算力优化", "自动捕获 NCCL 死锁、py-spy 调用栈、自写 Triton 算子压榨 MFU"],
    ["② 合成思考链（RLAIF）", "沙箱中自问自答自验证，产出含反思纠错的推理轨迹；高阶 Claude 当评委"],
    ["③ 自动化红蓝对抗", "数百万次压力测试：Sleeper Agent 探测、越狱、提权与沙箱逃逸封堵"],
    ["④ 自建 RL 环境", "为下一代模型自动编写模拟沙箱——从 Linux 漏洞修复到金融清算网关"],
  ];
  pipes.forEach((p, i) => {
    const x = MX + (i % 2) * 6.24, y = 3.6 + Math.floor(i / 2) * 1.5;
    panel(s, x, y, 5.85, 1.32);
    txt(s, p[0], { x: x + 0.2, y: y + 0.12, w: 5.4, h: 0.3, fontSize: 11.5, bold: true, color: C.TEAL });
    txt(s, p[1], { x: x + 0.2, y: y + 0.48, w: 5.45, h: 0.75, fontSize: 9.5, color: C.MUT });
  });
  txt(s, "四条流水线汇入同一出口：下一代更强的 Claude —— 再反哺驱动下一轮迭代。", {
    x: MX, y: 6.75, w: CW, h: 0.35, fontSize: 11.5, bold: true, color: C.GOLD, align: "center",
  });
  chrome(s, 31, "PART III · 3.5 RSI 闭环");
  notes(s, "RSI：26%/90%/8x 三数字 + 四大自举流水线。");
}

// ===================== Slide 32: ASL 阶梯 + 双轨 =====================
function s32(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.6 安全防线", "RSP · ASL 阶梯 · 商业双轨制", "给递归演化装上制度化的刹车");
  table(s, MX, 1.9, 7.2, [0.9, 3.2, 3.1], [
    { cells: ["等级", "能力边界 / 触发门槛", "强制防御措施"] },
    { cells: ["ASL-1", "无灾难性自主风险", "基础防火墙"] },
    { cells: ["ASL-2", "初级代码与工具能力", "云鉴权 + 审计日志 + 输出审查"] },
    { cells: [{ t: "ASL-3", bold: true, color: C.GOLD }, { t: "重大滥用潜力；T-Bench>50% 即达门槛", color: C.GOLD }, { t: "物理隔离训练、多签密钥、全量红队、第三方评估", color: C.GOLD }] },
    { cells: [{ t: "ASL-4", bold: true, color: C.RED }, "完全自主 RSI + 国家级战力", "Kill Switch · 受限国防合作 · 未公开探索"] },
  ], { rh: 0.62, fs: 9.5 });
  panel(s, 8.35, 1.9, 4.35, 2.15);
  txt(s, "Claude Fable（商业版）", { x: 8.6, y: 2.05, w: 3.9, h: 0.3, fontSize: 12.5, bold: true, color: C.CORAL });
  txt(s, "内置网络攻击/生化双轨检测器；高危探针触发拒答——少 13pt 通过率，换全球商用零合规风险。", {
    x: 8.6, y: 2.45, w: 3.85, h: 1.4, fontSize: 10, color: C.MUT,
  });
  panel(s, 8.35, 4.2, 4.35, 2.15);
  txt(s, "Claude Mythos（专研特许）", { x: 8.6, y: 4.35, w: 3.9, h: 0.3, fontSize: 12.5, bold: true, color: C.GOLD });
  txt(s, "无内置拦截的极限内核，仅对顶级安保实体开放——智能前沿与消费市场彻底分轨。", {
    x: 8.6, y: 4.75, w: 3.85, h: 1.4, fontSize: 10, color: C.MUT,
  });
  txt(s, "RSP 核心承诺：能力跨过 ASL 门槛但安全审计未过 → 强制停训停部署，宁可承受商业损失。", {
    x: MX, y: 6.55, w: CW, h: 0.35, fontSize: 11, italic: true, color: C.MUT, align: "center",
  });
  chrome(s, 32, "PART III · 3.6 安全双轨");
  notes(s, "ASL 阶梯表 + Fable/Mythos 双轨：安全溢价的制度化表达。");
}

// ===================== Slide 33: Software 3.0 谱系 =====================
function s33(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.7 文明拐点", "Software 3.0：全行业「代码先亡」的预言谱系", "不是一家之言——行业领袖先后说出同一句话");
  const quotes = [
    ["2023.05", "Jensen Huang", "「人人都是程序员——跟计算机说句话就行」", C.MUT],
    ["2024.12", "Satya Nadella", "「SaaS = CRUD + 业务逻辑；逻辑迁往 AI tier，应用将崩塌」", C.MUT],
    ["2025.03", "Dario Amodei", "「3–6 个月内 AI 写 90% 的代码」", C.CORAL],
    ["2025.06", "Andrej Karpathy", "「Prompts are now programs——用英语给 LLM 编程」", C.TEAL],
    ["2025.06", "Sam Altman", "「我们已越过事件视界——写代码将永远不同」", C.BLUE],
    ["2025.08", "Thomas Dohmke", "「开发者 → 代码创意总监；要么拥抱 AI 要么出局」", C.MUT],
  ];
  quotes.forEach((q, i) => {
    const x = MX + (i % 2) * 6.24, y = 1.9 + Math.floor(i / 2) * 1.28;
    txt(s, q[0], { x, y, w: 0.9, h: 0.3, fontSize: 10, color: C.FAINT });
    txt(s, q[1], { x: x + 0.95, y, w: 2.2, h: 0.3, fontSize: 11.5, bold: true, color: q[3] });
    txt(s, q[2], { x: x + 0.95, y: y + 0.32, w: 5.1, h: 0.85, fontSize: 10, color: C.TXT });
  });
  panel(s, MX, 5.85, 12.09, 1.0, { fill: C.PANEL2 });
  txt(s, "另一种声音：Karpathy 自我刹车「这是 Agent 的十年」· LeCun「LLM 死胡同」· 工程派「prompt 是概率谈判不是程序」。Anthropic 的回答：终端的 Exit Code，正好给概率性的 prompt 接上了确定性裁判。", {
    x: MX + 0.3, y: 6.02, w: 11.5, h: 0.8, fontSize: 10.5, color: C.MUT,
  });
  chrome(s, 33, "PART III · 3.7 Software 3.0");
  notes(s, "Software 3.0 语录谱系 + 反方校准与落点。");
}

// ===================== Slide 34: 终极定价 =====================
function s34(pres) {
  const s = pres.addSlide(); bg(s);
  title(s, "3.7 文明拐点", "$2T 买的是什么：对自治滑杆转速的押注", "从「人机对话」到「无人值守」——自治滑杆每向右一档，Token 经济学翻一个量级");
  const axY = 3.3, axX = MX + 0.6, axW = 10.9;
  line(s, axX, axY, axW, 0, C.LINE, { width: 3 });
  const stops = [
    { x: 0.0, t: "Tab 补全", s: "2022 Copilot\n人在驾驶位" },
    { x: 0.25, t: "Cmd+K 改块", s: "IDE 辅助\n人主导" },
    { x: 0.5, t: "Agent 模式", s: "2025 Claude Code\n人机共治" },
    { x: 0.75, t: "无人值守舰队", s: "2026 当下\n7×24 自主闭环", hot: true },
    { x: 1.0, t: "RSI 自我演化", s: "下一代\n智能体繁育智能体" },
  ];
  stops.forEach(st => {
    const px = axX + axW * st.x;
    s.addShape("ellipse", { x: px - 0.12, y: axY - 0.12, w: 0.24, h: 0.24, fill: { color: st.hot ? C.CORAL : C.LINE }, line: st.hot ? { color: C.CORAL, width: 1.5 } : { type: "none" } });
    txt(s, st.t, { x: px - 1.1, y: axY - 0.75, w: 2.2, h: 0.3, fontSize: 11, bold: true, color: st.hot ? C.CORAL : C.TXT, align: "center" });
    txt(s, st.s, { x: px - 1.1, y: axY + 0.3, w: 2.2, h: 0.7, fontSize: 9, color: C.MUT, align: "center" });
  });
  txt(s, "当前位置 · 2026.10", { x: axX + axW * 0.75 - 1.1, y: axY - 1.15, w: 2.2, h: 0.3, fontSize: 9.5, color: C.CORAL, align: "center", bold: true });
  panel(s, MX, 5.3, 12.09, 1.5, { fill: C.PANEL2 });
  txt(s, "$2T 买的不是「每年收几百亿 API 费的软件供应商」，而是全球第一个具有递归自我演化能力、内嵌安全阀门、能 7×24 自我繁育下一代智能的生产力母体。", {
    x: MX + 0.3, y: 5.55, w: 11.5, h: 1.0, fontSize: 12, bold: true, color: C.GOLD,
  });
  chrome(s, 34, "PART III · 3.7 文明拐点");
  notes(s, "终极定价：自治滑杆可视化——$2T=对转速的杠杆化押注。");
}

module.exports = { div3, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34 };
