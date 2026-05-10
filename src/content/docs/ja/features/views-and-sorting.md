---
title: ビューとソート
description: Smarter Filesのリストビュー、タイルビュー、ソートオプション。
---

import { Image } from 'astro:assets';
import listView from '../../../../assets/screenshots/list-view.png';
import tileView from '../../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../../assets/screenshots/empty-state.png';

## リストビュー

デフォルトのレイアウト — ファイル名、ファイルタイプアイコン、最終更新日、サイズ、オーナー、カテゴリバッジ（割り当てられている場合）、プライベートファイルのプライバシーロックアイコンを縦並びの行で表示します。各行にはファイル固有のアクションを表示するコンテキストメニューボタンがあります。

<Image src={listView} alt="2件のファイルとDownload All Filesリンクが表示されたSmarter Filesのリストビュー" />

## タイルビュー

ファイルタイプアイコンが目立つカードのグリッドです。画像が多いレコードや、メタデータを読むよりも一目でスキャンすることが重要な場合に便利です。

<Image src={tileView} alt="ファイルがレスポンシブなカードのグリッドで表示されたSmarter Filesのタイルビュー" />

## ビューの切り替え

管理者はApp Builderの **Display Mode** デザインプロパティ（`List` または `Tiles`）で**デフォルト**のビューを設定します。ユーザーは実行時にビューを切り替えることができ、そのレコードページでの選択が記憶されます。

## ソート

ソートドロップダウンで利用可能な6つのソートオプション：

| オプション | ソート基準 |
|---|---|
| 日付（新しい順） | `LastModifiedDate` 降順 — デフォルト |
| 日付（古い順） | `LastModifiedDate` 昇順 |
| サイズ（大きい順） | `ContentSize` 降順 |
| サイズ（小さい順） | `ContentSize` 昇順 |
| 名前（A〜Z） | `Title` アルファベット順 |
| 名前（Z〜A） | `Title` 逆アルファベット順 |

<Image src={sortMenu} alt="6つのソートオプションが表示されたソートドロップダウン" />

管理者は **Default Sort Order** デザインプロパティで**デフォルト**を設定します。ユーザーは実行時に変更できます — 選択内容はセッション中そのレコードページで保持されます。

## 空の状態

レコードにファイルがない場合（または表示フィルタリング後にユーザーが閲覧できるファイルがない場合）、コンポーネントはアップロード機能が引き続き表示されたすっきりした空の状態を表示します。

<Image src={emptyState} alt="アップロードプロンプトが表示されたSmarter Filesの空の状態" />
