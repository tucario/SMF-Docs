---
title: Paramètres d'administration
description: Jeux de permissions, objets personnalisés et configuration pilotée par métadonnées dans Smarter Files.
---

## Jeux de permissions

Trois jeux de permissions sont livrés avec le package. Chaque utilisateur du composant a besoin d'au moins le jeu de base.

| Jeu de permissions | Requis pour | Accorde |
|---|---|---|
| **Tucario Files** *(base)* | Tout utilisateur du composant | Accès à l'application (« Smarter Files by Tucario »), CRUD sur l'objet de jonction `Tucario_File_Visibility__c`, accès à `TucarioFileDownloadController` et `TucarioVisibilityController` |
| **Tucario - Manage File Categories** | Administrateurs et responsables de catégories | Permission personnalisée `Tucario_Manage_Categories` — attribuer des catégories aux fichiers via « Set Category », et contourner le filtrage par catégorie (ces utilisateurs voient toujours tous les fichiers) |
| **Tucario - View Private Documents** | Administrateurs, RH, responsables de la conformité | Permission personnalisée `Tucario_View_Private_Documents` — voir les fichiers marqués comme privés par d'autres utilisateurs |

:::caution
**Tucario Files** est requis même pour les utilisateurs en lecture seule. Sans ce jeu de permissions, le composant affiche un état d'accès refusé, car l'utilisateur ne peut pas lire l'objet de jonction qui contrôle la visibilité.
:::

## Restrictions de téléversement

Les règles de téléversement — extensions autorisées, extensions exclues et taille maximale — sont configurées **par instance de composant** via les propriétés de conception dans App Builder, et non de façon globale. Voir [Configuration du composant](/configuration/component-setup/) pour la liste complète des propriétés.

Cela signifie que vous pouvez avoir des règles de téléversement différentes sur différentes pages d'enregistrement, voire plusieurs instances sur la même page d'enregistrement avec des règles différentes.

## Règles de visibilité — `Tucario_Visibility_Rule__mdt`

Les règles de visibilité sont stockées en tant qu'enregistrements Custom Metadata Type et gérées via l'[Assistant de configuration](/features/visibility-controls/#configuring-visibility-rules) — elles ne sont pas modifiées directement dans Setup.

| Champ | Type | Objectif |
|---|---|---|
| **Category** | Texte | Le nom du type de document (ex. : `HR Documents`, `Contracts`). Les fichiers référencent cette chaîne dans leur champ `Visibility_Category__c`. |
| **Permitted Roles** | Zone de texte longue | Liste de valeurs `DeveloperName` de rôles séparées par des points-virgules (ex. : `CEO;HR_Manager;HR_Specialist`). Les utilisateurs dont le rôle correspond à l'un de ces éléments peuvent voir les fichiers de cette catégorie. |
| **Is Active** | Case à cocher | Indique si la règle est appliquée. Les règles inactives se comportent comme si elles n'existaient pas (la catégorie revient à l'état ouvert par défaut). |
| **Description** | Texte | Description destinée à l'administrateur, décrivant le contenu de la catégorie. |

:::note
Lorsqu'une catégorie est « supprimée » via l'assistant, elle est **désactivée** (`Is_Active = false`), et non supprimée. L'API de métadonnées Salesforce ne permet pas de supprimer des enregistrements CMT depuis Apex, donc la désactivation est l'équivalent le plus proche. Les catégories désactivées sont exclues de toutes les requêtes et n'apparaissent pas dans le sélecteur de catégories.
:::

## Jonction de visibilité des fichiers — `Tucario_File_Visibility__c`

Smarter Files crée un enregistrement de jonction d'objet personnalisé pour chaque fichier géré en mode de stockage **Isolated** (et pour tout fichier avec une catégorie ou un indicateur privé, quel que soit le mode).

| Champ | Type | Objectif |
|---|---|---|
| **Content Document Id** | Texte (ID externe, unique) | Référence au `ContentDocument` Salesforce. Un enregistrement de jonction par fichier par enregistrement parent. |
| **Parent Record Id** | Texte (18) | L'ID à 18 caractères de l'enregistrement auquel le fichier est joint. |
| **Visibility Category** | Texte (80) | Le nom de catégorie issu de `Tucario_Visibility_Rule__mdt`. Vide signifie aucune restriction de catégorie. |
| **Is Private** | Case à cocher | Vrai si le fichier a été marqué comme privé. |
| **Owner Id** | Lookup (Utilisateur) | L'utilisateur qui a marqué le fichier comme privé. Requis lorsque **Is Private** est vrai (appliqué par la règle de validation `Owner_Required_When_Private`). |

**Nommage automatique :** les enregistrements utilisent le format `FV-{0000}`.

**Modèle de partage :** ReadWrite. Les opérations SOQL/DML sur cet objet s'exécutent en `USER_MODE`, de sorte que les utilisateurs ne voient et ne modifient que les enregistrements de jonction auxquels ils ont accès.

## Permissions personnalisées

| Nom API | Utilisé par |
|---|---|
| `Tucario_Manage_Categories` | Accordé via le jeu de permissions *Tucario - Manage File Categories*. Contrôle la visibilité de l'élément de menu **Set Category** et contourne le filtrage basé sur les catégories. |
| `Tucario_View_Private_Documents` | Accordé via le jeu de permissions *Tucario - View Private Documents*. Permet de voir les fichiers privés appartenant à d'autres utilisateurs. |

Vous pouvez attribuer ces permissions personnalisées via vos propres jeux de permissions si vous souhaitez les regrouper avec des rôles propres à votre org plutôt que d'utiliser les jeux de permissions fournis.

## Classes Apex exposées

Deux contrôleurs sont accessibles depuis les composants Lightning — les deux s'exécutent `with sharing` et utilisent des opérations SOQL/DML en `USER_MODE` :

- **`TucarioFileDownloadController`** — CRUD sur les fichiers, téléversement/téléchargement, création de liens publics, attribution de catégories, activation/désactivation de l'indicateur privé.
- **`TucarioVisibilityController`** — backend de l'assistant (liste des rôles, déploiement des règles, interrogation du statut de déploiement), contrôles de migration par lot, vérifications des permissions.

Accordez l'accès via le jeu de permissions **Tucario Files** (déjà activé) — il n'y a normalement aucune raison d'activer ces classes via d'autres jeux de permissions.
