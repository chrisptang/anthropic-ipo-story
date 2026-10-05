const pptxgen=require('pptxgenjs');
const fs=require('fs');
const path=require('path');
const pptx=new pptxgen();
pptx.layout='LAYOUT_WIDE';pptx.author='Internal Learning';pptx.title='Anthropic 2万亿 IPO 的背后：编码模型与 AGI · 数据增强版';pptx.subject='Claude 工程能力、编码反馈与 AI 研发';pptx.lang='zh-CN';pptx.theme={headFontFace:'PingFang SC',bodyFontFace:'PingFang SC',lang:'zh-CN'};
const W=13.333333,H=7.5,ST=pptx.ShapeType;
const C={ink:'282824',muted:'706D67',coral:'D97757',dark:'A74C32',pale:'FAEEE8',yellow:'F4D77B',yp:'FCF5DD',gray:'F3F3F0',line:'DFDFD8',white:'FFFFFF',sage:'738A78'};
const manifest=[];let page=0;
function text(s,t,x,y,w,h,size=18,opt={}){if(x<0||y<0||x+w>W+.02||y+h>H+.02)throw new Error('Bounds: '+t);s.addText(String(t),{x,y,w,h,fontFace:'PingFang SC',fontSize:size,color:C.ink,margin:0,valign:'mid',...opt});}
function rect(s,x,y,w,h,fill=C.gray,round=false){s.addShape(round?ST.roundRect:ST.rect,{x,y,w,h,fill:{color:fill},line:{color:fill,transparency:100},...(round?{radius:.1}:{})});}
function box(s,x,y,w,h,fill=C.gray){rect(s,x,y,w,h,fill,true);}
function circle(s,x,y,d,c=C.coral){s.addShape(ST.ellipse,{x,y,w:d,h:d,fill:{color:c},line:{color:c,transparency:100}});}
function line(s,x1,y1,x2,y2,col=C.line,width=1,arrow=false){s.addShape(ST.line,{x:Math.min(x1,x2),y:Math.min(y1,y2),w:Math.abs(x2-x1),h:Math.abs(y2-y1),flipH:x2<x1,flipV:y2<y1,line:{color:col,width,...(arrow?{endArrowType:'triangle'}:{})}});}
function label(s,t,x,y,w=3,col=C.dark){text(s,t,x,y,w,.29,11,{bold:true,color:col});}
function takeaway(s,t){text(s,t,.82,6.28,11.75,.48,20,{bold:true});}
function slide(section,title,sub,src,notes=''){const s=pptx.addSlide();s.background={color:C.white};page++;label(s,section,.66,.35,10);text(s,title,.66,.91,12,.7,32,{bold:true});if(sub)text(s,sub,.68,1.73,11.94,.45,16,{color:C.muted});text(s,src,.68,7.02,11.15,.22,8.5,{color:C.muted});text(s,String(page).padStart(2,'0'),12.06,7.01,.57,.25,10,{align:'right',color:C.muted});s.addNotes(notes);manifest.push({page,title,section,source:src});return s;}
function kpi(s,x,y,w,n,t,b,fill=C.gray){box(s,x,y,w,2.52,fill);text(s,n,x+.23,y+.25,w-.46,.88,46,{bold:true,color:C.dark});text(s,t,x+.23,y+1.3,w-.46,.41,20,{bold:true});text(s,b,x+.23,y+1.93,w-.46,.35,13,{color:C.muted});}
function table(s,headers,rows,widths,x=.78,y=2.7,rowH=.58){let off=x;headers.forEach((h,i)=>{text(s,h,off+.15,y,widths[i]-.25,.42,13,{bold:true,color:C.dark});off+=widths[i];});rows.forEach((r,j)=>{const yy=y+.62+j*rowH;box(s,x,yy,widths.reduce((a,b)=>a+b,0),rowH-.08,j%2?C.white:C.gray);let xx=x;r.forEach((v,i)=>{text(s,v,xx+.15,yy,widths[i]-.25,rowH-.08,i===0?17:16,{bold:i===0});xx+=widths[i];});});}
function bullet(s,title,body,x,y,w){text(s,title,x,y,w,.48,22,{bold:true});text(s,body,x,y+.66,w,.77,17,{color:C.muted,valign:'top'});}
function nativeBar(s,labels,series,x,y,w,h,max=100){s.addChart(pptx.ChartType.bar,series.map(r=>({name:r.name,labels,values:r.values})),{x,y,w,h,barDir:'bar',chartColors:series.map(r=>r.color||C.coral),showTitle:false,showLegend:false,showValue:true,dataLabelPosition:'outEnd',valAxisMinVal:0,valAxisMaxVal:max,showBorder:false,catAxisLabelFontSize:11,valAxisLabelFontSize:10,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1}});rect(s,x,y,w,h,C.white);}
function nativeLine(s,labels,series,x,y,w,h){s.addChart(pptx.ChartType.line,series.map(r=>({name:r.name,labels,values:r.values})),{x,y,w,h,chartColors:series.map(r=>r.color||C.coral),showTitle:false,showLegend:false,showValue:false,valAxisMinVal:0,valAxisMaxVal:100,showBorder:false,showMarker:true,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1}});rect(s,x,y,w,h,C.white);}
function hbars(s,items,x,y,w,rowH,max=100,unit='%'){items.forEach((r,i)=>{const yy=y+i*rowH;const nameW=2.25,barW=w-nameW-1.0; text(s,r.name,x,yy,nameW-.2,.37,15,{bold:true});rect(s,x+nameW,yy+.04,barW,.27,C.gray);rect(s,x+nameW,yy+.04,barW*r.value/max,.27,r.color||C.coral);text(s,r.value.toFixed(1)+unit,x+nameW+barW+.15,yy-.01,.9,.38,unit==='%'?16:12,{bold:true,color:C.dark});});}
function linePlot(s,labels,series,x,y,w,h,max=100){const px=x+.6,py=y+.17,pw=w-.95,ph=h-.9;for(let v=0;v<=max;v+=25){let yy=py+ph-v/max*ph;line(s,px,yy,px+pw,yy,C.line,.65);text(s,v+'%',x,yy-.14,.47,.25,10,{align:'right',color:C.muted});}series.forEach(r=>{let prev=null;r.values.forEach((v,i)=>{let xx=px+i/(labels.length-1)*pw,yy=py+ph-v/max*ph;if(prev)line(s,prev.x,prev.y,xx,yy,r.color,2.6);circle(s,xx-.042,yy-.042,.084,r.color);if(r.showValues)text(s,v.toFixed(1)+'%',xx-.45,yy-.43,.9,.29,12,{align:'center',bold:true,color:r.color});prev={x:xx,y:yy};});});labels.forEach((t,i)=>text(s,t,px+i/(labels.length-1)*pw-.58,py+ph+.2,1.16,.42,11,{align:'center',color:C.muted}));}
const S={bench:'data/claude_agent_benchmark_evolution.csv',comp:'data/frontier_ai_coding_agent_competitors.csv',codex:'data/openai_codex_benchmark_evolution.csv',sonnet:'https://www.anthropic.com/claude-sonnet-5-5',context:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',tools:'https://www.anthropic.com/engineering/writing-tools-for-agents',harness:'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',mcp:'https://www.anthropic.com/engineering/code-execution-with-mcp',rd:'https://www.anthropic.com/institute/measuring-pace-of-ai-development'};
const dataNote='数值沿用仓库研究数据，本次未新增外部核验。历史评测的 harness、预算与样本可能不同，曲线描述仓库记录，非严格受控实验。';

// 01 Cover
{
 const s=slide('内部分享 / 数据增强版','',null,'Claude 为什么强 · 编码模型如何成功 · 通往 AGI 的行动能力');
 text(s,'Anthropic\n2 万亿 IPO 的背后',.78,1.36,8,1.69,40,{bold:true});text(s,'编码模型与 AGI',.8,3.36,8,.65,30,{color:C.dark,bold:true});
 s.addImage({path:path.join(__dirname,'../claude_coral_white/assets/intelligence.svg.png'),x:9.1,y:1.47,w:3.4,h:3.4});
 [['01','Claude 为什么强'],['02','编码模型如何成功'],['03','为什么 AGI 需要编码']].forEach((r,i)=>{let x=.85+i*4.16;box(s,x,4.75,3.68,1.2,i===2?C.yp:C.gray);text(s,r[0],x+.2,4.92,3.28,.53,30,{bold:true,color:C.dark});text(s,r[1],x+.2,5.62,3.28,.25,13,{color:C.muted});});
 s.addNotes(dataNote+'\n98.1% 为仓库Sonnet5.5 SWE-bench Verified；70.6%为Terminal-Bench4.0；26%为仓库引用的研发AL4评级，含人类监督。');
}
// 02 financial hook: one only
{
 const s=slide('开场 / 两万亿的尺度','两万亿，不只是在给“写代码工具”定价','从软件开发扩展到数字工作，再进入智能研发。','来源：仓库 IPO 研究；两万亿美元为目标估值','https://www.investing.com/news/stock-market-news/exclusiveanthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs-4921382\n'+dataNote+'\n图中1.8–2.0T为目标区间；2026.05 965B为仓库估值记录，不是本次独立核实。');
 text(s,'$2T',.83,2.59,4,1.3,76,{bold:true,color:C.coral});text(s,'IPO 目标估值',.9,4.03,3.7,.43,20);text(s,'2021 成立 → 2026 IPO 目标',.9,4.87,3.7,.37,15,{color:C.muted});
 [['开发工具','写代码、修 Bug、跑测试'],['数字工作','对账、文件处理、跨系统操作'],['智能研发','运行实验、构建评测、优化基础设施']].forEach((r,i)=>{let y=2.63+i*1.03;box(s,5.16,y,7.45,.83,i===2?C.yp:C.gray);text(s,r[0],5.43,y+.14,1.63,.44,21,{bold:true});text(s,r[1],7.44,y+.21,4.91,.32,16,{color:C.muted});});
 takeaway(s,'程序员是第一批用户；模型的行动能力，正在进入更多工作。');
}
// 03 capability scorecard like reference
{
 const s=slide('第一幕 / Claude 为什么强','Claude 的成绩单：修软件、做工程、用工具','Claude Sonnet 5.5 · 2026.09 · 不同评测观察不同能力。','来源：仓库 Claude 评测 CSV；发布时间与评测口径见备注',dataNote+'\n'+S.bench+'\nVerified 98.1；Pro 91.2；Terminal4 70.6；BFCL98.8。不能换算为所有企业工作的总体完成率。');
 [['98.1%','SWE-bench Verified','真实 Issue 的补丁通过测试'],['91.2%','SWE-bench Pro','复杂仓库任务修复'],['70.6%','Terminal-Bench 4.0','终端环境的多步任务'],['98.8%','BFCL','结构化工具调用表现']].forEach((r,i)=>kpi(s,.73+i*3.16,2.62,2.78,r[0],r[1],r[2],i===2?C.yp:C.gray));
 takeaway(s,'它不只补全代码：搜索、修改、执行和验证，已经进入同一个任务。');
}
// 04 longitudinal evidence
{
 const labels=['3 Opus\n2024.03','3.5 Sonnet\n2024.06','3.7 Sonnet\n2025.02','4.5 Sonnet\n2025.11','5.5 Sonnet\n2026.09'];const vals=[33.4,49,70.3,82.4,98.1];
 const s=slide('第一幕 / 代际跃迁','从 33.4% 到 98.1%：旧标尺接近饱和','SWE-bench Verified · 仓库记录的代表模型表现。','来源：data/claude_agent_benchmark_evolution.csv；跨代际配置不同',dataNote);
 nativeLine(s,labels,[{name:'Verified',values:vals,color:C.coral}],.75,2.56,8.45,3.44);linePlot(s,labels,[{values:vals,color:C.coral,showValues:true}],.75,2.56,8.45,3.44);
 box(s,9.65,2.72,2.96,2.83,C.yp);text(s,'+64.7',9.9,3.11,2.45,.84,37,{bold:true,color:C.dark});text(s,'个百分点',9.92,4.06,2.42,.36,18);text(s,'任务变难\n标尺也在升级',9.92,4.75,2.42,.55,17,{color:C.muted});
 takeaway(s,'模型的进步，不只是答案更像人，而是更多软件问题能够被解决。');
}
// 05 independently verified three-model comparison
{
 let verified;
 try { verified=JSON.parse(fs.readFileSync(path.join(__dirname,'benchmark_comparison_verified.json'),'utf8')); }
 catch (error) { throw new Error('Cannot load verified benchmark comparison; refusing to build with fallback data.',{cause:error}); }
 const notes='核验日期：'+verified.retrieved_at+'。本页单独核验，其他页仍为仓库资料。\n'+JSON.stringify(verified,null,2)+'\nTerminal-Bench为AA统一mini-swe-agent harness、66任务、每题3次的平均pass@1。Opus为max with fallback；Astra为max；Gemini为Pro Preview。fallback可能由其他模型完成部分任务，因此不是纯Opus无回退能力。AA Coding Agents页面采用厂商Agent harness，Opus约63、Astra约55，不与此处混用。官方66.4与57.9也不混入。\n右侧Intelligence Index v4.3.2是10项评测综合指数，不是百分比、不是SWE-bench Pro、不是纯编码得分。SWE-bench Pro未核实到三者同版本数据，因而移除。0.5为观测分差，不证明统计显著优势。';
 const s=slide('第一幕 / 横向对照','第三方对照：终端执行接近，综合能力有差异','Opus 5.5（max / fallback）· GPT-6 Astra（max）· Gemini 3.1 Pro（Preview）','来源：Artificial Analysis · terminalbench-4-0 + 三款模型页；核验于 '+verified.retrieved_at,notes);
 label(s,'Terminal-Bench 4.0 · 平均 pass@1',.8,2.56,5.5);label(s,'AA Intelligence Index · 综合能力',7.08,2.56,5.5);
 text(s,'统一 mini-swe-agent · 66 题 · 每题 3 次',.8,2.96,5.5,.3,12,{color:C.muted});text(s,'v4.3.2 · 10 项评测 · 指数分，非百分比',7.08,2.96,5.5,.3,12,{color:C.muted});
 const colors=[C.coral,C.yellow,C.sage];
 function panel(values,x,percent){
  const items=verified.models.map((m,i)=>({name:m.display_name,value:values[i],color:colors[i]}));
  nativeBar(s,items.map(r=>r.name),[{name:percent?'Terminal-Bench 4.0 pass@1':'AA Intelligence Index v4.3.2',values}],x,3.35,5.5,2.1);
  items.forEach((r,i)=>{const yy=3.48+i*.73;const barX=x+2.55,barW=1.95; text(s,r.name,x,yy,2.39,.38,14,{bold:true});rect(s,barX,yy+.06,barW,.27,C.gray);rect(s,barX,yy+.06,barW*r.value/100,.27,r.color);text(s,percent?r.value.toFixed(1)+'%':String(r.value),barX+barW+.14,yy-.01,.84,.4,17,{bold:true,color:C.dark});});
 }
 panel(verified.terminal_bench.scores_percent,.8,true);panel(verified.intelligence_index.scores,7.08,false);
 text(s,'终端观测分差：仅 0.5 个百分点',.86,5.73,5.58,.35,18,{bold:true,color:C.dark});text(s,'未核实到完整 SWE-bench Pro 对照，改用综合指数',7.08,5.73,5.55,.35,12,{color:C.muted});
 takeaway(s,'统一测试配置，才能比较分数；综合能力不等于终端任务成功率。');
}
// 06 price-performance bars
{
 const s=slide('第一幕 / 能力与价格','更强，也更便宜：能力被推向日常工作','Claude 3 Opus → Sonnet 5.5 · 仓库记录的能力与定价。','来源：Claude 评测 CSV；美元 / 百万 Token；不等于每任务总成本',dataNote+'\n3Opus input15 output75 Verified33.4；Sonnet5.5 input2 output10 Verified98.1。输入价格下降86.7%。');
 label(s,'SWE-bench Verified',.85,2.63,5);nativeBar(s,['3 Opus','Sonnet 5.5'],[{name:'Verified',values:[33.4,98.1]}],.85,3.2,5.5,1.9);hbars(s,[{name:'3 Opus',value:33.4,color:C.line},{name:'Sonnet 5.5',value:98.1}],.85,3.33,5.5,.92);
 box(s,7.03,2.6,5.56,3.25,C.yp);label(s,'API 标价 · $ / 百万 Token',7.3,2.89,4.95);text(s,'输入  $15 → $2',7.3,3.57,4.95,.66,30,{bold:true});text(s,'输出  $75 → $10',7.3,4.42,4.95,.56,26,{bold:true});text(s,'输入标价下降 86.7%',7.3,5.18,4.95,.33,16,{color:C.dark});
 takeaway(s,'当任务能力提升、调用门槛下降，更多小任务开始值得交给 Agent。');
}
// 07 worked cost arithmetic not invented experiment
{
 const s=slide('第一幕 / 一笔可复算的账','0.5 美元怎样算出来？看一次任务的账单','Sonnet 5.5 定价算例；展示费用结构，不代表所有 Bug 的实际成本。','来源：仓库 API 标价；Token 用量为算例假设；不含人工审查',dataNote+'\n假设50k未缓存输入、1M缓存读取、20k输出。0.05*2+1*0.2+0.02*10=0.5。关闭缓存时，同样用量(1.05*2+0.02*10)=2.3。输入缓存写入费用、失败重试与审查时间未计，实际账单依用量和政策变化。参考版150美元、半天、3分钟不作为实测沿用。');
 table(s,['用量假设','标价 / 百万 Token','费用'],[['未缓存输入 5 万','$2.00','$0.10'],['缓存读取 100 万','$0.20','$0.20'],['输出 2 万','$10.00','$0.20']],[4.0,3.1,1.85],.8,2.7,.7);
 box(s,10.18,2.66,2.4,2.92,C.yp);text(s,'$0.50',10.4,3.26,1.97,.77,38,{bold:true,color:C.dark});text(s,'本次算例\n模型调用费',10.41,4.35,1.93,.8,20,{bold:true});
 takeaway(s,'对比人力时，要比较“通过验收的任务”，不只比较一次模型输出。');
}
// 08 caching quantity comparison concrete
{
 const s=slide('第一幕 / Prompt Caching','反复读取相同上下文，缓存把价格压到十分之一','Sonnet 5.5 · 相同前缀的缓存读取；不是整张账单一律打一折。','来源：Claude 价格 CSV；缓存写入及输出另计',dataNote+'\n未缓存输入2$/M；缓存读取0.2$/M。量级比10倍。假设每轮100k可缓存前缀，20轮即2M读取，未缓存4美元，缓存读取0.4美元，示意不含初次写入与其他Tokens。');
 const a=[{name:'普通输入',value:2},{name:'缓存读取',value:.2,color:C.yellow}];nativeBar(s,a.map(r=>r.name),[{name:'标价',values:a.map(r=>r.value)}],.83,2.94,6.4,2.2,2);hbars(s,a,.83,3.15,6.4,.88,2,' 美元');
 box(s,8.02,2.7,4.55,3.05,C.yp);text(s,'20 轮 × 10 万 Token',8.3,3.06,4,.46,21,{bold:true});text(s,'$4.00 → $0.40',8.3,3.99,4,.7,32,{bold:true,color:C.dark});text(s,'相同前缀读取的费用算例',8.3,5.12,4,.35,15,{color:C.muted});
 takeaway(s,'长任务反复使用代码背景与执行历史，缓存让连续循环更容易负担。');
}
// 09 actual sequence with named commands and artifacts
{
 const s=slide('第一幕 / Claude Code 的工作轨迹','终端原生：同一个任务里，查、改、测、再修复','例：支付请求偶发失败，定位重试逻辑并准备补丁。','工程场景示意；命令、回显与文件为教学例，不是本次运行记录',S.tools+'\n'+S.harness+'\n不连接真实线上系统；日志预先提供，代码修改在测试环境。git blame仅提供变更线索，不等于定位根因。');
 box(s,.78,2.58,7.23,3.36,C.gray);label(s,'一次目标 → 多步动作',1.04,2.86,6.7);
 const r=[['搜索','rg "retry|timeout" src/'],['读取','查看支付调用与异常分支'],['修改','调整可重试错误与次数上限'],['验证','pytest tests/test_payment_retry.py'],['恢复','失败用例 → 修正 → 再运行']];r.forEach((a,i)=>{text(s,a[0],1.07,3.4+i*.43,1,.32,14,{bold:true,color:C.dark});text(s,a[1],2.23,3.4+i*.43,5.4,.32,15,{fontFace:i===0||i===3?'Menlo':'PingFang SC'});});
 box(s,8.46,2.58,4.12,3.36,C.yp);label(s,'可检查的交付',8.74,2.86,3.56);bullet(s,'补丁 + 回归测试','修改范围、测试结果\n仍待确认的问题',8.75,3.55,3.5);text(s,'人负责业务取舍与合并',8.75,5.34,3.5,.34,15,{color:C.muted});
 takeaway(s,'CLI 的价值是动作可组合、反馈可读取，不是让 AI 拥有无限权限。');
}
// 10 structure less abstract via artifacts
{
 const s=slide('第一幕 / 模型与 Harness','为什么不是“换个模型”就能复制体验？','工程能力来自模型判断与执行系统的共同作用。','来源：Anthropic 上下文工程、工具设计、长任务 Harness',S.context+'\n'+S.tools+'\n'+S.harness);
 table(s,['环节','具体工程资产','解决的问题'],[['模型判断','相关调用链、错误假设','下一步查哪里、改什么'],['工具接口','文件读取、精确补丁、终端回显','让动作可执行、失败可定位'],['上下文','CLAUDE.md、相关函数、最近报错','保留任务需要的信息'],['持续状态','功能清单、进度文件、Git、测试','中断后可恢复、下一会话可接班']],[2.3,5.15,4.25],.8,2.58,.7);
 takeaway(s,'从“回答正确”到“交付可靠”，还隔着接口、状态与验证。');
}
// 11 concrete context comparison
{
 const s=slide('第一幕 / 大仓库理解','200 万字的容量，不等于找对这次任务的证据','修复支付重试：当前上下文需要的是关联信息，而不是全部文件。','来源：Anthropic · Effective context engineering；检索流程示意',S.context+'\n200万字是表达容量与选择的示意，不对应具体模型字数标价。');
 box(s,.78,2.61,5.6,3.25,C.gray);box(s,6.88,2.61,5.7,3.25,C.pale);
 text(s,'全量灌入',1.04,2.91,5.05,.5,24,{bold:true});text(s,'支付 + 库存 + UI + 营销 + 配置',1.04,3.75,5.05,.42,17,{color:C.muted});
 for(let i=0;i<35;i++)rect(s,1.08+(i%7)*.64,4.43+Math.floor(i/7)*.21,.48,.12,i%11===0?C.coral:'D8D8D1');
 text(s,'按问题探索',7.14,2.91,5.17,.5,24,{bold:true});['测试入口 → 复现条件','支付调用 → retry 分支','异常类型 → 超时配置','失败用例 → 修改后的验证'].forEach((t,i)=>text(s,t,7.14,3.72+i*.43,5.16,.32,17));
 takeaway(s,'长窗口提供空间；主动检索决定哪些信息值得进入工作记忆。');
}
// 12 reliability compact data
{
 const s=slide('第一幕 / 长任务','每步只差 1.5 个百分点，50 步之后差多少？','简化模型：每步独立、可靠性恒定、失败不可恢复。','数学示意；不由评测分数推算模型单步可靠性','0.98^50=36.4%；0.995^50=77.8%；真实Agent会重试、自愈，结果受任务与恢复能力影响。');
 const ls=['1','10','20','30','40','50'],ns=ls.map(Number),a=[{name:'每步98%',values:ns.map(n=>100*.98**n),color:C.coral},{name:'每步99.5%',values:ns.map(n=>100*.995**n),color:C.sage}];nativeLine(s,ls,a,.75,2.62,8,3.35);linePlot(s,ls,a,.75,2.62,8,3.35);label(s,'珊瑚：每步 98%     绿色：每步 99.5%',1.4,5.86,7,C.muted);
 box(s,9.21,2.72,3.36,2.89,C.yp);text(s,'36.4%',9.48,3.12,2.82,.68,37,{bold:true,color:C.dark});text(s,'→ 77.8%',9.48,4.04,2.82,.65,32,{bold:true});text(s,'50 步全部成功概率',9.48,5.03,2.82,.33,15,{color:C.muted});
 takeaway(s,'真实体验的关键：少犯错、出错能恢复、少让人接管。');
}
// 13 training concrete scale and path
{
 const s=slide('第二幕 / 编码模型如何成功','代码训练场有任务、有环境，也有自动裁判','从人类逐条评价，走向大规模执行与评分。','来源：仓库基准研究；SWE-bench / SWE-bench Pro / Terminal-Bench',dataNote+'\ndocs/02_swe_bench_pro_and_terminal_bench_deep_dive.md\n仓库记录Verified500、ProV2 642、TB4 66校准任务。三个集合不相加，不作为全部训练数据规模。');
 [['500','Verified','人工校验的 Issue 任务'],['642','Pro V2','离线执行的复杂仓库任务'],['66','Terminal-Bench 4.0','校准资源与超时的终端任务']].forEach((r,i)=>kpi(s,.8+i*4.15,2.58,3.67,r[0],r[1],r[2],i===2?C.yp:C.gray));
 text(s,'代码库 + 容器环境 + 测试 / 验证器 → 可重复的执行反馈',.85,5.52,11.72,.47,22,{bold:true});
 takeaway(s,'编码的优势：大量试错能够运行、能够评分，也能够进入下一轮改进。');
}
// 14 actual RL with loops not repeated generic
{
 const s=slide('第二幕 / Agentic RL','模型学习的，不只是一份正确补丁，而是整段解题轨迹','codex-1 披露：用真实编码任务强化学习，学习修改与反复测试。','来源：OpenAI · Introducing Codex；一般训练机制示意','https://openai.com/index/introducing-codex/\nClaude的私有训练配方未完整公开。任务内纠错改变方案，离线训练更新权重；不能混同。');
 const xs=[.8,3.95,7.1,10.25],titles=['给定任务','生成轨迹','环境评分','训练更新'],body=['需求 + 仓库\n依赖 + 测试','读文件 → 修改\n运行 → 纠错','问题是否解决？\n是否破坏原行为？','强化有效策略\n进入下一批任务'];
 xs.forEach((x,i)=>{box(s,x,2.7,2.3,2.49,i===2?C.yp:C.gray);label(s,'0'+(i+1),x+.2,2.95,1.9);text(s,titles[i],x+.2,3.5,1.9,.44,22,{bold:true});text(s,body[i],x+.2,4.34,1.9,.57,15,{color:C.muted});if(i<3)line(s,x+2.35,3.97,x+3.05,3.97,C.coral,1.8,true);});
 takeaway(s,'执行时修好这一题；训练时让下一批题的解题策略变得更好。');
}
// 15 elaborate verifiable benchmark specific thresholds
{
 const s=slide('第二幕 / 反馈为何有效','任务不是“写一段 Nginx 配置”，而是满足四项验收','终端工程场景：证书认证、限流、签名与服务运行。','来源：仓库 Nginx 教学任务；非本次运行记录','docs/02_swe_bench_pro_and_terminal_bench_deep_dive.md §3.3。任务需求与预期验证，不是实测完成情况或独立复现的官方题目。');
 table(s,['要求','验证输入','预期结果'],[['客户端证书','有效 / 无 / 错误证书','仅有效证书可访问'],['请求限流','5 次/秒 与 20 次/秒','超额请求返回 HTTP 429'],['请求签名','请求体 + 固定密钥','上游收到正确 SHA256 HMAC'],['服务状态','启动、端口、配置重载','8443 监听、重载后规则生效']],[2.3,4.4,5.0],.8,2.58,.7);
 takeaway(s,'从“生成像样代码”到“系统行为达标”，中间有可执行的验收。');
}
// 16 Codex progress with dates
{
 const ls=['GPT-5\n2025.08','5-Codex\n2025.09','5.2-Codex\n2026.01','5.5-Codex\n2026.05','6-Codex*\n2026.08'],vals=[43.8,51.4,63.9,74.8,83.5];
 const s=slide('第二幕 / 赛道验证','OpenAI 的编码专项迭代，也在持续爬坡','SWE-bench Pro · Codex 模型演进；* GPT-6-Codex 为预览。','来源：data/openai_codex_benchmark_evolution.csv；历史条件不同',dataNote+'\nCodex CLI2025.04.16；云端Codex2025.05.16。初期CLI支持o3/o4-mini，不能据此宣称放弃推理路线。');
 nativeLine(s,ls,[{name:'Pro',values:vals,color:C.coral}],.75,2.59,8.55,3.43);linePlot(s,ls,[{values:vals,color:C.coral,showValues:true}],.75,2.59,8.55,3.43);
 box(s,9.74,2.73,2.85,2.83,C.yp);text(s,'43.8%',10,3.08,2.34,.63,32,{bold:true});text(s,'→ 83.5%',10,3.98,2.34,.62,30,{bold:true,color:C.dark});text(s,'同一系列持续迭代',10,5.05,2.34,.3,14,{color:C.muted});
 takeaway(s,'巨头争夺的不只是聊天入口，而是可以反复被委托的执行能力。');
}
// 17 office case material input and output
{
 const s=slide('第三幕 / 为什么 AGI 需要编码','普通员工的任务，也包含数据结构、循环与规则','例：订单明细与银行流水对账；保留差异证据，不直接修改账目。','业务案例示意；表内数字为教学样本，不是公司实际数据',S.mcp+'\n教学样本O1042订单额980银行到账950差额30；O1088订单1200到账1200差额0；O1101订单600到账0差额600。Agent需处理编号、金额单位、重复记录与业务授权。');
 box(s,.8,2.62,3.56,3.19,C.gray);label(s,'输入',1.04,2.89,3.05);text(s,'orders.xlsx\nbank.csv',1.04,3.53,3.05,.98,24,{fontFace:'Menlo',bold:true});text(s,'订单号 · 金额 · 到账日期',1.04,4.92,3.05,.45,15,{color:C.muted});
 line(s,4.49,4.1,5.02,4.1,C.coral,2,true);
 table(s,['订单','应收','到账','差额'],[['O1042','980','950','30'],['O1088','1200','1200','0'],['O1101','600','0','600']],[2.0,1.45,1.45,1.53],5.18,2.63,.72);
 text(s,'输出：异常清单 + 原始行号 + 核对依据',5.35,5.66,7.03,.36,17,{bold:true,color:C.dark});
 takeaway(s,'Agent 编写清洗与匹配脚本，人核对业务规则与异常解释。');
}
// 18 script manufacture example
{
 const s=slide('第三幕 / 按需制造工具','新需求不必都先开发一个新产品','读接口、生成脚本、组合工具，临时补齐系统之间的缺口。','来源：Anthropic · Code execution with MCP；代码为说明性伪代码',S.mcp+'\n程序是伪代码，非可执行SDK；授权系统只读接入，发送前人工确认。');
 box(s,.8,2.64,6.41,3.17,C.gray);label(s,'目标：对账并准备异常报告',1.06,2.9,5.89);text(s,'orders = load("orders.xlsx")\nbank = load("bank.csv")\nrows = reconcile(orders, bank)\nreport = attach_evidence(rows)\nsave(report, "exceptions.xlsx")',1.06,3.48,5.88,1.87,18,{fontFace:'Menlo',color:C.dark});
 bullet(s,'CLI：执行脚本','文件处理、计算、运行与检查',7.72,2.8,4.8);bullet(s,'MCP：接入业务','获批的数据与办公系统',7.72,4.35,4.8);
 takeaway(s,'Skills 把有效流程、脚本与验收方式保存下来，让经验能够复用。');
}
// 19 AGI domain profile rather than generic necessity
{
 const s=slide('第三幕 / 能力边界','数字任务先走得更远，不同领域仍然很不均衡','Sonnet 5.5 · 业务交互与桌面操作的评测切面。','来源：Claude 评测 CSV；各集合规则不同，不可视为统一考试',dataNote+'\nTAU retail94.8 airline84.2 banking40.1；OSWorld47.2。指标描述特定任务集合，不能直接推断一般领域智力。');
 const a=[{name:'零售交互',value:94.8},{name:'航司交互',value:84.2},{name:'桌面操作',value:47.2,color:C.yellow},{name:'银行交互',value:40.1,color:C.sage}];nativeBar(s,a.map(r=>r.name),[{name:'完成率',values:a.map(r=>r.value)}],.82,2.69,7.8,3.1);hbars(s,a,.82,2.92,7.8,.68);
 box(s,9.21,2.73,3.36,2.98,C.yp);text(s,'代码打开\n行动空间',9.5,3.17,2.78,1.0,27,{bold:true});text(s,'跨任务泛化\n长期学习与业务判断\n仍要继续进步',9.5,4.61,2.78,.8,17,{color:C.muted});
 takeaway(s,'编码是通用行动的重要底座；它不是所有领域已经自动化的证明。');
}
// 20 quantified R&D evidence and nested levels
{
 const s=slide('第三幕 / AI 参与 AI 研发','26% 的研发工作，已经达到 AI 主导','更强的模型，不只被卖给用户，也开始进入下一代模型的研发。','来源：仓库引用 Anthropic 研发自动化指数；截至 2026.08',S.rd+'\n26%AL4 AI主导、人类监督；>90%至少AL3协作。AL4包含于AL3及以上集合，两数字不相加；不是26%的原创发现占比。所测任务没有报告AL5完全自主。');
 kpi(s,.8,2.57,3.67,'26%','AI 主导','高层目标输入 · 人类监督',C.pale);kpi(s,4.95,2.57,3.67,'>90%','至少 AI 协作','多数研发工作已包含 AI',C.yp);
 box(s,9.1,2.57,3.47,2.52,C.gray);label(s,'任务级别',9.35,2.87,2.95);text(s,'AL3 · 协作\nAL4 · 主导\nAL5 · 完全自主',9.35,3.46,2.96,1.19,19,{bold:true});
 text(s,'AL4 是协作及以上的一部分；完全自主仍未在所测任务类别中报告。',.86,5.54,11.62,.45,18,{color:C.muted});
 takeaway(s,'AI 已经从研究成果，变成研究能力的一部分。');
}
// 21 realistic R&D bottleneck work artifacts
{
 const s=slide('第三幕 / 研发执行','它进入研发的方式，是代码、实验与检查工具','四类工作，把研究想法更快送到可以验证的环节。','来源：仓库 RSI 研究 + Anthropic 研发自动化研究；用途示意',S.rd+'\ndocs/05_chapter4_rsi_and_safety_paradigms.md。此表说明编码Agent用途，不宣称每项都是已公开证实的内部部署。');
 table(s,['研发环节','可交付的工程产物','需要验证的结果'],[['训练基础设施','诊断日志、内核补丁、性能脚本','吞吐、稳定性、数值精度'],['数据与评测','候选任务、评分器、检查脚本','泛化、偏差、是否可作弊'],['实验执行','实验配置、运行脚本、对照表','增益是否可复现'],['安全研究','红队样本、复现用例、风险报告','失败机制与部署风险']],[2.4,5.0,4.3],.8,2.58,.7);
 takeaway(s,'研发增益要看有效实验与可靠结论，不只看生成代码量。');
}
// 22 RSI climax
{
 const s=slide('第三幕 / 递归改进','当前智能参与研发，后继智能再进入下一轮','RSI：改进工具的能力，也开始被工具自身放大。','来源：Anthropic 研发自动化研究；代际反馈机制示意',S.rd+'\n这描述可能的代际正反馈，不宣称完全自主RSI或智能爆炸已经完成。算力、研究创意和验证仍可能成为约束。');
 [['当前模型','编程、分析、运行实验'],['有效研发增益','更少工程等待\n更多可检验的实验'],['后继模型','训练、评价、部署']].forEach((r,i)=>{let x=.8+i*4.15;box(s,x,2.72,3.67,2.43,i===1?C.yp:C.pale);text(s,r[0],x+.26,3.13,3.15,.49,25,{bold:true});text(s,r[1],x+.26,4.1,3.15,.74,17,{color:C.muted});if(i<2)line(s,x+3.72,3.94,x+4.07,3.94,C.coral,2,true);});
 line(s,10.92,5.34,10.92,5.79,C.coral,1.8);line(s,10.92,5.79,2.62,5.79,C.coral,1.8,true);
 takeaway(s,'最震撼的不是机器替我们工作，而是参与制造下一代更会工作的机器。');
}
// 23 practical delivery not repetitive slogans
{
 const s=slide('结尾 / 员工与公司','把业务经验变成可执行能力，而不只是个人熟练度','先定义目标与规则，再委托执行；用产物和证据判断是否完成。','组织变化为方向性分析；任务执行仍需授权环境');
 table(s,['岗位','可以交给 Agent 的产物','人应握住的判断'],[['运营 / 市场','指标计算、交叉分析、异常报告','问题是否值得问、指标是否正确'],['财务 / HR','对账清单、材料结构化、来源索引','规则、例外、金额与敏感信息'],['产品 / 研发','可运行原型、补丁、回归测试','需求价值、架构与上线责任']],[2.6,4.8,4.3],.8,2.58,.81);
 text(s,'对公司：重新审视排期、交接和等待，释放过去做不起的任务。',.89,5.93,11.64,.63,23,{bold:true});
}

fs.writeFileSync(path.join(__dirname,'slides.json'),JSON.stringify(manifest,null,2));
pptx.writeFile({fileName:path.join(__dirname,'Anthropic_编码模型与AGI_数据增强版.pptx')});
