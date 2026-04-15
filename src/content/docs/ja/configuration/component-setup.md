---
title: コンポーネント設定
description: レコードページにSmarter Filesを追加・設定する方法。
---

## レコードページへの追加

1. **Lightning App Builder**で任意のレコードページを開きます。
2. コンポーネントパレットから**Smarter Files**を見つけます。
3. ページレイアウトの目的の領域にドラッグします。
4. ページを保存して有効化します。

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/put-on-flexipage.mp4" type="video/mp4" />
</video>

## コンポーネントプロパティ

![App Builderの設定パネル](/docs/storagemode-isolated.png)

以下のプロパティがLightning App Builderのサイドバーで利用できます：

| プロパティ | 説明 | デフォルト |
|---|---|---|
| **Card Title** | コンポーネントのヘッダーテキスト | `Files` |
| **Storage Mode** | `Standard` — ContentDocumentLink経由でファイルをリンク（ファイル関連リストに表示）。`Isolated` — ジャンクションレコードのみでファイルをリンク（ファイル関連リストから非表示、表示制御が有効）。 | `Standard` |
| **Display Mode** | ファイルの表示方法：`List`（縦並びの行）または`Tiles`（カードのグリッド） | `List` |
| **Default Sort Order** | ファイルリストの初期ソート順。ユーザーは実行時に変更可能。オプション：`date-newest`、`date-oldest`、`size-largest`、`size-smallest`、`name-az`、`name-za` | `date-newest` |
| **Initial Files Displayed** | 最初に表示されるファイルの最大数。`0`に設定するとすべてのファイルを表示。ファイルが多い場合は「Show All」リンクが表示されます。 | `5` |
| **Allowed File Extensions** | カンマ区切りの拡張子ホワイトリスト（例：`pdf,docx,png`）。これらのタイプのみアップロード可能。空欄にするとすべてのタイプを許可。 | すべてのタイプ |
| **Excluded File Extensions** | カンマ区切りの拡張子ブラックリスト（例：`exe,bat,sh`）。これらのタイプはアップロードがブロックされます。 | なし |
| **Max File Size (MB)** | アップロードの最大ファイルサイズ（メガバイト）。`0`に設定すると制限なし。 | `0`（制限なし） |

### アップロード制限ロジック

**Allowed**と**Excluded**の両方のファイル拡張子が設定されている場合、それらは連携して動作します：

1. **許可リストが最初にチェックされます** — ファイルの拡張子が許可リストにない場合、ブロックされます。
2. **除外リストが次にチェックされます** — ファイルが許可チェックを通過しても、拡張子が除外リストにある場合はブロックされます。

つまり、ファイルが受け入れられるには、許可リストに含まれ**かつ**除外リストに含まれていない必要があります。

:::tip
ほとんどの場合、2つの設定のうち1つだけで十分です。アップロードを少数の既知のタイプに制限したい場合は**Allowed**を使用します（例：`pdf,docx,xlsx`）。特定のタイプをブロックしてその他はすべて許可したい場合は**Excluded**を使用します（例：`exe,bat`）。
:::

## 配置のヒント

- メインコンテンツ領域、サイドバー、または全幅領域で動作します。
- 標準またはカスタムオブジェクトの任意のレコードページに配置できます。
- 同じページに複数のインスタンスを配置できます（例：タブごとに異なる設定）。
