# CLAUDE.md - Project Context

## Settings
### Language
- Primary Language: 日本語
- Secondary Language: English
- プロジェクトメンバーは日本人なので、日本語を基本としますが、必要に応じて英語も使用しても構いません。

### Communication Point between User and Agent
- Use `.claude/agents/spec/task.md` for task specifications
- Use `.claude/agents/spec/chat.md` for communication
- Use `.claude/agents/spec/references/*` for reference documents and so on
- Don't use `.claude/agents/spec/log/*`, because they were previous chats in case of the agent.

### Special file
- `.claude/agents/spec/chat.md`: Claudeとのコミュニケーション用
    - 会話の形式: session形式で、各sessionは、`# session N` で始まります。
    - 各sessionは、以下の形式で構成されます。
      - `## user`: これは私の名前です。 Claudeは(user)の発言を修正しません。
      - `## claude`: これはclaudeの発言です。
    - claudeは、`.claude/agents/spec/chat.md` を自動的に更新することで、私との会話を記録します。
    - claudeは、`# session N` を自動的に更新してはいけません。
    - claudeは、`## user` の段落内の発言を修正したり、生成してはいけません。
    - claudeは、`#`, `##` のレベルで見出しを使用してはいけません。
    - claudeは、`###`, `####`, `#####` などの見出しを使用することができます。
  - ClaudeCode must use the echo command with bash properly preserved the UTF-8 encoding for the Japanese text. Because ClaudeCode Write tool failed to save as UTF-8 when handling Japanese characters.

