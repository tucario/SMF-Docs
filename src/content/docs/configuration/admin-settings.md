---
title: Admin Settings
description: Global admin settings for Smarter Files.
---

## Custom Metadata

Smarter Files uses Custom Metadata Types for global configuration. This allows settings to be deployed across orgs via change sets or metadata API.

## Key Settings

### Upload Restrictions

Define upload rules per object:

- **Object API Name** — the object to apply the rule to.
- **Allowed Extensions** — comma-separated file types (e.g., `pdf,docx`).
- **Max File Size (MB)** — maximum upload size.

### Category Management (AppExchange Edition)

Categories control which roles can see specific files. They are managed through the **Configuration Wizard** in the Smarter Files app:

1. Open the **Smarter Files by Tucario** app from the App Launcher.
2. Click **Manage Document Categories**.
3. Define document types, assign permitted roles, and deploy.

Categories are stored as Custom Metadata Type records (`Tucario_Visibility_Rule__mdt`). Each record contains:

| Field | Description |
|---|---|
| **Category** | The category identifier |
| **Permitted Roles** | Semicolon-separated role DeveloperNames |
| **Is Active** | Whether the rule is enforced |
| **Description** | Admin-facing description |

:::note
When a category is removed through the wizard, it is **deactivated** rather than deleted. The Salesforce Metadata API does not support deleting Custom Metadata Type records from Apex, so the record's `Is_Active` flag is set to `false`. Deactivated categories are excluded from all queries and do not appear in the category picker.
:::

## Permissions

Smarter Files respects standard Salesforce sharing and CRUD permissions. No additional permission sets are required for basic functionality.

For the AppExchange Edition, three permission sets are included:

| Permission Set | Purpose |
|---|---|
| **Tucario Files** | Base access to the app, Apex controllers, and the junction object. Required for all users. |
| **Tucario - Manage File Categories** | Grants the ability to assign categories to files. Users with this permission bypass category-based filtering and can see all files. |
| **Tucario - View Private Documents** | Grants the ability to view files marked as private by other users. |
