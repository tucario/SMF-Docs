---
title: 公開リンク
description: ワンクリックでファイルの公開共有リンクを生成します。
---

import { Image } from 'astro:assets';
import publicLink from '../../../../assets/screenshots/public-link-copied.png';

## 概要

ファイルのコンテキストメニューから任意のファイルの公開共有URLを直接生成できます — ファイル詳細ページに移動したり、別の共有モーダルを開いたりする必要はありません。

<Image src={publicLink} alt="Public Linkオプションが表示されたファイルのコンテキストメニューと、URLがクリップボードにコピーされたことを確認するトースト" />

## 公開リンクの作成方法

1. 共有したいファイルのコンテキストメニューをクリックします。
2. **Public Link** を選択します。
3. Smarter FilesがファイルのSalesforce **Content Distribution** レコードを作成し、**URLを自動的にクリップボードにコピー**します。
4. リンクが作成されコピーされたことを確認する成功トーストが表示されます。

生成されたURLは標準のSalesforce公開リンクです — 認証不要で、誰とでも共有できます（Salesforce org外のユーザーを含みます）。

## 要件

- 組織で **Content Deliveries and Public Links** が有効になっている必要があります。Setup → 「Content Deliveries」を検索 → 有効化。これが無効の場合、**Public Link** メニューオプションは無効になり、理由を説明するツールチップが表示されます。
- リンクを作成するユーザーはファイルの削除権限が必要です（Salesforceの標準的なContent Distributionの作成ルール）。

## 既存リンクの管理

Smarter Files経由で作成した公開リンクは、Salesforceのファイルの**Distributions** 関連リストに、標準UIから作成したリンクと並んで表示されます。そこから取り消したり、有効期限を設定したり、パスワードを要求したりすることができます。
