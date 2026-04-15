---
title: Descarga Masiva en ZIP
description: Descargar múltiples archivos como un único archivo ZIP.
---

## Descripción General

Descarga todos los archivos adjuntos a un registro como un único archivo ZIP — sin necesidad de descargar archivos uno por uno.

El enlace **Download All Files** aparece en la parte superior del componente cuando hay archivos presentes. Al hacer clic, empaqueta todos los archivos visibles en un ZIP e inicia la descarga en el navegador.

## Cómo Funciona

1. El componente obtiene todo el contenido de los archivos del lado del cliente usando la Salesforce Content API.
2. Los archivos se comprimen en un archivo ZIP usando [JSZip](https://stuk.github.io/jszip/).
3. El ZIP se genera en el navegador — no se requiere procesamiento del lado del servidor ni servicios externos.
4. La descarga comienza automáticamente una vez que el archivo está listo.

## Manejo de Archivos Grandes

Para registros con muchos archivos o archivos grandes, el componente muestra un indicador de progreso durante la generación del ZIP. Si algún archivo individual falla al descargarse (por ejemplo, debido a límites de tamaño), el ZIP se crea igualmente con los archivos restantes y se muestra una notificación de advertencia.
