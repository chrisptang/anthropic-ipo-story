const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'output');
const qa = path.join(out, 'qa', 'gpt-v2');
fs.mkdirSync(qa, { recursive: true });
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';
pres.author = '内部学习资料 · GPT';
pres.title = 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI';
pres.subject = 'Claude 的工程能力、编码模型的训练优势与 AGI 路径';
pres.lang = 'zh-CN';
pres.theme = { headFontFace: 'PingFang SC', bodyFontFace: 'PingFang SC', lang: 'zh-CN' };
const C = { ink: '242927', muted: '637069', white: 'FFFFFF', pale: 'F0F4F1', soft: 'FAEEE8', terra: 'BC5D3E', sage: '316A52', dark: '182B23', panel: '263D32', gold: 'F3C078', grid: 'DBE3DD', code: 'D9EADD' };
const S = {
  skill: 'https://github.com/anthropics/skills/tree/main/skills/pptx',
  ipo: 'https://www.investing.com/news/stock-market-news/exclusiveanthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs-4921382',
  s35: 'https://www.anthropic.com/news/claude-3-5-sonnet',
  s37: 'https://www.anthropic.com/news/claude-3-7-sonnet',
  s4: 'https://www.anthropic.com/news/claude-4',
  s55: 'https://www.anthropic.com/claude-sonnet-5-5',
  agents: 'https://www.anthropic.com/engineering/building-effective-agents',
  context: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
  tools: 'https://www.anthropic.com/engineering/writing-tools-for-agents',
  harness: 'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',
  practices: 'https://code.claude.com/docs/en/best-practices',
  mcp: 'https://www.anthropic.com/engineering/code-execution-with-mcp',
  codex: 'https://openai.com/index/introducing-codex/',
  cli: 'https://openai.com/index/introducing-o3-and-o4-mini/',
  swe: 'https://www.swebench.com/',
  pro: 'https://github.com/scaleapi/SWE-bench_Pro-os',
  tb: 'https://www.tbench.ai/news/terminal-bench-4-0',
  nginx: 'https://nginx.org/en/docs/http/ngx_http_ssl_module.html',
  research: 'https://www.anthropic.com/institute/measuring-pace-of-ai-development',
  rsp: 'https://www.anthropic.com/news/responsible-scaling-policy-v3',
  dario: 'https://darioamodei.com/essay/machines-of-loving-grace',
  karpathy: 'https://youtu.be/LCEmiRjPEtQ',
};
const slides = [];
const objects = [];
let section = '开场';
function rect(sl, x, y, w, h, fill) {
  sl.addShape(pres.ShapeType.rect, { x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0 } });
}
function text(sl, str, x, y, w, h, size = 19, color = C.ink, extra = {}) {
  if (!str) return;
  sl.addText(str, { x, y, w, h, fontFace: 'PingFang SC', fontSize: size, color, margin: 0, valign: 'mid', lang: 'zh-CN', ...extra });
  objects.push({ slide: slides.length, text: str, x, y, w, h, fontSize: size });
}
function arrow(sl, x, y, w, h = 0, color = C.muted) {
  sl.addShape(pres.ShapeType.line, { x, y, w, h, line: { color, width: 1.5, endArrowType: 'triangle' } });
}
function node(sl, label, x, y, w, h = 0.8, fill = C.pale, color = C.ink) {
  rect(sl, x, y, w, h, fill);
  text(sl, label, x + 0.18, y + 0.12, w - 0.36, h - 0.24, 20, color, { bold: true });
}
function base(title, dark = false, caption = '') {
  const sl = pres.addSlide();
  slides.push({ title, section });
  sl.background = { color: dark ? C.dark : C.white };
  text(sl, section, 0.65, 0.43, 10.8, 0.28, 11, dark ? C.gold : C.terra, { bold: true });
  text(sl, String(slides.length).padStart(2, '0'), 11.95, 0.43, 0.7, 0.28, 11, dark ? C.code : C.muted, { align: 'right' });
  if (title) text(sl, title, 0.65, 1.02, 12.0, 0.88, 33, dark ? C.white : C.ink, { bold: true });
  text(sl, caption || '内部学习 · 2026.10 · 来源与延伸解释见演讲者备注', 0.65, 7.02, 12.0, 0.22, 9, dark ? C.code : C.muted);
  return sl;
}
function finish(sl, body, keys = [], local = []) {
  const refs = [...new Set(keys.map(k => S[k]))];
  sl.addNotes(`${body}\n\n阅读资料：\n${refs.join('\n')}\n${local.length ? '\n仓库素材：\n' + local.join('\n') : ''}\n资料日期：2026-10-03。`);
  Object.assign(slides[slides.length - 1], { notes: body, sources: refs, local });
}
function card(sl, x, y, w, h, title, body, fill = C.pale) {
  rect(sl, x, y, w, h, fill);
  text(sl, title, x + 0.25, y + 0.23, w - 0.5, 0.57, 23, C.ink, { bold: true });
  text(sl, body, x + 0.25, y + 1.02, w - 0.5, h - 1.28, 19, C.muted, { valign: 'top', paraSpaceAfter: 10 });
}
function three(sl, arr, y = 2.3, h = 3.75) {
  arr.forEach((a, i) => card(sl, 0.65 + i * 4.08, y, 3.84, h, a[0], a[1], i === 1 ? C.soft : C.pale));
}
function flow(sl, arr, y = 2.55, bodyH = 1.9) {
  const gap = 0.38, w = (12 - gap * (arr.length - 1)) / arr.length;
  arr.forEach((a, i) => {
    const x = 0.65 + i * (w + gap);
    node(sl, a[0], x, y, w, 0.84, i % 2 ? C.soft : C.pale);
    text(sl, a[1], x + 0.1, y + 1.14, w - 0.2, bodyH, 19, C.muted, { valign: 'top' });
    if (i < arr.length - 1) arrow(sl, x + w + 0.06, y + 0.42, gap - 0.12);
  });
}
function table(sl, headers, rows, widths, y = 2.25, rowH = 0.94) {
  rect(sl, 0.65, y, 12, 0.58, C.dark);
  let x = 0.65;
  headers.forEach((v, i) => { text(sl, v, x + 0.2, y + 0.1, widths[i] - 0.4, 0.38, 15, C.white, { bold: true }); x += widths[i]; });
  rows.forEach((row, r) => {
    const ry = y + 0.58 + r * rowH;
    rect(sl, 0.65, ry, 12, rowH, r % 2 ? C.white : C.pale);
    let cx = 0.65;
    row.forEach((v, c) => { text(sl, v, cx + 0.2, ry + 0.1, widths[c] - 0.4, rowH - 0.2, 17, c === 0 ? C.ink : C.muted, { bold: c === 0 }); cx += widths[c]; });
  });
}
function terminal(sl, label, code, x, y, w, h) {
  rect(sl, x, y, w, h, C.dark);
  text(sl, label, x + 0.25, y + 0.23, w - 0.5, 0.35, 13, C.gold, { bold: true });
  text(sl, code, x + 0.25, y + 0.88, w - 0.5, h - 1.15, 18, C.code, { fontFace: 'PingFang SC', valign: 'top', breakLine: false });
}
function chart(sl, data, x, y, w, h, extra = {}) {
  sl.addChart(pres.ChartType.bar, data, { x, y, w, h, barDir: 'col', showTitle: false, showLegend: data.length > 1, legendPos: 'b', legendFontSize: 12, chartColors: [C.terra, C.sage], showValue: true, dataLabelPosition: 'outEnd', dataLabelColor: C.ink, dataLabelFormatCode: '0.0', dataLabelBkgrdColor: C.white, catAxisLabelFontFace: 'PingFang SC', catAxisLabelFontSize: 12, catAxisLabelColor: C.muted, valAxisLabelFontSize: 11, valAxisLabelColor: C.muted, valAxisMinVal: 0, valAxisMaxVal: 100, valGridLine: { color: C.grid, width: 0.6 }, catGridLine: { style: 'none' }, showBorder: false, showShadow: false, ...extra });
}

