---
title: Views & Sorting
description: List view, tile view, and sorting options in Smarter Files.
---

import { Image } from 'astro:assets';
import listView from '../../../assets/screenshots/list-view.png';
import tileView from '../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../assets/screenshots/empty-state.png';

## List View

The default layout — vertical rows showing file name, type icon, last-modified date, size, owner, category badge (if assigned), and a privacy lock icon for private files. Each row has a context-menu button revealing per-file actions.

<Image src={listView} alt="Smarter Files list view with two files and Download All Files link" />

## Tile View

A grid of cards with prominent file-type icons. Useful for image-heavy records or when scanning at a glance matters more than reading metadata.

<Image src={tileView} alt="Smarter Files tile view showing files as a responsive grid of cards" />

## Switching Views

The admin sets the **default** view via the **Display Mode** design property in App Builder (`List` or `Tiles`). Users can toggle between views at runtime; their preference is remembered for that record page.

## Sorting

Six sort options, all available in the sort dropdown:

| Option | Sorts by |
|---|---|
| Date (Newest First) | `LastModifiedDate` descending — the default |
| Date (Oldest First) | `LastModifiedDate` ascending |
| Size (Largest First) | `ContentSize` descending |
| Size (Smallest First) | `ContentSize` ascending |
| Name (A–Z) | `Title` alphabetical |
| Name (Z–A) | `Title` reverse alphabetical |

<Image src={sortMenu} alt="Sort dropdown open showing the six sort options" />

The admin sets the **default** via the **Default Sort Order** design property. Users can override at runtime — their choice persists for that record page during the session.

## Empty State

When the record has no files (or none the user is allowed to see, after visibility filtering), the component shows a clean empty state with the upload affordance still visible.

<Image src={emptyState} alt="Smarter Files empty state with upload prompt" />
