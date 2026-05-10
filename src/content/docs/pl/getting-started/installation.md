---
title: Instalacja
description: Jak zainstalować Smarter Files w swojej organizacji Salesforce.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## Edycja AppExchange (pakiet zarządzany)

1. Otwórz link instalacyjny otrzymany od kontaktu handlowego Tucario (lub z listingu AppExchange).
2. Wybierz opcję **Install for All Users**, **Install for Admins Only** lub **Install for Specific Profiles** — zależnie od tego, jak chcesz kontrolować dostęp.
3. Zaakceptuj wszelkie monity dotyczące dostępu stron trzecich i poczekaj na zakończenie instalacji.

<Image src={packageInstaller} alt="Instalator pakietu Salesforce dla Smarter Files" />

## Edycja bezpłatna (GitHub)

1. Sklonuj lub pobierz repozytorium z [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Wdróż do swojej organizacji Salesforce za pomocą Salesforce CLI:

```bash
sf project deploy start --source-dir src
```

## Przypisanie zestawów uprawnień

Smarter Files jest dostarczany z trzema zestawami uprawnień. Każdy użytkownik korzystający z komponentu potrzebuje co najmniej podstawowego zestawu.

<Image src={permSets} alt="Zestawy uprawnień Smarter Files w ustawieniach Setup" />

| Zestaw uprawnień | Wymagany dla | Przyznaje |
|---|---|---|
| **Tucario Files (Base)** | Każdego użytkownika komponentu | Dostęp do aplikacji, CRUD na obiekcie łącznikowym widoczności, dostęp do kontrolerów plików |
| **Tucario - Manage File Categories** | Administratorów i właścicieli kategorii | Uprawnienie niestandardowe `Tucario_Manage_Categories` — przypisywanie kategorii do plików, pomijanie filtrowania kategorii |
| **Tucario - View Private Documents** | Administratorów, HR, działu compliance | Uprawnienie niestandardowe `Tucario_View_Private_Documents` — wyświetlanie plików oznaczonych jako prywatne przez innych użytkowników |

Przypisuj przez **Setup → Permission Sets → [nazwa] → Manage Assignments**.

## Dodanie komponentu do strony rekordu

1. Otwórz dowolną stronę rekordu w **Lightning App Builder**.
2. Przeciągnij **Smarter Files** z palety komponentów na układ strony.
3. Skonfiguruj właściwości projektu w panelu po prawej stronie — szczegółowy opis właściwości znajdziesz w sekcji [Konfiguracja komponentu](/configuration/component-setup/).
4. Zapisz i aktywuj stronę.

## Wymagania

- Salesforce w edycji **Enterprise**, **Professional** lub **Unlimited**.
- Włączone Lightning Experience.
- Obsługiwane licencje Platform Starter / Platform Plus — pełna licencja Salesforce nie jest wymagana.
- Do generowania linków publicznych: w ustawieniach Salesforce Files musi być włączona opcja **Content Deliveries and Public Links** (Setup → Salesforce Files).
