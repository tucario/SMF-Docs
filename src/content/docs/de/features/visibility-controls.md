---
title: Sichtbarkeitssteuerungen
description: Dokumentkategorien, rollenbasierte Filterung und private Dokumente in Smarter Files.
---

import { Image } from 'astro:assets';
import setCategory from '../../../../assets/screenshots/set-category-modal.png';
import wizardDefine from '../../../../assets/screenshots/wizard-define-types.png';
import wizardDefineMultiple from '../../../../assets/screenshots/wizard-define-types-multiple.png';
import wizardRoles from '../../../../assets/screenshots/wizard-assign-roles.png';
import wizardReview from '../../../../assets/screenshots/wizard-review-deploy.png';
import wizardWelcome from '../../../../assets/screenshots/wizard-welcome.png';
import wizardHome from '../../../../assets/screenshots/wizard-home.png';

:::note
Diese Funktion ist nur in der **AppExchange Edition** verfügbar. Der **Storage Mode** der Komponente muss auf **Isolated** gesetzt sein, damit Sichtbarkeitssteuerungen greifen.
:::

## Übersicht

Sichtbarkeitssteuerungen ermöglichen es Administratoren, den Dateizugriff über **Dokumentkategorien** (zugeordnet zu Rollen in der Salesforce-Rollenhierarchie) einzuschränken, und erlauben es jedem Benutzer, einzelne Dateien als **privat** zu markieren. Die gesamte Filterung erfolgt **serverseitig** in `getFilesList()` – eingeschränkte Dateien gelangen nie an nicht autorisierte Browser.

## Speichermodus-Anforderung

| | Standard | Isolated |
|---|---|---|
| Dateien sichtbar in Standard Files Related List | Ja | Nein |
| Kategoriezuweisung | Nicht verfügbar | Verfügbar |
| Als privat markieren | Nicht verfügbar | Verfügbar |
| Rollenbasierte Sichtbarkeitsfilterung | Nicht verfügbar | Verfügbar |

Im Standard-Modus wird kein Junction-Record erstellt, sodass keine Möglichkeit besteht, Kategorie oder Privat-Flag zu speichern. Wechseln Sie für jeden Datensatz, bei dem die Sichtbarkeitsfilterung relevant ist, zu Isolated. Siehe [Storage Modes](/features/storage-modes/).

## Dokumentkategorien

Eine Kategorie ist ein Label, das einer Datei zugewiesen wird und bestimmt, wer sie sehen kann. Kategorien werden als `Tucario_Visibility_Rule__mdt`-Records gespeichert und über den Configuration Wizard verwaltet.

Häufige Beispiele: *HR Documents*, *Underwriting Documents*, *Finanzberichte*, *Rechtsverträge*, *Krankenakten*.

### Funktionsweise der Filterung

Jede Regel ordnet einer Kategorie eine Liste erlaubter Rollen-`DeveloperName`-Werte zu. Für jede Datei gilt:

- Datei hat **keine Kategorie** → für alle sichtbar (standardmäßig offen).
- Datei hat eine Kategorie, **Rolle des Benutzers steht auf der Berechtigungsliste** → sichtbar.
- Datei hat eine Kategorie, **Rolle des Benutzers ist nicht berechtigt** → ausgeblendet.
- Datei hat eine Kategorie, **Regel ist inaktiv** (`Is_Active = false`) → für alle sichtbar (deaktivierte Regeln filtern nicht).
- Benutzer hat die Custom Permission **Manage Categories** → Kategoriefilterung wird umgangen (sieht immer alle Dateien).

Mehrere Regeln, die sich auf dieselbe Kategorie beziehen, werden mit **ODER**-Logik verknüpft – ein Benutzer hat Zugriff, wenn seine Rolle auf *einer* der Berechtigungslisten der Kategorie steht.

### Einer Datei eine Kategorie zuweisen

Benutzer mit **Manage Categories** können eine Kategorie über das Kontextmenü der Datei zuweisen:

1. Öffnen Sie das Kontextmenü der Datei und wählen Sie **Set Category**.
2. Wählen Sie eine Kategorie aus der Auswahl, oder wählen Sie **No Category**, um die Zuweisung zu entfernen.
3. Die Sichtbarkeit der Datei wird sofort aktualisiert.

<Image src={setCategory} alt="Set Category-Modal mit geöffneter Kategorieauswahl" />

:::caution
Benutzer *ohne* die Manage Categories-Berechtigung sehen die Option **Set Category** ebenfalls, erhalten jedoch einen Bestätigungshinweis, dass die Datei nach Zuweisung einer eingeschränkten Kategorie möglicherweise aus ihrer eigenen Ansicht verschwindet (da sie die Filterung nicht umgehen können).
:::

## Sichtbarkeitsregeln konfigurieren

Öffnen Sie die **Smarter Files by Tucario**-App über den App Launcher. Der Configuration Wizard öffnet sich auf dem Startbildschirm mit zwei Karten: *Manage Document Categories* und *Private Documents*.

