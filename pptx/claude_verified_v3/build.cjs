const pptxgen=require('pptxgenjs');
const fs=require('fs');
const path=require('path');
const pptx=new pptxgen();
pptx.layout='LAYOUT_WIDE';pptx.author='Internal Learning';pptx.title='Anthropic 的两万亿想象：编码模型与 AGI · 全稿更新版';pptx.subject='Claude 工程能力、编码反馈与 AI 研发';pptx.lang='zh-CN';pptx.theme={headFontFace:'PingFang SC',bodyFontFace:'PingFang SC',lang:'zh-CN'};
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
function slide(section,title,sub,src,notes=''){const s=pptx.addSlide();s.background={color:C.white};page++;label(s,section,.66,.35,10);text(s,title,.66,.91,12,.7,32,{bold:true});if(sub)text(s,sub,.68,1.73,11.94,.45,16,{color:C.muted});text(s,'编码模型与 AGI',.68,7.02,8,.22,8.5,{color:C.muted});text(s,String(page).padStart(2,'0'),12.06,7.01,.57,.25,10,{align:'right',color:C.muted});s.addNotes(src+'\n'+notes);manifest.push({page,title,section,source:src,notes});return s;}
function kpi(s,x,y,w,n,t,b,fill=C.gray){box(s,x,y,w,2.52,fill);text(s,n,x+.23,y+.25,w-.46,.88,46,{bold:true,color:C.dark});text(s,t,x+.23,y+1.3,w-.46,.41,20,{bold:true});text(s,b,x+.23,y+1.93,w-.46,.35,13,{color:C.muted});}
function table(s,headers,rows,widths,x=.78,y=2.7,rowH=.58){let off=x;headers.forEach((h,i)=>{text(s,h,off+.15,y,widths[i]-.25,.42,13,{bold:true,color:C.dark});off+=widths[i];});rows.forEach((r,j)=>{const yy=y+.62+j*rowH;box(s,x,yy,widths.reduce((a,b)=>a+b,0),rowH-.08,j%2?C.white:C.gray);let xx=x;r.forEach((v,i)=>{text(s,v,xx+.15,yy,widths[i]-.25,rowH-.08,i===0?17:16,{bold:i===0});xx+=widths[i];});});}
function bullet(s,title,body,x,y,w){text(s,title,x,y,w,.48,22,{bold:true});text(s,body,x,y+.66,w,.77,17,{color:C.muted,valign:'top'});}
function nativeBar(s,labels,series,x,y,w,h,max=100){s.addChart(pptx.ChartType.bar,series.map(r=>({name:r.name,labels,values:r.values})),{x,y,w,h,barDir:'bar',chartColors:series.map(r=>r.color||C.coral),showTitle:false,showLegend:false,showValue:true,dataLabelPosition:'outEnd',valAxisMinVal:0,valAxisMaxVal:max,showBorder:false,catAxisLabelFontSize:11,valAxisLabelFontSize:10,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1}});rect(s,x,y,w,h,C.white);}
function nativeLine(s,labels,series,x,y,w,h){s.addChart(pptx.ChartType.line,series.map(r=>({name:r.name,labels,values:r.values})),{x,y,w,h,chartColors:series.map(r=>r.color||C.coral),showTitle:false,showLegend:false,showValue:false,valAxisMinVal:0,valAxisMaxVal:100,showBorder:false,showMarker:true,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1}});rect(s,x,y,w,h,C.white);}
function hbars(s,items,x,y,w,rowH,max=100,unit='%'){items.forEach((r,i)=>{const yy=y+i*rowH;const nameW=2.25,barW=w-nameW-1.0; text(s,r.name,x,yy,nameW-.2,.37,15,{bold:true});rect(s,x+nameW,yy+.04,barW,.27,C.gray);rect(s,x+nameW,yy+.04,barW*r.value/max,.27,r.color||C.coral);text(s,(unit===' 美元'?r.value.toFixed(2):r.value.toFixed(1))+unit,x+nameW+barW+.15,yy-.01,.9,.38,unit==='%'?16:11,{bold:true,color:C.dark});});}
function linePlot(s,labels,series,x,y,w,h,max=100){const px=x+.6,py=y+.17,pw=w-.95,ph=h-.9;for(let v=0;v<=max;v+=25){let yy=py+ph-v/max*ph;line(s,px,yy,px+pw,yy,C.line,.65);text(s,v+'%',x,yy-.14,.47,.25,10,{align:'right',color:C.muted});}series.forEach(r=>{let prev=null;r.values.forEach((v,i)=>{let xx=px+i/(labels.length-1)*pw,yy=py+ph-v/max*ph;if(prev)line(s,prev.x,prev.y,xx,yy,r.color,2.6);circle(s,xx-.042,yy-.042,.084,r.color);if(r.showValues)text(s,v.toFixed(1)+'%',xx-.45,yy-.43,.9,.29,12,{align:'center',bold:true,color:r.color});prev={x:xx,y:yy};});});labels.forEach((t,i)=>text(s,t,px+i/(labels.length-1)*pw-.58,py+ph+.2,1.16,.42,11,{align:'center',color:C.muted}));}
const S={bench:'data/claude_agent_benchmark_evolution.csv',comp:'data/frontier_ai_coding_agent_competitors.csv',codex:'data/openai_codex_benchmark_evolution.csv',sonnet:'https://www.anthropic.com/claude-sonnet-5-5',context:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',tools:'https://www.anthropic.com/engineering/writing-tools-for-agents',harness:'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',mcp:'https://www.anthropic.com/engineering/code-execution-with-mcp',rd:'https://www.anthropic.com/institute/measuring-pace-of-ai-development'};
const dataNote='2026-10-04核验。数据只采用本次直接读取的第三方或官方来源；配置和证据见本文件备注及source_audit.md。';

// 01 Cover
{
 const s=slide('内部分享 / 编码模型与 AGI','',null,'Claude 为什么强 · 编码模型如何成功 · 通往 AGI 的行动能力');
 text(s,'Anthropic\n两万亿 IPO 的想象',.78,1.36,8,1.69,40,{bold:true});text(s,'编码模型与 AGI',.8,3.36,8,.65,30,{color:C.dark,bold:true});
 s.addImage({path:path.join(__dirname,'../claude_coral_white/assets/intelligence.svg.png'),x:9.1,y:1.47,w:3.4,h:3.4});
 [['01','Claude 为什么强'],['02','编码模型如何成功'],['03','为什么 AGI 需要编码']].forEach((r,i)=>{let x=.85+i*4.16;box(s,x,4.75,3.68,1.2,i===2?C.yp:C.gray);text(s,r[0],x+.2,4.92,3.28,.53,30,{bold:true,color:C.dark});text(s,r[1],x+.2,5.62,3.28,.25,13,{color:C.muted});});
 s.addNotes('两万亿在此为讨论估值前景的情景开场，不宣称已核实IPO目标或已上市市值；原稿唯一报道链接本次HTTP403，原有断言降为情景。');
}
// 02 financial hook: explicitly a scenario, not a verified valuation
{
 const s=slide('开场 / 两万亿的想象','如果估值迈向两万亿，市场在押注什么？','不只是更好用的开发工具，而是更大范围的数字工作能力。','估值前景情景；非已上市市值','原唯一媒体链接本次HTTP403，不能验证IPO目标；删除2026IPO时间表和已确认目标的措辞。不把无法获取等同于新闻虚假。');
 text(s,'$2T?',.83,2.59,4,1.3,72,{bold:true,color:C.coral});text(s,'估值前景的情景讨论',.9,4.03,3.9,.43,20);text(s,'从工具收入，到工作能力的价值',.9,4.87,3.95,.37,14,{color:C.muted});
 [['开发工具','写代码、修 Bug、跑测试'],['数字工作','对账、文件处理、跨系统操作'],['智能研发','运行实验、构建评测、优化基础设施']].forEach((r,i)=>{let y=2.63+i*1.03;box(s,5.16,y,7.45,.83,i===2?C.yp:C.gray);text(s,r[0],5.43,y+.14,1.63,.44,21,{bold:true});text(s,r[1],7.44,y+.21,4.91,.32,16,{color:C.muted});});
 takeaway(s,'程序员是第一批用户；模型的行动能力，正在进入更多工作。');
}

// 03 current Opus scorecard: AA first, official for missing evals
{
 const s=slide('第一幕 / Claude 为什么强','Opus 5.5 的成绩单：工程与通用行动','终端执行、综合推理、代码变更、多文件任务：四个能力切面。','Artificial Analysis模型页和Terminal4；Anthropic Opus5.5发布页',dataNote+'\nhttps://artificialanalysis.ai/models/claude-opus-5-5\nhttps://artificialanalysis.ai/evaluations/terminalbench-4-0\nhttps://www.anthropic.com/news/claude-opus-5-5\nAA前两项：max with fallback。后两项官方发布表：max effort；FrontierCode Main，非默认medium54.6。CursorBench57.8。不可把不同评测合成企业任务成功率。');
 [['59.6%','Terminal-Bench 4.0','AA · 终端执行 · max / fallback'],['58','Intelligence Index','AA · 综合指数 v4.3.2'],['54.4%','FrontierCode 1.1','官方 · 代码变更是否可合并'],['57.8%','CursorBench 4.0','官方 · 真实会话多文件任务']].forEach((r,i)=>kpi(s,.73+i*3.16,2.62,2.78,r[0],r[1],r[2],i===2?C.yp:C.gray));
 takeaway(s,'它不只补全代码：搜索、修改、执行和验证，已经进入同一个任务。');
}

// 04 replace unsupported multi-generation Verified curve with sourced release comparison
{
 const s=slide('第一幕 / 代际跃迁','10.3% → 70.6%：一次明确的终端能力跃迁','Sonnet 5 → Sonnet 5.5 · Terminal-Bench 4.0 · 厂商公布结果。','https://www.anthropic.com/claude-sonnet-5-5',dataNote+'\n发布日期2026-09-28；官方表Sonnet5 10.3、5.5 70.6。此页官方数据不可与第5页AA mini-swe-agent混用。不同模型的最优配置，非受控训练实验。无需假称Verified98.1。');
 label(s,'完成终端任务 · 官方评测',.85,2.63,6);
 const a=[{name:'Sonnet 5',value:10.3,color:C.line},{name:'Sonnet 5.5',value:70.6}];nativeBar(s,a.map(r=>r.name),[{name:'Terminal-Bench 4.0 official',values:a.map(r=>r.value)}],.85,3.22,7.6,2.15);hbars(s,a,.85,3.52,7.6,1.02);
 box(s,9.2,2.74,3.35,2.88,C.yp);text(s,'+60.3',9.48,3.15,2.79,.8,37,{bold:true,color:C.dark});text(s,'个百分点',9.48,4.14,2.79,.4,20);text(s,'读、改、跑、检查\n在任务中连续发生',9.48,4.91,2.79,.55,16,{color:C.muted});
 takeaway(s,'模型的进步，不只是答案更像人，而是更多系统任务能够被解决。');
}

// 05 independently verified three-model comparison
{
 let verified;
 try { verified=JSON.parse(fs.readFileSync(path.join(__dirname,'benchmark_comparison_verified.json'),'utf8')); }
 catch (error) { throw new Error('Cannot load verified benchmark comparison; refusing to build with fallback data.',{cause:error}); }
 const notes='核验日期：'+verified.retrieved_at+'。全稿来源见source_audit.md。\n'+JSON.stringify(verified,null,2)+'\nTerminal-Bench为AA统一mini-swe-agent harness、66任务、每题3次的平均pass@1。Opus为max with fallback；Astra为max；Gemini为Pro Preview。fallback可能由其他模型完成部分任务，因此不是纯Opus无回退能力。AA Coding Agents页面采用厂商Agent harness，Opus约63、Astra约55，不与此处混用。官方66.4与57.9也不混入。\n右侧Intelligence Index v4.3.2是10项评测综合指数，不是百分比、不是SWE-bench Pro、不是纯编码得分。SWE-bench Pro未核实到三者同版本数据，因而移除。0.5为观测分差，不证明统计显著优势。';
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
 text(s,'终端观测分差：仅 0.5 个百分点',.86,5.73,5.58,.35,18,{bold:true,color:C.dark});text(s,'指数反映综合能力，不是编码成功率',7.08,5.73,5.55,.35,14,{color:C.muted});
 takeaway(s,'统一测试配置，才能比较分数；综合能力不等于终端任务成功率。');
}
// 06 current price and output speed, not unsupported history
{
 const s=slide('第一幕 / 能力与价格','Sonnet 与 Opus：日常迭代和复杂工作的两种选择','Claude 5.5 · API 价格为美元 / 百万 Token；速度为 AA 测量输出速率。','Anthropic Sonnet5.5、Opus5.5发布页；AA对应模型页',S.sonnet+'\nhttps://www.anthropic.com/news/claude-opus-5-5\nhttps://artificialanalysis.ai/models/claude-sonnet-5-5\nhttps://artificialanalysis.ai/models/claude-opus-5-5\n输出速率132.3/92.0 t/s，不是完整任务交付速度。官方发布价格为输入2/4、输出10/20、缓存读取0.2/0.2。当前API不等于订阅价。');
 table(s,['模型','输入','输出','缓存读取','输出速率'],[['Sonnet 5.5','$2','$10','$0.20','132.3 t/s'],['Opus 5.5','$4','$20','$0.20','92.0 t/s']],[3,1.6,1.6,2.4,3.1],.8,2.64,.8);
 box(s,.8,5.17,5.6,.6,C.gray);text(s,'Sonnet：清晰、频繁的日常任务',1.04,5.24,5.12,.42,19,{bold:true});box(s,6.92,5.17,5.58,.6,C.yp);text(s,'Opus：开放、复杂、持续判断',7.16,5.24,5.1,.42,19,{bold:true});
 takeaway(s,'模型分工可以降低调用门槛；实际成本仍取决于一项任务用了多少 Token。');
}

// 07 real independent coding-agent cost rather than handpicked $0.50 scenario
{
 const s=slide('第一幕 / 每任务成本','每次调用便宜，不等于整个任务更便宜','Artificial Analysis Coding Agent Index v1.5 · 平均每任务 API 费用。','https://artificialanalysis.ai/agents/coding-agents',dataNote+'\nAA DOM：ClaudeCode Sonnet5.5 max14.2USD；Opus5.5 max13.0USD；Codex GPT6Astra max7.47USD。页面显示值有四舍五入。指数为DeepSWE1.1/TB4/SWEAtlasQnA均权；不是相同题目全部通过之后的成本、不是人类审查/基础设施总成本。厂商Harness与第5页不同。');
 const a=[{name:'Sonnet 5.5',value:14.2},{name:'Opus 5.5',value:13,color:C.yellow},{name:'GPT-6 Astra',value:7.47,color:C.sage}];nativeBar(s,a.map(r=>r.name),[{name:'API USD per task',values:a.map(r=>r.value)}],.83,2.95,7.7,2.55,16);hbars(s,a,.83,3.19,7.7,.76,16,' 美元');
 box(s,9.1,2.73,3.47,3.0,C.yp);text(s,'单任务费用',9.38,3.13,2.91,.47,23,{bold:true});text(s,'输入 + 缓存 + 输出\n× 多轮执行',9.38,4.02,2.91,.84,21,{bold:true,color:C.dark});text(s,'Claude Code / Codex · max',9.38,5.15,2.91,.37,13,{color:C.muted});
 takeaway(s,'比较“效果、耗时与费用”的组合，比只看 Token 单价更接近真实使用。');
}

// 08 current official cached-input arithmetic
{
 const s=slide('第一幕 / Prompt Caching','重复上下文读取，价格降低 90% / 95%','缓存读取分别比普通输入便宜 90% / 95%；输出与写入另外计费。','Anthropic Sonnet5.5、Opus5.5官方发布页',S.sonnet+'\nhttps://www.anthropic.com/news/claude-opus-5-5\nSonnet缓存读取比普通输入便宜90%，Opus便宜95%，对应输入标价2/4与cache0.2。输入2/4USD，cache0.2USD，20*100k=2M:4/8->0.4。初次缓存写入、保留期限和其他Tokens另计。算例非实测账单。');
 table(s,['模型','输入 $ / M Token','缓存 $ / M Token','费用降低'],[['Sonnet 5.5','$2.00','$0.20','90%'],['Opus 5.5','$4.00','$0.20','95%']],[3,3.1,3.1,2.5],.8,2.64,.72);
 box(s,.8,5.0,11.74,.91,C.yp);text(s,'算例：20 轮 × 10 万 Token 相同前缀',1.07,5.2,4.68,.42,19,{bold:true});text(s,'Sonnet  $4 → $0.40    Opus  $8 → $0.40',6.04,5.23,6.21,.38,18,{bold:true,color:C.dark});
 takeaway(s,'缓存把反复阅读代码背景的成本降下来，让多轮工作更容易负担。');
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
 const s=slide('第一幕 / 大仓库理解','长上下文，不等于找对这次任务的证据','修复支付重试：当前上下文需要的是关联信息，而不是全部文件。','来源：Anthropic · Effective context engineering；检索流程示意',S.context+'\n移除200万字无单位换算的容量表达，保留按问题检索的工程解释。');
 box(s,.78,2.61,5.6,3.25,C.gray);box(s,6.88,2.61,5.7,3.25,C.pale);
 text(s,'全量灌入',1.04,2.91,5.05,.5,24,{bold:true});text(s,'支付 + 库存 + UI + 营销 + 配置',1.04,3.75,5.05,.42,17,{color:C.muted});
 for(let i=0;i<35;i++)rect(s,1.08+(i%7)*.64,4.43+Math.floor(i/7)*.21,.48,.12,i%11===0?C.coral:'D8D8D1');
 text(s,'按问题探索',7.14,2.91,5.17,.5,24,{bold:true});['测试入口 → 复现条件','支付调用 → retry 分支','异常类型 → 超时配置','失败用例 → 修改后的验证'].forEach((t,i)=>text(s,t,7.14,3.72+i*.43,5.16,.32,17));
 takeaway(s,'长窗口提供空间；主动检索决定哪些信息值得进入工作记忆。');
}
// 12 reliability compact data
{
 const s=slide('第一幕 / 长任务','每步只差 1.5 个百分点，50 步之后差多少？','数学算例：每步独立、可靠性恒定、失败不可恢复。','数学示意；不由评测分数推算模型单步可靠性','0.98^50=36.4%；0.995^50=77.8%；真实Agent会重试、自愈，结果受任务与恢复能力影响。');
 const ls=['1','10','20','30','40','50'],ns=ls.map(Number),a=[{name:'每步98%',values:ns.map(n=>100*.98**n),color:C.coral},{name:'每步99.5%',values:ns.map(n=>100*.995**n),color:C.sage}];nativeLine(s,ls,a,.75,2.62,8,3.35);linePlot(s,ls,a,.75,2.62,8,3.35);label(s,'珊瑚：每步 98%     绿色：每步 99.5%',1.4,5.86,7,C.muted);
 box(s,9.21,2.72,3.36,2.89,C.yp);text(s,'36.4%',9.48,3.12,2.82,.68,37,{bold:true,color:C.dark});text(s,'→ 77.8%',9.48,4.04,2.82,.65,32,{bold:true});text(s,'50 步全部成功概率',9.48,5.03,2.82,.33,15,{color:C.muted});
 takeaway(s,'真实体验的关键：少犯错、出错能恢复、少让人接管。');
}
// 13 training concrete scale and path
{
 const s=slide('第二幕 / 编码模型如何成功','代码训练场有任务、有环境，也有自动裁判','可运行的环境 + 可检查的结果，让“做对了”不再只靠主观评价。','SWE-bench官方、Scale Pro官方仓库、Terminal-Bench4与AA',dataNote+'\nhttps://www.swebench.com/SWE-bench/\nhttps://github.com/scaleapi/SWE-bench_Pro-os\nhttps://www.tbench.ai/news/terminal-bench-4-0\nhttps://artificialanalysis.ai/evaluations/terminalbench-4-0\nVerified500；ProV2 642（v1 731）；TB4 66。保留训练与评测分离：TerminalBench明确禁止将基准数据放入训练语料。');
 [['500','Verified','人工校验的 Issue 任务'],['642','Pro V2','离线执行的复杂仓库任务'],['66','Terminal-Bench 4.0','校准资源与超时的终端任务']].forEach((r,i)=>kpi(s,.8+i*4.15,2.58,3.67,r[0],r[1],r[2],i===2?C.yp:C.gray));
 text(s,'代码库 + 容器环境 + 测试 / 验证器 → 可重复的执行反馈',.85,5.52,11.72,.47,22,{bold:true});
 takeaway(s,'编码的优势：大量试错能够运行、能够评分，也能够进入下一轮改进。');
}
// 14 actual RL with loops not repeated generic
{
 const s=slide('第二幕 / Agentic RL','模型学习的，不只是一份正确补丁，而是整段解题轨迹','公开研究展示：强化学习能鼓励自我检查、反思与更有效的推理。','DeepSeek-R1官方研究；下图为编码Agent强化学习的机制示意','https://github.com/deepseek-ai/DeepSeek-R1\n研究是公开RL实例，不声称图中的全部Agentic编码训练轨迹为Claude已披露的私有配方。OpenAI introducingCodex本次403，移除未经本次复核的codex-1具体归因；保留执行纠错与训练权重更新的区别。');
 const xs=[.8,3.95,7.1,10.25],titles=['给定任务','生成轨迹','环境评分','训练更新'],body=['需求 + 仓库\n依赖 + 测试','读文件 → 修改\n运行 → 纠错','问题是否解决？\n是否破坏原行为？','强化有效策略\n进入下一批任务'];
 xs.forEach((x,i)=>{box(s,x,2.7,2.3,2.49,i===2?C.yp:C.gray);label(s,'0'+(i+1),x+.2,2.95,1.9);text(s,titles[i],x+.2,3.5,1.9,.44,22,{bold:true});text(s,body[i],x+.2,4.34,1.9,.57,15,{color:C.muted});if(i<3)line(s,x+2.35,3.97,x+3.05,3.97,C.coral,1.8,true);});
 takeaway(s,'执行时修好这一题；训练时让下一批题的解题策略变得更好。');
}
// 15 actual public task replaces unverified illustrative Nginx task
{
 const s=slide('第二幕 / 反馈为何有效','一道真实任务：不停机，从 MySQL 迁到 PostgreSQL','Terminal-Bench 4.0 · live-database-cutover · 迁移期间读写继续。','Artificial Analysis Terminal-Bench4.0公开任务示例','https://artificialanalysis.ai/evaluations/terminalbench-4-0\n用户请求5秒超时；p95比MySQL基线最多增加10ms；不允许5xx意外4xx、数据不一致、陈旧读取或丢行；验证PG全量数据、外键、继续写入、查询行为。公开题目要求，非本次执行或模型成功案例。');
 table(s,['验收维度','测试动作','必须满足'],[['不中断服务','切换期间持续重放客户请求','零失败、零丢行、零陈旧读取'],['行为保持','比较 API 状态码与响应内容','与 MySQL 基线一致'],['性能预算','检查各接口 p95 延迟','比基线最多增加 10 ms'],['迁移完成','验证数据、外键与后续写入','新部署也不能依赖 MySQL']],[2.25,4.8,4.65],.8,2.58,.7);
 takeaway(s,'裁判检查的是系统行为达标，不是配置文件或代码看起来正确。');
}

// 16 observed current competition, no unverifiable historical curve
{
 const s=slide('第二幕 / 赛道验证','Codex 的竞争力，不只在分数，也在执行效率','Artificial Analysis · Codex 两种模型配置 · 当前任务均值。','https://artificialanalysis.ai/agents/coding-agents\nhttps://github.com/openai/codex',dataNote+'\nAA Coding Agent Index1.5 displayed scores GPT6.1Sol xhigh63 / Astra max62；runtime15.5/29.4min；APIcost1.04/7.47USD。不是受控模型唯一变量实验、不是Pro83.5、不支持品牌历史持续提升的曲线。Codex官方仓库核实CLI和Web存在。');
 table(s,['Codex 模型配置','编码 Agent 指数','平均运行时间','平均 API 费用'],[['GPT-6.1 Sol · xhigh','63','15.5 分钟','$1.04'],['GPT-6 Astra · max','62','29.4 分钟','$7.47']],[3.8,2.8,2.5,2.6],.8,2.62,.85);
 box(s,.8,5.2,11.74,.6,C.yp);text(s,'指数 v1.5：DeepSWE 1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA',1.08,5.33,11.15,.33,17,{bold:true});
 takeaway(s,'赛道已经从“谁答得更好”，进入“谁能以更低代价持续完成任务”。');
}

// 17 office case material input and output
{
 const s=slide('第三幕 / 为什么 AGI 需要编码','普通员工的任务，也包含数据结构、循环与规则','对账示例：订单明细与银行流水；保留差异证据，不直接修改账目。','业务案例示意；表内数字为教学样本，不是公司实际数据',S.mcp+'\n教学样本O1042订单额980银行到账950差额30；O1088订单1200到账1200差额0；O1101订单600到账0差额600。Agent需处理编号、金额单位、重复记录与业务授权。');
 box(s,.8,2.62,3.56,3.19,C.gray);label(s,'输入 · 教学样本',1.04,2.89,3.05);text(s,'orders.xlsx\nbank.csv',1.04,3.53,3.05,.98,24,{fontFace:'Menlo',bold:true});text(s,'订单号 · 金额 · 到账日期',1.04,4.92,3.05,.45,15,{color:C.muted});
 line(s,4.49,4.1,5.02,4.1,C.coral,2,true);
 table(s,['订单','应收','到账','差额'],[['O1042','980','950','30'],['O1088','1200','1200','0'],['O1101','600','0','600']],[2.0,1.45,1.45,1.53],5.18,2.63,.72);
 text(s,'输出：异常清单 + 原始行号 + 核对依据',5.35,5.66,7.03,.36,17,{bold:true,color:C.dark});
 takeaway(s,'Agent 编写清洗与匹配脚本，人核对业务规则与异常解释。');
}
// 18 sourced MCP engineering token reduction example
{
 const s=slide('第三幕 / 按需制造工具','MCP + 代码执行：先发现工具，再按需组合','把工具定义按需加载，让大规模工具接入不挤满上下文。','https://www.anthropic.com/engineering/code-execution-with-mcp','官方工程文章示例：按需探索工具文件，把需加载内容从150000降至2000Tokens，降低98.7%。它不是模型成功率、不是所有工作端到端账单降低98.7%；计算98.6667%四舍五入。');
 kpi(s,.8,2.63,3.67,'150,000','全量加载工具定义','Token · 官方工程示例',C.gray);kpi(s,4.95,2.63,3.67,'2,000','按需发现与读取','Token · 同一工程示例',C.yp);
 box(s,9.1,2.63,3.47,2.52,C.pale);text(s,'−98.7%',9.35,3.15,2.97,.75,36,{bold:true,color:C.dark});text(s,'这部分上下文用量',9.35,4.32,2.97,.45,18,{bold:true});
 text(s,'探索 ./servers/ → 读取目标工具接口 → 写脚本 → 在环境里执行',.85,5.58,11.72,.46,21,{bold:true});
 takeaway(s,'CLI 执行动作，MCP 接入系统，Skills 保存可复用的做事方法。');
}

// 19 updated official capability profile with metric distinctions
{
 const s=slide('第三幕 / 能力边界','同一个模型，在不同工作上仍有不同表现','Opus 5.5 · 工具、科学、业务流程与桌面操作的评测切面。','https://www.anthropic.com/news/claude-opus-5-5','官方发布表：Chartography with tools89；OSWorld2.1 partial81.8；TerminalBenchScience0.1 58.7；AutomationBenchZapier40.0。前两后两指标不同，不能作为统一考试或行业总体胜任率；AutomationBench无fallback，其他部分有安全fallback；均按原文标识。');
 const a=[{name:'图表识别¹',value:89},{name:'桌面操作²',value:81.8},{name:'科研终端任务',value:58.7,color:C.yellow},{name:'业务工作流',value:40,color:C.sage}];nativeBar(s,a.map(r=>r.name),[{name:'Published benchmark scores',values:a.map(r=>r.value)}],.82,2.69,7.8,3.1);hbars(s,a,.82,2.92,7.8,.68);
 text(s,'¹ Chartography · with tools    ² OSWorld 2.1 · partial',.86,5.88,8.0,.28,11,{color:C.muted});
 box(s,9.21,2.73,3.36,2.98,C.yp);text(s,'能力不会\n均匀展开',9.5,3.17,2.78,1.0,27,{bold:true});text(s,'检验具体工作\n比套用一个总分\n更能判断可用性',9.5,4.61,2.78,.8,17,{color:C.muted});
 takeaway(s,'编码打开了通用行动的空间；业务适配与可靠性仍然决定落地效果。');
}

// 20 quantified R&D evidence and nested levels
{
 const s=slide('第三幕 / AI 参与 AI 研发','26% 的内部研发工作，达到 AI 主导级别','Anthropic R&D Automation Index · 2026 年 8 月快照 · AL4 仍由人监督。','Anthropic · Measuring the pace of AI development',S.rd+'\n26%AL4 AI主导、人类监督；>90%至少AL3协作。AL4包含于AL3及以上集合，两数字不相加；不是26%的原创发现占比。所测任务没有报告AL5完全自主。');
 kpi(s,.8,2.57,3.67,'26%','AI 主导','高层目标输入 · 人类监督',C.pale);kpi(s,4.95,2.57,3.67,'>90%','至少 AI 协作','AL3 及以上 · 含 AL4',C.yp);
 box(s,9.1,2.57,3.47,2.52,C.gray);label(s,'任务级别',9.35,2.87,2.95);text(s,'AL3 · 协作\nAL4 · 主导\nAL5 · 完全自主',9.35,3.46,2.96,1.19,19,{bold:true});
 text(s,'AL4 是协作及以上的一部分；完全自主仍未在所测任务类别中报告。',.86,5.54,11.62,.45,18,{color:C.muted});
 takeaway(s,'AI 已经从研究成果，变成研究能力的一部分。');
}
// 21 actual internal operational scale, not vague speculative table
{
 const s=slide('第三幕 / 研发执行','约 3 万个 Agent，在同一平台并行做研发','Anthropic 最常用内部平台 · 2026 年 8 月快照。','https://www.anthropic.com/institute/measuring-pace-of-ai-development','厂商自报，尚非独立审计：最常用平台任何时刻约30000研究工程Agent；动作100%执行前在线监测；8月超过10亿决策被分析，0.002%被拦截；监控覆盖不等于识别全部风险。三万不是员工人数，也不是完全自主的独立研究者。');
 kpi(s,.8,2.64,3.67,'≈30,000','同时运行的 Agent','单一内部平台 · 研究与工程',C.pale);kpi(s,4.95,2.64,3.67,'100%','执行前经过在线监控','平台内动作覆盖率',C.gray);kpi(s,9.1,2.64,3.47,'>10 亿','被分析的决策','2026 年 8 月',C.yp);
 text(s,'大规模并行执行，把代码、实验与检查工具变成持续运转的研发系统。',.86,5.66,11.62,.46,21,{bold:true});
 takeaway(s,'这不是完全自主研究，而是人类设定目标、Agent 执行、系统持续监督。');
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
pptx.writeFile({fileName:path.join(__dirname,'Anthropic_编码模型与AGI_全稿更新版.pptx')});
