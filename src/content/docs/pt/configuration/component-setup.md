---
title: Configuração do Componente
description: Como adicionar e configurar o Smarter Files em uma página de registro.
---

## Adicionando a uma Página de Registro

1. Abra qualquer página de registro no **Lightning App Builder**.
2. Encontre o **Smarter Files** na paleta de componentes.
3. Arraste-o para a região desejada do layout da página.
4. Salve e ative a página.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/put-on-flexipage.mp4" type="video/mp4" />
</video>

## Propriedades do Componente

![Painel de configuração do App Builder](/docs/storagemode-isolated.png)

As seguintes propriedades estão disponíveis na barra lateral do Lightning App Builder:

| Propriedade | Descrição | Padrão |
|---|---|---|
| **Card Title** | Texto do cabeçalho do componente | `Files` |
| **Storage Mode** | `Standard` — arquivos vinculados via ContentDocumentLink (visíveis na lista relacionada Files). `Isolated` — arquivos vinculados apenas via registro de junção (ocultos da lista relacionada Files, habilita controles de visibilidade). | `Standard` |
| **Display Mode** | Como os arquivos são exibidos: `List` (linhas verticais) ou `Tiles` (grade de cartões) | `List` |
| **Default Sort Order** | Ordem de classificação inicial para a lista de arquivos. Os usuários podem alterar em tempo de execução. Opções: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za` | `date-newest` |
| **Initial Files Displayed** | Número máximo de arquivos exibidos inicialmente. Defina como `0` para mostrar todos os arquivos. Um link "Show All" aparece quando há mais arquivos. | `5` |
| **Allowed File Extensions** | Lista de extensões permitidas separadas por vírgula (ex.: `pdf,docx,png`). Apenas estes tipos podem ser enviados. Deixe vazio para permitir todos os tipos. | Todos os tipos |
| **Excluded File Extensions** | Lista de extensões bloqueadas separadas por vírgula (ex.: `exe,bat,sh`). Estes tipos são bloqueados no upload. | Nenhum |
| **Max File Size (MB)** | Tamanho máximo de arquivo para uploads em megabytes. Defina como `0` para sem limite. | `0` (sem limite) |

### Lógica de Restrição de Upload

Quando ambas as extensões **Allowed** e **Excluded** estão configuradas, elas funcionam juntas:

1. **A lista de permitidos é verificada primeiro** — se a extensão do arquivo não está na lista de permitidos, ele é bloqueado.
2. **A lista de excluídos é verificada em seguida** — se o arquivo passou na verificação de permitidos, mas sua extensão está na lista de excluídos, ele ainda é bloqueado.

Em outras palavras, um arquivo deve estar na lista de permitidos **e** não estar na lista de excluídos para ser aceito.

:::tip
Na maioria dos casos, você só precisa de uma das duas configurações. Use **Allowed** quando quiser restringir uploads a um pequeno conjunto de tipos conhecidos (ex.: `pdf,docx,xlsx`). Use **Excluded** quando quiser bloquear tipos específicos, mas permitir todo o resto (ex.: `exe,bat`).
:::

## Dicas de Posicionamento

- Funciona na área de conteúdo principal, barra lateral ou regiões de largura total.
- Pode ser colocado em qualquer página de registro de objeto padrão ou personalizado.
- Múltiplas instâncias na mesma página são suportadas (ex.: configurações diferentes por aba).
