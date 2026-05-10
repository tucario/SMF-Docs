---
title: Kontrola widoczności
description: Kategorie dokumentów, filtrowanie oparte na rolach i dokumenty prywatne w Smarter Files.
---

import { Image } from 'astro:assets';
import setCategory from '../../../../assets/screenshots/set-category-modal.png';
import wizardDefine from '../../../../assets/screenshots/wizard-define-types.png';
import wizardDefineMultiple from '../../../../assets/screenshots/wizard-define-types-multiple.png';
import wizardRoles from '../../../../assets/screenshots/wizard-assign-roles.png';
import wizardReview from '../../../../assets/screenshots/wizard-review-deploy.png';
import wizardWelcome from '../../../../assets/screenshots/wizard-welcome.png';
import wizardHome from '../../../../assets/screenshots/wizard-home.png';

:::note
Dostępne wyłącznie w **edycji AppExchange**. **Storage Mode** komponentu musi być ustawiony na **Isolated**, aby kontrole widoczności były stosowane.
:::

## Przegląd

Kontrole widoczności pozwalają administratorom ograniczać dostęp do plików według **kategorii dokumentu** (przypisanej do ról w hierarchii ról Salesforce) oraz umożliwiają każdemu użytkownikowi oznaczanie poszczególnych plików jako **prywatne**. Całe filtrowanie odbywa się **po stronie serwera** w metodzie `getFilesList()` — pliki z ograniczonym dostępem nigdy nie trafiają do nieuprawnionych przeglądarek.

## Wymaganie trybu przechowywania

| | Standard | Isolated |
|---|---|---|
| Pliki widoczne na standardowej liście powiązanej Files | Tak | Nie |
| Przypisywanie kategorii | Niedostępne | Dostępne |
| Oznaczanie jako prywatne | Niedostępne | Dostępne |
| Filtrowanie widoczności oparte na rolach | Niedostępne | Dostępne |

W trybie Standard nie jest tworzony żaden rekord łącznikowy, więc nie ma gdzie przechowywać kategorii ani flagi prywatności. Przełącz na Isolated dla każdego rekordu, w którym filtrowanie widoczności ma znaczenie. Zobacz [Storage Modes](/features/storage-modes/).

## Kategorie dokumentów

Kategoria to etykieta przypisana do pliku, która określa, kto może go zobaczyć. Kategorie są przechowywane jako rekordy `Tucario_Visibility_Rule__mdt` i zarządzane przez Configuration Wizard.

Typowe przykłady: *Dokumenty HR*, *Dokumenty underwritingu*, *Raporty finansowe*, *Umowy prawne*, *Dokumentacja medyczna*.

### Jak działa filtrowanie

Każda reguła przypisuje kategorię do listy dozwolonych wartości `DeveloperName` ról. Dla każdego pliku:

- Plik **nie ma kategorii** → widoczny dla wszystkich (domyślnie otwarty).
- Plik ma kategorię, **rola użytkownika jest na liście dozwolonych** → widoczny.
- Plik ma kategorię, **rola użytkownika nie jest dozwolona** → ukryty.
- Plik ma kategorię, **reguła jest nieaktywna** (`Is_Active = false`) → widoczny dla wszystkich (zdezaktywowane reguły nie filtrują).
- Użytkownik posiada uprawnienie niestandardowe **Manage Categories** → pomija filtrowanie kategorii (zawsze widzi wszystkie pliki).

Wiele reguł odwołujących się do tej samej kategorii łączy się logiką **LUB** — użytkownik przechodzi filtr, jeśli jego rola figuruje na *jakiejkolwiek* liście dozwolonych dla tej kategorii.

### Przypisywanie kategorii do pliku

Użytkownicy z uprawnieniem **Manage Categories** mogą przypisać kategorię z menu kontekstowego pliku:

1. Otwórz menu kontekstowe pliku i wybierz **Set Category**.
2. Wybierz kategorię z selektora lub wybierz **No Category**, aby usunąć przypisanie.
3. Widoczność pliku aktualizuje się natychmiast.

<Image src={setCategory} alt="Okno modalne Set Category z otwartym selektorem kategorii" />

:::caution
Użytkownicy *bez* uprawnienia Manage Categories nadal widzą opcję **Set Category**, ale otrzymują ostrzeżenie z potwierdzeniem, że plik może zniknąć z ich własnego widoku po zastosowaniu kategorii z ograniczonym dostępem (ponieważ nie pomijają filtrowania).
:::

## Konfiguracja reguł widoczności

Otwórz aplikację **Smarter Files by Tucario** z App Launchera. Configuration Wizard otwiera się na ekranie głównym z dwiema kartami: *Manage Document Categories* i *Private Documents*.

