---
title: Instalação
description: Como instalar o Smarter Files na sua organização Salesforce.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## Edição AppExchange (Pacote Gerenciado)

1. Abra o link de instalação fornecido pelo seu contato de vendas da Tucario (ou pela listagem no AppExchange).
2. Escolha **Install for All Users**, **Install for Admins Only** ou **Install for Specific Profiles** conforme a forma desejada de controle de acesso.
3. Aprove as solicitações de acesso de terceiros e aguarde a conclusão da instalação.

<Image src={packageInstaller} alt="Instalador de pacotes Salesforce para o Smarter Files" />

## Edição Gratuita (GitHub)

1. Clone ou baixe o repositório do [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Implante na sua organização Salesforce usando o Salesforce CLI:

```bash
sf project deploy start --source-dir src
```

## Atribuir Permission Sets

O Smarter Files inclui três permission sets. Todo usuário que interage com o componente precisa, no mínimo, do conjunto base.

<Image src={permSets} alt="Permission sets do Smarter Files no Setup" />

| Permission Set | Necessário para | Concede |
|---|---|---|
| **Tucario Files (Base)** | Todos os usuários do componente | Acesso ao aplicativo, CRUD no objeto de junção de visibilidade, acesso aos controladores de arquivos |
| **Tucario - Manage File Categories** | Administradores e responsáveis por categorias | Permissão customizada `Tucario_Manage_Categories` — atribuir categorias a arquivos e ignorar a filtragem por categoria |
| **Tucario - View Private Documents** | Administradores, RH, conformidade | Permissão customizada `Tucario_View_Private_Documents` — visualizar arquivos marcados como privados por outros usuários |

Atribua via **Setup → Permission Sets → [nome] → Manage Assignments**.

## Adicionar o Componente a uma Página de Registro

1. Abra qualquer página de registro no **Lightning App Builder**.
2. Arraste o componente **Smarter Files** da paleta de componentes para o layout.
3. Configure as propriedades de design no painel à direita — consulte [Configuração do Componente](/configuration/component-setup/) para a referência completa de propriedades.
4. Salve e ative a página.

## Requisitos

- Edição Salesforce **Enterprise**, **Professional** ou **Unlimited**.
- Lightning Experience habilitado.
- Licenças Platform Starter / Platform Plus são suportadas — não é necessária uma licença completa do Salesforce.
- Para geração de Links Públicos: **Content Deliveries and Public Links** deve estar habilitado (Setup → Salesforce Files).
