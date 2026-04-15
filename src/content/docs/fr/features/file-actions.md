---
title: Actions sur les fichiers
description: Actions disponibles pour les fichiers individuels dans Smarter Files.
---
## Actions du menu contextuel
Chaque fichier du composant dispose d'un menu d'actions avec les options suivantes :
![Menu contextuel des actions sur les fichiers](/docs/file-actions.png)
| Action | Description | Disponibilité |
|---|---|---|
| **View Details** | Ouvre la page de détail standard du fichier Salesforce | Tous les utilisateurs |
| **Edit Details** | Modifier le nom et la description du fichier en ligne | Utilisateurs avec accès en modification |
| **Download** | Télécharger le fichier individuel | Tous les utilisateurs |
| **Public Link** | Générer une URL de partage publique pour le fichier | Configurable via une propriété du composant |
| **Delete** | Supprimer le fichier définitivement (avec confirmation) | Utilisateurs avec accès en suppression |
| **Remove** | Retirer le fichier de cet enregistrement sans le supprimer | Mode Isolated uniquement |
| **Set Category** | Attribuer une catégorie de visibilité au fichier | Mode Isolated + permission Manage Categories |
| **Mark as Private** | Rendre le fichier visible uniquement par vous | Mode Isolated uniquement |
| **Remove Private** | Retirer le marquage privé du fichier | Mode Isolated, propriétaire du fichier uniquement |
## Aperçu natif des fichiers
Cliquer sur le nom d'un fichier ouvre la fenêtre d'aperçu standard de Salesforce — aucun lecteur externe ni plugin n'est nécessaire. L'aperçu prend en charge tous les types de fichiers nativement supportés par Salesforce (PDF, images, documents Office, etc.).
