---
title: Download em Massa ZIP
description: Baixe múltiplos arquivos como um único arquivo ZIP.
---

## Visão Geral

Baixe todos os arquivos anexados a um registro como um único arquivo ZIP — sem precisar baixar arquivos um por um.

O link **Download All Files** aparece no topo do componente quando há arquivos presentes. Ao clicar, todos os arquivos visíveis são empacotados em um ZIP e o download é iniciado no navegador.

## Como Funciona

1. O componente busca todo o conteúdo dos arquivos no lado do cliente usando a Salesforce Content API.
2. Os arquivos são comprimidos em um arquivo ZIP usando [JSZip](https://stuk.github.io/jszip/).
3. O ZIP é gerado no navegador — sem processamento no servidor ou serviços externos envolvidos.
4. O download inicia automaticamente assim que o arquivo está pronto.

## Tratamento de Arquivos Grandes

Para registros com muitos arquivos ou arquivos grandes, o componente exibe um indicador de progresso durante a geração do ZIP. Se algum arquivo individual falhar no download (ex.: devido a limites de tamanho), o ZIP ainda é criado com os arquivos restantes e um aviso toast é exibido.
