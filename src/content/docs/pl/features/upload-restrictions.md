---
title: Ograniczenia przesyłania
description: Kontrola typów i rozmiarów plików, które użytkownicy mogą przesyłać.
---

## Przegląd

Administratorzy mogą ograniczyć przesyłanie według typu i rozmiaru pliku bezpośrednio we właściwościach komponentu -- bez konieczności pisania kodu.

## Ograniczenia typów plików

Dwie właściwości kontrolują, które typy plików są akceptowane:

### Allowed File Extensions

Lista dozwolonych rozszerzeń (np. `pdf,docx,xlsx`). Po skonfigurowaniu **tylko** te typy mogą być przesyłane. Pozostaw puste, aby zezwolić na wszystkie typy.

### Excluded File Extensions

Lista blokowanych rozszerzeń (np. `exe,bat,sh`). Te typy są odrzucane podczas przesyłania. Pozostaw puste, aby niczego nie wykluczać.

### Użycie obu jednocześnie

Gdy oba są skonfigurowane, działają jako połączony filtr:

1. **Najpierw sprawdzana jest lista dozwolonych** -- jeśli rozszerzenie pliku nie znajduje się na liście dozwolonych, plik jest blokowany.
2. **Następnie sprawdzana jest lista wykluczonych** -- jeśli plik przeszedł kontrolę dozwolonych, ale jest na liście wykluczonych, nadal jest blokowany.

Plik musi znajdować się na liście dozwolonych **i** nie znajdować się na liście wykluczonych, aby został zaakceptowany.

:::tip
W większości przypadków potrzebujesz tylko jednego z dwóch ustawień. Użyj **Allowed**, aby ograniczyć do małego zestawu znanych typów. Użyj **Excluded**, aby zablokować konkretne typy, ale zezwolić na wszystkie pozostałe.
:::

## Limit rozmiaru pliku

Ustaw właściwość **Max File Size (MB)**, aby ograniczyć maksymalny rozmiar przesyłanego pliku. Ustaw `0`, aby nie stosować limitu.

Gdy użytkownik próbuje przesłać plik przekraczający limit, przesyłanie jest blokowane i wyświetlany jest komunikat błędu toast z nazwą pliku i skonfigurowanym limitem.

## Informacja zwrotna dla użytkownika

Gdy przesyłanie jest blokowane, komponent dostarcza czytelną informację zwrotną:

![Komunikat toast o zablokowaniu przesyłania](/docs/upload-blocked.png)

- **Pojedynczy plik zablokowany** -- komunikat toast podaje nazwę pliku i wyjaśnia przyczynę zablokowania (błędny typ lub zbyt duży rozmiar).
- **Wiele plików zablokowanych** -- komunikat toast wymienia wszystkie zablokowane pliki z podaniem przyczyny.
- **Przesyłanie mieszane** -- jeśli część plików zostanie przesłana pomyślnie, a inne zostaną zablokowane, wyświetlane są zarówno powiadomienie o sukcesie, jak i ostrzeżenie.
