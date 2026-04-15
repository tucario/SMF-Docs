---
title: Ações de Arquivo
description: Ações disponíveis para arquivos individuais no Smarter Files.
---

## Ações do Menu de Contexto

Cada arquivo no componente possui um menu de ações com as seguintes opções:

![Menu de contexto de ações de arquivo](/docs/file-actions.png)

| Ação | Descrição | Disponibilidade |
|---|---|---|
| **View Details** | Abre a página padrão de detalhes do arquivo no Salesforce | Todos os usuários |
| **Edit Details** | Editar nome e descrição do arquivo inline | Usuários com acesso de edição |
| **Download** | Baixar o arquivo individual | Todos os usuários |
| **Public Link** | Gerar uma URL pública de compartilhamento para o arquivo | Configurável via propriedade do componente |
| **Delete** | Excluir o arquivo permanentemente (com confirmação) | Usuários com acesso de exclusão |
| **Remove** | Remover o arquivo deste registro sem excluí-lo | Apenas modo Isolated |
| **Set Category** | Atribuir uma categoria de visibilidade ao arquivo | Modo Isolated + permissão Manage Categories |
| **Mark as Private** | Tornar o arquivo visível apenas para você | Apenas modo Isolated |
| **Remove Private** | Remover o sinalizador de privado do arquivo | Modo Isolated, apenas proprietário do arquivo |

## Pré-visualização Nativa de Arquivos

Ao clicar no nome de um arquivo, o modal padrão de pré-visualização do Salesforce é aberto — sem necessidade de visualizadores externos ou plugins. A pré-visualização suporta todos os tipos de arquivo que o Salesforce suporta nativamente (PDFs, imagens, documentos Office, etc.).
