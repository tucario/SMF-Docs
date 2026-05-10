---
title: File Actions
description: Available actions for individual files in Smarter Files.
---

import { Image } from 'astro:assets';
import contextMenu from '../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../assets/screenshots/file-preview.png';
import editModal from '../../../assets/screenshots/edit-details-modal.png';

## Context Menu

Each file has a context menu (the three-dot button on the right of the row, or the overlay button on a tile). The available actions depend on the user's permissions on that specific file.

<Image src={contextMenu} alt="File context menu open showing the available actions" />

| Action | Description | Availability |
|---|---|---|
| **View Details** | Opens the standard Salesforce file detail page in a new tab. | All users |
| **Edit Details** | Opens an inline modal to edit the file title and description. Saves and refreshes the list automatically. | Users with edit access |
| **Download** | Downloads this individual file. | All users |
| **Public Link** | Generates a Salesforce Content Distribution URL for the file and auto-copies it to the clipboard. | All users (requires Content Deliveries enabled in the org) |
| **Delete** | Permanently deletes the file from Salesforce. Confirmation modal first. | Users with delete access (file owner, or users with the right object/sharing access; respects Platform Starter / Platform Plus license rules) |
| **Remove from Record** | Unlinks the file from this record but keeps it in the org's file library. Useful when a file was attached to the wrong record. | Users with edit access on the record |
| **Set Category** | Opens the category picker to assign a visibility category to the file. | Users with the **Manage Categories** custom permission |
| **Mark as Private** | Marks the file private — only the owner and users with **View Private Documents** can see it. See [Private Documents](/features/private-documents/). | All users (Isolated storage mode) |
| **Remove Private** | Removes the private flag. Visible on private files. | The user who marked it private |

<Image src={actionButtons} alt="File row with edit/delete action buttons visible" />

## Native File Preview

Clicking a file name opens the standard Salesforce file preview modal — the same one users already know from the native Files component. Supports everything Salesforce previews natively (PDFs, images, Office documents, video, audio).

<Image src={preview} alt="Salesforce native file preview opened from Smarter Files" />

## Edit Details

Selecting **Edit Details** opens a lightweight modal — change the title or description, hit Save, and the file list refreshes automatically without a full page reload.

<Image src={editModal} alt="Edit file details modal" />
