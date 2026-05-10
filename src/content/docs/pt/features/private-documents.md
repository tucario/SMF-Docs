---
title: Documentos Privados
description: Marque arquivos como privados para restringir o acesso ao proprietário do arquivo e a visualizadores autorizados.
---

import { Image } from 'astro:assets';
import markPrivate from '../../../../assets/screenshots/mark-as-private.png';

:::note
Disponível apenas na **Edição AppExchange**. Requer o modo de armazenamento **Isolated** na instância do componente.
:::

## Visão Geral

Qualquer usuário pode marcar um arquivo como privado. Um arquivo privado é visível apenas para:

1. **O usuário que o marcou como privado** (registrado em `Owner_Id__c` na junção de visibilidade).
2. **Usuários com a custom permission `Tucario_View_Private_Documents`** — normalmente atribuída a administradores, RH ou conformidade via o permission set **Tucario - View Private Documents**.

Arquivos privados exibem um ícone de cadeado ao lado do nome do arquivo nas visualizações em Lista e em Tiles.

## Marcando um Arquivo como Privado

1. Abra o menu de contexto do arquivo.
2. Selecione **Mark as Private**.
3. Um ícone de cadeado aparece ao lado do nome do arquivo; o arquivo agora está oculto para todos, exceto para o proprietário e para os usuários com permissão View Private.

<Image src={markPrivate} alt="Arquivo marcado como privado com ícone de cadeado visível na lista de arquivos" />

## Removendo o Sinalizador de Privado

O proprietário (e qualquer usuário com `View Private Documents`) pode remover o sinalizador:

1. Abra o menu de contexto do arquivo privado.
2. Selecione **Remove Private**.
3. O ícone de cadeado desaparece e o arquivo volta às regras normais de visibilidade (incluindo quaisquer restrições de categoria).

## Quem Pode Ver um Arquivo Privado

| Usuário | Pode ver o arquivo? |
|---|---|
| O proprietário (quem o marcou como privado) | Sim |
| Usuário com permissão **View Private Documents** | Sim |
| Todos os demais | Não — o arquivo é filtrado no lado do servidor e nunca aparece na lista, mesmo que o usuário já soubesse que ele existia |

## Combinação com Categorias

Privado e visibilidade baseada em categoria se acumulam — ambas as verificações devem passar para que um arquivo seja visível. Se um arquivo é privado **e** está atribuído a uma categoria exclusiva de RH, somente usuários que passarem *por ambos* os filtros (o proprietário com papel de RH, ou um usuário com View Private e papel de RH) poderão vê-lo. Consulte [Controles de Visibilidade](/features/visibility-controls/) para a lógica completa de filtragem.

## Por Dentro do Funcionamento

Ao marcar um arquivo como privado, o Smarter Files grava na junção `Tucario_File_Visibility__c`:

- Define `Is_Private__c = true`.
- Define `Owner_Id__c` como o usuário atual (aplicado pela validation rule `Owner_Required_When_Private` — `Owner_Id__c` não pode ser nulo quando `Is_Private__c` é verdadeiro).

Toda a filtragem acontece no lado do servidor em `getFilesList()` antes de a resposta sair do servidor Salesforce, portanto arquivos privados nunca são enviados a navegadores não autorizados.
