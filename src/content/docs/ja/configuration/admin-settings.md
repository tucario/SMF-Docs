---
title: 管理者設定
description: Smarter Filesの権限セット、カスタムオブジェクト、メタデータ駆動型設定。
---

## 権限セット

パッケージには3つの権限セットが含まれています。コンポーネントを使用するすべてのユーザーには、少なくとも基本権限セットが必要です。

| 権限セット | 対象 | 付与内容 |
|---|---|---|
| **Tucario Files** *（基本）* | コンポーネントのすべてのユーザー | アプリアクセス（「Smarter Files by Tucario」）、`Tucario_File_Visibility__c` ジャンクションオブジェクトへのCRUD、`TucarioFileDownloadController` および `TucarioVisibilityController` へのアクセス |
| **Tucario - Manage File Categories** | 管理者およびカテゴリオーナー | カスタム権限 `Tucario_Manage_Categories` — 「Set Category」でファイルにカテゴリを割り当て、カテゴリフィルタリングをバイパス（この権限を持つユーザーは常にすべてのファイルを閲覧できます） |
| **Tucario - View Private Documents** | 管理者、HR、コンプライアンス担当者 | カスタム権限 `Tucario_View_Private_Documents` — 他のユーザーがプライベートに設定したファイルを閲覧 |

:::caution
**Tucario Files** は読み取り専用ユーザーにも必要です。この権限がないと、表示を制御するジャンクションオブジェクトを読み取れないため、コンポーネントはアクセス拒否の状態を表示します。
:::

## アップロード制限

許可する拡張子、除外する拡張子、最大サイズなどのアップロードルールは、グローバルではなく**コンポーネントインスタンスごと**にApp Builderのデザインプロパティで設定します。詳細なプロパティ一覧については[コンポーネントのセットアップ](/configuration/component-setup/)を参照してください。

これにより、異なるレコードページで異なるアップロードルールを設定したり、同一レコードページ内の複数インスタンスにそれぞれ異なるルールを適用したりすることができます。

## 表示ルール — `Tucario_Visibility_Rule__mdt`

表示ルールはカスタムメタデータ型レコードとして保存され、[Configuration Wizard](/features/visibility-controls/#configuring-visibility-rules) を通じて管理します。Setupで直接編集はしません。

| フィールド | 型 | 目的 |
|---|---|---|
| **Category** | テキスト | ドキュメントタイプ名（例：`HR Documents`、`Contracts`）。ファイルはこの文字列を `Visibility_Category__c` フィールドで参照します。 |
| **Permitted Roles** | 長いテキストエリア | セミコロン区切りのロール `DeveloperName` 値のリスト（例：`CEO;HR_Manager;HR_Specialist`）。一致するロールを持つユーザーがこのカテゴリのファイルを閲覧できます。 |
| **Is Active** | チェックボックス | ルールが適用されているかどうか。非アクティブなルールは存在しないものとして扱われます（カテゴリはデフォルトでオープンに戻ります）。 |
| **Description** | テキスト | カテゴリの内容に関する管理者向けの説明。 |

:::note
ウィザードからカテゴリを「削除」すると、レコードは削除されずに**無効化**（`Is_Active = false`）されます。SalesforceメタデータAPIはApexからカスタムメタデータ型レコードの削除をサポートしていないため、無効化が最も近い方法となります。無効化されたカテゴリはすべてのクエリから除外され、カテゴリピッカーにも表示されません。
:::

## ファイル表示ジャンクション — `Tucario_File_Visibility__c`

Smarter Filesは、**Isolated** ストレージモードで管理される各ファイル（およびモードに関わらずカテゴリまたはプライベートフラグが設定されたファイル）に対して、カスタムオブジェクトのジャンクションレコードを作成します。

| フィールド | 型 | 目的 |
|---|---|---|
| **Content Document Id** | テキスト（外部ID、一意） | Salesforce `ContentDocument` への参照。親レコードごとにファイル1件につき1つのジャンクションレコード。 |
| **Parent Record Id** | テキスト（18文字） | ファイルが添付されているレコードの18文字ID。 |
| **Visibility Category** | テキスト（80文字） | `Tucario_Visibility_Rule__mdt` のカテゴリ名。空欄はカテゴリ制限なしを意味します。 |
| **Is Private** | チェックボックス | ファイルがプライベートに設定されている場合はtrue。 |
| **Owner Id** | 参照（ユーザー） | ファイルをプライベートに設定したユーザー。**Is Private** がtrueの場合に必須（`Owner_Required_When_Private` 入力規則により強制）。 |

**自動命名：** レコードは `FV-{0000}` の形式を使用します。

**共有モデル：** ReadWrite。このオブジェクトに対するSOQL/DMLは `USER_MODE` で実行されるため、ユーザーはアクセス権のあるジャンクションレコードのみを参照・変更できます。

## カスタム権限

| API名 | 使用先 |
|---|---|
| `Tucario_Manage_Categories` | *Tucario - Manage File Categories* 権限セットで付与されます。**Set Category** メニュー項目の表示を制御し、カテゴリベースのフィルタリングをバイパスします。 |
| `Tucario_View_Private_Documents` | *Tucario - View Private Documents* 権限セットで付与されます。他のユーザーが所有するプライベートファイルの閲覧を許可します。 |

org固有のロールとバンドルしたい場合は、独自の権限セットを通じてこれらのカスタム権限を割り当てることもできます。

## 公開されているApexクラス

Lightningコンポーネントからアクセス可能な2つのコントローラーがあります。どちらも `with sharing` で実行し、`USER_MODE` のSOQL/DMLを使用します：

- **`TucarioFileDownloadController`** — ファイルのCRUD、アップロード/ダウンロード、公開リンク作成、カテゴリ割り当て、プライベートフラグの切り替え。
- **`TucarioVisibilityController`** — ウィザードのバックエンド（ロール一覧、ルールのデプロイ、デプロイステータスのポーリング）、バッチ移行コントロール、権限チェック。

アクセスは **Tucario Files** 権限セット経由で付与します（すでに有効になっています）。他の権限セットでこれらのクラスを有効にする必要は通常ありません。
