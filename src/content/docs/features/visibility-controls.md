---
title: Visibility Controls
description: Document categories, role-based filtering, and private documents in Smarter Files.
---

import { Image } from 'astro:assets';
import setCategory from '../../../assets/screenshots/set-category-modal.png';
import wizardDefine from '../../../assets/screenshots/wizard-define-types.png';
import wizardDefineMultiple from '../../../assets/screenshots/wizard-define-types-multiple.png';
import wizardRoles from '../../../assets/screenshots/wizard-assign-roles.png';
import wizardReview from '../../../assets/screenshots/wizard-review-deploy.png';
import wizardWelcome from '../../../assets/screenshots/wizard-welcome.png';
import wizardHome from '../../../assets/screenshots/wizard-home.png';

:::note
Available in **AppExchange Edition** only. The component's **Storage Mode** must be set to **Isolated** for visibility controls to apply.
:::

## Overview

Visibility controls let admins restrict file access by **document category** (mapped to roles in the Salesforce role hierarchy) and let any user mark individual files as **private**. All filtering happens **server-side** in `getFilesList()` — restricted files never reach unauthorized browsers.

## Storage Mode Requirement

| | Standard | Isolated |
|---|---|---|
| Files visible in standard Files related list | Yes | No |
| Category assignment | Not available | Available |
| Mark as Private | Not available | Available |
| Role-based visibility filtering | Not available | Available |

In Standard mode no junction record is created, so there's nowhere to store the category or private flag. Switch to Isolated for any record where visibility filtering matters. See [Storage Modes](/features/storage-modes/).

## Document Categories

A category is a label assigned to a file that determines who can see it. Categories live in `Tucario_Visibility_Rule__mdt` records and are managed through the Configuration Wizard.

Common examples: *HR Documents*, *Underwriting Documents*, *Financial Reports*, *Legal Contracts*, *Medical Records*.

### How Filtering Works

Each rule maps a category to a list of permitted role `DeveloperName` values. For each file:

- File has **no category** → visible to everyone (default open).
- File has a category, **user's role is on the permitted list** → visible.
- File has a category, **user's role is not permitted** → hidden.
- File has a category, **rule is inactive** (`Is_Active = false`) → visible to everyone (deactivated rules don't filter).
- User has the **Manage Categories** custom permission → bypass category filtering (always sees every file).

Multiple rules referencing the same category combine with **OR** logic — a user passes if their role is on *any* permitted list for the category.

### Assigning a Category to a File

Users with **Manage Categories** can assign a category from the file's context menu:

1. Open the file's context menu and select **Set Category**.
2. Pick a category from the picker, or select **No Category** to clear.
3. The file's visibility updates immediately.

<Image src={setCategory} alt="Set Category modal with the category picker open" />

:::caution
Users *without* the Manage Categories permission still see the **Set Category** option, but get a confirmation warning that the file may disappear from their own view once a restricted category is applied (since they don't bypass filtering).
:::

## Configuring Visibility Rules

Open the **Smarter Files by Tucario** app from the App Launcher. The Configuration Wizard opens on the home screen with two cards: *Manage Document Categories* and *Private Documents*.

<Image src={wizardWelcome} alt="Configuration Wizard welcome screen" />

<Image src={wizardHome} alt="Configuration Wizard home with Manage Categories and Private Documents cards" />

Click **Manage Document Categories** to enter the 3-step rule wizard.

### Step 1 — Define Document Types

Add the document types you want to control. Each has a name and an optional description.

<Image src={wizardDefine} alt="Wizard step 1: defining a document type called Underwriting Documents" />

<Image src={wizardDefineMultiple} alt="Wizard step 1 with multiple document types added" />

### Step 2 — Assign Roles

For each document type, pick the roles allowed to see files in that category. The dual-listbox is populated from your org's role hierarchy (capped at 1000 roles).

<Image src={wizardRoles} alt="Wizard step 2: dual listbox with available roles on the left and permitted roles on the right" />

### Step 3 — Review & Deploy

Review active and deactivated categories, then click **Deploy Configuration**. The wizard calls `Metadata.Operations.enqueueDeployment()` to write the rules as `Tucario_Visibility_Rule__mdt` records asynchronously, polling for completion. A spinner shows progress.

<Image src={wizardReview} alt="Wizard step 3: review of all categories with the Deploy button" />

:::note
**Removing a category:** removing a document type from the wizard and deploying does **not** delete the CMT record — it sets `Is_Active = false`. The Salesforce Metadata API doesn't support deleting CMT records from Apex, so deactivation is the closest equivalent. Deactivated categories no longer appear in the picker or filter files, and can be reactivated later by adding a category with the same name back.
:::

## Private Documents

In addition to category-based filtering, any user can mark individual files as private — visible only to themselves and users with the **View Private Documents** permission. See [Private Documents](/features/private-documents/) for the full flow.

## Combined Filtering Logic

When a file has both a category and a private flag, **both checks must pass** for it to be visible. Pseudocode for `getFilesList()`:

```
For each file on the record:
  1. Private check:
     If Is_Private AND user is not Owner_Id
     AND user lacks "View Private Documents" → HIDE

  2. Category check:
     If Visibility_Category is set
     AND a matching active rule exists
     AND user's role is not in Permitted_Roles
     AND user lacks "Manage Categories" → HIDE

  3. Otherwise → SHOW
```

The most restrictive of the two checks wins.

## Permission Sets

| Permission Set | Purpose |
|---|---|
| **Tucario Files** | Base access. Required for every user. Grants the app, controllers, and junction object. |
| **Tucario - Manage File Categories** | Set Category menu access + bypass category filtering (always see every file). |
| **Tucario - View Private Documents** | See files marked private by other users. |

## Use Cases

- **HR documents** visible only to HR roles, with private flagging for individual employee records.
- **Financial reports** restricted to finance roles, regardless of who uploaded them.
- **Legal contracts** locked to legal department roles, with private flagging on draft contracts.
- **Underwriting documents** containing PII, restricted to underwriter roles.
- **Confidential attachments on a shared record** — second component instance in Isolated mode with categories applied, hidden from the standard Files related list entirely.
