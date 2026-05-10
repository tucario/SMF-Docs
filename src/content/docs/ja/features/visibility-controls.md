---
title: 表示制御
description: Smarter Filesのドキュメントカテゴリ、ロールベースのフィルタリング、プライベートドキュメント。
---

import { Image } from 'astro:assets';
import setCategory from '../../../../assets/screenshots/set-category-modal.png';
import wizardDefine from '../../../../assets/screenshots/wizard-define-types.png';
import wizardDefineMultiple from '../../../../assets/screenshots/wizard-define-types-multiple.png';
import wizardRoles from '../../../../assets/screenshots/wizard-assign-roles.png';
import wizardReview from '../../../../assets/screenshots/wizard-review-deploy.png';
import wizardWelcome from '../../../../assets/screenshots/wizard-welcome.png';
import wizardHome from '../../../../assets/screenshots/wizard-home.png';

:::note
**AppExchange Edition** のみで利用可能です。表示制御を適用するには、コンポーネントの **Storage Mode** を **Isolated** に設定する必要があります。
:::

## 概要

表示制御により、管理者は**ドキュメントカテゴリ**（Salesforceのロール階層のロールにマッピング）によってファイルアクセスを制限できます。また、任意のユーザーが個別のファイルを**プライベート**に設定できます。すべてのフィルタリングは `getFilesList()` で**サーバー側**で実行されます — 制限されたファイルが未承認のブラウザに届くことはありません。

## ストレージモード要件

| | Standard | Isolated |
|---|---|---|
| 標準ファイル関連リストでのファイル表示 | はい | いいえ |
| カテゴリ割り当て | 利用不可 | 利用可能 |
| プライベートに設定 | 利用不可 | 利用可能 |
| ロールベースの表示フィルタリング | 利用不可 | 利用可能 |

Standardモードではジャンクションレコードが作成されないため、カテゴリやプライベートフラグを保存する場所がありません。表示フィルタリングが必要なレコードにはIsolatedに切り替えてください。[ストレージモード](/features/storage-modes/)を参照してください。

## ドキュメントカテゴリ

カテゴリとは、誰がそのファイルを閲覧できるかを決定するためにファイルに割り当てられたラベルです。カテゴリは `Tucario_Visibility_Rule__mdt` レコードに保存され、Configuration Wizardを通じて管理します。

一般的な例：*HR Documents*、*Underwriting Documents*、*Financial Reports*、*Legal Contracts*、*Medical Records*。

### フィルタリングの仕組み

各ルールはカテゴリを許可されたロール `DeveloperName` 値のリストにマッピングします。各ファイルについて：

- ファイルに**カテゴリがない** → 全員に表示（デフォルトでオープン）。
- ファイルにカテゴリがあり、**ユーザーのロールが許可リストにある** → 表示。
- ファイルにカテゴリがあり、**ユーザーのロールが許可されていない** → 非表示。
- ファイルにカテゴリがあり、**ルールが非アクティブ**（`Is_Active = false`）→ 全員に表示（非アクティブなルールはフィルタリングしません）。
- ユーザーが **Manage Categories** カスタム権限を持つ → カテゴリフィルタリングをバイパス（常にすべてのファイルを閲覧）。

同じカテゴリを参照する複数のルールは **OR** ロジックで結合されます — ユーザーは対象カテゴリのいずれかの許可リストにロールがあればパスします。

### ファイルへのカテゴリ割り当て

**Manage Categories** を持つユーザーは、ファイルのコンテキストメニューからカテゴリを割り当てられます：

1. ファイルのコンテキストメニューを開き、**Set Category** を選択します。
2. ピッカーからカテゴリを選択するか、**No Category** を選択してカテゴリをクリアします。
3. ファイルの表示設定は即座に更新されます。

<Image src={setCategory} alt="カテゴリピッカーが開いたSet Categoryモーダル" />

:::caution
Manage Categories 権限を持*たない*ユーザーも **Set Category** オプションを表示できますが、制限されたカテゴリが適用された後にファイルが自分のビューから消える可能性がある旨の確認警告が表示されます（フィルタリングをバイパスできないため）。
:::

## 表示ルールの設定

