---
trigger: always_on
---

---

## applyTo: '\*\*'

# Commit Message 指南 (Based on folder and filename)

使用 使用資料夾名稱與檔名 (e.g. "tree", "binary-tree-inorder-traversal.js") 作為每次提交開頭，確保訊息可看出題目類別與內容。

## 格式

```
<動作>: <分類>/<題目>
```

## 範例

```
Add: string - reverse-integer
```

## 內文建議 (可選)

- 背景：本次異動目的 (如：新增、增強、修正、重構)
- 位置摘要：說明主要影響的目錄/模組
- 變更類型：feat / fix / refactor / docs / chore / test / perf / build
- 依賴：新增或調整的外部套件 (若有)

## Changed Files 區塊

以清單列出檔案與簡述：

```
Changed:
- src/sensors/temperature.ts: 新增溫度讀取函式
- src/sensors/humidity.ts: 抽離共用解析邏輯
- README.md: 更新 XXX 說明
```

## 命名與語氣

- 摘要使用動詞原形或過去式皆可，保持一致
- 不使用冗長敘述與主觀語氣
- 避免含糊字詞 (e.g. "feat", "misc", "update stuff")

## 驗收清單 (可選)

```
Checklist:
- [ ] 已更新 README Day <x> 區段
- [ ] 相關測試新增或通過
- [ ] 無破壞既有 API
```

## 快速模板

```
<動作>: <分類>/<題目>

<optional background / rationale>

Changed:
- <file>: <reason>
- <file>: <reason>

Checklist:
- [ ] Do something
- [ ] Tests pass
```

保持單一提交專注於同一分類的題目，不同分類題目請分開提交。
