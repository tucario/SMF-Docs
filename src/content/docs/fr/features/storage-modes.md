---
title: Modes de stockage
description: Mode de stockage Standard vs Isolated et migration des fichiers.
---
## Aperçu
Smarter Files prend en charge deux modes de stockage qui contrôlent la façon dont les fichiers sont liés aux enregistrements. Le mode est défini par instance du composant dans le Lightning App Builder.
![Configuration du mode de stockage dans App Builder](/docs/storagemode-isolated.png)
## Mode Standard (par défaut)
- Les fichiers sont liés via le `ContentDocumentLink` natif de Salesforce.
- Les fichiers apparaissent à la fois dans le composant Smarter Files **et** dans la liste associée Fichiers standard.
- Les contrôles de visibilité (catégories, documents privés) ne sont **pas disponibles**.
- Idéal pour : une gestion simple des fichiers avec compatibilité avec la liste associée Fichiers standard.
## Mode Isolated
- Les fichiers sont liés uniquement via un enregistrement de jonction (`Tucario_File_Visibility__c`).
- Les fichiers apparaissent **uniquement** dans le composant Smarter Files — ils sont masqués de la liste associée Fichiers standard.
- Les contrôles de visibilité sont **entièrement disponibles** : catégories, documents privés, filtrage basé sur les rôles.
- Idéal pour : les scénarios où vous devez contrôler qui peut voir quels fichiers.
## Comparaison
| | Standard | Isolated |
|---|---|---|
| Fichiers visibles dans la liste associée Fichiers standard | Oui | Non |
| Attribution de catégories | Non disponible | Disponible |
| Marquer comme privé | Non disponible | Disponible |
| Filtrage de visibilité basé sur les rôles | Non disponible | Disponible |
| Migration requise lors du changement | — | Oui |
## Migration vers le mode Isolated
Lors du passage d'un composant du mode Standard au mode Isolated sur un enregistrement qui contient déjà des fichiers, les fichiers existants ne seront pas visibles tant qu'ils n'auront pas été migrés.
Le composant affiche une bannière d'avertissement avec un bouton **Migrate Existing Files**. En cliquant dessus :
1. Un traitement par lots démarre et crée des enregistrements de jonction pour tous les enregistrements `ContentDocumentLink` existants sur cet enregistrement.
2. Une barre de progression s'affiche pendant la migration.
3. Un message de succès s'affiche une fois terminé.
La migration peut être relancée en toute sécurité — elle utilise un upsert sur le champ d'ID externe `Content_Document_Id__c`.
