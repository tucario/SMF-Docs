---
title: Documents privés
description: Marquez des fichiers comme privés pour en restreindre l'accès au propriétaire du fichier.
---
:::note
Cette fonctionnalité est disponible uniquement dans l'**Édition AppExchange** et nécessite le mode de stockage **Isolated**.
:::
## Aperçu
N'importe quel utilisateur peut marquer un fichier comme privé, le rendant visible uniquement par lui-même et par les utilisateurs disposant de la permission **View Private Documents**. Les fichiers privés affichent une icône de cadenas pour indiquer leur accès restreint.
## Marquer un fichier comme privé
1. Cliquez sur le menu d'actions d'un fichier.
2. Sélectionnez **Mark as Private**.
3. Une icône de cadenas apparaît à côté du nom du fichier.
<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>
Le fichier est désormais visible uniquement par :
- L'utilisateur qui l'a marqué comme privé (le propriétaire)
- Les utilisateurs disposant du jeu de permissions **Tucario - View Private Documents**
## Retirer le statut privé
Le propriétaire du fichier peut retirer le marquage privé :
1. Cliquez sur le menu d'actions du fichier privé.
2. Sélectionnez **Remove Private**.
3. Le fichier retrouve les règles de visibilité normales.
## Qui peut voir les fichiers privés ?
| Utilisateur | Peut voir le fichier ? |
|---|---|
| Propriétaire du fichier (qui l'a marqué comme privé) | Oui |
| Utilisateur avec la permission **View Private Documents** | Oui |
| Autres utilisateurs | Non |
Si le fichier a également une catégorie attribuée, la vérification du statut privé et la vérification de la catégorie doivent toutes deux être satisfaites. Consultez [Contrôles de visibilité](/fr/features/visibility-controls/) pour plus de détails sur le filtrage combiné.
