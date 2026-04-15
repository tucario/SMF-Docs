---
title: Admin-Einstellungen
description: Globale Admin-Einstellungen für Smarter Files.
---

## Custom Metadata

Smarter Files verwendet Custom Metadata Types für die globale Konfiguration. Dies ermöglicht die Bereitstellung von Einstellungen über Change Sets oder die Metadata API in verschiedenen Orgs.

## Wichtige Einstellungen

### Upload-Einschränkungen

Definieren Sie Upload-Regeln pro Objekt:

- **Object API Name** — das Objekt, auf das die Regel angewendet wird.
- **Allowed Extensions** — kommagetrennte Dateitypen (z. B. `pdf,docx`).
- **Max File Size (MB)** — maximale Upload-Größe.

### Kategorieverwaltung (AppExchange Edition)

Kategorien steuern, welche Rollen bestimmte Dateien sehen können. Sie werden über den **Configuration Wizard** in der Smarter Files App verwaltet:

1. Öffnen Sie die **Smarter Files by Tucario** App über den App Launcher.
2. Klicken Sie auf **Manage Document Categories**.
3. Definieren Sie Dokumenttypen, weisen Sie berechtigte Rollen zu und deployen Sie.

Kategorien werden als Custom Metadata Type Records (`Tucario_Visibility_Rule__mdt`) gespeichert. Jeder Record enthält:

| Feld | Beschreibung |
|---|---|
| **Category** | Die Kategoriekennung |
| **Permitted Roles** | Semikolon-getrennte Rollen-DeveloperNames |
| **Is Active** | Ob die Regel durchgesetzt wird |
| **Description** | Beschreibung für Administratoren |

:::note
Wenn eine Kategorie über den Wizard entfernt wird, wird sie **deaktiviert** statt gelöscht. Die Salesforce Metadata API unterstützt das Löschen von Custom Metadata Type Records aus Apex nicht, daher wird das `Is_Active`-Flag des Records auf `false` gesetzt. Deaktivierte Kategorien werden aus allen Abfragen ausgeschlossen und erscheinen nicht in der Kategorieauswahl.
:::

## Berechtigungen

Smarter Files respektiert die Standard-Salesforce-Freigabe- und CRUD-Berechtigungen. Für die Grundfunktionalität sind keine zusätzlichen Permission Sets erforderlich.

Für die AppExchange Edition sind drei Permission Sets enthalten:

| Permission Set | Zweck |
|---|---|
| **Tucario Files** | Basiszugang zur App, Apex-Controllern und dem Junction-Objekt. Erforderlich für alle Benutzer. |
| **Tucario - Manage File Categories** | Ermöglicht das Zuweisen von Kategorien zu Dateien. Benutzer mit dieser Berechtigung umgehen die kategoriebasierte Filterung und können alle Dateien sehen. |
| **Tucario - View Private Documents** | Ermöglicht das Anzeigen von Dateien, die von anderen Benutzern als privat markiert wurden. |
