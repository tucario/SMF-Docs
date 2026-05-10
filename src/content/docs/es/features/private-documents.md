---
title: Documentos Privados
description: Marca archivos como privados para restringir el acceso al propietario del archivo y a los visualizadores autorizados.
---

import { Image } from 'astro:assets';
import markPrivate from '../../../../assets/screenshots/mark-as-private.png';

:::note
Disponible solo en la **Edición AppExchange**. Requiere el modo de almacenamiento **Isolated** en la instancia del componente.
:::

## Descripción General

Cualquier usuario puede marcar un archivo como privado. Un archivo privado solo es visible para:

1. **El usuario que lo marcó como privado** (registrado en `Owner_Id__c` en la unión de visibilidad).
2. **Los usuarios con el permiso personalizado `Tucario_View_Private_Documents`** — normalmente asignado a administradores, RRHH o responsables de cumplimiento mediante el conjunto de permisos **Tucario - View Private Documents**.

Los archivos privados muestran un icono de candado junto al nombre del archivo tanto en la vista de Lista como en la de Mosaico.

## Marcar un Archivo como Privado

1. Abre el menú contextual del archivo.
2. Selecciona **Mark as Private**.
3. Aparece un icono de candado junto al nombre del archivo; el archivo ahora está oculto para todos excepto para el propietario y los usuarios con View Private Documents.

<Image src={markPrivate} alt="Archivo marcado como privado con el icono de candado visible en la lista de archivos" />

## Eliminar la Marca de Privado

El propietario (y cualquier usuario con `View Private Documents`) puede eliminar la marca:

1. Abre el menú contextual del archivo privado.
2. Selecciona **Remove Private**.
3. El icono de candado desaparece y el archivo vuelve a las reglas de visibilidad normales (incluidas las restricciones de categoría que pudiera tener).

## Quién Puede Ver un Archivo Privado

| Usuario | ¿Puede ver el archivo? |
|---|---|
| El propietario (quien lo marcó como privado) | Sí |
| Usuario con permiso **View Private Documents** | Sí |
| Todos los demás | No — el archivo se filtra del lado del servidor y nunca aparece en la lista, aunque antes supieran que existía |

## Combinación con Categorías

La visibilidad privada y la basada en categorías se aplican en conjunto — ambas verificaciones deben cumplirse para que un archivo sea visible. Si un archivo es privado **y** está asignado a una categoría exclusiva para RRHH, solo los usuarios que superen *ambos* controles (el propietario con rol de RRHH, o un usuario con View Private Documents y rol de RRHH) podrán verlo. Consulta [Controles de Visibilidad](/features/visibility-controls/) para la lógica completa de filtrado.

## Detrás de Escena

Cuando marcas un archivo como privado, Smarter Files escribe en la unión `Tucario_File_Visibility__c`:

- Establece `Is_Private__c = true`.
- Establece `Owner_Id__c` como el usuario actual (aplicado por la regla de validación `Owner_Required_When_Private` — `Owner_Id__c` no puede ser nulo cuando `Is_Private__c` es verdadero).

Todo el filtrado ocurre del lado del servidor en `getFilesList()` antes de que la respuesta salga del servidor de Salesforce, por lo que los archivos privados nunca se envían a navegadores no autorizados.
