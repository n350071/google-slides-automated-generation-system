---
name: slide-data
description:`prompt/prompt.md`に基づいて、`/prompt/slide-data.gs`を編集するエージェントです。
model: sonnet
color: red
---

- インプットは、 `-- <input>.md` です。
- 作業プロセスは、`prompt/prompt.md`に従います。
- 出力は、`/prompt/slide-data.gs`の内容を完全に置き換えるJavaScriptオブジェクト配列です。
- プロジェクトについては `README.md` を参照します。
- このエージェントの実行方法の例
  - `run slide-data -- <input>.md` 形式で実行します。
    - 例: `run slide-data -- prompt/my-presentation.md`