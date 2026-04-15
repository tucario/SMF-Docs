---
title: Configuration du composant
description: Comment ajouter et configurer Smarter Files sur une page d'enregistrement.
---
## Ajout sur une page d'enregistrement
1. Ouvrez n'importe quelle page d'enregistrement dans le **Lightning App Builder**.
2. Trouvez **Smarter Files** dans la palette de composants.
3. Faites-le glisser vers la zone souhaitée de la mise en page.
4. Enregistrez et activez la page.
<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/put-on-flexipage.mp4" type="video/mp4" />
</video>
## Propriétés du composant
![Panneau de configuration App Builder](/docs/storagemode-isolated.png)
Les propriétés suivantes sont disponibles dans la barre latérale du Lightning App Builder :
| Propriété | Description | Valeur par défaut |
|---|---|---|
| **Card Title** | Texte d'en-tête du composant | `Files` |
| **Storage Mode** | `Standard` — fichiers liés via ContentDocumentLink (visibles dans la liste associée Fichiers). `Isolated` — fichiers liés via un enregistrement de jonction uniquement (masqués de la liste associée Fichiers, permet les contrôles de visibilité). | `Standard` |
| **Display Mode** | Mode d'affichage des fichiers : `List` (lignes verticales) ou `Tiles` (grille de cartes) | `List` |
| **Default Sort Order** | Ordre de tri initial de la liste de fichiers. Les utilisateurs peuvent le modifier en cours d'utilisation. Options : `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za` | `date-newest` |
| **Initial Files Displayed** | Nombre maximum de fichiers affichés initialement. Définissez à `0` pour afficher tous les fichiers. Un lien « Tout afficher » apparaît lorsqu'il y a plus de fichiers. | `5` |
| **Allowed File Extensions** | Liste blanche d'extensions séparées par des virgules (ex. : `pdf,docx,png`). Seuls ces types peuvent être téléversés. Laissez vide pour autoriser tous les types. | Tous les types |
| **Excluded File Extensions** | Liste noire d'extensions séparées par des virgules (ex. : `exe,bat,sh`). Ces types sont bloqués au téléversement. | Aucun |
| **Max File Size (MB)** | Taille maximale des fichiers téléversés en mégaoctets. Définissez à `0` pour aucune limite. | `0` (aucune limite) |
### Logique des restrictions de téléversement
Lorsque les extensions **autorisées** et **exclues** sont toutes deux configurées, elles fonctionnent ensemble :
1. **La liste autorisée est vérifiée en premier** — si l'extension du fichier ne figure pas dans la liste autorisée, il est bloqué.
2. **La liste exclue est vérifiée ensuite** — si le fichier a passé la vérification de la liste autorisée mais que son extension figure dans la liste exclue, il est tout de même bloqué.
Autrement dit, un fichier doit figurer dans la liste autorisée **et** ne pas figurer dans la liste exclue pour être accepté.
:::tip
Dans la plupart des cas, vous n'avez besoin que d'un seul des deux paramètres. Utilisez **Allowed** lorsque vous souhaitez restreindre les téléversements à un petit ensemble de types connus (ex. : `pdf,docx,xlsx`). Utilisez **Excluded** lorsque vous souhaitez bloquer des types spécifiques tout en autorisant le reste (ex. : `exe,bat`).
:::
## Conseils de placement
- Fonctionne dans la zone de contenu principale, la barre latérale ou les zones pleine largeur.
- Peut être placé sur n'importe quelle page d'enregistrement d'objet standard ou personnalisé.
- Plusieurs instances sur la même page sont prises en charge (ex. : différentes configurations par onglet).