{
  const sl = base('', true);
  text(sl, 'Anthropic 2 万亿 IPO 的背后：', 0.8, 1.45, 11.7, 0.98, 39, C.white, { bold: true });
  text(sl, '编码模型与 AGI', 0.8, 2.65, 11.7, 1.08, 51, C.gold, { bold: true });
  text(sl, 'Claude 为什么强，代码为什么成为智能的行动语言。', 0.85, 4.06, 11.5, 0.7, 24, C.code);
  [['01', 'Claude 的工程优势'], ['02', '编码模型的进步机制'], ['03', '通往 AGI 的路径']].forEach((a, i) => {
    node(sl, `${a[0]}   ${a[1]}`, 0.85 + i * 4.02, 5.45, 3.69, 0.87, C.panel, C.white);
  });
  finish(sl, '本报告从一个具体体验出发：Claude 在复杂编码任务中的优势，往往比单个 benchmark 上的分差更明显。接下来先拆解这种体验的来源，再解释软件环境为什么能持续推动模型进步，最后讨论代码能力如何成为通用行动与 AI 研发的基础。', [], ['docs/01_claude_evolution_benchmarks.md', 'docs/04_coding_models_as_general_agent_backbone.md', 'docs/07_chapter6_openai_codex_counterattack.md']);
}
{
  const sl = base('两万亿的想象，来自工作能力的扩张');
  text(sl, '$2T', 0.75, 2.32, 3.7, 1.3, 75, C.terra, { fontFace: 'Arial', bold: true });
  text(sl, 'IPO 目标估值', 0.82, 3.74, 3.55, 0.56, 23, C.muted);
  [['写代码', '从一段答案，进入软件的构建与维护。'], ['完成数字工作', '从开发工具，扩展到数据与业务系统。'], ['参与智能研发', '进入下一代智能的研发过程。']].forEach((a, i) => {
    const y = 2.18 + i * 1.28;
    node(sl, a[0], 4.75, y, 2.56, 0.75, i === 1 ? C.soft : C.pale);
    text(sl, a[1], 7.64, y + 0.04, 4.81, 0.67, 19, C.muted);
  });
  text(sl, '市场正在给更大范围的任务委托定价。', 0.82, 5.72, 11.6, 0.66, 27, C.sage, { bold: true });
  finish(sl, '2 万亿美元是 IPO 目标估值报道中的数字，尚不是已经完成的挂牌市值。它提供一个理解技术路线的入口：如果编码模型可以被用于更广的数字任务，还可以加快 AI 研发，它的价值想象就会超出单一开发工具。本报告重点解释这条能力扩张路径，估值是背景。', ['ipo']);
}

