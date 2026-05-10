---
title: Ansichten & Sortierung
description: Listenansicht, Kachelansicht und Sortieroptionen in Smarter Files.
---

import { Image } from 'astro:assets';
import listView from '../../../../assets/screenshots/list-view.png';
import tileView from '../../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../../assets/screenshots/empty-state.png';

## Listenansicht

Das Standard-Layout – vertikale Zeilen mit Dateiname, Typ-Icon, Datum der letzten Änderung, Größe, Besitzer, Kategorie-Badge (falls zugewiesen) und einem Schlosssymbol für private Dateien. Jede Zeile verfügt über einen Kontextmenü-Button, der dateispezifische Aktionen einblendet.

<Image src={listView} alt="Smarter Files Listenansicht mit zwei Dateien und dem Link „Download All Files"" />

## Kachelansicht

Ein Karten-Raster mit auffälligen Dateitypicons. Nützlich bei Datensätzen mit vielen Bildern oder wenn das schnelle Erfassen auf einen Blick wichtiger ist als das Lesen von Metadaten.

<Image src={tileView} alt="Smarter Files Kachelansicht mit Dateien als responsives Karten-Raster" />

## Ansicht wechseln

Der Administrator legt die **Standard**-Ansicht über die Design-Eigenschaft **Display Mode** im App Builder fest (`List` oder `Tiles`). Benutzer können zur Laufzeit zwischen den Ansichten wechseln; ihre Auswahl wird für diese Datensatzseite gespeichert.

## Sortierung

Sechs Sortieroptionen, alle im Sortier-Dropdown verfügbar:

| Option | Sortiert nach |
|---|---|
| Datum (Neueste zuerst) | `LastModifiedDate` absteigend – der Standard |
| Datum (Älteste zuerst) | `LastModifiedDate` aufsteigend |
| Größe (Größte zuerst) | `ContentSize` absteigend |
| Größe (Kleinste zuerst) | `ContentSize` aufsteigend |
| Name (A–Z) | `Title` alphabetisch |
| Name (Z–A) | `Title` umgekehrt alphabetisch |

<Image src={sortMenu} alt="Geöffnetes Sortier-Dropdown mit den sechs Sortieroptionen" />

Der Administrator legt den **Standard** über die Design-Eigenschaft **Default Sort Order** fest. Benutzer können die Sortierung zur Laufzeit überschreiben – ihre Auswahl bleibt während der Sitzung für diese Datensatzseite erhalten.

## Leer-Zustand

Wenn der Datensatz keine Dateien enthält (oder keine, die der Benutzer nach der Sichtbarkeitsfilterung sehen darf), zeigt die Komponente einen übersichtlichen Leer-Zustand an – mit der Upload-Möglichkeit weiterhin sichtbar.

<Image src={emptyState} alt="Smarter Files Leer-Zustand mit Upload-Hinweis" />
