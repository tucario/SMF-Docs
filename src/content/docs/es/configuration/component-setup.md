---
title: Configuración del Componente
description: Cómo agregar y configurar Smarter Files en una página de registro.
---

## Agregar a una Página de Registro

1. Abre cualquier página de registro en **Lightning App Builder**.
2. Busca **Smarter Files** en la paleta de componentes.
3. Arrástralo a la región deseada del diseño de página.
4. Guarda y activa la página.

<video controls playsinline style="width:100%; border-radius:8px;">
  <source src="/docs/put-on-flexipage.mp4" type="video/mp4" />
</video>

## Propiedades del Componente

![Panel de configuración del App Builder](/docs/storagemode-isolated.png)

Las siguientes propiedades están disponibles en la barra lateral de Lightning App Builder:

| Propiedad | Descripción | Valor por Defecto |
|---|---|---|
| **Card Title** | Texto del encabezado del componente | `Files` |
| **Storage Mode** | `Standard` — archivos vinculados mediante ContentDocumentLink (visibles en la lista relacionada Files). `Isolated` — archivos vinculados solo mediante registro de unión (ocultos de la lista relacionada Files, habilita controles de visibilidad). | `Standard` |
| **Display Mode** | Cómo se muestran los archivos: `List` (filas verticales) o `Tiles` (cuadrícula de tarjetas) | `List` |
| **Default Sort Order** | Orden de clasificación inicial para la lista de archivos. Los usuarios pueden cambiarlo en tiempo de ejecución. Opciones: `date-newest`, `date-oldest`, `size-largest`, `size-smallest`, `name-az`, `name-za` | `date-newest` |
| **Initial Files Displayed** | Número máximo de archivos mostrados inicialmente. Establece `0` para mostrar todos los archivos. Aparece un enlace "Show All" cuando hay más archivos. | `5` |
| **Allowed File Extensions** | Lista blanca de extensiones separadas por comas (por ejemplo, `pdf,docx,png`). Solo estos tipos pueden cargarse. Dejar vacío para permitir todos los tipos. | Todos los tipos |
| **Excluded File Extensions** | Lista negra de extensiones separadas por comas (por ejemplo, `exe,bat,sh`). Estos tipos se bloquean en la carga. | Ninguno |
| **Max File Size (MB)** | Tamaño máximo de archivo para cargas en megabytes. Establece `0` para sin límite. | `0` (sin límite) |

### Lógica de Restricción de Carga

Cuando se configuran tanto las extensiones **Allowed** como **Excluded**, funcionan en conjunto:

1. **La lista de permitidos se verifica primero** — si la extensión del archivo no está en la lista de permitidos, se bloquea.
2. **La lista de excluidos se verifica después** — si el archivo pasó la verificación de permitidos pero su extensión está en la lista de excluidos, se bloquea igualmente.

En otras palabras, un archivo debe estar en la lista de permitidos **y** no estar en la lista de excluidos para ser aceptado.

:::tip
En la mayoría de los casos, solo necesitas una de las dos configuraciones. Usa **Allowed** cuando quieras restringir las cargas a un conjunto pequeño de tipos conocidos (por ejemplo, `pdf,docx,xlsx`). Usa **Excluded** cuando quieras bloquear tipos específicos pero permitir todo lo demás (por ejemplo, `exe,bat`).
:::

## Consejos de Ubicación

- Funciona en el área de contenido principal, la barra lateral o regiones de ancho completo.
- Puede colocarse en cualquier página de registro de objeto estándar o personalizado.
- Se admiten múltiples instancias en la misma página (por ejemplo, diferentes configuraciones por pestaña).
