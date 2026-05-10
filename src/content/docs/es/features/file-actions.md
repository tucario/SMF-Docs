---
title: Acciones de Archivo
description: Acciones disponibles para archivos individuales en Smarter Files.
---

import { Image } from 'astro:assets';
import contextMenu from '../../../../assets/screenshots/file-context-menu.png';
import actionButtons from '../../../../assets/screenshots/file-action-buttons.png';
import preview from '../../../../assets/screenshots/file-preview.png';
import editModal from '../../../../assets/screenshots/edit-details-modal.png';

## Menú Contextual

Cada archivo tiene un menú contextual (el botón de tres puntos a la derecha de la fila, o el botón superpuesto en una tarjeta). Las acciones disponibles dependen de los permisos del usuario sobre ese archivo específico.

<Image src={contextMenu} alt="Menú contextual de archivo abierto mostrando las acciones disponibles" />

| Acción | Descripción | Disponibilidad |
|---|---|---|
| **View Details** | Abre la página estándar de detalle del archivo de Salesforce en una nueva pestaña. | Todos los usuarios |
| **Edit Details** | Abre un modal en línea para editar el título y la descripción del archivo. Guarda y actualiza la lista automáticamente. | Usuarios con acceso de edición |
| **Download** | Descarga este archivo individual. | Todos los usuarios |
| **Public Link** | Genera una URL de Salesforce Content Distribution para el archivo y la copia automáticamente al portapapeles. | Todos los usuarios (requiere Content Deliveries habilitado en la organización) |
| **Delete** | Elimina el archivo permanentemente de Salesforce. Primero aparece un modal de confirmación. | Usuarios con acceso de eliminación (propietario del archivo, o usuarios con el acceso correcto al objeto/uso compartido; respeta las reglas de licencia Platform Starter / Platform Plus) |
| **Remove from Record** | Desvincula el archivo de este registro pero lo mantiene en la biblioteca de archivos de la organización. Útil cuando un archivo se adjuntó al registro equivocado. | Usuarios con acceso de edición en el registro |
| **Set Category** | Abre el selector de categorías para asignar una categoría de visibilidad al archivo. | Usuarios con el permiso personalizado **Manage Categories** |
| **Mark as Private** | Marca el archivo como privado — solo el propietario y los usuarios con **View Private Documents** pueden verlo. Ver [Documentos Privados](/features/private-documents/). | Todos los usuarios (modo de almacenamiento Isolated) |
| **Remove Private** | Elimina la marca de privado. Visible en archivos privados. | El usuario que lo marcó como privado |

<Image src={actionButtons} alt="Fila de archivo con botones de acciones de edición y eliminación visibles" />

## Vista Previa Nativa de Archivos

Hacer clic en el nombre de un archivo abre el modal estándar de vista previa de Salesforce — el mismo que los usuarios ya conocen del componente nativo de Files. Soporta todo lo que Salesforce previsualiza de forma nativa (PDFs, imágenes, documentos de Office, vídeo, audio).

<Image src={preview} alt="Vista previa nativa de archivo de Salesforce abierta desde Smarter Files" />

## Editar Detalles

Al seleccionar **Edit Details** se abre un modal ligero — cambia el título o la descripción, haz clic en Guardar y la lista de archivos se actualiza automáticamente sin recargar la página completa.

<Image src={editModal} alt="Modal de edición de detalles del archivo" />
