---
title: Akcje na plikach
description: Dostępne akcje dla poszczególnych plików w Smarter Files.
---

import { Image } from 'astro:assets';
import contextMenu from '../../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../../assets/screenshots/file-preview.png';
import editModal from '../../../../assets/screenshots/edit-details-modal.png';

## Menu kontekstowe

Każdy plik posiada menu kontekstowe (przycisk z trzema kropkami po prawej stronie wiersza lub przycisk nakładki na kafelku). Dostępne akcje zależą od uprawnień użytkownika do danego pliku.

<Image src={contextMenu} alt="Otwarte menu kontekstowe pliku z dostępnymi akcjami" />

| Akcja | Opis | Dostępność |
|---|---|---|
| **View Details** | Otwiera standardową stronę szczegółów pliku Salesforce w nowej karcie. | Wszyscy użytkownicy |
| **Edit Details** | Otwiera wbudowane okno modalne do edycji tytułu i opisu pliku. Zapisuje i automatycznie odświeża listę. | Użytkownicy z dostępem do edycji |
| **Download** | Pobiera ten konkretny plik. | Wszyscy użytkownicy |
| **Public Link** | Generuje adres URL Salesforce Content Distribution dla pliku i automatycznie kopiuje go do schowka. | Wszyscy użytkownicy (wymaga włączonej opcji Content Deliveries w organizacji) |
| **Delete** | Trwale usuwa plik z Salesforce. Wcześniej wyświetlane jest okno potwierdzenia. | Użytkownicy z dostępem do usuwania (właściciel pliku lub użytkownicy z odpowiednim dostępem do obiektu/udostępniania; respektuje reguły licencji Platform Starter / Platform Plus) |
| **Remove from Record** | Odłącza plik od tego rekordu, ale pozostawia go w bibliotece plików organizacji. Przydatne, gdy plik został dołączony do niewłaściwego rekordu. | Użytkownicy z dostępem do edycji rekordu |
| **Set Category** | Otwiera selektor kategorii, aby przypisać kategorię widoczności do pliku. | Użytkownicy z uprawnieniem niestandardowym **Manage Categories** |
| **Mark as Private** | Oznacza plik jako prywatny — widoczny tylko dla właściciela i użytkowników z uprawnieniem **View Private Documents**. Zobacz [Dokumenty prywatne](/features/private-documents/). | Wszyscy użytkownicy (tryb przechowywania Isolated) |
| **Remove Private** | Usuwa flagę prywatności. Widoczne na plikach prywatnych. | Użytkownik, który oznaczył plik jako prywatny |

<Image src={actionButtons} alt="Wiersz pliku z widocznymi przyciskami akcji edytowania i usuwania" />

## Natywny podgląd pliku

Kliknięcie nazwy pliku otwiera standardowe okno podglądu pliku Salesforce — to samo, które użytkownicy znają z natywnego komponentu Files. Obsługuje wszystko, co Salesforce wyświetla natywnie (pliki PDF, obrazy, dokumenty Office, wideo, audio).

<Image src={preview} alt="Natywny podgląd pliku Salesforce otwarty z poziomu Smarter Files" />

## Edycja szczegółów

Wybranie opcji **Edit Details** otwiera lekkie okno modalne — zmień tytuł lub opis, kliknij Zapisz, a lista plików odświeży się automatycznie bez pełnego przeładowania strony.

<Image src={editModal} alt="Okno modalne edycji szczegółów pliku" />
