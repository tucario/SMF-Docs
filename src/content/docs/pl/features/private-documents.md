---
title: Dokumenty prywatne
description: Oznaczanie plików jako prywatne w celu ograniczenia dostępu do właściciela pliku.
---

:::note
Ta funkcja jest dostępna wyłącznie w **edycji AppExchange** i wymaga trybu przechowywania **Isolated**.
:::

## Przegląd

Każdy użytkownik może oznaczyć plik jako prywatny, dzięki czemu jest on widoczny tylko dla niego samego i użytkowników z uprawnieniem **View Private Documents**. Pliki prywatne wyświetlają ikonę kłódki wskazującą ich ograniczony status.

## Oznaczanie pliku jako prywatnego

1. Kliknij menu akcji na pliku.
2. Wybierz **Mark as Private**.
3. Obok nazwy pliku pojawi się ikona kłódki.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

Plik jest teraz widoczny tylko dla:
- Użytkownika, który oznaczył go jako prywatny (właściciel)
- Użytkowników z zestawem uprawnień **Tucario - View Private Documents**

## Usuwanie statusu prywatnego

Właściciel pliku może usunąć flagę prywatności:

1. Kliknij menu akcji na prywatnym pliku.
2. Wybierz **Remove Private**.
3. Plik wraca do normalnych reguł widoczności.

## Kto może widzieć pliki prywatne?

| Użytkownik | Czy widzi plik? |
|---|---|
| Właściciel pliku (który oznaczył go jako prywatny) | Tak |
| Użytkownik z uprawnieniem **View Private Documents** | Tak |
| Inni użytkownicy | Nie |

Jeśli plik ma również przypisaną kategorię, zarówno kontrola prywatności, jak i kontrola kategorii muszą zostać spełnione. Zobacz [Kontrola widoczności](/pl/features/visibility-controls/), aby poznać szczegóły dotyczące połączonego filtrowania.
