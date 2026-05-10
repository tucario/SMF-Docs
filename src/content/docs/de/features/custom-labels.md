---
title: Custom Labels
description: So passen Sie Bezeichnungen und Texte in Smarter Files an.
---

## Übersicht

Jeder benutzerseitige Text in der Smarter Files-Komponente wird als Salesforce Custom Label gespeichert – insgesamt rund **98 Labels**, die Schaltflächen, Überschriften, Modals, Toasts, Validierungsmeldungen und den Configuration Wizard abdecken. Das ermöglicht Ihnen:

- Die Komponente in jede von Salesforce unterstützte Sprache zu übersetzen.
- Formulierungen an die Terminologie Ihrer Organisation anzupassen (z. B. „Dokumente" statt „Dateien").
- Fehlermeldungen und Toasts anzupassen, ohne Code anfassen zu müssen.

## Labels anpassen

1. Wechseln Sie in Salesforce zu **Setup → Custom Labels**.
2. Filtern Sie nach dem Namespace-Präfix `smarterfiles` (oder suchen Sie nach `Tucario_`).
3. Klicken Sie auf ein Label, um seinen Wert zu bearbeiten, oder fügen Sie Übersetzungen unter **Local Translations / Overrides** für weitere Sprachen hinzu.

:::note
Labels sind unter dem `smarterfiles`-Paket-Namespace eingeordnet. Die Label-*Namen* beginnen alle mit `Tucario_` (das historische Präfix, das über alle Releases beibehalten wurde).
:::

## Label-Kategorien

| Präfix | Zweck | Beispiele |
|---|---|---|
| `Tucario_Common_*` | Gemeinsam genutzter UI-Text und Validierungsmeldungen, die an mehreren Stellen verwendet werden | `Tucario_Common_Cancel`, `Tucario_Common_Save`, `Tucario_Common_Upload_Blocked`, `Tucario_Common_Upload_Size_Blocked` |
| `Tucario_Files_*` | Die Hauptdateilisten-Komponente – Aktionen, Fehlermeldungen, Leer-Zustände, Sortieroptionen | `Tucario_Files_Action_Delete`, `Tucario_Files_Delete_Error` |
| `Tucario_Wizard_*` | Schrittbezeichnungen, Hinweise und Bestätigungen im Configuration Wizard | Schritttitel, Schaltflächenbeschriftungen, Deployment-Statusmeldungen |
| `Tucario_Visibility_*` | Sichtbarkeitssteuerungen – Kategorien, private Dokumente, Rollenzuweisung | Kategorieauswahl, „Mark as Private" / „Remove Private", Rollenhierarchie-Labels |

## Beispiel: „Files" in „Dokumente" umbenennen

1. Setup → Custom Labels → nach `Tucario_Files_Card_Title` suchen (oder nach dem Label, das den gewünschten Header steuert).
2. Auf **Edit** klicken → den Wert auf `Dokumente` ändern.
3. Speichern. Die Komponente übernimmt den neuen Wert beim nächsten Seitenaufruf – kein erneutes Deployment erforderlich.

Wenn Sie pro Datensatzseite unterschiedliche Texte benötigen, verwenden Sie stattdessen die Design-Eigenschaft **Card Title** der Komponente – sie überschreibt das Label nur für diese eine Instanz.
