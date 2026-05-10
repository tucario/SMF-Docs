---
title: Etykiety niestandardowe
description: Jak dostosować etykiety i teksty w Smarter Files.
---

## Przegląd

Każdy element tekstowy widoczny dla użytkownika w komponencie Smarter Files jest przechowywany jako Salesforce Custom Label — łącznie około **98 etykiet** obejmujących przyciski, nagłówki, okna modalne, powiadomienia toast, komunikaty walidacji oraz Configuration Wizard. Dzięki temu możesz:

- Przetłumaczyć komponent na dowolny język obsługiwany przez Salesforce.
- Dostosować słownictwo do terminologii stosowanej w organizacji (np. „Dokumenty" zamiast „Pliki").
- Dostosować komunikaty błędów i powiadomienia toast bez modyfikowania kodu.

## Dostosowywanie etykiet

1. Przejdź do **Setup → Custom Labels** w Salesforce.
2. Filtruj według prefiksu przestrzeni nazw `smarterfiles` (lub wyszukaj `Tucario_`).
3. Kliknij etykietę, aby edytować jej wartość, lub dodaj tłumaczenia w sekcji **Local Translations / Overrides** dla dodatkowych języków.

:::note
Etykiety są umieszczone w przestrzeni nazw pakietu `smarterfiles`. *Nazwy* etykiet zaczynają się od `Tucario_` (historyczny prefiks zachowany we wszystkich wersjach).
:::

## Kategorie etykiet

| Prefiks | Przeznaczenie | Przykłady |
|---|---|---|
| `Tucario_Common_*` | Wspólne teksty interfejsu użytkownika i komunikaty walidacji używane w wielu miejscach | `Tucario_Common_Cancel`, `Tucario_Common_Save`, `Tucario_Common_Upload_Blocked`, `Tucario_Common_Upload_Size_Blocked` |
| `Tucario_Files_*` | Główny komponent listy plików — akcje, błędy, stany pustej listy, opcje sortowania | `Tucario_Files_Action_Delete`, `Tucario_Files_Delete_Error` |
| `Tucario_Wizard_*` | Etykiety kroków Configuration Wizard, monity i potwierdzenia | tytuły kroków, etykiety przycisków, komunikaty statusu wdrożenia |
| `Tucario_Visibility_*` | Kontrole widoczności — kategorie, dokumenty prywatne, przypisywanie ról | selektor kategorii, „Mark as Private" / „Remove Private", etykiety hierarchii ról |

## Przykład: zmiana nazwy „Files" na „Documents"

1. Setup → Custom Labels → wyszukaj `Tucario_Files_Card_Title` (lub etykietę odpowiadającą nagłówkowi, który chcesz zmienić).
2. Kliknij **Edit** → zmień wartość na `Documents`.
3. Zapisz. Komponent pobierze nową wartość przy następnym załadowaniu strony — bez ponownego wdrożenia.

Jeśli chcesz stosować inny tekst dla poszczególnych miejsc na stronie rekordu, użyj właściwości projektu **Card Title** bezpośrednio na komponencie — zastępuje ona etykietę tylko dla tej konkretnej instancji.
