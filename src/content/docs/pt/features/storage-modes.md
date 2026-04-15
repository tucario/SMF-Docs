---
title: Modos de Armazenamento
description: Modo de armazenamento Standard vs Isolated e migração de arquivos.
---

## Visão Geral

O Smarter Files suporta dois modos de armazenamento que controlam como os arquivos são vinculados aos registros. O modo é definido por instância do componente no Lightning App Builder.

![Configuração do Storage Mode no App Builder](/docs/storagemode-isolated.png)

## Modo Standard (Padrão)

- Arquivos são vinculados via `ContentDocumentLink` nativo do Salesforce.
- Arquivos aparecem tanto no componente Smarter Files **quanto** na lista relacionada padrão de Files.
- Controles de visibilidade (categorias, documentos privados) **não estão disponíveis**.
- Ideal para: gestão simples de arquivos onde você deseja manter compatibilidade com a lista relacionada padrão de Files.

## Modo Isolated

- Arquivos são vinculados apenas via registro de junção (`Tucario_File_Visibility__c`).
- Arquivos aparecem **apenas** no componente Smarter Files — ficam ocultos da lista relacionada padrão de Files.
- Controles de visibilidade estão **totalmente disponíveis**: categorias, documentos privados, filtragem baseada em papéis.
- Ideal para: cenários onde você precisa controlar quem pode ver quais arquivos.

## Comparação

| | Standard | Isolated |
|---|---|---|
| Arquivos visíveis na lista relacionada padrão de Files | Sim | Não |
| Atribuição de categoria | Não disponível | Disponível |
| Marcar como Privado | Não disponível | Disponível |
| Filtragem de visibilidade baseada em papéis | Não disponível | Disponível |
| Migração necessária ao alternar | — | Sim |

## Migrando para o Modo Isolated

Ao alternar um componente do modo Standard para o modo Isolated em um registro que já possui arquivos, os arquivos existentes não serão visíveis até que sejam migrados.

O componente exibe um banner de aviso com um botão **Migrate Existing Files**. Ao clicar:

1. Inicia um job em lote que cria registros de junção para todos os registros `ContentDocumentLink` existentes naquele registro.
2. Exibe uma barra de progresso durante a migração.
3. Mostra uma mensagem de sucesso ao concluir.

A migração é segura para ser executada novamente — utiliza upsert no campo de ID externo `Content_Document_Id__c`.
