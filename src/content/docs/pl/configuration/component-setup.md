---
title: Konfiguracja komponentu
description: Jak dodać i skonfigurować Smarter Files na stronie rekordu.
---

## Dodawanie do strony rekordu

1. Otwórz dowolną stronę rekordu w **Lightning App Builder**.
2. Znajdź **Smarter Files** w palecie komponentów.
3. Przeciągnij go w wybrane miejsce na układzie strony.
4. Zapisz i aktywuj stronę.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/put-on-flexipage.mp4" type="video/mp4" />
</video>

## Właściwości komponentu

![Panel konfiguracji App Builder](/docs/storagemode-isolated.png)

Następujące właściwości są dostępne w panelu bocznym Lightning App Builder:

| Właściwość | Opis | Domyślnie |
|---|---|---|
| **Card Title** | Tekst nagłówka komponentu | `Files` |
| **Storage Mode** | `Standard` -- pliki połączone przez ContentDocumentLink (widoczne na liście powiązanej Files). `Isolated` -- pliki połączone wyłącznie przez rekord połączeniowy (ukryte na liście powiązanej Files, włącza kontrolę widoczności). | `Standard` |
| **Display Mode** | Sposób wyświetlania plików: `List` (wiersze pionowe) lub `Tiles` (siatka kart) | `List` |
| **Default Sort Order** | Początkowa kolejność sortowania listy plików. Użytkownicy mogą ją zmieniać w trakcie pracy. Opcje: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za` | `date-newest` |
| **Initial Files Displayed** | Maksymalna liczba plików wyświetlanych początkowo. Ustaw `0`, aby pokazać wszystkie pliki. Link "Pokaż wszystkie" pojawia się, gdy jest więcej plików. | `5` |
| **Allowed File Extensions** | Lista dozwolonych rozszerzeń oddzielonych przecinkami (np. `pdf,docx,png`). Tylko te typy mogą być przesyłane. Pozostaw puste, aby zezwolić na wszystkie typy. | Wszystkie typy |
| **Excluded File Extensions** | Lista blokowanych rozszerzeń oddzielonych przecinkami (np. `exe,bat,sh`). Te typy są blokowane podczas przesyłania. | Brak |
| **Max File Size (MB)** | Maksymalny rozmiar przesyłanego pliku w megabajtach. Ustaw `0`, aby nie stosować limitu. | `0` (bez limitu) |

### Logika ograniczeń przesyłania

Gdy skonfigurowane są zarówno **dozwolone**, jak i **wykluczone** rozszerzenia plików, działają one wspólnie:

1. **Najpierw sprawdzana jest lista dozwolonych** -- jeśli rozszerzenie pliku nie znajduje się na liście dozwolonych, plik jest blokowany.
2. **Następnie sprawdzana jest lista wykluczonych** -- jeśli plik przeszedł kontrolę dozwolonych, ale jego rozszerzenie jest na liście wykluczonych, nadal jest blokowany.

Innymi słowy, plik musi znajdować się na liście dozwolonych **i** nie znajdować się na liście wykluczonych, aby został zaakceptowany.

:::tip
W większości przypadków potrzebujesz tylko jednego z tych dwóch ustawień. Użyj **Allowed**, gdy chcesz ograniczyć przesyłanie do małego zestawu znanych typów (np. `pdf,docx,xlsx`). Użyj **Excluded**, gdy chcesz zablokować konkretne typy, ale zezwolić na wszystkie pozostałe (np. `exe,bat`).
:::

## Wskazówki dotyczące rozmieszczenia

- Działa w głównym obszarze treści, panelu bocznym lub regionach na pełną szerokość.
- Można go umieścić na dowolnej stronie rekordu obiektu standardowego lub niestandardowego.
- Obsługiwanych jest wiele instancji na jednej stronie (np. różne konfiguracje na różnych zakładkach).
