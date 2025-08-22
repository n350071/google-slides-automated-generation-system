// --- Generated Slide Data for Google Slides Automated Generation System ---
// Based on: AI×スライド自動生成の革新的アプローチ
// Content: 本質理解から実用まで完全ガイド

const slideData = [
  // Title slide
  {
    type: 'title',
    title: 'AI×スライド自動生成の革新的アプローチ',
    date: '2025.08.22',
    notes: '本日はお集まりいただきありがとうございます。AIを活用したスライド自動生成の新しいアプローチについて、本質的な理解から実用的な活用方法まで包括的にご説明いたします。'
  },

  // Section 1: What - 本質理解
  {
    type: 'section',
    title: '1. 本質理解（What）',
    sectionNo: 1,
    notes: '最初に、このシステムの本質的な価値と革新性について説明します。従来のアプローチとの違いを明確にし、なぜこの手法が重要なのかを理解していただきます。'
  },

  // Core message
  {
    type: 'content',
    title: '主題メッセージ：革新的アーキテクチャの提案',
    points: [
      'AIにコードを書かせるのではなく、**人間が完璧な「工場（GASテンプレート）」を構築**',
      'AIには「設計図（JSON）」だけを作らせる[[明確な役割分担]]',
      '企業環境でも使える**安定したスライド自動生成システム**を実現',
      'Google Workspaceのみで完結する[[セキュアな実装]]'
    ],
    notes: 'この革新的なアプローチの核心は、AIと人間の役割を明確に分担することです。従来の「AIに全てを任せる」アプローチから脱却し、それぞれの強みを活かした設計になっています。'
  },

  // Background knowledge - cards format
  {
    type: 'cards',
    title: '前提知識・背景知識',
    subhead: '理解に必要な基礎概念',
    columns: 2,
    items: [
      { title: 'Google Apps Script（GAS）', desc: 'GoogleサービスをJavaScriptで操作する[[プラットフォーム]]' },
      { title: 'AI能力と限界', desc: 'Geminiの**特性理解**と適切な活用方法' },
      { title: '企業IT統制', desc: '外部AIツール利用制限と[[セキュリティ要件]]' },
      { title: 'プロンプトエンジニアリング', desc: '従来手法の**課題と新しいアプローチ**' }
    ],
    notes: 'これらの背景知識があることで、なぜこのアプローチが必要だったのか、そしてなぜ効果的なのかを理解していただけます。'
  },

  // Motivation - content format
  {
    type: 'content',
    title: 'モチベーション：企業環境の制約を創造の源泉に',
    points: [
      '企業環境では外部のスライド生成AIサービス（**manus、Gamma等**）がセキュリティ上利用不可',
      'Google Workspaceのみでスライド自動生成を[[完結させる必要性]]',
      'シンプルなプロンプトでAIにGAS生成を依頼→**構文エラーで動作しない問題**',
      '約半年間の研究を経て発見した[[革新的解決策]]'
    ],
    notes: '制約は時として創造性を生み出します。企業環境の制限が、かえってより良いソリューションの発見につながった例です。'
  },

  // Key points - cards format
  {
    type: 'cards',
    title: '重要ポイント抽出',
    subhead: 'システムの核心となる5つの革新',
    columns: 3,
    items: [
      { title: '「コード固定×データ可変」アーキテクチャ', desc: 'AIにコード生成させず、人間が**堅牢なテンプレート**を構築' },
      { title: '段階的責任分担', desc: '人間が「工場（GASテンプレート）」、AIが「[[設計図（JSON）]]」を担当' },
      { title: '企業制約への対応', desc: 'Google Workspaceのみでスライド生成を**完結**' },
      { title: '8種類のスライドパターン', desc: 'content、compare、process、timeline等の[[豊富なテンプレート]]' },
      { title: '自己検証機能', desc: 'AIが出力前に**自分で品質チェック**する仕組み' }
    ],
    notes: 'これらの5つのポイントが組み合わさることで、従来にない安定性と実用性を実現しています。'
  },

  // Section 2: Usefulness
  {
    type: 'section',
    title: '2. 有用性',
    sectionNo: 2,
    notes: 'このシステムがどのような価値を提供するのか、どんな場面で有効なのかを具体的に説明します。'
  },

  // Reader value - content format
  {
    type: 'content',
    title: '読み手への価値',
    subhead: '3つの課題を抱える人々への解決策',
    points: [
      '企業環境でスライド作成を自動化したいが**外部AIツール使用不可**の制約',
      'AIを使った業務自動化で**安定性に課題**を感じている人',
      'GASでのスライド生成に[[挫折した経験]]がある人',
      '実用的なソリューションと**設計思想の両方**を学べる'
    ],
    notes: 'これらの課題を抱える方々にとって、このシステムは単なるツールではなく、新しい発想の転換点となるでしょう。'
  },

  // Applicability comparison
  {
    type: 'compare',
    title: '適用可能性の判断基準',
    subhead: '有用な状況 vs 価値が低い状況',
    leftTitle: '有用な状況',
    leftItems: [
      '企業でGoogle Workspaceを利用',
      '外部AIサービスの利用制限あり',
      '定期的なプレゼン資料作成が必要',
      'AI活用の安定性を重視'
    ],
    rightTitle: '利用価値が低い状況',
    rightItems: [
      '外部AIサービスを自由に使える',
      'スライド作成が単発で低頻度',
      'Google以外のツールがメイン',
      '高度にカスタマイズされたデザインが必要'
    ],
    notes: '適用可能性を事前に判断することで、導入効果を最大化できます。境界線となる状況についても検討が重要です。'
  },

  // Section 3: Digest
  {
    type: 'section',
    title: '3. 簡潔なダイジェスト',
    sectionNo: 3,
    notes: '複雑なシステムを理解しやすくするため、前提知識から実装手順まで整理して説明します。'
  },

  // Architecture comparison
  {
    type: 'diagram',
    title: 'アーキテクチャの比較：従来 vs 新アプローチ',
    subhead: '3層構造による安定性の実現',
    lanes: [
      {
        title: '従来のアプローチ',
        items: [
          '入力',
          'AI（コード生成+設計）',
          '出力（エラー率高）'
        ]
      },
      {
        title: '新アプローチ',
        items: [
          'ユーザー入力',
          'AI（設計のみ）',
          '固定GASテンプレート',
          '安定した出力'
        ]
      }
    ],
    notes: '新アプローチでは3層構造を採用し、各層の責任を明確に分離することで安定性を向上させています。'
  },

  // Implementation process
  {
    type: 'process',
    title: '実装手順：5ステップで完成',
    subhead: '事前準備から完成まで',
    steps: [
      '**事前準備**: 8種類のスライドパターンを含む堅牢なGASテンプレートを構築',
      '**入力**: Geminiに専用プロンプトと素材（文字起こし・PDF等）を渡す',
      '**設計**: AIがJSON形式の設計図を生成（パターンと順番を決定）',
      '**実行**: GoogleスライドでGASを開き、生成されたコードを貼り付けて実行',
      '**完成**: テキスト・図形・スピーカーノート付きのスライドが自動生成'
    ],
    notes: 'この5ステップのプロセスにより、複雑な処理を段階的に、確実に実行できます。各ステップでの品質チェックも重要です。'
  },

  // Section 4: Deep dive
  {
    type: 'section',
    title: '4. 掘り下げる・拡げる',
    sectionNo: 4,
    notes: 'より深い理解と応用のために、関連する技術や発展的な内容について説明します。'
  },

  // Deep dive topics - cards
  {
    type: 'cards',
    title: '掘り下げるべき技術領域',
    subhead: '更なる理解と発展のために',
    columns: 3,
    items: [
      { title: 'Google Apps Script', desc: '**公式ドキュメント**とSlides API詳細の理解' },
      { title: 'プロンプトエンジニアリング', desc: '理論と[[実践事例]]の体系的学習' },
      { title: 'AI品質管理', desc: '確率的性質への対応と**品質管理手法**' },
      { title: '企業ITガバナンス', desc: 'セキュリティポリシー設計の[[考慮点]]' },
      { title: 'JSON Schema設計', desc: '**バリデーション手法**と構造化のベストプラクティス' }
    ],
    notes: 'これらの技術領域を深く理解することで、システムのカスタマイズや拡張が可能になります。'
  },

  // Related knowledge
  {
    type: 'cards',
    title: '関連知識とパラダイム',
    subhead: '類似アプローチと設計パターン',
    columns: 3,
    items: [
      { title: 'NoCode/LowCode', desc: '類似の**開発効率化**アプローチ' },
      { title: 'テンプレートエンジン', desc: '固定構造×[[可変データ]]の設計パターン' },
      { title: 'AIオーケストレーション', desc: '複数AI機能の**組み合わせ技術**' },
      { title: 'デザインシステム', desc: '一貫性のある[[UI/UX構築]]手法' },
      { title: 'CI/CD', desc: '自動化と**品質保証**の開発手法' }
    ],
    notes: 'これらの関連知識を理解することで、より広い視野でシステムを捉え、応用の可能性を広げることができます。'
  },

  // Section 5: Practical application
  {
    type: 'section',
    title: '5. 実際に役立てる',
    sectionNo: 5,
    notes: '理論から実践へ。このシステムを実際の業務でどう活用するかを具体的に説明します。'
  },

  // Perspective levels
  {
    type: 'content',
    title: '視点を変えた価値の理解',
    subhead: '高い視点・低い視点・移した視点',
    twoColumn: true,
    columns: [
      [
        '**高い視点**：AIと人間の協働における役割分担の重要性',
        '技術制約を[[創造の源泉]]に変える発想',
        'ガバナンスと効率性の**バランス実現**'
      ],
      [
        '**低い視点**：明日から実践できる具体的ソリューション',
        '週次レポートや月次プレゼン作成の[[即効性]]',
        '非エンジニアでも取り組める**AI活用の第一歩**'
      ]
    ],
    notes: '同じシステムでも、見る視点によって異なる価値が見えてきます。戦略的価値から日常業務への応用まで多面的に捉えることが重要です。'
  },

  // Application areas
  {
    type: 'cards',
    title: '応用可能な分野',
    subhead: '「固定テンプレート×AI設計」の汎用性',
    columns: 2,
    items: [
      { title: '教育分野', desc: '授業資料作成の**自動化**' },
      { title: '医療分野', desc: '症例発表資料の[[効率的作成]]' },
      { title: '営業分野', desc: '提案書作成の**標準化と高速化**' },
      { title: '文書生成', desc: 'レポート作成など[[他の自動化領域]]への適用' }
    ],
    notes: 'このアプローチの汎用性は高く、スライド作成以外の様々な分野での応用が期待できます。'
  },

  // Next actions
  {
    type: 'process',
    title: '具体的なNext Action',
    subhead: '今すぐ始められる5つのステップ',
    steps: [
      '**Gemini 2.5 Pro**のアクセス準備',
      '記事内の[[マスタープロンプト]]をコピー',
      '手持ちの資料（**会議録音の文字起こし**や既存PDF資料）を1つ選定',
      'Googleスライドで[[新規ファイル]]作成',
      '実際に一度実行してみて**動作確認**'
    ],
    notes: 'まずは小さく始めて、システムの動作を実際に体験してみることが重要です。エラーが出た場合は細かくデバッグせず新規チャットでやり直すのが効率的です。'
  },

  // Section 6: Limitations
  {
    type: 'section',
    title: '6. 補足情報',
    sectionNo: 6,
    notes: '最後に、このシステムの限界と注意点、そして関連リソースについて整理します。'
  },

  // Limitations table
  {
    type: 'table',
    title: '限界と注意点',
    subhead: '導入前に理解すべき制約事項',
    headers: ['項目', '制約内容', '対応策'],
    rows: [
      ['出力品質', 'AIが生成するのはあくまで**ドラフト**', '内容確認・調整は必須'],
      ['前提条件', '高性能なLLM（Gemini 2.5 Pro等）が必要', '[[適切なモデル]]の選択'],
      ['システム改変', '基幹ロジックの改変は**動作不良**のリスク', '慎重な変更管理'],
      ['処理制限', 'GAS実行時間制限（6分）による制約', '[[段階的実行]]の検討'],
      ['デザイン', '基本テンプレートの範囲内に限定', '**拡張性の事前検討**']
    ],
    notes: 'これらの制約を理解した上で導入することで、期待値の調整と適切な運用が可能になります。'
  },

  // Related resources
  {
    type: 'cards',
    title: '関連リソース',
    subhead: '更なる学習と発展のために',
    columns: 3,
    items: [
      { title: 'Google Apps Script公式ドキュメント', desc: '**基礎から応用**まで網羅' },
      { title: 'Gemini API仕様書', desc: 'AIの[[活用方法]]詳細' },
      { title: 'プロンプトエンジニアリング研究論文', desc: '**理論的背景**の理解' },
      { title: '企業ITガバナンス関連書籍', desc: '[[統制要件]]の体系的理解' },
      { title: 'NoCode/LowCode事例研究', desc: '**類似アプローチ**の参考事例' }
    ],
    notes: 'これらのリソースを活用することで、システムの理解を深め、より効果的な活用が可能になります。'
  },

  // Closing slide
  {
    type: 'closing',
    notes: '以上で「AI×スライド自動生成の革新的アプローチ」についての説明を終わります。このシステムが皆様の業務効率化と創造性向上の一助となれば幸いです。ご清聴ありがとうございました。何かご質問はございますでしょうか。'
  }
];