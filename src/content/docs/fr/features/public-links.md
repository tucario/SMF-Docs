---
title: Liens publics
description: Générez des liens de partage publics pour les fichiers en un seul clic.
---

import { Image } from 'astro:assets';
import publicLink from '../../../../assets/screenshots/public-link-copied.png';

## Aperçu

Générez une URL de partage publique pour n'importe quel fichier directement depuis le menu contextuel du fichier — sans avoir à naviguer vers la page de détail du fichier ni ouvrir une modale de partage séparée.

<Image src={publicLink} alt="Menu contextuel d'un fichier avec l'option Lien public, et un toast confirmant que l'URL a été copiée dans le presse-papiers" />

## Comment créer un lien public

1. Cliquez sur le menu contextuel du fichier que vous souhaitez partager.
2. Sélectionnez **Public Link**.
3. Smarter Files crée un enregistrement **Content Distribution** Salesforce pour le fichier et **copie automatiquement l'URL dans votre presse-papiers**.
4. Un toast de succès confirme que le lien a été créé et copié.

L'URL générée est un lien public Salesforce standard — aucune authentification n'est requise et il peut être partagé avec n'importe qui (y compris des personnes extérieures à votre org Salesforce).

## Prérequis

- **Content Deliveries and Public Links** doit être activé pour votre org. Setup → recherchez « Content Deliveries » → activez. Sans cela, l'option de menu **Public Link** est désactivée et une info-bulle explique pourquoi.
- L'utilisateur créant le lien doit disposer d'un accès en suppression sur le fichier (règle standard de Salesforce pour la création de Content Distributions).

## Gestion des liens existants

Les liens publics créés via Smarter Files apparaissent dans Salesforce sous la liste associée **Distributions** du fichier, aux côtés des liens créés via l'interface standard. Depuis cet endroit, vous pouvez les révoquer, définir des dates d'expiration ou exiger un mot de passe.
