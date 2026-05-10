---
title: Actions sur les fichiers
description: Actions disponibles pour les fichiers individuels dans Smarter Files.
---

import { Image } from 'astro:assets';
import contextMenu from '../../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../../assets/screenshots/file-preview.png';
import editModal from '../../../../assets/screenshots/edit-details-modal.png';

## Menu contextuel

Chaque fichier dispose d'un menu contextuel (le bouton à trois points à droite de la ligne, ou le bouton superposé sur une tuile). Les actions disponibles dépendent des permissions de l'utilisateur sur ce fichier spécifique.

<Image src={contextMenu} alt="Menu contextuel d'un fichier ouvert affichant les actions disponibles" />

| Action | Description | Disponibilité |
|---|---|---|
| **View Details** | Ouvre la page de détail standard du fichier Salesforce dans un nouvel onglet. | Tous les utilisateurs |
| **Edit Details** | Ouvre une modale intégrée pour modifier le titre et la description du fichier. Enregistre et actualise la liste automatiquement. | Utilisateurs avec accès en modification |
| **Download** | Télécharge ce fichier individuellement. | Tous les utilisateurs |
| **Public Link** | Génère une URL Content Distribution Salesforce pour le fichier et la copie automatiquement dans le presse-papiers. | Tous les utilisateurs (nécessite que Content Deliveries soit activé dans l'org) |
| **Delete** | Supprime définitivement le fichier de Salesforce. Une modale de confirmation s'affiche d'abord. | Utilisateurs avec accès en suppression (propriétaire du fichier, ou utilisateurs avec les droits d'objet/de partage appropriés ; respecte les règles de licence Platform Starter / Platform Plus) |
| **Remove from Record** | Dissocie le fichier de cet enregistrement tout en le conservant dans la bibliothèque de fichiers de l'org. Utile lorsqu'un fichier a été joint au mauvais enregistrement. | Utilisateurs avec accès en modification sur l'enregistrement |
| **Set Category** | Ouvre le sélecteur de catégorie pour attribuer une catégorie de visibilité au fichier. | Utilisateurs disposant de la permission personnalisée **Manage Categories** |
| **Mark as Private** | Marque le fichier comme privé — seuls le propriétaire et les utilisateurs disposant de **View Private Documents** peuvent le voir. Voir [Documents privés](/features/private-documents/). | Tous les utilisateurs (mode de stockage Isolated) |
| **Remove Private** | Supprime l'indicateur privé. Visible sur les fichiers privés. | L'utilisateur qui l'a marqué comme privé |

<Image src={actionButtons} alt="Ligne de fichier avec les boutons d'action modification/suppression visibles" />

## Aperçu natif des fichiers

Cliquer sur le nom d'un fichier ouvre la modale d'aperçu standard de Salesforce — la même que celle que les utilisateurs connaissent déjà depuis le composant Fichiers natif. Prend en charge tout ce que Salesforce prévisualise nativement (PDF, images, documents Office, vidéo, audio).

<Image src={preview} alt="Aperçu de fichier natif Salesforce ouvert depuis Smarter Files" />

## Modification des détails

Sélectionner **Edit Details** ouvre une modale légère — modifiez le titre ou la description, cliquez sur Enregistrer, et la liste de fichiers s'actualise automatiquement sans rechargement complet de la page.

<Image src={editModal} alt="Modale de modification des détails du fichier" />
