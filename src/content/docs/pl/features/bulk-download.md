---
title: Zbiorcze pobieranie ZIP
description: Pobierz wszystkie pliki rekordu jako pojedyncze archiwum ZIP — bez ograniczeń rozmiaru.
---

import { Image } from 'astro:assets';
import downloadAll from '../../../../assets/screenshots/download-all-zip.png';

## Przegląd

Pobierz wszystkie pliki dołączone do rekordu jako pojedyncze archiwum ZIP. Link **Download All Files** pojawia się na górze komponentu, gdy dostępny jest co najmniej jeden plik.

<Image src={downloadAll} alt="Komponent plików z trwającym pobieraniem wszystkich plików — widoczny wskaźnik postępu" />

## Jak to działa

Smarter Files dobiera odpowiednią strategię na podstawie łącznego rozmiaru plików:

- **Małe zestawy (domyślnie: łącznie poniżej ~50 MB)** są kompresowane **po stronie klienta** w przeglądarce przy użyciu [JSZip](https://stuk.github.io/jszip/). Archiwum ZIP jest generowane i pobierane w całości na komputerze użytkownika — bez żadnego przetwarzania po stronie serwera.
- **Duże zestawy** są kompresowane **po stronie serwera** przez strumieniowe przesyłanie plików przez serwlet plików Salesforce. Pozwala to ominąć standardowy limit sterty Apex wynoszący 12 MB, więc archiwum nie ma praktycznego ograniczenia rozmiaru.

Użytkownik widzi jeden przycisk „Download All" niezależnie od wybranej ścieżki — komponent decyduje automatycznie.

## Filtrowanie widoczności

Do archiwum ZIP trafiają wyłącznie pliki, które użytkownik ma prawo zobaczyć. Pliki ograniczone przez:

- **Reguły kategorii widoczności** (rola użytkownika nie jest na liście dozwolonych), lub
- **Flagę prywatności** (ustawioną przez innego użytkownika, a bieżący użytkownik nie posiada uprawnienia `View Private Documents`)

...są filtrowane po stronie serwera przed zbudowaniem paczki — nigdy nie trafiają do archiwum, nawet jeśli użytkownik wie o ich istnieniu.

## Zachowanie w przypadku błędów

Jeśli pobranie pojedynczego pliku się nie powiedzie (uszkodzony plik, usunięty między pobraniem a kompresją, cofnięcie uprawnienia w trakcie operacji), archiwum ZIP jest mimo to generowane z pozostałymi plikami, a powiadomienie toast informuje użytkownika, które pliki zostały pominięte. Operacja „Download All" nigdy nie jest przerywana z powodu jednego błędnego pliku.

## Uwagi dotyczące wydajności

- Generowanie archiwum ZIP przebiega asynchronicznie — użytkownik może przejść do innej sekcji, a pobieranie zakończy się, gdy będzie gotowe.
- W przypadku rekordów z setkami plików należy liczyć się z odczuwalnym czasem oczekiwania przy pierwszym kliknięciu; kolejne pobierania tego samego rekordu są szybsze, ponieważ metadane plików są buforowane.
