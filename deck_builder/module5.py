# -*- coding: utf-8 -*-
"""
Module 5: Part 5 - Appendices, Benchmark Database & Legal Disclaimer (Slides 43-45)
"""

SLIDES_5 = """
// ==========================================
// SLIDE 43: 附录 A：Claude 全代际评测进化与里程碑基准全景表
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '附录 A：Claude 全代际评测进化与里程碑基准全景表', 'Appendix A · Model Evolution', 43);

  const fullEvolutionRows = [
    [
      { text: '模型代际版本', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '发布时点', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '上下文窗口', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'SWE-bench Verified', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'SWE-bench Pro', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Terminal-Bench', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '里程碑技术突破与架构演进', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: 'Claude 1.0', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2023 Q1', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '9k tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '12.4%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'N/A', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'N/A', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'Constitutional AI 宪法级对齐，奠定零有害输出安全基调', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 2.0', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2023 Q3', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '100k tokens', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '18.2%', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: 'N/A', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '14.5%', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '行业首创 100k 长上下文，开始具备单仓库阅读与文档分析能力', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 3.0 Opus', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2024 Q1', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '200k tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '38.4%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '22.1%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '28.5%', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '首款全面超越 GPT-4 的全能大模型，复杂推理展现惊人常识', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 3.5 Sonnet', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2024 Q2', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '200k tokens', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9 } },
      { text: '49.2%', options: { fill: C.CARD_BG, color: C.CYAN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '35.6%', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9 } },
      { text: '36.8%', options: { fill: C.CARD_BG, color: C.CYAN, align: 'center', fontSize: 9 } },
      { text: '编码王座确立，引发全球程序员“大迁徙”，确立极致性价比心智', options: { fill: C.CARD_BG, color: C.CYAN, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 3.7 Sonnet', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2025 Q1', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '200k tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '70.3%', options: { fill: C.INNER_CARD, color: C.GOLD, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '54.2%', options: { fill: C.INNER_CARD, color: C.GOLD, align: 'center', fontSize: 9 } },
      { text: '46.8%', options: { fill: C.INNER_CARD, color: C.GOLD, align: 'center', fontSize: 9 } },
      { text: '混合动态推理架构（Hybrid Reasoning），根据问题复杂度动态自适应深思', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 4.5 Sonnet', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2025 Q3', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '500k tokens', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '84.6%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '78.4%', options: { fill: C.CARD_BG, color: C.GREEN, align: 'center', fontSize: 9 } },
      { text: '62.1%', options: { fill: C.CARD_BG, color: C.GREEN, align: 'center', fontSize: 9 } },
      { text: '推出全托管长程 Agentic Harness，多文件跨依赖重构进入全自动时代', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 5.0 Sonnet', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '2026 Q2', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '1M tokens', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '90.2%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9 } },
      { text: '88.5%', options: { fill: C.INNER_CARD, color: C.GREEN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '68.2%', options: { fill: C.INNER_CARD, color: C.GREEN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '跨语言自主编译测试闭环，全面接管企业内部 26% 真实工程研发任务', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 9 } }
    ],
    [
      { text: 'Claude 5.5 Sonnet', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '2026 Q4', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9 } },
      { text: '1M tokens', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9 } },
      { text: '94.5%', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9.5 } },
      { text: '91.2%', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 10 } },
      { text: '70.6%', options: { fill: '2A374A', color: C.GOLD, bold: true, align: 'center', fontSize: 10 } },
      { text: '登顶全球双料王座；ASL-3 安全下实现真正 RSI 递归演化；推动 $2T IPO', options: { fill: '2A374A', color: C.WHITE, align: 'left', fontSize: 9 } }
    ]
  ];

  slide.addTable(fullEvolutionRows, {
    x: 0.8, y: 1.45, w: 11.73,
    colW: [1.8, 1.0, 1.2, 1.5, 1.4, 1.4, 3.43],
    border: { type: 'solid', pt: 1, color: C.CARD_BORDER }
  });

  slide.addNotes('【演讲提示】附录 A 提供了 Anthropic 历史上全部 8 代核心模型的演进大表。从 Claude 1.0 的 12.4% 到 5.5 的 91.2%，数据清晰展示了一条不可阻挡的技术指数级跃迁曲线。');
}

// ==========================================
// SLIDE 44: 附录 B：全球前沿编码 Agent 竞品全景对照表
// ==========================================
{
  const slide = pres.addSlide();
  addHeader(slide, '附录 B：全球前沿编码 Agent 竞品全景对照表', 'Appendix B · Competitors Matrix', 44);

  const compRows = [
    [
      { text: '生态阵营 / 代表标的', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '旗舰模型 / 终端产品', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'SWE-Pro', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Terminal-4', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '单步稳定性', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '核心护城河与竞争优劣势综合诊断', options: { fill: '2A374A', color: C.WHITE, bold: true, align: 'left', fontSize: 9.5 } }
    ],
    [
      { text: 'Anthropic\\n(领跑者)', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: 'Claude 5.5 Sonnet\\nClaude Code CLI', options: { fill: '2A374A', color: C.WHITE, align: 'center', fontSize: 9 } },
      { text: '91.2%', options: { fill: '2A374A', color: C.CYAN, bold: true, align: 'center', fontSize: 10 } },
      { text: '70.6%', options: { fill: '2A374A', color: C.GOLD, bold: true, align: 'center', fontSize: 10 } },
      { text: '99.5%', options: { fill: '2A374A', color: C.GREEN, bold: true, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】开发者黏性第一、终端长程自愈无对手、AWS/GCP 中立阵营。\\n【潜在风险】算力依赖云厂商、估值倍数需超高增速消化。', options: { fill: '2A374A', color: C.WHITE, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: 'OpenAI\\n(双雄竞争)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'o3-mini / o3-full\\nCodex Agent', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '86.4%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '63.8%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '98.8%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】ChatGPT 消费级流量入口庞大、微软企业捆绑分销。\\n【潜在风险】管理层动荡、开发者心智流失、长程多步容易死锁。', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: 'Google\\n(生态挑战)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'Gemini 3.0 Pro\\nGoogle Workspace', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '68.2%', options: { fill: C.CARD_BG, color: C.RED, align: 'center', fontSize: 9.5 } },
      { text: '44.5%', options: { fill: C.CARD_BG, color: C.RED, align: 'center', fontSize: 9.5 } },
      { text: '96.2%', options: { fill: C.CARD_BG, color: C.RED, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】多模态原生能力、2M 超长上下文、全栈自研 TPU 算力底座。\\n【致命劣势】格式违规率高达 14%、补丁懒惰、安全严重误报拒答。', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: 'Meta\\n(多模态协同)', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'Meta Muse\\nLlama 4 Code 405B', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '72.0%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '51.2%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '97.5%', options: { fill: C.INNER_CARD, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】开源生态号召力、多模态创意流水线与 3D 渲染编排。\\n【潜在劣势】企业级合规支持不足、缺乏开箱即用的工业终端 Harness。', options: { fill: C.INNER_CARD, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ],
    [
      { text: '开源阵营\\n(DeepSeek/Qwen)', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: 'DeepSeek-V3 / Qwen 3\\nAider / Continue', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'center', fontSize: 9 } },
      { text: '74.8%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '54.0%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '97.8%', options: { fill: C.CARD_BG, color: C.TEXT_MAIN, align: 'center', fontSize: 9.5 } },
      { text: '【绝对优势】极致推理成本（前沿 1/5 售价）、企业私有化部署无安全担忧。\\n【关键瓶颈】百步以上超级长程自愈落后 6–9 个月、缺乏官方云调度服务。', options: { fill: C.CARD_BG, color: C.TEXT_MUTED, align: 'left', fontSize: 8.8 } }
    ]
  ];

  slide.addTable(compRows, {
    x: 0.8, y: 1.45, w: 11.73,
    colW: [1.8, 1.8, 1.1, 1.2, 1.1, 4.73],
    border: { type: 'solid', pt: 1, color: C.CARD_BORDER }
  });

  slide.addNotes('【演讲提示】附录 B 对比了全球五大阵营。数据清楚说明：Anthropic 在关键的 SWE-Pro、Terminal-Bench 和单步稳定性指标上全面领先，形成了深厚的技术代差。');
}

// ==========================================
// SLIDE 45: 尾页 / 研报免责声明与研究团队署名
// ==========================================
{
  const slide = pres.addSlide();
  slide.background = { color: C.BG_DARK };

  // Closing Card
  addCard(slide, 1.2, 1.3, 10.9, 4.9);

  slide.addShape(pres.ShapeType.rect, {
    x: 1.8, y: 1.7, w: 3.8, h: 0.35,
    fill: { color: C.INNER_CARD },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText('RESEARCH COMPLETED | OCTOBER 2026', {
    x: 1.8, y: 1.7, w: 3.8, h: 0.35,
    fontSize: 9.5, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', charSpacing: 1.5
  });

  slide.addText('迈向通用智能与硅基生产力的新纪元', {
    x: 1.8, y: 2.2, w: 9.7, h: 0.65,
    fontSize: 30, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
  });

  slide.addText('感谢全球投资机构与技术领导者的信任与同行。本研报基于公开数据、S-1 预披露信息、供应链调研与数学模型推演完成。', {
    x: 1.8, y: 2.95, w: 9.7, h: 0.5,
    fontSize: 12.5, fontFace: 'Arial', color: C.TEXT_MUTED
  });

  slide.addShape(pres.ShapeType.line, {
    x: 1.8, y: 3.65, w: 9.7, h: 0,
    line: { color: C.CARD_BORDER, width: 1 }
  });

  slide.addText('合规与免责声明 (LEGAL DISCLAIMER)：\\n本报告由全球前沿科技战略研究院 (Global Tech Strategy Institute) 出具，仅供合格机构投资者学术交流与战略研讨使用，不构成任何证券买卖的要约或投资建议。报告中的前瞻性财务预测、ARR 估算与模型跑分包含重大假设与风险，实际 IPO 挂牌价格及经营业绩可能与本报告推演存在实质性差异。', {
    x: 1.8, y: 3.85, w: 9.7, h: 1.1,
    fontSize: 9, fontFace: 'Arial', color: C.TEXT_DIM, lineSpacing: 13
  });

  // Footer Signatures
  slide.addText('主笔机构：全球科技战略研究院 (GTSI)  |  联合出品：Pre-IPO 特别调研组  |  首席分析师：Dr. Harrison Vance & Team', {
    x: 1.8, y: 5.4, w: 9.7, h: 0.35,
    fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true
  });

  slide.addNotes('【演讲提示】报告圆满结束。感谢各位投资人的聆听。未来已来，代码即是连接人类现实与通用智能的最终物理锚点。我们期待在 IPO 敲钟夜共同见证历史！');
}
"""
