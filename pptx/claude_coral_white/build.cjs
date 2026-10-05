const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Internal Learning';
pptx.subject = 'Claude 的工程优势、编码模型的进步机制与 AGI';
pptx.title = 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI';
pptx.company = '内部分享';
pptx.lang = 'zh-CN';
pptx.theme = {headFontFace:'PingFang SC', bodyFontFace:'PingFang SC', lang:'zh-CN'};
pptx.defineSlideMaster({title:'WHITE', background:{color:'FFFFFF'}, objects:[]});
const W=13.333333,H=7.5;
const C={ink:'282824',muted:'706D67',coral:'D97757',coralDark:'A74C32',coralPale:'FAEEE8',yellow:'F4D77B',yellowPale:'FCF5DD',gray:'F3F3F0',line:'DFDFD8',white:'FFFFFF',sage:'738A78'};
const ST=pptx.ShapeType;
const out=path.join(__dirname,'Anthropic_编码模型与AGI_珊瑚白.pptx');
const manifest=[]; let num=0;
function bounds(x,y,w,h){if(x<0||y<0||x+w>W+.01||y+h>H+.01)throw new Error(`out of slide: ${x},${y},${w},${h}`);}
function text(s,t,x,y,w,h,size=18,opt={}){bounds(x,y,w,h);s.addText(t,{x,y,w,h,fontFace:'PingFang SC',fontSize:size,color:C.ink,margin:0,breakLine:false,valign:'mid',...opt});}
function shape(s,type,x,y,w,h,fill=C.gray,opt={}){bounds(x,y,w,h);s.addShape(type,{x,y,w,h,fill:{color:fill},line:{color:fill,transparency:100},...opt});}
function box(s,x,y,w,h,fill=C.gray,opt={}){shape(s,ST.roundRect,x,y,w,h,fill,{radius:.12,...opt});}
function line(s,x1,y1,x2,y2,color=C.line,width=1.5,arrow=false,dash){s.addShape(ST.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,...(arrow?{endArrowType:'triangle'}:{}),...(dash?{dashType:'dash'}:{})}});}
function circle(s,x,y,d,fill=C.coral){shape(s,ST.ellipse,x,y,d,d,fill);}
function label(s,t,x,y,w=2,color=C.coralDark){text(s,t,x,y,w,.3,11,{bold:true,color});}
function pill(s,t,x,y,w,fill=C.coralPale){box(s,x,y,w,.4,fill);text(s,t,x+.12,y,w-.24,.4,11,{bold:true});}
function card(s,x,y,w,h,k,title,body,fill=C.gray){box(s,x,y,w,h,fill);label(s,k,x+.24,y+.22,w-.48);text(s,title,x+.24,y+.7,w-.48,.62,23,{bold:true});text(s,body,x+.24,y+1.46,w-.48,h-1.68,17,{color:C.muted,valign:'top',paraSpaceAfter:8});}
function step(s,x,y,w,n,t,b,fill=C.gray){box(s,x,y,w,1.48,fill);circle(s,x+.18,y+.2,.36,C.white);text(s,n,x+.18,y+.2,.36,.36,12,{bold:true,align:'center',color:C.coralDark});text(s,t,x+.68,y+.18,w-.86,.43,19,{bold:true});text(s,b,x+.2,y+.85,w-.4,.4,13,{color:C.muted});}
function bottom(s,t){box(s,.65,6.25,12.02,.48,C.yellowPale);text(s,t,.9,6.25,11.52,.48,15,{bold:true});}
function slide(section,title,sub,source,notes){let s=pptx.addSlide('WHITE');num++;label(s,section,.65,.35,10);text(s,title,.65,.9,12.02,.66,32,{bold:true});if(sub)text(s,sub,.65,1.65,12.02,.48,16,{color:C.muted});text(s,source||'内部学习 · 编码模型与 AGI',.65,7.06,11.25,.2,8.5,{color:C.muted});text(s,String(num).padStart(2,'0'),12.05,7.02,.6,.3,10,{align:'right',color:C.muted});if(notes)s.addNotes(notes);manifest.push({slide:num,section,title,source});return s;}
function svgPng(s,name,x,y,w,h){s.addImage({path:path.join(__dirname,'assets',name+'.svg.png'),x,y,w,h});}
const source={sonnet:'https://www.anthropic.com/claude-sonnet-5-5',harness:'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',context:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',tools:'https://www.anthropic.com/engineering/writing-tools-for-agents',code:'https://www.anthropic.com/engineering/code-execution-with-mcp',codex:'https://openai.com/index/introducing-codex/',rd:'https://www.anthropic.com/institute/measuring-pace-of-ai-development',karpathy:'https://youtu.be/LCEmiRjPEtQ'};

// 01 — cover: technical glyph, three concrete questions, no finance lecture.
{
 const s=slide('ANTHROPIC / 内部学习','',null,'编码模型与 AGI · 公司内部分享','两万亿美元在仓库中为 IPO 目标估值，不是已完成挂牌市值。估值只作为入口，本演示的重点是工程能力、训练机制与通用行动。');
 text(s,'Anthropic\n2 万亿 IPO 的背后',.7,1.45,7.2,1.65,40,{bold:true,breakLine:false});
 text(s,'编码模型与 AGI',.73,3.42,7,.7,29,{color:C.coralDark,bold:true});
 svgPng(s,'intelligence',8.4,1.48,4.2,4.2);
 const ys=[4.75,5.4,6.05];['Claude 为什么强？','编码模型如何持续进步？','为什么 AGI 需要编码能力？'].forEach((t,i)=>{circle(s,.75,ys[i]+.06,.3,i===1?C.yellow:C.coral);text(s,t,1.25,ys[i],6.6,.42,20);});
}
// 02 — one financial hook, not an ARR section.
{
 const s=slide('开场 / 能力扩张','两万亿的想象，来自工作能力的扩张','资本数字只是入口：开发工具 → 数字工作 → 智能研发。','来源：仓库 IPO 研究；目标估值报道见备注', 'IPO 目标估值报道链接：https://www.investing.com/news/stock-market-news/exclusiveanthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs-4921382。目标估值不等于实际市值，也不等于融资额。三层能力为本报告的分析框架。');
 text(s,'$2T',.72,2.65,3.2,1.3,78,{bold:true,color:C.coral});text(s,'IPO 目标估值',.82,4.05,3,.4,18,{color:C.muted});
 [['写代码','构建、修复与维护软件'],['完成数字工作','组合数据、工具与业务系统'],['参与智能研发','进入下一代模型的研发过程']].forEach((a,i)=>{box(s,4.4,2.4+i*1.13,8.2,.89,i===2?C.yellowPale:C.gray);text(s,'0'+(i+1),4.65,2.64+i*1.13,.6,.32,14,{color:C.coralDark,bold:true});text(s,a[0],5.45,2.54+i*1.13,2.4,.45,22,{bold:true});text(s,a[1],8.05,2.6+i*1.13,4.15,.34,15,{color:C.muted});});
 bottom(s,'市场押注的，不只是一款工具，而是更大范围的任务委托。');
}
// 03 — product chronology.
{
 const s=slide('第一幕 / Claude 为什么强','四次转折：理解代码、选择行动、持续执行','终端入口把模型能力变成了可反复运行的工作方式。','来源：Anthropic 3.5 / 3.7 / Claude 4 / Sonnet 5.5 发布资料', ['https://www.anthropic.com/news/claude-3-5-sonnet','https://www.anthropic.com/news/claude-3-7-sonnet','https://www.anthropic.com/news/claude-4',source.sonnet].join('\n'));
 line(s,1.2,3.08,12.1,3.08,C.line,3);
 const items=[['2024.06','3.5 Sonnet','更强的代码修改\n速度与能力兼顾'],['2025.02','3.7 + Code','可调思考 + 终端\n查、改、测进入同一任务'],['2025.05','Claude 4','工具与思考交错\n长任务与 Code 正式可用'],['2026.09','Sonnet 5.5','减少冗余步骤\n日常工程执行更高效']];
 items.forEach((a,i)=>{const x=.75+i*3.15;label(s,a[0],x,2.5,2.6);circle(s,x+.8,2.92,.32,i===3?C.yellow:C.coral);text(s,a[1],x,3.65,2.7,.5,23,{bold:true});text(s,a[2],x,4.4,2.7,.88,16,{color:C.muted,valign:'top'});});
}
// 04 — engineering judgement matrix.
{
 const s=slide('第一幕 / 工程判断','Claude 的强，体现在四种工程判断','不是输出更多代码，而是更常把任务推进到可用结果。','来源：内部工程体验；Anthropic 产品与 Agent 工程资料',source.tools+'\n'+source.harness);
 const rows=[['找准问题','沿调用链识别原因','反复修改表面症状'],['控制改动','保持约束，限定修改范围','修好一处，破坏另一处'],['选择证据','运行能区分假设的检查','搜索很多，信息增量很少'],['完成交付','出错后恢复，核对真实结果','留下半成品，让人接管']];
 label(s,'工程判断',.95,2.43,2);label(s,'可靠执行',4.05,2.43,4);label(s,'缺失时的代价',8.9,2.43,3,C.muted);
 rows.forEach((r,i)=>{let y=3+i*.67;box(s,.7,y,11.95,.56,i%2?C.white:C.gray);text(s,r[0],.95,y,2,.56,20,{bold:true});text(s,r[1],4.05,y,4.6,.56,18);text(s,r[2],8.9,y,3.5,.56,16,{color:C.muted});});
 bottom(s,'判断与行动配合，决定任务是否需要人反复接管。');
}
// 05 — dependency map / bug case.
{
 const s=slide('第一幕 / 真实工程','连接耗尽只是症状，修复要看懂生命周期','任务取消后，Redis 连接没有归还，最终耗尽连接池。','来源：仓库 Celery 教学场景；非本次运行记录','工程教学场景来自 docs/02_swe_bench_pro_and_terminal_bench_deep_dive.md。此页不宣称是已复现的官方评测题或真实运行结果。');
 const labels=[['任务取消','异常从哪里进入？'],['异步回调','谁还持有连接？'],['资源清理','每条退出路径都归还？'],['回归验证','泄漏消失，原行为保留？']];
 labels.forEach((r,i)=>{const x=.7+i*3.18;step(s,x,2.62,2.75,String(i+1),r[0],r[1],i===2?C.coralPale:C.gray);if(i<3)line(s,x+2.8,3.36,x+3.1,3.36,C.coral,2,true);});
 box(s,.7,4.72,5.7,1.02,C.gray);label(s,'只改表面',.95,4.9,2,C.muted);text(s,'提高连接池上限，推迟问题爆发',.95,5.32,5.2,.27,17);
 box(s,6.8,4.72,5.8,1.02,C.yellowPale);label(s,'修复关系',7.05,4.9,2);text(s,'追踪资源归属，补齐异常退出路径',7.05,5.32,5.25,.27,17,{bold:true});
}
// 06 — working system, no proprietary-training speculation.
{
 const s=slide('第一幕 / 工作系统','Claude Code 把模型接入一套工作系统','同一个模型，工具接口、上下文与环境不同，交付能力也会不同。','来源：Anthropic · Building effective agents / Long-running harnesses',source.harness+'\nhttps://www.anthropic.com/engineering/building-effective-agents');
 box(s,.8,2.65,4.1,2.9,C.coralPale);label(s,'模型判断',1.1,2.95,3);text(s,'下一步看哪里？\n哪个假设值得验证？\n何时可以结束？',1.1,3.65,3.5,1.42,23,{bold:true,paraSpaceAfter:12});
 line(s,5.0,3.7,6.05,3.7,C.coral,2.2,true);line(s,6.05,4.65,5,4.65,C.muted,1.6,true);
 [['工具接口','搜索、读取、修改、运行'],['工作状态','目标、进度、已验证结论'],['执行环境','依赖、权限、进程、测试']].forEach((r,i)=>{box(s,6.2,2.55+i*1.1,6.2,.85,i===1?C.yellowPale:C.gray);text(s,r[0],6.5,2.7+i*1.1,1.8,.42,21,{bold:true});text(s,r[1],8.55,2.74+i*1.1,3.6,.34,16,{color:C.muted});});
 bottom(s,'Harness：让判断变成真实行动，再把环境反馈带回模型的执行系统。');
}
// 07 — context selection.
{
 const s=slide('第一幕 / 上下文','大仓库的理解，靠按需建立高价值上下文','窗口容量决定能装多少；检索策略决定现在该看什么。','来源：Anthropic · Effective context engineering',source.context);
 box(s,.7,2.55,5.75,3.18,C.gray);box(s,6.85,2.55,5.75,3.18,C.coralPale);
 text(s,'一次塞进整座仓库',.95,2.82,5.2,.5,23,{bold:true});text(s,'围绕当前问题逐层探索',7.1,2.82,5.2,.5,23,{bold:true});
 for(let i=0;i<30;i++){let x=1.03+(i%10)*.49,y=3.66+Math.floor(i/10)*.46;shape(s,ST.rect,x,y,.34,.25,i%9===0?C.coral:'D8D8D1');}
 text(s,'大量无关实现挤占工作记忆',.98,5.07,5.1,.34,16,{color:C.muted});
 ['项目规则 + 测试入口','相关函数 + 调用关系','最近失败 + 已验证结论'].forEach((t,i)=>{pill(s,t,7.12,3.65+i*.52,4.9,i===2?C.yellowPale:C.white);});
}
// 08 — tool feedback comparison.
{
 const s=slide('第一幕 / 工具设计','回显有多清楚，下一步判断就有多准确','Agent 通过工具感知工程环境；错误信息也是行动材料。','来源：Anthropic · Writing tools for agents',source.tools+'\n左右为教学接口示例，非真实 Claude Code 函数签名。');
 const cols=[{x:.7,title:'低信息量回显',fill:C.gray,code:'edit_file()\n→ operation failed',body:'不知道哪里失败\n继续猜参数、重复尝试'},{x:6.85,title:'可定位的回显',fill:C.yellowPale,code:'edit_file(path, expected_text)\n→ 未匹配位置 + 当前片段',body:'把失败变成新证据\n缩小范围，精确修正'}];
 cols.forEach(a=>{box(s,a.x,2.6,5.75,3.25,a.fill);text(s,a.title,a.x+.25,2.87,5.2,.5,23,{bold:true});box(s,a.x+.25,3.6,5.25,1,C.white);text(s,a.code,a.x+.45,3.73,4.86,.72,17,{fontFace:'Menlo',color:C.coralDark});text(s,a.body,a.x+.25,4.95,5.2,.65,17,{color:C.muted});});
}
// 09 — native chart, Keynote tested after generation.
{
 const s=slide('第一幕 / 工程表现','Sonnet 的优势：把能力用在合适的任务上','终端执行效率，与开放难题中的持续判断，是不同的优势。','来源：Anthropic · Sonnet 5.5 发布表；各模型为页面所列配置',source.sonnet+'\nTerminal-Bench 4.0：Sonnet 5.5 70.6%，Opus 5.5 66.4%。FrontierCode 1.1：Sonnet Xhigh 52.1%，Opus 54.4%。两基准量纲相同但任务与条件不同，不是统一能力排名。');
 s.addChart(pptx.ChartType.bar,[{name:'Sonnet 5.5',labels:['Terminal-Bench 4.0','FrontierCode 1.1'],values:[70.6,52.1]},{name:'Opus 5.5',labels:['Terminal-Bench 4.0','FrontierCode 1.1'],values:[66.4,54.4]}],{x:.7,y:2.52,w:8.3,h:3.45,catAxisLabelFontFace:'PingFang SC',catAxisLabelFontSize:13,valAxisLabelFontSize:11,valAxisMinVal:0,valAxisMaxVal:100,valAxisMajorUnit:25,catAxisLabelColor:C.ink,valAxisLabelColor:C.muted,chartColors:[C.coral,C.yellow],showLegend:true,legendPos:'b',legendFontSize:12,legendFontFace:'PingFang SC',showTitle:false,showValue:true,dataLabelColor:C.ink,dataLabelFormatCode:'0.0"%"',dataLabelPosition:'outEnd',showBorder:false,showCatName:false,showShadow:false,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1},catAxisLineShow:false,valAxisLineShow:false,gapSizePct:70,showMarker:false});
 // Editable vector display layer: Keynote 12 drops imported chart frames.
 // Original native chart and workbook remain behind this opaque layer.
 shape(s,ST.rect,.7,2.52,8.3,3.45,C.white);
 for(let v=0;v<=100;v+=25){let y=5.45-v/100*2.28;line(s,1.38,y,8.72,y,C.line,.7);text(s,String(v)+'%',.77,y-.13,.5,.25,10,{color:C.muted,align:'right'});}
 [['Terminal-Bench 4.0',70.6,66.4],['FrontierCode 1.1',52.1,54.4]].forEach((r,i)=>{let x=2.23+i*3.43;[r[1],r[2]].forEach((v,j)=>{let h=v/100*2.28;shape(s,ST.rect,x+j*.79,5.45-h,.57,h,j?C.yellow:C.coral);text(s,v.toFixed(1)+'%',x+j*.79-.15,5.45-h-.36,.88,.27,13,{bold:true,align:'center'});});text(s,r[0],x-.5,5.57,2.45,.29,13,{align:'center'});});
 shape(s,ST.rect,2.67,6.02,.18,.18,C.coral);text(s,'Sonnet 5.5',2.99,5.97,1.62,.28,12);shape(s,ST.rect,5.25,6.02,.18,.18,C.yellow);text(s,'Opus 5.5',5.57,5.97,1.55,.28,12);
 box(s,9.42,2.63,3.18,3.22,C.gray);label(s,'任务匹配',9.68,2.88,2.6);text(s,'日常实现\n速度与协作\n\n开放难题\n持续判断',9.68,3.49,2.6,1.9,21,{bold:true});
 bottom(s,'更少步骤是效率线索；一个榜单，不能独自解释全部工程体验。');
}
// 10 — reliability illustration; native line chart.
{
 const s=slide('第一幕 / 长程可靠性','小错误会在长任务里累积放大','简化示意：50 个独立步骤，每步可靠性恒定，失败不可恢复。','数学示意；不是模型实测，也不能由 benchmark 分数换算','0.98^50=36.4%；0.99^50=60.5%；0.995^50=77.8%。该独立、不可恢复假设不描述真实 Agent 的全部行为，真实系统还能重试、纠错与请求人接管。');
 const ns=[1,10,20,30,40,50];s.addChart(pptx.ChartType.line,[{name:'每步 98%',labels:ns.map(String),values:ns.map(n=>100*Math.pow(.98,n))},{name:'每步 99.5%',labels:ns.map(String),values:ns.map(n=>100*Math.pow(.995,n))}],{x:.65,y:2.43,w:8.2,h:3.55,chartColors:[C.coral,C.sage],showLegend:true,legendPos:'b',legendFontSize:12,valAxisMinVal:0,valAxisMaxVal:100,valAxisMajorUnit:25,valAxisLabelFormatCode:'0"%"',valAxisLabelFontSize:11,catAxisLabelFontSize:11,catAxisTitle:'任务步骤数',showCatName:false,showValue:false,showMarker:true,markerSize:5,lineSize:2.5,showBorder:false,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1},catAxisLineShow:false,valAxisLineShow:false});
 shape(s,ST.rect,.65,2.43,8.2,3.55,C.white);
 const plot={x:1.37,y:2.78,w:6.78,h:2.57};
 for(let v=0;v<=100;v+=25){let y=plot.y+plot.h-v/100*plot.h;line(s,plot.x,y,plot.x+plot.w,y,C.line,.7);text(s,v+'%',.75,y-.13,.5,.25,10,{align:'right',color:C.muted});}
 [1,10,20,30,40,50].forEach(n=>{let x=plot.x+(n-1)/49*plot.w;text(s,String(n),x-.2,5.49,.4,.25,11,{align:'center',color:C.muted});});
 [[.98,C.coral],[.995,C.sage]].forEach(([p,col])=>{let prev=null;for(let n=1;n<=50;n++){let x=plot.x+(n-1)/49*plot.w,y=plot.y+plot.h-Math.pow(p,n)*plot.h;if(prev)line(s,prev.x,prev.y,x,y,col,2.3);prev={x,y};if([1,10,20,30,40,50].includes(n))circle(s,x-.045,y-.045,.09,col);}});
 text(s,'任务步骤数',6.75,5.88,1.4,.26,11,{color:C.muted,align:'right'});circle(s,1.38,5.95,.12,C.coral);text(s,'每步 98%',1.62,5.89,1.6,.28,12);circle(s,3.8,5.95,.12,C.sage);text(s,'每步 99.5%',4.04,5.89,1.8,.28,12);
 text(s,'36% → 78%',9.03,2.94,3.65,.85,32,{bold:true,color:C.coralDark});text(s,'真实体验还取决于',9.12,4.05,3.1,.35,17,{bold:true});text(s,'错误后能否恢复\n需要人接管几次\n结果能否放心合并',9.12,4.67,3.1,1.05,18,{color:C.muted});
}
// 11 — continuity / handoff.
{
 const s=slide('第一幕 / 连续工作','长任务的连续性，靠可恢复的工作状态','下一次会话接续的，不只是聊天历史，而是可复验的进度。','来源：Anthropic · Effective harnesses for long-running agents',source.harness);
 box(s,.8,2.69,3.05,2.88,C.gray);label(s,'会话 A',1.05,2.95);text(s,'实现一个功能',1.05,3.65,2.55,.54,23,{bold:true});text(s,'记录决策与失败\n留下可运行的改动',1.05,4.53,2.55,.73,16,{color:C.muted});
 box(s,4.43,2.45,4.45,3.36,C.yellowPale);label(s,'持久工作状态',4.72,2.72,3.8);['功能清单：完成 / 未完成','进度记录：证据 / 下一步','Git + 测试：恢复 / 复验'].forEach((t,i)=>{text(s,t,4.72,3.42+i*.69,3.83,.43,18,{bold:i===2});});
 box(s,9.45,2.69,3.05,2.88,C.coralPale);label(s,'会话 B',9.7,2.95);text(s,'读取状态再继续',9.7,3.65,2.55,.54,23,{bold:true});text(s,'从已验证的进度出发\n不重复探索旧问题',9.7,4.53,2.55,.73,16,{color:C.muted});
 line(s,3.9,4.1,4.35,4.1,C.coral,2,true);line(s,8.95,4.1,9.38,4.1,C.coral,2,true);
 bottom(s,'文件记忆让系统能够接班；它不等于模型权重已经持续学习。');
}
// 12 — training loop distinct from runtime correction.
{
 const s=slide('第二幕 / 编码模型如何成功','代码环境，提供可规模化的训练反馈','任务、执行环境、评分器，让解题过程成为可重复的训练材料。','来源：OpenAI · Introducing Codex；SWE-bench Pro；Anthropic Agent 资料',source.codex+'\nhttps://github.com/scaleapi/SWE-bench_Pro-os\nClaude 具体训练配方未完整公开。此图解释编码 Agent 的一般强化学习机制。');
 [['任务','代码库 + 需求'],['轨迹','搜索 → 修改 → 运行'],['评分','复现 + 回归 + 约束'],['训练','强化更有效的策略']].forEach((a,i)=>{const x=.7+i*3.18;step(s,x,2.8,2.75,String(i+1),a[0],a[1],i===3?C.coralPale:C.gray);if(i<3)line(s,x+2.81,3.54,x+3.1,3.54,C.coral,2,true);});
 line(s,11.4,4.55,11.4,5.21,C.coral,1.7);line(s,11.4,5.21,2.1,5.21,C.coral,1.7,true);text(s,'更强的模型，进入下一批任务',3.2,5.39,7,.39,19,{align:'center',bold:true});
}
// 13 — two learning levels.
{
 const s=slide('第二幕 / 学习层次','任务内纠错，与模型训练，是两种不同的进步','一个改变当前方案，一个改变之后处理任务的能力。','来源：OpenAI codex-1 强化学习披露；机制示意',source.codex);
 card(s,.7,2.57,5.75,3.32,'执行阶段','根据报错修正方案','读取失败 → 改写补丁 → 再跑测试\n\n同一任务里，工作方案变得更好。',C.gray);
 card(s,6.85,2.57,5.75,3.32,'训练阶段','根据轨迹更新模型','收集尝试 → 环境评分 → 训练更新\n\n下一批任务里，解题策略变得更好。',C.yellowPale);
}
// 14 — evidence ladder.
{
 const s=slide('第二幕 / 评测升级','评测在追问：Agent 完成了哪一层工作？','修复补丁、处理复杂仓库、操作终端、达到可合并质量。','来源：SWE-bench / SWE-bench Pro V2 / Terminal-Bench 4.0 / FrontierCode', 'https://www.swebench.com/\nhttps://github.com/scaleapi/SWE-bench_Pro-os\nhttps://www.tbench.ai/news/terminal-bench-4-0\n'+source.sonnet+'\nVerified 本身也支持工具与多文件补丁；这些评测不是严格线性等级，观察角度不同。');
 const a=[['SWE-bench Verified','真实 Issue 的补丁\n能否通过测试？'],['SWE-bench Pro','复杂、长程的仓库任务\n能否推进到底？'],['Terminal-Bench','终端操作之后\n系统是否符合要求？'],['FrontierCode','改动质量\n是否达到可合并标准？']];
 a.forEach((r,i)=>{let x=.73+i*3.15,y=3.07-i*.18;box(s,x,y,2.72,2.63,i%2?C.yellowPale:C.gray);circle(s,x+.22,y+.25,.42,C.coral);text(s,String(i+1),x+.22,y+.25,.42,.42,14,{bold:true,color:C.white,align:'center'});text(s,r[0],x+.22,y+.92,2.29,.63,18,{bold:true});text(s,r[1],x+.22,y+1.81,2.3,.57,15,{color:C.muted});});
 bottom(s,'成绩同时受到模型、工具系统、预算、运行环境与评分规则影响。');
}
// 15 — verification example, program success != business success.
{
 const s=slide('第二幕 / 验证反馈','配置能启动，不代表访问控制做对了','Nginx 示例：只允许持有有效客户端证书的请求访问。','来源：Nginx SSL 模块文档；工程教学示例','https://nginx.org/en/docs/http/ngx_http_ssl_module.html\n案例解释验证层次，不是本次实验记录。');
 [['语法检查','nginx -t','配置是否合法？'],['正向请求','有效证书 → 接受','该放行的能否放行？'],['反向请求','无 / 错证书 → 拒绝','该拦截的能否拦截？']].forEach((r,i)=>{const x=.75+i*4.15;box(s,x,2.85,3.7,2.85,i===2?C.yellowPale:C.gray);label(s,r[0],x+.26,3.15,3.2);text(s,r[1],x+.26,3.99,3.17,.52,23,{bold:true});text(s,r[2],x+.26,5.04,3.17,.39,16,{color:C.muted});});
 bottom(s,'代码世界的优势，是大量可运行的裁判；裁判质量决定反馈质量。');
}
// 16 — feedback vs unnecessary contemplation.
{
 const s=slide('第二幕 / 执行策略','工程任务里，廉价反馈能减少无效推演','先运行能区分假设的检查，把不确定性变成证据。','机制示意；不由榜单排名反推私有训练算法',source.sonnet+'\n时间轴为策略示意，非实测延迟或性能比例。不同任务仍需要不同思考深度。');
 label(s,'只有脑内推演',.9,2.65,3,C.muted);box(s,3.87,2.51,8.49,.88,C.gray);text(s,'猜环境 → 猜依赖 → 猜失败原因 → 一次大改',4.14,2.7,7.94,.47,20,{color:C.muted});
 label(s,'用检查获取证据',.9,4.12,3);['小检查','环境回显','修正假设','小改动'].forEach((t,i)=>{const x=3.87+i*2.17;box(s,x,3.98,1.98,.88,i%2?C.yellowPale:C.coralPale);text(s,t,x+.14,4.19,1.7,.43,19,{bold:true,align:'center'});if(i<3)line(s,x+2,4.42,x+2.13,4.42,C.coral,1.5,true);});
 text(s,'快速反馈与深度思考互补：关键是下一步能否减少不确定性。',.95,5.6,11.5,.48,20,{bold:true});
}
// 17 — competitor as route convergence, not brand war.
{
 const s=slide('第二幕 / 行业竞争','Codex 的追赶，也在结合模型与执行系统','编码不是边缘垂类，而是前沿模型的重要产品与训练方向。','来源：OpenAI · o3/o4-mini 发布；Introducing Codex', 'https://openai.com/index/introducing-o3-and-o4-mini/\n'+source.codex+'\nCodex CLI 初期支持 o3、o4-mini；本地 CLI 与云端 Codex 并行，不构成放弃推理路线。');
 const ys=[2.7,4.25];const rows=[['2025.04.16','Codex CLI','本地仓库与终端','同机修改、运行、检查'],['2025.05.16','云端 Codex','独立沙箱与并行任务','读取代码、跑测试、提交结果']];
 rows.forEach((r,i)=>{const y=ys[i];circle(s,.83,y+.12,.35,i?C.yellow:C.coral);label(s,r[0],1.5,y+.1,2.5);text(s,r[1],1.5,y+.61,2.75,.54,25,{bold:true});box(s,4.95,y-.04,7.65,1.19,i?C.yellowPale:C.gray);text(s,r[2],5.25,y+.15,6.98,.39,21,{bold:true});text(s,r[3],5.25,y+.69,6.98,.32,16,{color:C.muted});});
 bottom(s,'codex-1 已披露真实编码任务强化学习：学习修改、测试与继续修复。');
}
// 18 — office workflow is hidden program.
{
 const s=slide('第三幕 / 为什么 AGI 需要编码能力','很多办公室工作，本来就是未写出来的程序','例：核对本月报销，找出重复扣款与不一致记录。','来源：MCP 代码执行机制；办公流程示意',source.code+'\n此处是通用报销流程示意，不接入真实公司数据。');
 const a=[['收集','票据 / 账单'],['结构化','日期 / 金额'],['匹配','去重 / 对账'],['应用规则','阈值 / 例外'],['交付','异常 / 证据']];
 a.forEach((r,i)=>{let x=.73+i*2.53;box(s,x,2.9,2.2,1.84,i===3?C.yellowPale:C.gray);text(s,'0'+(i+1),x+.2,3.11,1.8,.3,13,{bold:true,color:C.coralDark});text(s,r[0],x+.2,3.67,1.8,.44,23,{bold:true});text(s,r[1],x+.2,4.31,1.8,.25,14,{color:C.muted});if(i<4)line(s,x+2.22,3.82,x+2.45,3.82,C.coral,1.8,true);});
 text(s,'条件、循环、数据与异常处理，过去由员工在不同系统间亲自执行。',.95,5.46,11.5,.65,20,{bold:true});
}
// 19 — tool manufacturing.
{
 const s=slide('第三幕 / 工具制造','会写代码，Agent 就能按需制造工具','预定义工具覆盖已知任务；生成适配层，扩展新的行动组合。','来源：Anthropic · Code execution with MCP / Writing tools for agents',source.code+'\n'+source.tools);
 const a=[['发现新系统','读文档与数据格式','理解认证、参数与返回值'],['生成适配层','补齐接口之间的缺口','分页、重试、格式转换与校验'],['执行并复用','保存有效的工作成果','脚本、检查方式与使用条件']];
 a.forEach((r,i)=>{const x=.75+i*4.15;card(s,x,2.61,3.7,3.27,'0'+(i+1),r[0],r[1]+'\n\n'+r[2],i===1?C.coralPale:C.gray);if(i<2)line(s,x+3.72,4.2,x+4.05,4.2,C.coral,1.8,true);});
}
// 20 — tool ecosystem in one concrete workflow.
{
 const s=slide('第三幕 / 通用行动','CLI、MCP、Skills，接成一条实际工作流','例：订单同步失败——获取线索、复现故障、修复并交付。','来源：Anthropic MCP 代码执行文章；Claude Code 最佳实践',source.code+'\nhttps://code.claude.com/docs/en/best-practices');
 const a=[['MCP','连接业务','日志、工单、业务数据'],['CLI','执行工程','搜索、运行、修改、测试'],['Skills','复用经验','诊断顺序、脚本、交付标准']];
 a.forEach((r,i)=>{const x=.75+i*4.15;box(s,x,2.73,3.7,2.7,i===1?C.coralPale:C.gray);text(s,r[0],x+.26,3.02,3.18,.58,30,{bold:true,color:C.coralDark});text(s,r[1],x+.26,3.94,3.18,.45,23,{bold:true});text(s,r[2],x+.26,4.79,3.18,.34,15,{color:C.muted});});
 box(s,.9,5.7,11.5,.5,C.yellowPale);text(s,'同一任务里：连到系统 → 操作环境 → 复用组织经验',1.17,5.7,10.95,.5,18,{bold:true,align:'center'});
}
// 21 — science execution chain.
{
 const s=slide('第三幕 / 智能研发','科学研究也需要把想法变成可执行实验','编码降低研究执行成本，科学判断决定结果有没有意义。','来源：Amodei · Machines of Loving Grace；Anthropic 研发研究', 'https://darioamodei.com/essay/machines-of-loving-grace\n'+source.rd);
 const r=[['提出假设','论文、问题、对照'],['构建实验','算法、数据、环境'],['运行分析','计算、比较、误差'],['形成结论','复现、解释、判断']];
 r.forEach((a,i)=>{const x=.7+i*3.18;step(s,x,2.87,2.75,String(i+1),a[0],a[1],i===1||i===2?C.coralPale:C.gray);if(i<3)line(s,x+2.8,3.6,x+3.1,3.6,C.coral,1.8,true);});
 box(s,3.88,4.7,5.93,.61,C.yellowPale);text(s,'编码 Agent 承担大量研究执行工作',4.13,4.7,5.43,.61,19,{bold:true,align:'center'});
 text(s,'实验运行成功 ≠ 假设成立；真实增益仍要靠对照、统计与复现。',.95,5.76,11.5,.47,19,{color:C.muted});
}
// 22 — R&D evidence native donut.
{
 const s=slide('第三幕 / 直接证据','Claude 已经进入下一代 Claude 的研发','研发自动化指数：任务从 AI 协作，向 AI 主导推进。','来源：Anthropic · Measuring the pace of AI development；截至 2026.08',source.rd+'\n按仓库引用：26% 工作达到 AL4（AI 主导，高层目标输入，人类监督）；超过90%至少达到 AL3（AI 协作）。所测任务类别未报告 AL5 完全自主。指数按任务类型评级汇总，不是26%的原创突破独立由AI完成。');
 s.addChart(pptx.ChartType.doughnut,[{name:'研发自动化',labels:['AI 主导 AL4','其他级别'],values:[26,74]}],{x:.8,y:2.54,w:4.8,h:3.55,holeSize:77,chartColors:[C.coral,C.gray],showLegend:false,showValue:false,showTitle:false,showBorder:false,showPercent:false,showCatName:false,showShadow:false});
 shape(s,ST.rect,.8,2.54,4.8,3.55,C.white);
 for(let i=0;i<100;i++){let a=(-90+i*3.6)*Math.PI/180;circle(s,3.2+1.49*Math.cos(a)-.047,4.2+1.49*Math.sin(a)-.047,.094,i<26?C.coral:C.line);}
 text(s,'26%',2.0,3.46,2.4,.87,44,{bold:true,align:'center',color:C.coralDark});text(s,'AI 主导 · 人类监督',1.6,4.37,3.2,.32,15,{align:'center',color:C.muted});
 text(s,'>90%',6.3,2.95,5.9,.9,52,{bold:true,color:C.ink});text(s,'至少达到 AI 协作',6.35,4.03,5.8,.42,23,{bold:true});text(s,'完全自主：所测任务类别尚未报告\n指标描述参与程度，不等于原创突破占比',6.35,5.05,5.8,.75,16,{color:C.muted});
}
// 23 — RSI across generations, no repeating RL diagram.
{
 const s=slide('第三幕 / 代际反馈','RSI：研究工具开始参与改进研究工具','递归发生在代际之间：当前模型参与研发，后继模型再进入研发。','来源：Anthropic 研发自动化研究；代际机制示意',source.rd+'\n人类监督下的研发参与不等于完全自主 RSI 或已发生智能爆炸。有效研究增益、算力与验证能力决定循环是否加速。');
 const xs=[.75,4.9,9.05];['当前模型','研发增益','后继模型'].forEach((t,i)=>{box(s,xs[i],2.71,3.5,2.2,i===1?C.yellowPale:C.coralPale);text(s,t,xs[i]+.24,3.07,3.02,.55,26,{bold:true,align:'center'});text(s,['编程与分析能力','更多有效实验\n更少工程等待','训练与验证\n产生更强能力'][i],xs[i]+.24,4.0,3.02,.67,17,{align:'center',color:C.muted});if(i<2)line(s,xs[i]+3.55,3.8,xs[i]+4.08,3.8,C.coral,2,true);});
 line(s,10.8,5.1,10.8,5.55,C.coral,1.8);line(s,10.8,5.55,2.5,5.55,C.coral,1.8,true);text(s,'后继模型重新进入下一轮研发',3.12,5.76,7.2,.41,20,{align:'center',bold:true});
}
// 24 — architecture of software 3.0.
{
 const s=slide('第三幕 / 软件范式','Software 3.0：自然语言成为新的编程入口','Prompt、模型权重与传统代码，共同构成新的工作系统。','来源：Karpathy · Software Is Changing (Again)',source.karpathy+'\n三种软件范式并存；自然语言编排不意味着传统代码、GUI 或确定性系统消失。');
 const rows=[['3.0','自然语言','定义目标、约束与工作方式',C.yellowPale],['2.0','模型权重','提供识别、推理与行动判断',C.coralPale],['1.0','显式代码','访问数据、执行规则与连接系统',C.gray]];
 rows.forEach((r,i)=>{let y=2.57+i*1.05;box(s,.95,y,11.43,.82,r[3]);text(s,r[0],1.24,y+.16,1.1,.48,24,{bold:true,color:C.coralDark});text(s,r[1],3.05,y+.17,2.2,.46,23,{bold:true});text(s,r[2],6.08,y+.21,5.95,.38,19,{color:C.muted});});
 bottom(s,'软件既可以是固定产品，也可以成为针对一次任务、按需生成的能力。');
}
// 25 — skills change; meaningful table, not tutorial.
{
 const s=slide('第三幕 / 我们的工作','执行越来越便宜，业务判断越来越重要','不是每个人都要成为程序员，但每个人都要更会定义与验收任务。','岗位变化：本报告的组织分析','这些岗位变化为方向性分析，不是全岗位可立即自动化的能力清单。');
 label(s,'岗位',.95,2.49,2);label(s,'过去的执行重心',3.2,2.49,4,C.muted);label(s,'新的能力重心',8.25,2.49,4);
 [['运营 / 市场','取数、整理、制作报表','定义指标、提出假设、识别异常'],['财务 / HR','核对材料、跨系统录入','建立规则、核对证据、处理例外'],['产品','写需求、画静态原型','用可运行成果验证业务假设'],['研发','逐行实现与重复调试','架构、复杂问题、验收与责任']].forEach((r,i)=>{let y=3.03+i*.7;box(s,.72,y,11.9,.57,i%2?C.white:C.gray);text(s,r[0],.95,y,2.05,.57,18,{bold:true});text(s,r[1],3.2,y,4.6,.57,17,{color:C.muted});text(s,r[2],8.25,y,4.05,.57,17,{bold:true});});
}
// 26 — company choices with two bottlenecks.
{
 const s=slide('结尾 / 公司选择','瓶颈正在从“有没有人做”，转向“什么值得做”','不只给旧流程加 AI，而是重新审视排期、交接与等待。','组织推演 · 编码能力扩张的管理含义','任务执行仍须匹配权限、数据环境与责任边界。此页为组织选择，不是部署操作指导。');
 card(s,.7,2.61,5.75,3.25,'旧问题','怎样增加执行资源？','更多人手\n更多软件席位\n更多排期与交接',C.gray);
 card(s,6.85,2.61,5.75,3.25,'新问题','哪些过去做不起的事值得做？','更有价值的问题\n可执行的组织知识\n可检验的业务结果',C.yellowPale);
}
// 27 — conclusion visual, not another slogan-only slide.
{
 const s=slide('收束 / 能力路径','程序员是第一批用户，智能研发是更大的应用','从工程交付，到通用行动，再到参与制造下一代智能。','Claude · 编码模型 · AGI',source.context+'\n'+source.codex+'\n'+source.rd);
 const a=[['Claude 的工程优势','判断 × 工具 × 工作状态','更少接管与返工'],['编码模型的成功机制','任务 × 环境 × 反馈','可规模化地练习行动'],['通往 AGI 的路径','制造工具 × 研究执行','进入后继智能的研发']];
 a.forEach((r,i)=>{let x=.73+i*4.16;box(s,x,2.59,3.72,2.63,i===2?C.yellowPale:C.gray);label(s,'0'+(i+1),x+.25,2.88,3.2);text(s,r[0],x+.25,3.4,3.22,.56,22,{bold:true});text(s,r[1],x+.25,4.2,3.22,.38,16,{color:C.coralDark});text(s,r[2],x+.25,4.77,3.22,.28,14,{color:C.muted});});
 text(s,'如果执行不再稀缺，你会怎样重新组织工作？',.85,5.92,11.7,.63,27,{bold:true});
}

fs.writeFileSync(path.join(__dirname,'slides.json'),JSON.stringify(manifest,null,2));
pptx.writeFile({fileName:out});
