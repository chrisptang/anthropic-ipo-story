# PPTX 制作记录

目标：使用在线安装的 Anthropic 官方 PPTX skill，完成内部学习演示稿。

1. 已完成：确认官方仓库并安装 `anthropics/skills/skills/pptx` 至 `~/.codex/skills/pptx`。
2. 已完成：按用户反馈重写为 30 页。第一篇解释 Claude 的工程能力与工作系统；第二篇解释训练反馈、评测与体验差异；第三篇解释代码作为行动语言、科研执行、RSI 与 AGI 能力边界。财务章节删除，资本背景压缩到开场一页。全篇直接面向读者展开。
3. 已完成：使用原始工程文章与产品发布重新核对来源，生成中文正文、2 个原生图表与 30 页带出处的备注。官方结构校验通过，LibreOffice 实际打开并导出 PDF，完成全部页面的渲染检查。

交付：`output/Anthropic 2 万亿 IPO 的背后：编码模型与 AGI_gpt.pptx` 及同名 PDF；生成源为仓库根目录 `build_learning_deck_gpt.cjs`，原生成入口指向新版。结构与渲染证据位于 `output/qa/gpt-v2/`，上一版已备份至 `output/archive/gpt-v1/`。

主要内容：2 万亿美元为 IPO 目标估值；Codex CLI / 云端分别为 2025-04-16 / 2025-05-16；最新模型表现采用 Sonnet 5.5 官方页面所列评测及配置；26% 为人类监督下的 AI 主导研发；连接泄漏、Nginx 与报销案例用于解释工程机制；50 步可靠性计算为明确假设下的数学示例。

技能来源：https://github.com/anthropics/skills/tree/main/skills/pptx
