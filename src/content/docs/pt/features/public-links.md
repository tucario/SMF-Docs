---
title: Links Públicos
description: Gere links públicos de compartilhamento para arquivos com um único clique.
---

import { Image } from 'astro:assets';
import publicLink from '../../../../assets/screenshots/public-link-copied.png';

## Visão Geral

Gere uma URL pública de compartilhamento para qualquer arquivo diretamente do menu de contexto do arquivo — sem precisar navegar até a página de detalhes do arquivo ou abrir um modal de compartilhamento separado.

<Image src={publicLink} alt="Menu de contexto do arquivo com a opção Public Link e um toast confirmando que a URL foi copiada para a área de transferência" />

## Como Criar um Link Público

1. Clique no menu de contexto do arquivo que deseja compartilhar.
2. Selecione **Public Link**.
3. O Smarter Files cria um registro de **Content Distribution** do Salesforce para o arquivo e **copia automaticamente a URL para a sua área de transferência**.
4. Um toast de sucesso confirma que o link foi criado e copiado.

A URL gerada é um link público padrão do Salesforce — não requer autenticação e pode ser compartilhada com qualquer pessoa (inclusive pessoas fora da sua org Salesforce).

## Requisitos

- **Content Deliveries and Public Links** deve estar habilitado na sua org. Setup → pesquise "Content Deliveries" → habilite. Sem isso, a opção **Public Link** no menu fica desabilitada e um tooltip explica o motivo.
- O usuário que cria o link precisa ter acesso de exclusão no arquivo (regra padrão do Salesforce para criar Content Distributions).

## Gerenciando Links Existentes

Links Públicos criados via Smarter Files aparecem no Salesforce na lista relacionada **Distributions** do arquivo, ao lado de quaisquer links criados através da interface padrão. A partir daí, você pode revogá-los, definir datas de expiração ou exigir uma senha.
