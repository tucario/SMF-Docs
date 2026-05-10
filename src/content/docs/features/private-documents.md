---
title: Private Documents
description: Mark files as private to restrict access to the file owner and approved viewers.
---

import { Image } from 'astro:assets';
import markPrivate from '../../../assets/screenshots/mark-as-private.png';

:::note
Available in **AppExchange Edition** only. Requires **Isolated** storage mode on the component instance.
:::

## Overview

Any user can mark a file as private. A private file is visible only to:

1. **The user who marked it private** (recorded in `Owner_Id__c` on the visibility junction).
2. **Users with the `Tucario_View_Private_Documents` custom permission** — typically assigned to admins, HR, or compliance via the **Tucario - View Private Documents** permission set.

Private files display a lock icon next to the file name in both List and Tile views.

## Marking a File Private

1. Open the file's context menu.
2. Select **Mark as Private**.
3. A lock icon appears next to the file name; the file is now hidden from everyone except the owner and View Private users.

<Image src={markPrivate} alt="File marked as private with lock icon visible in the file list" />

## Removing the Private Flag

The owner (and any user with `View Private Documents`) can remove the flag:

1. Open the context menu on the private file.
2. Select **Remove Private**.
3. The lock icon disappears and the file falls back to the normal visibility rules (including any category restrictions).

## Who Can See a Private File

| User | Can see the file? |
|---|---|
| The owner (who marked it private) | Yes |
| User with **View Private Documents** permission | Yes |
| Everyone else | No — the file is filtered out server-side and never appears in the list, even if they previously knew the file existed |

## Stacking with Categories

Private and category-based visibility stack — both checks must pass for a file to be visible. If a file is private **and** assigned to an HR-only category, only users who pass *both* gates (the owner with HR role, or a View Private user with HR role) will see it. See [Visibility Controls](/features/visibility-controls/) for the full filtering logic.

## Behind the Scenes

When you mark a file private, Smarter Files writes to the `Tucario_File_Visibility__c` junction:

- Sets `Is_Private__c = true`.
- Sets `Owner_Id__c` to the current user (enforced by the `Owner_Required_When_Private` validation rule — `Owner_Id__c` cannot be null when `Is_Private__c` is true).

All filtering happens server-side in `getFilesList()` before the response leaves the Salesforce server, so private files are never sent to unauthorized browsers.
