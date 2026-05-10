---
title: Configuração do Componente
description: Como adicionar e configurar o Smarter Files em uma página de registro.
---

import { Image } from 'astro:assets';
import appBuilder from '../../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../../assets/screenshots/app-builder-card-title.png';

## Adicionando a uma Página de Registro

1. Abra qualquer página de registro no **Lightning App Builder**.
2. Encontre o **Smarter Files** na paleta de componentes em *Custom — Managed*.
3. Arraste-o para a região desejada do layout da página.
4. Configure as propriedades de design no painel à direita.
5. Salve e ative a página.

<Image src={appBuilder} alt="Lightning App Builder com o componente Smarter Files selecionado e o painel de propriedades aberto" />

## Propriedades do Componente

O componente expõe oito propriedades de design na barra lateral do App Builder:

| Propriedade | Descrição | Padrão |
|---|---|---|
| **Card Title** | Texto do cabeçalho do componente. Substitui o custom label `Tucario_Files_Card_Title` para esta instância. | `Files` |
| **Storage Mode** | `Standard` — arquivos vinculados via `ContentDocumentLink` (visíveis na lista relacionada padrão de Files). `Isolated` — arquivos vinculados apenas via junção `Tucario_File_Visibility__c` (ocultos da lista relacionada padrão de Files, habilita controles de visibilidade). Consulte [Storage Modes](/features/storage-modes/). | `Standard` |
| **Display Mode** | Como os arquivos são exibidos: `List` (linhas verticais com metadados) ou `Tiles` (grade de cartões com ícones por tipo de arquivo). | `List` |
| **Default Sort Order** | Ordem de classificação inicial. Os usuários podem alterá-la em tempo de execução. Opções: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za`. | `date-newest` |
| **Initial Files Displayed** | Número máximo de arquivos exibidos inicialmente. Um link "Show All" aparece quando há mais arquivos. Defina como `0` para mostrar todos. | `5` |
| **Allowed File Extensions** | Lista de extensões permitidas separadas por vírgula (ex.: `pdf,docx,png`). Apenas estes tipos podem ser enviados. Deixe vazio para permitir todos. | *(vazio — todos permitidos)* |
| **Excluded File Extensions** | Lista de extensões bloqueadas separadas por vírgula (ex.: `exe,bat,sh`). Estes tipos são bloqueados no upload. | *(vazio — nenhum bloqueado)* |
| **Max File Size (MB)** | Limite de tamanho de upload em megabytes. Defina como `0` para sem limite. | `0` |

<Image src={cardTitle} alt="Editando a propriedade Card Title no App Builder para substituir o cabeçalho do componente" />

### Lógica de Restrição de Upload

Quando ambas as listas **Allowed** e **Excluded** estão configuradas, elas se acumulam:

1. **A lista de permitidos é verificada primeiro** — se a extensão do arquivo não está na lista de permitidos, ele é bloqueado.
2. **A lista de excluídos é verificada em seguida** — se o arquivo passou na verificação de permitidos, mas sua extensão está na lista de excluídos, ele ainda é bloqueado.

O arquivo deve estar na lista de permitidos **e** não estar na lista de excluídos para ser aceito.

:::tip
Na maioria dos casos, você só precisa de uma das duas configurações. Use **Allowed** quando quiser restringir uploads a um pequeno conjunto de tipos conhecidos (ex.: `pdf,docx,xlsx`). Use **Excluded** quando quiser bloquear tipos específicos, mas permitir todo o resto (ex.: `exe,bat`).
:::

## Dicas de Posicionamento

- Funciona na área de conteúdo principal, barra lateral ou regiões de largura total da página de registro.
- Pode ser colocado em qualquer página de registro de objeto padrão ou customizado.
- Múltiplas instâncias na mesma página são suportadas — útil para dividir um registro em diferentes espaços de arquivo (ex.: uma instância em modo Standard para arquivos gerais e uma em modo Isolated para documentos confidenciais). Defina **Card Titles** distintos para diferenciá-las.
- O componente é **exclusivo para páginas de registro**. O Configuration Wizard é fornecido como uma página de aplicativo separada, acessível a partir da entrada **Smarter Files by Tucario** no App Launcher.
