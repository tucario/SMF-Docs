---
title: Ações de Arquivo
description: Ações disponíveis para arquivos individuais no Smarter Files.
---

import { Image } from 'astro:assets';
import contextMenu from '../../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../../assets/screenshots/file-preview.png';
import editModal from '../../../../assets/screenshots/edit-details-modal.png';

## Menu de Contexto

Cada arquivo possui um menu de contexto (o botão de três pontos à direita da linha, ou o botão de sobreposição em um tile). As ações disponíveis dependem das permissões do usuário naquele arquivo específico.

<Image src={contextMenu} alt="Menu de contexto de arquivo aberto mostrando as ações disponíveis" />

| Ação | Descrição | Disponibilidade |
|---|---|---|
| **View Details** | Abre a página padrão de detalhes do arquivo do Salesforce em uma nova aba. | Todos os usuários |
| **Edit Details** | Abre um modal inline para editar o título e a descrição do arquivo. Salva e atualiza a lista automaticamente. | Usuários com acesso de edição |
| **Download** | Baixa este arquivo individualmente. | Todos os usuários |
| **Public Link** | Gera uma URL de Content Distribution do Salesforce para o arquivo e a copia automaticamente para a área de transferência. | Todos os usuários (requer Content Deliveries habilitado na org) |
| **Delete** | Exclui o arquivo permanentemente do Salesforce. Modal de confirmação primeiro. | Usuários com acesso de exclusão (proprietário do arquivo, ou usuários com o acesso correto ao objeto/compartilhamento; respeita as regras de licença Platform Starter / Platform Plus) |
| **Remove from Record** | Desvincula o arquivo deste registro, mas o mantém na biblioteca de arquivos da org. Útil quando um arquivo foi anexado ao registro errado. | Usuários com acesso de edição no registro |
| **Set Category** | Abre o seletor de categoria para atribuir uma categoria de visibilidade ao arquivo. | Usuários com a custom permission **Manage Categories** |
| **Mark as Private** | Marca o arquivo como privado — somente o proprietário e usuários com **View Private Documents** podem vê-lo. Consulte [Documentos Privados](/features/private-documents/). | Todos os usuários (modo de armazenamento Isolated) |
| **Remove Private** | Remove o sinalizador de privado. Visível em arquivos privados. | O usuário que o marcou como privado |

<Image src={actionButtons} alt="Linha de arquivo com botões de ação de edição/exclusão visíveis" />

## Pré-visualização Nativa de Arquivos

Clicar no nome de um arquivo abre o modal padrão de pré-visualização do Salesforce — o mesmo que os usuários já conhecem do componente nativo de Files. Suporta tudo que o Salesforce pré-visualiza nativamente (PDFs, imagens, documentos Office, vídeo, áudio).

<Image src={preview} alt="Pré-visualização nativa de arquivo do Salesforce aberta a partir do Smarter Files" />

## Editar Detalhes

Selecionar **Edit Details** abre um modal simplificado — altere o título ou a descrição, clique em Salvar, e a lista de arquivos é atualizada automaticamente sem recarregar a página completa.

<Image src={editModal} alt="Modal de edição de detalhes do arquivo" />
