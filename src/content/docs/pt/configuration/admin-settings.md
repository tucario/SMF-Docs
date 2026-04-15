---
title: Configurações de Administrador
description: Configurações globais de administrador para o Smarter Files.
---

## Custom Metadata

O Smarter Files utiliza Custom Metadata Types para configuração global. Isso permite que as configurações sejam implantadas em diferentes orgs via change sets ou metadata API.

## Configurações Principais

### Restrições de Upload

Defina regras de upload por objeto:

- **Object API Name** — o objeto ao qual a regra se aplica.
- **Allowed Extensions** — tipos de arquivo separados por vírgula (ex.: `pdf,docx`).
- **Max File Size (MB)** — tamanho máximo de upload.

### Gestão de Categorias (Edição AppExchange)

As categorias controlam quais papéis podem ver arquivos específicos. Elas são gerenciadas através do **Configuration Wizard** no aplicativo Smarter Files:

1. Abra o aplicativo **Smarter Files by Tucario** a partir do App Launcher.
2. Clique em **Manage Document Categories**.
3. Defina os tipos de documento, atribua os papéis permitidos e implante.

As categorias são armazenadas como registros de Custom Metadata Type (`Tucario_Visibility_Rule__mdt`). Cada registro contém:

| Campo | Descrição |
|---|---|
| **Category** | O identificador da categoria |
| **Permitted Roles** | DeveloperNames dos papéis separados por ponto e vírgula |
| **Is Active** | Se a regra está ativa |
| **Description** | Descrição voltada para o administrador |

:::note
Quando uma categoria é removida através do wizard, ela é **desativada** em vez de excluída. A Salesforce Metadata API não suporta a exclusão de registros de Custom Metadata Type a partir do Apex, então o campo `Is_Active` do registro é definido como `false`. Categorias desativadas são excluídas de todas as consultas e não aparecem no seletor de categorias.
:::

## Permissões

O Smarter Files respeita o compartilhamento padrão do Salesforce e as permissões CRUD. Nenhum permission set adicional é necessário para a funcionalidade básica.

Para a Edição AppExchange, três permission sets estão incluídos:

| Permission Set | Finalidade |
|---|---|
| **Tucario Files** | Acesso base ao aplicativo, controladores Apex e ao objeto de junção. Obrigatório para todos os usuários. |
| **Tucario - Manage File Categories** | Concede a capacidade de atribuir categorias a arquivos. Usuários com esta permissão ignoram a filtragem por categorias e podem ver todos os arquivos. |
| **Tucario - View Private Documents** | Concede a capacidade de visualizar arquivos marcados como privados por outros usuários. |
