---
title: インストール
description: SalesforceorgにSmarter Filesをインストールする方法。
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## AppExchange Edition（マネージドパッケージ）

1. Tucarioの営業担当者またはAppExchangeリスティングからインストールリンクを開きます。
2. アクセス制御の方針に応じて、**すべてのユーザーにインストール**、**管理者のみにインストール**、または**特定のプロファイルにインストール**を選択します。
3. サードパーティアクセスの確認プロンプトを承認し、インストールが完了するまで待機します。

<Image src={packageInstaller} alt="Smarter FilesのSalesforceパッケージインストーラー" />

## Free Edition（GitHub）

1. [GitHub](https://github.com/tucario/SalesforceSmarterFiles)からリポジトリをクローンまたはダウンロードします。
2. Salesforce CLIを使用してSalesforce orgにデプロイします：

```bash
sf project deploy start --source-dir src
```

## 権限セットの割り当て

Smarter Filesには3つの権限セットが含まれています。コンポーネントを使用するすべてのユーザーには、少なくとも基本権限セットが必要です。

<Image src={permSets} alt="SetupにあるSmarter Filesの権限セット" />

| 権限セット | 対象 | 付与内容 |
|---|---|---|
| **Tucario Files (Base)** | コンポーネントのすべてのユーザー | アプリアクセス、表示ジャンクションオブジェクトへのCRUD、ファイルコントローラーへのアクセス |
| **Tucario - Manage File Categories** | 管理者およびカテゴリオーナー | カスタム権限 `Tucario_Manage_Categories` — ファイルへのカテゴリ割り当て、カテゴリフィルタリングのバイパス |
| **Tucario - View Private Documents** | 管理者、HR、コンプライアンス担当者 | カスタム権限 `Tucario_View_Private_Documents` — 他のユーザーがプライベートに設定したファイルの閲覧 |

**Setup → 権限セット → [名前] → 割り当ての管理** から割り当ててください。

## レコードページへのコンポーネントの追加

1. **Lightning App Builder** で任意のレコードページを開きます。
2. コンポーネントパレットから**Smarter Files**をレイアウト上にドラッグします。
3. 右側のパネルでデザインプロパティを設定します。プロパティの詳細については[コンポーネントのセットアップ](/configuration/component-setup/)を参照してください。
4. ページを保存してアクティブ化します。

## 要件

- Salesforce **Enterprise**、**Professional**、または**Unlimited** Edition。
- Lightning Experience が有効になっていること。
- Platform Starter / Platform Plus ライセンスに対応しています — フルSalesforceライセンスは不要です。
- 公開リンクの生成には：**コンテンツデリバリーと公開リンク** が有効になっている必要があります（Setup → Salesforce Files）。
