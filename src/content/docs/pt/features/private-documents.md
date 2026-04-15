---
title: Documentos Privados
description: Marque arquivos como privados para restringir o acesso ao proprietário do arquivo.
---

:::note
Esta funcionalidade está disponível apenas na **Edição AppExchange** e requer o modo de armazenamento **Isolated**.
:::

## Visão Geral

Qualquer usuário pode marcar um arquivo como privado, tornando-o visível apenas para si mesmo e para usuários com a permissão **View Private Documents**. Arquivos privados exibem um ícone de cadeado para indicar seu status restrito.

## Marcando um Arquivo como Privado

1. Clique no menu de ações de um arquivo.
2. Selecione **Mark as Private**.
3. Um ícone de cadeado aparece ao lado do nome do arquivo.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

O arquivo agora é visível apenas para:
- O usuário que o marcou como privado (o proprietário)
- Usuários com o permission set **Tucario - View Private Documents**

## Removendo o Status de Privado

O proprietário do arquivo pode remover o sinalizador de privado:

1. Clique no menu de ações do arquivo privado.
2. Selecione **Remove Private**.
3. O arquivo retorna às regras normais de visibilidade.

## Quem Pode Ver Arquivos Privados?

| Usuário | Pode ver o arquivo? |
|---|---|
| Proprietário do arquivo (quem o marcou como privado) | Sim |
| Usuário com permissão **View Private Documents** | Sim |
| Outros usuários | Não |

Se o arquivo também tiver uma categoria atribuída, tanto a verificação de privacidade quanto a verificação de categoria devem passar. Consulte [Controles de Visibilidade](/pt/features/visibility-controls/) para detalhes sobre a filtragem combinada.
