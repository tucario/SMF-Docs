---
title: ファイルアクション
description: Smarter Filesの個別ファイルで利用可能なアクション。
---

import { Image } from 'astro:assets';
import contextMenu from '../../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../../assets/screenshots/file-preview.png';
import editModal from '../../../../assets/screenshots/edit-details-modal.png';

## コンテキストメニュー

各ファイルにはコンテキストメニュー（行の右端にある三点ボタン、またはタイル上のオーバーレイボタン）があります。利用可能なアクションは、そのファイルに対するユーザーの権限によって異なります。

<Image src={contextMenu} alt="利用可能なアクションが表示されたファイルのコンテキストメニュー" />

| アクション | 説明 | 利用条件 |
|---|---|---|
| **View Details** | 標準のSalesforceファイル詳細ページを新しいタブで開きます。 | すべてのユーザー |
| **Edit Details** | ファイルのタイトルと説明を編集するインラインモーダルを開きます。保存するとリストが自動的に更新されます。 | 編集権限を持つユーザー |
| **Download** | このファイルを個別にダウンロードします。 | すべてのユーザー |
| **Public Link** | ファイルのSalesforce Content Distribution URLを生成し、クリップボードに自動コピーします。 | すべてのユーザー（組織でContent Deliveriesが有効な場合） |
| **Delete** | ファイルをSalesforceから完全に削除します。確認モーダルが表示されます。 | 削除権限を持つユーザー（ファイルオーナー、または適切なオブジェクト/共有アクセスを持つユーザー。Platform Starter / Platform Plusのライセンスルールを遵守） |
| **Remove from Record** | ファイルをこのレコードからリンク解除しますが、orgのファイルライブラリには残ります。間違ったレコードにファイルを添付した場合に便利です。 | レコードの編集権限を持つユーザー |
| **Set Category** | ファイルに表示カテゴリを割り当てるカテゴリピッカーを開きます。 | **Manage Categories** カスタム権限を持つユーザー |
| **Mark as Private** | ファイルをプライベートに設定します — オーナーと **View Private Documents** を持つユーザーのみが閲覧できます。[プライベートドキュメント](/features/private-documents/)を参照してください。 | すべてのユーザー（Isolatedストレージモード） |
| **Remove Private** | プライベートフラグを解除します。プライベートファイルに表示されます。 | プライベートに設定したユーザー |

<Image src={actionButtons} alt="編集/削除アクションボタンが表示されたファイル行" />

## ネイティブファイルプレビュー

ファイル名をクリックすると、標準のSalesforceファイルプレビューモーダルが開きます — ネイティブのFilesコンポーネントでユーザーが慣れ親しんでいるものと同じです。Salesforceがネイティブにプレビューできるすべてのタイプ（PDF、画像、Officeドキュメント、動画、音声）をサポートしています。

<Image src={preview} alt="Smarter FilesからSalesforceのネイティブファイルプレビューを開いた画面" />

## 詳細の編集

**Edit Details** を選択すると、軽量なモーダルが開きます — タイトルまたは説明を変更して「保存」をクリックすると、ページ全体をリロードせずにファイルリストが自動的に更新されます。

<Image src={editModal} alt="ファイル詳細編集モーダル" />
