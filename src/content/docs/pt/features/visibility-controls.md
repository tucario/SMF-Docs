---
title: Controles de Visibilidade
description: Categorias de documentos, filtragem baseada em papéis e documentos privados no Smarter Files.
---

import { Image } from 'astro:assets';
import setCategory from '../../../../assets/screenshots/set-category-modal.png';
import wizardDefine from '../../../../assets/screenshots/wizard-define-types.png';
import wizardDefineMultiple from '../../../../assets/screenshots/wizard-define-types-multiple.png';
import wizardRoles from '../../../../assets/screenshots/wizard-assign-roles.png';
import wizardReview from '../../../../assets/screenshots/wizard-review-deploy.png';
import wizardWelcome from '../../../../assets/screenshots/wizard-welcome.png';
import wizardHome from '../../../../assets/screenshots/wizard-home.png';

:::note
Disponível apenas na **Edição AppExchange**. O **Storage Mode** do componente deve estar definido como **Isolated** para que os controles de visibilidade sejam aplicados.
:::

## Visão Geral

Os controles de visibilidade permitem que administradores restrinjam o acesso a arquivos por **categoria de documento** (mapeada para papéis na hierarquia de papéis do Salesforce) e permitem que qualquer usuário marque arquivos individuais como **privados**. Toda a filtragem acontece **no lado do servidor** em `getFilesList()` — arquivos restritos nunca chegam a navegadores não autorizados.

## Requisito de Storage Mode

| | Standard | Isolated |
|---|---|---|
| Arquivos visíveis na lista relacionada padrão de Files | Sim | Não |
| Atribuição de categoria | Não disponível | Disponível |
| Marcar como Privado | Não disponível | Disponível |
| Filtragem de visibilidade baseada em papéis | Não disponível | Disponível |

No modo Standard, nenhum registro de junção é criado, portanto não há onde armazenar a categoria ou o sinalizador de privado. Mude para Isolated em qualquer registro onde a filtragem de visibilidade seja necessária. Consulte [Storage Modes](/features/storage-modes/).

## Categorias de Documentos

Uma categoria é um rótulo atribuído a um arquivo que determina quem pode vê-lo. As categorias vivem em registros de `Tucario_Visibility_Rule__mdt` e são gerenciadas através do Configuration Wizard.

Exemplos comuns: *HR Documents*, *Underwriting Documents*, *Financial Reports*, *Legal Contracts*, *Medical Records*.

### Como Funciona a Filtragem

Cada regra mapeia uma categoria para uma lista de valores de `DeveloperName` de papéis permitidos. Para cada arquivo:

- Arquivo **sem categoria** → visível para todos (padrão aberto).
- Arquivo com categoria, **papel do usuário está na lista de permitidos** → visível.
- Arquivo com categoria, **papel do usuário não está permitido** → oculto.
- Arquivo com categoria, **regra inativa** (`Is_Active = false`) → visível para todos (regras desativadas não filtram).
- Usuário tem a custom permission **Manage Categories** → ignora a filtragem por categoria (sempre vê todos os arquivos).

Múltiplas regras referenciando a mesma categoria se combinam com lógica **OU** — um usuário passa se o seu papel estiver em *qualquer* lista de permitidos para a categoria.

### Atribuindo uma Categoria a um Arquivo

Usuários com **Manage Categories** podem atribuir uma categoria pelo menu de contexto do arquivo:

1. Abra o menu de contexto do arquivo e selecione **Set Category**.
2. Escolha uma categoria no seletor, ou selecione **No Category** para limpar.
3. A visibilidade do arquivo é atualizada imediatamente.

<Image src={setCategory} alt="Modal Set Category com o seletor de categoria aberto" />

:::caution
Usuários *sem* a permissão Manage Categories ainda veem a opção **Set Category**, mas recebem um aviso de confirmação informando que o arquivo pode desaparecer da própria visualização deles assim que uma categoria restrita for aplicada (pois eles não ignoram a filtragem).
:::

## Configurando Regras de Visibilidade

Abra o aplicativo **Smarter Files by Tucario** a partir do App Launcher. O Configuration Wizard abre na tela inicial com dois cartões: *Manage Document Categories* e *Private Documents*.

