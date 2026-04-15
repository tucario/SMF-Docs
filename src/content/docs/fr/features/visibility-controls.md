---
title: Contrôles de visibilité
description: Contrôles de visibilité des documents disponibles dans l'Édition AppExchange.
---
:::note
Cette fonctionnalité est disponible uniquement dans l'**Édition AppExchange** et nécessite que le **Storage Mode** du composant soit défini sur **Isolated**.
:::
## Aperçu
Les contrôles de visibilité permettent aux administrateurs de restreindre l'accès aux fichiers en fonction des catégories de documents et des rôles utilisateur. Les fichiers peuvent être attribués à des catégories, et chaque catégorie peut être limitée à des rôles spécifiques — les utilisateurs en dehors de ces rôles ne verront pas les fichiers. De plus, n'importe quel utilisateur peut marquer un fichier comme privé, le rendant visible uniquement par lui-même et les lecteurs autorisés.
Tout le filtrage est effectué **côté serveur** — les fichiers auxquels un utilisateur n'a pas accès ne sont jamais envoyés au navigateur.
## Exigence du mode de stockage
Les contrôles de visibilité sont disponibles uniquement lorsque le **Storage Mode** du composant est défini sur **Isolated** :
| | Standard | Isolated |
|---|---|---|
| Fichiers visibles dans la liste associée Fichiers standard | Oui | Non |
| Attribution de catégories | Non disponible | Disponible |
| Marquer comme privé | Non disponible | Disponible |
| Filtrage de visibilité basé sur les rôles | Non disponible | Disponible |
En mode Isolated, les fichiers sont liés à l'enregistrement exclusivement via un enregistrement de jonction — ils n'apparaissent pas dans la liste associée Fichiers standard de Salesforce.
## Catégories de documents
### Qu'est-ce qu'une catégorie ?
Une catégorie est un libellé attribué à un fichier qui détermine qui peut le voir. Les catégories sont définies par un administrateur via l'**Assistant de configuration** et stockées en tant qu'enregistrements Custom Metadata Type.
Exemples :
- Dossiers médicaux
- Rapports financiers
- Contrats juridiques
- Notes internes
### Comment fonctionne le filtrage par catégorie
Chaque catégorie possède une liste de **rôles autorisés**. Lorsqu'un fichier a une catégorie attribuée :
- Si le rôle de l'utilisateur figure dans la liste autorisée → le fichier est **visible**
- Si le rôle de l'utilisateur ne figure PAS dans la liste autorisée → le fichier est **masqué**
- Si aucun rôle n'est attribué à une catégorie → le fichier est visible par **tout le monde**
- Si un fichier n'a pas de catégorie → le fichier est visible par **tout le monde**
### Attribution de catégories aux fichiers
Les utilisateurs disposant du jeu de permissions **Tucario - Manage File Categories** peuvent attribuer des catégories :
1. Cliquez sur le menu d'actions d'un fichier.
2. Sélectionnez **Set Category**.
3. Choisissez une catégorie dans le sélecteur, ou sélectionnez **No Category** pour retirer l'attribution actuelle.
La visibilité du fichier est mise à jour immédiatement.
<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/assigning-categories-to-files.mp4" type="video/mp4" />
</video>
### Gestion des catégories
Les catégories sont gérées via l'**Assistant de configuration** dans l'application Smarter Files :
1. Ouvrez l'application **Smarter Files by Tucario** depuis le lanceur d'applications.
2. Cliquez sur **Manage Document Categories**.
3. **Étape 1 — Types de documents** : Ajoutez des catégories avec des noms et des descriptions optionnelles.
4. **Étape 2 — Attribution des rôles** : Pour chaque catégorie, sélectionnez quels rôles peuvent voir les fichiers de cette catégorie.
5. **Étape 3 — Vérification et déploiement** : Vérifiez la configuration et cliquez sur Deploy.
<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/add-category.mp4" type="video/mp4" />
</video>
:::note
**Suppression d'une catégorie :** Lorsque vous supprimez un type de document de l'assistant et déployez, l'enregistrement Custom Metadata Type sous-jacent n'est pas supprimé — il est **désactivé** (`Is_Active = false`). Les catégories désactivées n'apparaissent plus dans le sélecteur de catégories et ne filtrent plus les fichiers. Cela est dû au fait que l'API de métadonnées Salesforce ne permet pas de supprimer des enregistrements Custom Metadata Type depuis Apex.
:::
## Documents privés
### Marquer des fichiers comme privés
N'importe quel utilisateur peut marquer un fichier comme privé en mode Isolated :
1. Cliquez sur le menu d'actions d'un fichier.
2. Sélectionnez **Mark as Private**.
3. Une icône de cadenas apparaît à côté du nom du fichier.
<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>
Le fichier est désormais visible uniquement par :
- L'utilisateur qui l'a marqué comme privé (le propriétaire)
- Les utilisateurs disposant du jeu de permissions **Tucario - View Private Documents**
### Retirer le statut privé
Le propriétaire du fichier peut retirer le marquage privé :
1. Cliquez sur le menu d'actions du fichier privé.
2. Sélectionnez **Remove Private**.
3. Le fichier retrouve les règles de visibilité normales.
## Logique de filtrage combiné
Lorsqu'un fichier possède à la fois une catégorie et un marquage privé, **les deux vérifications doivent être satisfaites** pour que le fichier soit visible :
```
Pour chaque fichier :
  1. Vérification du statut privé :
     Si le fichier est privé ET l'utilisateur n'est pas le propriétaire
     ET l'utilisateur n'a pas la permission "View Private Documents" → MASQUER
  2. Vérification de la catégorie :
     Si le fichier a une catégorie avec des rôles autorisés
     ET le rôle de l'utilisateur ne figure pas dans la liste
     ET l'utilisateur n'a pas la permission "Manage Categories" → MASQUER
  3. Sinon → AFFICHER
```
## Jeux de permissions
| Jeu de permissions | Objectif |
|---|---|
| **Tucario Files** | Accès de base. Donne accès à l'application, aux contrôleurs et à l'objet de jonction. À attribuer à tous les utilisateurs. |
| **Tucario - Manage File Categories** | Permet d'attribuer des catégories aux fichiers. **Contourne le filtrage par catégorie** — les utilisateurs disposant de cette permission voient tous les fichiers quelle que soit la catégorie. |
| **Tucario - View Private Documents** | Permet de consulter les fichiers marqués comme privés par d'autres utilisateurs. |
## Cas d'utilisation
- **Dossiers médicaux** visibles uniquement par les responsables RH et le personnel médical.
- **Rapports financiers** restreints à l'équipe financière.
- **Contrats juridiques** accessibles uniquement aux rôles du département juridique.
- **Pièces jointes sensibles** marquées comme privées par les utilisateurs individuels pour un usage personnel.
- **Documents en cours de rédaction** masqués des rôles orientés vers l'externe jusqu'à ce qu'ils soient prêts.
