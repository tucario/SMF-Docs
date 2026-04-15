---
title: Sichtbarkeitssteuerungen
description: Dokument-Sichtbarkeitssteuerungen in der AppExchange Edition.
---

:::note
Diese Funktion ist nur in der **AppExchange Edition** verfügbar und erfordert, dass der **Storage Mode** der Komponente auf **Isolated** gesetzt ist.
:::

## Übersicht

Sichtbarkeitssteuerungen ermöglichen es Administratoren, den Dateizugriff basierend auf Dokumentkategorien und Benutzerrollen einzuschränken. Dateien können Kategorien zugewiesen werden, und jede Kategorie kann auf bestimmte Rollen beschränkt werden — Benutzer außerhalb dieser Rollen sehen die Dateien nicht. Zusätzlich kann jeder Benutzer eine Datei als privat markieren, sodass sie nur für ihn selbst und autorisierte Betrachter sichtbar ist.

Die gesamte Filterung wird **serverseitig** durchgeführt — Dateien, auf die ein Benutzer keinen Zugriff hat, werden nie an den Browser gesendet.

## Speichermodus-Anforderung

Sichtbarkeitssteuerungen sind nur verfügbar, wenn der **Storage Mode** der Komponente auf **Isolated** gesetzt ist:

| | Standard | Isolated |
|---|---|---|
| Dateien sichtbar in Standard Files Related List | Ja | Nein |
| Kategoriezuweisung | Nicht verfügbar | Verfügbar |
| Als privat markieren | Nicht verfügbar | Verfügbar |
| Rollenbasierte Sichtbarkeitsfilterung | Nicht verfügbar | Verfügbar |

Im Isolated-Modus werden Dateien ausschließlich über einen Junction-Record mit dem Datensatz verknüpft — sie erscheinen nicht in der Standard Salesforce Files Related List.

## Dokumentkategorien

### Was sind Kategorien?

Eine Kategorie ist ein Label, das einer Datei zugewiesen wird und bestimmt, wer sie sehen kann. Kategorien werden von einem Administrator über den **Configuration Wizard** definiert und als Custom Metadata Type Records gespeichert.

Beispiele:
- Gesundheitsakten
- Finanzberichte
- Rechtsverträge
- Interne Mitteilungen

### Wie die Kategoriefilterung funktioniert

Jede Kategorie hat eine Liste von **berechtigten Rollen**. Wenn einer Datei eine Kategorie zugewiesen ist:

- Wenn die Rolle des Benutzers auf der berechtigten Liste steht → Datei ist **sichtbar**
- Wenn die Rolle des Benutzers NICHT auf der berechtigten Liste steht → Datei ist **ausgeblendet**
- Wenn einer Kategorie keine Rollen zugewiesen sind → Datei ist für **alle** sichtbar
- Wenn eine Datei keine Kategorie hat → Datei ist für **alle** sichtbar

### Kategorien zu Dateien zuweisen

Benutzer mit dem **Tucario - Manage File Categories** Permission Set können Kategorien zuweisen:

1. Klicken Sie auf das Aktionsmenü einer Datei.
2. Wählen Sie **Set Category**.
3. Wählen Sie eine Kategorie aus der Auswahl oder wählen Sie **No Category**, um die aktuelle Zuweisung zu entfernen.

Die Sichtbarkeit der Datei wird sofort aktualisiert.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/assigning-categories-to-files.mp4" type="video/mp4" />
</video>

### Kategorien verwalten

Kategorien werden über den **Configuration Wizard** in der Smarter Files App verwaltet:

1. Öffnen Sie die **Smarter Files by Tucario** App über den App Launcher.
2. Klicken Sie auf **Manage Document Categories**.
3. **Schritt 1 — Dokumenttypen**: Fügen Sie Kategorien mit Namen und optionalen Beschreibungen hinzu.
4. **Schritt 2 — Rollen zuweisen**: Wählen Sie für jede Kategorie aus, welche Rollen Dateien in dieser Kategorie sehen können.
5. **Schritt 3 — Überprüfen & Deployen**: Überprüfen Sie die Konfiguration und klicken Sie auf Deploy.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/add-category.mp4" type="video/mp4" />
</video>

:::note
**Entfernen einer Kategorie:** Wenn Sie einen Dokumenttyp aus dem Wizard entfernen und deployen, wird der zugrunde liegende Custom Metadata Type Record nicht gelöscht — er wird **deaktiviert** (`Is_Active = false`). Deaktivierte Kategorien erscheinen nicht mehr in der Kategorieauswahl oder filtern Dateien. Dies liegt daran, dass die Salesforce Metadata API das Löschen von Custom Metadata Type Records aus Apex nicht unterstützt.
:::

## Private Dokumente

### Dateien als privat markieren

Jeder Benutzer kann im Isolated-Modus eine Datei als privat markieren:

1. Klicken Sie auf das Aktionsmenü einer Datei.
2. Wählen Sie **Mark as Private**.
3. Ein Schlosssymbol erscheint neben dem Dateinamen.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

Die Datei ist jetzt nur sichtbar für:
- Den Benutzer, der sie als privat markiert hat (der Besitzer)
- Benutzer mit dem **Tucario - View Private Documents** Permission Set

### Private Markierung entfernen

Der Dateibesitzer kann die Privat-Markierung entfernen:

1. Klicken Sie auf das Aktionsmenü der privaten Datei.
2. Wählen Sie **Remove Private**.
3. Die Datei kehrt zu den normalen Sichtbarkeitsregeln zurück.

## Kombinierte Filterlogik

Wenn eine Datei sowohl eine Kategorie als auch eine Privat-Markierung hat, müssen **beide Prüfungen bestanden werden**, damit die Datei sichtbar ist:

```
Für jede Datei:
  1. Privat-Prüfung:
     Wenn Datei privat ist UND Benutzer nicht der Besitzer ist
     UND Benutzer keine "View Private Documents"-Berechtigung hat → AUSBLENDEN

  2. Kategorie-Prüfung:
     Wenn Datei eine Kategorie mit berechtigten Rollen hat
     UND die Rolle des Benutzers nicht in der Liste ist
     UND Benutzer keine "Manage Categories"-Berechtigung hat → AUSBLENDEN

  3. Andernfalls → ANZEIGEN
```

## Permission Sets

| Permission Set | Zweck |
|---|---|
| **Tucario Files** | Basiszugang. Gewährt Zugang zur App, Controllern und Junction-Objekt. Allen Benutzern zuweisen. |
| **Tucario - Manage File Categories** | Ermöglicht das Zuweisen von Kategorien zu Dateien. **Umgeht die Kategoriefilterung** — Benutzer mit dieser Berechtigung sehen alle Dateien unabhängig von der Kategorie. |
| **Tucario - View Private Documents** | Ermöglicht das Anzeigen von Dateien, die von anderen Benutzern als privat markiert wurden. |

## Anwendungsfälle

- **Gesundheitsakten** nur für Personalmanager und medizinisches Personal sichtbar.
- **Finanzberichte** auf das Finanzteam beschränkt.
- **Rechtsverträge** nur für Rollen der Rechtsabteilung zugänglich.
- **Vertrauliche Anhänge** von einzelnen Benutzern als privat für den persönlichen Gebrauch markiert.
- **Entwurfsdokumente** vor externen Rollen verborgen, bis sie bereit sind.
