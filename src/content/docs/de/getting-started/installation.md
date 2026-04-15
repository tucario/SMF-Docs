---
title: Installation
description: So installieren Sie Smarter Files in Ihrer Salesforce-Org.
---

## Free Edition (GitHub)

1. Klonen oder laden Sie das Repository von [GitHub](https://github.com/tucario/SalesforceSmarterFiles) herunter.
2. Deployen Sie es mit der Salesforce CLI in Ihre Salesforce-Org:

```bash
sf project deploy start --source-dir force-app
```

3. Navigieren Sie zu einer Datensatzseite im Lightning App Builder und ziehen Sie die **Smarter Files** Komponente auf das Layout.

### One-Click Deploy (Alternative)

Sie können auch das GitHub-Deploy-Tool verwenden, um direkt in Ihre Org zu installieren:

1. Wählen Sie Ihre Umgebung (Production oder Sandbox):

![Deploy-Tool-Einstellungen](/docs/deploy-tool-settings.png)

2. Erlauben Sie den Zugriff auf Ihre Salesforce-Org:

![Zugriffserlaubnis](/docs/deploy-allow-access.png)

3. Bestätigen Sie die zu deployenden Komponenten:

![Deploy-Bestätigung](/docs/deploy-tool-confirmation.png)

## AppExchange Edition

1. Installation über AppExchange (demnächst verfügbar).
2. Ziehen Sie die **Smarter Files** Komponente auf eine beliebige Datensatzseite im Lightning App Builder.
3. Konfigurieren Sie die Sichtbarkeitsregeln im Einstellungspanel der Komponente.

## Anforderungen

- Salesforce **Enterprise**, **Professional** oder **Unlimited** Edition.
- Lightning Experience aktiviert.
- Eine Platform-Lizenz ist ausreichend — keine vollständige Salesforce-Lizenz erforderlich.
