---
title: Visibility Controls
description: Document visibility controls available in the AppExchange Edition.
---

:::note
This feature is available in the **AppExchange Edition** only and requires the component's **Storage Mode** to be set to **Isolated**.
:::

## Overview

Visibility controls allow administrators to restrict file access based on document categories and user roles. Files can be assigned to categories, and each category can be locked down to specific roles — users outside those roles won't see the files. Additionally, any user can mark a file as private, making it visible only to themselves and authorized viewers.

All filtering is performed **server-side** — files a user cannot access are never sent to the browser.

## Storage Mode Requirement

Visibility controls are only available when the component's **Storage Mode** is set to **Isolated**:

| | Standard | Isolated |
|---|---|---|
| Files visible in standard Files related list | Yes | No |
| Category assignment | Not available | Available |
| Mark as Private | Not available | Available |
| Role-based visibility filtering | Not available | Available |

In Isolated mode, files are linked to the record exclusively through a junction record — they do not appear in the standard Salesforce Files related list.

## Document Categories

### What Are Categories?

A category is a label assigned to a file that determines who can see it. Categories are defined by an administrator through the **Configuration Wizard** and stored as Custom Metadata Type records.

Examples:
- Health Records
- Financial Reports
- Legal Contracts
- Internal Memos

### How Category Filtering Works

Each category has a list of **permitted roles**. When a file has a category assigned:

- If the user's role is on the permitted list → file is **visible**
- If the user's role is NOT on the permitted list → file is **hidden**
- If no roles are assigned to a category → file is visible to **everyone**
- If a file has no category → file is visible to **everyone**

### Assigning Categories to Files

Users with the **Tucario - Manage File Categories** permission set can assign categories:

1. Click the action menu on a file.
2. Select **Set Category**.
3. Choose a category from the picker, or select **No Category** to remove the current assignment.

The file's visibility updates immediately.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/assigning-categories-to-files.mp4" type="video/mp4" />
</video>

### Managing Categories

Categories are managed through the **Configuration Wizard** in the Smarter Files app:

1. Open the **Smarter Files by Tucario** app from the App Launcher.
2. Click **Manage Document Categories**.
3. **Step 1 — Document Types**: Add categories with names and optional descriptions.
4. **Step 2 — Assign Roles**: For each category, select which roles can see files in that category.
5. **Step 3 — Review & Deploy**: Review the configuration and click Deploy.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/add-category.mp4" type="video/mp4" />
</video>

:::note
**Removing a category:** When you remove a document type from the wizard and deploy, the underlying Custom Metadata Type record is not deleted — it is **deactivated** (`Is_Active = false`). Deactivated categories no longer appear in the category picker or filter files. This is because the Salesforce Metadata API does not support deleting Custom Metadata Type records from Apex.
:::

## Private Documents

### Marking Files as Private

Any user can mark a file as private in Isolated mode:

1. Click the action menu on a file.
2. Select **Mark as Private**.
3. A lock icon appears next to the file name.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

The file is now visible only to:
- The user who marked it private (the owner)
- Users with the **Tucario - View Private Documents** permission set

### Removing Private Status

The file owner can remove the private flag:

1. Click the action menu on the private file.
2. Select **Remove Private**.
3. The file returns to normal visibility rules.

## Combined Filtering Logic

When a file has both a category and a private flag, **both checks must pass** for the file to be visible:

```
For each file:
  1. Private check:
     If file is private AND user is not the owner
     AND user lacks "View Private Documents" permission → HIDE

  2. Category check:
     If file has a category with permitted roles
     AND user's role is not in the list
     AND user lacks "Manage Categories" permission → HIDE

  3. Otherwise → SHOW
```

## Permission Sets

| Permission Set | Purpose |
|---|---|
| **Tucario Files** | Base access. Grants access to the app, controllers, and junction object. Assign to all users. |
| **Tucario - Manage File Categories** | Allows assigning categories to files. **Bypasses category filtering** — users with this permission see all files regardless of category. |
| **Tucario - View Private Documents** | Allows viewing files marked private by other users. |

## Use Cases

- **Health records** visible only to HR managers and medical staff.
- **Financial reports** restricted to the finance team.
- **Legal contracts** accessible only to legal department roles.
- **Sensitive attachments** marked private by individual users for personal use.
- **Draft documents** hidden from external-facing roles until ready.
