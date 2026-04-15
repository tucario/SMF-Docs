---
title: Paramètres d'administration
description: Paramètres d'administration globaux pour Smarter Files.
---
## Custom Metadata
Smarter Files utilise les Custom Metadata Types pour la configuration globale. Cela permet de déployer les paramètres entre les orgs via des change sets ou l'API de métadonnées.
## Paramètres clés
### Restrictions de téléversement
Définissez des règles de téléversement par objet :
- **Object API Name** — l'objet auquel appliquer la règle.
- **Allowed Extensions** — types de fichiers séparés par des virgules (ex. : `pdf,docx`).
- **Max File Size (MB)** — taille maximale de téléversement.
### Gestion des catégories (Édition AppExchange)
Les catégories contrôlent quels rôles peuvent voir des fichiers spécifiques. Elles sont gérées via l'**Assistant de configuration** dans l'application Smarter Files :
1. Ouvrez l'application **Smarter Files by Tucario** depuis le lanceur d'applications.
2. Cliquez sur **Manage Document Categories**.
3. Définissez les types de documents, attribuez les rôles autorisés et déployez.
Les catégories sont stockées en tant qu'enregistrements Custom Metadata Type (`Tucario_Visibility_Rule__mdt`). Chaque enregistrement contient :
| Champ | Description |
|---|---|
| **Category** | L'identifiant de la catégorie |
| **Permitted Roles** | DeveloperNames des rôles séparés par des points-virgules |
| **Is Active** | Indique si la règle est appliquée |
| **Description** | Description destinée à l'administrateur |
:::note
Lorsqu'une catégorie est supprimée via l'assistant, elle est **désactivée** plutôt que supprimée. L'API de métadonnées Salesforce ne permet pas de supprimer des enregistrements Custom Metadata Type depuis Apex, donc le champ `Is_Active` de l'enregistrement est défini sur `false`. Les catégories désactivées sont exclues de toutes les requêtes et n'apparaissent pas dans le sélecteur de catégories.
:::
## Permissions
Smarter Files respecte le partage standard de Salesforce et les permissions CRUD. Aucun jeu de permissions supplémentaire n'est requis pour les fonctionnalités de base.
Pour l'Édition AppExchange, trois jeux de permissions sont inclus :
| Jeu de permissions | Objectif |
|---|---|
| **Tucario Files** | Accès de base à l'application, aux contrôleurs Apex et à l'objet de jonction. Requis pour tous les utilisateurs. |
| **Tucario - Manage File Categories** | Permet d'attribuer des catégories aux fichiers. Les utilisateurs disposant de cette permission contournent le filtrage par catégorie et peuvent voir tous les fichiers. |
| **Tucario - View Private Documents** | Permet de consulter les fichiers marqués comme privés par d'autres utilisateurs. |
