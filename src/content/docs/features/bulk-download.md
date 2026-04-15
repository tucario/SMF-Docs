---
title: Bulk ZIP Download
description: Download multiple files as a single ZIP archive.
---

## Overview

Download all files attached to a record as a single ZIP archive — no more downloading files one by one.

The **Download All Files** link appears at the top of the component when files are present. Clicking it packages all visible files into a ZIP and triggers a browser download.

## How It Works

1. The component fetches all file content client-side using the Salesforce Content API.
2. Files are compressed into a ZIP archive using [JSZip](https://stuk.github.io/jszip/).
3. The ZIP is generated in the browser — no server-side processing or external services involved.
4. The download starts automatically once the archive is ready.

## Large File Handling

For records with many or large files, the component shows a progress indicator during ZIP generation. If any individual file fails to download (e.g., due to size limits), the ZIP is still created with the remaining files and a warning toast is displayed.
