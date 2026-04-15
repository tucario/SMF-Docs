---
title: 公開リンク
description: ファイルの公開共有リンクを生成。
---

## 概要

レコードから離れることなく、個別ファイルの公開共有リンクをコンポーネントから直接生成できます。

## 公開リンクの作成方法

1. ファイルのアクションメニューをクリックします。
2. **Public Link**を選択します。
3. コンポーネントがSalesforce Content Distributionを作成し、公開URLをクリップボードにコピーします。
4. リンクが作成されたことを確認する成功トーストが表示されます。

生成されたURLは標準のSalesforce公開リンクです — 認証は不要で、誰とでも共有できます。

## 設定

公開リンクは、Lightning App Builderの**Show Public Link**プロパティにより、コンポーネントインスタンスごとに有効・無効を設定できます。

:::note
公開リンクの作成には、Salesforce組織でContent Deliveriesが有効になっている必要があります。**Setup > Content Deliveries and Public Links**でこの機能を有効にしてください。
:::
