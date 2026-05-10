---
title: Vues et tri
description: Vue liste, vue vignettes et options de tri dans Smarter Files.
---

import { Image } from 'astro:assets';
import listView from '../../../../assets/screenshots/list-view.png';
import tileView from '../../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../../assets/screenshots/empty-state.png';

## Vue liste

La disposition par défaut — lignes verticales affichant le nom du fichier, l'icône de type, la date de dernière modification, la taille, le propriétaire, le badge de catégorie (si attribué) et une icône de cadenas pour les fichiers privés. Chaque ligne dispose d'un bouton de menu contextuel révélant les actions disponibles par fichier.

<Image src={listView} alt="Vue liste de Smarter Files avec deux fichiers et le lien Download All Files" />

## Vue vignettes

Une grille de cartes avec des icônes de type de fichier bien visibles. Utile pour les enregistrements contenant de nombreuses images ou lorsque la reconnaissance visuelle rapide prime sur la lecture des métadonnées.

<Image src={tileView} alt="Vue vignettes de Smarter Files affichant les fichiers sous forme de grille responsive de cartes" />

## Basculer entre les vues

L'administrateur définit la vue **par défaut** via la propriété de conception **Display Mode** dans App Builder (`List` ou `Tiles`). Les utilisateurs peuvent basculer entre les vues en cours d'utilisation ; leur préférence est mémorisée pour cette page d'enregistrement.

## Tri

Six options de tri, toutes disponibles dans le menu déroulant de tri :

| Option | Trie par |
|---|---|
| Date (Plus récent d'abord) | `LastModifiedDate` décroissant — le tri par défaut |
| Date (Plus ancien d'abord) | `LastModifiedDate` croissant |
| Taille (Plus grand d'abord) | `ContentSize` décroissant |
| Taille (Plus petit d'abord) | `ContentSize` croissant |
| Nom (A–Z) | `Title` ordre alphabétique |
| Nom (Z–A) | `Title` ordre alphabétique inverse |

<Image src={sortMenu} alt="Menu déroulant de tri ouvert affichant les six options de tri" />

L'administrateur définit le tri **par défaut** via la propriété de conception **Default Sort Order**. Les utilisateurs peuvent le modifier en cours d'utilisation — leur choix persiste pour cette page d'enregistrement pendant la session.

## État vide

Lorsque l'enregistrement ne contient aucun fichier (ou aucun fichier que l'utilisateur est autorisé à voir, après le filtrage de visibilité), le composant affiche un état vide épuré avec l'option de téléversement toujours visible.

<Image src={emptyState} alt="État vide de Smarter Files avec l'invite de téléversement" />
