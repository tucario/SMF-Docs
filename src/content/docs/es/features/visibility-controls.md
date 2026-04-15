---
title: Controles de Visibilidad
description: Controles de visibilidad de documentos disponibles en la Edición AppExchange.
---

:::note
Esta función está disponible solo en la **Edición AppExchange** y requiere que el **Storage Mode** del componente esté configurado en **Isolated**.
:::

## Descripción General

Los controles de visibilidad permiten a los administradores restringir el acceso a archivos basándose en categorías de documentos y roles de usuario. Los archivos pueden asignarse a categorías, y cada categoría puede restringirse a roles específicos — los usuarios fuera de esos roles no verán los archivos. Además, cualquier usuario puede marcar un archivo como privado, haciéndolo visible solo para sí mismo y los visualizadores autorizados.

Todo el filtrado se realiza **del lado del servidor** — los archivos a los que un usuario no tiene acceso nunca se envían al navegador.

## Requisito de Modo de Almacenamiento

Los controles de visibilidad solo están disponibles cuando el **Storage Mode** del componente está configurado en **Isolated**:

| | Standard | Isolated |
|---|---|---|
| Archivos visibles en la lista relacionada estándar de Files | Sí | No |
| Asignación de categorías | No disponible | Disponible |
| Marcar como Privado | No disponible | Disponible |
| Filtrado de visibilidad basado en roles | No disponible | Disponible |

En el modo Isolated, los archivos se vinculan al registro exclusivamente a través de un registro de unión — no aparecen en la lista relacionada estándar de Files de Salesforce.

## Categorías de Documentos

### ¿Qué Son las Categorías?

Una categoría es una etiqueta asignada a un archivo que determina quién puede verlo. Las categorías son definidas por un administrador a través del **Configuration Wizard** y se almacenan como registros de Custom Metadata Type.

Ejemplos:
- Registros Médicos
- Informes Financieros
- Contratos Legales
- Memorándos Internos

### Cómo Funciona el Filtrado por Categorías

Cada categoría tiene una lista de **roles permitidos**. Cuando un archivo tiene una categoría asignada:

- Si el rol del usuario está en la lista de permitidos → el archivo es **visible**
- Si el rol del usuario NO está en la lista de permitidos → el archivo está **oculto**
- Si no hay roles asignados a una categoría → el archivo es visible para **todos**
- Si un archivo no tiene categoría → el archivo es visible para **todos**

### Asignar Categorías a Archivos

Los usuarios con el conjunto de permisos **Tucario - Manage File Categories** pueden asignar categorías:

1. Haz clic en el menú de acciones de un archivo.
2. Selecciona **Set Category**.
3. Elige una categoría del selector, o selecciona **No Category** para eliminar la asignación actual.

La visibilidad del archivo se actualiza inmediatamente.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/assigning-categories-to-files.mp4" type="video/mp4" />
</video>

### Gestionar Categorías

Las categorías se gestionan a través del **Configuration Wizard** en la aplicación Smarter Files:

1. Abre la aplicación **Smarter Files by Tucario** desde el App Launcher.
2. Haz clic en **Manage Document Categories**.
3. **Paso 1 — Tipos de Documento**: Agrega categorías con nombres y descripciones opcionales.
4. **Paso 2 — Asignar Roles**: Para cada categoría, selecciona qué roles pueden ver los archivos de esa categoría.
5. **Paso 3 — Revisar y Desplegar**: Revisa la configuración y haz clic en Deploy.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/add-category.mp4" type="video/mp4" />
</video>

:::note
**Eliminar una categoría:** Cuando eliminas un tipo de documento del wizard y despliegas, el registro subyacente de Custom Metadata Type no se elimina — se **desactiva** (`Is_Active = false`). Las categorías desactivadas ya no aparecen en el selector de categorías ni filtran archivos. Esto se debe a que la Salesforce Metadata API no permite eliminar registros de Custom Metadata Type desde Apex.
:::

## Documentos Privados

### Marcar Archivos como Privados

Cualquier usuario puede marcar un archivo como privado en el modo Isolated:

1. Haz clic en el menú de acciones de un archivo.
2. Selecciona **Mark as Private**.
3. Aparece un icono de candado junto al nombre del archivo.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/make-file-private.mp4" type="video/mp4" />
</video>

El archivo ahora es visible solo para:
- El usuario que lo marcó como privado (el propietario)
- Los usuarios con el conjunto de permisos **Tucario - View Private Documents**

### Eliminar el Estado Privado

El propietario del archivo puede eliminar la marca de privado:

1. Haz clic en el menú de acciones del archivo privado.
2. Selecciona **Remove Private**.
3. El archivo vuelve a las reglas de visibilidad normales.

## Lógica de Filtrado Combinado

Cuando un archivo tiene tanto una categoría como una marca de privado, **ambas verificaciones deben cumplirse** para que el archivo sea visible:

```
For each file:
  1. Private check:
     If file is private AND user is not the owner
     AND user lacks "View Private Documents" permission → HIDE

  2. Category check:
     If file has a category with permitted roles
     AND user's role is not in the list
     AND user lacks "Manage Categories" permission → HIDE

  3. Otherwise → SHOW
```

## Conjuntos de Permisos

| Conjunto de Permisos | Propósito |
|---|---|
| **Tucario Files** | Acceso básico. Otorga acceso a la aplicación, controladores y objeto de unión. Asignar a todos los usuarios. |
| **Tucario - Manage File Categories** | Permite asignar categorías a archivos. **Omite el filtrado por categorías** — los usuarios con este permiso ven todos los archivos independientemente de la categoría. |
| **Tucario - View Private Documents** | Permite ver archivos marcados como privados por otros usuarios. |

## Casos de Uso

- **Registros médicos** visibles solo para gerentes de RRHH y personal médico.
- **Informes financieros** restringidos al equipo de finanzas.
- **Contratos legales** accesibles solo para roles del departamento legal.
- **Archivos adjuntos sensibles** marcados como privados por usuarios individuales para uso personal.
- **Documentos en borrador** ocultos de roles externos hasta estar listos.
