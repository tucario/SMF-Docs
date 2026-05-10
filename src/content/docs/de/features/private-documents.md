---
title: Private Dokumente
description: Dateien als privat markieren, um den Zugriff auf den Dateibesitzer und autorisierte Betrachter zu beschränken.
---

import { Image } from 'astro:assets';
import markPrivate from '../../../../assets/screenshots/mark-as-private.png';

:::note
Nur in der **AppExchange Edition** verfügbar. Erfordert den **Isolated** Storage Mode auf der jeweiligen Komponenteninstanz.
:::

## Übersicht

Jeder Benutzer kann eine Datei als privat markieren. Eine private Datei ist nur sichtbar für:

1. **Den Benutzer, der sie als privat markiert hat** (gespeichert in `Owner_Id__c` am Sichtbarkeits-Junction).
2. **Benutzer mit der Custom Permission `Tucario_View_Private_Documents`** – typischerweise Admins, HR oder Compliance-Verantwortliche über das Permission Set **Tucario - View Private Documents**.

Private Dateien zeigen in der Listen- und Kachelansicht ein Schlosssymbol neben dem Dateinamen an.

## Datei als privat markieren

1. Öffnen Sie das Kontextmenü der Datei.
2. Wählen Sie **Mark as Private**.
3. Neben dem Dateinamen erscheint ein Schlosssymbol; die Datei ist nun für alle außer dem Besitzer und Benutzern mit „View Private"-Berechtigung ausgeblendet.

<Image src={markPrivate} alt="Als privat markierte Datei mit sichtbarem Schlosssymbol in der Dateiliste" />

## Privat-Markierung entfernen

Der Besitzer (sowie jeder Benutzer mit `View Private Documents`) kann die Markierung entfernen:

1. Öffnen Sie das Kontextmenü der privaten Datei.
2. Wählen Sie **Remove Private**.
3. Das Schlosssymbol verschwindet, und die Datei unterliegt wieder den normalen Sichtbarkeitsregeln (einschließlich etwaiger Kategoriebeschränkungen).

## Wer kann eine private Datei sehen?

| Benutzer | Kann die Datei sehen? |
|---|---|
| Der Besitzer (der sie als privat markiert hat) | Ja |
| Benutzer mit der Berechtigung **View Private Documents** | Ja |
| Alle anderen | Nein – die Datei wird serverseitig herausgefiltert und erscheint in der Liste nie, auch wenn der Benutzer zuvor von ihrer Existenz wusste |

## Kombination mit Kategorien

Privat- und kategoriebasierte Sichtbarkeit greifen ineinander – beide Prüfungen müssen bestanden werden, damit eine Datei sichtbar ist. Ist eine Datei privat **und** einer ausschließlich für HR-Mitarbeitende sichtbaren Kategorie zugewiesen, können nur Benutzer, die *beide* Hürden überwinden (der Besitzer mit HR-Rolle oder ein „View Private"-Benutzer mit HR-Rolle), sie sehen. Die vollständige Filterlogik finden Sie unter [Sichtbarkeitssteuerungen](/features/visibility-controls/).

## Technischer Hintergrund

Wenn Sie eine Datei als privat markieren, schreibt Smarter Files in das `Tucario_File_Visibility__c`-Junction:

- Setzt `Is_Private__c = true`.
- Setzt `Owner_Id__c` auf den aktuellen Benutzer (erzwungen durch die Validierungsregel `Owner_Required_When_Private` – `Owner_Id__c` darf nicht leer sein, wenn `Is_Private__c` wahr ist).

Die gesamte Filterung erfolgt serverseitig in `getFilesList()`, bevor die Antwort den Salesforce-Server verlässt – private Dateien werden nie an nicht autorisierte Browser gesendet.
