---
title: Restricciones de Carga
description: Controlar qué tipos y tamaños de archivo pueden cargar los usuarios.
---

## Descripción General

Los administradores pueden restringir las cargas por tipo y tamaño de archivo directamente en las propiedades del componente — sin necesidad de código.

## Restricciones por Tipo de Archivo

Dos propiedades controlan qué tipos de archivo se aceptan:

### Allowed File Extensions

Una lista blanca de extensiones permitidas (por ejemplo, `pdf,docx,xlsx`). Cuando está configurada, **solo** estos tipos pueden cargarse. Dejar vacío para permitir todos los tipos.

### Excluded File Extensions

Una lista negra de extensiones bloqueadas (por ejemplo, `exe,bat,sh`). Estos tipos se rechazan al cargar. Dejar vacío para no excluir nada.

### Uso Combinado

Cuando ambas están configuradas, funcionan como un filtro combinado:

1. **La lista de permitidos se verifica primero** — si la extensión del archivo no está en la lista de permitidos, se bloquea.
2. **La lista de excluidos se verifica después** — si el archivo pasó la verificación de permitidos pero está en la lista de excluidos, se bloquea igualmente.

Un archivo debe estar en la lista de permitidos **y** no estar en la lista de excluidos para ser aceptado.

:::tip
En la mayoría de los casos, solo necesitas una de las dos. Usa **Allowed** para restringir a un conjunto pequeño de tipos conocidos. Usa **Excluded** para bloquear tipos específicos pero permitir todo lo demás.
:::

## Límite de Tamaño de Archivo

Establece la propiedad **Max File Size (MB)** para limitar el tamaño máximo de carga. Establece `0` para sin límite.

Cuando un usuario intenta cargar un archivo que excede el límite, la carga se bloquea y se muestra una notificación de error con el nombre del archivo y el límite configurado.

## Retroalimentación al Usuario

Cuando las cargas se bloquean, el componente proporciona retroalimentación clara:

![Mensaje de notificación de carga bloqueada](/docs/upload-blocked.png)

- **Un archivo bloqueado** — la notificación indica el nombre del archivo y explica por qué fue bloqueado (tipo incorrecto o demasiado grande).
- **Múltiples archivos bloqueados** — la notificación lista todos los archivos bloqueados con el motivo.
- **Carga mixta** — si algunos archivos se cargan exitosamente y otros se bloquean, se muestran tanto una notificación de éxito como una de advertencia.
