---
title: Dokumenty prywatne
description: Oznaczanie plików jako prywatne w celu ograniczenia dostępu do właściciela pliku i zatwierdzonych przeglądających.
---

import { Image } from 'astro:assets';
import markPrivate from '../../../../assets/screenshots/mark-as-private.png';

:::note
Dostępne wyłącznie w **edycji AppExchange**. Wymaga trybu przechowywania **Isolated** na instancji komponentu.
:::

## Przegląd

Każdy użytkownik może oznaczyć plik jako prywatny. Prywatny plik jest widoczny wyłącznie dla:

1. **Użytkownika, który oznaczył go jako prywatny** (zapisanego w polu `Owner_Id__c` obiektu łącznikowego widoczności).
2. **Użytkowników z uprawnieniem niestandardowym `Tucario_View_Private_Documents`** — zazwyczaj przypisywanych administratorom, HR lub działowi compliance za pomocą zestawu uprawnień **Tucario - View Private Documents**.

Pliki prywatne wyświetlają ikonę kłódki obok nazwy pliku zarówno w widoku listy, jak i kafelków.

## Oznaczanie pliku jako prywatnego

1. Otwórz menu kontekstowe pliku.
2. Wybierz **Mark as Private**.
3. Obok nazwy pliku pojawi się ikona kłódki — plik jest teraz ukryty dla wszystkich oprócz właściciela i użytkowników z uprawnieniem View Private.

<Image src={markPrivate} alt="Plik oznaczony jako prywatny z widoczną ikoną kłódki na liście plików" />

## Usuwanie flagi prywatności

Właściciel (oraz każdy użytkownik z uprawnieniem `View Private Documents`) może usunąć flagę:

1. Otwórz menu kontekstowe prywatnego pliku.
2. Wybierz **Remove Private**.
3. Ikona kłódki znika, a plik wraca do normalnych reguł widoczności (w tym ewentualnych ograniczeń kategorii).

## Kto może zobaczyć prywatny plik

| Użytkownik | Czy widzi plik? |
|---|---|
| Właściciel (który oznaczył go jako prywatny) | Tak |
| Użytkownik z uprawnieniem **View Private Documents** | Tak |
| Wszyscy pozostali | Nie — plik jest filtrowany po stronie serwera i nigdy nie pojawia się na liście, nawet jeśli wcześniej wiedzieli o jego istnieniu |

## Łączenie z kategoriami

Prywatność i widoczność oparta na kategoriach działają łącznie — oba warunki muszą być spełnione, aby plik był widoczny. Jeśli plik jest prywatny **i** przypisany do kategorii tylko dla HR, zobaczyć go mogą wyłącznie użytkownicy spełniający *oba* warunki (właściciel z rolą HR lub użytkownik View Private z rolą HR). Szczegółowa logika filtrowania znajduje się w sekcji [Kontrola widoczności](/features/visibility-controls/).

## Co dzieje się w tle

Gdy oznaczasz plik jako prywatny, Smarter Files zapisuje dane w obiekcie łącznikowym `Tucario_File_Visibility__c`:

- Ustawia `Is_Private__c = true`.
- Ustawia `Owner_Id__c` na bieżącego użytkownika (wymagane przez regułę walidacji `Owner_Required_When_Private` — `Owner_Id__c` nie może być puste, gdy `Is_Private__c` ma wartość true).

Całe filtrowanie odbywa się po stronie serwera w metodzie `getFilesList()`, zanim odpowiedź opuści serwer Salesforce — prywatne pliki nigdy nie są przesyłane do nieuprawnionych przeglądarek.
