---
title: Documents privés
description: Marquez des fichiers comme privés pour en restreindre l'accès au propriétaire du fichier et aux lecteurs autorisés.
---

import { Image } from 'astro:assets';
import markPrivate from '../../../../assets/screenshots/mark-as-private.png';

:::note
Disponible dans l'**Édition AppExchange** uniquement. Requiert le mode de stockage **Isolated** sur l'instance du composant.
:::

## Aperçu

N'importe quel utilisateur peut marquer un fichier comme privé. Un fichier privé est visible uniquement par :

1. **L'utilisateur qui l'a marqué comme privé** (enregistré dans `Owner_Id__c` sur la jonction de visibilité).
2. **Les utilisateurs disposant de la permission personnalisée `Tucario_View_Private_Documents`** — généralement attribuée aux administrateurs, aux RH ou à la conformité via le jeu de permissions **Tucario - View Private Documents**.

Les fichiers privés affichent une icône de cadenas à côté du nom du fichier en vue Liste et en vue Tuiles.

## Marquer un fichier comme privé

1. Ouvrez le menu contextuel du fichier.
2. Sélectionnez **Mark as Private**.
3. Une icône de cadenas apparaît à côté du nom du fichier ; le fichier est désormais masqué pour tout le monde sauf le propriétaire et les utilisateurs disposant de View Private Documents.

<Image src={markPrivate} alt="Fichier marqué comme privé avec l'icône de cadenas visible dans la liste de fichiers" />

## Retirer l'indicateur privé

Le propriétaire (et tout utilisateur disposant de `View Private Documents`) peut retirer l'indicateur :

1. Ouvrez le menu contextuel du fichier privé.
2. Sélectionnez **Remove Private**.
3. L'icône de cadenas disparaît et le fichier retrouve les règles de visibilité normales (y compris les éventuelles restrictions de catégorie).

## Qui peut voir un fichier privé

| Utilisateur | Peut voir le fichier ? |
|---|---|
| Le propriétaire (qui l'a marqué comme privé) | Oui |
| Utilisateur avec la permission **View Private Documents** | Oui |
| Tous les autres | Non — le fichier est filtré côté serveur et n'apparaît jamais dans la liste, même si l'utilisateur savait auparavant que le fichier existait |

## Combinaison avec les catégories

La visibilité privée et la visibilité basée sur les catégories se cumulent — les deux vérifications doivent être satisfaites pour qu'un fichier soit visible. Si un fichier est privé **et** assigné à une catégorie réservée aux RH, seuls les utilisateurs qui passent *les deux* contrôles (le propriétaire avec le rôle RH, ou un utilisateur View Private avec le rôle RH) pourront le voir. Voir [Contrôles de visibilité](/features/visibility-controls/) pour la logique de filtrage complète.

## En coulisses

Lorsque vous marquez un fichier comme privé, Smarter Files écrit dans la jonction `Tucario_File_Visibility__c` :

- Définit `Is_Private__c = true`.
- Définit `Owner_Id__c` sur l'utilisateur actuel (appliqué par la règle de validation `Owner_Required_When_Private` — `Owner_Id__c` ne peut pas être nul lorsque `Is_Private__c` est vrai).

Tout le filtrage se produit côté serveur dans `getFilesList()` avant que la réponse ne quitte le serveur Salesforce, de sorte que les fichiers privés ne sont jamais envoyés aux navigateurs non autorisés.
