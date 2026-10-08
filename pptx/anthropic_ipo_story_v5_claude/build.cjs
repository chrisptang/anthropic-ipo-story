const pptxgen=require('pptxgenjs');
const fs=require('fs');
const path=require('path');
const pptx=new pptxgen();
pptx.layout='LAYOUT_WIDE';pptx.author='Internal Learning';pptx.title='Anthropic 2万亿IPO的背后：编码模型与AGI';pptx.subject='IPO与收入增长、Agentic范式、编码模型与AGI';pptx.lang='zh-CN';pptx.theme={headFontFace:'PingFang SC',bodyFontFace:'PingFang SC',lang:'zh-CN'};
const W=13.333333,H=7.5,ST=pptx.ShapeType;
const C={ink:'282824',muted:'706D67',coral:'D97757',dark:'A74C32',pale:'FAEEE8',yellow:'F4D77B',yp:'FCF5DD',gray:'F3F3F0',line:'DFDFD8',white:'FFFFFF',sage:'738A78'};
const manifest=[];const slideMetadata=new WeakMap();let page=0;
// 解释性文字只进入 notes；在所有页面内容收集完后统一写入。
function registerNotes(s,row){manifest.push(row);slideMetadata.set(s,row);}
function speakerOnly(s,t){if(!t)return;const row=slideMetadata.get(s);if(!row)throw new Error('Slide notes not registered');row.notes+=(row.notes?'\n\n':'')+'演讲补充：'+t;}
// fit:'shrink' writes <a:normAutofit/>: 若 Windows PowerPoint 缺少 PingFang SC 而发生字体替换，文本自动缩放而不是溢出版面。
function text(s,t,x,y,w,h,size=18,opt={}){if(x<0||y<0||x+w>W+.02||y+h>H+.02)throw new Error('Bounds: '+t);s.addText(String(t),{x,y,w,h,fontFace:'PingFang SC',fontSize:size,color:C.ink,margin:0,valign:'mid',fit:'shrink',...opt});}
function rect(s,x,y,w,h,fill=C.gray,round=false){s.addShape(round?ST.roundRect:ST.rect,{x,y,w,h,fill:{color:fill},line:{color:fill,transparency:100},...(round?{radius:.1}:{})});}
function box(s,x,y,w,h,fill=C.gray){rect(s,x,y,w,h,fill,true);}
function circle(s,x,y,d,c=C.coral){s.addShape(ST.ellipse,{x,y,w:d,h:d,fill:{color:c},line:{color:c,transparency:100}});}
function line(s,x1,y1,x2,y2,col=C.line,width=1,arrow=false){s.addShape(ST.line,{x:Math.min(x1,x2),y:Math.min(y1,y2),w:Math.abs(x2-x1),h:Math.abs(y2-y1),flipH:x2<x1,flipV:y2<y1,line:{color:col,width,...(arrow?{endArrowType:'triangle'}:{})}});}
function label(s,t,x,y,w=3,col=C.dark){text(s,t,x,y,w,.29,11,{bold:true,color:col});}
function takeaway(s,t){text(s,t,.82,6.28,11.75,.48,20,{bold:true});}
// 口径、来源与边界不占用主视觉。
function footnote(s,t){speakerOnly(s,t);}
function slide(section,title,sub,src,notes=''){const s=pptx.addSlide();s.background={color:C.white};page++;label(s,section,.66,.35,10);text(s,title,.66,.91,12,.7,32,{bold:true});text(s,String(page).padStart(2,'0'),12.06,7.01,.57,.25,10,{align:'right',color:C.muted});registerNotes(s,{page,title,section,source:src,notes});speakerOnly(s,sub);return s;}
function kpi(s,x,y,w,n,t,b,fill=C.gray){box(s,x,y,w,2.52,fill);text(s,n,x+.23,y+.25,w-.46,.88,46,{bold:true,color:C.dark});text(s,t,x+.23,y+1.3,w-.46,.41,20,{bold:true});text(s,b,x+.23,y+1.93,w-.46,.35,13,{color:C.muted});}
function table(s,headers,rows,widths,x=.78,y=2.7,rowH=.58){let off=x;headers.forEach((h,i)=>{text(s,h,off+.15,y,widths[i]-.25,.42,13,{bold:true,color:C.dark});off+=widths[i];});rows.forEach((r,j)=>{const yy=y+.62+j*rowH;box(s,x,yy,widths.reduce((a,b)=>a+b,0),rowH-.08,j%2?C.white:C.gray);let xx=x;r.forEach((v,i)=>{text(s,v,xx+.15,yy,widths[i]-.25,rowH-.08,i===0?17:16,{bold:i===0});xx+=widths[i];});});}
function nativeBar(s,labels,series,x,y,w,h,max=100){s.addChart(pptx.ChartType.bar,series.map(r=>({name:r.name,labels,values:r.values})),{x,y,w,h,barDir:'bar',chartColors:series.map(r=>r.color||C.coral),showTitle:false,showLegend:false,showValue:true,dataLabelPosition:'outEnd',valAxisMinVal:0,valAxisMaxVal:max,showBorder:false,catAxisLabelFontSize:11,valAxisLabelFontSize:10,catGridLine:{style:'none'},valGridLine:{color:C.line,width:1}});rect(s,x,y,w,h,C.white);}
function dash(s,x1,y1,x2,y2,col=C.coral,width=2){s.addShape(ST.line,{x:Math.min(x1,x2),y:Math.min(y1,y2),w:Math.abs(x2-x1),h:Math.abs(y2-y1),flipH:x2<x1,flipV:y2<y1,line:{color:col,width,dashType:'dash'}});}
function chip(s,t,x,y,w,h=.3,fill=C.white,size=11){rect(s,x,y,w,h,fill,true);text(s,t,x+.06,y,w-.12,h,size,{align:'center',color:C.ink});}
// 章节过渡页：长稿换气点。不承载数据，只交代这一章要回答什么。
function divider(part,title,lead,items,notes){const s=pptx.addSlide();s.background={color:C.white};page++;
rect(s,0,0,.34,H,C.coral);text(s,part,.86,1.42,5.6,.42,15,{bold:true,color:C.dark,characterSpacing:2});
text(s,title,.84,1.95,9.4,1.0,46,{bold:true});
line(s,.86,3.96,12.5,3.96,C.line,1.2);
items.forEach((r,i)=>{const x=.84+i*3.92,w=3.52;box(s,x,4.3,w,1.42,i===items.length-1?C.yp:C.gray);text(s,r[0],x+.24,4.52,w-.48,.34,15,{bold:true,color:C.dark});text(s,r[1],x+.24,4.95,w-.48,.56,19,{bold:true});});
text(s,String(page).padStart(2,'0'),12.06,7.01,.57,.25,10,{align:'right',color:C.muted});
registerNotes(s,{page,title,section:part,source:'章节过渡页',notes:notes||''});speakerOnly(s,lead);return s;}
function hbars(s,items,x,y,w,rowH,max=100,unit='%'){items.forEach((r,i)=>{const yy=y+i*rowH;const nameW=2.25,barW=w-nameW-1.0; text(s,r.name,x,yy,nameW-.2,.37,15,{bold:true});rect(s,x+nameW,yy+.04,barW,.27,C.gray);rect(s,x+nameW,yy+.04,barW*r.value/max,.27,r.color||C.coral);text(s,(unit===' 美元'?r.value.toFixed(2):r.value.toFixed(1))+unit,x+nameW+barW+.15,yy-.01,.9,.38,unit==='%'||unit==='B'?16:11,{bold:true,color:C.dark});});}

