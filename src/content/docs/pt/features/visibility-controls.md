---
title: Controles de Visibilidade
description: Controles de visibilidade de documentos disponíveis na Edição AppExchange.
---

:::note
Esta funcionalidade está disponível apenas na **Edição AppExchange** e requer que o **Storage Mode** do componente esteja definido como **Isolated**.
:::

## Visão Geral

Os controles de visibilidade permitem que administradores restrinjam o acesso a arquivos com base em categorias de documentos e papéis de usuários. Arquivos podem ser atribuídos a categorias, e cada categoria pode ser restrita a papéis específicos — usuários fora desses papéis não verão os arquivos. Além disso, qualquer usuário pode marcar um arquivo como privado, tornando-o visível apenas para si mesmo e para visualizadores autorizados.

Toda a filtragem é realizada **no lado do servidor** — arquivos que um usuário não pode acessar nunca são enviados ao navegador.

## Requisito de Storage Mode

Os controles de visibilidade estão disponíveis apenas quando o **Storage Mode** do componente está definido como **Isolated**:

| | Standard | Isolated |
|---|---|---|
| Arquivos visíveis na lista relacionada padrão de Files | Sim | Não |
| Atribuição de categoria | Não disponível | Disponível |
| Marcar como Privado | Não disponível | Disponível |
| Filtragem de visibilidade baseada em papéis | Não disponível | Disponível |

No modo Isolated, os arquivos são vinculados ao registro exclusivamente através de um registro de junção — eles não aparecem na lista relacionada padrão de Files do Salesforce.

## Categorias de Documentos

### O Que São Categorias?

Uma categoria é um rótulo atribuído a um arquivo que determina quem pode vê-lo. As categorias são definidas por um administrador através do **Configuration Wizard** e armazenadas como registros de Custom Metadata Type.

Exemplos:
- Registros de Saúde
- Relatórios Financeiros
- Contratos Jurídicos
- Memorandos Internos

### Como Funciona a Filtragem por Categoria

Cada categoria possui uma lista de **papéis permitidos**. Quando um arquivo tem uma categoria atribuída:

- Se o papel do usuário está na lista de permitidos → o arquivo é **visível**
- Se o papel do usuário NÃO está na lista de permitidos → o arquivo é **oculto**
- Se nenhum papel está atribuído a uma categoria → o arquivo é visível para **todos**
- Se um arquivo não tem categoria → o arquivo é visível para **todos**

### Atribuindo Categorias a Arquivos

Usuários com o permission set **Tucario - Manage File Categories** podem atribuir categorias:

1. Clique no menu de ações de um arquivo.
2. Selecione **Set Category**.
3. Escolha uma categoria no seletor, ou selecione **No Category** para remover a atribuição atual.

A visibilidade do arquivo é atualizada imediatamente.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/assigning-categories-to-files.mp4" type="video/mp4" />
</video>

### Gerenciando Categorias

As categorias são gerenciadas através do **Configuration Wizard** no aplicativo Smarter Files:

1. Abra o aplicativo **Smarter Files by Tucario** a partir do App Launcher.
2. Clique em **Manage Document Categories**.
3. **Etapa 1 — Tipos de Documento**: Adicione categorias com nomes e descrições opcionais.
4. **Etapa 2 — Atribuir Papéis**: Para cada categoria, selecione quais papéis podem ver os arquivos dessa categoria.
5. **Etapa 3 — Revisar e Implantar**: Revise a configuração e clique em Deploy.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/add-category.mp4" type="video/mp4" />
</video>

:::note
**Removendo uma categoria:** Quando você remove um tipo de documento do wizard e implanta, o registro subjacente de Custom Metadata Type não é excluído — ele é **desativado** (`Is_Active = false`). Categorias desativadas não aparecem mais no seletor de categorias e não filtram arquivos. Isso ocorre porque a Salesforce Metadata API não suporta a exclusão de registros de Custom Metadata Type a partir do Apex.
:::

## Documentos Privados

### Marcando Arquivos como Privados

Qualquer usuário pode marcar um arquivo como privado no modo Isolated:

1. Clique no menu de ações de um arquivo.
2. Selecione **Mark as Private**.
3. Um ícone de cadeado aparece ao lado do nome do arquivo.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

O arquivo agora é visível apenas para:
- O usuário que o marcou como privado (o proprietário)
- Usuários com o permission set **Tucario - View Private Documents**

### Removendo o Status de Privado

O proprietário do arquivo pode remover o sinalizador de privado:

1. Clique no menu de ações do arquivo privado.
2. Selecione **Remove Private**.
3. O arquivo retorna às regras normais de visibilidade.

## Lógica de Filtragem Combinada

Quando um arquivo possui tanto uma categoria quanto um sinalizador de privado, **ambas as verificações devem passar** para que o arquivo seja visível:

```
For each file:
  1. Private check:
     If file is private AND user is not the owner
     AND user lacks "View Private Documents" permission → HIDE

  2. Category check:
     If file has a category with permitted roles
     AND user's role is not in the list
     AND user lacks "Manage Categories" permission → HIDE

  3. Otherwise → SHOW
```

## Permission Sets

| Permission Set | Finalidade |
|---|---|
| **Tucario Files** | Acesso base. Concede acesso ao aplicativo, controladores e objeto de junção. Atribua a todos os usuários. |
| **Tucario - Manage File Categories** | Permite atribuir categorias a arquivos. **Ignora a filtragem por categoria** — usuários com esta permissão veem todos os arquivos independentemente da categoria. |
| **Tucario - View Private Documents** | Permite visualizar arquivos marcados como privados por outros usuários. |

## Casos de Uso

- **Registros de saúde** visíveis apenas para gerentes de RH e equipe médica.
- **Relatórios financeiros** restritos à equipe financeira.
- **Contratos jurídicos** acessíveis apenas a papéis do departamento jurídico.
- **Anexos sensíveis** marcados como privados por usuários individuais para uso pessoal.
- **Documentos em rascunho** ocultos de papéis voltados para o externo até estarem prontos.
