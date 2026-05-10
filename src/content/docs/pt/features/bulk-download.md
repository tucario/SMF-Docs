---
title: Download em Massa ZIP
description: Baixe todos os arquivos de um registro como um único arquivo ZIP — sem limite de tamanho.
---

import { Image } from 'astro:assets';
import downloadAll from '../../../../assets/screenshots/download-all-zip.png';

## Visão Geral

Baixe todos os arquivos anexados ao registro como um único arquivo ZIP. O link **Download All Files** aparece no topo do componente sempre que há pelo menos um arquivo presente.

<Image src={downloadAll} alt="Componente de arquivos com Download All em andamento, exibindo um indicador de carregamento" />

## Como Funciona

O Smarter Files escolhe a estratégia adequada com base no tamanho total dos arquivos:

- **Lotes pequenos (padrão: menos de ~50 MB no total)** são comprimidos **no lado do cliente** no navegador usando [JSZip](https://stuk.github.io/jszip/). O ZIP é gerado e baixado inteiramente na máquina do usuário — sem processamento no servidor.
- **Lotes grandes** são comprimidos **no lado do servidor** através da transmissão de arquivos pelo servlet de arquivos do Salesforce. Isso contorna o limite padrão de 12 MB do heap do Apex, portanto não há limite prático de tamanho para o arquivo comprimido.

O usuário vê um único botão "Download All" independentemente do caminho tomado; o componente decide automaticamente.

## Filtragem de Visibilidade

Apenas os arquivos que o usuário tem permissão para ver são incluídos no ZIP. Arquivos restritos por:

- **Regras de categoria de visibilidade** (o papel do usuário não está na lista de permitidos), ou
- **Sinalizador de privado** (definido por outro usuário, e o usuário atual não tem a permissão `View Private Documents`)

...são filtrados no lado do servidor antes de o pacote ser criado — eles nunca aparecem no arquivo comprimido, mesmo que o usuário saiba que existem.

## Comportamento em Caso de Falha

Se um arquivo individual falhar no download (corrompido, excluído entre a busca e a compressão, permissão revogada durante o processo), o ZIP ainda é gerado com os arquivos restantes e um toast avisa o usuário sobre quais arquivos foram ignorados. A operação de Download All nunca é abortada completamente por causa de um arquivo com problema.

## Notas de Desempenho

- A geração do ZIP é executada de forma assíncrona — o usuário pode navegar para outra página e o download é concluído quando estiver pronto.
- Para registros com centenas de arquivos, espere tempos de espera perceptíveis no primeiro clique; downloads subsequentes do mesmo registro são mais rápidos porque os metadados dos arquivos ficam em cache.
