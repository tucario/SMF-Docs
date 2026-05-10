---
title: Ustawienia administracyjne
description: Zestawy uprawnień, obiekty niestandardowe i konfiguracja oparta na metadanych w Smarter Files.
---

## Zestawy uprawnień

Z pakietem dostarczane są trzy zestawy uprawnień. Każdy użytkownik komponentu potrzebuje co najmniej podstawowego zestawu.

| Zestaw uprawnień | Wymagany dla | Przyznaje |
|---|---|---|
| **Tucario Files** *(podstawowy)* | Każdego użytkownika komponentu | Dostęp do aplikacji („Smarter Files by Tucario"), CRUD na obiekcie łącznikowym `Tucario_File_Visibility__c`, dostęp do `TucarioFileDownloadController` i `TucarioVisibilityController` |
| **Tucario - Manage File Categories** | Administratorów i właścicieli kategorii | Uprawnienie niestandardowe `Tucario_Manage_Categories` — przypisywanie kategorii do plików za pomocą „Set Category" oraz pomijanie filtrowania kategorii (ci użytkownicy zawsze widzą wszystkie pliki) |
| **Tucario - View Private Documents** | Administratorów, HR, pracowników compliance | Uprawnienie niestandardowe `Tucario_View_Private_Documents` — wyświetlanie plików oznaczonych jako prywatne przez innych użytkowników |

:::caution
**Tucario Files** jest wymagany nawet dla użytkowników tylko do odczytu. Bez niego komponent wyświetla komunikat o odmowie dostępu, ponieważ użytkownik nie może odczytać obiektu łącznikowego kontrolującego widoczność.
:::

## Ograniczenia przesyłania

Reguły przesyłania — dozwolone rozszerzenia, wykluczone rozszerzenia i maksymalny rozmiar — są konfigurowane **osobno dla każdej instancji komponentu** przez właściwości projektu w App Builderze, a nie globalnie. Pełna lista właściwości znajduje się w sekcji [Konfiguracja komponentu](/configuration/component-setup/).

Oznacza to, że możesz stosować różne reguły przesyłania na różnych stronach rekordów, a nawet dla wielu instancji na tej samej stronie rekordu.

## Reguły widoczności — `Tucario_Visibility_Rule__mdt`

Reguły widoczności są przechowywane jako rekordy Custom Metadata Type i zarządzane przez [Configuration Wizard](/features/visibility-controls/#configuring-visibility-rules) — nie są edytowane bezpośrednio w Setup.

| Pole | Typ | Przeznaczenie |
|---|---|---|
| **Category** | Tekst | Nazwa typu dokumentu (np. `HR Documents`, `Contracts`). Pliki odwołują się do tego ciągu znaków w polu `Visibility_Category__c`. |
| **Permitted Roles** | Długi obszar tekstowy | Lista wartości `DeveloperName` ról oddzielonych średnikami (np. `CEO;HR_Manager;HR_Specialist`). Użytkownicy, których rola pasuje do jednej z tych wartości, widzą pliki w tej kategorii. |
| **Is Active** | Pole wyboru | Czy reguła jest egzekwowana. Nieaktywne reguły działają jak nieistniejące (kategoria wraca do stanu domyślnie otwartego). |
| **Description** | Tekst | Opis kategorii widoczny dla administratora. |

:::note
Gdy kategoria jest „usuwana" przez kreator, jest **dezaktywowana** (`Is_Active = false`), a nie kasowana. Salesforce Metadata API nie obsługuje usuwania rekordów CMT z poziomu Apex, więc dezaktywacja jest najbliższym odpowiednikiem. Dezaktywowane kategorie są wykluczone ze wszystkich zapytań i nie pojawiają się w selektorze kategorii.
:::

## Obiekt łącznikowy widoczności plików — `Tucario_File_Visibility__c`

Smarter Files tworzy rekord obiektu łącznikowego dla każdego pliku zarządzanego w trybie przechowywania **Isolated** (oraz dla każdego pliku z przypisaną kategorią lub flagą prywatności, niezależnie od trybu).

| Pole | Typ | Przeznaczenie |
|---|---|---|
| **Content Document Id** | Tekst (External ID, Unique) | Odwołanie do `ContentDocument` w Salesforce. Jeden rekord łącznikowy na plik na rekord nadrzędny. |
| **Parent Record Id** | Tekst (18) | 18-znakowy identyfikator rekordu, do którego plik jest dołączony. |
| **Visibility Category** | Tekst (80) | Nazwa kategorii z `Tucario_Visibility_Rule__mdt`. Puste oznacza brak ograniczenia kategorii. |
| **Is Private** | Pole wyboru | Wartość true oznacza, że plik został oznaczony jako prywatny. |
| **Owner Id** | Lookup (User) | Użytkownik, który oznaczył plik jako prywatny. Wymagany, gdy **Is Private** ma wartość true (egzekwowane przez regułę walidacji `Owner_Required_When_Private`). |

**Automatyczne nazewnictwo:** rekordy używają formatu `FV-{0000}`.

**Model udostępniania:** ReadWrite. Zapytania SOQL i operacje DML na tym obiekcie są wykonywane w `USER_MODE`, więc użytkownicy widzą i modyfikują tylko te rekordy łącznikowe, do których mają dostęp.

## Uprawnienia niestandardowe

| Nazwa API | Używane przez |
|---|---|
| `Tucario_Manage_Categories` | Przyznawane przez zestaw uprawnień *Tucario - Manage File Categories*. Kontroluje widoczność pozycji menu **Set Category** i pomija filtrowanie oparte na kategoriach. |
| `Tucario_View_Private_Documents` | Przyznawane przez zestaw uprawnień *Tucario - View Private Documents*. Umożliwia wyświetlanie prywatnych plików należących do innych użytkowników. |

Możesz przypisać te uprawnienia niestandardowe przez własne zestawy uprawnień, jeśli chcesz połączyć je z rolami specyficznymi dla organizacji zamiast korzystać z dostarczonych zestawów uprawnień.

## Klasy Apex

Dwa kontrolery są dostępne z komponentów Lightning — oba działają `with sharing` i używają `USER_MODE` dla SOQL/DML:

- **`TucarioFileDownloadController`** — operacje CRUD na plikach, przesyłanie i pobieranie, tworzenie linków publicznych, przypisywanie kategorii, przełączanie flagi prywatności.
- **`TucarioVisibilityController`** — backend kreatora (lista ról, wdrażanie reguł, monitorowanie statusu wdrożenia), kontrola migracji wsadowej, sprawdzanie uprawnień.

Dostęp przyznaje zestaw uprawnień **Tucario Files** (już tam włączony) — zwykle nie ma powodu, aby udostępniać te klasy przez inne zestawy uprawnień.
