---
title: Widoki i sortowanie
description: Widok listy, widok kafelków i opcje sortowania w Smarter Files.
---

import { Image } from 'astro:assets';
import listView from '../../../../assets/screenshots/list-view.png';
import tileView from '../../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../../assets/screenshots/empty-state.png';

## Widok listy

Domyślny układ — pionowe wiersze pokazujące nazwę pliku, ikonę typu, datę ostatniej modyfikacji, rozmiar, właściciela, znacznik kategorii (jeśli przypisany) oraz ikonę kłódki prywatności dla plików prywatnych. Każdy wiersz posiada przycisk menu kontekstowego odsłaniający akcje dostępne dla danego pliku.

<Image src={listView} alt="Widok listy Smarter Files z dwoma plikami i linkiem Download All Files" />

## Widok kafelków

Siatka kart z wyraźnymi ikonami typów plików. Przydatny w przypadku rekordów z dużą liczbą obrazów lub gdy szybkie skanowanie wzrokiem jest ważniejsze niż odczytywanie metadanych.

<Image src={tileView} alt="Widok kafelków Smarter Files prezentujący pliki jako responsywną siatkę kart" />

## Przełączanie widoków

Administrator ustawia **domyślny** widok za pomocą właściwości projektu **Display Mode** w App Builderze (`List` lub `Tiles`). Użytkownicy mogą przełączać się między widokami w czasie działania — ich preferencja jest zapamiętywana dla danej strony rekordu.

## Sortowanie

Sześć opcji sortowania dostępnych w menu rozwijanym:

| Opcja | Sortuje według |
|---|---|
| Data (od najnowszych) | `LastModifiedDate` malejąco — domyślna |
| Data (od najstarszych) | `LastModifiedDate` rosnąco |
| Rozmiar (od największych) | `ContentSize` malejąco |
| Rozmiar (od najmniejszych) | `ContentSize` rosnąco |
| Nazwa (A–Z) | `Title` alfabetycznie |
| Nazwa (Z–A) | `Title` odwrotnie alfabetycznie |

<Image src={sortMenu} alt="Otwarte menu rozwijane sortowania z sześcioma opcjami" />

Administrator ustawia **domyślną** kolejność za pomocą właściwości projektu **Default Sort Order**. Użytkownicy mogą ją zmienić w czasie działania — ich wybór jest zachowywany dla danej strony rekordu przez czas trwania sesji.

## Stan pustej listy

Gdy rekord nie ma żadnych plików (lub żadnych, które użytkownik ma prawo zobaczyć po filtrowaniu widoczności), komponent wyświetla schludny stan pustej listy z nadal widoczną opcją przesyłania plików.

<Image src={emptyState} alt="Stan pustej listy Smarter Files z monitem o przesłanie pliku" />
