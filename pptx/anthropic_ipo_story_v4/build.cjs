const pptxgen=require('pptxgenjs');
const fs=require('fs');
const path=require('path');
const pptx=new pptxgen();
pptx.layout='LAYOUT_WIDE';pptx.author='Internal Learning';pptx.title='Anthropic 2万亿IPO的背后：编码模型与AGI';pptx.subject='IPO与收入增长、Agentic范式、编码模型与AGI';pptx.lang='zh-CN';pptx.theme={headFontFace:'PingFang SC',bodyFontFace:'PingFang SC',lang:'zh-CN'};
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
function nativeBar(s,labels,series,x,y,w,h,max=100){s.addChart(pptx.ChartType.bar,series.map(r=>({name:r.name,labels,values:r.values})),{x,y,w,h,barDir:'bar',chartColors:series.map(r=>r.color||C.coral),showTitle:false,showLegend:false,showValue:true,dataLabelPosition:'outEnd',valAxisMinVal:0,valAxisMaxVal:max,showBorder:false,catAxisLabelFontSize:11,valAxisLabelFontSize:10,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1}});rect(s,x,y,w,h,C.white);}
function hbars(s,items,x,y,w,rowH,max=100,unit='%'){items.forEach((r,i)=>{const yy=y+i*rowH;const nameW=2.25,barW=w-nameW-1.0; text(s,r.name,x,yy,nameW-.2,.37,15,{bold:true});rect(s,x+nameW,yy+.04,barW,.27,C.gray);rect(s,x+nameW,yy+.04,barW*r.value/max,.27,r.color||C.coral);text(s,(unit===' 美元'?r.value.toFixed(2):r.value.toFixed(1))+unit,x+nameW+barW+.15,yy-.01,.9,.38,unit==='%'||unit==='B'?16:11,{bold:true,color:C.dark});});}

