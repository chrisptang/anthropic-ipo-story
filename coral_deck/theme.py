# -*- coding: utf-8 -*-
"""
Theme and helper definitions for Claude Coral Warm-White presentation.
100% Vector Shape graphics - Fully compatible with Apple Keynote & Microsoft PowerPoint.
High Visual Impact Edition: Dark Obsidian Transitions, Real macOS Terminal Windows, and Code Diffs.
"""

JS_HEADER = """const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33" x 7.5"
pres.author = 'Anthropic Frontier Strategy Research';
pres.company = 'Global Tech Strategy Institute';
pres.title = '编码模型与 AGI：Claude 登顶背后的人机演化史';

// Claude Signature Brand Palette (Warm Editorial Cream & High Impact Contrast)
const C = {
  BG_WARM: 'FBF9F5',        // Warm Editorial Cream background
  BG_DARK: '141210',        // Deep Obsidian Dark (for cinematic chapter dividers & terminals)
  SURFACE_WHITE: 'FFFFFF',  // Pure crisp white card
  SURFACE_SAND: 'F5F2EB',   // Warm Oyster Sand card
  SURFACE_MUTED: 'EFEBE1',  // Subtle container
  SURFACE_DARK: '1E1B18',   // Terminal & Code card body
  TITLEBAR_DARK: '2A2622',  // Terminal window title bar
  BORDER: 'E2DCD2',         // Subtle warm border
  BORDER_DARK: 'D1C9BC',    // Medium border
  BORDER_OBSIDIAN: '38332E',// Dark container border
  TEXT_MAIN: '1C1917',      // Deep warm charcoal (high contrast)
  TEXT_MUTED: '57534E',     // Warm stone body text
  TEXT_DIM: '8C857B',       // Muted captions
  TEXT_LIGHT: 'F5F5F4',     // Light text on dark
  TEXT_LIGHT_MUTED: 'A8A29E',// Muted light text
  CORAL: 'D97757',          // Anthropic Claude signature Coral
  CORAL_DEEP: 'C25E3E',     // Deep Terracotta
  CORAL_BG: 'FBF0EB',       // Coral tint badge background
  CORAL_BORDER: 'F0C2B2',   // Coral soft border
  AMBER: 'D97706',          // Warm Amber gold
  AMBER_BG: 'FEF3C7',
  GREEN: '16A34A',          // Emerald sage success
  GREEN_BG: 'DCFCE7',
  RED: 'DC2626',            // Crimson error / Gemini failure
  RED_BG: 'FEE2E2',
  SLATE: '475569',          // OpenAI slate blue
  SLATE_BG: 'F1F5F9',
  CODE_BG: '1E1B18',        // Deep obsidian charcoal for code
  CODE_TEXT: 'F5F5F4'       // Code text
};

// Standard Header for Content Slides (Warm Claude Aesthetic)
function addHeader(slide, title, category, slideNumber) {
  slide.background = { color: C.BG_WARM };
  
  // Category pill tag
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 0.42, w: 2.8, h: 0.28,
    fill: { color: C.CORAL_BG },
    line: { color: C.CORAL_BORDER, width: 1 }
  });
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.42, w: 2.8, h: 0.28,
    fontSize: 9, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', charSpacing: 1.2
  });

  // Slide Title
  slide.addText(title, {
    x: 0.8, y: 0.74, w: 10.8, h: 0.52,
    fontSize: 21, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true, margin: 0
  });

  // Slide Number
  slide.addText(String(slideNumber).padStart(2, '0'), {
    x: 12.0, y: 0.42, w: 0.8, h: 0.35,
    fontSize: 13, fontFace: 'Arial', color: C.TEXT_DIM, align: 'right', bold: true
  });
}

// Standard Card Box
function addCard(slide, x, y, w, h, fill = C.SURFACE_WHITE, border = C.BORDER) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: border, width: 1 }
  });
}

// High-Impact Cinematic Section Divider (Deep Obsidian Theme)
function addDarkDivider(slide, partNum, partTitle, subtitle, tag, slideNum) {
  slide.background = { color: C.BG_DARK };
  
  // Left Radiant Coral Accent Pillar
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 1.2, w: 0.15, h: 5.1,
    fill: { color: C.CORAL }
  });

  // Main Container Frame
  slide.addShape(pres.ShapeType.rect, {
    x: 1.3, y: 1.2, w: 11.2, h: 5.1,
    fill: { color: C.SURFACE_DARK },
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });

  // Tag Pill
  slide.addShape(pres.ShapeType.rect, {
    x: 1.9, y: 1.7, w: 3.4, h: 0.35,
    fill: { color: '261F1A' },
    line: { color: C.CORAL, width: 1 }
  });
  slide.addText(tag.toUpperCase(), {
    x: 1.9, y: 1.7, w: 3.4, h: 0.35,
    fontSize: 9.5, fontFace: 'Arial', color: C.CORAL, bold: true, align: 'center', charSpacing: 1.5
  });

  // Huge Glowing Part Number
  slide.addText(partNum, {
    x: 1.9, y: 2.3, w: 10.0, h: 0.75,
    fontSize: 38, fontFace: 'Arial', color: C.CORAL, bold: true, margin: 0, charSpacing: 1.5
  });

  // White Part Title
  slide.addText(partTitle, {
    x: 1.9, y: 3.15, w: 10.0, h: 0.85,
    fontSize: 30, fontFace: 'Arial', color: 'FFFFFF', bold: true, margin: 0
  });

  // Subtle separator line
  slide.addShape(pres.ShapeType.line, {
    x: 1.9, y: 4.15, w: 9.8, h: 0,
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });

  // Warm Subtitle
  slide.addText(subtitle, {
    x: 1.9, y: 4.35, w: 9.8, h: 0.85,
    fontSize: 15, fontFace: 'Arial', color: 'D6D0C7', margin: 0, lineSpacing: 22
  });

  // Slide Number
  slide.addText(String(slideNum).padStart(2, '0'), {
    x: 11.3, y: 1.5, w: 0.9, h: 0.45,
    fontSize: 16, fontFace: 'Arial', color: '666059', align: 'right', bold: true
  });
}

// Backward compatible alias
const addDivider = addDarkDivider;

// 100% Vector Shape Bar Graphic (Fully Keynote & PowerPoint Compatible)
function addShapeBarChart(slide, x, y, w, h, items, maxVal = 100) {
  addCard(slide, x, y, w, h, C.SURFACE_WHITE, C.BORDER);
  const rowH = (h - 0.6) / items.length;
  
  items.forEach((it, idx) => {
    const yRow = y + 0.3 + idx * rowH;
    // Label
    slide.addText(it.label, {
      x: x + 0.3, y: yRow, w: 2.6, h: 0.35,
      fontSize: 11, fontFace: 'Arial', color: C.TEXT_MAIN, bold: true
    });
    // Track background
    const barX = x + 3.0;
    const barW = w - 4.4;
    slide.addShape(pres.ShapeType.rect, {
      x: barX, y: yRow + 0.08, w: barW, h: 0.22,
      fill: { color: C.SURFACE_MUTED }
    });
    // Fill bar
    const filledW = Math.max(0.1, barW * (it.val / maxVal));
    slide.addShape(pres.ShapeType.rect, {
      x: barX, y: yRow + 0.08, w: filledW, h: 0.22,
      fill: { color: it.color || C.CORAL }
    });
    // Value text
    slide.addText(String(it.displayVal || (it.val + '%')), {
      x: barX + barW + 0.15, y: yRow, w: 1.1, h: 0.35,
      fontSize: 11, fontFace: 'Arial', color: it.color || C.CORAL, bold: true
    });
  });
}

// Real macOS Dark Terminal Window Simulation
function addTerminalWindow(slide, x, y, w, h, title, lines) {
  // Main Window Body
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h,
    fill: { color: C.SURFACE_DARK },
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });
  
  // Title Bar
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h: 0.36,
    fill: { color: C.TITLEBAR_DARK },
    line: { color: C.BORDER_OBSIDIAN, width: 1 }
  });

  // Traffic Light Buttons
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.15, y: y + 0.11, w: 0.14, h: 0.14, fill: { color: 'EF4444' } });
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.35, y: y + 0.11, w: 0.14, h: 0.14, fill: { color: 'F59E0B' } });
  slide.addShape(pres.ShapeType.ellipse, { x: x + 0.55, y: y + 0.11, w: 0.14, h: 0.14, fill: { color: '10B981' } });

  // Window Title
  slide.addText(title, {
    x: x + 0.8, y: y + 0.06, w: w - 1.6, h: 0.24,
    fontSize: 8.5, fontFace: 'Courier New', color: 'A8A29E', align: 'center', bold: true
  });

  // Terminal Lines
  const lineH = (h - 0.5) / lines.length;
  lines.forEach((ln, idx) => {
    const yLn = y + 0.44 + idx * lineH;
    slide.addText(ln.text, {
      x: x + 0.2, y: yLn, w: w - 0.4, h: lineH,
      fontSize: 8.5, fontFace: 'Courier New', color: ln.color || 'F5F5F4', bold: ln.bold || false
    });
  });
}
"""
