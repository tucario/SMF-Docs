---
title: Bulk ZIP Download
description: Download every file on a record as a single ZIP archive — no size limit.
---

import { Image } from 'astro:assets';
import downloadAll from '../../../assets/screenshots/download-all-zip.png';

## Overview

Download every file attached to the record as a single ZIP archive. The **Download All Files** link appears at the top of the component whenever at least one file is present.

<Image src={downloadAll} alt="Files component with Download All in progress, showing a spinner" />

## How It Works

Smarter Files picks the right strategy based on total file size:

- **Small batches (default: under ~50 MB total)** are zipped **client-side** in the browser using [JSZip](https://stuk.github.io/jszip/). The ZIP is generated and downloaded entirely on the user's machine — no server-side processing involved.
- **Large batches** are zipped **server-side** by streaming files through the Salesforce file servlet. This bypasses the standard 12 MB Apex heap limit, so there is no practical size cap on the archive.

The user sees a single "Download All" button regardless of which path is taken; the component decides automatically.

## Visibility Filtering

Only files the user is allowed to see are included in the ZIP. Files restricted by:

- **Visibility category rules** (the user's role isn't on the permitted list), or
- **Private flag** (set by another user, and the current user lacks `View Private Documents`)

…are filtered out server-side before the bundle is built — they never appear in the archive even if the user is aware they exist.

## Failure Behavior

If an individual file fails to download (corrupt, deleted between fetch and zip, permission revoked mid-flight), the ZIP is still generated with the remaining files and a toast warns the user which files were skipped. The Download All operation never aborts entirely because of one bad file.

## Performance Notes

- ZIP generation runs asynchronously — the user can navigate away and the download completes when ready.
- For records with hundreds of files, expect noticeable wait times on first click; subsequent downloads of the same record are faster because the file metadata is cached.
