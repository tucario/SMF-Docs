---
title: Installation
description: How to install Smarter Files in your Salesforce org.
---

## Free Edition (GitHub)

1. Clone or download the repository from [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Deploy to your Salesforce org using Salesforce CLI:

```bash
sf project deploy start --source-dir force-app
```

3. Navigate to a record page in Lightning App Builder and drag the **Smarter Files** component onto the layout.

### One-Click Deploy (Alternative)

You can also use the GitHub deploy tool to install directly into your org:

1. Choose your environment (Production or Sandbox):

![Deploy tool settings](/docs/deploy-tool-settings.png)

2. Allow access to your Salesforce org:

![Allow access prompt](/docs/deploy-allow-access.png)

3. Confirm the components to deploy:

![Deploy confirmation](/docs/deploy-tool-confirmation.png)

## AppExchange Edition

1. Install from AppExchange (coming soon).
2. Drop the **Smarter Files** component on any record page using Lightning App Builder.
3. Configure visibility rules in the component settings panel.

## Requirements

- Salesforce **Enterprise**, **Professional**, or **Unlimited** edition.
- Lightning Experience enabled.
- Platform license is sufficient — no full Salesforce license required.