const SRC={ipo:'https://www.anthropic.com/news/confidential-draft-s1-sec',reuters:'https://live.euronext.com/en/financial-news/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs',e:'https://www.anthropic.com/news/anthropic-raises-series-e-at-usd61-5b-post-money-valuation',f:'https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation',g:'https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation',h:'https://www.anthropic.com/news/series-h',mcp:'https://www.anthropic.com/news/model-context-protocol',skills:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',aaif:'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation',rd:'https://www.anthropic.com/institute/measuring-pace-of-ai-development',aa:'https://artificialanalysis.ai/agents/coding-agents',exec:'https://www.anthropic.com/engineering/code-execution-with-mcp'};
const ch1='01 / 史上最大 IPO',ch2='02 / 不仅仅是程序员的梦中情模',ch3='03 / 编码模型与 AGI';
function flow(s,items,y=3.0){items.forEach((r,i)=>{const w=(11.8-(items.length-1)*.36)/items.length,x=.78+i*(w+.36);box(s,x,y,w,2.35,i===items.length-1?C.yp:C.gray);label(s,String(i+1).padStart(2,'0'),x+.23,y+.22,w-.46);text(s,r[0],x+.23,y+.8,w-.46,.55,23,{bold:true});text(s,r[1],x+.23,y+1.53,w-.46,.57,15,{color:C.muted});if(i<items.length-1)line(s,x+w+.03,y+1.17,x+w+.31,y+1.17,C.coral,1.8,true);});}
function chart(s,labels,values,x,y,w,h,max,unit,fmt){s.addChart(pptx.ChartType.line,[{name:unit,labels,values}],{x,y,w,h,chartColors:[C.coral],showLegend:false,showValue:true,valAxisMinVal:0,valAxisMaxVal:max,showMarker:true,showBorder:false});rect(s,x,y,w,h,C.white);const px=x+.62,py=y+.48,pw=w-1.1,ph=h-1.15;for(let j=0;j<=4;j++){let v=max*j/4,yy=py+ph-v/max*ph;line(s,px,yy,px+pw,yy,C.line,.65);text(s,String(v),x,yy-.14,.48,.28,10,{align:'right',color:C.muted});}let prev;values.forEach((v,i)=>{let xx=px+i*pw/(values.length-1),yy=py+ph-v/max*ph;if(prev)line(s,prev.x,prev.y,xx,yy,C.coral,2.5);circle(s,xx-.05,yy-.05,.1);text(s,fmt(v),i===0?xx-.02:xx-.48,yy-.43,i===0?.8:.96,.32,14,{bold:true,color:C.dark,align:i===0?'left':'center'});text(s,labels[i],xx-.63,py+ph+.19,1.26,.49,12,{align:'center',color:C.muted});prev={x:xx,y:yy};});}
// 01
{
const s=slide('内部分享 / 2026.10','',null,SRC.ipo+'\n'+SRC.reuters,'IPO已提交；超过两万亿美元为Reuters预期上市估值目标，非完成定价或当前上市市值。');
text(s,'Anthropic\n2万亿 IPO 的背后',.78,1.32,8.5,1.72,42,{bold:true});text(s,'编码模型与 AGI',.8,3.33,8,.62,31,{bold:true,color:C.dark});s.addImage({path:path.join(__dirname,'assets/intelligence.svg.png'),x:9.17,y:1.5,w:3.3,h:3.3});
[['01','为什么值两万亿'],['02','从编码到数字工作'],['03','从数字工作到 AGI']].forEach((r,i)=>{let x=.8+i*4.15;box(s,x,4.9,3.68,1.15,i===2?C.yp:C.gray);text(s,r[0],x+.23,5.08,.74,.54,30,{bold:true,color:C.dark});text(s,r[1],x+1.03,5.19,2.43,.35,16,{bold:true});});
}
divider('PART 01','史上最大 IPO','先把价格摆在历史里：这个数字到底有多大，又是怎么在五年里长出来的。',[['1.1','放进历史坐标'],['1.2','最快的两万亿'],['1.3','何以两万亿']],'引出第一章，不新增数据。');
// 02
{
const s=slide(ch1,'一家成立五年的公司，正在冲击两万亿 IPO','S-1 草案已提交，发行股数与价格尚未确定。',SRC.ipo+'\n'+SRC.reuters,'官方6月公告未确定发行股数、价格。Reuters9月预计美国中期选举后上市，不设定已确定敲钟日。');
text(s,'>$2T',.83,2.65,5.0,1.16,72,{bold:true,color:C.coral});text(s,'预期上市估值',.9,4.01,4.8,.45,24,{bold:true});
[['2021','Anthropic 成立'],['2026.06','秘密提交 S-1 草案'],['2026.09','报道披露两万亿估值目标']].forEach((r,i)=>{const y=2.71+i*1.0;box(s,6.0,y,6.54,.79,i===2?C.yp:C.gray);text(s,r[0],6.24,y+.16,1.55,.4,19,{bold:true,color:C.dark});text(s,r[1],8.04,y+.18,4.23,.37,18);});
takeaway(s,'真正值得追问的是：资本为什么给它如此高的价格？');
}
// 公司简介：三栏各回答一个问题（谁创立 / 治理为什么不一样 / 算力靠谁），数据见 source_audit。
{
const s=slide(ch1,'Anthropic 是谁：七位创始人，一套不寻常的治理','先认识这家公司，再看它的价格。',
'https://en.wikipedia.org/wiki/Anthropic\nhttps://en.wikipedia.org/wiki/Dario_Amodei\nhttps://www.anthropic.com/company\nhttps://www.anthropic.com/news/the-long-term-benefit-trust\nhttps://www.investing.com/news/stock-market-news/exclusiveanthropic-leaders-to-control-ai-lab-via-founder-llc-to-promote-public-good-over-market-forces-4921448\nhttps://clsbluesky.law.columbia.edu/2026/10/02/public-purpose-and-founder-control-at-anthropic/\nhttps://www.anthropic.com/news/anthropic-amazon-trainium\nhttps://www.anthropic.com/news/expanding-our-use-of-google-cloud-tpus-and-services\nhttps://www.anthropic.com/news/microsoft-nvidia-anthropic-announce-strategic-partnerships\nhttps://lexfridman.com/dario-amodei-transcript/\nhttps://arxiv.org/abs/1512.02595\nhttps://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions',
'成立：2021年1月注册（Wikipedia）。创始人数：Reuters依据S-1草案称七位联合创始人，点名Dario（CEO）、Daniela（总裁兼董事长）、Tom Brown（首席算力官）、Chris Olah；Wikipedia信息框列八人（另含Jared Kaplan、Jack Clark、Ben Mann、Sam McCandlish），与“七位”未对齐，页面只写“七位”并只点名Reuters所列人员。Tom Brown为GPT-3论文第一作者。Dario曾任OpenAI研究副总裁（2016加入，2021离开）。治理：Anthropic为特拉华州公益公司（PBC，官方公司页与LTBT页）。LTBT经Class T股份选任董事，2023承诺4年内选出董事会多数。IPO后结构来自Reuters 2026-09-28/29所见S-1草案：创始人经Founder LLC指挥唯一一股Class F，关键事项50.1%表决权；7席董事中LTBT选4席，Class A与Class F选3席；公众为Class A一股一票，五类股份之一，不能单独选董事；创始人剩两人及以下时特殊权利开始失效。这些是草案报道，不是最终注册文件。算力：Amazon累计$8B（2024-11-22官方），AWS为主要训练与云伙伴；Google 2025-10-23官方最多100万颗TPU、价值数百亿美元，Google股权金额只见于Wikipedia（2023.10 $500M+后续$1.5B，2025.03再$1B），未经官方页核实，页面不写金额；Microsoft最多$5B、NVIDIA最多$10B，Anthropic承诺采购$30B Azure（2025-11-18官方）。“股东=供应商”是结构描述，不判断是否构成循环交易。');
const cols=[
 {h:'谁创立的',big:'2021.01',sub:'七位前 OpenAI 成员创立',fill:C.gray,rows:[['Dario Amodei','CEO · 前 OpenAI 研究副总裁'],['Daniela Amodei','总裁兼董事长'],['Tom Brown · Chris Olah 等','GPT-3 论文一作 · 可解释性研究']],foot:'彩蛋：Dario 2014–15 在百度做语音识别'},
 {h:'为什么不一样',big:'PBC + LTBT',sub:'公益公司 + 长期利益信托',fill:C.yp,rows:[['公益公司','可在股东回报与使命之间权衡'],['长期利益信托','选出 7 席董事中的 4 席'],['创始人 Class F 一股','关键事项 50.1% 表决权']],foot:'公众股东：一股一票，不能单独选董事'},
 {h:'靠谁供给算力',big:'股东 = 供应商',sub:'主要投资方，也卖给它算力',fill:C.gray,rows:[['Amazon','累计投资 $8B · 主要训练与云伙伴'],['Google','股东 · 最多 100 万颗 TPU'],['Microsoft + NVIDIA','最多投资 $15B · 采购 $30B Azure']],foot:'投资与算力采购，往往一起签'}];
cols.forEach((c,i)=>{const x=.8+i*4.14,w=3.66;box(s,x,2.45,w,3.1,c.fill);
 label(s,c.h,x+.24,2.6,w-.48);
 text(s,c.big,x+.24,2.9,w-.48,.48,28,{bold:true,color:C.dark});
 text(s,c.sub,x+.24,3.4,w-.48,.3,14,{bold:true});
 line(s,x+.24,3.8,x+w-.24,3.8,C.line,1);
 c.rows.forEach((r,j)=>{const y=3.9+j*.55;text(s,r[0],x+.24,y,w-.48,.27,15,{bold:true});text(s,r[1],x+.24,y+.27,w-.48,.23,12,{color:C.muted});});
 box(s,x,5.67,w,.46,i===0?C.pale:C.white);if(i)s.addShape(ST.roundRect,{x,y:5.67,w,h:.46,fill:{color:C.white,transparency:100},line:{color:C.line,width:1},radius:.1});
 text(s,c.foot,x+.16,5.67,w-.32,.46,13,{bold:i===0,color:i===0?C.dark:C.ink,align:'center'});});
speakerOnly(s,'彩蛋背景：Dario 于2014年11月至2015年10月在百度（Wikipedia），在Andrew Ng的硅谷AI实验室做语音识别；他在Lex Fridman访谈中说，正是在那里第一次感到“数据、算力、训练越多，模型越好”，即scaling的雏形。Deep Speech 2论文（arXiv 1512.02595）作者按字母排序，他列第一不代表一作贡献。');
speakerOnly(s,'互动提问（可选）：“Claude 针对中国用户的封号，和 Dario 在百度的经历有关吗？”——可查到的事实：1）中国从来不是 Claude 的支持地区，个人账号受地区条款约束；2）2025-09-04 官方把限制扩展到“中国等不支持地区的公司直接或间接持股超过50%的实体”，理由写的是法律、监管与安全风险，数据可能被强制提供给情报机构、被用于蒸馏；3）Dario 在 2025–2026 年多篇文章与采访中把中国的 AI 发展定位为安全威胁。关于百度：一篇对2026-06 Bloomberg《The Circuit》长访谈的二手转述称，他在百度一年，印象深的不是技术而是一句“在中国不在乎隐私”的随口话；而一个中文论坛帖标题称他在该访谈中表示“对中国的看法与百度无关”。两者都是二手材料，原视频未核实。结论：没有证据支持“因为百度经历才封号”的因果关系，官方给出的是国家安全与合规理由。这里只作为提问引子，不下结论。');
takeaway(s,'一家把使命写进章程的公司，正在冲击史上最大 IPO。');
}
// 新第 04 页：两万亿与中国互联网 Top 10 的尺度，沿用仓库参考数据。
{
let data;try{data=JSON.parse(fs.readFileSync(path.join(__dirname,'china_internet_market_cap_reference.json'),'utf8'));}catch(e){throw new Error('China internet market cap reference could not be loaded',{cause:e});}
const total=data.companies.reduce((sum,r)=>sum+r.value,0),target=data.anthropic_comparison_value;
const ratio=target/total,gap=target-total;
if(total!==13220||target!==20000)throw new Error('China Top 10 reference changed; review slide layout and narrative');
const s=slide(ch1+' / 1.1','2 万亿美元，比中国互联网 Top 10 总和还高',null,
data.source+'\n'+SRC.reuters,
data.notes+'\n原表十家公司逐项求和：'+data.companies.map(r=>r.value).join(' + ')+' = '+total+' 亿美元。20000 / 13220 = '+ratio.toFixed(6)+'，展示为 1.51 倍；20000 - 13220 = '+gap+' 亿美元，高出 '+((ratio-1)*100).toFixed(1)+'%。成立2021，沿用全稿2026年叙事，展示五年多；不声称已经完成两万亿IPO定价。');
// 面积图：整个长方形=2万亿，十家公司按市值比例拼成66.1%，右侧余量=6780亿。
// 保留原生图表与工作簿作为数据载体，可见层为原生可编辑形状。
nativeBar(s,['Anthropic','中国互联网 Top 10'],[{name:'亿美元',values:[target,total]}],4.06,2.77,8.46,2.91,target);
rect(s,4.01,2.7,8.57,3.05,C.white);
text(s,'1.51',.8,2.66,2.05,1.05,76,{bold:true,color:C.coral});
text(s,'倍',2.93,3.19,.48,.48,29,{bold:true,color:C.dark});
text(s,'一家，超过十家',.86,4.05,3.02,.43,24,{bold:true});
text(s,'2021 → 2026',.86,5.0,3.02,.29,14,{color:C.muted});
text(s,'成立仅五年多',.86,5.43,3.02,.38,21,{bold:true,color:C.dark});
const mx=4.06,my=2.77,mw=8.46,mh=2.91,cw=mw*total/target,extraX=mx+cw;
text(s,'Anthropic',mx,2.13,4.0,.43,24,{bold:true,color:C.dark});
text(s,'2 万亿美元',9.28,2.13,3.24,.43,24,{bold:true,color:C.dark,align:'right'});
// 腾讯占左侧完整一列，余下九家分三行；每个矩形严格按金额比例分配面积。
const tw=cw*data.companies[0].value/total,rw=cw-tw,rx=mx+tw;
const tiles=[{r:data.companies[0],x:mx,y:my,w:tw,h:mh,c:'BCCBBF'}];
const bands=[{ids:[1,2],colors:['CFD9CC','DDE4D9']},{ids:[3,4,5],colors:['D4DCCF','C1CEC4','E6EADF']},{ids:[6,7,8,9],colors:['E3E7DF','CED7CF','E9ECE5','D9E0D7']}];
let yy=my;bands.forEach(b=>{const sum=b.ids.reduce((a,i)=>a+data.companies[i].value,0),hh=mh*sum/(total-data.companies[0].value);let xx=rx;
 b.ids.forEach((id,j)=>{const r=data.companies[id],ww=rw*r.value/sum;tiles.push({r,x:xx,y:yy,w:ww,h:hh,c:b.colors[j]});xx+=ww;});yy+=hh;});
tiles.forEach(t=>{rect(s,t.x,t.y,t.w,t.h,t.c);s.addShape(ST.rect,{x:t.x,y:t.y,w:t.w,h:t.h,fill:{color:t.c,transparency:100},line:{color:C.white,width:2.5}});
 const small=t.h<.6,large=t.r.name==='腾讯',fs=large?29:small?13:t.w<1.35?16:20;
 text(s,t.r.name,t.x+.05,t.y+(t.h-(small?.27:.44))/2,t.w-.1,small?.27:.44,fs,{bold:true,align:'center'});
});
rect(s,extraX,my,mw-cw,mh,C.coral);
text(s,'还多出',extraX+.22,my+.47,mw-cw-.44,.34,18,{color:C.white,bold:true});
text(s,'6,780',extraX+.22,my+1.02,mw-cw-.44,.72,45,{color:C.white,bold:true});
text(s,'亿美元',extraX+.22,my+1.85,mw-cw-.44,.36,21,{color:C.white,bold:true});
text(s,'中国互联网 Top 10',mx,5.9,2.7,.33,17,{bold:true});
text(s,'1.322 万亿美元',mx+2.8,5.9,cw-2.8,.33,15,{bold:true,align:'right',color:C.muted});
takeaway(s,'把腾讯、阿里、拼多多等十家装进去，离两万亿还差一大块。');
speakerOnly(s,'矩形面积严格按参考市值成比例分配；整框20000亿，十家公司13220亿，右侧余量6780亿。腾讯独立一列，其余分三行；白色分隔线只作公司边界。详细单家公司金额保留于JSON，不再在页面上逐项列数。');
}
// 03 / 历史坐标只服务于Anthropic主线，不另设募资纪录支线
{
const sx='https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/default.aspx';
const s=slide(ch1+' / 1.1','从阿里巴巴到 Anthropic：超级 IPO 的尺度','取几笔有代表性的大型 IPO 作参照，不是完整名单。',SRC.reuters+'\nhttps://www.alibabagroup.com/en-US/document-1490842489823690752\nhttps://www.cnbc.com/2014/09/18/alibaba-prices-shares-at-68-a-share-dj.html\nhttps://www.cnbc.com/2020/01/12/saudi-aramco-raises-ipo-to-record-29point4-billion-through-greenshoe-option.html\nhttps://www.cnbc.com/2019/12/05/saudi-aramco-prices-shares-at-the-top-of-the-range-for-record-ipo-report-says.html\n'+sx,'2026-10-05叙事纠正：合并原第3/4页，删除SpaceX纪录支线。历史公司只用于建立Anthropic估值尺度。公司估值按发行价：阿里167.62B（不是首日231.4B）；Aramco1.7T；SpaceX1.77T来自Reuters。发行总额含超额配售：阿里25.03B含公司及售股股东；Aramco29.4B；SpaceX官方85.7B，其股数乘135美元与公告金额不一致，按公告明确gross proceeds，冲突保留audit。Anthropic募资未定、>2T为报道目标。不是完整所有IPO名单，不宣称Anthropic募资额破纪录。');
const headers=['公司 / IPO 年份','IPO 公司估值','募资额（含超额配售）'];const widths=[3.5,4.1,4.1];let x=.8;headers.forEach((t,i)=>{text(s,t,x+.2,2.56,widths[i]-.4,.43,15,{bold:true,color:C.dark});x+=widths[i];});
const rows=[['阿里巴巴 · 2014','约 1,676 亿美元','250.3 亿美元'],['沙特阿美 · 2019','约 1.70 万亿美元','294 亿美元'],['SpaceX · 2026','约 1.77 万亿美元','857 亿美元'],['Anthropic · IPO','目标超过 2 万亿美元','发行规模待定']];
rows.forEach((r,j)=>{const y=3.21+j*.64;box(s,.8,y,11.7,.53,j===3?C.yp:(j%2?C.white:C.gray));let xx=.8;r.forEach((v,i)=>{text(s,v,xx+.2,y,widths[i]-.4,.53,i===0?19:18,{bold:i===0||j===3,color:j===3?C.dark:C.ink});xx+=widths[i];});});
speakerOnly(s,'已上市公司按 IPO 发行价计算估值；Anthropic 为报道中的上市估值目标。');
takeaway(s,'为什么一家成立仅五年的 AI 公司，能以两万亿目标进入这个行列？');
}
// 同为两万亿量级，被定价的东西完全不同
{
const s=slide(ch1+' / 1.1','同样的两万亿，被定价的不是同一种东西','用一家已经完成定价的万亿级公司当尺子，看这笔钱买的是什么。',
'https://www.cnbc.com/2019/12/05/saudi-aramco-prices-shares-at-the-top-of-the-range-for-record-ipo-report-says.html\n'+SRC.reuters+'\nhttps://www.anthropic.com/news/prompt-caching',
'性质对照为分析框架，不是财务可比口径：Aramco为已完成定价的上市估值1.7T，Anthropic为报道中的IPO目标>2T，两者不在同一状态。左栏描述石油资产的通行特征，未引用Aramco财报单位成本。右栏“边际成本随缓存与推理优化下降”指官方prompt caching等机制方向，不给出具体单位成本数字，也不声称已盈利。不推断两类资产谁更值得投资。');
const cols=[
 {t:'沙特阿美 · 2019',v:'约 $1.7T',k:'已完成定价的上市估值',fill:C.gray,rows:[['定价基础','已探明储量与开采权'],['增长来自','实体能源的消费量'],['每多卖一单位','要多勘探、多开采、多运输'],['本质上卖的','地下的存量']]},
 {t:'Anthropic · 2026',v:'>$2T',k:'报道中的 IPO 估值目标',fill:C.yp,rows:[['定价基础','模型能完成多少工作'],['增长来自','可被计算机接走的工作范围'],['每多卖一单位','复制一份执行能力'],['本质上卖的','可复制的执行能力']]}];
cols.forEach((c,i)=>{const x=.8+i*6.34,w=5.4;box(s,x,2.5,w,3.36,c.fill);
 text(s,c.t,x+.26,2.68,w-.52,.34,20,{bold:true});text(s,c.v,x+.26,3.08,w-.52,.62,36,{bold:true,color:C.dark});text(s,c.k,x+.26,3.74,w-.52,.26,12,{color:C.muted});
 line(s,x+.26,4.08,x+w-.26,4.08,C.line,1);
 c.rows.forEach((r,j)=>{const y=4.18+j*.4;text(s,r[0],x+.26,y,1.5,.34,12,{color:C.muted});text(s,r[1],x+1.84,y,w-2.1,.34,15,{bold:i===1});});});
box(s,6.33,3.14,.68,.52,C.pale);text(s,'VS',6.33,3.14,.68,.52,18,{bold:true,color:C.dark,align:'center'});
footnote(s,'性质对照，不是同口径财务比较；右侧尚未定价，两者不在同一状态。');
takeaway(s,'两万亿的标的，从“地下的存量”换成了“可复制的执行能力”。');
}
// 别人走到两万亿用了多少年
{
const s=slide(ch1+' / 1.2','走到两万亿，别人用了几十年','横条的长度，是从公司成立到跨过这个量级所用的年数。',
SRC.reuters+'\nhttps://en.wikipedia.org/wiki/Microsoft\nhttps://en.wikipedia.org/wiki/Apple_Inc.\nhttps://en.wikipedia.org/wiki/Nvidia\nhttps://en.wikipedia.org/wiki/Alphabet_Inc.',
'口径不同必须明说：微软1975成立、2021年市值首破2T；苹果1976、2020；英伟达1993、2024；Alphabet(Google)1998、2024。以上为二级市场市值首次突破，公开资料取整年数。Anthropic 2021成立、2026报道IPO目标>2T，是发行估值目标而非已达成的市值，也未定价，因此单独标注“目标”。不同年份的两万亿购买力不同，未做通胀调整。不声称Anthropic已经是两万亿公司，也不预测它一定达成。');
const yrs=[['Microsoft','1975 → 2021',46],['Apple','1976 → 2020',44],['NVIDIA','1993 → 2024',31],['Alphabet','1998 → 2024',26],['Anthropic','2021 → 2026 目标',5]];
const bx=3.46,bw=5.7,mx=46;
yrs.forEach((r,i)=>{const y=2.68+i*.66,last=i===4;
 text(s,r[0],.84,y,2.3,.34,last?20:18,{bold:true,color:last?C.dark:C.ink});text(s,r[1],.84,y+.3,2.3,.2,10,{color:C.muted});
 rect(s,bx,y+.04,bw,.3,C.gray);rect(s,bx,y+.04,bw*r[2]/mx,.3,last?C.dark:C.coral);
 text(s,r[2]+' 年',bx+bw*r[2]/mx+.14,y+.01,1.0,.36,last?22:18,{bold:true,color:C.dark});});
box(s,10.6,2.68,1.95,3.1,C.yp);text(s,'5 / 46',10.78,3.26,1.59,.5,25,{bold:true,color:C.dark,align:'center'});text(s,'同样的量级\n用了约九分之一\n的时间',10.78,3.9,1.59,.86,15,{align:'center'});speakerOnly(s,'不同年份的两万亿购买力不同。');
footnote(s,'已上市公司为二级市场市值首次突破 $2T；Anthropic 为 IPO 发行估值目标，尚未定价。');
takeaway(s,'不是增长快了一点，而是换了一条完全不同的曲线。');
}
// 05
{
const s=slide(ch1+' / 1.2','从成立到两万亿目标：仅仅五年','纵轴为投后估值，单位十亿美元；横轴为融资事件，不按时间等比例。',[SRC.e,SRC.f,SRC.g,SRC.h,SRC.reuters].join('\n'),'早期融资CSV日期轮次金额有错，保留2021成立而不画无原始证据的早期估值；折线各点等距展示事件，不代表等时距。IPO目标不用作为已成交融资点。');
// IPO 目标画进同一坐标系：实线为已成交轮次，虚线段与空心点为尚未定价的目标。
{const labels=['2025.03\nE 轮','2025.09\nF 轮','2026.02\nG 轮','2026.05\nH 轮','IPO 目标\n尚未定价'],values=[61.5,183,380,965,2000],MAX=2200;
s.addChart(pptx.ChartType.line,[{name:'投后估值 / 目标 USD B',labels,values}],{x:.8,y:2.52,w:11.7,h:3.6,chartColors:[C.coral],showLegend:false,valAxisMinVal:0,valAxisMaxVal:MAX,showMarker:true,showBorder:false});rect(s,.8,2.52,11.7,3.6,C.white);
label(s,'投后估值 · 十亿美元',.8,2.13,7);
const px=1.5,py=2.56,pw=9.1,ph=2.76,yv=v=>py+ph-v/MAX*ph,xi=i=>px+i*pw/4;
[0,500,1000,1500,2000].forEach(v=>{const y=yv(v);line(s,px,y,px+pw,y,C.line,.7);text(s,String(v),.8,y-.13,.6,.26,10,{align:'right',color:C.muted});});
line(s,xi(0),yv(61.5),xi(1),yv(183),C.coral,2.6);line(s,xi(1),yv(183),xi(2),yv(380),C.coral,2.6);line(s,xi(2),yv(380),xi(3),yv(965),C.coral,2.6);
dash(s,xi(3),yv(965),xi(4),yv(2000),C.dark,2.6);
values.forEach((v,i)=>{const x=xi(i),y=yv(v);
 if(i<4){circle(s,x-.055,y-.055,.11,C.coral);text(s,String(v),x-.6,y-.44,1.2,.3,15,{bold:true,color:C.dark,align:'center'});}
 else{s.addShape(ST.ellipse,{x:x-.085,y:y-.085,w:.17,h:.17,fill:{color:C.white},line:{color:C.dark,width:2.4}});text(s,'>$2,000B',x-1.1,y-.52,2.2,.36,19,{bold:true,color:C.dark,align:'center'});}
 text(s,labels[i],x-.84,py+ph+.14,1.68,.44,12,{align:'center',color:i===4?C.dark:C.muted,bold:i===4});});
box(s,1.98,3.12,3.86,.9,C.gray);text(s,'H 轮 $965B 之后，',2.18,3.24,3.46,.28,15,{bold:true});text(s,'目标还要再翻一倍以上',2.18,3.54,3.46,.32,18,{bold:true,color:C.dark});
footnote(s,'实线与实心点为已完成定价的融资轮次；虚线与空心点为报道中的 IPO 目标，尚未定价。2021–2024 各轮公开口径不一致，未入图。');}
takeaway(s,'不是缓慢积累的巨头，而是收入与能力同时加速的公司。');
}
// 06
{
const s=slide(ch1+' / 1.3','Claude Code 发布之后，公司年化收入陡增','纵轴为公司整体年化收入，单位十亿美元。',[SRC.f,SRC.g,SRC.h,'https://www.anthropic.com/news/claude-3-7-sonnet','https://www.anthropic.com/news/claude-4'].join('\n'),'run-rate revenue不是全年确认营收、不是保证续约ARR，采用官方名称。公司整体收入并非全部来自ClaudeCode；时间共现不证明Code单独导致全部增长。年初约1B、8月>5B、2月14B、5月>47B，下限点。');
// 把 Claude Code 的两个发布点标在曲线上：标题是因果断言，图上就要能看到锚点。
{const labels=['2025 年初','2025.08','2026.02','2026.05'],values=[1,5,14,47],MAX=50;
s.addChart(pptx.ChartType.line,[{name:'Run-rate USD B',labels,values}],{x:.75,y:2.57,w:8.2,h:3.4,chartColors:[C.coral],showLegend:false,valAxisMinVal:0,valAxisMaxVal:MAX,showMarker:true,showBorder:false});rect(s,.75,2.57,8.2,3.4,C.white);
label(s,'公司年化收入 · 十亿美元',.8,2.13,7);
const px=1.37,py=3.05,pw=7.1,ph=2.25,yv=v=>py+ph-v/MAX*ph,xi=i=>px+i*pw/3;
[0,12.5,25,37.5,50].forEach(v=>{const y=yv(v);line(s,px,y,px+pw,y,C.line,.7);text(s,String(v),.75,y-.13,.55,.26,10,{align:'right',color:C.muted});});
[[1.70,'2025.02 研究预览',2.58],[2.72,'2025.05 全面开放',2.84]].forEach(r=>{dash(s,r[0],py,r[0],py+ph,C.coral,1.3);text(s,r[1],r[0]-.86,r[2],1.72,.26,11,{bold:true,color:C.dark,align:'center'});});
let prev;values.forEach((v,i)=>{const x=xi(i),y=yv(v);if(prev)line(s,prev.x,prev.y,x,y,C.coral,2.6);circle(s,x-.055,y-.055,.11,C.coral);text(s,(v===5||v===47?'>':'')+v,x-.6,y-.46,1.2,.32,15,{bold:true,color:C.dark,align:'center'});text(s,labels[i],x-.8,py+ph+.16,1.6,.3,12,{align:'center',color:C.muted});prev={x,y};});
box(s,9.39,2.72,3.18,2.96,C.yp);text(s,'约 $1B',9.63,3.04,2.7,.57,31,{bold:true});text(s,'→ >$47B',9.63,3.97,2.7,.67,33,{bold:true,color:C.dark});text(s,'从 2025 年初\n到 2026 年 5 月',9.63,5.03,2.7,.51,16,{color:C.muted});
footnote(s,'竖线为 Claude Code 两个发布时点，在首段内按月份比例定位；其余横轴为事件点，不按时间等比例。时间上的先后不等于全部收入增长都来自这一个产品。');}
takeaway(s,'公司开始出售的不只是答案，而是能持续完成工作的执行能力。');
}
// 07
{
const s=slide(ch1+' / 1.3','Claude Code 本身，也跑出了十亿美元级生意','上一页是公司整体口径；这一页只看 Claude Code 这一个产品。',SRC.f+'\n'+SRC.g,'2025.08 Code >0.5B；2026.02 >2.5B。业务订阅从2026年初增4倍，企业占Code收入过半。不是整个公司企业收入比例。');
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
divider('PART 02','不仅仅是程序员的梦中情模','价格之后讲能力：编码成绩、Agent 闭环、生态标准，以及同行的反例与正例。',[['2.1 / 2.2','成绩与新范式'],['2.3','MCP 与 Skills'],['2.4','反例与正例']],'引出第二章，不新增数据。');
// Product-route turn: finance -> why coding / Agents
{
const s=slide(ch2+' / 转折','没有铺满生成赛道，却在冲击两万亿','对照三家的公开模型目录：谁上线了独立的生成模型产品线。',SRC.reuters+'\nhttps://platform.claude.com/docs/en/about-claude/models/overview\nhttps://support.claude.com/en/articles/9002504-can-claude-produce-images\nhttps://support.claude.com/en/articles/11101966-using-voice-mode\nhttps://platform.openai.com/docs/models\nhttps://developers.openai.com/api/docs/guides/video-generation\nhttps://deepmind.google/models/veo/\nhttps://deepmind.google/models/gemini-audio/','截至2026-10-05官方公开产品目录对照，不证明内部未研发。Claude模型目录以文本/图像输入、文本输出为主；可用HTML/SVG画图，也有voice mode，不能说无图像理解/语音功能。语音没有独立公开生成模型产品线是目录边界，而非证明无内部语音模型。Google图像Gemini Image/Imagen页面、视频Veo、语音Gemini Audio；OpenAI图像GPT-Image、语音TTS/Realtime、视频Sora历史发布但2026-09-24停止API，明示已停服。>$2T为IPO目标，不称首家已超越2T，未取得全体AI公司可比估值排名。Google非纯AI公司这一提示不放deck。不从产品线推断竞品研发动机。');
const columns=[['image','图像生成'],['video','视频生成'],['voice','语音生成']];columns.forEach((r,i)=>{const x=3.12+i*2.07;s.addImage({path:path.join(__dirname,'assets',r[0]+'.png'),x:x+.57,y:2.48,w:.5,h:.5});text(s,r[1],x,3.05,1.69,.3,15,{align:'center',bold:true});});
const rows=[['Google',['Gemini Image','Veo','Gemini Audio']],['OpenAI',['GPT-Image','Sora · 已停服','TTS / Realtime']],['Anthropic',['未公开独立模型','未公开独立模型','未公开独立模型']]];rows.forEach((r,j)=>{const y=3.65+j*.69;box(s,.81,y,8.44,.56,j===2?C.yp:C.gray);text(s,r[0],1.02,y+.1,1.95,.32,18,{bold:true,color:j===2?C.dark:C.ink});r[1].forEach((v,i)=>text(s,v,3.12+i*2.07,y+.11,1.76,.29,j===2?11:13,{align:'center',bold:j===2}));});
box(s,9.65,2.54,2.89,3.31,C.yp);text(s,'Anthropic',9.9,2.85,2.39,.38,22,{bold:true,color:C.dark});text(s,'>2 万亿',9.9,3.66,2.39,.66,34,{bold:true,color:C.dark});text(s,'美元 · IPO 目标',9.9,4.38,2.39,.36,17,{bold:true});text(s,'把焦点放在\n编码与 Agent',9.9,5.03,2.39,.56,18);
speakerOnly(s,'比较独立生成模型产品线；Claude 有语音对话，也能用代码画图。Sora 已于 2026.09 停服。');text(s,'它没有靠“什么都能生成”走到这里。那它最擅长的，到底是什么？',.83,6.55,11.7,.35,22,{bold:true});
}
let history;try{history=JSON.parse(fs.readFileSync(path.join(__dirname,'frontier_history_verified.json'),'utf8'));}catch(e){throw new Error('Frontier history could not be loaded',{cause:e});}
// Editable 100-cell display; SVG source assets retained separately.
function hundred(s,score,x,y,d){const step=d/10,cell=step*.79;for(let i=0;i<100;i++){const xx=x+(i%10)*step,yy=y+Math.floor(i/10)*step;rect(s,xx,yy,cell,cell,C.line);const ratio=Math.max(0,Math.min(1,score-i));if(ratio)rect(s,xx,yy,cell*ratio,cell,C.coral);}}
{
const s=slide(ch2+' / 2.1','从三分之一，到几乎做满：真实仓库修复的跨越','SWE-bench Verified · 同一套 500 题；历代官方结果。',JSON.stringify(history,null,2),'100格图每格1个百分点，部分格按比例填充；表示平均修复率，不代表这些具体题目都被同一运行解出。33.4→62.3→96为官方里程碑而非同配置受控实验；harness/thinking/trials不同，数字差62.6pp为描述性差异。3.7 full50062.3，定制48970.3单独备注。HumanEval在下一页独立历史起点。95.5/95为Mythos/Fable5 Verified；96为Opus5。不能把Pro89.9作为Verified后继点。');
const stages=[['Sonnet 3.5','2024.06',33.4],['Sonnet 3.7','2025.02',62.3],['Opus 5','2026.07',96]];stages.forEach((r,i)=>{const x=.89+i*3.0;text(s,r[2].toFixed(1)+'%',x,2.43,2.52,.7,43,{bold:true,color:C.dark});text(s,r[0],x,3.2,2.52,.34,21,{bold:true});text(s,r[1],x,3.6,2.52,.24,12,{color:C.muted});hundred(s,r[2],x,4.04,2.3);});
box(s,10.03,2.54,2.5,3.77,C.yp);text(s,'只剩',10.26,2.86,2.02,.34,20,{bold:true});text(s,'4%',10.26,3.36,2.02,.74,52,{bold:true,color:C.dark});text(s,'未解空间',10.26,4.19,2.02,.38,21,{bold:true});text(s,'Mythos / Fable 5\n也已达到\n95.5% / 95.0%',10.26,4.93,2.02,.85,15,{bold:true});
label(s,'SWE-bench Verified · 500 题',.89,2.13,8);
speakerOnly(s,'每格 = 1 个百分点；不是逐题运行记录。历史配置不同，数字是公开能力足迹。');
}
{
const s=slide(ch2+' / 2.1','不是一次偶然领先，是一代代把工程问题往前推','Verified 的完整足迹；最新 5.1 / 5.5 转向更难的 SWE-bench Pro，单独展示。',JSON.stringify(history,null,2),'历代全部16节点保留，按发布日期顺序且横轴等距，不表示等时距。同月多个家族分叉而非单一模型训练曲线。模型架构/配置改变，线为历史记录导览不证明单调提升。配对Fable95单独文字而非第二条历史整线。Pro和HumanEval不接Verified。原始3.7定制scaffold70.3/489不入主图。');
const rows=history.swe_verified;const x=.97,y=2.68,w=8.48,h=2.49;s.addChart(pptx.ChartType.line,[{name:'Verified %',labels:rows.map(r=>r.name),values:rows.map(r=>r.score)}],{x,y,w,h,chartColors:[C.coral],showLegend:false,valAxisMinVal:0,valAxisMaxVal:100,showMarker:true,showBorder:false});rect(s,x,y,w,h,C.white);
const px=1.15,py=2.99,pw=8.05,ph=1.9;[0,50,100].forEach(v=>{let yy=py+ph-v/100*ph;line(s,px,yy,px+pw,yy,C.line,.7);text(s,String(v),.58,yy-.13,.3,.23,9,{align:'right',color:C.muted});});let prev;rows.forEach((r,i)=>{const xx=px+i*pw/(rows.length-1),yy=py+ph-r.score/100*ph;if(prev)line(s,prev.x,prev.y,xx,yy,C.coral,2);circle(s,xx-.036,yy-.036,.072,/Mythos|Opus 5$|3.7/.test(r.name)?C.dark:C.coral);text(s,r.score.toFixed(1),xx-.26,yy+(i%2?.17:-.36),.53,.22,9,{align:'center',bold:true,color:C.dark});const short=r.name==='Mythos / Fable 5'?'M/F 5':r.name==='Mythos Preview'?'Mythos P':r.name.replace('Sonnet ','S ').replace('Opus ','O ');text(s,short,xx-.26,5.08+(i%2)*.27,.53,.48,8.5,{rotate:0,align:'center'});prev={x:xx,y:yy};});
text(s,'2024.06',1.14,5.95,1.5,.24,11,{color:C.muted});text(s,'2026.07',7.84,5.95,1.4,.24,11,{color:C.muted,align:'right'});text(s,'S = Sonnet · O = Opus · M/F = Mythos / Fable',1.15,6.29,8.06,.27,10,{color:C.muted});speakerOnly(s,'节点等距，配置有差异。');label(s,'SWE-bench Verified · %',1.15,2.48,8);
box(s,9.65,2.54,2.89,3.88,C.yp);label(s,'另一套题：SWE-bench Pro',9.87,2.8,2.45);nativeBar(s,history.new_swe_pro.map(r=>r.name),[{name:'Pro %',values:history.new_swe_pro.map(r=>r.score)}],9.88,3.24,2.4,2.57);rect(s,9.81,3.18,2.62,2.94,C.yp);history.new_swe_pro.forEach((r,i)=>{let yy=3.42+i*.88;text(s,r.name,9.91,yy,2.36,.29,r.name.includes('Mythos')?11:15,{bold:true});text(s,r.score.toFixed(1)+'%',9.91,yy+.34,2.36,.42,27,{bold:true,color:C.dark});});speakerOnly(s,'SWE-bench Pro 不与 Verified 连线。');
speakerOnly(s,'更早的起点：Claude 2 · HumanEval 71.2%（2023）；3.7 定制 scaffold：70.3%（489 题）。');
}
{
const s=slide(ch2+' / 2.1','终端里的进展：在 2.1 上，已做到接近九成','Terminal-Bench · 原版、2.0、2.1 各自展示；不跨版本连接分数。',JSON.stringify(history.terminal_panels,null,2),'原版发布结果最高50，不称全部旧版满分。2.0公开点最高82，2.1最高88，是所示历史节点不是最新全榜最优。同版harness/thinking不同，点不连线避免暗示同配置增长。每格1pp辅助展示。版本内排列按原JSON发布节点，同代多家族非单一曲线。3个native bar data plus editable display。');
const peaks=[50,82,88];history.terminal_panels.slice(0,3).forEach((p,j)=>{const x=.84+j*4.15,w=3.65;box(s,x,2.51,w,3.88,j===2?C.yp:C.gray);text(s,'Terminal-Bench '+p.version,x+.22,2.75,w-.44,.35,17,{bold:true,color:C.dark});text(s,peaks[j].toFixed(0)+'%',x+.22,3.19,1.5,.68,43,{bold:true,color:C.dark});hundred(s,peaks[j],x+2.0,3.18,1.12);text(s,'所示历代最高点',x+.22,3.92,w-.44,.24,11,{color:C.muted});nativeBar(s,p.rows.map(r=>r[0]),[{name:'TB '+p.version,values:p.rows.map(r=>r[1])}],x+.18,4.31,w-.36,1.74);rect(s,x+.17,4.28,w-.34,1.88,j===2?C.yp:C.gray);p.rows.forEach((r,i)=>{const yy=4.24+i*.393;text(s,r[0],x+.22,yy,2.34,.23,12,{bold:/Mythos/.test(r[0])});text(s,r[1].toFixed(1)+'%',x+2.76,yy,.67,.23,12,{bold:true,color:C.dark,align:'right'});rect(s,x+.22,yy+.26,3.2,.085,C.line);rect(s,x+.22,yy+.26,3.2*r[1]/100,.085,C.coral);});});
speakerOnly(s,'原版：Claude Code / Terminus-1；2.0：Terminus-2；2.1：含不同 harness。各代 thinking 配置不同。');
}
{
const p=history.terminal_panels[3];const s=slide(ch2+' / 2.1','换一套更有区分度的题，再看模型往前走','Terminal-Bench 4.0 · 同一版本内比较，分数为各模型的公开发布结果。',JSON.stringify(p,null,2)+'\nhttps://www.tbench.ai/news/terminal-bench-4-0','4.0官方连续benchmark变更：校准资源/修19题/删8题，其中2饱和2拒答2公开答案2质量或平台。饱和定义最新各家族各档均5/5完成，而非Claude单独推动全部版本。4.0不是全新题库：future5.0新题；因此不用逼出新题唯一因果。0–100同版bar；Opus5.5 xhigh+fallback其余近期max；Sonnet5 10.3细设置未披露，不把+60.3pp视同配置训练提升。旧版与新版不相减。原始rows与全部harness细节在historyJSON。');
label(s,'Terminal-Bench 4.0 · %',.84,2.5,7.27);nativeBar(s,p.rows.map(r=>r[0]),[{name:'TB4 %',values:p.rows.map(r=>r[1])}],.85,2.99,7.54,3.02);rect(s,.82,2.91,7.6,3.26,C.white);[0,50,100].forEach(v=>{let xx=3.04+v/100*4.47;line(s,xx,3.2,xx,6.03,C.line,.65);text(s,String(v),xx-.18,2.95,.36,.21,9,{align:'center',color:C.muted});});p.rows.forEach((r,i)=>{let yy=3.25+i*.385;text(s,r[0],.9,yy,1.93,.28,15,{bold:/5.1|5.5/.test(r[0])});rect(s,3.04,yy+.035,4.47*r[1]/100,.22,/5.5/.test(r[0])?C.dark:C.coral);text(s,r[1].toFixed(1)+'%',7.66,yy,.71,.27,14,{bold:true,color:C.dark});});
box(s,8.83,2.54,3.7,3.91,C.yp);text(s,'题目也在“升级”',9.06,2.79,3.24,.43,23,{bold:true});s.addImage({path:path.join(__dirname,'assets/benchmark-renewal.png'),x:9.05,y:3.42,w:3.23,h:1.13});text(s,'已经饱和',9.02,4.69,1.04,.25,11,{align:'center',bold:true});text(s,'移除 / 修正',10.18,4.69,1.04,.25,11,{align:'center',bold:true});text(s,'继续加难题',11.34,4.69,1.04,.25,11,{align:'center',bold:true});text(s,'4.0 移除 2 道饱和题\n最新各家族、各档模型\n都能连续 5 / 5 做对',9.07,5.16,3.22,.78,16,{bold:true,color:C.dark});speakerOnly(s,'同时校准资源、修题；新题持续征集。');
speakerOnly(s,'4.0：Claude Code --bare；Opus 5.5 xhigh，其余近期节点 max；5.5 含 fallback。各代配置有差异。');
}

// 12
{
let v;try{v=JSON.parse(fs.readFileSync(path.join(__dirname,'benchmark_comparison_verified.json'),'utf8'));}catch(e){throw new Error('Verified comparison could not be loaded',{cause:e});}
const s=slide(ch2+' / 2.1','同一对手，换一套 harness，差距就不一样','两列都是 Terminal-Bench 4.0 上同一组模型的公开结果。',JSON.stringify(v,null,2),'两套口径必须分开看，绝对不可混用或相减。左：Artificial Analysis 独立复测，mini-swe-agent，66题每题3次平均pass@1，Opus 5.5为max with fallback（fallback可能调用其他模型），Astra为max，59.6/59.1观测差0.5pp不构成统计显著领先。右：官方发布表，Opus 5.5 xhigh使用Claude Code harness 66.4，Astra 57.9为OpenAI自报并由Anthropic发布页转述，OpenAI公告直接访问返回403，未取得原文复核。effort、harness、重复次数、是否含fallback都不同，8.5pp不是模型能力差。两套都不是受控训练实验。不据此预测排名变化。');
const pans=[
 {x:.8,fill:C.gray,t:'第三方统一复测',k:'Artificial Analysis · mini-swe-agent\n66 题 × 3 次 · 平均 pass@1',rows:[['Opus 5.5 · max',59.6,C.coral],['GPT-6 Astra · max',59.1,C.yellow]],gap:'差 0.5 个百分点'},
 {x:6.9,fill:C.yp,t:'各自发布配置',k:'官方发布表 · Claude Code harness\nOpus 5.5 xhigh · Astra 为 OpenAI 自报',rows:[['Opus 5.5 · xhigh',66.4,C.dark],['GPT-6 Astra · high',57.9,C.yellow]],gap:'差 8.5 个百分点'}];
pans.forEach(p=>{const w=5.64;box(s,p.x,2.5,w,3.4,p.fill);
 text(s,p.t,p.x+.26,2.7,w-.52,.38,22,{bold:true,color:C.dark});text(s,p.k,p.x+.26,3.14,w-.52,.56,12,{color:C.muted});
 nativeBar(s,p.rows.map(r=>r[0]),[{name:'TB4 %',values:p.rows.map(r=>r[1])}],p.x+.24,3.82,w-.48,1.5);rect(s,p.x+.2,3.76,w-.4,1.62,p.fill);
 p.rows.forEach((r,i)=>{const y=3.86+i*.78;text(s,r[0],p.x+.26,y,2.42,.34,16,{bold:true});
  rect(s,p.x+2.78,y+.42,2.3,.3,C.white);rect(s,p.x+2.78,y+.42,2.3*r[1]/100,.3,r[2]);
  text(s,r[1].toFixed(1)+'%',p.x+.26,y+.4,2.42,.34,21,{bold:true,color:C.dark});});
 line(s,p.x+.26,5.32,p.x+w-.26,5.32,C.line,1);text(s,p.gap,p.x+.26,5.44,w-.52,.36,19,{bold:true,color:C.dark});});
footnote(s,'两列是不同的评测口径：harness、effort、重复次数与是否含 fallback 都不同，不可混用也不可相减。');
takeaway(s,'领先只有半个百分点，而且换个口径就变样——它必须靠持续经营守住。');
}
// 成绩之后、范式之前：先讲清“编码 Agent 模型”和推理模型优化的不是同一件事。只做概念对照，不放分数。
{
const s=slide(ch2+' / 2.2','推理模型 vs 编码 Agent 模型：是两种东西','同一时期都在“变聪明”，但力气花在了不同的地方。',
'https://openai.com/index/learning-to-reason-with-llms/\nhttps://openai.com/index/introducing-o3-and-o4-mini/\nhttps://github.com/deepseek-ai/DeepSeek-R1\nhttps://arxiv.org/abs/2501.12948\nhttps://www.anthropic.com/news/claude-3-7-sonnet\nhttps://www.anthropic.com/news/claude-4',
'概念对照，讲的是优化重心，不是互斥分类，也不是能力排名。o1（2024.09）、DeepSeek R1（2025.01）以强化学习训练长思维链，公开成绩以AIME、Codeforces等竞赛题为主；R1用规则奖励（答案对错、格式），与第24页“机器检验行不行”同源。推理模型也能调用工具：o3/o4-mini（2025.04）在ChatGPT中可用工具，同月发布Codex CLI。Claude 3.7 Sonnet（2025.02）本身也是混合推理模型（extended thinking），同时发布Claude Code研究预览；Claude 4（2025.05）支持思考与工具调用交替。因此右栏不是“不思考”，而是把思考放进与仓库、终端的多轮交互里。本页不放竞赛分或SWE-bench分数，不做同口径成绩比较。');
const dims=['优化目标','算力花在哪','输入','典型战场','交付物'];
const cols=[
 {x:2.8,fill:C.gray,t:'推理模型',k:'o1 · o3 · o4-mini · DeepSeek R1',rows:['单轮把题做对','回答之前的长思维链','一道定义清楚的题','AIME 数学 · Codeforces 竞赛','一个答案']},
 {x:7.86,fill:C.yp,t:'编码 Agent 模型',k:'Claude 3.7 起 · Claude Code',rows:['多轮把活干完','工具调用之间：查 → 改 → 跑 → 再修','一个陌生仓库 + 模糊需求','SWE-bench · Terminal-Bench','Diff + 测试结果 + 没解决的问题']}];
const w=4.7,top=2.45,r0=3.55,rh=.48;
cols.forEach((c,i)=>{box(s,c.x,top,w,3.53,c.fill);
 text(s,c.t,c.x+.26,top+.17,w-.52,.4,22,{bold:true,color:C.dark});text(s,c.k,c.x+.26,top+.61,w-.52,.28,12,{color:C.muted});
 line(s,c.x+.26,3.45,c.x+w-.26,3.45,C.line,1);
 c.rows.forEach((t,j)=>{const y=r0+j*rh;if(j)line(s,c.x+.26,y,c.x+w-.26,y,C.line,.6);text(s,t,c.x+.26,y+.05,w-.52,.38,16,{bold:i===1});});});
dims.forEach((t,j)=>text(s,t,.84,r0+j*rh+.05,1.8,.38,14,{bold:true,color:C.muted}));
footnote(s,'推理模型也能调用工具，Claude 也会深度思考；两栏比的是优化重心，不是谁会谁不会。');
takeaway(s,'会解竞赛题，不等于会修真实仓库。');
}
// 13
{
const s=slide(ch2+' / 2.2','Chatbot → Copilot → Agent：从问一句，到交一件事','同一个任务：修复支付重试的错误。差别在于，谁来把下一步接起来。','https://www.anthropic.com/news/claude-3-7-sonnet\nhttps://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents','吸收Gemini第13页三栏对照，重写为同一任务中的分工变化；三种交互方式可共存，不是每个产品的严格代际分类。代码、命令与交付均为教学示意，非本次真实运行。Copilot不绝对限定为只能单行补全，Agent也不承诺必定通过测试。人负责业务取舍、审查合并与生产授权。');
const modes=[['Chatbot','问：这个报错怎么改？','给出解释和代码片段','我们复制、运行，再问报错'],['Copilot','一起改这段代码','在编辑器里建议修改','我们决定方向，接着调试'],['Agent','把重试问题修好并补测试','读仓库、修改、运行、再修','我们审查补丁和测试结果']];
modes.forEach((r,i)=>{const x=.8+i*4.14;box(s,x,2.55,3.66,1.88,i===2?C.yp:C.gray);text(s,r[0],x+.23,2.74,3.2,.37,24,{bold:true,color:C.dark});text(s,r[1],x+.23,3.3,3.2,.31,17,{bold:true});text(s,r[2],x+.23,3.77,3.2,.28,14);text(s,r[3],x+.23,4.1,3.2,.25,12,{color:C.muted});});
label(s,'Claude Code 在任务里怎么往下走 · 教学示意',.83,4.7,9);const steps=[['查','rg "retry" src/'],['读','相关调用链'],['改','补丁 + 测试'],['跑','pytest …'],['再修','失败回显 → 重试']];steps.forEach((r,i)=>{const x=.84+i*2.39;box(s,x,5.17,2.12,.73,i===4?C.pale:C.gray);text(s,r[0],x+.12,5.26,1.9,.24,15,{bold:true,color:C.dark});text(s,r[1],x+.12,5.58,1.9,.2,i===0?11:12);if(i<4)line(s,x+2.16,5.52,x+2.34,5.52,C.coral,1.5,true);});
text(s,'交回来：Git Diff、测试结果、没解决的问题。是否合并，由我们决定。',.85,6.13,11.7,.32,16,{bold:true});
}
// 串行一条线 vs 同时多条线：这一页只讲结构差异，不给成本数字
{
const s=slide(ch2+' / 2.2','真正变便宜的，是“再试一次”','接着上一页那个修复任务，把它放进一个下午来看。',
'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\n'+SRC.exec,
'结构示意，不是实测数据，也不给工时与费用对比：没有取得同一缺陷下人工耗时与Agent费用的可核验同口径数据，因此本页不出现任何金额或分钟数，避免编造ROI。左栏描述常见的串行排查过程，右栏任务名与进度为示意。并行度实际受授权范围、环境隔离、速率限制与人能审查多少约束；并非所有任务适合并行，也不保证重试一定成功。每条线的产出仍需人审查后合并。');
box(s,.8,2.5,5.3,3.06,C.gray);label(s,'一个人，一条线',1.06,2.68,4.8);
line(s,1.17,3.2,1.17,5.0,C.line,1.4);
['复现问题','读相关调用链','改一处','跑测试','等结果','再改一次'].forEach((t,i)=>{const y=3.06+i*.36;circle(s,1.12,y+.12,.11,i===5?C.dark:C.coral);text(s,t,1.46,y,3.3,.3,16,{bold:i===5});});
speakerOnly(s,'一次只能推进一件；中途被打断，上下文要重新载入。');
box(s,6.6,2.5,5.95,3.06,C.yp);label(s,'同一段时间，多条线',6.86,2.68,5.4);
[['修支付重试',1.0,'已交回'],['补这块的测试',.75,'进行中'],['升级依赖',1.0,'已交回'],['清 lint 告警',.55,'重试中'],['补接口文档',.9,'进行中'],['查慢查询',.35,'重试中']].forEach((r,i)=>{const y=3.06+i*.36;
 text(s,r[0],6.86,y,2.22,.3,15);rect(s,9.2,y+.08,2.18,.14,C.white);rect(s,9.2,y+.08,2.18*r[1],.14,r[2]==='已交回'?C.dark:C.coral);
 text(s,r[2],11.5,y,.95,.3,11,{color:r[2]==='已交回'?C.dark:C.muted,bold:r[2]==='已交回'});});
speakerOnly(s,'每条线各自跑、各自失败、各自重试；交回来的每一条，仍然要我们审查后合并。');
box(s,.8,5.68,11.75,.48,C.pale);text(s,'变便宜的不是“一次做对”，而是“可以多试几次、同时试几件”。',1.06,5.68,11.23,.48,20,{bold:true,color:C.dark});
takeaway(s,'并行度取决于授权、环境和我们能审查多少——这是组织问题，不只是模型问题。');
}
// 14
{
const s=slide(ch2+' / 2.2','为什么 coding model 会越来越强？','机制示意：编码任务为什么特别适合用反馈来改进自己。','https://github.com/deepseek-ai/DeepSeek-R1\nhttps://www.tbench.ai/news/terminal-bench-4-0','机制图不是Claude私有训练配方；公开RL研究支持反思自检。评测数据不是训练数据，不把TB基准放进训练语料。运行中纠错不等于在线更新权重。');
flow(s,[['任务与环境','仓库、依赖\n需求与约束'],['执行与反馈','读 → 改 → 跑\n测试指出失败'],['学习有效策略','训练更新\n更善于下一批任务']]);
text(s,'任务内：执行 → 失败 → 再尝试     /     训练期：用反馈更新策略',.85,5.84,11.75,.38,18,{color:C.dark,bold:true});
takeaway(s,'编码不是只靠人评“像不像”，而是让机器反复检验“行不行”。');
}
// 15
{
const s=slide(ch2+' / 2.2','我们常在软件之间，充当“人肉胶水”','这段衔接不产生任何新信息，但必须有人做。',SRC.exec,'吸收Gemini第14页人肉胶水比喻并与原第14页对账样本合并，不新增概念页。是常见办公流程示意，不是公司现状调查。订单980到账950差30、1200/1200差0、600/0差600为教学数据，非真实账务。不直接改账或发送通知；异常需结合业务规则复核。');
label(s,'以前：手动把几套软件接起来',.82,2.51,9);const old=['业务系统导出','Excel 匹配','逐行核对','复制进汇报'];old.forEach((t,i)=>{const x=.82+i*3.04;box(s,x,2.95,2.59,.58,C.gray);text(s,t,x+.13,3.07,2.33,.32,17,{align:'center'});if(i<3){text(s,'人',x+2.63,3.09,.34,.22,10,{color:C.dark,align:'center'});line(s,x+2.62,3.35,x+2.99,3.35,C.coral,1.2,true);}});
label(s,'换一种接法：说明规则，让脚本先把差异找出来',.82,3.83,11);box(s,.82,4.26,4.15,1.57,C.yp);text(s,'“按订单号比对账单和流水，\n列出差额，保留原始行号。\n先别改账，我来核对。”',1.06,4.45,3.67,1.06,18,{bold:true,color:C.dark});line(s,5.12,5.04,5.56,5.04,C.coral,1.7,true);
table(s,['订单','应收','到账','差额'],[['O1042','980','950','30'],['O1088','1200','1200','0'],['O1101','600','0','600']],[1.9,1.48,1.48,1.4],5.72,3.98,.47);
speakerOnly(s,'教学样本 · 输出附原始行号与核对依据');takeaway(s,'差额可以交给脚本算；是漏款、退款，还是到账延迟，仍要结合业务看。');
}
// 16
{
const s=slide(ch2+' / 2.3','从 MCP 到 Skills：接入系统，再保存做事方法','MCP 不是被 Skills 替代；两者解决的是不同问题。',SRC.mcp+'\n'+SRC.skills,'MCP2024.11.25；Skills2025.10.16，2025.12.18开放标准。Skills包含指令脚本资源，渐进加载。');
// 三层堆叠：底层最宽为地基，向上收窄；右侧表示调用向下、反馈向上。
const layers=[
 {n:'Code + Harness',v:'跑得动',x:1.6,w:8.1,fill:C.pale,chips:['组合调用','读取反馈','保存状态','继续推进']},
 {n:'Skills',v:'做得对',x:1.2,w:8.9,fill:C.yp,chips:['SOP','脚本','模板','验收规则']},
 {n:'MCP',v:'接得上',x:.8,w:9.7,fill:C.gray,chips:['数据库','文档','业务工具','代码仓库']}];
layers.forEach((L,i)=>{const y=2.52+i*1.12;box(s,L.x,y,L.w,.98,L.fill);
 text(s,L.n,L.x+.26,y+.14,2.3,.42,L.n.length>6?20:24,{bold:true,color:C.dark});text(s,L.v,L.x+.26,y+.58,2.3,.3,15,{color:C.muted});
 const cx=L.x+2.72,cw=(L.x+L.w-.26-cx-.3)/4;L.chips.forEach((t,j)=>chip(s,t,cx+j*(cw+.1),y+.31,cw,.36,C.white,13));});
box(s,10.72,2.52,1.83,3.22,C.gray);
line(s,11.18,2.9,11.18,5.4,C.coral,2,true);text(s,'调用\n往下',11.3,2.95,.5,.6,12,{color:C.dark,bold:true});
line(s,12.08,5.4,12.08,2.9,C.dark,2,true);text(s,'反馈\n往上',11.3,4.76,.5,.6,12,{color:C.dark,bold:true});
speakerOnly(s,'一次任务上下都要走。');
speakerOnly(s,'MCP 2024.11 发布；Skills 2025.10 发布，2025.12 成为开放标准。');
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
const s=slide(ch2+' / 2.3','更好的 Agent，不是把所有信息都塞进提示词','数字来自 Anthropic 官方工程博客的实测示例。',SRC.exec,'150000到2000 Tokens，98.6667%舍入98.7%，仅工具相关上下文，不是全任务费用。');
kpi(s,.8,2.65,3.66,'150,000','全量工具定义','Token',C.gray);kpi(s,4.94,2.65,3.66,'2,000','按需加载','Token',C.yp);kpi(s,9.1,2.65,3.46,'−98.7%','工具上下文用量','',C.pale);speakerOnly(s,'同一工程示例。');
text(s,'目录发现 → 读取目标接口 → 写处理脚本 → 执行 → 只返回关键结果',.85,5.68,11.74,.47,21,{bold:true});
takeaway(s,'能力变强，还要让它在真实工作中可负担、可恢复、可复用。');
}
// 19
{
const s=slide(ch2+' / 2.4','Gemini 的反例：综合聪明，不自动等于工程能干','同一家第三方机构的两套评测：一套测综合智能，一套测终端执行。','https://artificialanalysis.ai/models/gemini-3-1-pro-preview\nhttps://artificialanalysis.ai/evaluations/terminalbench-4-0\nhttps://artificialanalysis.ai/models/claude-opus-5-5\nhttps://artificialanalysis.ai/models/gpt-6-astra','图表量纲保留在轴标签上，比较口径详见演讲备注：左轴AA综合智能指数v4.3.2（0–60指数分，不是百分比）、右轴Terminal-Bench 4.0平均pass@1（0–80%），各自独立归一化，连线只表示同一模型在两套评测中的相对位置，不是分数变化，不可相减。Opus 5.5为max with fallback、Astra为max、Gemini为3.1 Pro Preview；59.6与59.1在右轴几乎重合，为可读性把标注上下分开，位置已用引线指回真实点。只说明本次型号在本次配置下终端评测弱，不据此断言Google整体衰落，不编造组织、训练或产品关停原因。');
// 斜率图：左右两套不同量纲各自归一化，连线只表达同一模型在两套评测中的相对位置。
{const LX=3.2,RX=8.4,TOP=2.98,BOT=5.74,SPAN=BOT-TOP,lY=v=>BOT-v/60*SPAN,rY=v=>BOT-v/80*SPAN;
line(s,LX,TOP-.1,LX,BOT+.06,C.line,1.3);line(s,RX,TOP-.1,RX,BOT+.06,C.line,1.3);
text(s,'AA 综合智能指数',1.7,2.5,3.0,.3,15,{bold:true,color:C.dark,align:'center'});text(s,'v4.3.2 · 0–60 指数分',1.7,2.74,3.0,.24,11,{align:'center',color:C.muted});
text(s,'Terminal-Bench 4.0',6.9,2.5,3.0,.3,15,{bold:true,color:C.dark,align:'center'});text(s,'平均 pass@1 · 0–80%',6.9,2.74,3.0,.24,11,{align:'center',color:C.muted});
text(s,'0',2.78,BOT-.08,.34,.24,10,{align:'right',color:C.muted});text(s,'0',8.5,BOT-.08,.34,.24,10,{color:C.muted});
const ms=[
 {n:'Opus 5.5',l:58,r:59.6,c:C.coral,w:1.9,ry:3.40},
 {n:'GPT-6 Astra',l:53,r:59.1,c:C.yellow,w:1.9,ry:3.94},
 {n:'Gemini 3.1 Pro',l:30,r:4.0,c:C.sage,w:3.1,ry:null}];
ms.forEach(m=>{const ly=lY(m.l),ry=rY(m.r);
 line(s,LX,ly,RX,ry,m.c,m.w);
 circle(s,LX-.075,ly-.075,.15,m.c);circle(s,RX-.075,ry-.075,.15,m.c);
 text(s,m.n,.84,ly-.17,1.84,.34,15,{bold:true,align:'right'});text(s,String(m.l),2.78,ly-.17,.34,.34,17,{bold:true,color:C.dark,align:'right'});
 const ty=m.ry===null?ry-.17:m.ry;if(m.ry!==null)line(s,RX+.14,ry,RX+.5,ty+.17,C.line,.9);
 text(s,m.r.toFixed(1)+'%',RX+.56,ty,1.2,.34,17,{bold:true,color:C.dark});});
box(s,9.9,2.98,2.65,2.96,C.yp);text(s,'同一个模型',10.12,3.22,2.21,.32,16,{bold:true});
text(s,'30',10.12,3.62,2.21,.56,34,{bold:true,color:C.dark});text(s,'综合指数',10.12,4.16,2.21,.26,12,{color:C.muted});
text(s,'4.0%',10.12,4.6,2.21,.56,34,{bold:true,color:C.dark});text(s,'终端执行',10.12,5.14,2.21,.26,12,{color:C.muted});
text(s,'两种能力分开了',10.12,5.5,2.21,.3,15,{bold:true,color:C.dark});
footnote(s,'左右是两套不同量纲的评测，各自独立归一化；连线表示同一模型在两套评测中的相对位置，不是分数变化，也不可相减。Opus 与 Astra 在右轴几乎重合（差 0.5 个百分点），为便于阅读分开标注。');}
takeaway(s,'这一轮终端评测的掉队，提醒我们：会回答，与会连续行动是两种能力。');
}
// 27 / 三个版本独立绘制，不跨版本连线；数据原样保留在 TSV 与备注中。
{
const raw=fs.readFileSync(path.join(__dirname,'terminal_bench_user_supplied.tsv'),'utf8').trim().split('\n');
const fields=raw.shift().split('\t');
const records=raw.map(row=>{const values=row.split('\t');if(values.length!==fields.length)throw new Error('TB record columns');const r=Object.fromEntries(fields.map((k,i)=>[k,values[i]]));r.Score=Number(r.Score);if(!Number.isFinite(r.Score))throw new Error('TB score');return r;});
if(records.length!==25)throw new Error('Expected 25 user-supplied TB records');
const notes='本页按用户在2026-10-06提供的25条汇总记录绘制，20个实际模型，未经本次逐条独立核验。原始字段、来源标签及括号中的替代分数均保存在 terminal_bench_user_supplied.tsv；只使用 Score 列，不平均来源中的不同数字。日期按原表记录日期处理，不称官方发布日期；若与此前审计的发布日期冲突，不沿用此前“同日反超”结论。2.0、2.1、4.0独立坐标系，不跨版本比较。横轴为本版本所列日期排序后的事件等距排列，不是等时距。连线是同一版本的公开配置迭代轨迹，不是统一harness复测，不代表模型纯能力或严格排名。2.0的GPT-5.1通用版、Sonnet 5，以及4.0的Sonnet 5基线、Fable 5.1单独标点；4.0的Sol效率型号另画虚线，不接到Astra前沿线上。Baseline为旧模型在新评测上的参考成绩，不是新型号，也不据发布日期推断当时已完成该版本评测。本次数据没有时间、费用，不保留此前成本下降结论。\n\n原表记录：\n'+records.map(r=>fields.map(k=>k+': '+r[k]).join(' | ')).join('\n');
const s=slide(ch2+' / 2.4','OpenAI 的正例：追赶不止于 GPT-5.3',null,'用户提供的多来源汇总（2026-10-06）\nterminal_bench_user_supplied.tsv',notes);
speakerOnly(s,'三代终端评测，20 个模型的公开成绩轨迹。');
rect(s,9.78,1.88,.11,.11,C.coral);text(s,'Claude',9.97,1.78,.9,.3,12,{bold:true,color:C.dark});
circle(s,11.25,1.88,.11,C.sage);text(s,'OpenAI',11.44,1.78,1.05,.3,12,{bold:true,color:C.sage});
line(s,4.60,2.39,4.60,5.78,C.line,.7);line(s,8.52,2.39,8.52,5.78,C.line,.7);
const panels=[
 {benchmark:'Terminal-Bench 2.0',x:.78,w:3.76,min:40,max:90,ticks:[40,60,80,90],range:'2025.11—2026.05',months:[[0,'2025.11'],[4,'2026.01'],[7,'04'],[8,'05']],
  groups:[[1,3,4,6,7],[2,5]],
  annotations:[['GPT-5.1',1.14,5.26,1.25],['5.1-Max',1.00,4.82,1.50],['Opus 4.5',1.00,3.70,1.50],['5.2',1.76,4.46,1.20],['5.3 Codex',2.00,3.27,1.55],['Opus 4.6',2.39,4.04,1.58],['5.4',3.17,4.61,1.15],['5.5',3.25,2.98,1.20],['Sonnet 5',3.12,4.31,1.48]]},
 {benchmark:'Terminal-Bench 2.1',x:4.70,w:3.76,min:70,max:95,ticks:[70,80,90,95],range:'2026.04—09',months:[[0,'04'],[1.5,'06'],[3,'07'],[4.5,'09']],
  groups:[[0,1,3,5],[2,4]],
  annotations:[['Opus 4.8',5.07,5.24,1.58],['Fable 5',5.00,4.19,1.42],['5.6 Sol',5.75,3.27,1.48],['Opus 5',6.36,2.98,1.38],['6 Astra',6.87,4.23,1.46],['Opus 5.5',7.24,3.37,1.42]]},
 {benchmark:'Terminal-Bench 4.0',x:8.62,w:3.96,min:0,max:80,ticks:[0,20,40,60,80],range:'2026.05—09',months:[[0,'05'],[2,'07'],[3,'08'],[6.5,'09']],
  groups:[[2,4,6,8],[1,5],[7,9]],
  annotations:[['Sonnet 5 基线',8.89,5.40,1.75],['5.6 Sol 基线',9.00,4.67,1.77],['Opus 5 基线',8.88,4.04,1.76],['Fable 5.1',9.03,3.15,1.58],['Mythos 5.1',9.80,2.92,1.60],['6 Astra',10.20,4.29,1.30],['Opus 5.5',10.78,3.82,1.32],['6 Sol',11.04,4.98,1.40],['Sonnet 5.5',11.15,2.87,1.63],['6.1 Sol',11.12,4.60,1.45]]}
];
let plotted=0;
panels.forEach(p=>{
 const rows=records.filter(r=>r.Benchmark===p.benchmark).sort((a,b)=>a.Date.localeCompare(b.Date));
 if(rows.length!==p.annotations.length)throw new Error('TB annotation count');
 text(s,p.benchmark,p.x,2.33,p.w,.32,18,{bold:true});text(s,p.range,p.x,2.73,p.w,.2,10,{color:C.muted});
 const px=p.x+.36,pw=p.w-.73,py=3.08,ph=2.36,bottom=py+ph,xi=i=>px+i*pw/(rows.length-1),vy=v=>bottom-(v-p.min)/(p.max-p.min)*ph;
 p.ticks.forEach(v=>{const y=vy(v);line(s,px,y,px+pw,y,C.line,.6);text(s,String(v),p.x-.04,y-.10,.30,.20,9,{align:'right',color:C.muted});});
 p.months.forEach(([i,t])=>{const w=t.length>2?.78:.42;text(s,t,xi(i)-w/2,5.67,w,.20,9,{align:'center',color:C.muted});});
 p.groups.forEach((group,j)=>{const color=rows[group[0]].Vendor==='OpenAI'?C.sage:C.coral;for(let k=1;k<group.length;k++){const a=group[k-1],b=group[k];if(p.benchmark==='Terminal-Bench 4.0'&&j===2)dash(s,xi(a),vy(rows[a].Score),xi(b),vy(rows[b].Score),color,1.7);else line(s,xi(a),vy(rows[a].Score),xi(b),vy(rows[b].Score),color,2.1);}});
 rows.forEach((r,i)=>p.annotations.forEach(([name,x,y,w])=>{if(xi(i)+.048>x-.018&&xi(i)-.048<x+w+.018&&vy(r.Score)+.048>y-.012&&vy(r.Score)-.048<y+.242)throw new Error('TB marker covered: '+r.Model+' / '+name);}));
 rows.forEach((r,i)=>{
  const [name,lx,ly,lw]=p.annotations[i],color=r.Vendor==='OpenAI'?C.sage:C.coral,xx=xi(i),yy=vy(r.Score),lh=.23;
  const ax=Math.max(lx,Math.min(xx,lx+lw)),ay=yy<ly?ly:yy>ly+lh?ly+lh:ly+lh/2;
  line(s,xx,yy,ax,ay,C.line,.55);
  const baseline=r.Model.includes('(Baseline)');s.addShape(r.Vendor==='OpenAI'?ST.ellipse:ST.rect,{x:xx-.048,y:yy-.048,w:.096,h:.096,fill:{color:baseline?C.white:color},line:{color,width:baseline?1.35:.5}});
  rect(s,lx-.018,ly-.012,lw+.036,lh+.024,C.white);text(s,name+' · '+r.Score.toFixed(1),lx,ly,lw,lh,10,{bold:true,color:r.Vendor==='OpenAI'?C.sage:C.dark});
  plotted++;
 });
});
if(plotted!==records.length)throw new Error('TB record missing from visual');
footnote(s,'多来源、不同配置汇总；横轴按资料中的迭代事件等距排列，版本间不比较分数。');
takeaway(s,'2.x 的接近不是终点：评测升级后，追赶仍在继续。');
}
// 31 / ARR 与估值双轨：用户提供的多来源汇总，按真实日期等比例绘制；标签自动避让，放不下即报错。
{
const raw=fs.readFileSync(path.join(__dirname,'arr_valuation_user_supplied.tsv'),'utf8').trim().split('\n');
const fields=raw.shift().split('\t');
const recs=raw.map(row=>{const v=row.split('\t');if(v.length!==fields.length)throw new Error('ARR record columns');const r=Object.fromEntries(fields.map((k,i)=>[k,v[i]]));r.v=Number(r.Amount_USD_B);r.t=Date.parse(r.Date);if(!Number.isFinite(r.v)||!Number.isFinite(r.t))throw new Error('ARR record value');return r;});
if(recs.length!==28)throw new Error('Expected 28 user-supplied ARR/valuation records');
const notes='本页按用户在2026-10-08提供的28条多来源汇总绘制（ARR 15条、估值13条），未经本次逐条独立核验；原始字段与来源标签保存在 arr_valuation_user_supplied.tsv。与本deck已核实口径一致的点：Anthropic 2025年初约$1B、2025.08>$5B、2026.02 $14B、2026.05>$47B（第10页官方run-rate），E/F/G/H轮$61.5B/$183B/$380B/$965B投后（官方公告）。其余点（OpenAI全部ARR与估值、Anthropic 2025年末$9B、2026.03 $19B、2026.04 $30B、2026.07 $65B、2026.09 $72B、条款书$350B、二级$1,350B）只来自用户汇总所列二手来源，未取得原文复核。ARR是年化run-rate，不是全年确认收入；两家口径（是否含云分成、是否为月度×12）未必一致，交叉点只表示所列数字的先后，不是审计后的收入排名。估值混合了一级融资投后、员工回购要约、二级市场成交与IPO目标，空心点为非一级融资口径，不可与实心点直接等同。OpenAI $1,050B为保密递交IPO的目标区间中值，Anthropic $1,350B为二级市场讨论值，均非上市定价；Anthropic超过$2T的IPO目标见第3页，不画进本图。横轴按日期等比例。OpenAI 2026.06→2026.09 $26.5B→$69B约2.6倍，汇总将其归因于GPT-5.6 Sol与GPT-6 Astra发布，本页只呈现时间共现，不做因果判断。\n\n原表记录：\n'+recs.map(r=>fields.map(k=>k+': '+r[k]).join(' | ')).join('\n');
const s=slide(ch2+' / 2.4','被反超之后，OpenAI 也在自我进化',null,'用户提供的多来源汇总（2026-10-08）\narr_valuation_user_supplied.tsv\n'+[SRC.e,SRC.f,SRC.g,SRC.h].join('\n'),notes);
speakerOnly(s,'左边是年化收入，右边是估值，横轴按真实日期比例。先看左图六月以后那段绿线。');
rect(s,9.78,1.88,.11,.11,C.coral);text(s,'Anthropic',9.97,1.78,1.15,.3,12,{bold:true,color:C.dark});
circle(s,11.25,1.88,.11,C.sage);text(s,'OpenAI',11.44,1.78,1.05,.3,12,{bold:true,color:C.sage});
line(s,6.84,2.3,6.84,5.86,C.line,.7);
const t0=Date.parse('2025-01-01'),t1=Date.parse('2027-01-20');
const vName={'Series E':'E 轮','Series F':'F 轮','Term Sheet':'条款书','Series G':'G 轮','Series H':'H 轮','Pre-IPO / Secondary':'二级','SoftBank Round':'软银轮','Secondary Tender':'回购要约','Mega Financing Round':'$122B 轮','Forge Secondary':'Forge','Confidential IPO Target':'IPO'};
const primary=new Set(['Series E','Series F','Series G','Series H','SoftBank Round','Mega Financing Round']);
const cw=t=>[...t].reduce((a,ch)=>a+(/[一-鿿]/.test(ch)?.145:ch===' '?.04:.07),0)+.04;
const fmt=v=>'$'+(v>=100?Math.round(v).toLocaleString('en-US'):String(v))+'B';
const panels=[
 {metric:'ARR',title:'年化收入（ARR）',unit:'十亿美元 · 2025.02—2026.09',x:.78,w:5.9,max:80,ticks:[0,20,40,60,80],
  chips:[['Anthropic 反超：2026.04，$30B 对 $25B',C.pale,C.dark],['OpenAI 再加速：3 个月 $26.5B → $69B',C.gray,C.sage]]},
 {metric:'Valuation',title:'估值',unit:'十亿美元 · 空心为二级 / 条款书 / 目标',x:7.0,w:5.6,max:1500,ticks:[0,500,1000,1500],
  chips:[['H 轮 $965B，首次高于 OpenAI $852B',C.pale,C.dark]]}];
const months=[['2025.01','2025-01-01'],['2025.07','2025-07-01'],['2026.01','2026-01-01'],['2026.07','2026-07-01']];
let plotted=0;
panels.forEach(p=>{
 text(s,p.title,p.x,2.22,p.w,.32,18,{bold:true});text(s,p.unit,p.x,2.58,p.w,.2,10,{color:C.muted});
 const px=p.x+.42,pw=p.w-.55,py=2.95,ph=2.55,bottom=py+ph,xt=t=>px+(t-t0)/(t1-t0)*pw,vy=v=>bottom-v/p.max*ph;
 p.ticks.forEach(v=>{const y=vy(v);line(s,px,y,px+pw,y,C.line,.6);text(s,v.toLocaleString('en-US'),p.x-.06,y-.1,.42,.2,9,{align:'right',color:C.muted});});
 months.forEach(([t,d])=>text(s,t,xt(Date.parse(d))-.36,5.72,.72,.2,9,{align:'center',color:C.muted}));
 const series=['Anthropic','OpenAI'].map(co=>recs.filter(r=>r.Metric===p.metric&&r.Company===co).sort((a,b)=>a.t-b.t).map(r=>({...r,x:xt(r.t),y:vy(r.v)})));
 const segs=[],marks=[],placed=[];
 series.forEach(pts=>{for(let k=1;k<pts.length;k++)segs.push([pts[k-1],pts[k]]);pts.forEach(q=>marks.push([q.x-.06,q.y-.06,.12,.12,q]));});
 const hit=(a,b)=>a[0]<b[0]+b[2]&&b[0]<a[0]+a[2]&&a[1]<b[1]+b[3]&&b[1]<a[1]+a[3];
 const crosses=r=>segs.some(([a,b])=>{for(let k=0;k<=40;k++){const x=a.x+(b.x-a.x)*k/40,y=a.y+(b.y-a.y)*k/40;if(x>r[0]-.02&&x<r[0]+r[2]+.02&&y>r[1]-.02&&y<r[1]+r[3]+.02)return true;}return false;});
 const inside=r=>r[0]>=px-.05&&r[0]+r[2]<=p.x+p.w+.05&&r[1]>=py-.12&&r[1]+r[3]<=bottom+.17;
 // 注释条放在左上空白，同样参与避让。
 p.chips.forEach(([t,fill,col],i)=>{const r=[px+.08,py+.02+i*.36,cw(t)+.12,.28];if(crosses(r))throw new Error('ARR chip crosses line: '+t);placed.push(r);rect(s,r[0],r[1],r[2],r[3],fill,true);text(s,t,r[0]+.06,r[1],r[2]-.12,r[3],10,{bold:true,color:col});});
 series.forEach((pts,j)=>{const color=j?C.sage:C.coral;segs.filter(([a])=>a.Company===pts[0].Company).forEach(([a,b])=>line(s,a.x,a.y,b.x,b.y,color,2.1));});
 const lh=.22,modes=[[-.5,-1,.08],[-.5,0,.08],[-1,-1,.07],[0,-1,.07],[-1,0,.07],[0,0,.07],[-1,-.5,.1],[0,-.5,.1],[-.5,-1,.3],[-.5,0,.3],[-1,-1,.3],[0,-1,.3],[-1,0,.3],[0,0,.3],[-1,-.5,.3],[0,-.5,.3],[-.5,-1,.55],[-.5,0,.55]];
 series.flat().sort((a,b)=>a.t-b.t).forEach(q=>{
  const label=p.metric==='ARR'?fmt(q.v):(vName[q.Event_or_Round]||q.Event_or_Round)+' '+fmt(q.v),w=cw(label);
  const cand=modes.map(([fx,fy,g])=>{const x=q.x+fx*w+(fx===0?g:fx===-1?-g:0),y=fy===-.5?q.y-lh/2:q.y+fy*lh+(fy===0?g:-g);return [x,y,w,lh];})
   .find(r=>inside(r)&&!placed.some(o=>hit(o,r))&&!marks.some(m=>m[4]!==q&&hit(m,r))&&!crosses(r));
  if(!cand)throw new Error('ARR label has no free slot: '+q.Company+' '+q.Date+' '+label);
  placed.push(cand);
  const color=q.Company==='OpenAI'?C.sage:C.coral,hollow=p.metric==='Valuation'&&!primary.has(q.Event_or_Round);
  s.addShape(q.Company==='OpenAI'?ST.ellipse:ST.rect,{x:q.x-.05,y:q.y-.05,w:.1,h:.1,fill:{color:hollow?C.white:color},line:{color,width:hollow?1.35:.5}});
  text(s,label,cand[0],cand[1],cand[2],cand[3],10,{bold:true,color:q.Company==='OpenAI'?C.sage:C.dark,align:'center'});
  plotted++;
 });
});
if(plotted!==recs.length)throw new Error('ARR record missing from visual');
footnote(s,'多来源汇总，非审计数字；ARR 为年化 run-rate，估值混合融资、回购、二级与 IPO 目标，空心点不可与实心点等同。');
takeaway(s,'追赶者也在进化：竞争把两条曲线一起推高。');
}
divider('PART 03','编码模型与 AGI','先把 AGI 说清楚，再回答：为什么是编码能力，以及还差多少。',[['3.1','AGI 指的是什么'],['3.2','为什么是编码'],['3.3','还有多远']],'引出第三章，不新增数据。');
// 3.1 定义页：只做定义与判断问题，不做进度评估（进度留给 3.3 门槛表）
{
const s=slide(ch3+' / 3.1','什么是 AGI？本场只用三条标准','每条标准配一个可以当场判断的问题。',
SRC.rd+'\nhttps://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',
'明确为本演讲的工作定义，不是业界统一判定标准，也没有公认的通过线。三条不是人类级通用智能的充分条件，满足三条也不等于AGI达成。本页只给定义与“怎么判断有没有”的问题，不给当前进度评分，避免与3.3门槛表重复。三条标准取自用户大纲原文表述，不借用任何厂商的能力分级。');
const pillars=[
 {n:'持续学习',e:'做完一件事，经验能留下来',q:'下一次遇到同类问题，是从零开始，还是接着上次？',fill:C.gray},
 {n:'自主使用工具',e:'没见过的接口，能自己接上',q:'缺一段工具时，它是停下来问，还是自己写一段？',fill:C.yp},
 {n:'自我迭代',e:'能改进“产生它自己”的那套工作',q:'它能不能让下一代比自己更强？',fill:C.pale}];
pillars.forEach((p,i)=>{const x=.8+i*4.14,w=3.66;box(s,x,2.5,w,3.4,p.fill);
 label(s,'0'+(i+1),x+.26,2.72,w-.52);
 text(s,p.n,x+.26,3.06,w-.52,.5,27,{bold:true,color:C.dark});
 text(s,p.e,x+.26,3.68,w-.52,.6,18,{bold:true});
 line(s,x+.26,4.42,x+w-.26,4.42,C.line,1);
 text(s,'怎么判断有没有',x+.26,4.52,w-.52,.26,11,{color:C.muted});
 text(s,p.q,x+.26,4.82,w-.52,.86,16);});
footnote(s,'这是本场采用的工作定义，不是业界统一判定标准；三条都满足也不等于已经是 AGI。');
takeaway(s,'三条都不是“更会答题”，而是“能不能独立地、持续地把事情做完”。');
}
// 21
{
const s=slide(ch3+' / 3.1','从给建议，到接下一段工作：自治的滑杆在右移','还是那件对账的事，四种不同的交付方式。','https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\n'+SRC.rd,'吸收Gemini第24页自治滑杆，与原AGI工作定义合并。四档是演讲交互框架，不是R&D AL等级、不代表线性技术成熟度或通用AGI认证。持续运行是需要调度/监控/权限/恢复的部署方式，不是所有Claude产品自动具备。工具使用、持续学习、自我迭代保留为工作框架，非必要充分判定。对账为教学示意。');
line(s,1.2,3.09,11.94,3.09,C.line,5);line(s,1.2,3.09,8.35,3.09,C.coral,5);const levels=[['建议','给我一个对账办法','我们照着做'],['协作','帮我写公式和脚本','我们边做边核对'],['任务委托','比对文件，列出异常','我们验收这一批结果'],['持续运行','每天跑，异常再找我','配好监控、权限和恢复']];
levels.forEach((r,i)=>{const x=.82+i*3.06;circle(s,x+.19,2.9,.38,i===3?C.sage:C.coral);text(s,String(i+1),x+.19,2.94,.38,.28,12,{bold:true,color:C.white,align:'center'});box(s,x,3.55,2.59,1.53,i===2?C.yp:C.gray);text(s,r[0],x+.19,3.76,2.21,.36,22,{bold:true,color:C.dark});text(s,r[1],x+.19,4.3,2.21,.35,15);text(s,r[2],x+.19,4.79,2.21,.24,11,{color:C.muted});});
text(s,'每往右一档，要多配的不是模型，而是这些：',.85,5.48,11.7,.35,19,{bold:true});const asks=[['授权范围','能碰哪些系统、哪些不能'],['可恢复','出错了怎么回退'],['审查量','谁来验收这一批结果']];asks.forEach((r,i)=>{const x=.83+i*4.13;box(s,x,6.01,3.66,.61,i===2?C.yp:C.gray);text(s,r[0],x+.18,6.08,1.1,.47,16,{bold:true,color:C.dark});text(s,r[1],x+1.34,6.08,2.16,.47,13);});
}
// 22
{
const s=slide(ch3+' / 3.2','代码既是数字义肢，也是造工具的“石斧”','这不是两条路线，而是同一个任务里交替出现的两种动作。',SRC.exec+'\n'+SRC.skills,'吸收Gemini第25页数字义肢/石斧比喻，保留目标→代码→结果的机制。比喻不援引人类进化史，不把编码等同可制造任何工具。文件/API调用必须获得授权；脚本需测试，结果需核对。对账工具为教学机制示意，不声称执行成功。文件匹配只能处理编码规则，不自动决定业务含义。');
box(s,.8,2.55,5.66,2.63,C.gray);box(s,6.9,2.55,5.66,2.63,C.yp);label(s,'数字义肢 · 用已有的工具',1.05,2.82,5.16);label(s,'石斧 · 为当前任务造一个工具',7.15,2.82,5.16);
circle(s,1.07,3.36,.86,C.pale);text(s,'{ }',1.07,3.55,.86,.38,23,{bold:true,color:C.dark,align:'center',fontFace:'Menlo'});text(s,'读取文件 → 调用接口\n拿到需要的数据',2.18,3.48,4.0,.79,20,{bold:true});text(s,'例如：读销售表、取已授权的银行流水',1.07,4.58,5.12,.32,15,{color:C.muted});
const toolSteps=[['缺一段','两个系统的订单编号不同'],['写一段','清洗编号 → 匹配金额\n标出差异']];toolSteps.forEach((r,i)=>{let yy=3.38+i*.76;text(s,r[0],7.15,yy,1.01,.34,18,{bold:true,color:C.dark});text(s,r[1],8.37,yy,3.9,.62,16);});
const result=[['目标','把两份账单对起来'],['脚本','把规则变成可运行的步骤'],['结果','异常清单 + 来源 + 校验']];result.forEach((r,i)=>{const x=.82+i*4.13;box(s,x,5.55,3.66,.6,C.gray);text(s,r[0],x+.14,5.7,.64,.26,13,{bold:true,color:C.dark});text(s,r[1],x+.88,5.7,2.62,.27,13);if(i<2)line(s,x+3.72,5.85,x+4.04,5.85,C.coral,1.4,true);});takeaway(s,'不只是学会用某个软件；遇到新问题，也能写出一小段适用的工具。');
}
// 23
{
const s=slide(ch3+' / 3.2','从软件世界，到物理世界：代码搭起最后一段桥','机制示意：代码在这条链路上承担哪一段。','机制示意；非Claude机器人实测或产品能力承诺','物理动作必须有被授权硬件、传感器反馈、保护系统；不能把API访问等同物理通用智能。');
// 闭环而非单向流程：物理世界会把结果打回来。
{const nodes=[
 {i:'01',n:'模型与代码',a:'理解目标',b:'写出操作逻辑',x:1.3,y:2.5,fill:C.gray},
 {i:'02',n:'设备接口与控制系统',a:'仿真器 · 设备 API',b:'机器人与实验平台',x:8.5,y:2.5,fill:C.gray},
 {i:'03',n:'物理动作',a:'在真实环境里执行',b:'一次就会留下后果',x:8.5,y:4.6,fill:C.yp},
 {i:'04',n:'传感器与测量',a:'回传实际发生了什么',b:'与预期对不上就要改',x:1.3,y:4.6,fill:C.yp}];
nodes.forEach(d=>{box(s,d.x,d.y,3.5,1.3,d.fill);label(s,d.i,d.x+.24,d.y+.16,1.0);
 text(s,d.n,d.x+.24,d.y+.42,3.02,.34,d.n.length>7?18:21,{bold:true,color:C.dark});
 text(s,d.a+'\n'+d.b,d.x+.24,d.y+.8,3.02,.44,14,{color:C.ink});});
line(s,4.9,3.15,8.4,3.15,C.coral,2.2,true);line(s,10.25,3.8,10.25,4.5,C.coral,2.2,true);
line(s,8.4,5.25,4.9,5.25,C.dark,2.2,true);line(s,3.05,4.5,3.05,3.8,C.dark,2.2,true);
box(s,5.3,3.52,2.75,1.26,C.pale);text(s,'每一步都要过这道闸',5.46,3.66,2.43,.3,15,{bold:true,color:C.dark,align:'center'});
text(s,'设备授权\n安全保护 · 仿真先验证\n现场随时可停',5.46,4.0,2.43,.68,13,{align:'center'});
footnote(s,'不是 Claude 机器人实测，也不是产品能力承诺。软件里失败只花一次重试；物理世界里失败可能不可逆。');}
takeaway(s,'编码提供连接能力；物理世界把可靠性与安全要求抬高了一个数量级。');
}
// 24
{
const s=slide(ch3+' / 3.3','AGI 还有多远？先看它是否开始参与自己的研发','Anthropic R&D Automation Index · 2026 年 8 月快照。',SRC.rd,'厂商原型指标自报：26% AL4 AI主导、人监督；>90% AL3+协作包含AL4，不相加；不是发现占比或26%模型改进，未报告AL5完全自主。');
kpi(s,.8,2.64,3.66,'26%','AI 主导研发工作','AL4 · 人类监督',C.pale);kpi(s,4.94,2.64,3.66,'>90%','至少 AI 协作','AL3+ · 包含 AL4',C.yp);
box(s,9.1,2.64,3.47,2.52,C.gray);text(s,'尚未报告',9.37,2.97,2.93,.48,23,{bold:true});text(s,'AL5\n完全自主研发',9.37,3.92,2.93,1.03,26,{bold:true,color:C.dark});
footnote(s,'AL1–AL5 是自动化层级：AL3 为 AI 协作，AL4 为 AI 主导、人类监督，AL5 为完全自主。厂商自报指标，AL3+ 与 AL4 为包含关系，不可相加。');
takeaway(s,'这比“模型更会答题”更重要：智能正在参与制造下一代智能。');
}
// 25
{
const s=slide(ch3+' / 3.3','下一轮智能，开始吃到上一轮智能的红利','这一步是机制推断，不是已经观测到的完整闭环。',SRC.rd,'RSI为可能的代际反馈机制；不等于完全自主递归改进已实现或智能爆炸已证实。创意、验证、算力与安全为约束。');
flow(s,[['当前智能','写代码、跑实验\n分析失败、构建评测'],['研发能力放大','减少工程等待\n增加可检验的尝试'],['后继智能','训练、评测、部署\n进入下一轮研发']]);
line(s,10.79,5.48,10.79,5.9,C.coral,1.8);line(s,10.79,5.9,2.49,5.9,C.coral,1.8,true);
takeaway(s,'编码模型之所以通向 AGI，是因为它能改进“产生智能的工作”。');
}
// 26
{
const s=slide(ch3+' / 3.3','距离 AGI，剩下的是哪些可观察的门槛？','不猜日期，只列可以观察、可以验证的判断点。','分析框架\nhttps://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents\n'+SRC.rd,'文件记忆和skills改善运行系统不等于权重持续学习。AI主导研发仍人监督；物理世界长期可靠性未由代码基准证明。');
table(s,['能力门槛','今天已经看到','真正需要跨过'],[['持续学习','记忆文件、Skills、状态恢复','稳定吸收新经验并迁移'],['长期自主','多步执行、测试、自我纠错','少接管、可恢复、长期可靠'],['研究迭代','AI 协作与主导部分研发','新方法的创造、复现与独立验证'],['物理连接','代码与接口可以接设备','开放环境中的可靠行动']],[2.2,4.7,4.8],.8,2.57,.73);
takeaway(s,'通道已打开；从强大的数字工作者，到可靠的通用智能，仍有硬门槛。');
}
// 27
{
const s=slide('结尾 / 回到两万亿','两万亿押注的，不是一个更好的代码补全工具','两万亿同时为这三层付钱，尽管它们的确定性完全不同。',[SRC.reuters,SRC.f,SRC.g,SRC.h,SRC.rd].join('\n'),'结尾为商业与技术方向性判断，非目标估值合理性的确定结论或投资建议。');
flow(s,[['第一层：已被证明','开发者与企业付费\n收入快速扩张'],['第二层：正在发生','编码能力外溢\n跨领域数字工作'],['第三层：未来溢价','AI 参与 AI 研发\n智能的代际反馈']]);
takeaway(s,'Anthropic 的故事：把“会编码的模型”，变成“会工作的智能”。');
}
// 28
{
const s=slide('结尾 / 回到我们的工作','当执行越来越便宜，什么更值钱？','同一件对账工作，重新分一次工。','组织方向性分析；对账教学样本；授权、隐私与生产操作责任保留在人类组织','吸收Gemini第31页执行廉价/判断稀缺的反问，与原角色结尾合并，不使用淘汰旧技能、伪工作、舰队统帅等贬抑或训导措辞。执行成本下降为方向性条件，不声称全部执行已无限廉价。具体30/600为第14页教学样本呼应；不将差额认定为漏款，不自动发起催收或改账。保留员工/研发/公司三方各一项具体落点，不构成员工必须如何工作的命令。');
box(s,.8,2.55,11.74,.57,C.gray);text(s,'脚本先做：搬数据、按规则匹配、算差额、整理清单',1.04,2.66,11.26,.34,18);text(s,'留给我们一起判断的，是这些：',.85,3.39,11.7,.37,20,{bold:true});
const judgments=[['什么值得做？','每天对全量，\n还是先查高风险订单？'],['怎样算做对？','30 元差额是手续费？\n600 元是没到账，还是退款？'],['下一步怎么办？','哪些需要联系客户？\n哪些要先找财务确认？']];judgments.forEach((r,i)=>{const x=.8+i*4.14;box(s,x,4.01,3.66,1.54,i===1?C.yp:C.gray);text(s,r[0],x+.22,4.23,3.22,.39,24,{bold:true,color:C.dark});text(s,r[1],x+.22,4.85,3.22,.51,17);});
text(s,'业务同事：留下规则和例外     研发：把流程接稳     公司：明确权限和责任',.85,5.95,11.7,.36,16,{color:C.muted});text(s,'如果少花一点时间搬数据，我们最想把时间留给哪件事？',.85,6.5,11.7,.4,23,{bold:true});
}
// 29 结束页：像素吉祥物按用户提供的参考图逐格重绘为原生方块，白底 coral，眼睛为镂空。
{
const s=pptx.addSlide();s.background={color:C.white};page++;
const grid=[
'....11111111111111111111111...',
'....11111111111111111111111...',
'....11111111111111111111111...',
'....11111111111111111111111...',
'....111..111111111111..1111...',
'....111..111111111111..1111...',
'....111..111111111111..1111...',
'....111..111111111111..1111...',
'111111111111111111111111111111',
'111111111111111111111111111111',
'111111111111111111111111111111',
'111111111111111111111111111111',
'111111111111111111111111111111',
'....11111111111111111111111...',
'....11111111111111111111111...',
'....11111111111111111111111...',
'....11111111111111111111111...',
'....11.11............11..11...',
'....11.11............11..11...',
'....11.11............11..11...',
'....11.11............11..11...',
'....11.11............11..11...'];
const cell=.135,mw=grid[0].length*cell,mx=(W-mw)/2,my=1.62;
grid.forEach((row,j)=>{let i=0;while(i<row.length){if(row[i]==='1'){let k=i;while(k<row.length&&row[k]==='1')k++;rect(s,mx+i*cell-.01,my+j*cell-.01,(k-i)*cell+.02,cell+.02,C.coral);i=k;}else i++;}});
text(s,'谢谢大家',0,4.95,W,.7,38,{bold:true,align:'center'});
text(s,String(page).padStart(2,'0'),12.06,7.01,.57,.25,10,{align:'right',color:C.muted});
registerNotes(s,{page,title:'谢谢大家',section:'结尾',source:'结束页',notes:'结束页：无数据。吉祥物为按参考像素图逐格重绘的原生方块图形，非 Claude Code 官方素材文件。'});speakerOnly(s,'接下来是讨论时间。');
}
pptx._slides.forEach(s=>{const row=slideMetadata.get(s);s.addNotes(row.source+'\n'+row.notes);});
fs.writeFileSync(path.join(__dirname,'slides.json'),JSON.stringify(manifest,null,2));
pptx.writeFile({fileName:path.join(__dirname,'Anthropic_2万亿IPO的背后_编码模型与AGI_Claude.pptx')}).then(()=>console.log('pages:',page));
