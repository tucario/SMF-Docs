---
title: Installation
description: So installieren Sie Smarter Files in Ihrer Salesforce-Organisation.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## AppExchange Edition (Managed Package)

1. Öffnen Sie den Installationslink Ihres Tucario-Vertriebskontakts (oder das AppExchange-Listing).
2. Wählen Sie **Install for All Users**, **Install for Admins Only** oder **Install for Specific Profiles** – je nachdem, wie der Zugriff gesteuert werden soll.
3. Bestätigen Sie etwaige Drittanbieter-Zugriffsaufforderungen und warten Sie, bis die Installation abgeschlossen ist.

<Image src={packageInstaller} alt="Salesforce-Paketinstallation für Smarter Files" />

## Free Edition (GitHub)

1. Klonen oder laden Sie das Repository von [GitHub](https://github.com/tucario/SalesforceSmarterFiles) herunter.
2. Deployen Sie es in Ihre Salesforce-Organisation mit der Salesforce CLI:

```bash
sf project deploy start --source-dir src
```

## Permission Sets zuweisen

Smarter Files wird mit drei Permission Sets ausgeliefert. Jeder Benutzer, der mit der Komponente arbeitet, benötigt mindestens das Basis-Set.

<Image src={permSets} alt="Smarter Files Permission Sets in der Setup-Übersicht" />

| Permission Set | Erforderlich für | Gewährt |
|---|---|---|
| **Tucario Files (Base)** | Alle Benutzer der Komponente | App-Zugang, CRUD auf das Sichtbarkeits-Junction-Objekt, Zugriff auf die Datei-Controller |
| **Tucario - Manage File Categories** | Admins und Kategorieverantwortliche | Custom Permission `Tucario_Manage_Categories` — Kategorien auf Dateien zuweisen, Kategoriefilterung umgehen |
| **Tucario - View Private Documents** | Admins, HR, Compliance | Custom Permission `Tucario_View_Private_Documents` — Dateien sehen, die von anderen Benutzern als privat markiert wurden |

Zuweisung über **Setup → Permission Sets → [Name] → Manage Assignments**.

## Komponente einer Datensatzseite hinzufügen

1. Öffnen Sie eine beliebige Datensatzseite im **Lightning App Builder**.
2. Ziehen Sie **Smarter Files** aus der Komponentenpalette auf das Layout.
3. Konfigurieren Sie die Design-Eigenschaften im rechten Panel – die vollständige Eigenschaftsreferenz finden Sie unter [Komponenten-Setup](/configuration/component-setup/).
4. Speichern und aktivieren Sie die Seite.

## Voraussetzungen

- Salesforce **Enterprise**, **Professional** oder **Unlimited** Edition.
- Lightning Experience muss aktiviert sein.
- Platform Starter / Platform Plus-Lizenzen werden unterstützt – keine vollständige Salesforce-Lizenz erforderlich.
- Für die Generierung öffentlicher Links: **Content Deliveries and Public Links** muss aktiviert sein (Setup → Salesforce Files).
