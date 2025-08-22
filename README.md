# Google Slides 自動生成システム
AI・人間協働によるコード固定・データ可変アーキテクチャを採用したGoogleスライド自動生成システムです。

## 概要
このシステムは、企業環境でも安全に使用できるスライド自動生成ソリューションです。AIにコードを書かせるのではなく、人間が完璧な「工場（GASテンプレート）」を構築し、AIには「設計図（JSON）」だけを作らせることで、安定したスライド生成を実現します。

### 特徴
- 企業環境対応: Google Workspaceのみでスライド生成を完結
- 安定性重視: コード固定×データ可変アーキテクチャによる高い信頼性
- 豊富なパターン: 8種類のスライドパターンを標準搭載
- AI活用: LLM AIによるJSON設計図の自動生成

## アーキテクチャ
```
【従来のアプローチ】
入力 → AI（コード生成+設計） → 出力（エラー率高）

【新アプローチ】
入力 → AI（設計のみ） → 固定GASテンプレート → 安定した出力

【3層構造】
1. ユーザー入力（文字起こし・PDF・動画等）
2. AIによる構造化（JSON設計図生成）
3. 人間製GASテンプレート（堅牢な実行エンジン）
```

## サポートしているスライドパターン
1. title: タイトルスライド
2. section: 章扉スライド（背景にゴースト番号）
3. content: コンテンツスライド（1カラム/2カラム対応）
4. compare: 比較スライド（左右ボックス）
5. process: プロセススライド（ステップ表示）
6. timeline: タイムラインスライド
7. diagram: ダイアグラムスライド（レーン図）
8. cards: カードグリッドスライド
9. table: テーブルスライド
10. progress: 進捗表示スライド
11. closing: クロージングスライド

## ファイル構成
```
├── README.md                           # このファイル
├── prompt.md                           # AI用のマスタープロンプト
├── main.gs                            # メイン実行関数
├── master-design.gs                   # デザイン設定・レイアウト定義
├── setting.gs                         # 実行設定
├── slide-data.gs                      # スライドデータのサンプル
├── slide-generate-funcs.gs            # スライド生成関数群
├── utils.gs                          # ユーティリティ関数
├── dispatcher.gs                      # スライドタイプ別ディスパッチャ
└── 20250822-google-slides-automated-generation-system.md # 詳細仕様書
```

## 使用方法
### 1. 事前準備
1. Google Apps Scriptでプロジェクトを作成
2. 本リポジトリの`.gs`ファイルをすべてコピー
3. LLM AI（ChatGPT、Claude、Gemini等）のアクセス権限を確保

### 2. スライド生成手順
1. 入力準備: 文字起こし、PDF、会議録音などの素材を準備
2. AI設計: `prompt.md`のプロンプトをLLM AI（ChatGPT、Claude、Gemini等）に与え、JSON設計図を生成
3. コード実行: 生成されたコードをGoogle Apps Scriptに貼り付けて実行
4. 完成: Googleスライドが自動生成される

### 3. 基本的な実行
```javascript
// setting.gsで設定を変更後、main.gsを実行
function generatePresentation() {
  // スライドデータを元にプレゼンテーションを生成
}
```

## 設定
`setting.gs`で以下の設定を変更できます：

- `SHOULD_CLEAR_ALL_SLIDES`: 既存スライドをクリアするかどうか
- `TARGET_PRESENTATION_ID`: 対象プレゼンテーションID（nullの場合は現在のプレゼンテーション）

## 制限事項

- GAS実行時間制限: 最大6分
- スライド上限: 50枚
- 画像制約: 50MB未満・25MP以下のPNG/JPEG/GIF/WebP
- 高性能LLM AI（ChatGPT、Claude、Gemini等）での利用が前提

## 適用可能な環境

### 有用な状況
- 企業でGoogle Workspaceを利用している環境
- 外部AIサービスの利用に制限がある組織
- 定期的なプレゼン資料作成が必要な業務
- AIを活用した業務自動化の安定性を重視する場面

### 利用価値が低い状況
- 外部AIサービス（Gamma、manus等）を自由に使える環境
- スライド作成が単発かつ頻度が低い場合
- PowerPointなどGoogle以外のプレゼンツールメインの環境

## トラブルシューティング

- エラーが発生した場合は、細かくデバッグせず新規チャットでやり直すのが効率的
- プロンプトは元の形を保持し、基幹ロジックの改変は避ける
- 生成されるのはドラフトのため、内容確認・調整は必須

## ライセンス

MIT License

## 作者

- 設計思想・プロンプト: まじん
- 実装: Google Apps Script

## 関連リンク

- [詳細仕様書](./20250822-google-slides-automated-generation-system.md)
- [マスタープロンプト](./prompt.md)