section = '第一篇 · Claude 为什么强';
{
  const sl = base('Claude 的强，体现为四种工程判断');
  table(sl, ['能力', '在真实任务中的表现', '缺失时的后果'], [
    ['找准问题', '沿调用链定位原因，辨别环境与代码错误', '一直修改表面症状'],
    ['控制改动', '保持原有约束，只改与目标有关的部分', '修好一处，破坏另一处'],
    ['选择证据', '读取相关文件，运行能区分假设的检查', '输出很多，信息增量很少'],
    ['完成交付', '报错后调整方案，验证实际运行结果', '留下半成品，让人接管'],
  ], [2.05, 6.25, 3.7], 2.25, 0.91);
  finish(sl, '这里把内部使用体验拆成四个可以观察的行为。模型要理解需求和代码关系，也要在行动时避免扩大范围、找到有用证据并完成验证。Claude 3.7 的发布说明明确表示，推理模型的优化重点更多转向真实商业任务，而较少侧重数学与计算机竞赛。Claude 4 和 Sonnet 5.5 分别继续强调持续工程工作与更少步骤。这些公开信息与内部使用体验相吻合，具体优势仍来自模型和工程系统的共同作用。', ['s37', 's4', 's55']);
}
{
  const sl = base('四个转折：从代码助手到持续工作的 Agent');
  const items = [
    ['2024.06', 'Claude 3.5 Sonnet', '更强的代码修改与执行能力；中档模型开始承担实际开发任务。'],
    ['2025.02', '3.7 + Claude Code', '混合推理与终端入口结合；查仓库、改文件、跑测试进入同一任务。'],
    ['2025.05', 'Claude 4 + Code GA', '思考中使用工具、并行调用和文件记忆；持续任务成为产品重点。'],
    ['2026.09', 'Sonnet 5.5', '减少步骤与 Token 消耗，\n日常编码更快，协作更顺畅。'],
  ];
  items.forEach((a, i) => {
    const y = 2.18 + i * 1.02;
    text(sl, a[0], 0.8, y, 1.7, 0.49, 21, C.terra, { fontFace: 'Arial', bold: true });
    node(sl, a[1], 2.72, y - 0.03, 3.55, 0.75);
    text(sl, a[2], 6.62, y - 0.01, 5.8, 0.76, 18, C.muted);
  });
  finish(sl, '四次发布展示出一条能力路线。3.5 的突破是代码任务表现和速度；3.7 将可调思考与 Claude Code 研究预览放在一起；Claude 4 加入交错工具使用、并行工具调用和文件记忆，Claude Code 同期正式可用；5.5 强调日常工程任务的效率。这一演进逐渐把理解代码、选择行动与持续执行结合起来。', ['s35', 's37', 's4', 's55']);
}
{
  const sl = base('一个连接泄漏，考验的是生命周期理解');
  text(sl, '场景：任务取消后，Redis 连接持续占用，最终耗尽连接池。', 0.75, 2.13, 11.8, 0.68, 24, C.terra, { bold: true });
  flow(sl, [['取消入口', '任务被撤销\n异常如何传播？'], ['异步回调', '结果消费者停止\n谁还持有连接？'], ['清理路径', '正常与异常退出\n是否都归还资源？'], ['回归验证', '复现泄漏被消除\n原有行为仍保持']], 3.28, 1.65);
  text(sl, '真正的修复，要把入口、回调与资源归属连起来。', 0.8, 6.05, 11.6, 0.56, 24, C.sage, { bold: true });
  finish(sl, '仓库提供的 Celery 场景适合说明跨文件理解。连接池耗尽只是末端症状；解决问题需要追踪取消、异步消费者与资源释放的关系。直接提高连接池上限或添加泛化重试，可能掩盖泄漏。此页为工程教学场景，展示应当理解的依赖关系，具体补丁要由复现与回归测试确定。', [], ['docs/02_swe_bench_pro_and_terminal_bench_deep_dive.md']);
}
{
  const sl = base('Claude Code 把模型接入了一套工作系统');
  terminal(sl, '模型负责判断', '下一步看哪里？\n哪个假设值得验证？\n怎样修改，何时结束？', 0.65, 2.3, 4.1, 3.8);
  arrow(sl, 4.94, 4.1, 0.43);
  [['工具接口', '搜索、读取、补丁、终端'], ['状态管理', '任务目标、进度、文件与压缩'], ['执行环境', '依赖、权限、进程与测试']].forEach((a, i) => {
    const y = 2.3 + i * 1.21;
    node(sl, a[0], 5.62, y, 2.21, 0.85, C.pale);
    text(sl, a[1], 8.17, y + 0.08, 4.17, 0.66, 20, C.muted);
  });
  finish(sl, 'Harness 是围绕模型构建的工具与执行系统。同一个基座模型，在不同接口、上下文和环境里，完成率可能差很多。模型决定下一步，系统负责把行动变成真实的文件修改和进程执行，并把结果带回模型。Claude Code 的优势来自模型与这些环节的配合，公开资料不足以将全部体验优势归结为某一种私有训练算法。', ['agents', 'harness', 'practices']);
}
{
  const sl = base('大仓库的理解，依赖按需建立上下文');
  terminal(sl, '工作记忆里的高价值信息', '目标 + 项目规则\n相关函数 + 调用关系\n最近失败 + 已验证结论', 0.65, 2.36, 4.23, 3.87);
  [['先看结构', '目录、规则、测试入口'], ['再查关系', '符号、引用、相关文件'], ['带着问题读', '关键实现与报错位置']].forEach((a, i) => {
    const y = 2.38 + i * 1.18;
    node(sl, a[0], 5.35, y, 2.52, 0.83, i === 1 ? C.soft : C.pale);
    text(sl, a[1], 8.23, y + 0.07, 4.08, 0.62, 20, C.muted);
  });
  finish(sl, 'Anthropic 的上下文工程文章描述了 Claude Code 的混合策略：项目规则提前进入上下文，文件搜索与内容读取在任务执行时按需发生。目录与文件路径是索引，模型通过探索逐层建立理解。长窗口提供空间，但无关信息仍会分散注意力；有效工作依赖当前任务的高信号信息。这解释了为什么最大上下文长度不能单独预测工程体验。', ['context']);
}
{
  const sl = base('工具接口的细节，会改变 Agent 的行动质量');
  terminal(sl, '低信息量回显', 'search_logs()\n→ 大量无关日志\n\nedit_file()\n→ "operation failed"', 0.65, 2.32, 5.83, 3.9);
  terminal(sl, '可用于下一步判断的回显', 'search_logs(trace_id, time_range)\n→ 相关异常 + 附近事件\n\nedit_file(path, expected_text)\n→ 未匹配位置 + 当前文本片段', 6.81, 2.32, 5.84, 3.9);
  finish(sl, '模型通过工具感知工程环境。参数名明确、输出与问题相关、错误可定位，能减少重复调用和参数猜测。Anthropic 公开报告称，精确改进工具描述曾显著减少 Sonnet 3.5 的错误，并提高 SWE-bench Verified 表现。因此 Agent 能力的一部分存在于接口设计中。页面左右两组接口是教学示例，不是 Claude Code 的真实函数签名。', ['tools']);
}
{
  const sl = base('Sonnet 的优势：把能力用在合适的任务上');
  chart(sl, [{ name: 'Sonnet 5.5', labels: ['Terminal-Bench 4.0', 'FrontierCode 1.1'], values: [70.6, 52.1] }, { name: 'Opus 5.5', labels: ['Terminal-Bench 4.0', 'FrontierCode 1.1'], values: [66.4, 54.4] }], 0.75, 2.22, 7.35, 3.98, { valAxisMaxVal: 80, valAxisMajorUnit: 20 });
  text(sl, '日常实现：速度与协作', 8.55, 2.55, 3.94, 0.68, 23, C.terra, { bold: true });
  text(sl, '更少冗余步骤，\n更快得到可检查的结果。', 8.55, 3.45, 3.92, 0.96, 20, C.muted);
  text(sl, '开放难题：持续判断', 8.55, 4.8, 3.94, 0.62, 23, C.sage, { bold: true });
  text(sl, '架构取舍与模糊需求，\nOpus 仍有优势。', 8.55, 5.64, 3.92, 0.9, 20, C.muted);
  finish(sl, '2026-09-28 的官方表格：Sonnet 5.5 在 Terminal-Bench 4.0 为 70.6%，Opus 5.5 为 66.4%；FrontierCode 1.1 为 Sonnet Xhigh 52.1%、Opus 54.4%。TB 的 Opus 数值是 Xhigh 的最高分，两种评测各有自身条件。官方同时说明 Opus 在复杂、开放且需要持续判断的工作中更强。更少步骤和更快反馈是效率线索，单个榜单排名本身不能确定原因。', ['s55']);
}
{
  const sl = base('长任务的连续性，靠可恢复的工作状态');
  node(sl, '会话 A：实现一个功能', 0.65, 2.28, 4.26, 0.9, C.soft);
  node(sl, '会话 B：读取状态再继续', 8.39, 2.28, 4.26, 0.9, C.pale);
  arrow(sl, 5.06, 2.74, 3.12);
  [['功能清单', '哪些要求已完成，哪些仍未验证'], ['进度文件', '决策、失败原因与下一步'], ['Git + 测试', '可恢复的改动，\n可复验的结果。']].forEach((a, i) => card(sl, 0.65 + i * 4.08, 3.78, 3.84, 2.57, a[0], a[1], i === 1 ? C.soft : C.pale));
  finish(sl, 'Anthropic 的长运行 Agent 实验引入初始化与后续编码两类会话：先建立功能清单、环境脚本和进度记录，再逐项实现并留下清楚的工作产物。仅压缩对话不能保证下一会话知道哪些功能真正通过。文件与版本记录提供持久状态，使新会话能够接班；这属于系统层面的记忆，不等于模型已经具备完整的持续学习。', ['harness']);
}
{
  const sl = base('CLI、MCP 与 Skills，组成一条实际工作流');
  text(sl, '例：修复订单同步失败，定位原因并准备补丁。', 0.78, 2.1, 11.7, 0.6, 24, C.terra, { bold: true });
  three(sl, [['MCP：接入业务', '从日志与工单系统\n获取故障线索。\n\n解决“连到哪里”。'], ['CLI：执行工程', '搜索仓库、复现错误、\n修改代码并运行测试。\n\n解决“怎样操作”。'], ['Skills：复用经验', '封装诊断顺序、脚本\n和交付要求。\n\n解决“流程怎么做”。']], 3.0, 3.55);
  finish(sl, '命令行擅长本地文件与进程操作，MCP 为外部系统提供统一接入，Skills 封装可复用的指令、脚本和资源。三者可以在同一任务中协作。Anthropic 的代码执行文章演示了将 MCP 工具暴露为代码接口，按需加载定义，在运行环境中处理大量中间数据。代码编排扩大了工具组合能力，也减少了逐条经由模型搬运数据的开销。', ['mcp', 'practices']);
}