<Image src={wizardWelcome} alt="Ekran powitalny Configuration Wizard" />

<Image src={wizardHome} alt="Strona główna Configuration Wizard z kartami Manage Categories i Private Documents" />

Kliknij **Manage Document Categories**, aby wejść do 3-krokowego kreatora reguł.

### Krok 1 — Definiowanie typów dokumentów

Dodaj typy dokumentów, którymi chcesz zarządzać. Każdy z nich ma nazwę i opcjonalny opis.

<Image src={wizardDefine} alt="Krok 1 kreatora: definiowanie typu dokumentu o nazwie Underwriting Documents" />

<Image src={wizardDefineMultiple} alt="Krok 1 kreatora z wieloma dodanymi typami dokumentów" />

### Krok 2 — Przypisywanie ról

Dla każdego typu dokumentu wybierz role, które mogą zobaczyć pliki w tej kategorii. Podwójna lista wyboru jest wypełniana z hierarchii ról organizacji (maksymalnie 1000 ról).

<Image src={wizardRoles} alt="Krok 2 kreatora: podwójna lista wyboru z dostępnymi rolami po lewej i dozwolonymi rolami po prawej" />

### Krok 3 — Przegląd i wdrożenie

Przejrzyj aktywne i zdezaktywowane kategorie, a następnie kliknij **Deploy Configuration**. Kreator wywołuje metodę `Metadata.Operations.enqueueDeployment()`, aby asynchronicznie zapisać reguły jako rekordy `Tucario_Visibility_Rule__mdt`, monitorując postęp wdrożenia. W trakcie operacji wyświetlany jest wskaźnik postępu.

<Image src={wizardReview} alt="Krok 3 kreatora: przegląd wszystkich kategorii z przyciskiem Deploy" />

:::note
**Usuwanie kategorii:** usunięcie typu dokumentu z kreatora i wdrożenie **nie powoduje** usunięcia rekordu CMT — ustawia jego wartość `Is_Active = false`. Salesforce Metadata API nie obsługuje usuwania rekordów CMT z poziomu Apex, więc dezaktywacja jest najbliższym odpowiednikiem. Zdezaktywowane kategorie nie pojawiają się już w selektorze ani nie filtrują plików; można je ponownie aktywować, dodając kategorię o tej samej nazwie.
:::

## Dokumenty prywatne

Oprócz filtrowania opartego na kategoriach każdy użytkownik może oznaczyć poszczególne pliki jako prywatne — widoczne wyłącznie dla niego samego i użytkowników z uprawnieniem **View Private Documents**. Pełny opis przepływu znajdziesz w sekcji [Dokumenty prywatne](/features/private-documents/).

## Logika połączonego filtrowania

Gdy plik ma zarówno kategorię, jak i flagę prywatności, **oba warunki muszą być spełnione**, aby plik był widoczny. Pseudokod metody `getFilesList()`:

```
For each file on the record:
  1. Private check:
     If Is_Private AND user is not Owner_Id
     AND user lacks "View Private Documents" → HIDE

  2. Category check:
     If Visibility_Category is set
     AND a matching active rule exists
     AND user's role is not in Permitted_Roles
     AND user lacks "Manage Categories" → HIDE

  3. Otherwise → SHOW
```

Wygrywa bardziej restrykcyjny z obu warunków.

## Zestawy uprawnień

| Zestaw uprawnień | Przeznaczenie |
|---|---|
| **Tucario Files** | Podstawowy dostęp. Wymagany dla każdego użytkownika. Przyznaje dostęp do aplikacji, kontrolerów i obiektu łącznikowego. |
| **Tucario - Manage File Categories** | Dostęp do menu Set Category oraz pomijanie filtrowania kategorii (zawsze wyświetla wszystkie pliki). |
| **Tucario - View Private Documents** | Wyświetlanie plików oznaczonych jako prywatne przez innych użytkowników. |

## Przypadki użycia

- **Dokumenty HR** widoczne wyłącznie dla ról HR, z oznaczaniem jako prywatne dla akt poszczególnych pracowników.
- **Raporty finansowe** ograniczone do ról finansowych, niezależnie od tego, kto je przesłał.
- **Umowy prawne** dostępne wyłącznie dla ról w dziale prawnym, z oznaczaniem jako prywatne dla wersji roboczych umów.
- **Dokumenty underwritingu** zawierające dane osobowe (PII), ograniczone do ról underwriterów.
- **Poufne załączniki do współdzielonego rekordu** — druga instancja komponentu w trybie Isolated z zastosowanymi kategoriami, całkowicie ukryta ze standardowej listy powiązanej Files.
