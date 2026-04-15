---
title: Téléchargement ZIP groupé
description: Téléchargez plusieurs fichiers sous forme d'une seule archive ZIP.
---
## Aperçu
Téléchargez tous les fichiers associés à un enregistrement sous forme d'une seule archive ZIP — plus besoin de télécharger les fichiers un par un.
Le lien **Download All Files** apparaît en haut du composant lorsque des fichiers sont présents. En cliquant dessus, tous les fichiers visibles sont regroupés dans un ZIP et le téléchargement se lance dans le navigateur.
## Fonctionnement
1. Le composant récupère tout le contenu des fichiers côté client via l'API Salesforce Content.
2. Les fichiers sont compressés dans une archive ZIP à l'aide de [JSZip](https://stuk.github.io/jszip/).
3. Le ZIP est généré dans le navigateur — aucun traitement côté serveur ni service externe n'est impliqué.
4. Le téléchargement démarre automatiquement une fois l'archive prête.
## Gestion des fichiers volumineux
Pour les enregistrements contenant de nombreux fichiers ou des fichiers volumineux, le composant affiche un indicateur de progression pendant la génération du ZIP. Si le téléchargement d'un fichier individuel échoue (par exemple en raison de limites de taille), le ZIP est tout de même créé avec les fichiers restants et un message d'avertissement s'affiche.
