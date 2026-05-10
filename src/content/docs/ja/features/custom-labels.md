---
title: カスタム表示ラベル
description: Smarter Filesのラベルとテキストをカスタマイズする方法。
---

## 概要

Smarter Filesコンポーネントのユーザー向けテキストはすべて、Salesforceのカスタム表示ラベルとして保存されています。ボタン、ヘッダー、モーダル、トースト通知、バリデーションメッセージ、Configuration Wizardを含む約**98件のラベル**があります。これにより以下が可能になります：

- コンポーネントをSalesforceがサポートする任意の言語に翻訳する。
- 組織の用語に合わせて表現を調整する（例：「Files」を「Documents」に変更）。
- コードを変更せずにエラーメッセージやトースト通知をカスタマイズする。

## ラベルのカスタマイズ

1. Salesforceで**Setup → Custom Labels** に移動します。
2. 名前空間プレフィックス `smarterfiles` でフィルタリングするか（または `Tucario_` で検索）。
3. ラベルをクリックして値を編集するか、追加言語のために**ローカル翻訳/上書き** 下に翻訳を追加します。

:::note
ラベルは `smarterfiles` パッケージ名前空間に属しています。ラベル*名*はすべて `Tucario_` で始まります（リリースをまたいで保持されている歴史的なプレフィックス）。
:::

## ラベルカテゴリ

| プレフィックス | 目的 | 例 |
|---|---|---|
| `Tucario_Common_*` | 複数の場所で使用される共通UIテキストとバリデーションメッセージ | `Tucario_Common_Cancel`、`Tucario_Common_Save`、`Tucario_Common_Upload_Blocked`、`Tucario_Common_Upload_Size_Blocked` |
| `Tucario_Files_*` | メインのファイルリストコンポーネント — アクション、エラー、空状態、ソートオプション | `Tucario_Files_Action_Delete`、`Tucario_Files_Delete_Error` |
| `Tucario_Wizard_*` | Configuration Wizardのステップラベル、プロンプト、確認メッセージ | ステップタイトル、ボタンラベル、デプロイステータスメッセージ |
| `Tucario_Visibility_*` | 表示制御 — カテゴリ、プライベートドキュメント、ロール割り当て | カテゴリピッカー、「Mark as Private」/「Remove Private」、ロール階層ラベル |

## 例：「Files」を「Documents」に変更する

1. Setup → Custom Labels → `Tucario_Files_Card_Title` を検索します（変更したいヘッダーを制御するラベル）。
2. **編集** をクリックして値を `Documents` に変更します。
3. 保存します。コンポーネントは次のページ読み込み時に新しい値を反映します — 再デプロイは不要です。

レコードページの配置ごとに異なるテキストを設定したい場合は、コンポーネントの **Card Title** デザインプロパティを使用してください — そのインスタンスのみラベルが上書きされます。
