---
title: Linki publiczne
description: Generowanie publicznych linków do udostępniania plików jednym kliknięciem.
---

import { Image } from 'astro:assets';
import publicLink from '../../../../assets/screenshots/public-link-copied.png';

## Przegląd

Generuj publiczny adres URL udostępniania dla dowolnego pliku bezpośrednio z menu kontekstowego pliku — bez konieczności przechodzenia do strony szczegółów pliku ani otwierania osobnego okna udostępniania.

<Image src={publicLink} alt="Menu kontekstowe pliku z opcją Public Link i powiadomieniem toast potwierdzającym skopiowanie adresu URL do schowka" />

## Jak utworzyć link publiczny

1. Kliknij menu kontekstowe pliku, który chcesz udostępnić.
2. Wybierz **Public Link**.
3. Smarter Files tworzy rekord Salesforce **Content Distribution** dla pliku i **automatycznie kopiuje adres URL do schowka**.
4. Powiadomienie toast potwierdza utworzenie i skopiowanie linku.

Wygenerowany adres URL jest standardowym publicznym linkiem Salesforce — nie wymaga uwierzytelniania i można go udostępniać dowolnej osobie (w tym osobom spoza organizacji Salesforce).

## Wymagania

- W organizacji musi być włączona opcja **Content Deliveries and Public Links**. Setup → wyszukaj „Content Deliveries" → włącz. Bez tego opcja menu **Public Link** jest wyłączona i wyświetla się dymek z wyjaśnieniem przyczyny.
- Użytkownik tworzący link potrzebuje dostępu do usuwania pliku (standardowa reguła Salesforce dotycząca tworzenia Content Distributions).

## Zarządzanie istniejącymi linkami

Linki publiczne utworzone za pomocą Smarter Files pojawiają się w Salesforce na liście powiązanej **Distributions** pliku, obok linków utworzonych przez standardowy interfejs. Stamtąd możesz je odwołać, ustawić daty wygaśnięcia lub wymagać hasła.
