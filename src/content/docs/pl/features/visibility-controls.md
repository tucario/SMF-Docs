---
title: Kontrola widoczności
description: Kontrole widoczności dokumentów dostępne w edycji AppExchange.
---

:::note
Ta funkcja jest dostępna wyłącznie w **edycji AppExchange** i wymaga ustawienia **Storage Mode** komponentu na **Isolated**.
:::

## Przegląd

Kontrole widoczności pozwalają administratorom ograniczać dostęp do plików na podstawie kategorii dokumentów i ról użytkowników. Pliki mogą być przypisywane do kategorii, a każda kategoria może być ograniczona do określonych ról -- użytkownicy spoza tych ról nie widzą plików. Dodatkowo każdy użytkownik może oznaczyć plik jako prywatny, dzięki czemu jest on widoczny tylko dla niego samego i upoważnionych osób.

Całe filtrowanie odbywa się **po stronie serwera** -- pliki, do których użytkownik nie ma dostępu, nigdy nie są przesyłane do przeglądarki.

## Wymaganie trybu przechowywania

Kontrole widoczności są dostępne tylko wtedy, gdy **Storage Mode** komponentu jest ustawiony na **Isolated**:

| | Standard | Isolated |
|---|---|---|
| Pliki widoczne na standardowej liście powiązanej Files | Tak | Nie |
| Przypisywanie kategorii | Niedostępne | Dostępne |
| Oznaczanie jako prywatne | Niedostępne | Dostępne |
| Filtrowanie widoczności oparte na rolach | Niedostępne | Dostępne |

W trybie Isolated pliki są powiązane z rekordem wyłącznie poprzez rekord połączeniowy -- nie pojawiają się na standardowej liście powiązanej Files w Salesforce.

## Kategorie dokumentów

### Czym są kategorie?

Kategoria to etykieta przypisana do pliku, która określa, kto może go widzieć. Kategorie są definiowane przez administratora za pomocą **Configuration Wizard** i przechowywane jako rekordy Custom Metadata Type.

Przykłady:
- Dokumentacja medyczna
- Raporty finansowe
- Umowy prawne
- Notatki wewnętrzne

### Jak działa filtrowanie kategorii

Każda kategoria posiada listę **dozwolonych ról**. Gdy plik ma przypisaną kategorię:

- Jeśli rola użytkownika jest na liście dozwolonych -- plik jest **widoczny**
- Jeśli rola użytkownika NIE jest na liście dozwolonych -- plik jest **ukryty**
- Jeśli do kategorii nie przypisano żadnych ról -- plik jest widoczny dla **wszystkich**
- Jeśli plik nie ma kategorii -- plik jest widoczny dla **wszystkich**

### Przypisywanie kategorii do plików

Użytkownicy z zestawem uprawnień **Tucario - Manage File Categories** mogą przypisywać kategorie:

1. Kliknij menu akcji na pliku.
2. Wybierz **Set Category**.
3. Wybierz kategorię z selektora lub wybierz **No Category**, aby usunąć bieżące przypisanie.

Widoczność pliku aktualizuje się natychmiast.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/assigning-categories-to-files.mp4" type="video/mp4" />
</video>

### Zarządzanie kategoriami

Kategorie są zarządzane za pomocą **Configuration Wizard** w aplikacji Smarter Files:

1. Otwórz aplikację **Smarter Files by Tucario** z App Launcher.
2. Kliknij **Manage Document Categories**.
3. **Krok 1 -- Typy dokumentów**: Dodaj kategorie z nazwami i opcjonalnymi opisami.
4. **Krok 2 -- Przypisz role**: Dla każdej kategorii wybierz, które role mogą widzieć pliki w tej kategorii.
5. **Krok 3 -- Przejrzyj i wdróż**: Przejrzyj konfigurację i kliknij Deploy.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/add-category.mp4" type="video/mp4" />
</video>

:::note
**Usuwanie kategorii:** Gdy usuniesz typ dokumentu z kreatora i wdrożysz, bazowy rekord Custom Metadata Type nie jest kasowany -- jest **dezaktywowany** (`Is_Active = false`). Dezaktywowane kategorie nie pojawiają się już w selektorze kategorii ani nie filtrują plików. Wynika to z faktu, że Salesforce Metadata API nie obsługuje usuwania rekordów Custom Metadata Type z poziomu Apex.
:::

## Dokumenty prywatne

### Oznaczanie plików jako prywatnych

Każdy użytkownik może oznaczyć plik jako prywatny w trybie Isolated:

1. Kliknij menu akcji na pliku.
2. Wybierz **Mark as Private**.
3. Obok nazwy pliku pojawi się ikona kłódki.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

Plik jest teraz widoczny tylko dla:
- Użytkownika, który oznaczył go jako prywatny (właściciel)
- Użytkowników z zestawem uprawnień **Tucario - View Private Documents**

### Usuwanie statusu prywatnego

Właściciel pliku może usunąć flagę prywatności:

1. Kliknij menu akcji na prywatnym pliku.
2. Wybierz **Remove Private**.
3. Plik wraca do normalnych reguł widoczności.

## Logika połączonego filtrowania

Gdy plik ma zarówno kategorię, jak i flagę prywatności, **oba sprawdzenia muszą zostać spełnione**, aby plik był widoczny:

```
For each file:
  1. Private check:
     If file is private AND user is not the owner
     AND user lacks "View Private Documents" permission → HIDE

  2. Category check:
     If file has a category with permitted roles
     AND user's role is not in the list
     AND user lacks "Manage Categories" permission → HIDE

  3. Otherwise → SHOW
```

## Zestawy uprawnień

| Zestaw uprawnień | Przeznaczenie |
|---|---|
| **Tucario Files** | Podstawowy dostęp. Zapewnia dostęp do aplikacji, kontrolerów i obiektu połączeniowego. Przypisz wszystkim użytkownikom. |
| **Tucario - Manage File Categories** | Umożliwia przypisywanie kategorii do plików. **Pomija filtrowanie kategorii** -- użytkownicy z tym uprawnieniem widzą wszystkie pliki niezależnie od kategorii. |
| **Tucario - View Private Documents** | Umożliwia wyświetlanie plików oznaczonych jako prywatne przez innych użytkowników. |

## Przypadki użycia

- **Dokumentacja medyczna** widoczna tylko dla kierowników HR i personelu medycznego.
- **Raporty finansowe** ograniczone do zespołu finansowego.
- **Umowy prawne** dostępne tylko dla ról w dziale prawnym.
- **Wrażliwe załączniki** oznaczone jako prywatne przez poszczególnych użytkowników do użytku osobistego.
- **Wersje robocze dokumentów** ukryte przed rolami zewnętrznymi do momentu gotowości.
