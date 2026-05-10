---
title: Configuración del Componente
description: Cómo agregar y configurar Smarter Files en una página de registro.
---

import { Image } from 'astro:assets';
import appBuilder from '../../../../assets/screenshots/app-builder-properties.png';
import cardTitle from '../../../../assets/screenshots/app-builder-card-title.png';

## Agregar a una Página de Registro

1. Abre cualquier página de registro en **Lightning App Builder**.
2. Busca **Smarter Files** en la paleta de componentes bajo *Custom — Managed*.
3. Arrástralo a la región deseada del diseño de página.
4. Configura las propiedades de diseño en el panel derecho.
5. Guarda y activa la página.

<Image src={appBuilder} alt="Lightning App Builder con el componente Smarter Files seleccionado y el panel de propiedades abierto" />

## Propiedades del Componente

El componente expone ocho propiedades de diseño en la barra lateral del App Builder:

| Propiedad | Descripción | Valor por Defecto |
|---|---|---|
| **Card Title** | Texto del encabezado del componente. Reemplaza la etiqueta personalizada `Tucario_Files_Card_Title` para esta instancia. | `Files` |
| **Storage Mode** | `Standard` — archivos vinculados mediante `ContentDocumentLink` (visibles en la lista relacionada estándar de Files). `Isolated` — archivos vinculados solo a través de la unión `Tucario_File_Visibility__c` (ocultos de la lista relacionada estándar de Files, habilita los controles de visibilidad). Ver [Storage Modes](/features/storage-modes/). | `Standard` |
| **Display Mode** | Cómo se muestran los archivos: `List` (filas verticales con metadatos) o `Tiles` (cuadrícula de tarjetas con iconos de tipo de archivo). | `List` |
| **Default Sort Order** | Orden de clasificación inicial. Los usuarios pueden cambiarlo en tiempo de ejecución. Opciones: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za`. | `date-newest` |
| **Initial Files Displayed** | Número máximo de archivos mostrados inicialmente. Aparece un enlace "Ver Todos" cuando hay más archivos. Establece `0` para mostrar todos. | `5` |
| **Allowed File Extensions** | Lista blanca separada por comas (p. ej., `pdf,docx,png`). Solo se pueden cargar estos tipos. Dejar vacío para permitir todos. | *(vacío — todos permitidos)* |
| **Excluded File Extensions** | Lista negra separada por comas (p. ej., `exe,bat,sh`). Estos tipos están bloqueados para la carga. | *(vacío — ninguno bloqueado)* |
| **Max File Size (MB)** | Límite de tamaño de carga en megabytes. Establece `0` para sin límite. | `0` |

<Image src={cardTitle} alt="Editando la propiedad Card Title en App Builder para reemplazar el encabezado del componente" />

### Lógica de Restricción de Carga

Cuando tanto la lista de **Permitidos** como la de **Excluidos** están configuradas, se aplican en orden:

1. **Primero se verifica la lista de permitidos** — si la extensión del archivo no está en la lista, se bloquea.
2. **Luego se verifica la lista de excluidos** — si el archivo pasó la verificación de permitidos pero su extensión está en la lista de excluidos, también se bloquea.

Un archivo debe estar en la lista de permitidos **y** no estar en la lista de excluidos para ser aceptado.

:::tip
En la mayoría de los casos, solo necesitas una de las dos configuraciones. Usa **Permitidos** cuando quieras restringir las cargas a un conjunto pequeño de tipos conocidos (p. ej., `pdf,docx,xlsx`). Usa **Excluidos** cuando quieras bloquear tipos específicos pero permitir todo lo demás (p. ej., `exe,bat`).
:::

## Consejos de Ubicación

- Funciona en el área de contenido principal, la barra lateral o las regiones de ancho completo de la página de registro.
- Puede colocarse en cualquier página de registro de objeto estándar o personalizado.
- Se admiten múltiples instancias en la misma página — útil para dividir un registro en diferentes espacios de archivos (p. ej., una instancia en modo Standard para archivos generales y una instancia en modo Isolated para documentos confidenciales). Establece **Card Titles** distintos para diferenciarlos.
- El componente es **solo para páginas de registro**. El Configuration Wizard se incluye como una página de aplicación separada, accesible desde la entrada del App Launcher de la aplicación *Smarter Files by Tucario*.
