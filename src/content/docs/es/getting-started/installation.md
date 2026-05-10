---
title: Instalación
description: Cómo instalar Smarter Files en tu organización de Salesforce.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## Edición AppExchange (Paquete Gestionado)

1. Abre el enlace de instalación que te envió tu contacto de ventas de Tucario (o desde el listado de AppExchange).
2. Elige **Install for All Users**, **Install for Admins Only** o **Install for Specific Profiles** según cómo quieras controlar el acceso.
3. Aprueba las solicitudes de acceso de terceros y espera a que finalice la instalación.

<Image src={packageInstaller} alt="Instalador de paquetes de Salesforce para Smarter Files" />

## Edición Gratuita (GitHub)

1. Clona o descarga el repositorio desde [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Despliega en tu organización de Salesforce usando Salesforce CLI:

```bash
sf project deploy start --source-dir src
```

## Asignar Conjuntos de Permisos

Smarter Files incluye tres conjuntos de permisos. Cada usuario que interactúe con el componente necesita al menos el conjunto base.

<Image src={permSets} alt="Conjuntos de permisos de Smarter Files en Configuración" />

| Conjunto de Permisos | Requerido para | Otorga |
|---|---|---|
| **Tucario Files (Base)** | Todos los usuarios del componente | Acceso a la aplicación, CRUD sobre el objeto de unión de visibilidad, acceso a los controladores de archivos |
| **Tucario - Manage File Categories** | Administradores y propietarios de categorías | Permiso personalizado `Tucario_Manage_Categories` — asignar categorías en archivos, omitir el filtrado por categorías |
| **Tucario - View Private Documents** | Administradores, RRHH, cumplimiento | Permiso personalizado `Tucario_View_Private_Documents` — ver archivos marcados como privados por otros usuarios |

Asignar mediante **Configuración → Conjuntos de Permisos → [nombre] → Administrar Asignaciones**.

## Agregar el Componente a una Página de Registro

1. Abre cualquier página de registro en **Lightning App Builder**.
2. Arrastra **Smarter Files** desde la paleta de componentes al diseño.
3. Configura las propiedades de diseño en el panel derecho — consulta [Configuración del Componente](/configuration/component-setup/) para la referencia completa de propiedades.
4. Guarda y activa la página.

## Requisitos

- Edición **Enterprise**, **Professional** o **Unlimited** de Salesforce.
- Lightning Experience habilitado.
- Las licencias Platform Starter / Platform Plus son compatibles — no se requiere una licencia completa de Salesforce.
- Para la generación de enlaces públicos: **Content Deliveries and Public Links** debe estar habilitado (Configuración → Salesforce Files).
