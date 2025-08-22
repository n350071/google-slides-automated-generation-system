// --- 5. スライド生成ディスパッチャ ---
const slideGenerators = {
  title:    createTitleSlide,
  section:  createSectionSlide,
  content:  createContentSlide,
  compare:  createCompareSlide,
  process:  createProcessSlide,
  timeline: createTimelineSlide,
  diagram:  createDiagramSlide,
  cards:    createCardsSlide,
  table:    createTableSlide,
  progress: createProgressSlide,
  closing:  createClosingSlide
};
