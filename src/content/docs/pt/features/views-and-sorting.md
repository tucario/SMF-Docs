---
title: Visualizações e Ordenação
description: Visualização em lista, visualização em tiles e opções de ordenação no Smarter Files.
---

import { Image } from 'astro:assets';
import listView from '../../../../assets/screenshots/list-view.png';
import tileView from '../../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../../assets/screenshots/empty-state.png';

## Visualização em Lista

O layout padrão — linhas verticais exibindo nome do arquivo, ícone de tipo, data da última modificação, tamanho, proprietário, badge de categoria (se atribuída) e ícone de cadeado de privacidade para arquivos privados. Cada linha possui um botão de menu de contexto que revela as ações disponíveis por arquivo.

<Image src={listView} alt="Visualização em lista do Smarter Files com dois arquivos e o link Download All Files" />

## Visualização em Tiles

Uma grade de cartões com ícones de tipo de arquivo em destaque. Útil para registros com muitas imagens ou quando a varredura visual importa mais do que a leitura de metadados.

<Image src={tileView} alt="Visualização em tiles do Smarter Files exibindo arquivos como uma grade responsiva de cartões" />

## Alternando Visualizações

O administrador define a visualização **padrão** através da propriedade de design **Display Mode** no App Builder (`List` ou `Tiles`). Os usuários podem alternar entre as visualizações em tempo de execução; a preferência é lembrada para aquela página de registro.

## Ordenação

Seis opções de ordenação, todas disponíveis no menu suspenso de ordenação:

| Opção | Ordena por |
|---|---|
| Data (Mais Recente Primeiro) | `LastModifiedDate` decrescente — o padrão |
| Data (Mais Antigo Primeiro) | `LastModifiedDate` crescente |
| Tamanho (Maior Primeiro) | `ContentSize` decrescente |
| Tamanho (Menor Primeiro) | `ContentSize` crescente |
| Nome (A–Z) | `Title` alfabético |
| Nome (Z–A) | `Title` alfabético inverso |

<Image src={sortMenu} alt="Menu suspenso de ordenação aberto mostrando as seis opções de ordenação" />

O administrador define o **padrão** através da propriedade de design **Default Sort Order**. Os usuários podem alterar em tempo de execução — a escolha persiste para aquela página de registro durante a sessão.

## Estado Vazio

Quando o registro não tem arquivos (ou nenhum que o usuário tenha permissão de ver, após a filtragem de visibilidade), o componente exibe um estado vazio limpo com a opção de upload ainda visível.

<Image src={emptyState} alt="Estado vazio do Smarter Files com prompt de upload" />
