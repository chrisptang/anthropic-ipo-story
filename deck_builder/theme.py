# -*- coding: utf-8 -*-
"""
Theme and helper definitions for PPTX generation.
"""

JS_HEADER = """const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33" x 7.5"
pres.author = 'Anthropic Pre-IPO Research Team';
pres.company = 'Global Tech Strategy Institute';
pres.title = 'Anthropic 2 万亿 IPO 的背后：编码模型与 AGI';

// Color Palette (Hex WITHOUT #)
const C = {
  BG_DARK: '0B0F19',
  CARD_BG: '1E293B',
  CARD_BORDER: '334155',
  TEXT_MAIN: 'F8FAFC',
  TEXT_MUTED: '94A3B8',
  TEXT_DIM: '64748B',
  CYAN: '38BDF8',
  GOLD: 'F59E0B',
  GREEN: '10B981',
  RED: 'F43F5E',
  PURPLE: '818CF8',
  WHITE: 'FFFFFF',
  INNER_CARD: '0F172A',
  ROW_ALT: '162032'
};

// Standard Header for Content Slides
function addHeader(slide, title, category, slideNumber) {
  slide.background = { color: C.BG_DARK };
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.42, w: 9.5, h: 0.28,
    fontSize: 10.5, fontFace: 'Arial', color: C.CYAN, bold: true, charSpacing: 1.5
  });
  slide.addText(title, {
    x: 0.8, y: 0.72, w: 10.8, h: 0.55,
    fontSize: 21, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText(String(slideNumber).padStart(2, '0'), {
    x: 12.0, y: 0.42, w: 0.8, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right', bold: true
  });
}

// Standard Card Box
function addCard(slide, x, y, w, h, bgColor = C.CARD_BG, borderColor = C.CARD_BORDER) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: bgColor },
    line: { color: borderColor, width: 1 }
  });
}

// Section Divider Slide
function addSectionDivider(slide, partNum, partTitle, subtitle, tag, slideNum) {
  slide.background = { color: C.BG_DARK };
  addCard(slide, 1.2, 1.4, 10.9, 4.7);
  
  slide.addShape(pres.ShapeType.rect, {
    x: 1.8, y: 1.9, w: 3.2, h: 0.35,
    fill: { color: C.INNER_CARD },
    line: { color: C.CYAN, width: 1 }
  });
  slide.addText(tag.toUpperCase(), {
    x: 1.8, y: 1.9, w: 3.2, h: 0.35,
    fontSize: 10, fontFace: 'Arial', color: C.CYAN, bold: true, align: 'center', charSpacing: 1.5
  });
  
  slide.addText(partNum, {
    x: 1.8, y: 2.45, w: 9.7, h: 0.55,
    fontSize: 28, fontFace: 'Arial', color: C.GOLD, bold: true, margin: 0
  });
  slide.addText(partTitle, {
    x: 1.8, y: 3.1, w: 9.7, h: 0.8,
    fontSize: 34, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });
  slide.addText(subtitle, {
    x: 1.8, y: 4.1, w: 9.7, h: 0.8,
    fontSize: 15, fontFace: 'Arial', color: C.TEXT_MUTED, margin: 0, lineSpacing: 22
  });
  slide.addText(String(slideNum).padStart(2, '0'), {
    x: 11.0, y: 1.7, w: 0.8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: C.TEXT_MUTED, align: 'right', bold: true
  });
}
"""