<Image src={wizardWelcome} alt="Tela de boas-vindas do Configuration Wizard" />

<Image src={wizardHome} alt="Tela inicial do Configuration Wizard com os cartões Manage Categories e Private Documents" />

Clique em **Manage Document Categories** para entrar no wizard de regras em 3 etapas.

### Etapa 1 — Definir Tipos de Documento

Adicione os tipos de documento que deseja controlar. Cada um tem um nome e uma descrição opcional.

<Image src={wizardDefine} alt="Etapa 1 do wizard: definindo um tipo de documento chamado Underwriting Documents" />

<Image src={wizardDefineMultiple} alt="Etapa 1 do wizard com múltiplos tipos de documento adicionados" />

### Etapa 2 — Atribuir Papéis

Para cada tipo de documento, escolha os papéis autorizados a ver os arquivos dessa categoria. A caixa de listagem dupla é preenchida a partir da hierarquia de papéis da sua org (limitado a 1000 papéis).

<Image src={wizardRoles} alt="Etapa 2 do wizard: caixa de listagem dupla com papéis disponíveis à esquerda e papéis permitidos à direita" />

### Etapa 3 — Revisar e Implantar

Revise as categorias ativas e desativadas, depois clique em **Deploy Configuration**. O wizard chama `Metadata.Operations.enqueueDeployment()` para gravar as regras como registros de `Tucario_Visibility_Rule__mdt` de forma assíncrona, monitorando a conclusão. Um indicador de carregamento mostra o progresso.

<Image src={wizardReview} alt="Etapa 3 do wizard: revisão de todas as categorias com o botão Deploy" />

:::note
**Removendo uma categoria:** remover um tipo de documento do wizard e implantar **não** exclui o registro de CMT — define `Is_Active = false`. A Salesforce Metadata API não suporta a exclusão de registros de CMT a partir do Apex, portanto a desativação é o equivalente mais próximo. Categorias desativadas não aparecem mais no seletor nem filtram arquivos, e podem ser reativadas posteriormente adicionando novamente uma categoria com o mesmo nome.
:::

## Documentos Privados

Além da filtragem baseada em categoria, qualquer usuário pode marcar arquivos individuais como privados — visíveis apenas para si mesmo e para usuários com a permissão **View Private Documents**. Consulte [Documentos Privados](/features/private-documents/) para o fluxo completo.

## Lógica de Filtragem Combinada

Quando um arquivo possui tanto uma categoria quanto um sinalizador de privado, **ambas as verificações devem passar** para que ele seja visível. Pseudocódigo de `getFilesList()`:

```
For each file on the record:
  1. Private check:
     If Is_Private AND user is not Owner_Id
     AND user lacks "View Private Documents" → HIDE

  2. Category check:
     If Visibility_Category is set
     AND a matching active rule exists
     AND user's role is not in Permitted_Roles
     AND user lacks "Manage Categories" → HIDE

  3. Otherwise → SHOW
```

A verificação mais restritiva das duas prevalece.

## Permission Sets

| Permission Set | Finalidade |
|---|---|
| **Tucario Files** | Acesso base. Obrigatório para todos os usuários. Concede o aplicativo, os controladores e o objeto de junção. |
| **Tucario - Manage File Categories** | Acesso ao menu Set Category + ignora a filtragem por categoria (sempre vê todos os arquivos). |
| **Tucario - View Private Documents** | Ver arquivos marcados como privados por outros usuários. |

## Casos de Uso

- **Documentos de RH** visíveis apenas para papéis de RH, com marcação de privado para registros individuais de funcionários.
- **Relatórios financeiros** restritos a papéis do departamento financeiro, independentemente de quem os enviou.
- **Contratos jurídicos** bloqueados para papéis do departamento jurídico, com marcação de privado em contratos em rascunho.
- **Documentos de subscrição** contendo dados pessoais sensíveis, restritos a papéis de subscritores.
- **Anexos confidenciais em um registro compartilhado** — segunda instância do componente em modo Isolated com categorias aplicadas, oculta completamente da lista relacionada padrão de Files.
