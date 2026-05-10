---
title: Custom Labels
description: Como personalizar rótulos e textos no Smarter Files.
---

## Visão Geral

Todo texto voltado para o usuário no componente Smarter Files é armazenado como um Salesforce Custom Label — cerca de **98 labels** no total, abrangendo botões, cabeçalhos, modais, toasts, mensagens de validação e o Configuration Wizard. Isso permite que você:

- Traduza o componente para qualquer idioma suportado pelo Salesforce.
- Ajuste a terminologia para corresponder à da sua organização (ex.: "Documents" em vez de "Files").
- Personalize mensagens de erro e toasts sem alterar o código.

## Personalizando Labels

1. Acesse **Setup → Custom Labels** no Salesforce.
2. Filtre pelo prefixo de namespace `smarterfiles` (ou pesquise por `Tucario_`).
3. Clique em um label para editar seu valor, ou adicione traduções em **Local Translations / Overrides** para idiomas adicionais.

:::note
Os labels são organizados sob o namespace do pacote `smarterfiles`. Os *nomes* dos labels começam com `Tucario_` (o prefixo histórico preservado entre as versões).
:::

## Categorias de Labels

| Prefixo | Finalidade | Exemplos |
|---|---|---|
| `Tucario_Common_*` | Textos de UI compartilhados e mensagens de validação usados em vários lugares | `Tucario_Common_Cancel`, `Tucario_Common_Save`, `Tucario_Common_Upload_Blocked`, `Tucario_Common_Upload_Size_Blocked` |
| `Tucario_Files_*` | O componente principal de lista de arquivos — ações, erros, estados vazios, opções de ordenação | `Tucario_Files_Action_Delete`, `Tucario_Files_Delete_Error` |
| `Tucario_Wizard_*` | Rótulos de etapas, prompts e confirmações do Configuration Wizard | títulos de etapas, rótulos de botões, mensagens de status de implantação |
| `Tucario_Visibility_*` | Controles de visibilidade — categorias, documentos privados, atribuição de papéis | seletor de categoria, "Mark as Private" / "Remove Private", rótulos da hierarquia de papéis |

## Exemplo: Renomear "Files" para "Documents"

1. Setup → Custom Labels → pesquise por `Tucario_Files_Card_Title` (ou o label que define o cabeçalho que você deseja alterar).
2. Clique em **Edit** → altere o valor para `Documents`.
3. Salve. O componente usa o novo valor no próximo carregamento de página — sem necessidade de reimplantação.

Se quiser texto diferente por posição na página de registro, use a propriedade de design **Card Title** no componente — ela substitui o label apenas para aquela instância específica.
