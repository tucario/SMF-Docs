---
title: Configurações de Administrador
description: Permission sets, objetos customizados e configuração baseada em metadados no Smarter Files.
---

## Permission Sets

Três permission sets são fornecidos com o pacote. Todo usuário do componente precisa, no mínimo, do conjunto base.

| Permission Set | Necessário para | Concede |
|---|---|---|
| **Tucario Files** *(base)* | Todos os usuários do componente | Acesso ao aplicativo ("Smarter Files by Tucario"), CRUD no objeto de junção `Tucario_File_Visibility__c`, acesso a `TucarioFileDownloadController` e `TucarioVisibilityController` |
| **Tucario - Manage File Categories** | Administradores e responsáveis por categorias | Permissão customizada `Tucario_Manage_Categories` — atribuir categorias a arquivos via "Set Category" e ignorar a filtragem por categoria (esses usuários sempre veem todos os arquivos) |
| **Tucario - View Private Documents** | Administradores, RH, responsáveis por conformidade | Permissão customizada `Tucario_View_Private_Documents` — visualizar arquivos marcados como privados por outros usuários |

:::caution
**Tucario Files** é obrigatório até para usuários somente de leitura. Sem ele, o componente exibe um estado de acesso negado porque o usuário não consegue ler o objeto de junção que controla a visibilidade.
:::

## Restrições de Upload

As regras de upload — extensões permitidas, extensões excluídas e tamanho máximo — são configuradas **por instância do componente** através das propriedades de design no App Builder, e não globalmente. Consulte [Configuração do Componente](/configuration/component-setup/) para a lista completa de propriedades.

Isso significa que você pode ter regras de upload diferentes em páginas de registro distintas, ou até múltiplas instâncias na mesma página de registro com regras diferentes.

## Regras de Visibilidade — `Tucario_Visibility_Rule__mdt`

As regras de visibilidade são armazenadas como registros de Custom Metadata Type e gerenciadas através do [Configuration Wizard](/features/visibility-controls/#configuring-visibility-rules) — não são editadas diretamente no Setup.

| Campo | Tipo | Finalidade |
|---|---|---|
| **Category** | Texto | O nome do tipo de documento (ex.: `HR Documents`, `Contracts`). Os arquivos referenciam essa string no campo `Visibility_Category__c`. |
| **Permitted Roles** | Área de Texto Longo | Lista de valores de `DeveloperName` de papéis separados por ponto e vírgula (ex.: `CEO;HR_Manager;HR_Specialist`). Usuários cujo papel corresponde a um desses podem ver os arquivos nesta categoria. |
| **Is Active** | Caixa de Seleção | Se a regra está sendo aplicada. Regras inativas se comportam como se não existissem (a categoria volta ao comportamento padrão aberto). |
| **Description** | Texto | Descrição voltada para o administrador sobre o que a categoria contém. |

:::note
Quando uma categoria é "removida" através do wizard, ela é **desativada** (`Is_Active = false`), não excluída. A Salesforce Metadata API não suporta a exclusão de registros de CMT a partir do Apex, portanto a desativação é o equivalente mais próximo. Categorias desativadas são excluídas de todas as consultas e não aparecem no seletor de categorias.
:::

## Junção de Visibilidade de Arquivo — `Tucario_File_Visibility__c`

O Smarter Files cria um registro de objeto de junção customizado para cada arquivo gerenciado no modo de armazenamento **Isolated** (e para qualquer arquivo com uma categoria ou sinalizador de privado, independentemente do modo).

| Campo | Tipo | Finalidade |
|---|---|---|
| **Content Document Id** | Texto (ID Externo, Único) | Referência ao `ContentDocument` do Salesforce. Um registro de junção por arquivo por registro pai. |
| **Parent Record Id** | Texto (18) | O ID de 18 caracteres do registro ao qual o arquivo está anexado. |
| **Visibility Category** | Texto (80) | O nome da categoria de `Tucario_Visibility_Rule__mdt`. Vazio significa sem restrição de categoria. |
| **Is Private** | Caixa de Seleção | Verdadeiro se o arquivo foi marcado como privado. |
| **Owner Id** | Lookup (Usuário) | O usuário que marcou o arquivo como privado. Obrigatório quando **Is Private** é verdadeiro (aplicado pela validation rule `Owner_Required_When_Private`). |

**Nomenclatura automática:** os registros usam o formato `FV-{0000}`.

**Modelo de compartilhamento:** ReadWrite. SOQL/DML neste objeto é executado em `USER_MODE`, portanto os usuários só veem e modificam os registros de junção aos quais têm acesso.

## Custom Permissions

| Nome da API | Usado por |
|---|---|
| `Tucario_Manage_Categories` | Concedido via o permission set *Tucario - Manage File Categories*. Controla a visibilidade do item de menu **Set Category** e ignora a filtragem baseada em categoria. |
| `Tucario_View_Private_Documents` | Concedido via o permission set *Tucario - View Private Documents*. Permite ver arquivos privados pertencentes a outros usuários. |

Você pode atribuir essas custom permissions através dos seus próprios permission sets, caso queira agrupá-las com papéis específicos da organização em vez de usar os permission sets fornecidos.

## Classes Apex Expostas

Dois controladores são acessíveis a partir de componentes Lightning — ambos executam `with sharing` e usam SOQL/DML em `USER_MODE`:

- **`TucarioFileDownloadController`** — CRUD de arquivos, upload/download, criação de link público, atribuição de categoria, alternância do sinalizador de privado.
- **`TucarioVisibilityController`** — backend do wizard (lista de papéis, implantação de regras, monitoramento de status de implantação), controles de migração em lote, verificações de permissão.

Conceda acesso via o permission set **Tucario Files** (já habilitado ali) — normalmente não há motivo para habilitar essas classes através de outros permission sets.
