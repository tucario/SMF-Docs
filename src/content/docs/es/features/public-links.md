---
title: Enlaces Públicos
description: Genera enlaces públicos para compartir archivos con un solo clic.
---

import { Image } from 'astro:assets';
import publicLink from '../../../../assets/screenshots/public-link-copied.png';

## Descripción General

Genera una URL pública para compartir cualquier archivo directamente desde el menú contextual del archivo — sin necesidad de navegar a la página de detalle del archivo ni abrir un modal de uso compartido separado.

<Image src={publicLink} alt="Menú contextual de archivo con la opción Public Link y una notificación confirmando que la URL se copió al portapapeles" />

## Cómo Crear un Enlace Público

1. Haz clic en el menú contextual del archivo que deseas compartir.
2. Selecciona **Public Link**.
3. Smarter Files crea un registro de Salesforce **Content Distribution** para el archivo y **copia automáticamente la URL a tu portapapeles**.
4. Una notificación de éxito confirma que el enlace fue creado y copiado.

La URL generada es un enlace público estándar de Salesforce — no requiere autenticación y puede compartirse con cualquier persona (incluidas personas fuera de tu organización de Salesforce).

## Requisitos

- **Content Deliveries and Public Links** debe estar habilitado en tu organización. Configuración → busca "Content Deliveries" → habilitar. Sin esto, la opción de menú **Public Link** aparece deshabilitada y un tooltip explica el motivo.
- El usuario que crea el enlace necesita acceso de eliminación sobre el archivo (la regla estándar de Salesforce para crear Content Distributions).

## Gestionar los Enlaces Existentes

Los enlaces públicos creados a través de Smarter Files aparecen en Salesforce bajo la lista relacionada **Distributions** del archivo, junto con cualquier enlace creado desde la interfaz estándar. Desde allí puedes revocarlos, establecer fechas de vencimiento o requerir una contraseña.
