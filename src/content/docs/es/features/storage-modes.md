---
title: Modos de Almacenamiento
description: Modo de almacenamiento Standard vs Isolated y migración de archivos.
---

## Descripción General

Smarter Files admite dos modos de almacenamiento que controlan cómo se vinculan los archivos a los registros. El modo se configura por instancia del componente en Lightning App Builder.

![Configuración del Modo de Almacenamiento en App Builder](/docs/storagemode-isolated.png)

## Modo Standard (Por Defecto)

- Los archivos se vinculan mediante el `ContentDocumentLink` nativo de Salesforce.
- Los archivos aparecen tanto en el componente Smarter Files **como** en la lista relacionada estándar de Files.
- Los controles de visibilidad (categorías, documentos privados) **no están disponibles**.
- Ideal para: gestión simple de archivos donde se desea mantener la compatibilidad con la lista relacionada estándar de Files.

## Modo Isolated

- Los archivos se vinculan únicamente mediante un registro de unión (`Tucario_File_Visibility__c`).
- Los archivos aparecen **solo** en el componente Smarter Files — están ocultos de la lista relacionada estándar de Files.
- Los controles de visibilidad están **completamente disponibles**: categorías, documentos privados, filtrado basado en roles.
- Ideal para: escenarios donde se necesita controlar quién puede ver cada archivo.

## Comparación

| | Standard | Isolated |
|---|---|---|
| Archivos visibles en la lista relacionada estándar de Files | Sí | No |
| Asignación de categorías | No disponible | Disponible |
| Marcar como Privado | No disponible | Disponible |
| Filtrado de visibilidad basado en roles | No disponible | Disponible |
| Migración necesaria al cambiar | — | Sí |

## Migración al Modo Isolated

Al cambiar un componente de modo Standard a Isolated en un registro que ya tiene archivos, los archivos existentes no serán visibles hasta que se migren.

El componente muestra un banner de advertencia con un botón **Migrate Existing Files**. Al hacer clic:

1. Se inicia un trabajo por lotes que crea registros de unión para todos los registros `ContentDocumentLink` existentes en ese registro.
2. Se muestra una barra de progreso durante la migración.
3. Se muestra un mensaje de éxito al completarse.

La migración es segura para ejecutarse nuevamente — utiliza upsert en el campo de ID externo `Content_Document_Id__c`.
