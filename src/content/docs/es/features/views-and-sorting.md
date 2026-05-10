---
title: Vistas y Ordenamiento
description: Vista de lista, vista de mosaico y opciones de ordenamiento en Smarter Files.
---

import { Image } from 'astro:assets';
import listView from '../../../../assets/screenshots/list-view.png';
import tileView from '../../../../assets/screenshots/tile-view.png';
import sortMenu from '../../../../assets/screenshots/sort-menu.png';
import emptyState from '../../../../assets/screenshots/empty-state.png';

## Vista de Lista

El diseño predeterminado — filas verticales que muestran el nombre del archivo, el icono de tipo, la fecha de última modificación, el tamaño, el propietario, la etiqueta de categoría (si está asignada) y un icono de candado de privacidad para archivos privados. Cada fila tiene un botón de menú contextual que muestra las acciones disponibles por archivo.

<Image src={listView} alt="Vista de lista de Smarter Files con dos archivos y el enlace Descargar Todos los Archivos" />

## Vista de Mosaico

Una cuadrícula de tarjetas con iconos de tipo de archivo prominentes. Útil para registros con muchas imágenes o cuando escanear visualmente importa más que leer los metadatos.

<Image src={tileView} alt="Vista de mosaico de Smarter Files mostrando los archivos como una cuadrícula adaptable de tarjetas" />

## Cambiar de Vista

El administrador establece la vista **predeterminada** mediante la propiedad de diseño **Display Mode** en App Builder (`List` o `Tiles`). Los usuarios pueden alternar entre vistas en tiempo de ejecución; su preferencia se recuerda para esa página de registro.

## Ordenamiento

Seis opciones de ordenamiento, todas disponibles en el menú desplegable:

| Opción | Ordena por |
|---|---|
| Fecha (Más reciente) | `LastModifiedDate` descendente — el predeterminado |
| Fecha (Más antiguo) | `LastModifiedDate` ascendente |
| Tamaño (Mayor primero) | `ContentSize` descendente |
| Tamaño (Menor primero) | `ContentSize` ascendente |
| Nombre (A–Z) | `Title` alfabético |
| Nombre (Z–A) | `Title` alfabético inverso |

<Image src={sortMenu} alt="Menú desplegable de ordenamiento abierto mostrando las seis opciones" />

El administrador establece el **predeterminado** mediante la propiedad de diseño **Default Sort Order**. Los usuarios pueden cambiarlo en tiempo de ejecución — su elección persiste para esa página de registro durante la sesión.

## Estado Vacío

Cuando el registro no tiene archivos (o ninguno que el usuario tenga permitido ver, después del filtrado de visibilidad), el componente muestra un estado vacío limpio con la opción de carga aún visible.

<Image src={emptyState} alt="Estado vacío de Smarter Files con el indicador de carga" />
