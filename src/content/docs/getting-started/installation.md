---
title: Installation
description: How to install Smarter Files in your Salesforce org.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../assets/screenshots/package-installer.png';
import permSets from '../../../assets/screenshots/permission-sets-deployed.png';

## AppExchange Edition (Managed Package)

1. Open the install link from your Tucario sales contact (or the AppExchange listing).
2. Choose **Install for All Users**, **Install for Admins Only**, or **Install for Specific Profiles** depending on how you want access controlled.
3. Approve any third-party access prompts and wait for the install to finish.

<Image src={packageInstaller} alt="Salesforce package installer for Smarter Files" />

## Free Edition (GitHub)

1. Clone or download the repository from [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Deploy to your Salesforce org using Salesforce CLI:

```bash
sf project deploy start --source-dir src
```

## Assign Permission Sets

Smarter Files ships with three permission sets. Every user who interacts with the component needs at least the base set.

<Image src={permSets} alt="Smarter Files permission sets in Setup" />

| Permission Set | Required for | Grants |
|---|---|---|
| **Tucario Files (Base)** | Every user of the component | App access, CRUD on the visibility junction object, access to the file controllers |
| **Tucario - Manage File Categories** | Admins and category owners | Custom permission `Tucario_Manage_Categories` — assign categories on files, bypass category filtering |
| **Tucario - View Private Documents** | Admins, HR, compliance | Custom permission `Tucario_View_Private_Documents` — see files marked private by other users |

Assign via **Setup → Permission Sets → [name] → Manage Assignments**.

## Add the Component to a Record Page

1. Open any record page in **Lightning App Builder**.
2. Drag **Smarter Files** from the component palette onto the layout.
3. Configure the design properties in the right-hand panel — see [Component Setup](/configuration/component-setup/) for the full property reference.
4. Save and activate the page.

## Requirements

- Salesforce **Enterprise**, **Professional**, or **Unlimited** edition.
- Lightning Experience enabled.
- Platform Starter / Platform Plus licenses are supported — no full Salesforce license required.
- For Public Link generation: **Content Deliveries and Public Links** must be enabled (Setup → Salesforce Files).
