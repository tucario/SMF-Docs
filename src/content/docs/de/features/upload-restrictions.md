---
title: Upload-Einschränkungen
description: Steuern Sie, welche Dateitypen und -größen Benutzer hochladen können.
---

## Übersicht

Administratoren können Uploads nach Dateityp und -größe direkt in den Komponenteneigenschaften einschränken — kein Code erforderlich.

## Dateityp-Einschränkungen

Zwei Eigenschaften steuern, welche Dateitypen akzeptiert werden:

### Erlaubte Dateierweiterungen

Eine Whitelist erlaubter Erweiterungen (z. B. `pdf,docx,xlsx`). Wenn konfiguriert, können **nur** diese Typen hochgeladen werden. Leer lassen, um alle Typen zuzulassen.

### Ausgeschlossene Dateierweiterungen

Eine Blacklist blockierter Erweiterungen (z. B. `exe,bat,sh`). Diese Typen werden beim Upload abgelehnt. Leer lassen, um nichts auszuschließen.

### Beide zusammen verwenden

Wenn beide konfiguriert sind, arbeiten sie als kombinierter Filter:

1. **Allowed-Liste wird zuerst geprüft** — wenn die Erweiterung der Datei nicht auf der Allowed-Liste steht, wird sie blockiert.
2. **Excluded-Liste wird als zweites geprüft** — wenn die Datei die Allowed-Prüfung bestanden hat, aber auf der Excluded-Liste steht, wird sie dennoch blockiert.

Eine Datei muss auf der Allowed-Liste stehen **und** nicht auf der Excluded-Liste, um akzeptiert zu werden.

:::tip
In den meisten Fällen benötigen Sie nur eine der beiden. Verwenden Sie **Allowed**, um auf eine kleine Anzahl bekannter Typen zu beschränken. Verwenden Sie **Excluded**, um bestimmte Typen zu blockieren, aber alles andere zuzulassen.
:::

## Dateigrößenlimit

Setzen Sie die Eigenschaft **Max File Size (MB)**, um die maximale Upload-Größe zu begrenzen. Auf `0` setzen für kein Limit.

Wenn ein Benutzer versucht, eine Datei hochzuladen, die das Limit überschreitet, wird der Upload blockiert und ein Fehlerhinweis mit dem Dateinamen und dem konfigurierten Limit angezeigt.

## Benutzer-Feedback

Wenn Uploads blockiert werden, gibt die Komponente klares Feedback:

![Upload-blockiert-Meldung](/docs/upload-blocked.png)

- **Einzelne Datei blockiert** — Hinweis nennt die Datei und erklärt, warum sie blockiert wurde (falscher Typ oder zu groß).
- **Mehrere Dateien blockiert** — Hinweis listet alle blockierten Dateien mit dem Grund auf.
- **Gemischter Upload** — wenn einige Dateien erfolgreich sind und andere blockiert werden, werden sowohl ein Erfolgs- als auch ein Warnhinweis angezeigt.
