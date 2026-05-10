---
title: Öffentliche Links
description: Öffentliche Freigabelinks für Dateien mit einem Klick generieren.
---

import { Image } from 'astro:assets';
import publicLink from '../../../../assets/screenshots/public-link-copied.png';

## Übersicht

Generieren Sie eine öffentliche Freigabe-URL für jede Datei direkt aus dem Kontextmenü der Datei – ohne zur Dateidetailseite navigieren oder ein separates Freigabe-Modal öffnen zu müssen.

<Image src={publicLink} alt="Datei-Kontextmenü mit der Option „Public Link" sowie ein Toast, der bestätigt, dass die URL in die Zwischenablage kopiert wurde" />

## Öffentlichen Link erstellen

1. Klicken Sie auf das Kontextmenü der Datei, die Sie teilen möchten.
2. Wählen Sie **Public Link**.
3. Smarter Files erstellt einen Salesforce-**Content Distribution**-Record für die Datei und **kopiert die URL automatisch in Ihre Zwischenablage**.
4. Ein Erfolgs-Toast bestätigt, dass der Link erstellt und kopiert wurde.

Die generierte URL ist ein standardmäßiger öffentlicher Salesforce-Link – er erfordert keine Authentifizierung und kann mit beliebigen Personen geteilt werden (auch außerhalb Ihrer Salesforce-Organisation).

## Voraussetzungen

- **Content Deliveries and Public Links** muss für Ihre Organisation aktiviert sein. Setup → nach „Content Deliveries" suchen → aktivieren. Ohne diese Einstellung ist der Menüpunkt **Public Link** deaktiviert, und ein Tooltip erklärt den Grund.
- Der Benutzer, der den Link erstellt, benötigt Löschzugriff auf die Datei (Salesforce-Standardregel für die Erstellung von Content Distributions).

## Bestehende Links verwalten

Über Smarter Files erstellte öffentliche Links erscheinen in Salesforce unter der **Distributions**-Related-List der Datei, zusammen mit Links, die über die Standard-Benutzeroberfläche erstellt wurden. Von dort können Sie Links widerrufen, Ablaufdaten festlegen oder ein Passwort festlegen.
