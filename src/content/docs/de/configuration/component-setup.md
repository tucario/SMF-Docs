---
title: Komponenteneinrichtung
description: So fügen Sie Smarter Files auf einer Datensatzseite hinzu und konfigurieren es.
---

## Hinzufügen zu einer Datensatzseite

1. Öffnen Sie eine beliebige Datensatzseite im **Lightning App Builder**.
2. Suchen Sie **Smarter Files** in der Komponentenpalette.
3. Ziehen Sie es in den gewünschten Bereich des Seitenlayouts.
4. Speichern und aktivieren Sie die Seite.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/put-on-flexipage.mp4" type="video/mp4" />
</video>

## Komponenteneigenschaften

![App Builder Konfigurationspanel](/docs/storagemode-isolated.png)

Die folgenden Eigenschaften sind in der Lightning App Builder Seitenleiste verfügbar:

| Eigenschaft | Beschreibung | Standard |
|---|---|---|
| **Card Title** | Kopfzeilentext der Komponente | `Files` |
| **Storage Mode** | `Standard` — Dateien über ContentDocumentLink verknüpft (sichtbar in der Files Related List). `Isolated` — Dateien nur über Junction-Record verknüpft (aus der Files Related List ausgeblendet, aktiviert Sichtbarkeitssteuerungen). | `Standard` |
| **Display Mode** | Anzeige der Dateien: `List` (vertikale Zeilen) oder `Tiles` (Karten-Raster) | `List` |
| **Default Sort Order** | Anfängliche Sortierreihenfolge der Dateiliste. Benutzer können sie zur Laufzeit ändern. Optionen: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za` | `date-newest` |
| **Initial Files Displayed** | Maximale Anzahl der anfänglich angezeigten Dateien. Auf `0` setzen, um alle Dateien anzuzeigen. Ein „Alle anzeigen"-Link erscheint, wenn mehr Dateien vorhanden sind. | `5` |
| **Allowed File Extensions** | Kommagetrennte Whitelist von Erweiterungen (z. B. `pdf,docx,png`). Nur diese Typen können hochgeladen werden. Leer lassen, um alle Typen zuzulassen. | Alle Typen |
| **Excluded File Extensions** | Kommagetrennte Blacklist von Erweiterungen (z. B. `exe,bat,sh`). Diese Typen werden beim Upload blockiert. | Keine |
| **Max File Size (MB)** | Maximale Dateigröße für Uploads in Megabyte. Auf `0` setzen für kein Limit. | `0` (kein Limit) |

### Upload-Einschränkungslogik

Wenn sowohl **Allowed** als auch **Excluded** Dateierweiterungen konfiguriert sind, arbeiten sie zusammen:

1. **Allowed-Liste wird zuerst geprüft** — wenn die Erweiterung einer Datei nicht auf der Allowed-Liste steht, wird sie blockiert.
2. **Excluded-Liste wird als zweites geprüft** — wenn die Datei die Allowed-Prüfung bestanden hat, aber ihre Erweiterung auf der Excluded-Liste steht, wird sie dennoch blockiert.

Mit anderen Worten: Eine Datei muss auf der Allowed-Liste stehen **und** nicht auf der Excluded-Liste, um akzeptiert zu werden.

:::tip
In den meisten Fällen benötigen Sie nur eine der beiden Einstellungen. Verwenden Sie **Allowed**, wenn Sie Uploads auf eine kleine Anzahl bekannter Typen beschränken möchten (z. B. `pdf,docx,xlsx`). Verwenden Sie **Excluded**, wenn Sie bestimmte Typen blockieren, aber alles andere zulassen möchten (z. B. `exe,bat`).
:::

## Platzierungstipps

- Funktioniert im Hauptinhaltsbereich, in der Seitenleiste oder in Bereichen voller Breite.
- Kann auf jeder Standard- oder benutzerdefinierten Objekt-Datensatzseite platziert werden.
- Mehrere Instanzen auf derselben Seite werden unterstützt (z. B. verschiedene Konfigurationen pro Tab).
