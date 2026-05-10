---
title: Admin-Einstellungen
description: Permission Sets, benutzerdefinierte Objekte und metadatengesteuerte Konfiguration in Smarter Files.
---

## Permission Sets

Mit dem Paket werden drei Permission Sets ausgeliefert. Jeder Benutzer der Komponente benötigt mindestens das Basis-Set.

| Permission Set | Erforderlich für | Gewährt |
|---|---|---|
| **Tucario Files** *(Basis)* | Alle Benutzer der Komponente | App-Zugang ("Smarter Files by Tucario"), CRUD auf das `Tucario_File_Visibility__c`-Junction-Objekt, Zugriff auf `TucarioFileDownloadController` und `TucarioVisibilityController` |
| **Tucario - Manage File Categories** | Admins und Kategorieverantwortliche | Custom Permission `Tucario_Manage_Categories` — Kategorien auf Dateien über "Set Category" zuweisen und Kategoriefilterung umgehen (diese Benutzer sehen immer alle Dateien) |
| **Tucario - View Private Documents** | Admins, HR, Compliance-Verantwortliche | Custom Permission `Tucario_View_Private_Documents` — Dateien anzeigen, die von anderen Benutzern als privat markiert wurden |

:::caution
**Tucario Files** ist auch für reine Lesezugriff-Benutzer erforderlich. Ohne dieses Set rendert die Komponente einen "Zugriff verweigert"-Zustand, da der Benutzer das Junction-Objekt, das die Sichtbarkeit steuert, nicht lesen kann.
:::

## Upload-Einschränkungen

Upload-Regeln – erlaubte Erweiterungen, gesperrte Erweiterungen und maximale Dateigröße – werden **pro Komponenteninstanz** über die Design-Eigenschaften im App Builder konfiguriert, nicht global. Die vollständige Eigenschaftsliste finden Sie unter [Komponenten-Setup](/configuration/component-setup/).

Das bedeutet: Auf verschiedenen Datensatzseiten können unterschiedliche Upload-Regeln gelten – oder sogar auf derselben Seite, wenn mehrere Instanzen mit unterschiedlichen Regeln vorhanden sind.

## Sichtbarkeitsregeln – `Tucario_Visibility_Rule__mdt`

Sichtbarkeitsregeln werden als Custom Metadata Type Records gespeichert und über den [Configuration Wizard](/features/visibility-controls/#configuring-visibility-rules) verwaltet – nicht direkt in Setup bearbeitet.

| Feld | Typ | Zweck |
|---|---|---|
| **Category** | Text | Der Dokumenttyp-Name (z. B. `HR Documents`, `Contracts`). Dateien referenzieren diesen Wert im Feld `Visibility_Category__c`. |
| **Permitted Roles** | Long Text Area | Semikolon-getrennte Liste von Rollen-`DeveloperName`-Werten (z. B. `CEO;HR_Manager;HR_Specialist`). Benutzer, deren Rolle mit einem dieser Werte übereinstimmt, können Dateien in dieser Kategorie sehen. |
| **Is Active** | Checkbox | Ob die Regel aktiv ist. Inaktive Regeln verhalten sich so, als existierten sie nicht (die Kategorie fällt auf „offen für alle" zurück). |
| **Description** | Text | Admin-seitige Beschreibung des Kategorieinhalts. |

:::note
Wenn eine Kategorie über den Wizard „entfernt" wird, wird sie **deaktiviert** (`Is_Active = false`), nicht gelöscht. Die Salesforce Metadata API unterstützt das Löschen von CMT-Records aus Apex nicht; die Deaktivierung ist der nächstmögliche Ersatz. Deaktivierte Kategorien werden aus allen Abfragen ausgeschlossen und erscheinen nicht in der Kategorieauswahl.
:::

## Datei-Sichtbarkeits-Junction – `Tucario_File_Visibility__c`

Smarter Files erstellt einen benutzerdefinierten Junction-Record für jede Datei, die im **Isolated** Storage Mode verwaltet wird (sowie für jede Datei mit einer Kategorie oder einem Privat-Flag, unabhängig vom Modus).

| Feld | Typ | Zweck |
|---|---|---|
| **Content Document Id** | Text (External ID, Unique) | Referenz auf das Salesforce-`ContentDocument`. Ein Junction-Record pro Datei und übergeordnetem Datensatz. |
| **Parent Record Id** | Text (18) | Die 18-stellige ID des Datensatzes, dem die Datei zugeordnet ist. |
| **Visibility Category** | Text (80) | Der Kategoriename aus `Tucario_Visibility_Rule__mdt`. Leer bedeutet keine Kategoriebeschränkung. |
| **Is Private** | Checkbox | Wahr, wenn die Datei als privat markiert wurde. |
| **Owner Id** | Lookup (User) | Der Benutzer, der die Datei als privat markiert hat. Pflichtfeld, wenn **Is Private** wahr ist (wird durch die Validierungsregel `Owner_Required_When_Private` erzwungen). |

**Automatische Benennung:** Records verwenden das Format `FV-{0000}`.

**Freigabemodell:** ReadWrite. SOQL/DML auf diesem Objekt wird im `USER_MODE` ausgeführt, sodass Benutzer nur die Junction-Records sehen und bearbeiten können, auf die sie Zugriff haben.

## Benutzerdefinierte Berechtigungen

| API-Name | Verwendet von |
|---|---|
| `Tucario_Manage_Categories` | Wird über das Permission Set *Tucario - Manage File Categories* vergeben. Steuert die Sichtbarkeit des Menüpunkts **Set Category** und umgeht die kategoriebasierte Filterung. |
| `Tucario_View_Private_Documents` | Wird über das Permission Set *Tucario - View Private Documents* vergeben. Ermöglicht das Anzeigen privater Dateien anderer Benutzer. |

Diese Custom Permissions können auch über eigene Permission Sets vergeben werden, wenn Sie sie mit organisationsspezifischen Rollen bündeln möchten, anstatt die mitgelieferten Permission Sets zu verwenden.

## Verfügbare Apex-Klassen

Zwei Controller sind über Lightning-Komponenten zugänglich – beide laufen `with sharing` und verwenden `USER_MODE` SOQL/DML:

- **`TucarioFileDownloadController`** — Datei-CRUD, Upload/Download, Erstellung öffentlicher Links, Kategoriezuweisung, Umschalten des Privat-Flags.
- **`TucarioVisibilityController`** — Wizard-Backend (Rollenliste, Regeldeployment, Deployment-Status-Polling), Batch-Migration, Berechtigungsprüfungen.

Zugriff über das Permission Set **Tucario Files** gewähren (dort bereits aktiviert) – es gibt in der Regel keinen Grund, diese Klassen über andere Permission Sets freizuschalten.
