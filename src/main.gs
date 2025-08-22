// --- 4. メイン実行関数 ---
let __SECTION_COUNTER = 0; // 章番号カウンタ（ゴースト数字用）

function generatePresentation() {
  let presentation;
  try {
    presentation = SETTINGS.TARGET_PRESENTATION_ID
      ? SlidesApp.openById(SETTINGS.TARGET_PRESENTATION_ID)
      : SlidesApp.getActivePresentation();
    if (!presentation) throw new Error('対象のプレゼンテーションが見つかりません。');


    if (SETTINGS.SHOULD_CLEAR_ALL_SLIDES) {
      const slides = presentation.getSlides();
      for (let i = slides.length - 1; i >= 0; i--) slides[i].remove();
    }

    __SECTION_COUNTER = 0;

    const layout = createLayoutManager(presentation.getPageWidth(), presentation.getPageHeight());

    let pageCounter = 0;
    for (const data of slideData) {
      const generator = slideGenerators[data.type];
      if (data.type !== 'title' && data.type !== 'closing') pageCounter++;
      if (generator) {
        const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
        generator(slide, data, layout, pageCounter);

        // スピーカーノートを設定する処理
        if (data.notes) {
          try {
            const notesShape = slide.getNotesPage().getSpeakerNotesShape();
            if (notesShape) {
              notesShape.getText().setText(data.notes);
            }
          } catch (e) {
            Logger.log('スピーカーノートの設定に失敗しました: ' + e.message);
          }
        }
      }
    }

  } catch (e) {
    Logger.log('処理が中断されました: ' + e.message + '\nStack: ' + e.stack);
  }
}
