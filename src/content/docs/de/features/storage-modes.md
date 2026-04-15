---
title: Speichermodi
description: Standard- vs. Isolated-Speichermodus und Dateimigration.
---

## Übersicht

Smarter Files unterstützt zwei Speichermodi, die steuern, wie Dateien mit Datensätzen verknüpft werden. Der Modus wird pro Komponenteninstanz im Lightning App Builder festgelegt.

![Speichermodus-Konfiguration im App Builder](/docs/storagemode-isolated.png)

## Standard-Modus (Standard)

- Dateien werden über den nativen Salesforce `ContentDocumentLink` verknüpft.
- Dateien erscheinen sowohl in der Smarter Files Komponente **als auch** in der Standard Files Related List.
- Sichtbarkeitssteuerungen (Kategorien, private Dokumente) sind **nicht verfügbar**.
- Am besten geeignet für: einfache Dateiverwaltung, wenn die Kompatibilität mit der Standard Files Related List beibehalten werden soll.

## Isolated-Modus

- Dateien werden nur über einen Junction-Record (`Tucario_File_Visibility__c`) verknüpft.
- Dateien erscheinen **nur** in der Smarter Files Komponente — sie sind in der Standard Files Related List ausgeblendet.
- Sichtbarkeitssteuerungen sind **vollständig verfügbar**: Kategorien, private Dokumente, rollenbasierte Filterung.
- Am besten geeignet für: Szenarien, in denen Sie kontrollieren müssen, wer welche Dateien sehen kann.

## Vergleich

| | Standard | Isolated |
|---|---|---|
| Dateien sichtbar in Standard Files Related List | Ja | Nein |
| Kategoriezuweisung | Nicht verfügbar | Verfügbar |
| Als privat markieren | Nicht verfügbar | Verfügbar |
| Rollenbasierte Sichtbarkeitsfilterung | Nicht verfügbar | Verfügbar |
| Migration beim Wechsel erforderlich | — | Ja |

## Migration zum Isolated-Modus

Beim Wechsel einer Komponente vom Standard- in den Isolated-Modus bei einem Datensatz, der bereits Dateien enthält, sind bestehende Dateien erst nach der Migration sichtbar.

Die Komponente zeigt ein Warnbanner mit einer Schaltfläche **Migrate Existing Files** an. Ein Klick darauf:

1. Startet einen Batch-Job, der Junction-Records für alle bestehenden `ContentDocumentLink`-Records dieses Datensatzes erstellt.
2. Zeigt einen Fortschrittsbalken während der Migration an.
3. Zeigt eine Erfolgsmeldung nach Abschluss an.

Die Migration kann sicher erneut ausgeführt werden — sie verwendet Upsert auf dem `Content_Document_Id__c` External ID-Feld.
