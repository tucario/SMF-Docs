---
title: Libellés personnalisés
description: Comment personnaliser les libellés et le texte dans Smarter Files.
---

## Aperçu

Chaque élément de texte visible par l'utilisateur dans le composant Smarter Files est stocké en tant que Custom Label Salesforce — environ **98 libellés** au total, couvrant les boutons, les en-têtes, les modales, les toasts, les messages de validation et l'Assistant de configuration. Cela vous permet de :

- Traduire le composant dans n'importe quelle langue prise en charge par Salesforce.
- Adapter la terminologie à celle de votre organisation (ex. : « Documents » au lieu de « Files »).
- Personnaliser les messages d'erreur et les toasts sans toucher au code.

## Personnalisation des libellés

1. Accédez à **Setup → Custom Labels** dans Salesforce.
2. Filtrez par préfixe d'espace de noms `smarterfiles` (ou recherchez `Tucario_`).
3. Cliquez sur un libellé pour modifier sa valeur, ou ajoutez des traductions sous **Local Translations / Overrides** pour des langues supplémentaires.

:::note
Les libellés sont regroupés sous le package `smarterfiles`. Les *noms* des libellés commencent tous par `Tucario_` (le préfixe historique conservé entre les versions).
:::

## Catégories de libellés

| Préfixe | Objectif | Exemples |
|---|---|---|
| `Tucario_Common_*` | Texte d'interface partagé et messages de validation utilisés à plusieurs endroits | `Tucario_Common_Cancel`, `Tucario_Common_Save`, `Tucario_Common_Upload_Blocked`, `Tucario_Common_Upload_Size_Blocked` |
| `Tucario_Files_*` | Composant principal de liste de fichiers — actions, erreurs, états vides, options de tri | `Tucario_Files_Action_Delete`, `Tucario_Files_Delete_Error` |
| `Tucario_Wizard_*` | Libellés des étapes de l'Assistant de configuration, invites et confirmations | titres des étapes, libellés des boutons, messages de statut de déploiement |
| `Tucario_Visibility_*` | Contrôles de visibilité — catégories, documents privés, attribution des rôles | sélecteur de catégorie, « Mark as Private » / « Remove Private », libellés de la hiérarchie des rôles |

## Exemple : renommer « Files » en « Documents »

1. Setup → Custom Labels → recherchez `Tucario_Files_Card_Title` (ou le libellé qui gère l'en-tête que vous souhaitez modifier).
2. Cliquez sur **Edit** → changez la valeur en `Documents`.
3. Enregistrez. Le composant prend en compte la nouvelle valeur au prochain chargement de la page — aucun redéploiement n'est nécessaire.

Si vous souhaitez un texte différent par emplacement de page d'enregistrement, utilisez la propriété de conception **Card Title** sur le composant — elle remplace le libellé pour cette instance spécifique.
