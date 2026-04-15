---
title: Restrictions de téléversement
description: Contrôlez les types et tailles de fichiers que les utilisateurs peuvent téléverser.
---
## Aperçu
Les administrateurs peuvent restreindre les téléversements par type et taille de fichier directement dans les propriétés du composant — aucun code requis.
## Restrictions par type de fichier
Deux propriétés contrôlent les types de fichiers acceptés :
### Extensions autorisées
Une liste blanche d'extensions autorisées (ex. : `pdf,docx,xlsx`). Lorsqu'elle est configurée, **seuls** ces types peuvent être téléversés. Laissez vide pour autoriser tous les types.
### Extensions exclues
Une liste noire d'extensions bloquées (ex. : `exe,bat,sh`). Ces types sont rejetés au téléversement. Laissez vide pour ne rien exclure.
### Utilisation combinée
Lorsque les deux sont configurées, elles fonctionnent comme un filtre combiné :
1. **La liste autorisée est vérifiée en premier** — si l'extension du fichier ne figure pas dans la liste autorisée, il est bloqué.
2. **La liste exclue est vérifiée ensuite** — si le fichier a passé la vérification de la liste autorisée mais figure dans la liste exclue, il est tout de même bloqué.
Un fichier doit figurer dans la liste autorisée **et** ne pas figurer dans la liste exclue pour être accepté.
:::tip
Dans la plupart des cas, vous n'avez besoin que d'un seul des deux. Utilisez **Allowed** pour restreindre à un petit ensemble de types connus. Utilisez **Excluded** pour bloquer des types spécifiques tout en autorisant le reste.
:::
## Limite de taille de fichier
Définissez la propriété **Max File Size (MB)** pour limiter la taille maximale de téléversement. Définissez à `0` pour aucune limite.
Lorsqu'un utilisateur tente de téléverser un fichier dépassant la limite, le téléversement est bloqué et un message d'erreur s'affiche avec le nom du fichier et la limite configurée.
## Retour utilisateur
Lorsque des téléversements sont bloqués, le composant fournit un retour clair :
![Message de téléversement bloqué](/docs/upload-blocked.png)
- **Fichier unique bloqué** — un message identifie le fichier et explique la raison du blocage (mauvais type ou trop volumineux).
- **Plusieurs fichiers bloqués** — le message liste tous les fichiers bloqués avec la raison.
- **Téléversement mixte** — si certains fichiers réussissent et d'autres sont bloqués, un message de succès et un message d'avertissement sont affichés.