section = '第二篇 · 编码模型如何持续进步';
{
  const sl = base('代码环境，提供了可规模化的训练反馈');
  table(sl, ['条件', '代码领域的优势', '训练上的价值'], [
    ['大量任务', '开源仓库、Issue、实现与修改记录', '获得丰富的问题与解决示例'],
    ['可执行环境', '容器、依赖、编译器和测试框架', '重复试验，观察行为结果'],
    ['可自动评分', '复现用例、回归测试和约束检查', '降低逐条人工评判的成本'],
    ['高价值应用', '开发者频繁使用，有明确交付要求', '产品失败暴露新的能力缺口'],
  ], [2.05, 5.65, 4.3], 2.3, 0.91);
  finish(sl, '编码模型的进步，既来自可学习的代码与任务，也来自可重复运行、可较低成本检查的环境。相比完全依赖偏好判断的开放文本，代码能产生更明确的行为证据。自动验证仍只覆盖测试和规则所表达的要求；训练反馈的质量取决于任务和检查器的质量。产品中的失败可以用于改进评测与研发，训练数据使用还取决于相应数据政策。', ['codex', 'pro', 'agents']);
}
{
  const sl = base('Agentic RL 学习的是整段解题过程');
  flow(sl, [['给定任务', '代码库、需求\n初始环境'], ['生成轨迹', '搜索、修改\n运行、纠错'], ['环境评分', '问题解决\n回归与约束'], ['更新模型', '训练强化\n更有效的策略']], 2.68, 1.7);
  rect(sl, 0.65, 5.86, 12, 0.7, C.soft);
  text(sl, '任务内纠错改变当前方案；训练更新改变之后处理任务的能力。', 0.89, 5.99, 11.51, 0.45, 21, C.terra, { bold: true });
  finish(sl, '页面是编码 Agent 强化学习的机制示意：模型在环境里产生多步轨迹，评分反馈用于训练更新。OpenAI 在 2025 年 5 月明确披露 codex-1 使用真实编码任务的强化学习，学习遵循指令和反复测试。Claude 的具体训练配方未完整公开，不能从系统体验反推唯一算法。模型在一次对话里根据报错修正方案，与训练阶段更新权重，是不同层面的改进。', ['codex', 's37']);
}
{
  const sl = base('评测在追问：Agent 究竟完成了哪一层工作？');
  table(sl, ['评测', '主要检查', '能力问题'], [
    ['SWE-bench Verified', '真实 Issue 的补丁能否通过测试', '能否修复已有软件问题？'],
    ['SWE-bench Pro V2', '更困难、长程的代码库任务', '复杂工程任务能否推进到底？'],
    ['Terminal-Bench 4.0', '终端环境里的多步执行结果', '能否配置、运行并排除故障？'],
    ['FrontierCode', '修改是否达到可合并的标准', '结果能否直接进入工程流程？'],
  ], [3.22, 4.73, 4.05], 2.25, 0.91);
  finish(sl, 'Verified 本身也支持 Agent 工具使用和多文件补丁。Pro V2 提供 642 个验证任务和离线执行协议；TB 4.0 更新资源配额、修复任务并移除部分饱和任务，以减少评测噪声。FrontierCode 进一步关注可合并质量。它们从不同角度观察工程能力，分数同时受到模型、harness、预算、环境和评分规则影响。', ['swe', 'pro', 'tb', 's55']);
}
{
  const sl = base('终端任务的终点，是系统行为符合要求');
  text(sl, '工程示例：让 Nginx 只接受持有有效客户端证书的请求。', 0.75, 2.1, 11.86, 0.68, 23, C.terra, { bold: true });
  terminal(sl, '配置与启动', 'ssl_client_certificate client-ca.pem;\nssl_verify_client on;\n\nnginx -t\nreload / 启动服务', 0.65, 3.07, 5.8, 3.3);
  [['正向请求', '有效证书 → 预期响应'], ['反向请求', '无证书 / 错误证书 → 拒绝'], ['运行状态', '端口、证书链与日志正常']].forEach((a, i) => {
    const y = 3.13 + i * 1.08;
    node(sl, a[0], 6.8, y, 1.96, 0.76, i === 1 ? C.soft : C.pale);
    text(sl, a[1], 9.1, y + 0.03, 3.34, 0.7, 18, C.muted);
  });
  finish(sl, '这个示例说明编写配置、通过语法检查和满足访问控制，是三个不同的完成层次。Nginx 官方文档定义客户端 CA 与 ssl_verify_client；真实验收还应确认有效证书可以访问、无证书和错误证书不能访问，以及服务实际使用的是更新后的配置。案例用于解释终端任务的行为验收，并非本次运行记录或某一道官方 benchmark 的成绩。', ['nginx'], ['docs/02_swe_bench_pro_and_terminal_bench_deep_dive.md']);
}
{
  const sl = base('榜单差距小，使用体验仍可能差很多');
  text(sl, '内部体验：Claude 更常把复杂编码任务推进到可用结果。', 0.75, 2.08, 11.84, 0.64, 23, C.terra, { bold: true });
  text(sl, 'FrontierCode 1.1：52.1% vs 49.3%\nSonnet 5.5 Xhigh / GPT-6 Sol · 官方页面所列配置', 0.78, 2.99, 11.7, 0.77, 19, C.muted);
  text(sl, '50 步全部成功的概率（%）', 0.85, 3.82, 5.62, 0.22, 12, C.muted);
  chart(sl, [{ name: '50 步全部成功的概率', labels: ['每步 98%', '每步 99.5%'], values: [100 * Math.pow(0.98, 50), 100 * Math.pow(0.995, 50)] }], 0.76, 4.04, 5.75, 2.55, { valAxisMaxVal: 100, valAxisMajorUnit: 50, showLegend: false });
  text(sl, '示意：独立步骤，失败不可恢复', 0.85, 6.66, 5.62, 0.2, 10, C.muted);
  text(sl, '工程体验还包含：', 6.92, 4.12, 5.43, 0.49, 24, C.sage, { bold: true });
  text(sl, '需要人接管几次？\n错误后是否能恢复？\n改动能否放心合并？', 6.92, 4.91, 5.41, 1.5, 22, C.ink, { valign: 'top' });
  finish(sl, 'FrontierCode 数值来自 Sonnet 5.5 发布页，各模型使用其列出的 effort 设置；这是一项任务评测的接近结果。用户的内部使用体验另有明显差距。左下数学示例假设 50 个独立步骤、每步成功率恒定、失败不可恢复：0.98^50=36.4%，0.995^50=77.8%。这不是对两模型真实单步成功率的估计，也不能由 benchmark 总分换算得到。真实 Agent 的恢复能力、任务分布和人工接管成本，会进一步影响体感。', ['s55'], ['docs/07_chapter6_openai_codex_counterattack.md']);
}
{
  const sl = base('Codex 的追赶，也指向模型与执行系统的结合');
  flow(sl, [['2025.04.16', 'Codex CLI\n本地终端与仓库'], ['2025.05.16', '云端 Codex\n独立沙箱、并行任务'], ['持续迭代', '编码模型、工具接口\n上下文与工作流']], 2.54, 1.8);
  text(sl, 'codex-1 已在真实编码任务中训练“修改 → 测试 → 继续修复”。', 0.8, 5.43, 11.68, 0.9, 25, C.sage, { bold: true });
  finish(sl, 'Codex CLI 于 2025-04-16 推出，云端 Codex 于 2025-05-16 推出，两条路线并行。codex-1 当时已经使用真实编码任务的强化学习，并可以反复运行测试。双方都在发展编码模型与工作系统的结合。仓库补充的追赶记录有助于理解竞争方向；竞争逐渐深入到模型、工具接口和日常工作流的每一个环节。', ['cli', 'codex'], ['docs/07_chapter6_openai_codex_counterattack.md']);
}

