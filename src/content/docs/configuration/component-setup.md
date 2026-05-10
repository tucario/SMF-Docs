---
title: Component Setup
description: How to add and configure Smarter Files on a record page.
---

import { Image } from 'astro:assets';
import appBuilder from '../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../assets/screenshots/app-builder-card-title.png';

## Adding to a Record Page

1. Open any record page in **Lightning App Builder**.
2. Find **Smarter Files** in the component palette under *Custom — Managed*.
3. Drag it onto the desired region of the page layout.
4. Configure the design properties in the right-hand panel.
5. Save and activate the page.

<Image src={appBuilder} alt="Lightning App Builder with Smarter Files component selected and the properties panel open" />

## Component Properties

The component exposes eight design properties in the App Builder sidebar:

| Property | Description | Default |
|---|---|---|
| **Card Title** | Component header text. Overrides the `Tucario_Files_Card_Title` custom label for this instance. | `Files` |
| **Storage Mode** | `Standard` — files linked via `ContentDocumentLink` (visible in the standard Files related list). `Isolated` — files linked via the `Tucario_File_Visibility__c` junction only (hidden from the standard Files related list, enables visibility controls). See [Storage Modes](/features/storage-modes/). | `Standard` |
| **Display Mode** | How files are displayed: `List` (vertical rows with metadata) or `Tiles` (grid of cards with file-type icons). | `List` |
| **Default Sort Order** | Initial sort. Users can change it at runtime. Options: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za`. | `date-newest` |
| **Initial Files Displayed** | Maximum number of files shown initially. A "Show All" link appears when more files exist. Set to `0` to show all. | `5` |
| **Allowed File Extensions** | Comma-separated whitelist (e.g., `pdf,docx,png`). Only these types can be uploaded. Leave empty to allow all. | *(empty — all allowed)* |
| **Excluded File Extensions** | Comma-separated blacklist (e.g., `exe,bat,sh`). These types are blocked from upload. | *(empty — none blocked)* |
| **Max File Size (MB)** | Upload size limit in megabytes. Set to `0` for no limit. | `0` |

<Image src={cardTitle} alt="Editing the Card Title property in App Builder to override the component header" />

### Upload Restriction Logic

When both **Allowed** and **Excluded** lists are configured, they stack:

1. **Allowed list is checked first** — if a file's extension is not on the allowed list, it is blocked.
2. **Excluded list is checked second** — if the file passed the allowed check but its extension is on the excluded list, it is still blocked.

A file must be on the allowed list **and** not on the excluded list to be accepted.

:::tip
In most cases, you only need one of the two settings. Use **Allowed** when you want to restrict uploads to a small set of known types (e.g., `pdf,docx,xlsx`). Use **Excluded** when you want to block specific types but allow everything else (e.g., `exe,bat`).
:::

## Placement Tips

- Works in the main content area, sidebar, or full-width regions of the record page.
- Can be placed on any standard or custom object record page.
- Multiple instances on the same page are supported — useful for splitting a record into different file spaces (e.g., one Standard-mode instance for general files and one Isolated-mode instance for confidential documents). Set distinct **Card Titles** to tell them apart.
- The component is **record-page only**. The Configuration Wizard ships as a separate app page accessible from the *Smarter Files by Tucario* app launcher entry.
