---
title: コンポーネントのセットアップ
description: レコードページにSmarter Filesを追加・設定する方法。
---

import { Image } from 'astro:assets';
import appBuilder from '../../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../../assets/screenshots/app-builder-card-title.png';

## レコードページへの追加

1. **Lightning App Builder** で任意のレコードページを開きます。
2. コンポーネントパレットの *Custom — Managed* から **Smarter Files** を見つけます。
3. ページレイアウトの目的の領域にドラッグします。
4. 右側のパネルでデザインプロパティを設定します。
5. ページを保存してアクティブ化します。

<Image src={appBuilder} alt="Smarter Filesコンポーネントが選択されプロパティパネルが開いたLightning App Builder" />

## コンポーネントプロパティ

App Builderのサイドバーには8つのデザインプロパティが表示されます：

| プロパティ | 説明 | デフォルト |
|---|---|---|
| **Card Title** | コンポーネントのヘッダーテキスト。このインスタンスのカスタム表示ラベル `Tucario_Files_Card_Title` を上書きします。 | `Files` |
| **Storage Mode** | `Standard` — `ContentDocumentLink` 経由でファイルをリンク（標準ファイル関連リストに表示）。`Isolated` — `Tucario_File_Visibility__c` ジャンクションのみでファイルをリンク（標準ファイル関連リストから非表示、表示制御が有効）。[ストレージモード](/features/storage-modes/)を参照してください。 | `Standard` |
| **Display Mode** | ファイルの表示形式：`List`（メタデータ付きの縦並び行）または `Tiles`（ファイルタイプアイコン付きカードのグリッド）。 | `List` |
| **Default Sort Order** | 初期ソート順。ユーザーは実行時に変更できます。オプション：`date-newest`、`date-oldest`、`size-largest`、`size-smallest`、`name-az`、`name-za`。 | `date-newest` |
| **Initial Files Displayed** | 最初に表示するファイルの最大数。ファイルがこれ以上存在する場合は「すべて表示」リンクが表示されます。`0` に設定するとすべてのファイルを表示します。 | `5` |
| **Allowed File Extensions** | カンマ区切りの許可リスト（例：`pdf,docx,png`）。これらの拡張子のみアップロード可能です。空欄にするとすべてのタイプを許可します。 | *（空欄 — すべて許可）* |
| **Excluded File Extensions** | カンマ区切りのブロックリスト（例：`exe,bat,sh`）。これらの拡張子のアップロードはブロックされます。 | *（空欄 — なし）* |
| **Max File Size (MB)** | アップロードサイズの上限（メガバイト）。制限なしにするには `0` に設定します。 | `0` |

<Image src={cardTitle} alt="App BuilderでCard Titleプロパティを編集してコンポーネントヘッダーを上書きする画面" />

### アップロード制限ロジック

**Allowed** と **Excluded** の両方が設定されている場合、順番にチェックされます：

1. **許可リストを最初にチェック** — ファイルの拡張子が許可リストにない場合はブロックされます。
2. **除外リストを次にチェック** — 許可チェックを通過しても、拡張子が除外リストにある場合はブロックされます。

ファイルが受け入れられるには、許可リストに含まれ**かつ**除外リストに含まれていない必要があります。

:::tip
ほとんどの場合、2つの設定のうちどちらか一方で十分です。少数の既知のファイルタイプのみアップロードを許可したい場合は **Allowed** を使用します（例：`pdf,docx,xlsx`）。特定のタイプをブロックしてその他はすべて許可したい場合は **Excluded** を使用します（例：`exe,bat`）。
:::

## 配置のヒント

- レコードページのメインコンテンツ領域、サイドバー、または全幅領域で動作します。
- 標準またはカスタムオブジェクトの任意のレコードページに配置できます。
- 同じページに複数のインスタンスを配置できます — レコードを異なるファイル空間に分けるのに便利です（例：一般ファイル用のStandardモードインスタンスと機密ドキュメント用のIsolatedモードインスタンス）。区別するために異なる **Card Title** を設定してください。
- コンポーネントは**レコードページ専用**です。Configuration Wizardは、*Smarter Files by Tucario* のApp Launcherエントリから別のアプリページとしてアクセスできます。
