---
title: インストール
description: Salesforce組織にSmarter Filesをインストールする方法。
---

## Free Edition（GitHub）

1. [GitHub](https://github.com/tucario/SalesforceSmarterFiles)からリポジトリをクローンまたはダウンロードします。
2. Salesforce CLIを使用してSalesforce組織にデプロイします：

```bash
sf project deploy start --source-dir force-app
```

3. Lightning App Builderでレコードページに移動し、**Smarter Files**コンポーネントをレイアウトにドラッグします。

### ワンクリックデプロイ（代替方法）

GitHubデプロイツールを使用して、組織に直接インストールすることもできます：

1. 環境を選択します（ProductionまたはSandbox）：

![デプロイツールの設定](/docs/deploy-tool-settings.png)

2. Salesforce組織へのアクセスを許可します：

![アクセス許可プロンプト](/docs/deploy-allow-access.png)

3. デプロイするコンポーネントを確認します：

![デプロイ確認](/docs/deploy-tool-confirmation.png)

## AppExchange Edition

1. AppExchangeからインストールします（近日公開）。
2. Lightning App Builderを使用して、任意のレコードページに**Smarter Files**コンポーネントを配置します。
3. コンポーネント設定パネルで表示ルールを構成します。

## 要件

- Salesforce **Enterprise**、**Professional**、または**Unlimited**エディション。
- Lightning Experienceが有効であること。
- Platformライセンスで十分です — フルSalesforceライセンスは不要です。
