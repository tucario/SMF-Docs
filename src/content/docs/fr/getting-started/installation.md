---
title: Installation
description: Comment installer Smarter Files dans votre org Salesforce.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## Édition AppExchange (Package géré)

1. Ouvrez le lien d'installation fourni par votre contact commercial Tucario (ou depuis la fiche AppExchange).
2. Choisissez **Install for All Users**, **Install for Admins Only** ou **Install for Specific Profiles** selon la façon dont vous souhaitez contrôler l'accès.
3. Approuvez les invites d'accès tiers et attendez la fin de l'installation.

<Image src={packageInstaller} alt="Programme d'installation du package Salesforce pour Smarter Files" />

## Édition gratuite (GitHub)

1. Clonez ou téléchargez le dépôt depuis [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Déployez dans votre org Salesforce à l'aide de Salesforce CLI :

```bash
sf project deploy start --source-dir src
```

## Attribuer les jeux de permissions

Smarter Files est livré avec trois jeux de permissions. Chaque utilisateur qui interagit avec le composant a besoin d'au moins le jeu de base.

<Image src={permSets} alt="Jeux de permissions Smarter Files dans Setup" />

| Jeu de permissions | Requis pour | Accorde |
|---|---|---|
| **Tucario Files (Base)** | Tout utilisateur du composant | Accès à l'application, CRUD sur l'objet de jonction de visibilité, accès aux contrôleurs de fichiers |
| **Tucario - Manage File Categories** | Administrateurs et responsables de catégories | Permission personnalisée `Tucario_Manage_Categories` — attribuer des catégories aux fichiers, contourner le filtrage par catégorie |
| **Tucario - View Private Documents** | Administrateurs, RH, conformité | Permission personnalisée `Tucario_View_Private_Documents` — voir les fichiers marqués comme privés par d'autres utilisateurs |

Attribuez via **Setup → Permission Sets → [nom] → Manage Assignments**.

## Ajouter le composant à une page d'enregistrement

1. Ouvrez n'importe quelle page d'enregistrement dans le **Lightning App Builder**.
2. Faites glisser **Smarter Files** depuis la palette de composants sur la mise en page.
3. Configurez les propriétés de conception dans le panneau de droite — voir [Configuration du composant](/configuration/component-setup/) pour la référence complète des propriétés.
4. Enregistrez et activez la page.

## Prérequis

- Salesforce édition **Enterprise**, **Professional** ou **Unlimited**.
- Lightning Experience activé.
- Les licences Platform Starter / Platform Plus sont prises en charge — aucune licence Salesforce complète n'est requise.
- Pour la génération de liens publics : **Content Deliveries and Public Links** doit être activé (Setup → Salesforce Files).
