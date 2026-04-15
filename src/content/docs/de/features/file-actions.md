---
title: Dateiaktionen
description: Verfügbare Aktionen für einzelne Dateien in Smarter Files.
---

## Kontextmenü-Aktionen

Jede Datei in der Komponente verfügt über ein Aktionsmenü mit folgenden Optionen:

![Dateiaktionen-Kontextmenü](/docs/file-actions.png)

| Aktion | Beschreibung | Verfügbarkeit |
|---|---|---|
| **View Details** | Öffnet die Standard-Salesforce-Dateidetailseite | Alle Benutzer |
| **Edit Details** | Dateinamen und Beschreibung inline bearbeiten | Benutzer mit Bearbeitungszugriff |
| **Download** | Die einzelne Datei herunterladen | Alle Benutzer |
| **Public Link** | Einen öffentlichen Freigabelink für die Datei generieren | Konfigurierbar über Komponenteneigenschaft |
| **Delete** | Die Datei dauerhaft löschen (mit Bestätigung) | Benutzer mit Löschzugriff |
| **Remove** | Die Datei von diesem Datensatz entfernen, ohne sie zu löschen | Nur Isolated-Modus |
| **Set Category** | Der Datei eine Sichtbarkeitskategorie zuweisen | Isolated-Modus + Manage Categories-Berechtigung |
| **Mark as Private** | Die Datei nur für Sie sichtbar machen | Nur Isolated-Modus |
| **Remove Private** | Die Privat-Markierung von der Datei entfernen | Isolated-Modus, nur Dateibesitzer |

## Native Dateivorschau

Ein Klick auf den Dateinamen öffnet das Standard-Salesforce-Dateivorschaufenster — keine externen Viewer oder Plugins erforderlich. Die Vorschau unterstützt alle Dateitypen, die Salesforce nativ unterstützt (PDFs, Bilder, Office-Dokumente usw.).