section = '第三篇 · 为什么 AGI 需要编码能力';
{
  const sl = base('代码，是把目标变成行动的一种中间表示');
  card(sl, 0.65, 2.37, 3.44, 3.96, '人的目标', '整理本月账单，\n找出重复扣款，\n生成可核对的报告。', C.soft);
  arrow(sl, 4.21, 4.2, 0.39);
  terminal(sl, '可执行计划', 'records = load_files()\nnormalized = clean(records)\nduplicates = match(normalized)\nreport = reconcile(duplicates)', 4.75, 2.37, 5.05, 3.96);
  arrow(sl, 9.94, 4.2, 0.38);
  node(sl, '可检查产物', 10.47, 2.37, 2.18, 0.91);
  text(sl, '异常清单\n证据来源\n核对结果', 10.64, 3.73, 1.82, 1.95, 21, C.muted, { valign: 'top' });
  finish(sl, '代码能够表达变量、条件、循环和状态，把自然语言需求转换为可执行的操作结构。中间表示意味着代码既可以是最终产品，也可以仅在 Agent 内部用来组织工作。本例函数是说明性伪代码。通用 Agent 可以同时使用语言、结构化工具调用和视觉信息；代码在其中提供组合行动和处理数据的能力。', ['mcp'], ['docs/04_coding_models_as_general_agent_backbone.md']);
}
{
  const sl = base('会写代码，Agent 就能按需制造工具');
  three(sl, [['发现新系统', '读 API 文档与数据格式，\n理解认证、参数和返回值。\n\n无需事先适配每种任务。'], ['生成适配层', '组合接口，补齐格式转换，\n加入分页、重试和校验。\n\n把通用能力接到具体系统。'], ['执行并复用', '在沙箱中试运行，\n保存脚本与验证方式。\n\n下一次直接调用已有成果。']], 2.5, 3.9);
  finish(sl, '预定义工具只能覆盖提前考虑过的需求。编码模型能够读取接口说明，在受限环境里编写新脚本或适配代码，从而扩展可做任务的范围。MCP 代码执行的公开实现展示了按需发现接口、组合多个服务与保存可复用操作。生成工具仍依赖真实接口、权限和可靠验证；价值在于减少每个新任务都需要人工写专用工具的负担。', ['mcp', 'tools']);
}
{
  const sl = base('一项报销工作，已经包含小型软件系统');
  flow(sl, [['收集', '文件与网页\n获取票据'], ['结构化', '日期、金额、税率\n提取成记录'], ['核对', '去重、匹配账单\n执行业务规则'], ['交付', '异常清单与报表\n保留来源证据']], 2.7, 1.85);
  text(sl, '程序员之外的用户，也在委托检索、数据处理和系统协作。', 0.8, 5.77, 11.62, 0.79, 25, C.terra, { bold: true });
  finish(sl, '报销是通用办公场景，却需要数据结构、批量处理、去重、跨系统核对和产物生成。代码能力使 Agent 能够组合这些步骤，把大数据留在执行环境里，只将摘要和异常带入模型。生活与办公任务因此也能够复用软件工程中的数据处理与工具组合能力。领域规则与业务授权仍来自真实组织。', ['mcp'], ['docs/04_coding_models_as_general_agent_backbone.md']);
}
{
  const sl = base('科学研究，也有一条依赖代码的执行链');
  flow(sl, [['提出假设', '读论文\n形成可检验问题'], ['构建实验', '实现算法\n准备数据与环境'], ['运行与分析', '调度计算\n比较结果与误差'], ['形成结论', '复现、对照\n判断是否支持假设']], 2.66, 1.85);
  text(sl, '编码能力降低研究执行成本；科学判断决定结果是否有意义。', 0.8, 5.83, 11.65, 0.69, 25, C.sage, { bold: true });
  finish(sl, '计算科学与 AI 研究需要把想法落实为代码、实验、数据和分析。具备编码能力的模型能承担大量执行工作，并把研究假设更快送到实证环节。实验运行成功只说明过程完成，结论还取决于对照、统计、复现和领域知识。对生物医学等领域，物理实验与实际观测的时间也会成为约束。', ['dario', 'research']);
}
{
  const sl = base('Amodei 的想象：能够行动的科学家群体', true);
  text(sl, '一座数据中心里的“天才之国”', 0.83, 2.24, 11.6, 0.83, 36, C.gold, { bold: true });
  [['广泛能力', '知识、编程、工程与研究'], ['持续行动', '完成需要数小时、数天的任务'], ['并行协作', '多个实例处理不同问题并共享成果']].forEach((a, i) => {
    const y = 3.52 + i * 0.95;
    node(sl, a[0], 0.85, y, 2.67, 0.73, C.panel, C.white);
    text(sl, a[1], 3.92, y + 0.06, 8.24, 0.57, 23, C.code);
  });
  finish(sl, '《Machines of Loving Grace》将强大 AI 描绘成具备多领域能力、可使用人类数字接口、持续完成任务且可并行协作的研究与行动者群体。代码是这些数字行动的重要载体。Amodei 的关切是智能如何加快科研与改善生活，也强调实验、硬件和制度等互补条件会影响速度。这是愿景和假设框架，尚不是已经实现的能力清单。', ['dario']);
}
{
  const sl = base('Claude 已经进入下一代 Claude 的研发');
  text(sl, '26%', 0.82, 2.39, 4.5, 1.5, 86, C.terra, { fontFace: 'Arial', bold: true });
  text(sl, 'AI 主导研发工作\n高层目标输入，人类监督', 0.89, 4.09, 4.28, 1.06, 23, C.ink);
  card(sl, 5.7, 2.42, 6.8, 1.81, '>90% 至少达到 AI 协作', 'AI 已成为多数研发任务的一部分。', C.pale);
  card(sl, 5.7, 4.63, 6.8, 1.81, '完全自主：尚未报告', '所测任务类别仍有人类参与或监督。', C.soft);
  finish(sl, 'Anthropic 研发自动化指数截至 2026 年 8 月：26% 的工作达到 AI 主导（AL4），超过 90% 至少达到协作（AL3）；所测类别没有完全自主（AL5）。指数按研发任务类型评级并汇总，AL4 指从高层提示完成大部分任务、人类监督。这是 AI 参与 AI 研发的直接公开证据，但不等同于 26% 的原创突破由 Claude 独立完成。', ['research']);
}
{
  const sl = base('AI 研发里，四类工作正在被重新分工');
  table(sl, ['工作', '编码 Agent 可以承担的部分', '保留下来的判断'], [
    ['基础设施', '诊断训练故障，优化内核与数据管线', '性能增益和系统可靠性'],
    ['数据与评价', '生成候选题目，构建评分与检查工具', '数据质量、偏差和泛化'],
    ['实验执行', '编写实验脚本，调度运行和整理结果', '研究方向和因果解释'],
    ['安全评估', '扩展红队场景，复现失败并追踪变化', '风险意义与部署决定'],
  ], [2.2, 6.0, 3.8], 2.27, 0.91);
  finish(sl, 'AI 研发可以从基础设施、数据与评价、实验执行和安全评估四类工作来理解。公开自动化指数描述总体参与程度；这些具体操作展示了编码 Agent 在不同研发环节里的用途。编码 Agent 能将大量研究执行转为可复用脚本和环境，但真实增益仍需要性能、泛化和风险上的检查。', ['research'], ['docs/05_chapter4_rsi_and_safety_paradigms.md']);
}
{
  const sl = base('RSI：研究工具开始参与改进研究工具');
  flow(sl, [['当前模型', '编程与分析能力'], ['研发加速', '更多有效实验\n更少工程等待'], ['后继模型', '训练与验证\n获得更强能力']], 2.54, 1.75);
  arrow(sl, 10.44, 5.36, -7.99, 0, C.terra);
  text(sl, '后继模型重新进入研发过程', 3.81, 5.7, 6.38, 0.54, 23, C.terra, { bold: true });
  finish(sl, '递归改进发生在代际之间：当前 AI 提高研发效率，研发产出产生更强后继模型，后继模型再参与下一轮。中间关键是有效研究增益，而不只是生成代码更多。AI 承担工程工作可能提高实验吞吐，但算力、研究创意和验证能力也可能成为瓶颈。现阶段公开指数描述的仍是人类监督下的研发；完全自主制造后继模型是更强的目标状态。', ['research']);
}
{
  const sl = base('能力进入真实系统，安全控制也进入执行链');
  flow(sl, [['识别风险能力', '评估生化等高风险\n能力与滥用条件'], ['分配访问权限', '模型与任务分层\n限制数据、环境和操作'], ['监控行动', '运行前检查\n事后分析与人工处理']], 2.63, 1.9);
  text(sl, 'ASL-3 对应更严格的防护要求；研发 Agent 也需要持续监督。', 0.8, 5.92, 11.69, 0.75, 24, C.sage, { bold: true });
  finish(sl, 'Anthropic 于 2025 年 5 月对相关模型启用 ASL-3 防护。ASL 是与能力风险相匹配的防护要求，RSP 3.0 继续调整自愿承诺与透明度安排。官方研发监督披露还展示了行动前在线监控和事后监控两层机制。代码能力扩大了行动范围，因此防护从文本输出扩展到权限、执行环境和行动监督，安全措施的效果仍需要独立检查。', ['rsp', 'research']);
}
{
  const sl = base('Software 3.0：自然语言成为新的编程入口');
  three(sl, [['1.0 · 显式代码', '业务规则、数据库操作\n与确定性的系统边界。\n\n由程序指令表达行为。'], ['2.0 · 模型权重', '识别、预测和语言能力\n在训练中形成。\n\n由数据与目标塑造行为。'], ['3.0 · 自然语言', '用户说明目标，\nLLM 组织与执行工作。\n\n由 Prompt 编排模型行为。']], 2.47, 3.85);
  finish(sl, 'Karpathy 在 2025 年 YC 演讲中提出 Software 3.0：自然语言 Prompt 开始对 LLM 编程。一个 Agent 应用可以同时用 Prompt 定义任务，用模型权重提供判断，用传统代码访问数据库和执行规则。编码模型在其中既能生成工具，也能操作已有软件。三种范式组成新的软件系统，而生成程序代码只是变化的一部分。', ['karpathy'], ['docs/08_software_3_0_discourse_survey.md']);
}
{
  const sl = base('编码打开了行动空间，AGI 还要跨过三道坎');
  three(sl, [['目标与判断', '需求可能模糊，\n价值和约束可能冲突。\n\n能够执行之前，\n先要知道什么值得做。'], ['长期学习', '经验需要跨任务保存，\n错误需要带来稳定改进。\n\n文件记忆有帮助，\n持续学习仍更困难。'], ['现实反馈', '物理实验有时间成本，\n软件测试也有覆盖盲区。\n\n需要真实观测，\n才能检验模型的判断。']], 2.45, 3.89);
  finish(sl, '本报告把编码能力视为通向能行动、能研究的 AGI 的关键路径：它提供可执行计划、工具组合和实验实施能力。但通用智能还依赖目标理解、持续学习和现实验证。Karpathy 的自治滑杆说明放权程度受可靠性影响；Amodei 则强调智能与物理条件的互补。代码测试给出局部行为证据，不能覆盖全部业务意义和科学真理。', ['karpathy', 'dario']);
}
{
  const sl = base('程序员是首批用户，智能研发是更大的应用', true);
  const items = [
    ['Claude 的优势', '判断与行动配合，减少工程任务中的接管和返工。'],
    ['编码模型的成功', '可执行环境与验证反馈，支撑持续的训练和产品迭代。'],
    ['通向 AGI 的路径', '把目标变成数字行动，\n再用于科学研究与下一代 AI 的研发。'],
  ];
  items.forEach((a, i) => {
    const y = 2.38 + i * 1.3;
    node(sl, a[0], 0.85, y, 3.26, 0.83, C.panel, C.white);
    text(sl, a[1], 4.55, y - 0.01, 7.76, 0.88, 23, C.code);
  });
  finish(sl, '编码首先服务软件工程，随后成为连接数据、工具和系统的通用能力，并进入智能研发自身。Claude 的吸引力在于这套能力能以相对连贯的方式用于真实任务。两万亿叙事所押注的是能力继续扩展的空间；它最终需要通过更长、更复杂、可被委托的工作来兑现。');
}
{
  section = '延伸阅读';
  const sl = base('沿着这条能力路径，继续阅读');
  const links = [
    ['Claude 的产品转折', '3.7 Sonnet 与 Claude Code', 's37'],
    ['最新工程表现', 'Sonnet 5.5 发布与评测', 's55'],
    ['上下文与连续工作', 'Context engineering / Long-running harness', 'context'],
    ['工具与代码编排', 'Writing tools / Code execution with MCP', 'mcp'],
    ['编码模型训练', 'OpenAI：Introducing Codex', 'codex'],
    ['工程能力评测', 'SWE-bench Pro / Terminal-Bench 4.0', 'tb'],
    ['AI 研发与监督', 'Measuring the pace of AI development', 'research'],
    ['强大 AI 的愿景', 'Amodei / Karpathy 原文与演讲', 'dario'],
  ];
  links.forEach((a, i) => {
    const x = 0.65 + (i % 2) * 6.15, y = 2.22 + Math.floor(i / 2) * 1.07;
    rect(sl, x, y, 0.65, 0.66, C.pale);
    text(sl, String(i + 1).padStart(2, '0'), x, y + 0.1, 0.65, 0.46, 19, C.ink, { align: 'center', bold: true });
    text(sl, a[0], x + 0.97, y, 4.69, 0.39, 20, C.ink, { bold: true });
    text(sl, a[1], x + 0.97, y + 0.53, 4.69, 0.34, 12, C.terra, { hyperlink: { url: S[a[2]] } });
  });
  finish(sl, '原始工程文章与产品披露，可以进一步解释这份报告中的机制。每页备注包含具体来源和工程场景的上下文。', ['s35', 's37', 's4', 's55', 'context', 'harness', 'tools', 'mcp', 'codex', 'cli', 'pro', 'tb', 'research', 'rsp', 'dario', 'karpathy']);
}