const SRC={ipo:'https://www.anthropic.com/news/confidential-draft-s1-sec',reuters:'https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs',e:'https://www.anthropic.com/news/anthropic-raises-series-e-at-usd61-5b-post-money-valuation',f:'https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation',g:'https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation',h:'https://www.anthropic.com/news/series-h',mcp:'https://www.anthropic.com/news/model-context-protocol',skills:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',aaif:'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation',rd:'https://www.anthropic.com/institute/measuring-pace-of-ai-development',aa:'https://artificialanalysis.ai/agents/coding-agents',exec:'https://www.anthropic.com/engineering/code-execution-with-mcp'};
const ch1='01 / 史上最大 IPO',ch2='02 / 不仅仅是程序员的梦中情模',ch3='03 / 编码模型与 AGI';
function flow(s,items,y=3.0){items.forEach((r,i)=>{const w=(11.8-(items.length-1)*.36)/items.length,x=.78+i*(w+.36);box(s,x,y,w,2.35,i===items.length-1?C.yp:C.gray);label(s,String(i+1).padStart(2,'0'),x+.23,y+.22,w-.46);text(s,r[0],x+.23,y+.8,w-.46,.55,23,{bold:true});text(s,r[1],x+.23,y+1.53,w-.46,.57,15,{color:C.muted});if(i<items.length-1)line(s,x+w+.03,y+1.17,x+w+.31,y+1.17,C.coral,1.8,true);});}
function chart(s,labels,values,x,y,w,h,max,unit,fmt){s.addChart(pptx.ChartType.line,[{name:unit,labels,values}],{x,y,w,h,chartColors:[C.coral],showLegend:false,showValue:true,valAxisMinVal:0,valAxisMaxVal:max,showMarker:true,showBorder:false});rect(s,x,y,w,h,C.white);const px=x+.62,py=y+.48,pw=w-1.1,ph=h-1.15;for(let j=0;j<=4;j++){let v=max*j/4,yy=py+ph-v/max*ph;line(s,px,yy,px+pw,yy,C.line,.65);text(s,String(v),x,yy-.14,.48,.28,10,{align:'right',color:C.muted});}let prev;values.forEach((v,i)=>{let xx=px+i*pw/(values.length-1),yy=py+ph-v/max*ph;if(prev)line(s,prev.x,prev.y,xx,yy,C.coral,2.5);circle(s,xx-.05,yy-.05,.1);text(s,fmt(v),xx-.48,yy-.43,.96,.32,14,{bold:true,color:C.dark,align:'center'});text(s,labels[i],xx-.63,py+ph+.19,1.26,.49,12,{align:'center',color:C.muted});prev={x:xx,y:yy};});}
// 01
{
const s=slide('内部分享 / 2026.10','',null,SRC.ipo+'\n'+SRC.reuters,'IPO已提交；超过两万亿美元为Reuters预期上市估值目标，非完成定价或当前上市市值。');
text(s,'Anthropic\n2万亿 IPO 的背后',.78,1.32,8.5,1.72,42,{bold:true});text(s,'编码模型与 AGI',.8,3.33,8,.62,31,{bold:true,color:C.dark});s.addImage({path:path.join(__dirname,'../claude_coral_white/assets/intelligence.svg.png'),x:9.17,y:1.5,w:3.3,h:3.3});
[['01','为什么值两万亿'],['02','从编码到数字工作'],['03','从数字工作到 AGI']].forEach((r,i)=>{let x=.8+i*4.15;box(s,x,4.9,3.68,1.15,i===2?C.yp:C.gray);text(s,r[0],x+.23,5.08,.74,.54,30,{bold:true,color:C.dark});text(s,r[1],x+1.03,5.19,2.43,.35,16,{bold:true});});
}
// 02
{
const s=slide(ch1,'一家成立五年的公司，正在冲击两万亿 IPO','2026.06.01 已秘密提交 S-1；Reuters 9 月报道预期上市估值超过 $2T。',SRC.ipo+'\n'+SRC.reuters,'官方6月公告未确定发行股数、价格。Reuters9月预计美国中期选举后上市，不设定已确定敲钟日。');
text(s,'>$2T',.83,2.65,5.0,1.16,72,{bold:true,color:C.coral});text(s,'预期上市估值',.9,4.01,4.8,.45,24,{bold:true});
[['2021','Anthropic 成立'],['2026.06','秘密提交 S-1 草案'],['2026.09','报道披露两万亿估值目标']].forEach((r,i)=>{const y=2.71+i*1.0;box(s,6.0,y,6.54,.79,i===2?C.yp:C.gray);text(s,r[0],6.24,y+.16,1.55,.4,19,{bold:true,color:C.dark});text(s,r[1],8.04,y+.18,4.23,.37,18);});
takeaway(s,'真正值得追问的是：资本为什么给它如此高的价格？');
}
// 03 / 历史坐标只服务于Anthropic主线，不另设募资纪录支线
{
const sx='https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx';
const s=slide(ch1+' / 1.1','从阿里巴巴到 Anthropic：超级 IPO 的尺度','历数大型 IPO：公司估值与募资额，同时放进一个坐标系。',SRC.reuters+'\nhttps://www.alibabagroup.com/en-US/document-1490842489823690752\nhttps://www.cnbc.com/2014/09/18/alibaba-prices-shares-at-68-a-share-dj.html\nhttps://www.cnbc.com/2020/01/12/saudi-aramco-raises-ipo-to-record-29point4-billion-through-greenshoe-option.html\nhttps://www.cnbc.com/2019/12/05/saudi-aramco-prices-shares-at-the-top-of-the-range-for-record-ipo-report-says.html\n'+sx,'2026-10-05叙事纠正：合并原第3/4页，删除SpaceX纪录支线。历史公司只用于建立Anthropic估值尺度。公司估值按发行价：阿里167.62B（不是首日231.4B）；Aramco1.7T；SpaceX1.77T来自Reuters。发行总额含超额配售：阿里25.03B含公司及售股股东；Aramco29.4B；SpaceX官方85.7B，其股数乘135美元与公告金额不一致，按公告明确gross proceeds，冲突保留audit。Anthropic募资未定、>2T为报道目标。不是完整所有IPO名单，不宣称Anthropic募资额破纪录。');
const headers=['公司 / IPO 年份','IPO 公司估值','募资额（含超额配售）'];const widths=[3.5,4.1,4.1];let x=.8;headers.forEach((t,i)=>{text(s,t,x+.2,2.56,widths[i]-.4,.43,15,{bold:true,color:C.dark});x+=widths[i];});
const rows=[['阿里巴巴 · 2014','约 1,676 亿美元','250.3 亿美元'],['沙特阿美 · 2019','约 1.70 万亿美元','294 亿美元'],['SpaceX · 2026','约 1.77 万亿美元','857 亿美元'],['Anthropic · IPO','目标超过 2 万亿美元','发行规模待定']];
rows.forEach((r,j)=>{const y=3.21+j*.64;box(s,.8,y,11.7,.53,j===3?C.yp:(j%2?C.white:C.gray));let xx=.8;r.forEach((v,i)=>{text(s,v,xx+.2,y,widths[i]-.4,.53,i===0?19:18,{bold:i===0||j===3,color:j===3?C.dark:C.ink});xx+=widths[i];});});
text(s,'已上市公司按 IPO 发行价计算估值；Anthropic 为报道中的上市估值目标。',1,5.91,11.3,.27,12,{color:C.muted});
takeaway(s,'为什么一家成立仅五年的 AI 公司，能以两万亿目标进入这个行列？');
}
// 05
{
const s=slide(ch1+' / 1.2','从成立到两万亿目标：仅仅五年','投后估值 → IPO 目标；单位：十亿美元；目标点单独标记。',[SRC.e,SRC.f,SRC.g,SRC.h,SRC.reuters].join('\n'),'早期融资CSV日期轮次金额有错，保留2021成立而不画无原始证据的早期估值；折线各点等距展示事件，不代表等时距。IPO目标不用作为已成交融资点。');
chart(s,['2025.03\nE 轮','2025.09\nF 轮','2026.02\nG 轮','2026.05\nH 轮'],[61.5,183,380,965],.75,2.55,8.2,3.42,1000,'USD B',v=>String(v));
box(s,9.37,2.67,3.2,3.18,C.yp);text(s,'2021 → 2026',9.61,2.93,2.72,.39,20,{bold:true});text(s,'>$2T',9.61,3.69,2.72,.88,43,{bold:true,color:C.dark});text(s,'IPO 目标\n比 H 轮再翻一倍以上',9.61,4.95,2.72,.64,17,{color:C.muted});
takeaway(s,'不是缓慢积累的巨头，而是收入与能力同时加速的公司。');
}
// 06
{
const s=slide(ch1+' / 1.3','Claude Code 发布之后，公司年化收入陡增','2025.02 研究预览 · 2025.05 全面开放；单位：十亿美元年化收入。',[SRC.f,SRC.g,SRC.h,'https://www.anthropic.com/news/claude-3-7-sonnet','https://www.anthropic.com/news/claude-4'].join('\n'),'run-rate revenue不是全年确认营收、不是保证续约ARR，采用官方名称。公司整体收入并非全部来自ClaudeCode；时间共现不证明Code单独导致全部增长。年初约1B、8月>5B、2月14B、5月>47B，下限点。');
chart(s,['2025 年初','2025.08','2026.02','2026.05'],[1,5,14,47],.75,2.57,8.2,3.4,50,'Run-rate USD B',v=>v===5||v===47?'>'+v:String(v));
box(s,9.39,2.72,3.18,2.96,C.yp);text(s,'约 $1B',9.63,3.04,2.7,.57,31,{bold:true});text(s,'→ >$47B',9.63,3.97,2.7,.67,33,{bold:true,color:C.dark});text(s,'从 2025 年初\n到 2026 年 5 月',9.63,5.03,2.7,.51,16,{color:C.muted});
takeaway(s,'公司开始出售的不只是答案，而是能持续完成工作的执行能力。');
}
// 07
{
const s=slide(ch1+' / 1.3','Claude Code 本身，也跑出了十亿美元级生意','公司整体增长之外，这个产品已经有可观察的收入与企业扩张。',SRC.f+'\n'+SRC.g,'2025.08 Code >0.5B；2026.02 >2.5B。业务订阅从2026年初增4倍，企业占Code收入过半。不是整个公司企业收入比例。');
[['>$0.5B','2025 年 8 月','Claude Code 年化收入'],['>$2.5B','2026 年 2 月','Claude Code 年化收入'],['>50%','企业使用占比','Claude Code 收入构成']].forEach((r,i)=>kpi(s,.8+i*4.15,2.62,3.67,r[0],r[1],r[2],i===2?C.yp:C.gray));
text(s,'同期：Claude Code 企业订阅较年初增长 4 倍',.86,5.58,11.7,.47,23,{bold:true});
takeaway(s,'程序员不是小众试用者，而是让智能劳动最先形成付费闭环的人。');
}
// 08
{
const s=slide(ch1+' / 1.3','18–20 倍收入，怎样才能支撑两万亿？','估值 ÷ 年化收入 = 收入倍数；这里不是 PE，ARR 也不是利润。',SRC.h+'\n'+SRC.reuters,'Reuters全文没有100B ARR；仓库9月100B没有独立来源，不作为实际收入。以下100–111B是所需收入倒算。965/47=20.53；2000/47=42.55；2000/20=100；2000/18=111.11。');
table(s,['估值口径','年化收入','对应收入倍数'],[['H 轮：$965B','>$47B（2026.05）','低于约 20.5×'],['IPO 目标：$2,000B','$47B 作参照','约 42.6×'],['IPO 目标：$2,000B','$100–111B（倒算）','18–20×']],[4.0,4.3,3.4],.8,2.59,.74);
box(s,.8,5.5,11.7,.54,C.yp);text(s,'$2,000B ÷ 20 = $100B       $2,000B ÷ 18 ≈ $111B',1.06,5.57,11.18,.39,21,{bold:true,color:C.dark});
takeaway(s,'两万亿的商业逻辑，押注的是收入继续放大，而不是今天已经赚到了利润。');
}
// 09
{
const s=slide(ch1,'高增长之外，市场还在押注什么？','2025 年确认收入约 $4.6B；仍有超过 $8B 的经营亏损。',SRC.reuters,'2025净亏损近42B含约34B融资估值会计费用，不等于现金烧钱；经营亏损>8B。未来cloud/compute/infrastructure义务518B不是单年Capex。');
flow(s,[['今天的证据','真实付费\n公司与 Code 收入增长'],['正在扩张的市场','从开发者\n走向全体知识工作者'],['更远的溢价','AI 参与 AI 研发\n智能成为增长发动机']]);
text(s,'代价也很真实：未来云、算力与基础设施义务 $518B',.85,5.84,11.75,.37,18,{bold:true,color:C.dark});
takeaway(s,'要解释估值，下一步必须解释：Claude 为什么能完成越来越多工作？');
}
// 09–10 / Claude frontier generations: all disclosed milestones, benchmarks separated
let history;try{history=JSON.parse(fs.readFileSync(path.join(__dirname,'frontier_history_verified.json'),'utf8'));}catch(e){throw new Error('Frontier history could not be loaded',{cause:e});}
{
const s=slide(ch2+' / 2.1','从 Sonnet 的突破，到旗舰模型的工程能力跃迁','SWE-bench Verified · 真实仓库修复率 · 历代官方结果；新一代转向更难的 Pro。',JSON.stringify(history,null,2),'以repo数据发现节点，再按官方发布页和system card逐项重建。Claude 2不是Sonnet 2；71.2为HumanEval，不能入Verified。Claude 3 Opus原发布未提供同口径Verified，不用CSV错标33.4。3.7用500题62.3；定制scaffold70.3为489题，旁注不入主图。历代harness、thinking、trial数变化，是官方能力足迹，不是控制配置的逐代实验。Mythos/Fable5 95.5/95来自card253页；Opus5 96来自card153页。5.1/5.5未报Verified，不能用repo96.5/97.8/98.1；右栏独立Pro81.2/89.9/81.3。');
box(s,.78,2.31,11.78,.43,C.gray);text(s,'起点：Claude 2 · HumanEval 71.2%（2023）     →     Claude 3 家族（2024）     →     Sonnet 开始攻克真实仓库',.97,2.34,11.4,.34,12,{color:C.muted});
function evolutionBars(rows,y){const x=.97,w=8.65,h=1.42;const labels=rows.map(r=>r.name),values=rows.map(r=>r.score);s.addChart(pptx.ChartType.bar,[{name:'SWE-bench Verified %',labels,values}],{x,y,w,h,barDir:'col',chartColors:[C.coral],showLegend:false,showValue:true,dataLabelPosition:'outEnd',valAxisMinVal:0,valAxisMaxVal:100,showBorder:false});rect(s,x,y,w,h,C.white);const top=y+.27,bottom=y+1.0,step=w/rows.length;
[0,50,100].forEach(v=>{const yy=bottom-v/100*(bottom-top);line(s,x,yy,x+w-.1,yy,C.line,.6);text(s,String(v),.66,yy-.11,.25,.22,8,{align:'right',color:C.muted});});
rows.forEach((r,i)=>{const xx=x+i*step+.11,bh=r.score/100*(bottom-top),highlight=/3.7|Mythos|Opus 5$/.test(r.name);rect(s,xx,bottom-bh,step-.24,bh,highlight?C.coral:'E8BAA5');text(s,r.paired_score?r.score.toFixed(1)+' / '+r.paired_score.toFixed(0):r.score.toFixed(1),xx-.1,bottom-bh-.27,step-.02,.22,r.paired_score?10:12,{align:'center',bold:true,color:C.dark});
const nm=r.name==='Mythos / Fable 5'?'Mythos /\nFable 5':r.name==='Mythos Preview'?'Mythos\nPreview':r.name.replace('Sonnet ','')+'\n'+(r.name.startsWith('Sonnet')?'Sonnet':r.name.startsWith('Opus')?'': '');const display=r.name.startsWith('Opus')?r.name.replace('Opus ','')+'\nOpus':nm;
text(s,display,xx-.11,bottom+.08,step-.01,.36,11,{align:'center',bold:highlight});text(s,r.date,xx-.11,bottom+.46,step-.01,.18,8.5,{align:'center',color:C.muted});});}
evolutionBars(history.swe_verified.slice(0,8),2.91);evolutionBars(history.swe_verified.slice(8),4.5);
box(s,9.93,2.91,2.62,3.27,C.yp);text(s,'新一代 · SWE-bench Pro',10.13,3.1,2.22,.42,15,{bold:true,color:C.dark});history.new_swe_pro.forEach((r,i)=>{let yy=3.79+i*.71;text(s,r.name,10.13,yy,2.2,.27,r.name.includes('Mythos')?11:14,{bold:true});text(s,r.score.toFixed(1)+'%',10.13,yy+.28,2.2,.38,24,{bold:true,color:C.dark});});text(s,'与 Verified 分开展示',10.13,5.95,2.22,.23,10,{color:C.muted});
text(s,'3.7 发布时领先：62.3%；定制 scaffold 可达 70.3%。历史结果含不同配置；柱高均从 0 起。',.8,6.37,11.76,.26,12,{color:C.muted});text(s,'从 Sonnet 3.7 的领先，到 Mythos / Fable 的约 95%，再到更难的工程任务。',.8,6.7,11.76,.29,18,{bold:true});
}
{
const s=slide(ch2+' / 2.1','Terminal-Bench：Claude 历代旗舰的执行能力','从读写文件，到依赖、进程与科学计算；原版、2.0、2.1、4.0 分区呈现。',JSON.stringify(history.terminal_panels,null,2),'不同版本不连线、不计算跨版本增幅。原版Opus4 43.2 ClaudeCode；Opus4.1 43.3 Terminus1，Sonnet4.5 50.0发布表。2.0 Opus4.5 59.3为128Kthinking原始发布而非后续重测59.8；Opus4.6 65.4 max；Sonnet4.6 59.1无thinking；Mythos Preview82 max；Opus4.7 69.4无thinking。2.1 Opus4.8发布74.6 Terminus2，后续重跑82.7不混入发布点；Fable84.3/Mythos88.0取card251；Sonnet5 80.4 mini-swe-agent。4.0 Opus5.5 66.4 xhigh+fallback；其他5.1和Sonnet5.5为max；各点重复次数不同。Mythos/Fable5.1同一基础模型，差异是safeguards/access。Sonnet5 10.3由Sonnet5.5发布正文提供，不能将它与Sonnet5 TB2.1 80.4相减。数据与AA模型-only59.6不同。Terminal-Bench始于2025，不能为Claude2/3.x补造分数。');
const xs=[.78,3.48,6.35,9.01],ws=[2.49,2.66,2.45,3.55];
history.terminal_panels.forEach((p,j)=>{const x=xs[j],w=ws[j];box(s,x,2.56,w,3.43,j===3?C.yp:C.gray);text(s,p.version,x+.16,2.73,w-.32,.36,17,{bold:true,color:C.dark});nativeBar(s,p.rows.map(r=>r[0]),[{name:'Terminal-Bench '+p.version,values:p.rows.map(r=>r[1])}],x+.15,3.2,w-.3,2.46);rect(s,x+.12,3.12,w-.24,2.72,j===3?C.yp:C.gray);
p.rows.forEach((r,i)=>{const yy=3.23+i*.345,latest=/5.1|5.5/.test(r[0]);text(s,r[0],x+.16,yy,w-1.03,.27,j===3?13:12.5,{bold:latest,color:latest?C.dark:C.ink});text(s,r[1].toFixed(1)+'%',x+w-.87,yy,.7,.27,13,{bold:true,align:'right',color:C.dark});rect(s,x+.17,yy+.285,w-.35,.035,C.line);rect(s,x+.17,yy+.285,(w-.35)*r[1]/100,.035,latest?C.dark:C.coral);});
text(s,j===3?'Code --bare · Opus 5.5 xhigh\n其余 max；5.5 含 fallback':j===0?'发布时原版配置\nClaude Code / Terminus-1':j===1?'Terminus-2\n各代 thinking 设置不同':'4.8：Terminus-2\n后续含不同 harness',x+.16,5.73,w-.32,.29,9,{color:C.muted});});
text(s,'版本之间不直接比高低；同版也要看 harness 与 effort。Mythos / Fable 5.1 为同一基础模型、不同安全配置。',.8,6.2,11.76,.36,12,{color:C.muted});text(s,'Mythos / Fable 5.1 → Opus 5.5：工程智能正从“能写”走向“能持续完成”。',.8,6.69,11.76,.31,19,{bold:true});
}
// 12
{
let v;try{v=JSON.parse(fs.readFileSync(path.join(__dirname,'benchmark_comparison_verified.json'),'utf8'));}catch(e){throw new Error('Verified comparison could not be loaded',{cause:e});}
const s=slide(ch2+' / 2.1','今天的第三方对照：Claude 强，但领先不是天赋','Opus 5.5 max / fallback · Astra max · Gemini 3.1 Pro Preview。',JSON.stringify(v,null,2),'AA TB4 mini-swe-agent 66题3次平均pass@1；fallback可能用其他模型，0.5pp观测差不证明显著领先。AA综合指数v4.3.2不是编码通过率。');
label(s,'Terminal-Bench 4.0 · 平均 pass@1',.8,2.57,5.5);label(s,'AA Intelligence Index v4.3.2',7.08,2.57,5.5);
function panel(values,x,percent){const colors=[C.coral,C.yellow,C.sage];nativeBar(s,v.models.map(m=>m.display_name),[{name:percent?'TB4':'Intelligence Index',values}],x,3.15,5.5,2.51);values.forEach((n,i)=>{let y=3.47+i*.74;const names=['Opus 5.5','GPT-6 Astra','Gemini 3.1 Pro'];text(s,names[i],x,y,2.34,.39,17,{bold:true});rect(s,x+2.48,y+.06,1.95,.29,C.gray);rect(s,x+2.48,y+.06,1.95*n/100,.29,colors[i]);text(s,n+(percent?'%':''),x+4.61,y-.01,.9,.41,18,{bold:true,color:C.dark});});}
panel(v.terminal_bench.scores_percent,.8,true);panel(v.intelligence_index.scores,7.08,false);text(s,'终端分差：Opus 与 Astra 仅 0.5 个百分点',.85,5.87,6.2,.34,17,{bold:true});text(s,'综合指数不是百分比，也不是纯编码分数',7.08,5.87,5.52,.34,13,{color:C.muted});
takeaway(s,'领先必须持续经营：模型能力、Agent 系统和产品体验缺一不可。');
}
// 13
{
const s=slide(ch2+' / 2.2','Claude Code 的新范式：交给目标，而不是索取答案','教学任务：定位支付重试缺陷，准备补丁和回归测试。','https://www.anthropic.com/news/claude-3-7-sonnet\nhttps://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents','命令文件回显为教学示意，非本次真实运行；修改在测试环境，生产上线另行授权。');
box(s,.8,2.59,7.22,3.36,C.gray);const r=[['查','rg "retry|timeout" src/'],['读','相关调用链与错误分支'],['改','补丁 + 异常边界处理'],['跑','pytest tests/test_payment_retry.py'],['再修','失败回显 → 调整 → 重新验证']];r.forEach((a,i)=>{text(s,a[0],1.07,2.95+i*.54,.72,.35,18,{bold:true,color:C.dark});text(s,a[1],2.01,2.95+i*.54,5.7,.36,i===3?14:17,{fontFace:i===0||i===3?'Menlo':'PingFang SC'});});
box(s,8.49,2.59,4.08,3.36,C.yp);text(s,'交付物',8.77,2.94,3.52,.48,25,{bold:true});text(s,'可审查的补丁\n可运行的测试\n未解决的问题',8.77,3.89,3.52,1.12,23,{bold:true,color:C.dark});text(s,'业务取舍与合并由人负责',8.77,5.43,3.52,.31,14,{color:C.muted});
takeaway(s,'Chatbot 给你一段建议；Agent 在反馈中持续推进任务。');
}
// 14
{
const s=slide(ch2+' / 2.2','为什么 coding model 会越来越强？','代码有可执行环境，也有能自动检查结果的裁判。','https://github.com/deepseek-ai/DeepSeek-R1\nhttps://www.tbench.ai/news/terminal-bench-4-0','机制图不是Claude私有训练配方；公开RL研究支持反思自检。评测数据不是训练数据，不把TB基准放进训练语料。运行中纠错不等于在线更新权重。');
flow(s,[['任务与环境','仓库、依赖\n需求与约束'],['执行与反馈','读 → 改 → 跑\n测试指出失败'],['学习有效策略','训练更新\n更善于下一批任务']]);
text(s,'任务内：执行 → 失败 → 再尝试     /     训练期：用反馈更新策略',.85,5.84,11.75,.38,18,{color:C.dark,bold:true});
takeaway(s,'编码不是只靠人评“像不像”，而是让机器反复检验“行不行”。');
}
// 15
{
const s=slide(ch2+' / 2.2','用 code 处理一切需要计算的部分','对账教学样本：让模型理解规则，让脚本准确执行匹配与运算。',SRC.exec,'表内数据是教学样本，非真实账务；订单980到账950差30、1200/1200差0、600/0差600。不直接修改账目。');
box(s,.8,2.64,3.56,3.16,C.gray);text(s,'orders.xlsx\nbank.csv',1.06,3.22,3.04,1.0,24,{fontFace:'Menlo',bold:true});text(s,'编号 · 金额 · 日期\n重复记录与业务规则',1.06,4.82,3.04,.66,17,{color:C.muted});line(s,4.49,4.13,5.02,4.13,C.coral,2,true);
table(s,['订单','应收','到账','差额'],[['O1042','980','950','30'],['O1088','1200','1200','0'],['O1101','600','0','600']],[2,1.45,1.45,1.53],5.18,2.64,.74);text(s,'输出：异常清单 + 原始行号 + 核对依据',5.32,5.74,7.05,.4,18,{bold:true,color:C.dark});
takeaway(s,'普通员工不必先变成程序员，但可以开始拥有可编程的工作能力。');
}
// 16
{
const s=slide(ch2+' / 2.3','从 MCP 到 Skills：接入系统，再保存做事方法','MCP 不是被 Skills 替代；两者解决的是不同问题。',SRC.mcp+'\n'+SRC.skills,'MCP2024.11.25；Skills2025.10.16，2025.12.18开放标准。Skills包含指令脚本资源，渐进加载。');
const rows=[['MCP','接得上','将数据库、文档、业务工具\n暴露为统一接口'],['Skills','做得对','将 SOP、脚本、模板、验收规则\n打包成可复用技能'],['Code + Harness','跑得动','把工具组合起来\n读取反馈、保存状态、继续推进']];rows.forEach((r,i)=>{let y=2.65+i*1.04;box(s,.8,y,11.75,.83,i===1?C.yp:C.gray);text(s,r[0],1.04,y+.16,2.35,.46,23,{bold:true,color:C.dark});text(s,r[1],3.63,y+.19,1.85,.4,20,{bold:true});text(s,r[2],5.87,y+.13,6.39,.57,17);});
takeaway(s,'Anthropic 不只发布模型，还在定义 Agent 如何连接、学习与执行。');
}
// 17
{
const s=slide(ch2+' / 2.3','它引领的潮流，已经超出 Claude 自己','MCP 从一家公司的开放协议，走向跨厂商 Agent 基础设施。',SRC.aaif,'2025.12.09官方生态快照，自报非独立市场份额；10000+ active public servers，97M+月SDK下载，不是使用人数。');
kpi(s,.8,2.65,3.65,'10,000+','活跃公共 MCP 服务','2025.12 官方生态快照',C.gray);kpi(s,4.92,2.65,3.66,'97M+','每月 SDK 下载','Python + TypeScript',C.yp);
box(s,9.08,2.65,3.5,2.52,C.pale);text(s,'跨平台采用',9.34,2.99,2.98,.46,23,{bold:true});text(s,'ChatGPT · Gemini\nCursor · Copilot\nVS Code',9.34,3.9,2.98,.99,20,{bold:true,color:C.dark});
text(s,'2025.12：捐赠给 Linux Foundation；Anthropic、Block、OpenAI 共建 AAIF',.85,5.65,11.7,.47,18,{bold:true});
takeaway(s,'连接标准与可移植技能，让“一个 Agent”变成一整套工作生态。');
}
// 18
{
const s=slide(ch2+' / 2.3','更好的 Agent，不是把所有信息都塞进提示词','官方 MCP 工程示例：按需发现、读取工具接口，再用代码组合执行。',SRC.exec,'150000到2000 Tokens，98.6667%舍入98.7%，仅工具相关上下文，不是全任务费用。');
kpi(s,.8,2.65,3.66,'150,000','全量工具定义','Token',C.gray);kpi(s,4.94,2.65,3.66,'2,000','按需加载','Token',C.yp);kpi(s,9.1,2.65,3.46,'−98.7%','工具上下文用量','同一工程示例',C.pale);
text(s,'目录发现 → 读取目标接口 → 写处理脚本 → 执行 → 只返回关键结果',.85,5.68,11.74,.47,21,{bold:true});
takeaway(s,'能力变强，还要让它在真实工作中可负担、可恢复、可复用。');
}
// 19
{
const s=slide(ch2+' / 2.4','Gemini 的反例：综合聪明，不自动等于工程能干','Gemini 3.1 Pro Preview · 同一第三方模型评测配置。','https://artificialanalysis.ai/models/gemini-3-1-pro-preview\nhttps://artificialanalysis.ai/evaluations/terminalbench-4-0','只说明本次型号在TB4弱，不据此断言Google整体衰落、组织训练原因、产品关闭或迁移导致失败。综合指数30、TB4 4%，两者不同单位不可相减。');
kpi(s,.8,2.65,3.66,'30','AA 综合智能指数','v4.3.2 · 指数分',C.gray);kpi(s,4.94,2.65,3.66,'4.0%','Terminal-Bench 4.0','平均 pass@1',C.yp);
box(s,9.08,2.65,3.49,2.52,C.pale);text(s,'工程智能\n要在环境里兑现',9.36,3.07,2.93,1.08,26,{bold:true});text(s,'版本、模型与 Agent\n都要放进任务里看',9.36,4.66,2.93,.58,16,{color:C.muted});
takeaway(s,'这一轮终端评测的掉队，提醒我们：会回答，与会连续行动是两种能力。');
}
// 20
{
const s=slide(ch2+' / 2.4','OpenAI 的正例：把竞争带到执行效率','Artificial Analysis Coding Agent Index v1.5 · Codex 当前配置对照。',SRC.aa+'\nhttps://github.com/openai/codex','63/62分，15.5/29.4min，1.04/7.47USD；不是控制所有变量的模型训练实验。不能从两个快照声称历史知耻或放弃o系列。');
table(s,['Codex 配置','编码 Agent 指数','平均运行时间','平均 API 费用'],[['GPT-6 Astra · max','62','29.4 分钟','$7.47'],['GPT-6.1 Sol · xhigh','63','15.5 分钟','$1.04']],[3.8,2.8,2.5,2.6],.8,2.66,.9);
box(s,.8,5.3,11.74,.65,C.yp);text(s,'不只争一分：更快交付、更低成本，会改变用户与企业的选择',1.06,5.46,11.22,.35,20,{bold:true,color:C.dark});
takeaway(s,'Claude 的领先并非永久；但整个行业已经被推向同一条 Agentic 赛道。');
}
// 21
{
const s=slide(ch3+' / 3.1','AGI：不是更会聊天，而是能够持续扩展能力','本次演讲的工作定义：跨领域完成任务，并在反馈中持续变强。','演讲工作定义；不是AGI已有统一公认判定标准','工具使用、持续学习、自我迭代为演讲框架；仅三条件不充分证明人类级通用性。需跨域迁移可靠性自主程度。');
flow(s,[['自主使用工具','从目标出发\n选择并执行动作'],['持续学习','从新经验中\n保留可迁移的知识'],['自我迭代','改进工具与方法\n参与改进后继模型']]);
text(s,'关键不是具备一个按钮，而是能跨任务迁移，并可靠地长期工作。',.85,5.84,11.72,.38,18,{bold:true,color:C.dark});
takeaway(s,'编码模型打开了第一扇门；跨域学习与可靠自主决定它能走多远。');
}
// 22
{
const s=slide(ch3+' / 3.2','编码，是把理解变成行动的通用接口','同一种能力，可以调用已有工具，也可以为当前任务制造新工具。',SRC.exec+'\n'+SRC.skills,'方向性机制，不把所有任务归约为编码；授权、接口、现场反馈仍必要。');
flow(s,[['自然语言目标','把账对清楚\n找出原因、验证假设'],['可执行代码','清洗 · 匹配 · 统计\n搜索 · 调用 · 验证'],['数字世界结果','表格与报告\n业务系统与实验']]);
text(s,'不是让人类记住每个按钮，而是让模型把任务翻译成可执行过程。',.85,5.84,11.73,.39,18,{bold:true,color:C.dark});
takeaway(s,'能编程的模型，不只是在生产软件，也是在使用整个软件世界。');
}
// 23
{
const s=slide(ch3+' / 3.2','从软件世界，到物理世界：代码搭起最后一段桥','机制示意：模型写程序，不等于它已经安全掌握所有设备。','机制示意；非Claude机器人实测或产品能力承诺','物理动作必须有被授权硬件、传感器反馈、保护系统；不能把API访问等同物理通用智能。');
flow(s,[['模型与代码','理解目标\n制定操作逻辑'],['接口与控制系统','仿真器 · 设备 API\n机器人与实验平台'],['物理反馈','传感器与测量\n真实环境中的约束']]);
box(s,.8,5.76,11.74,.48,C.yp);text(s,'设备授权 + 安全保护 + 仿真验证 + 现场反馈',1.07,5.8,11.2,.34,18,{bold:true,color:C.dark});
takeaway(s,'编码提供连接能力；物理世界把可靠性与安全要求抬高了一个数量级。');
}
// 24
{
const s=slide(ch3+' / 3.3','AGI 还有多远？先看它是否开始参与自己的研发','Anthropic R&D Automation Index · 2026 年 8 月快照。',SRC.rd,'厂商原型指标自报：26% AL4 AI主导、人监督；>90% AL3+协作包含AL4，不相加；不是发现占比或26%模型改进，未报告AL5完全自主。');
kpi(s,.8,2.64,3.66,'26%','AI 主导研发工作','AL4 · 人类监督',C.pale);kpi(s,4.94,2.64,3.66,'>90%','至少 AI 协作','AL3+ · 包含 AL4',C.yp);
box(s,9.1,2.64,3.47,2.52,C.gray);text(s,'尚未报告',9.37,2.97,2.93,.48,23,{bold:true});text(s,'AL5\n完全自主研发',9.37,3.92,2.93,1.03,26,{bold:true,color:C.dark});
text(s,'AI 已经从研究成果，变成了研发过程中的生产要素。',.85,5.69,11.73,.46,23,{bold:true});
takeaway(s,'这比“模型更会答题”更重要：智能正在参与制造下一代智能。');
}
// 25
{
const s=slide(ch3+' / 3.3','下一轮智能，开始吃到上一轮智能的红利','递归改进路径：AI 参与研发 → 改进后继系统 → 更强 AI 参与研发。',SRC.rd,'RSI为可能的代际反馈机制；不等于完全自主递归改进已实现或智能爆炸已证实。创意、验证、算力与安全为约束。');
flow(s,[['当前智能','写代码、跑实验\n分析失败、构建评测'],['研发能力放大','减少工程等待\n增加可检验的尝试'],['后继智能','训练、评测、部署\n进入下一轮研发']]);
line(s,10.79,5.48,10.79,5.9,C.coral,1.8);line(s,10.79,5.9,2.49,5.9,C.coral,1.8,true);
takeaway(s,'编码模型之所以通向 AGI，是因为它能改进“产生智能的工作”。');
}
// 26
{
const s=slide(ch3+' / 3.3','距离 AGI，剩下的是哪些可观察的门槛？','不猜一个日期：看系统是否跨过学习、可靠性、科研与现实世界的边界。','分析框架\nhttps://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\n'+SRC.rd,'文件记忆和skills改善运行系统不等于权重持续学习。AI主导研发仍人监督；物理世界长期可靠性未由代码基准证明。');
table(s,['能力门槛','今天已经看到','真正需要跨过'],[['持续学习','记忆文件、Skills、状态恢复','稳定吸收新经验并迁移'],['长期自主','多步执行、测试、自我纠错','少接管、可恢复、长期可靠'],['研究迭代','AI 协作与主导部分研发','新方法的创造、复现与独立验证'],['物理连接','代码与接口可以接设备','开放环境中的可靠行动']],[2.2,4.7,4.8],.8,2.57,.73);
takeaway(s,'通道已打开；从强大的数字工作者，到可靠的通用智能，仍有硬门槛。');
}
// 27
{
const s=slide('结尾 / 回到两万亿','两万亿押注的，不是一个更好的代码补全工具','从付费产品，到智能劳动，再到参与生产下一代智能。',[SRC.reuters,SRC.f,SRC.g,SRC.h,SRC.rd].join('\n'),'结尾为商业与技术方向性判断，非目标估值合理性的确定结论或投资建议。');
flow(s,[['第一层：已被证明','开发者与企业付费\n收入快速扩张'],['第二层：正在发生','编码能力外溢\n跨领域数字工作'],['第三层：未来溢价','AI 参与 AI 研发\n智能的代际反馈']]);
takeaway(s,'Anthropic 的故事：把“会编码的模型”，变成“会工作的智能”。');
}
// 28
{
const s=slide('结尾 / 对我们意味着什么','岗位不会只剩“会不会写代码”这一条分界线','新的分界线：谁能定义目标、沉淀规则、委托执行，并判断结果。','组织方向性分析；授权、隐私与生产操作责任保留在人类组织');
table(s,['角色','把经验变成什么','继续握住什么'],[['普通员工','规则、样本、模板、可复用 Skills','业务判断、例外与结果验收'],['研发 / 产品','可运行原型、补丁、测试与评测','架构、需求价值与上线责任'],['公司 / 管理者','可连接系统、任务闭环、共享能力','权限、激励、组织流程与风险']],[2.45,4.75,4.5],.8,2.68,.87);
text(s,'我们要升级的，不只是工具，而是“工作如何被完成”。',.85,5.97,11.76,.54,27,{bold:true,color:C.dark});
}
fs.writeFileSync(path.join(__dirname,'slides.json'),JSON.stringify(manifest,null,2));
pptx.writeFile({fileName:path.join(__dirname,'Anthropic_2万亿IPO的背后_编码模型与AGI.pptx')});
