---
title: Konfiguracja komponentu
description: Jak dodać i skonfigurować Smarter Files na stronie rekordu.
---

import { Image } from 'astro:assets';
import appBuilder from '../../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../../assets/screenshots/app-builder-card-title.png';

## Dodawanie do strony rekordu

1. Otwórz dowolną stronę rekordu w **Lightning App Builder**.
2. Znajdź **Smarter Files** w palecie komponentów w sekcji *Custom — Managed*.
3. Przeciągnij go na wybrany obszar układu strony.
4. Skonfiguruj właściwości projektu w panelu po prawej stronie.
5. Zapisz i aktywuj stronę.

<Image src={appBuilder} alt="Lightning App Builder z wybranym komponentem Smarter Files i otwartym panelem właściwości" />

## Właściwości komponentu

Komponent udostępnia osiem właściwości projektu na pasku bocznym App Buildera:

| Właściwość | Opis | Domyślna wartość |
|---|---|---|
| **Card Title** | Tekst nagłówka komponentu. Zastępuje etykietę niestandardową `Tucario_Files_Card_Title` dla tej instancji. | `Files` |
| **Storage Mode** | `Standard` — pliki powiązane przez `ContentDocumentLink` (widoczne na standardowej liście powiązanej Files). `Isolated` — pliki powiązane wyłącznie przez obiekt łącznikowy `Tucario_File_Visibility__c` (ukryte ze standardowej listy powiązanej Files, włącza kontrolę widoczności). Zobacz [Storage Modes](/features/storage-modes/). | `Standard` |
| **Display Mode** | Sposób wyświetlania plików: `List` (pionowe wiersze z metadanymi) lub `Tiles` (siatka kart z ikonami typów plików). | `List` |
| **Default Sort Order** | Kolejność sortowania przy pierwszym załadowaniu. Użytkownicy mogą ją zmienić w czasie działania. Opcje: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za`. | `date-newest` |
| **Initial Files Displayed** | Maksymalna liczba plików wyświetlanych przy pierwszym załadowaniu. Gdy jest ich więcej, pojawia się link „Pokaż wszystkie". Ustaw `0`, aby wyświetlać wszystkie. | `5` |
| **Allowed File Extensions** | Lista dozwolonych rozszerzeń oddzielonych przecinkami (np. `pdf,docx,png`). Tylko te typy plików można przesyłać. Pozostaw puste, aby zezwolić na wszystkie. | *(puste — wszystkie dozwolone)* |
| **Excluded File Extensions** | Lista zablokowanych rozszerzeń oddzielonych przecinkami (np. `exe,bat,sh`). Te typy plików są blokowane przy przesyłaniu. | *(puste — żadne nie są blokowane)* |
| **Max File Size (MB)** | Limit rozmiaru przesyłanego pliku w megabajtach. Ustaw `0`, aby nie stosować limitu. | `0` |

<Image src={cardTitle} alt="Edytowanie właściwości Card Title w App Builderze w celu zastąpienia nagłówka komponentu" />

### Logika ograniczeń przesyłania

Gdy skonfigurowane są zarówno lista **dozwolonych**, jak i lista **wykluczonych** rozszerzeń, działają one łącznie:

1. **Najpierw sprawdzana jest lista dozwolonych** — jeśli rozszerzenie pliku nie znajduje się na liście dozwolonych, plik jest blokowany.
2. **Następnie sprawdzana jest lista wykluczonych** — jeśli plik przeszedł sprawdzenie listy dozwolonych, ale jego rozszerzenie znajduje się na liście wykluczonych, jest nadal blokowany.

Plik musi znajdować się na liście dozwolonych **i** nie może znajdować się na liście wykluczonych, aby został zaakceptowany.

:::tip
W większości przypadków wystarczy jedno z tych ustawień. Używaj listy **dozwolonych**, gdy chcesz ograniczyć przesyłanie do określonego zestawu znanych typów (np. `pdf,docx,xlsx`). Używaj listy **wykluczonych**, gdy chcesz zablokować konkretne typy, ale zezwalać na wszystkie inne (np. `exe,bat`).
:::

## Wskazówki dotyczące rozmieszczenia

- Działa w głównym obszarze treści, na pasku bocznym i w obszarach pełnej szerokości strony rekordu.
- Można go umieścić na stronie rekordu dowolnego standardowego lub niestandardowego obiektu.
- Obsługiwanych jest wiele instancji na tej samej stronie — przydatne do podziału rekordu na różne przestrzenie plików (np. jedna instancja w trybie Standard do plików ogólnych i jedna w trybie Isolated do dokumentów poufnych). Ustaw różne **Card Titles**, aby je odróżnić.
- Komponent działa **wyłącznie na stronach rekordów**. Configuration Wizard jest dostarczany jako oddzielna strona aplikacji dostępna z pozycji *Smarter Files by Tucario* w App Launcherze.