const escaped = objects.filter(o => o.x < 0.5 || o.y < 0.3 || o.x + o.w > 12.86 || o.y + o.h > 7.27);
if (escaped.length) throw new Error(`Text outside margins: ${JSON.stringify(escaped)}`);
const file = path.join(out, 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI_gpt.pptx');
async function build() {
  await pres.writeFile({ fileName: file });
  fs.writeFileSync(path.join(qa, 'slide-manifest.json'), JSON.stringify({ file, slides, objects }, null, 2));
  const markdown = slides.map((s, i) => `## ${String(i + 1).padStart(2, '0')} ${s.title || pres.title}\n\n${objects.filter(o => o.slide === i + 1).map(o => o.text).join('\n\n')}\n\n${s.notes}\n\n${s.sources.map(url => `[阅读原文](${url})`).join(' · ')}`).join('\n\n');
  fs.writeFileSync(path.join(qa, 'content.md'), markdown);
  fs.writeFileSync(path.join(__dirname, 'docs', 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI_大纲_gpt-6-1-sol.md'), `# ${pres.title}\n\n内部学习演示大纲 · GPT 修订版 · 2026-10-03\n\n第一篇：Claude 为什么强；第二篇：编码模型如何持续进步；第三篇：为什么 AGI 需要编码能力。\n\n${markdown}\n`);
  console.log(`Created ${slides.length} slides: ${file}`);
}
build().catch(error => { console.error(error); process.exitCode = 1; });
