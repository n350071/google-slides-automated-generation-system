// --- 7. ユーティリティ関数群 ---
function createLayoutManager(pageW_pt, pageH_pt) {
  const pxToPt = (px) => px * 0.75;
  const baseW_pt = pxToPt(CONFIG.BASE_PX.W);
  const baseH_pt = pxToPt(CONFIG.BASE_PX.H);
  const scaleX = pageW_pt / baseW_pt;
  const scaleY = pageH_pt / baseH_pt;

  const getPositionFromPath = (path) => path.split('.').reduce((obj, key) => obj[key], CONFIG.POS_PX);
  return {
    scaleX, scaleY, pageW_pt, pageH_pt, pxToPt,
    getRect: (spec) => {
      const pos = typeof spec === 'string' ? getPositionFromPath(spec) : spec;
      let left_px = pos.left;
      if (pos.right !== undefined && pos.left === undefined) {
        left_px = CONFIG.BASE_PX.W - pos.right - pos.width;
      }
      return {
        left:   left_px !== undefined ? pxToPt(left_px) * scaleX : undefined,
        top:    pos.top !== undefined ? pxToPt(pos.top) * scaleY : undefined,
        width:  pos.width !== undefined ? pxToPt(pos.width) * scaleX : undefined,
        height: pos.height !== undefined ? pxToPt(pos.height) * scaleY : undefined,
      };
    }
  };

function offsetRect(rect, dx, dy) {  
  return { left: rect.left + (dx || 0), top: rect.top + (dy || 0), width: rect.width, height: rect.height };
}

function drawStandardTitleHeader(slide, layout, key, title) {  
  const logoRect = layout.getRect(`${key}.headerLogo`);
  const logo = slide.insertImage(CONFIG.LOGOS.header);
  const asp = logo.getHeight() / logo.getWidth();
  logo.setLeft(logoRect.left).setTop(logoRect.top).setWidth(logoRect.width).setHeight(logoRect.width * asp);

  const titleRect = layout.getRect(`${key}.title`);
  const titleShape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, titleRect.left, titleRect.top, titleRect.width, titleRect.height);
  setStyledText(titleShape, title || '', { size: CONFIG.FONTS.sizes.contentTitle, bold: true });

  const uRect = layout.getRect(`${key}.titleUnderline`);
  const u = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, uRect.left, uRect.top, uRect.width, uRect.height);
  u.getFill().setSolidFill(CONFIG.COLORS.primary_blue);
  u.getBorder().setTransparent();
}

function drawSubheadIfAny(slide, layout, key, subhead) {  
  if (!subhead) return 0;
  const rect = layout.getRect(`${key}.subhead`);
  const box = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, rect.left, rect.top, rect.width, rect.height);
  setStyledText(box, subhead, { size: CONFIG.FONTS.sizes.subhead, color: CONFIG.COLORS.text_primary });
  return layout.pxToPt(36);
}

function drawBottomBar(slide, layout) {  
const barRect = layout.getRect('bottomBar');
const bar = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, barRect.left, barRect.top, barRect.width, barRect.height);
bar.getFill().setSolidFill(CONFIG.COLORS.primary_blue);
bar.getBorder().setTransparent();
}

function drawBottomBarAndFooter(slide, layout, pageNum) {  
drawBottomBar(slide, layout);  
addGoogleFooter(slide, layout, pageNum);  
}

function addGoogleFooter(slide, layout, pageNum) {  
const leftRect = layout.getRect('footer.leftText');
const leftShape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, leftRect.left, leftRect.top, leftRect.width, leftRect.height);
leftShape.getText().setText(CONFIG.FOOTER_TEXT);
applyTextStyle(leftShape.getText(), { size: CONFIG.FONTS.sizes.footer, color: CONFIG.COLORS.text_primary });

if (pageNum > 0) {
  const rightRect = layout.getRect('footer.rightPage');
  const rightShape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, rightRect.left, rightRect.top, rightRect.width, rightRect.height);
  rightShape.getText().setText(String(pageNum));
  applyTextStyle(rightShape.getText(), { size: CONFIG.FONTS.sizes.footer, color: CONFIG.COLORS.primary_blue, align: SlidesApp.ParagraphAlignment.END });
}
}

function applyTextStyle(textRange, opt) {  
const style = textRange.getTextStyle();
style.setFontFamily(CONFIG.FONTS.family);
style.setForegroundColor(opt.color || CONFIG.COLORS.text_primary);
style.setFontSize(opt.size || CONFIG.FONTS.sizes.body);
style.setBold(opt.bold || false);
if (opt.align) {
  try { textRange.getParagraphs().forEach(p => p.getRange().getParagraphStyle().setParagraphAlignment(opt.align)); } catch (e) {}
}
}

function setStyledText(shapeOrCell, rawText, baseOpt) {  
const parsed = parseInlineStyles(rawText || '');
const tr = shapeOrCell.getText();
tr.setText(parsed.output);
applyTextStyle(tr, baseOpt || {});
applyStyleRanges(tr, parsed.ranges);
}

