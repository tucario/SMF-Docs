---
title: Acciones de Archivo
description: Acciones disponibles para archivos individuales en Smarter Files.
---

## Acciones del Menú Contextual

Cada archivo en el componente tiene un menú de acciones con las siguientes opciones:

![Menú contextual de acciones de archivo](/docs/file-actions.png)

| Acción | Descripción | Disponibilidad |
|---|---|---|
| **View Details** | Abre la página estándar de detalle del archivo en Salesforce | Todos los usuarios |
| **Edit Details** | Editar nombre y descripción del archivo en línea | Usuarios con acceso de edición |
| **Download** | Descargar el archivo individual | Todos los usuarios |
| **Public Link** | Generar una URL pública para compartir el archivo | Configurable mediante propiedad del componente |
| **Delete** | Eliminar el archivo permanentemente (con confirmación) | Usuarios con acceso de eliminación |
| **Remove** | Eliminar el archivo de este registro sin borrarlo | Solo modo Isolated |
| **Set Category** | Asignar una categoría de visibilidad al archivo | Modo Isolated + permiso Manage Categories |
| **Mark as Private** | Hacer el archivo visible solo para ti | Solo modo Isolated |
| **Remove Private** | Eliminar la marca de privado del archivo | Modo Isolated, solo el propietario del archivo |

## Vista Previa Nativa de Archivos

Al hacer clic en el nombre de un archivo se abre el modal estándar de vista previa de Salesforce — no se requieren visores externos ni complementos. La vista previa admite todos los tipos de archivo que Salesforce soporta de forma nativa (PDFs, imágenes, documentos de Office, etc.).
