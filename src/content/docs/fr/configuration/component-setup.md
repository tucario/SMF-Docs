---
title: Configuration du composant
description: Comment ajouter et configurer Smarter Files sur une page d'enregistrement.
---

import { Image } from 'astro:assets';
import appBuilder from '../../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../../assets/screenshots/app-builder-card-title.png';

## Ajout sur une page d'enregistrement

1. Ouvrez n'importe quelle page d'enregistrement dans le **Lightning App Builder**.
2. Trouvez **Smarter Files** dans la palette de composants sous *Custom — Managed*.
3. Faites-le glisser vers la zone souhaitée de la mise en page.
4. Configurez les propriétés de conception dans le panneau de droite.
5. Enregistrez et activez la page.

<Image src={appBuilder} alt="Lightning App Builder avec le composant Smarter Files sélectionné et le panneau de propriétés ouvert" />

## Propriétés du composant

Le composant expose huit propriétés de conception dans la barre latérale du App Builder :

| Propriété | Description | Valeur par défaut |
|---|---|---|
| **Card Title** | Texte d'en-tête du composant. Remplace le label personnalisé `Tucario_Files_Card_Title` pour cette instance. | `Files` |
| **Storage Mode** | `Standard` — fichiers liés via `ContentDocumentLink` (visibles dans la liste associée Fichiers standard). `Isolated` — fichiers liés uniquement via la jonction `Tucario_File_Visibility__c` (masqués de la liste associée Fichiers standard, active les contrôles de visibilité). Voir [Storage Modes](/features/storage-modes/). | `Standard` |
| **Display Mode** | Mode d'affichage des fichiers : `List` (lignes verticales avec métadonnées) ou `Tiles` (grille de cartes avec icônes de type de fichier). | `List` |
| **Default Sort Order** | Tri initial. Les utilisateurs peuvent le modifier en cours d'utilisation. Options : `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za`. | `date-newest` |
| **Initial Files Displayed** | Nombre maximum de fichiers affichés initialement. Un lien « Tout afficher » apparaît lorsqu'il y a davantage de fichiers. Définissez à `0` pour tout afficher. | `5` |
| **Allowed File Extensions** | Liste blanche d'extensions séparées par des virgules (ex. : `pdf,docx,png`). Seuls ces types peuvent être téléversés. Laissez vide pour autoriser tous les types. | *(vide — tout autorisé)* |
| **Excluded File Extensions** | Liste noire d'extensions séparées par des virgules (ex. : `exe,bat,sh`). Ces types sont bloqués au téléversement. | *(vide — rien de bloqué)* |
| **Max File Size (MB)** | Limite de taille de téléversement en mégaoctets. Définissez à `0` pour aucune limite. | `0` |

<Image src={cardTitle} alt="Modification de la propriété Card Title dans App Builder pour remplacer l'en-tête du composant" />

### Logique des restrictions de téléversement

Lorsque les listes **Allowed** et **Excluded** sont toutes deux configurées, elles s'appliquent conjointement :

1. **La liste autorisée est vérifiée en premier** — si l'extension du fichier ne figure pas dans la liste autorisée, il est bloqué.
2. **La liste exclue est vérifiée ensuite** — si le fichier a passé la vérification de la liste autorisée mais que son extension figure dans la liste exclue, il est tout de même bloqué.

Un fichier doit figurer dans la liste autorisée **et** ne pas figurer dans la liste exclue pour être accepté.

:::tip
Dans la plupart des cas, vous n'avez besoin que d'un seul des deux paramètres. Utilisez **Allowed** lorsque vous souhaitez restreindre les téléversements à un petit ensemble de types connus (ex. : `pdf,docx,xlsx`). Utilisez **Excluded** lorsque vous souhaitez bloquer des types spécifiques tout en autorisant le reste (ex. : `exe,bat`).
:::

## Conseils de placement

- Fonctionne dans la zone de contenu principale, la barre latérale ou les zones pleine largeur de la page d'enregistrement.
- Peut être placé sur n'importe quelle page d'enregistrement d'objet standard ou personnalisé.
- Plusieurs instances sur la même page sont prises en charge — utile pour diviser un enregistrement en différents espaces de fichiers (ex. : une instance en mode Standard pour les fichiers généraux et une instance en mode Isolated pour les documents confidentiels). Définissez des **Card Titles** distincts pour les différencier.
- Le composant est **réservé aux pages d'enregistrement**. L'Assistant de configuration est livré en tant que page d'application distincte, accessible depuis l'entrée du lanceur d'applications *Smarter Files by Tucario*.