function setBulletsWithInlineStyles(shape, points) {  
  const joiner = '\n\n';
  let combined = '';
  const ranges = [];

  (points || []).forEach((pt, idx) => {
    const parsed = parseInlineStyles(String(pt || ''));
    const bullet = '• ' + parsed.output;
    if (idx > 0) combined += joiner;
    const start = combined.length;
    combined += bullet;
    parsed.ranges.forEach(r => {
      ranges.push({ start: start + 2 + r.start, end: start + 2 + r.end, bold: r.bold, color: r.color });
    });
  });

  const tr = shape.getText();
  tr.setText(combined || '• —');
  applyTextStyle(tr, { size: CONFIG.FONTS.sizes.body });

  try {
    tr.getParagraphs().forEach(p => {
      const ps = p.getRange().getParagraphStyle();
      ps.setLineSpacing(100);
      ps.setSpaceBelow(6);
    });
  } catch (e) {}

  applyStyleRanges(tr, ranges);
}
}

function parseInlineStyles(s) {  
  const ranges = [];
  let out = '';
  for (let i = 0; i < s.length;) {
    // [[青太字]]
    if (s[i] === '[' && s[i + 1] === '[') {
      const close = s.indexOf(']]', i + 2);
      if (close !== -1) {
        const content = s.substring(i + 2, close);
        const start = out.length;
        out += content;
        const end = out.length;
        ranges.push({ start, end, bold: true, color: CONFIG.COLORS.primary_blue });
        i = close + 2;
        continue;
      }
    }
    // **太字**
    if (s[i] === '*' && s[i + 1] === '*') {
      const close = s.indexOf('**', i + 2);
      if (close !== -1) {
        const content = s.substring(i + 2, close);
        const start = out.length;
        out += content;
        const end = out.length;
        ranges.push({ start, end, bold: true });
        i = close + 2;
        continue;
      }
    }
    out += s[i];
    i++;
  }
  return { output: out, ranges };
}

function applyStyleRanges(textRange, ranges) {  
  ranges.forEach(function(r) {
    try {
      const sub = textRange.getRange(r.start, r.end);
      if (!sub) return;
      const st = sub.getTextStyle();
      if (r.bold) st.setBold(true);
      if (r.color) st.setForegroundColor(r.color);
    } catch (e) {}
  });
}

function normalizeImages(arr) {  
  return (arr || []).map(function(v) {
    if (typeof v === 'string') return { url: v };
    if (v && typeof v.url === 'string') return { url: v.url, caption: v.caption || '' };
    return null;
  }).filter(Boolean).slice(0, 6);
}

function renderImagesInArea(slide, layout, area, images) {  
  if (!images || images.length === 0) return;
  const n = Math.min(6, images.length);
  let cols = 1, rows = 1;
  if (n === 1) { cols = 1; rows = 1; }
  else if (n === 2) { cols = 2; rows = 1; }
  else if (n <= 4) { cols = 2; rows = 2; }
  else { cols = 3; rows = 2; }

  const gap = layout.pxToPt(10);
  const cellW = (area.width - gap * (cols - 1)) / cols;
  const cellH = (area.height - gap * (rows - 1)) / rows;

  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / cols), c = i % cols;
    const left = area.left + c * (cellW + gap);
    const top  = area.top  + r * (cellH + gap);
    try {
      const img = slide.insertImage(images[i].url);
      const scale = Math.min(cellW / img.getWidth(), cellH / img.getHeight());
      const w = img.getWidth() * scale;
      const h = img.getHeight() * scale;
      img.setWidth(w).setHeight(h);
      img.setLeft(left + (cellW - w) / 2).setTop(top + (cellH - h) / 2);
    } catch(e) {}
  }
}

function isAgendaTitle(title) {  
  const t = String(title || '').toLowerCase();
  return /(agenda|アジェンダ|目次|本日お伝えすること)/.test(t);
}  
function buildAgendaFromSlideData() {
  const pts = [];
  for (const d of slideData) {
    if (d && d.type === 'section' && typeof d.title === 'string' && d.title.trim()) pts.push(d.title.trim());
  }
  if (pts.length > 0) return pts.slice(0, 5);
  const alt = [];
  for (const d of slideData) {
    if (d && d.type === 'content' && typeof d.title === 'string' && d.title.trim()) alt.push(d.title.trim());
  }
  return alt.slice(0, 5);
}

function drawArrowBetweenRects(slide, a, b, arrowH, arrowGap) {
  const fromX = a.left + a.width;
  const toX   = b.left;
  const width = Math.max(0, toX - fromX - arrowGap * 2);
  if (width < 8) return;
  const yMid = ((a.top + a.height/2) + (b.top + b.height/2)) / 2;
  const top = yMid - arrowH / 2;
  const left = fromX + arrowGap;
  const arr = slide.insertShape(SlidesApp.ShapeType.RIGHT_ARROW, left, top, width, arrowH);
  arr.getFill().setSolidFill(CONFIG.COLORS.primary_blue);
  arr.getBorder().setTransparent();
}
