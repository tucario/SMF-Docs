---
title: Contrôles de visibilité
description: Catégories de documents, filtrage basé sur les rôles et documents privés dans Smarter Files.
---

import { Image } from 'astro:assets';
import setCategory from '../../../../assets/screenshots/set-category-modal.png';
import wizardDefine from '../../../../assets/screenshots/wizard-define-types.png';
import wizardDefineMultiple from '../../../../assets/screenshots/wizard-define-types-multiple.png';
import wizardRoles from '../../../../assets/screenshots/wizard-assign-roles.png';
import wizardReview from '../../../../assets/screenshots/wizard-review-deploy.png';
import wizardWelcome from '../../../../assets/screenshots/wizard-welcome.png';
import wizardHome from '../../../../assets/screenshots/wizard-home.png';

:::note
Disponible dans l'**Édition AppExchange** uniquement. Le **Storage Mode** du composant doit être défini sur **Isolated** pour que les contrôles de visibilité s'appliquent.
:::

## Aperçu

Les contrôles de visibilité permettent aux administrateurs de restreindre l'accès aux fichiers par **catégorie de document** (mappée à des rôles dans la hiérarchie des rôles Salesforce) et permettent à n'importe quel utilisateur de marquer des fichiers individuels comme **privés**. Tout le filtrage se produit **côté serveur** dans `getFilesList()` — les fichiers restreints n'atteignent jamais les navigateurs non autorisés.

## Exigence du mode de stockage

| | Standard | Isolated |
|---|---|---|
| Fichiers visibles dans la liste associée Fichiers standard | Oui | Non |
| Attribution de catégories | Non disponible | Disponible |
| Marquer comme privé | Non disponible | Disponible |
| Filtrage de visibilité basé sur les rôles | Non disponible | Disponible |

En mode Standard, aucun enregistrement de jonction n'est créé, il n'y a donc nulle part où stocker la catégorie ou l'indicateur privé. Passez en mode Isolated pour tout enregistrement où le filtrage de visibilité est important. Voir [Storage Modes](/features/storage-modes/).

## Catégories de documents

Une catégorie est un libellé attribué à un fichier qui détermine qui peut le voir. Les catégories résident dans des enregistrements `Tucario_Visibility_Rule__mdt` et sont gérées via l'Assistant de configuration.

Exemples courants : *HR Documents*, *Underwriting Documents*, *Financial Reports*, *Legal Contracts*, *Medical Records*.

### Fonctionnement du filtrage

Chaque règle mappe une catégorie à une liste de valeurs `DeveloperName` de rôles autorisés. Pour chaque fichier :

- Le fichier **n'a pas de catégorie** → visible par tout le monde (ouvert par défaut).
- Le fichier a une catégorie, **le rôle de l'utilisateur figure dans la liste autorisée** → visible.
- Le fichier a une catégorie, **le rôle de l'utilisateur n'est pas autorisé** → masqué.
- Le fichier a une catégorie, **la règle est inactive** (`Is_Active = false`) → visible par tout le monde (les règles désactivées ne filtrent pas).
- L'utilisateur dispose de la permission personnalisée **Manage Categories** → contourne le filtrage par catégorie (voit toujours tous les fichiers).

Plusieurs règles référençant la même catégorie se combinent avec une logique **OU** — un utilisateur passe si son rôle figure dans *n'importe quelle* liste autorisée pour la catégorie.

### Attribuer une catégorie à un fichier

Les utilisateurs disposant de **Manage Categories** peuvent attribuer une catégorie depuis le menu contextuel du fichier :

1. Ouvrez le menu contextuel du fichier et sélectionnez **Set Category**.
2. Choisissez une catégorie dans le sélecteur, ou sélectionnez **No Category** pour effacer.
3. La visibilité du fichier est mise à jour immédiatement.

<Image src={setCategory} alt="Modale Set Category avec le sélecteur de catégorie ouvert" />

