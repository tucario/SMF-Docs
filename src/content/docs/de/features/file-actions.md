---
title: Dateiaktionen
description: Verfügbare Aktionen für einzelne Dateien in Smarter Files.
---

import { Image } from 'astro:assets';
import contextMenu from '../../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../../assets/screenshots/file-preview.png';
import editModal from '../../../../assets/screenshots/edit-details-modal.png';

## Kontextmenü

Jede Datei besitzt ein Kontextmenü (der Drei-Punkte-Button rechts in der Zeile bzw. der Overlay-Button auf einer Kachel). Welche Aktionen verfügbar sind, hängt von den Berechtigungen des Benutzers für die jeweilige Datei ab.

<Image src={contextMenu} alt="Geöffnetes Datei-Kontextmenü mit den verfügbaren Aktionen" />

| Aktion | Beschreibung | Verfügbarkeit |
|---|---|---|
| **View Details** | Öffnet die Standard-Salesforce-Dateidetailseite in einem neuen Tab. | Alle Benutzer |
| **Edit Details** | Öffnet ein integriertes Modal zum Bearbeiten von Dateititel und Beschreibung. Speichert und aktualisiert die Liste automatisch. | Benutzer mit Bearbeitungszugriff |
| **Download** | Lädt diese einzelne Datei herunter. | Alle Benutzer |
| **Public Link** | Generiert eine Salesforce Content Distribution-URL für die Datei und kopiert sie automatisch in die Zwischenablage. | Alle Benutzer (erfordert aktivierte Content Deliveries in der Organisation) |
| **Delete** | Löscht die Datei dauerhaft aus Salesforce. Zuvor wird ein Bestätigungsmodal angezeigt. | Benutzer mit Löschzugriff (Dateibesitzer oder Benutzer mit entsprechendem Objekt-/Freigabezugriff; berücksichtigt Platform Starter / Platform Plus-Lizenzregeln) |
| **Remove from Record** | Trennt die Datei von diesem Datensatz, behält sie aber in der Dateiablage der Organisation. Nützlich, wenn eine Datei am falschen Datensatz angehängt wurde. | Benutzer mit Bearbeitungszugriff auf den Datensatz |
| **Set Category** | Öffnet die Kategorieauswahl, um der Datei eine Sichtbarkeitskategorie zuzuweisen. | Benutzer mit der Custom Permission **Manage Categories** |
| **Mark as Private** | Markiert die Datei als privat – nur der Besitzer und Benutzer mit **View Private Documents** können sie sehen. Siehe [Private Dokumente](/features/private-documents/). | Alle Benutzer (Isolated Storage Mode) |
| **Remove Private** | Entfernt die Privat-Markierung. Nur bei privaten Dateien sichtbar. | Der Benutzer, der die Datei als privat markiert hat |

<Image src={actionButtons} alt="Dateimanager-Zeile mit sichtbaren Bearbeiten/Löschen-Aktionsschaltflächen" />

## Native Dateivorschau

Ein Klick auf einen Dateinamen öffnet das Standard-Salesforce-Dateivorschau-Modal – dasselbe, das Benutzer bereits aus der nativen Files-Komponente kennen. Unterstützt alles, was Salesforce nativ in der Vorschau darstellt (PDFs, Bilder, Office-Dokumente, Video, Audio).

<Image src={preview} alt="Native Salesforce-Dateivorschau, geöffnet aus Smarter Files heraus" />

## Details bearbeiten

Mit **Edit Details** öffnet sich ein kompaktes Modal – ändern Sie Titel oder Beschreibung, klicken Sie auf Speichern, und die Dateiliste wird automatisch aktualisiert, ohne dass ein vollständiger Seitenaufruf erforderlich ist.

<Image src={editModal} alt="Modal zum Bearbeiten der Dateidetails" />
