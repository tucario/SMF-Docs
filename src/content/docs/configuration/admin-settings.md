---
title: Admin Settings
description: Permission sets, custom objects, and metadata-driven configuration in Smarter Files.
---

## Permission Sets

Three permission sets ship with the package. Every user of the component needs at least the base set.

| Permission Set | Required for | Grants |
|---|---|---|
| **Tucario Files** *(base)* | Every user of the component | App access ("Smarter Files by Tucario"), CRUD on the `Tucario_File_Visibility__c` junction object, access to `TucarioFileDownloadController` and `TucarioVisibilityController` |
| **Tucario - Manage File Categories** | Admins and category owners | Custom permission `Tucario_Manage_Categories` — assign categories on files via "Set Category", and bypass category filtering (these users always see every file) |
| **Tucario - View Private Documents** | Admins, HR, compliance officers | Custom permission `Tucario_View_Private_Documents` — view files marked private by other users |

:::caution
**Tucario Files** is required even for read-only users. Without it, the component renders an access-denied state because the user cannot read the junction object that gates visibility.
:::

## Upload Restrictions

Upload rules — allowed extensions, excluded extensions, and max size — are configured **per component instance** through the design properties in App Builder, not globally. See [Component Setup](/configuration/component-setup/) for the full property list.

This means you can have different upload rules on different record pages, or even multiple instances on the same record page with different rules.

## Visibility Rules — `Tucario_Visibility_Rule__mdt`

Visibility rules are stored as Custom Metadata Type records and managed through the [Configuration Wizard](/features/visibility-controls/#configuring-visibility-rules) — not edited directly in Setup.

| Field | Type | Purpose |
|---|---|---|
| **Category** | Text | The document type name (e.g., `HR Documents`, `Contracts`). Files reference this string in their `Visibility_Category__c` field. |
| **Permitted Roles** | Long Text Area | Semicolon-separated list of role `DeveloperName` values (e.g., `CEO;HR_Manager;HR_Specialist`). Users whose role matches one of these can see files in this category. |
| **Is Active** | Checkbox | Whether the rule is enforced. Inactive rules behave as if they don't exist (the category falls back to default-open). |
| **Description** | Text | Admin-facing description of what the category contains. |

:::note
When a category is "removed" through the wizard, it is **deactivated** (`Is_Active = false`), not deleted. The Salesforce Metadata API doesn't support deleting CMT records from Apex, so deactivation is the closest equivalent. Deactivated categories are excluded from all queries and do not appear in the category picker.
:::

## File Visibility Junction — `Tucario_File_Visibility__c`

Smarter Files creates a custom object junction record for each file managed under **Isolated** storage mode (and for any file with a category or private flag, regardless of mode).

| Field | Type | Purpose |
|---|---|---|
| **Content Document Id** | Text (External ID, Unique) | Reference to the Salesforce `ContentDocument`. One junction record per file per parent record. |
| **Parent Record Id** | Text (18) | The 18-character ID of the record the file is attached to. |
| **Visibility Category** | Text (80) | The category name from `Tucario_Visibility_Rule__mdt`. Empty means no category restriction. |
| **Is Private** | Checkbox | True if the file has been marked private. |
| **Owner Id** | Lookup (User) | The user who marked the file private. Required when **Is Private** is true (enforced by the `Owner_Required_When_Private` validation rule). |

**Auto-naming:** records use the format `FV-{0000}`.

**Sharing model:** ReadWrite. SOQL/DML on this object runs in `USER_MODE`, so users only see and modify junction records they have access to.

## Custom Permissions

| API Name | Used by |
|---|---|
| `Tucario_Manage_Categories` | Granted via the *Tucario - Manage File Categories* permission set. Controls visibility of the **Set Category** menu item and bypasses category-based filtering. |
| `Tucario_View_Private_Documents` | Granted via the *Tucario - View Private Documents* permission set. Allows seeing private files owned by other users. |

You can assign these custom permissions through your own permission sets if you want to bundle them with org-specific roles instead of using the shipped permission sets.

## Apex Classes Exposed

Two controllers are accessible from Lightning components — both run `with sharing` and use `USER_MODE` SOQL/DML:

- **`TucarioFileDownloadController`** — file CRUD, upload/download, public link creation, category assignment, private flag toggling.
- **`TucarioVisibilityController`** — wizard backend (role list, rule deployment, deployment status polling), batch migration controls, permission checks.

Grant access via the **Tucario Files** permission set (already enabled there) — there's normally no reason to enable these classes through other permission sets.
