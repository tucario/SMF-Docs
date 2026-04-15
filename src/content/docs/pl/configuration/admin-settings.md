---
title: Ustawienia administracyjne
description: Globalne ustawienia administracyjne Smarter Files.
---

## Custom Metadata

Smarter Files wykorzystuje Custom Metadata Types do globalnej konfiguracji. Pozwala to na wdrażanie ustawień między organizacjami za pomocą change sets lub metadata API.

## Kluczowe ustawienia

### Ograniczenia przesyłania

Zdefiniuj reguły przesyłania dla każdego obiektu:

- **Object API Name** -- obiekt, do którego ma zastosowanie reguła.
- **Allowed Extensions** -- rozszerzenia plików oddzielone przecinkami (np. `pdf,docx`).
- **Max File Size (MB)** -- maksymalny rozmiar przesyłanego pliku.

### Zarządzanie kategoriami (edycja AppExchange)

Kategorie kontrolują, które role mogą widzieć określone pliki. Zarządza się nimi za pomocą **Configuration Wizard** w aplikacji Smarter Files:

1. Otwórz aplikację **Smarter Files by Tucario** z App Launcher.
2. Kliknij **Manage Document Categories**.
3. Zdefiniuj typy dokumentów, przypisz dozwolone role i wdróż.

Kategorie są przechowywane jako rekordy Custom Metadata Type (`Tucario_Visibility_Rule__mdt`). Każdy rekord zawiera:

| Pole | Opis |
|---|---|
| **Category** | Identyfikator kategorii |
| **Permitted Roles** | Nazwy DeveloperName ról oddzielone średnikami |
| **Is Active** | Czy reguła jest aktywna |
| **Description** | Opis widoczny dla administratora |

:::note
Gdy kategoria zostanie usunięta za pomocą kreatora, jest **dezaktywowana**, a nie usuwana. Salesforce Metadata API nie obsługuje usuwania rekordów Custom Metadata Type z poziomu Apex, więc flaga `Is_Active` rekordu jest ustawiana na `false`. Dezaktywowane kategorie są wykluczane ze wszystkich zapytań i nie pojawiają się w selektorze kategorii.
:::

## Uprawnienia

Smarter Files respektuje standardowy model udostępniania i uprawnienia CRUD w Salesforce. Do podstawowej funkcjonalności nie są wymagane dodatkowe zestawy uprawnień.

W edycji AppExchange dostępne są trzy zestawy uprawnień:

| Zestaw uprawnień | Przeznaczenie |
|---|---|
| **Tucario Files** | Podstawowy dostęp do aplikacji, kontrolerów Apex i obiektu połączeniowego. Wymagany dla wszystkich użytkowników. |
| **Tucario - Manage File Categories** | Umożliwia przypisywanie kategorii do plików. Użytkownicy z tym uprawnieniem pomijają filtrowanie oparte na kategoriach i widzą wszystkie pliki. |
| **Tucario - View Private Documents** | Umożliwia wyświetlanie plików oznaczonych jako prywatne przez innych użytkowników. |
