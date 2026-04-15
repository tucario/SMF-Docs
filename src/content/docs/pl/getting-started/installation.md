---
title: Instalacja
description: Jak zainstalować Smarter Files w organizacji Salesforce.
---

## Darmowa edycja (GitHub)

1. Sklonuj lub pobierz repozytorium z [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Wdróż do organizacji Salesforce za pomocą Salesforce CLI:

```bash
sf project deploy start --source-dir force-app
```

3. Przejdź do strony rekordu w Lightning App Builder i przeciągnij komponent **Smarter Files** na układ.

### Wdrożenie jednym kliknięciem (alternatywa)

Możesz również użyć narzędzia do wdrażania z GitHub, aby zainstalować bezpośrednio w swojej organizacji:

1. Wybierz swoje środowisko (Production lub Sandbox):

![Ustawienia narzędzia do wdrażania](/docs/deploy-tool-settings.png)

2. Zezwól na dostęp do swojej organizacji Salesforce:

![Monit o zezwolenie na dostęp](/docs/deploy-allow-access.png)

3. Potwierdź komponenty do wdrożenia:

![Potwierdzenie wdrożenia](/docs/deploy-tool-confirmation.png)

## Edycja AppExchange

1. Zainstaluj z AppExchange (wkrótce dostępne).
2. Umieść komponent **Smarter Files** na dowolnej stronie rekordu za pomocą Lightning App Builder.
3. Skonfiguruj reguły widoczności w panelu ustawień komponentu.

## Wymagania

- Salesforce w edycji **Enterprise**, **Professional** lub **Unlimited**.
- Włączony Lightning Experience.
- Wystarczy licencja Platform -- pełna licencja Salesforce nie jest wymagana.
