---
title: Instalação
description: Como instalar o Smarter Files na sua org Salesforce.
---

## Edição Gratuita (GitHub)

1. Clone ou baixe o repositório do [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Implante na sua org Salesforce usando Salesforce CLI:

```bash
sf project deploy start --source-dir force-app
```

3. Navegue até uma página de registro no Lightning App Builder e arraste o componente **Smarter Files** para o layout.

### Deploy com Um Clique (Alternativa)

Você também pode usar a ferramenta de deploy do GitHub para instalar diretamente na sua org:

1. Escolha seu ambiente (Production ou Sandbox):

![Configurações da ferramenta de deploy](/docs/deploy-tool-settings.png)

2. Permita o acesso à sua org Salesforce:

![Prompt de permissão de acesso](/docs/deploy-allow-access.png)

3. Confirme os componentes a serem implantados:

![Confirmação de deploy](/docs/deploy-tool-confirmation.png)

## Edição AppExchange

1. Instale a partir do AppExchange (em breve).
2. Coloque o componente **Smarter Files** em qualquer página de registro usando o Lightning App Builder.
3. Configure as regras de visibilidade no painel de configurações do componente.

## Requisitos

- Salesforce edição **Enterprise**, **Professional** ou **Unlimited**.
- Lightning Experience habilitado.
- Licença Platform é suficiente — não é necessária uma licença Salesforce completa.
