---
title: Tryby przechowywania
description: Tryb Standard vs Isolated i migracja plików.
---

## Przegląd

Smarter Files obsługuje dwa tryby przechowywania, które kontrolują sposób powiązania plików z rekordami. Tryb jest ustawiany dla każdej instancji komponentu w Lightning App Builder.

![Konfiguracja trybu przechowywania w App Builder](/docs/storagemode-isolated.png)

## Tryb Standard (domyślny)

- Pliki są powiązane przez natywny Salesforce `ContentDocumentLink`.
- Pliki pojawiają się zarówno w komponencie Smarter Files, **jak i** na standardowej liście powiązanej Files.
- Kontrole widoczności (kategorie, dokumenty prywatne) **nie są dostępne**.
- Najlepszy dla: prostego zarządzania plikami, gdy chcesz zachować kompatybilność ze standardową listą powiązaną Files.

## Tryb Isolated

- Pliki są powiązane wyłącznie przez rekord połączeniowy (`Tucario_File_Visibility__c`).
- Pliki pojawiają się **tylko** w komponencie Smarter Files -- są ukryte na standardowej liście powiązanej Files.
- Kontrole widoczności są **w pełni dostępne**: kategorie, dokumenty prywatne, filtrowanie oparte na rolach.
- Najlepszy dla: scenariuszy, w których trzeba kontrolować, kto może widzieć które pliki.

## Porównanie

| | Standard | Isolated |
|---|---|---|
| Pliki widoczne na standardowej liście powiązanej Files | Tak | Nie |
| Przypisywanie kategorii | Niedostępne | Dostępne |
| Oznaczanie jako prywatne | Niedostępne | Dostępne |
| Filtrowanie widoczności oparte na rolach | Niedostępne | Dostępne |
| Migracja wymagana przy przełączaniu | -- | Tak |

## Migracja do trybu Isolated

Przy przełączaniu komponentu z trybu Standard na Isolated na rekordzie, który już posiada pliki, istniejące pliki nie będą widoczne do momentu ich migracji.

Komponent wyświetla baner ostrzegawczy z przyciskiem **Migrate Existing Files**. Kliknięcie go:

1. Uruchamia zadanie wsadowe, które tworzy rekordy połączeniowe dla wszystkich istniejących rekordów `ContentDocumentLink` na danym rekordzie.
2. Wyświetla pasek postępu podczas migracji.
3. Wyświetla komunikat o powodzeniu po zakończeniu.

Migracja jest bezpieczna do ponownego uruchomienia -- wykorzystuje operacje upsert na polu zewnętrznego identyfikatora `Content_Document_Id__c`.
