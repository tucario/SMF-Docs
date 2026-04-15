---
title: Pobieranie zbiorcze ZIP
description: Pobierz wiele plików jako pojedyncze archiwum ZIP.
---

## Przegląd

Pobierz wszystkie pliki dołączone do rekordu jako pojedyncze archiwum ZIP -- koniec z pobieraniem plików jeden po drugim.

Link **Download All Files** pojawia się na górze komponentu, gdy dostępne są pliki. Kliknięcie go pakuje wszystkie widoczne pliki do archiwum ZIP i uruchamia pobieranie w przeglądarce.

## Jak to działa

1. Komponent pobiera całą zawartość plików po stronie klienta za pomocą Salesforce Content API.
2. Pliki są kompresowane do archiwum ZIP za pomocą [JSZip](https://stuk.github.io/jszip/).
3. Archiwum ZIP jest generowane w przeglądarce -- bez przetwarzania po stronie serwera ani usług zewnętrznych.
4. Pobieranie rozpoczyna się automatycznie po przygotowaniu archiwum.

## Obsługa dużych plików

W przypadku rekordów z wieloma lub dużymi plikami komponent wyświetla wskaźnik postępu podczas generowania archiwum ZIP. Jeśli pobranie pojedynczego pliku się nie powiedzie (np. z powodu limitu rozmiaru), archiwum ZIP jest nadal tworzone z pozostałymi plikami, a wyświetlane jest ostrzeżenie w formie powiadomienia toast.
