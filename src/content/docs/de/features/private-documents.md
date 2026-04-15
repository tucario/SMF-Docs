---
title: Private Dokumente
description: Dateien als privat markieren, um den Zugriff auf den Dateibesitzer zu beschränken.
---

:::note
Diese Funktion ist nur in der **AppExchange Edition** verfügbar und erfordert den **Isolated** Speichermodus.
:::

## Übersicht

Jeder Benutzer kann eine Datei als privat markieren, sodass sie nur für ihn selbst und Benutzer mit der Berechtigung **View Private Documents** sichtbar ist. Private Dateien zeigen ein Schlosssymbol an, um ihren eingeschränkten Status anzuzeigen.

## Eine Datei als privat markieren

1. Klicken Sie auf das Aktionsmenü einer Datei.
2. Wählen Sie **Mark as Private**.
3. Ein Schlosssymbol erscheint neben dem Dateinamen.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

Die Datei ist jetzt nur sichtbar für:
- Den Benutzer, der sie als privat markiert hat (der Besitzer)
- Benutzer mit dem **Tucario - View Private Documents** Permission Set

## Private Markierung entfernen

Der Dateibesitzer kann die Privat-Markierung entfernen:

1. Klicken Sie auf das Aktionsmenü der privaten Datei.
2. Wählen Sie **Remove Private**.
3. Die Datei kehrt zu den normalen Sichtbarkeitsregeln zurück.

## Wer kann private Dateien sehen?

| Benutzer | Kann die Datei sehen? |
|---|---|
| Dateibesitzer (der sie als privat markiert hat) | Ja |
| Benutzer mit **View Private Documents**-Berechtigung | Ja |
| Andere Benutzer | Nein |

Wenn der Datei auch eine Kategorie zugewiesen ist, müssen sowohl die Privat-Prüfung als auch die Kategorie-Prüfung bestanden werden. Siehe [Sichtbarkeitssteuerungen](/de/features/visibility-controls/) für Details zur kombinierten Filterung.
