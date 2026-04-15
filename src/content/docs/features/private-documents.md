---
title: Private Documents
description: Mark files as private to restrict access to the file owner.
---

:::note
This feature is available in the **AppExchange Edition** only and requires **Isolated** storage mode.
:::

## Overview

Any user can mark a file as private, making it visible only to themselves and users with the **View Private Documents** permission. Private files display a lock icon to indicate their restricted status.

## Marking a File as Private

1. Click the action menu on a file.
2. Select **Mark as Private**.
3. A lock icon appears next to the file name.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

The file is now visible only to:
- The user who marked it private (the owner)
- Users with the **Tucario - View Private Documents** permission set

## Removing Private Status

The file owner can remove the private flag:

1. Click the action menu on the private file.
2. Select **Remove Private**.
3. The file returns to normal visibility rules.

## Who Can See Private Files?

| User | Can see the file? |
|---|---|
| File owner (who marked it private) | Yes |
| User with **View Private Documents** permission | Yes |
| Other users | No |

If the file also has a category assigned, both the private check and the category check must pass. See [Visibility Controls](/features/visibility-controls/) for details on combined filtering.
