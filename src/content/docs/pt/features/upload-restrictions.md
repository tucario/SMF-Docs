---
title: Restrições de Upload
description: Controle quais tipos e tamanhos de arquivo os usuários podem enviar.
---

## Visão Geral

Administradores podem restringir uploads por tipo e tamanho de arquivo diretamente nas propriedades do componente — sem necessidade de código.

## Restrições de Tipo de Arquivo

Duas propriedades controlam quais tipos de arquivo são aceitos:

### Allowed File Extensions

Uma lista de extensões permitidas (ex.: `pdf,docx,xlsx`). Quando configurada, **apenas** estes tipos podem ser enviados. Deixe vazio para permitir todos os tipos.

### Excluded File Extensions

Uma lista de extensões bloqueadas (ex.: `exe,bat,sh`). Estes tipos são rejeitados no upload. Deixe vazio para não excluir nada.

### Usando Ambas Juntas

Quando ambas estão configuradas, funcionam como um filtro combinado:

1. **A lista de permitidos é verificada primeiro** — se a extensão do arquivo não está na lista de permitidos, ele é bloqueado.
2. **A lista de excluídos é verificada em seguida** — se o arquivo passou na verificação de permitidos, mas está na lista de excluídos, ele ainda é bloqueado.

Um arquivo deve estar na lista de permitidos **e** não estar na lista de excluídos para ser aceito.

:::tip
Na maioria dos casos, você só precisa de uma das duas. Use **Allowed** para restringir a um pequeno conjunto de tipos conhecidos. Use **Excluded** para bloquear tipos específicos, mas permitir todo o resto.
:::

## Limite de Tamanho de Arquivo

Defina a propriedade **Max File Size (MB)** para limitar o tamanho máximo de upload. Defina como `0` para sem limite.

Quando um usuário tenta enviar um arquivo que excede o limite, o upload é bloqueado e um toast de erro é exibido com o nome do arquivo e o limite configurado.

## Feedback ao Usuário

Quando uploads são bloqueados, o componente fornece feedback claro:

![Mensagem toast de upload bloqueado](/docs/upload-blocked.png)

- **Arquivo único bloqueado** — mensagem toast nomeia o arquivo e explica por que foi bloqueado (tipo incorreto ou muito grande).
- **Múltiplos arquivos bloqueados** — toast lista todos os arquivos bloqueados com o motivo.
- **Upload misto** — se alguns arquivos são enviados com sucesso e outros são bloqueados, tanto um toast de sucesso quanto um de aviso são exibidos.
