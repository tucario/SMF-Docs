---
title: Massen-ZIP-Download
description: Alle Dateien eines Datensatzes als einzelnes ZIP-Archiv herunterladen – ohne Größenlimit.
---

import { Image } from 'astro:assets';
import downloadAll from '../../../../assets/screenshots/download-all-zip.png';

## Übersicht

Laden Sie alle an einen Datensatz angehängten Dateien als einzelnes ZIP-Archiv herunter. Der Link **Download All Files** erscheint oben in der Komponente, sobald mindestens eine Datei vorhanden ist.

<Image src={downloadAll} alt="Dateikomponente mit laufendem Download All – ein Ladeindikator wird angezeigt" />

## Funktionsweise

Smarter Files wählt die passende Strategie basierend auf der Gesamtdateigröße:

- **Kleine Dateimengen (Standard: unter ca. 50 MB gesamt)** werden **clientseitig** im Browser per [JSZip](https://stuk.github.io/jszip/) gepackt. Das ZIP wird vollständig auf dem Rechner des Benutzers generiert und heruntergeladen – ohne serverseitige Verarbeitung.
- **Große Dateimengen** werden **serverseitig** gepackt, indem Dateien über das Salesforce File Servlet gestreamt werden. Dadurch wird das standardmäßige 12-MB-Apex-Heap-Limit umgangen, sodass es für das Archiv praktisch keine Größenbeschränkung gibt.

Der Benutzer sieht unabhängig vom gewählten Pfad eine einzige „Download All"-Schaltfläche; die Komponente entscheidet automatisch.

## Sichtbarkeitsfilterung

In das ZIP werden nur Dateien aufgenommen, die der Benutzer sehen darf. Dateien, die gesperrt sind durch:

- **Sichtbarkeitskategorie-Regeln** (die Rolle des Benutzers steht nicht auf der Berechtigungsliste), oder
- **Privat-Flag** (gesetzt von einem anderen Benutzer, und dem aktuellen Benutzer fehlt `View Private Documents`)

…werden serverseitig herausgefiltert, bevor das Paket erstellt wird – sie erscheinen im Archiv nicht, auch wenn der Benutzer von ihrer Existenz weiß.

## Verhalten bei Fehlern

Wenn eine einzelne Datei nicht heruntergeladen werden kann (beschädigt, zwischenzeitlich gelöscht, Berechtigung während des Vorgangs entzogen), wird das ZIP trotzdem mit den verbleibenden Dateien erstellt. Ein Toast-Hinweis informiert den Benutzer darüber, welche Dateien übersprungen wurden. Der Download-Vorgang bricht wegen einer einzelnen fehlerhaften Datei nie vollständig ab.

## Hinweise zur Performance

- Die ZIP-Generierung läuft asynchron – der Benutzer kann die Seite verlassen, und der Download wird fertiggestellt, sobald er bereit ist.
- Bei Datensätzen mit Hunderten von Dateien ist beim ersten Klick mit einer spürbaren Wartezeit zu rechnen; nachfolgende Downloads desselben Datensatzes sind schneller, da die Datei-Metadaten zwischengespeichert werden.
