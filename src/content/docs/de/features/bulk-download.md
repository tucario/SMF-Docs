---
title: Massen-ZIP-Download
description: Mehrere Dateien als einzelnes ZIP-Archiv herunterladen.
---

## Übersicht

Laden Sie alle an einen Datensatz angehängten Dateien als einzelnes ZIP-Archiv herunter — kein einzelnes Herunterladen von Dateien mehr.

Der Link **Download All Files** erscheint oben in der Komponente, wenn Dateien vorhanden sind. Ein Klick darauf packt alle sichtbaren Dateien in eine ZIP-Datei und löst einen Browser-Download aus.

## So funktioniert es

1. Die Komponente ruft alle Dateiinhalte clientseitig über die Salesforce Content API ab.
2. Dateien werden mit [JSZip](https://stuk.github.io/jszip/) in ein ZIP-Archiv komprimiert.
3. Das ZIP wird im Browser generiert — keine serverseitige Verarbeitung oder externe Dienste erforderlich.
4. Der Download startet automatisch, sobald das Archiv fertig ist.

## Umgang mit großen Dateien

Bei Datensätzen mit vielen oder großen Dateien zeigt die Komponente einen Fortschrittsbalken während der ZIP-Generierung an. Wenn der Download einer einzelnen Datei fehlschlägt (z. B. aufgrund von Größenlimits), wird das ZIP trotzdem mit den verbleibenden Dateien erstellt und ein Warnhinweis angezeigt.
