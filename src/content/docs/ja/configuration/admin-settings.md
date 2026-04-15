---
title: 管理者設定
description: Smarter Filesのグローバル管理者設定。
---

## カスタムメタデータ

Smarter Filesはグローバル設定にカスタムメタデータ型を使用します。これにより、変更セットやメタデータAPIを通じて組織間で設定をデプロイできます。

## 主要な設定

### アップロード制限

オブジェクトごとにアップロードルールを定義します：

- **Object API Name** — ルールを適用するオブジェクト。
- **Allowed Extensions** — カンマ区切りのファイルタイプ（例：`pdf,docx`）。
- **Max File Size (MB)** — 最大アップロードサイズ。

### カテゴリ管理（AppExchange Edition）

カテゴリは、どのロールが特定のファイルを閲覧できるかを制御します。カテゴリはSmarter Filesアプリの**Configuration Wizard**で管理します：

1. App Launcherから**Smarter Files by Tucario**アプリを開きます。
2. **Manage Document Categories**をクリックします。
3. ドキュメントタイプを定義し、許可するロールを割り当ててデプロイします。

カテゴリはカスタムメタデータ型レコード（`Tucario_Visibility_Rule__mdt`）として保存されます。各レコードには以下が含まれます：

| フィールド | 説明 |
|---|---|
| **Category** | カテゴリ識別子 |
| **Permitted Roles** | セミコロン区切りのロールDeveloperNames |
| **Is Active** | ルールが有効かどうか |
| **Description** | 管理者向けの説明 |

:::note
ウィザードからカテゴリを削除すると、削除ではなく**無効化**されます。SalesforceメタデータAPIはApexからカスタムメタデータ型レコードの削除をサポートしていないため、レコードの`Is_Active`フラグが`false`に設定されます。無効化されたカテゴリはすべてのクエリから除外され、カテゴリピッカーに表示されません。
:::

## 権限

Smarter Filesは標準のSalesforce共有およびCRUD権限を尊重します。基本機能に追加の権限セットは必要ありません。

AppExchange Editionには3つの権限セットが含まれています：

| 権限セット | 目的 |
|---|---|
| **Tucario Files** | アプリ、Apexコントローラー、およびジャンクションオブジェクトへの基本アクセス。すべてのユーザーに必要です。 |
| **Tucario - Manage File Categories** | ファイルにカテゴリを割り当てる機能を付与します。この権限を持つユーザーはカテゴリベースのフィルタリングをバイパスし、すべてのファイルを閲覧できます。 |
| **Tucario - View Private Documents** | 他のユーザーがプライベートに設定したファイルを閲覧する機能を付与します。 |
