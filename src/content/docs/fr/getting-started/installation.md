---
title: Installation
description: Comment installer Smarter Files dans votre org Salesforce.
---
## Édition gratuite (GitHub)
1. Clonez ou téléchargez le dépôt depuis [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Déployez dans votre org Salesforce à l'aide de Salesforce CLI :
```bash
sf project deploy start --source-dir force-app
```
3. Accédez à une page d'enregistrement dans le Lightning App Builder et glissez le composant **Smarter Files** sur la mise en page.
### Déploiement en un clic (Alternative)
Vous pouvez également utiliser l'outil de déploiement GitHub pour installer directement dans votre org :
1. Choisissez votre environnement (Production ou Sandbox) :
![Paramètres de l'outil de déploiement](/docs/deploy-tool-settings.png)
2. Autorisez l'accès à votre org Salesforce :
![Invite d'autorisation d'accès](/docs/deploy-allow-access.png)
3. Confirmez les composants à déployer :
![Confirmation du déploiement](/docs/deploy-tool-confirmation.png)
## Édition AppExchange
1. Installez depuis AppExchange (bientôt disponible).
2. Glissez le composant **Smarter Files** sur n'importe quelle page d'enregistrement à l'aide du Lightning App Builder.
3. Configurez les règles de visibilité dans le panneau de paramètres du composant.
## Prérequis
- Salesforce édition **Enterprise**, **Professional** ou **Unlimited**.
- Lightning Experience activé.
- Une licence Platform est suffisante — aucune licence Salesforce complète n'est requise.