<Image src={wizardWelcome} alt="Startbildschirm des Configuration Wizards" />

<Image src={wizardHome} alt="Configuration Wizard-Startseite mit den Karten „Manage Categories" und „Private Documents"" />

Klicken Sie auf **Manage Document Categories**, um den dreistufigen Regelassistenten zu öffnen.

### Schritt 1 — Dokumenttypen definieren

Fügen Sie die Dokumenttypen hinzu, die Sie steuern möchten. Jeder Typ hat einen Namen und eine optionale Beschreibung.

<Image src={wizardDefine} alt="Wizard-Schritt 1: Definition eines Dokumenttyps namens „Underwriting Documents"" />

<Image src={wizardDefineMultiple} alt="Wizard-Schritt 1 mit mehreren hinzugefügten Dokumenttypen" />

### Schritt 2 — Rollen zuweisen

Wählen Sie für jeden Dokumenttyp die Rollen aus, die Dateien in dieser Kategorie sehen dürfen. Die Dual-Listbox wird aus der Rollenhierarchie Ihrer Organisation befüllt (maximal 1000 Rollen).

<Image src={wizardRoles} alt="Wizard-Schritt 2: Dual-Listbox mit verfügbaren Rollen links und berechtigten Rollen rechts" />

### Schritt 3 — Überprüfen & Deployen

Überprüfen Sie aktive und deaktivierte Kategorien und klicken Sie dann auf **Deploy Configuration**. Der Wizard ruft `Metadata.Operations.enqueueDeployment()` auf, um die Regeln asynchron als `Tucario_Visibility_Rule__mdt`-Records zu schreiben, und fragt den Fertigstellungsstatus ab. Ein Ladeindikator zeigt den Fortschritt an.

<Image src={wizardReview} alt="Wizard-Schritt 3: Übersicht aller Kategorien mit der Deploy-Schaltfläche" />

:::note
**Kategorie entfernen:** Das Entfernen eines Dokumenttyps aus dem Wizard und das anschließende Deployen **löscht** den CMT-Record nicht – es setzt `Is_Active = false`. Die Salesforce Metadata API unterstützt das Löschen von CMT-Records aus Apex nicht; die Deaktivierung ist der nächstmögliche Ersatz. Deaktivierte Kategorien erscheinen weder in der Kategorieauswahl noch filtern sie Dateien; sie können zu einem späteren Zeitpunkt reaktiviert werden, indem eine Kategorie mit demselben Namen erneut hinzugefügt wird.
:::

## Private Dokumente

Zusätzlich zur kategoriebasierten Filterung kann jeder Benutzer einzelne Dateien als privat markieren – sichtbar nur für ihn selbst und Benutzer mit der Berechtigung **View Private Documents**. Den vollständigen Ablauf finden Sie unter [Private Dokumente](/features/private-documents/).

## Kombinierte Filterlogik

Wenn eine Datei sowohl eine Kategorie als auch ein Privat-Flag hat, müssen **beide Prüfungen bestanden werden**, damit sie sichtbar ist. Pseudocode für `getFilesList()`:

```
Für jede Datei im Datensatz:
  1. Privat-Prüfung:
     Wenn Is_Private UND Benutzer ist nicht Owner_Id
     UND Benutzer hat keine „View Private Documents"-Berechtigung → AUSBLENDEN

  2. Kategorie-Prüfung:
     Wenn Visibility_Category gesetzt ist
     UND eine passende aktive Regel existiert
     UND die Rolle des Benutzers nicht in Permitted_Roles ist
     UND Benutzer hat keine „Manage Categories"-Berechtigung → AUSBLENDEN

  3. Andernfalls → ANZEIGEN
```

Die restriktivere der beiden Prüfungen hat Vorrang.

## Permission Sets

| Permission Set | Zweck |
|---|---|
| **Tucario Files** | Basiszugang. Für alle Benutzer erforderlich. Gewährt Zugang zur App, den Controllern und dem Junction-Objekt. |
| **Tucario - Manage File Categories** | Zugang zum „Set Category"-Menü sowie Umgehung der Kategoriefilterung (sieht immer alle Dateien). |
| **Tucario - View Private Documents** | Ermöglicht das Anzeigen von Dateien, die von anderen Benutzern als privat markiert wurden. |

## Anwendungsfälle

- **HR-Dokumente** nur für HR-Rollen sichtbar, mit Privat-Markierung für individuelle Mitarbeiterdatensätze.
- **Finanzberichte** auf Finance-Rollen beschränkt, unabhängig davon, wer sie hochgeladen hat.
- **Rechtsverträge** ausschließlich für Rollen der Rechtsabteilung zugänglich, mit Privat-Markierung für Vertragsentwürfe.
- **Underwriting-Dokumente** mit personenbezogenen Daten, beschränkt auf Underwriter-Rollen.
- **Vertrauliche Anhänge an einem gemeinsam genutzten Datensatz** — zweite Komponenteninstanz im Isolated-Modus mit angewendeten Kategorien, vollständig aus der Standard Files Related List ausgeblendet.
