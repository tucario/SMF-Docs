---
title: Téléchargement ZIP groupé
description: Téléchargez tous les fichiers d'un enregistrement en une seule archive ZIP — sans limite de taille.
---

import { Image } from 'astro:assets';
import downloadAll from '../../../../assets/screenshots/download-all-zip.png';

## Aperçu

Téléchargez tous les fichiers joints à l'enregistrement en une seule archive ZIP. Le lien **Download All Files** apparaît en haut du composant dès qu'au moins un fichier est présent.

<Image src={downloadAll} alt="Composant Fichiers avec téléchargement groupé en cours, affichant un indicateur de chargement" />

## Fonctionnement

Smarter Files choisit la stratégie appropriée en fonction de la taille totale des fichiers :

- **Petits lots (par défaut : moins de ~50 Mo au total)** sont compressés **côté client** dans le navigateur à l'aide de [JSZip](https://stuk.github.io/jszip/). L'archive ZIP est générée et téléchargée entièrement sur la machine de l'utilisateur — aucun traitement côté serveur n'est impliqué.
- **Grands lots** sont compressés **côté serveur** en diffusant les fichiers via le servlet de fichiers Salesforce. Cela contourne la limite standard de 12 Mo du tas Apex, il n'y a donc aucune limite de taille pratique sur l'archive.

L'utilisateur voit un seul bouton « Download All » quelle que soit la méthode utilisée ; le composant décide automatiquement.

## Filtrage de visibilité

Seuls les fichiers que l'utilisateur est autorisé à voir sont inclus dans l'archive ZIP. Les fichiers restreints par :

- **Les règles de catégorie de visibilité** (le rôle de l'utilisateur ne figure pas dans la liste autorisée), ou
- **L'indicateur privé** (défini par un autre utilisateur, et l'utilisateur actuel ne dispose pas de `View Private Documents`)

...sont filtrés côté serveur avant la création du bundle — ils n'apparaissent jamais dans l'archive, même si l'utilisateur sait qu'ils existent.

## Comportement en cas d'échec

Si le téléchargement d'un fichier individuel échoue (fichier corrompu, supprimé entre la récupération et la compression, permission révoquée en cours d'opération), le ZIP est tout de même généré avec les fichiers restants et un message avertit l'utilisateur des fichiers ignorés. L'opération Download All n'est jamais abandonnée entièrement à cause d'un seul fichier défaillant.

## Notes de performance

- La génération du ZIP s'exécute de façon asynchrone — l'utilisateur peut naviguer ailleurs et le téléchargement se termine lorsqu'il est prêt.
- Pour les enregistrements contenant des centaines de fichiers, attendez-vous à des temps d'attente perceptibles au premier clic ; les téléchargements ultérieurs du même enregistrement sont plus rapides car les métadonnées de fichiers sont mises en cache.
