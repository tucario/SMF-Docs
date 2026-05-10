---
title: Etiquetas Personalizadas
description: Cómo personalizar etiquetas y texto en Smarter Files.
---

## Descripción General

Cada texto visible para el usuario en el componente Smarter Files está almacenado como una Custom Label de Salesforce — aproximadamente **98 etiquetas** en total que cubren botones, encabezados, modales, notificaciones, mensajes de validación y el Configuration Wizard. Esto te permite:

- Traducir el componente a cualquier idioma compatible con Salesforce.
- Ajustar la terminología para que coincida con la de tu organización (p. ej., "Documentos" en lugar de "Archivos").
- Personalizar mensajes de error y notificaciones sin tocar el código.

## Personalizar Etiquetas

1. Ve a **Configuración → Custom Labels** en Salesforce.
2. Filtra por prefijo de espacio de nombres `smarterfiles` (o busca `Tucario_`).
3. Haz clic en una etiqueta para editar su valor, o agrega traducciones en **Local Translations / Overrides** para idiomas adicionales.

:::note
Las etiquetas están en el espacio de nombres del paquete `smarterfiles`. Los *nombres* de las etiquetas comienzan todos con `Tucario_` (el prefijo histórico conservado entre versiones).
:::

## Categorías de Etiquetas

| Prefijo | Propósito | Ejemplos |
|---|---|---|
| `Tucario_Common_*` | Texto de UI compartido y mensajes de validación usados en múltiples lugares | `Tucario_Common_Cancel`, `Tucario_Common_Save`, `Tucario_Common_Upload_Blocked`, `Tucario_Common_Upload_Size_Blocked` |
| `Tucario_Files_*` | El componente principal de lista de archivos — acciones, errores, estados vacíos, opciones de ordenamiento | `Tucario_Files_Action_Delete`, `Tucario_Files_Delete_Error` |
| `Tucario_Wizard_*` | Etiquetas de pasos, indicaciones y confirmaciones del Configuration Wizard | títulos de pasos, etiquetas de botones, mensajes de estado de despliegue |
| `Tucario_Visibility_*` | Controles de visibilidad — categorías, documentos privados, asignación de roles | selector de categorías, "Mark as Private" / "Remove Private", etiquetas de jerarquía de roles |

## Ejemplo: Cambiar "Files" por "Documents"

1. Configuración → Custom Labels → busca `Tucario_Files_Card_Title` (o la etiqueta que controla el encabezado que deseas cambiar).
2. Haz clic en **Edit** → cambia el valor a `Documents`.
3. Guarda. El componente toma el nuevo valor en la próxima carga de página — no se requiere redespliegue.

Si quieres un texto diferente por ubicación en la página de registro, usa en su lugar la propiedad de diseño **Card Title** en el componente — reemplaza la etiqueta solo para esa instancia específica.
