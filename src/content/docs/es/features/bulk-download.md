---
title: Descarga Masiva en ZIP
description: Descarga todos los archivos de un registro como un único archivo ZIP — sin límite de tamaño.
---

import { Image } from 'astro:assets';
import downloadAll from '../../../../assets/screenshots/download-all-zip.png';

## Descripción General

Descarga todos los archivos adjuntos al registro como un único archivo ZIP. El enlace **Download All Files** aparece en la parte superior del componente cuando hay al menos un archivo presente.

<Image src={downloadAll} alt="Componente de archivos con Descarga Total en progreso, mostrando un indicador de carga" />

## Cómo Funciona

Smarter Files elige la estrategia adecuada según el tamaño total de los archivos:

- **Lotes pequeños (por defecto: menos de ~50 MB en total)** se comprimen **del lado del cliente** en el navegador usando [JSZip](https://stuk.github.io/jszip/). El ZIP se genera y descarga completamente en el equipo del usuario — sin procesamiento del lado del servidor.
- **Lotes grandes** se comprimen **del lado del servidor** transmitiendo los archivos a través del servlet de archivos de Salesforce. Esto evita el límite estándar de 12 MB del heap de Apex, por lo que no hay un límite de tamaño práctico para el archivo.

El usuario ve un único botón "Download All" independientemente del camino tomado; el componente decide automáticamente.

## Filtrado de Visibilidad

Solo se incluyen en el ZIP los archivos que el usuario tiene permitido ver. Los archivos restringidos por:

- **Reglas de categoría de visibilidad** (el rol del usuario no está en la lista de permitidos), o
- **Marca de privado** (establecida por otro usuario y el usuario actual no tiene el permiso `View Private Documents`)

…son filtrados del lado del servidor antes de construir el paquete — nunca aparecen en el archivo aunque el usuario sepa que existen.

## Comportamiento ante Errores

Si un archivo individual falla al descargarse (dañado, eliminado entre la obtención y el comprimido, o permiso revocado a mitad de proceso), el ZIP se genera igualmente con los archivos restantes y una notificación advierte al usuario qué archivos se omitieron. La operación de descarga total nunca se cancela por completo a causa de un único archivo defectuoso.

## Notas de Rendimiento

- La generación del ZIP se ejecuta de forma asíncrona — el usuario puede navegar a otra página y la descarga se completa cuando esté lista.
- Para registros con cientos de archivos, se espera una espera notable en el primer clic; las descargas posteriores del mismo registro son más rápidas porque los metadatos de los archivos están en caché.
