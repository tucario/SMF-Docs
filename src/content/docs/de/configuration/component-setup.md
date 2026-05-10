---
title: Komponenten-Setup
description: So fügen Sie Smarter Files auf einer Datensatzseite hinzu und konfigurieren es.
---

import { Image } from 'astro:assets';
import appBuilder from '../../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../../assets/screenshots/app-builder-card-title.png';

## Zu einer Datensatzseite hinzufügen

1. Öffnen Sie eine beliebige Datensatzseite im **Lightning App Builder**.
2. Suchen Sie **Smarter Files** in der Komponentenpalette unter *Custom — Managed*.
3. Ziehen Sie die Komponente in den gewünschten Bereich des Seitenlayouts.
4. Konfigurieren Sie die Design-Eigenschaften im rechten Panel.
5. Speichern und aktivieren Sie die Seite.

<Image src={appBuilder} alt="Lightning App Builder mit ausgewählter Smarter Files-Komponente und geöffnetem Eigenschaften-Panel" />

## Komponenteneigenschaften

Die Komponente bietet acht Design-Eigenschaften in der App Builder-Seitenleiste:

| Eigenschaft | Beschreibung | Standard |
|---|---|---|
| **Card Title** | Kopfzeilentext der Komponente. Überschreibt das Custom Label `Tucario_Files_Card_Title` für diese Instanz. | `Files` |
| **Storage Mode** | `Standard` — Dateien über `ContentDocumentLink` verknüpft (in der Standard Files Related List sichtbar). `Isolated` — Dateien ausschließlich über das `Tucario_File_Visibility__c`-Junction verknüpft (aus der Standard Files Related List ausgeblendet, aktiviert Sichtbarkeitssteuerungen). Siehe [Storage Modes](/features/storage-modes/). | `Standard` |
| **Display Mode** | Darstellung der Dateien: `List` (vertikale Zeilen mit Metadaten) oder `Tiles` (Karten-Raster mit Dateitypicons). | `List` |
| **Default Sort Order** | Anfängliche Sortierung. Benutzer können sie zur Laufzeit ändern. Optionen: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za`. | `date-newest` |
| **Initial Files Displayed** | Maximale Anzahl der anfänglich angezeigten Dateien. Ein „Alle anzeigen"-Link erscheint, wenn mehr Dateien vorhanden sind. Auf `0` setzen, um alle anzuzeigen. | `5` |
| **Allowed File Extensions** | Kommagetrennte Whitelist (z. B. `pdf,docx,png`). Nur diese Typen können hochgeladen werden. Leer lassen, um alle zuzulassen. | *(leer – alle erlaubt)* |
| **Excluded File Extensions** | Kommagetrennte Blacklist (z. B. `exe,bat,sh`). Diese Typen werden beim Upload blockiert. | *(leer – keine blockiert)* |
| **Max File Size (MB)** | Upload-Größenlimit in Megabyte. Auf `0` setzen für kein Limit. | `0` |

<Image src={cardTitle} alt="Bearbeitung der Card Title-Eigenschaft im App Builder zum Überschreiben des Komponenten-Headers" />

### Upload-Einschränkungslogik

Wenn sowohl **Allowed** als auch **Excluded** konfiguriert sind, werden beide Prüfungen nacheinander ausgeführt:

1. **Allowed-Liste wird zuerst geprüft** – ist die Erweiterung einer Datei nicht auf der Allowed-Liste, wird sie blockiert.
2. **Excluded-Liste wird als zweites geprüft** – hat die Datei die Allowed-Prüfung bestanden, ihre Erweiterung steht aber auf der Excluded-Liste, wird sie trotzdem blockiert.

Eine Datei muss auf der Allowed-Liste stehen **und** darf nicht auf der Excluded-Liste stehen, um akzeptiert zu werden.

:::tip
In den meisten Fällen benötigen Sie nur eine der beiden Einstellungen. Verwenden Sie **Allowed**, wenn Sie Uploads auf eine überschaubare Anzahl bekannter Typen beschränken möchten (z. B. `pdf,docx,xlsx`). Verwenden Sie **Excluded**, wenn Sie bestimmte Typen sperren, alles andere aber zulassen möchten (z. B. `exe,bat`).
:::

## Tipps zur Platzierung

- Funktioniert im Hauptinhaltsbereich, in der Seitenleiste oder in Bereichen voller Breite der Datensatzseite.
- Kann auf jeder Standard- oder benutzerdefinierten Objekt-Datensatzseite platziert werden.
- Mehrere Instanzen auf derselben Seite werden unterstützt – nützlich, um einen Datensatz in verschiedene Dateibereiche aufzuteilen (z. B. eine Standard-Mode-Instanz für allgemeine Dateien und eine Isolated-Mode-Instanz für vertrauliche Dokumente). Vergeben Sie eindeutige **Card Titles**, um sie unterscheiden zu können.
- Die Komponente ist **ausschließlich für Datensatzseiten** vorgesehen. Der Configuration Wizard wird als separate App-Seite ausgeliefert, die über den App Launcher unter *Smarter Files by Tucario* erreichbar ist.
