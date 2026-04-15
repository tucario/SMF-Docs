---
title: Documentos Privados
description: Marcar archivos como privados para restringir el acceso al propietario del archivo.
---

:::note
Esta función está disponible solo en la **Edición AppExchange** y requiere el modo de almacenamiento **Isolated**.
:::

## Descripción General

Cualquier usuario puede marcar un archivo como privado, haciéndolo visible solo para sí mismo y para los usuarios con el permiso **View Private Documents**. Los archivos privados muestran un icono de candado para indicar su estado restringido.

## Marcar un Archivo como Privado

1. Haz clic en el menú de acciones de un archivo.
2. Selecciona **Mark as Private**.
3. Aparece un icono de candado junto al nombre del archivo.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

El archivo ahora es visible solo para:
- El usuario que lo marcó como privado (el propietario)
- Los usuarios con el conjunto de permisos **Tucario - View Private Documents**

## Eliminar el Estado Privado

El propietario del archivo puede eliminar la marca de privado:

1. Haz clic en el menú de acciones del archivo privado.
2. Selecciona **Remove Private**.
3. El archivo vuelve a las reglas de visibilidad normales.

## ¿Quién Puede Ver los Archivos Privados?

| Usuario | ¿Puede ver el archivo? |
|---|---|
| Propietario del archivo (quien lo marcó como privado) | Sí |
| Usuario con permiso **View Private Documents** | Sí |
| Otros usuarios | No |

Si el archivo también tiene una categoría asignada, tanto la verificación de privacidad como la verificación de categoría deben cumplirse. Consulta [Controles de Visibilidad](/es/features/visibility-controls/) para más detalles sobre el filtrado combinado.
