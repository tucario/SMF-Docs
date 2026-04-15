---
title: Akcje na plikach
description: Dostępne akcje dla poszczególnych plików w Smarter Files.
---

## Akcje w menu kontekstowym

Każdy plik w komponencie posiada menu akcji z następującymi opcjami:

![Menu kontekstowe akcji na pliku](/docs/file-actions.png)

| Akcja | Opis | Dostępność |
|---|---|---|
| **View Details** | Otwiera standardową stronę szczegółów pliku Salesforce | Wszyscy użytkownicy |
| **Edit Details** | Edycja nazwy i opisu pliku inline | Użytkownicy z uprawnieniami do edycji |
| **Download** | Pobieranie pojedynczego pliku | Wszyscy użytkownicy |
| **Public Link** | Generowanie publicznego adresu URL do udostępniania pliku | Konfigurowalne przez właściwość komponentu |
| **Delete** | Trwałe usuwanie pliku (z potwierdzeniem) | Użytkownicy z uprawnieniami do usuwania |
| **Remove** | Usunięcie pliku z tego rekordu bez jego kasowania | Tylko tryb Isolated |
| **Set Category** | Przypisanie kategorii widoczności do pliku | Tryb Isolated + uprawnienie Manage Categories |
| **Mark as Private** | Uczynienie pliku widocznym tylko dla Ciebie | Tylko tryb Isolated |
| **Remove Private** | Usunięcie flagi prywatności z pliku | Tryb Isolated, tylko właściciel pliku |

## Natywny podgląd plików

Kliknięcie nazwy pliku otwiera standardowe okno podglądu plików Salesforce -- nie są wymagane żadne zewnętrzne przeglądarki ani wtyczki. Podgląd obsługuje wszystkie typy plików natywnie obsługiwane przez Salesforce (PDF, obrazy, dokumenty Office itp.).