:::caution
Les utilisateurs *sans* la permission Manage Categories voient quand même l'option **Set Category**, mais reçoivent un avertissement de confirmation indiquant que le fichier peut disparaître de leur propre vue une fois qu'une catégorie restreinte est appliquée (puisqu'ils ne contournent pas le filtrage).
:::

## Configuration des règles de visibilité

Ouvrez l'application **Smarter Files by Tucario** depuis le lanceur d'applications. L'Assistant de configuration s'ouvre sur l'écran d'accueil avec deux cartes : *Manage Document Categories* et *Private Documents*.

<Image src={wizardWelcome} alt="Écran d'accueil de l'Assistant de configuration" />

<Image src={wizardHome} alt="Accueil de l'Assistant de configuration avec les cartes Manage Categories et Private Documents" />

Cliquez sur **Manage Document Categories** pour accéder à l'assistant de règles en 3 étapes.

### Étape 1 — Définir les types de documents

Ajoutez les types de documents que vous souhaitez contrôler. Chacun dispose d'un nom et d'une description optionnelle.

<Image src={wizardDefine} alt="Étape 1 de l'assistant : définition d'un type de document appelé Underwriting Documents" />

<Image src={wizardDefineMultiple} alt="Étape 1 de l'assistant avec plusieurs types de documents ajoutés" />

### Étape 2 — Attribuer les rôles

Pour chaque type de document, sélectionnez les rôles autorisés à voir les fichiers de cette catégorie. La liste de sélection double est alimentée par la hiérarchie des rôles de votre org (limitée à 1 000 rôles).

<Image src={wizardRoles} alt="Étape 2 de l'assistant : liste de sélection double avec les rôles disponibles à gauche et les rôles autorisés à droite" />

### Étape 3 — Révision et déploiement

Vérifiez les catégories actives et désactivées, puis cliquez sur **Deploy Configuration**. L'assistant appelle `Metadata.Operations.enqueueDeployment()` pour écrire les règles en tant qu'enregistrements `Tucario_Visibility_Rule__mdt` de façon asynchrone, en interrogeant l'état jusqu'à la fin. Un indicateur de chargement affiche la progression.

<Image src={wizardReview} alt="Étape 3 de l'assistant : révision de toutes les catégories avec le bouton Deploy" />

:::note
**Suppression d'une catégorie :** retirer un type de document de l'assistant et déployer ne **supprime pas** l'enregistrement CMT — cela définit `Is_Active = false`. L'API de métadonnées Salesforce ne permet pas de supprimer des enregistrements CMT depuis Apex, donc la désactivation est l'équivalent le plus proche. Les catégories désactivées n'apparaissent plus dans le sélecteur ni ne filtrent les fichiers, et peuvent être réactivées ultérieurement en ajoutant à nouveau une catégorie du même nom.
:::

## Documents privés

En plus du filtrage basé sur les catégories, n'importe quel utilisateur peut marquer des fichiers individuels comme privés — visibles uniquement par eux-mêmes et par les utilisateurs disposant de la permission **View Private Documents**. Voir [Documents privés](/features/private-documents/) pour le flux complet.

## Logique de filtrage combiné

Lorsqu'un fichier possède à la fois une catégorie et un indicateur privé, **les deux vérifications doivent être satisfaites** pour qu'il soit visible. Pseudo-code pour `getFilesList()` :

```
Pour chaque fichier de l'enregistrement :
  1. Vérification du statut privé :
     Si Is_Private ET l'utilisateur n'est pas Owner_Id
     ET l'utilisateur ne dispose pas de « View Private Documents » → MASQUER

  2. Vérification de la catégorie :
     Si Visibility_Category est défini
     ET une règle active correspondante existe
     ET le rôle de l'utilisateur ne figure pas dans Permitted_Roles
     ET l'utilisateur ne dispose pas de « Manage Categories » → MASQUER

  3. Sinon → AFFICHER
```

La vérification la plus restrictive des deux l'emporte.

## Jeux de permissions

| Jeu de permissions | Objectif |
|---|---|
| **Tucario Files** | Accès de base. Requis pour tout utilisateur. Accorde l'application, les contrôleurs et l'objet de jonction. |
| **Tucario - Manage File Categories** | Accès au menu Set Category + contournement du filtrage par catégorie (voit toujours tous les fichiers). |
| **Tucario - View Private Documents** | Voir les fichiers marqués comme privés par d'autres utilisateurs. |

## Cas d'utilisation

- **Documents RH** visibles uniquement par les rôles RH, avec marquage privé pour les dossiers d'employés individuels.
- **Rapports financiers** restreints aux rôles financiers, quel que soit le téléverseur.
- **Contrats juridiques** réservés aux rôles du département juridique, avec marquage privé sur les contrats en cours de rédaction.
- **Documents de souscription** contenant des données personnelles, restreints aux rôles de souscripteurs.
- **Pièces jointes confidentielles sur un enregistrement partagé** — deuxième instance du composant en mode Isolated avec des catégories appliquées, masquée de la liste associée Fichiers standard.
