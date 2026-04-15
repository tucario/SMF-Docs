---
title: Configuración del Administrador
description: Configuración global del administrador para Smarter Files.
---

## Custom Metadata

Smarter Files utiliza Custom Metadata Types para la configuración global. Esto permite desplegar la configuración entre organizaciones mediante change sets o la metadata API.

## Configuración Clave

### Restricciones de Carga

Define reglas de carga por objeto:

- **Object API Name** — el objeto al que se aplica la regla.
- **Allowed Extensions** — tipos de archivo separados por comas (por ejemplo, `pdf,docx`).
- **Max File Size (MB)** — tamaño máximo de carga.

### Gestión de Categorías (Edición AppExchange)

Las categorías controlan qué roles pueden ver archivos específicos. Se gestionan a través del **Configuration Wizard** en la aplicación Smarter Files:

1. Abre la aplicación **Smarter Files by Tucario** desde el App Launcher.
2. Haz clic en **Manage Document Categories**.
3. Define tipos de documentos, asigna roles permitidos y despliega.

Las categorías se almacenan como registros de Custom Metadata Type (`Tucario_Visibility_Rule__mdt`). Cada registro contiene:

| Campo | Descripción |
|---|---|
| **Category** | El identificador de la categoría |
| **Permitted Roles** | DeveloperNames de roles separados por punto y coma |
| **Is Active** | Si la regla está activa |
| **Description** | Descripción para el administrador |

:::note
Cuando se elimina una categoría a través del wizard, se **desactiva** en lugar de eliminarse. La Salesforce Metadata API no permite eliminar registros de Custom Metadata Type desde Apex, por lo que el campo `Is_Active` del registro se establece en `false`. Las categorías desactivadas se excluyen de todas las consultas y no aparecen en el selector de categorías.
:::

## Permisos

Smarter Files respeta los permisos estándar de compartición y CRUD de Salesforce. No se requieren conjuntos de permisos adicionales para la funcionalidad básica.

Para la Edición AppExchange, se incluyen tres conjuntos de permisos:

| Conjunto de Permisos | Propósito |
|---|---|
| **Tucario Files** | Acceso básico a la aplicación, controladores Apex y el objeto de unión. Requerido para todos los usuarios. |
| **Tucario - Manage File Categories** | Otorga la capacidad de asignar categorías a los archivos. Los usuarios con este permiso omiten el filtrado por categorías y pueden ver todos los archivos. |
| **Tucario - View Private Documents** | Otorga la capacidad de ver archivos marcados como privados por otros usuarios. |
