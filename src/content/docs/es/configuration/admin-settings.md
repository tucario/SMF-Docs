---
title: Configuración de Administrador
description: Conjuntos de permisos, objetos personalizados y configuración basada en metadatos en Smarter Files.
---

## Conjuntos de Permisos

El paquete incluye tres conjuntos de permisos. Cada usuario del componente necesita al menos el conjunto base.

| Conjunto de Permisos | Requerido para | Otorga |
|---|---|---|
| **Tucario Files** *(base)* | Todos los usuarios del componente | Acceso a la aplicación ("Smarter Files by Tucario"), CRUD sobre el objeto de unión `Tucario_File_Visibility__c`, acceso a `TucarioFileDownloadController` y `TucarioVisibilityController` |
| **Tucario - Manage File Categories** | Administradores y propietarios de categorías | Permiso personalizado `Tucario_Manage_Categories` — asignar categorías en archivos mediante "Set Category" y omitir el filtrado por categorías (estos usuarios siempre ven todos los archivos) |
| **Tucario - View Private Documents** | Administradores, RRHH, responsables de cumplimiento | Permiso personalizado `Tucario_View_Private_Documents` — ver archivos marcados como privados por otros usuarios |

:::caution
**Tucario Files** es obligatorio incluso para usuarios de solo lectura. Sin él, el componente muestra un estado de acceso denegado porque el usuario no puede leer el objeto de unión que controla la visibilidad.
:::

## Restricciones de Carga

Las reglas de carga — extensiones permitidas, extensiones excluidas y tamaño máximo — se configuran **por instancia del componente** a través de las propiedades de diseño en App Builder, no de forma global. Consulta [Configuración del Componente](/configuration/component-setup/) para la lista completa de propiedades.

Esto significa que puedes tener diferentes reglas de carga en distintas páginas de registro, o incluso en múltiples instancias dentro de la misma página de registro con reglas distintas.

## Reglas de Visibilidad — `Tucario_Visibility_Rule__mdt`

Las reglas de visibilidad se almacenan como registros de Custom Metadata Type y se gestionan a través del [Configuration Wizard](/features/visibility-controls/#configuring-visibility-rules) — no se editan directamente en Configuración.

| Campo | Tipo | Propósito |
|---|---|---|
| **Category** | Texto | El nombre del tipo de documento (p. ej., `HR Documents`, `Contracts`). Los archivos hacen referencia a esta cadena en su campo `Visibility_Category__c`. |
| **Permitted Roles** | Área de Texto Largo | Lista de valores `DeveloperName` de roles separados por punto y coma (p. ej., `CEO;HR_Manager;HR_Specialist`). Los usuarios cuyo rol coincida con alguno de estos pueden ver los archivos de esta categoría. |
| **Is Active** | Casilla de Verificación | Si la regla está activa. Las reglas inactivas se comportan como si no existieran (la categoría vuelve al acceso abierto por defecto). |
| **Description** | Texto | Descripción de la categoría orientada al administrador sobre qué contiene. |

:::note
Cuando una categoría se "elimina" a través del wizard, se **desactiva** (`Is_Active = false`), no se borra. La Salesforce Metadata API no permite eliminar registros de Custom Metadata Type desde Apex, por lo que la desactivación es la alternativa más cercana. Las categorías desactivadas quedan excluidas de todas las consultas y no aparecen en el selector de categorías.
:::

## Unión de Visibilidad de Archivos — `Tucario_File_Visibility__c`

Smarter Files crea un registro de objeto de unión personalizado por cada archivo gestionado en el modo de almacenamiento **Isolated** (y para cualquier archivo con una categoría o marca de privado, independientemente del modo).

| Campo | Tipo | Propósito |
|---|---|---|
| **Content Document Id** | Texto (ID Externo, Único) | Referencia al `ContentDocument` de Salesforce. Un registro de unión por archivo por registro padre. |
| **Parent Record Id** | Texto (18) | El ID de 18 caracteres del registro al que está adjunto el archivo. |
| **Visibility Category** | Texto (80) | El nombre de la categoría del registro `Tucario_Visibility_Rule__mdt`. Vacío significa sin restricción de categoría. |
| **Is Private** | Casilla de Verificación | Verdadero si el archivo ha sido marcado como privado. |
| **Owner Id** | Relación (Usuario) | El usuario que marcó el archivo como privado. Obligatorio cuando **Is Private** es verdadero (aplicado por la regla de validación `Owner_Required_When_Private`). |

**Nomenclatura automática:** los registros usan el formato `FV-{0000}`.

**Modelo de uso compartido:** ReadWrite. Las operaciones SOQL/DML sobre este objeto se ejecutan en `USER_MODE`, por lo que los usuarios solo ven y modifican los registros de unión a los que tienen acceso.

## Permisos Personalizados

| Nombre de API | Utilizado por |
|---|---|
| `Tucario_Manage_Categories` | Otorgado mediante el conjunto de permisos *Tucario - Manage File Categories*. Controla la visibilidad del ítem de menú **Set Category** y omite el filtrado por categorías. |
| `Tucario_View_Private_Documents` | Otorgado mediante el conjunto de permisos *Tucario - View Private Documents*. Permite ver archivos privados de otros usuarios. |

Puedes asignar estos permisos personalizados a través de tus propios conjuntos de permisos si deseas combinarlos con roles específicos de tu organización en lugar de usar los conjuntos incluidos.

## Clases Apex Expuestas

Dos controladores son accesibles desde componentes Lightning — ambos se ejecutan con `with sharing` y usan SOQL/DML en `USER_MODE`:

- **`TucarioFileDownloadController`** — CRUD de archivos, carga/descarga, creación de enlaces públicos, asignación de categorías, activación/desactivación de la marca de privado.
- **`TucarioVisibilityController`** — backend del wizard (lista de roles, despliegue de reglas, sondeo del estado de despliegue), controles de migración por lotes, verificaciones de permisos.

Otorga acceso mediante el conjunto de permisos **Tucario Files** (ya habilitado allí) — normalmente no hay motivo para habilitar estas clases desde otros conjuntos de permisos.