App Launcherから **Smarter Files by Tucario** アプリを開きます。ホーム画面にConfiguration Wizardが表示され、2つのカード（*Manage Document Categories* と *Private Documents*）があります。

<Image src={wizardWelcome} alt="Configuration Wizardのウェルカム画面" />

<Image src={wizardHome} alt="Manage CategoriesとPrivate Documentsカードが表示されたConfiguration Wizardホーム" />

**Manage Document Categories** をクリックして3ステップのルールウィザードを開始します。

### ステップ1 — ドキュメントタイプの定義

制御したいドキュメントタイプを追加します。それぞれに名前とオプションの説明があります。

<Image src={wizardDefine} alt="ウィザードのステップ1：「Underwriting Documents」というドキュメントタイプを定義する画面" />

<Image src={wizardDefineMultiple} alt="複数のドキュメントタイプが追加されたウィザードのステップ1" />

### ステップ2 — ロールの割り当て

各ドキュメントタイプについて、そのカテゴリのファイルを閲覧できるロールを選択します。デュアルリストボックスには組織のロール階層が表示されます（最大1000件）。

<Image src={wizardRoles} alt="ウィザードのステップ2：左側に利用可能なロール、右側に許可されたロールが表示されたデュアルリストボックス" />

### ステップ3 — 確認とデプロイ

アクティブおよび無効化されたカテゴリを確認し、**Deploy Configuration** をクリックします。ウィザードは `Metadata.Operations.enqueueDeployment()` を呼び出して、ルールを `Tucario_Visibility_Rule__mdt` レコードとして非同期に書き込み、完了をポーリングします。スピナーが進捗を表示します。

<Image src={wizardReview} alt="ウィザードのステップ3：すべてのカテゴリの確認画面とDeployボタン" />

:::note
**カテゴリの削除：** ウィザードからドキュメントタイプを削除してデプロイしても、カスタムメタデータ型レコードは**削除されず**、`Is_Active = false` に設定されます。SalesforceメタデータAPIはApexからカスタムメタデータ型レコードの削除をサポートしていないため、無効化が最も近い方法です。無効化されたカテゴリはピッカーに表示されずファイルのフィルタリングにも使用されませんが、後から同じ名前のカテゴリを追加することで再アクティブ化できます。
:::

## プライベートドキュメント

カテゴリベースのフィルタリングに加えて、任意のユーザーが個別のファイルをプライベートに設定できます — 自分自身と **View Private Documents** 権限を持つユーザーのみに表示されます。詳細なフローについては[プライベートドキュメント](/features/private-documents/)を参照してください。

## 複合フィルタリングロジック

ファイルにカテゴリとプライベートフラグの両方がある場合、**両方のチェックをパスする**必要があります。`getFilesList()` の疑似コード：

```
For each file on the record:
  1. Private check:
     If Is_Private AND user is not Owner_Id
     AND user lacks "View Private Documents" → HIDE

  2. Category check:
     If Visibility_Category is set
     AND a matching active rule exists
     AND user's role is not in Permitted_Roles
     AND user lacks "Manage Categories" → HIDE

  3. Otherwise → SHOW
```

2つのチェックのうち、より制限の厳しい方が優先されます。

## 権限セット

| 権限セット | 目的 |
|---|---|
| **Tucario Files** | 基本アクセス。すべてのユーザーに必要です。アプリ、コントローラー、ジャンクションオブジェクトへのアクセスを付与します。 |
| **Tucario - Manage File Categories** | Set Categoryメニューへのアクセスおよびカテゴリフィルタリングのバイパス（常にすべてのファイルを閲覧可能）。 |
| **Tucario - View Private Documents** | 他のユーザーがプライベートに設定したファイルの閲覧。 |

## ユースケース

- **HRドキュメント**をHRロールのみに表示し、個人の従業員レコードにはプライベートフラグを使用。
- **財務報告書**を、誰がアップロードしたかに関わらず、財務ロールに制限。
- **法的契約書**を法務部門のロールのみにアクセス制限し、ドラフト契約書にはプライベートフラグを使用。
- **引受ドキュメント**の個人情報を含む内容を、引受担当者ロールに制限。
- **共有レコードの機密添付ファイル** — カテゴリが適用されたIsolatedモードの2つ目のコンポーネントインスタンスで、標準ファイル関連リストから完全に非表示に。
