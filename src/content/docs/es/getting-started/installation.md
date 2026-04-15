---
title: Instalación
description: Cómo instalar Smarter Files en tu organización de Salesforce.
---

## Edición Gratuita (GitHub)

1. Clona o descarga el repositorio desde [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. Despliega en tu organización de Salesforce usando Salesforce CLI:

```bash
sf project deploy start --source-dir force-app
```

3. Navega a una página de registro en Lightning App Builder y arrastra el componente **Smarter Files** al diseño.

### Despliegue con Un Clic (Alternativa)

También puedes usar la herramienta de despliegue de GitHub para instalar directamente en tu organización:

1. Elige tu entorno (Producción o Sandbox):

![Configuración de la herramienta de despliegue](/docs/deploy-tool-settings.png)

2. Permite el acceso a tu organización de Salesforce:

![Solicitud de permiso de acceso](/docs/deploy-allow-access.png)

3. Confirma los componentes a desplegar:

![Confirmación de despliegue](/docs/deploy-tool-confirmation.png)

## Edición AppExchange

1. Instala desde AppExchange (disponible próximamente).
2. Coloca el componente **Smarter Files** en cualquier página de registro usando Lightning App Builder.
3. Configura las reglas de visibilidad en el panel de configuración del componente.

## Requisitos

- Salesforce edición **Enterprise**, **Professional** o **Unlimited**.
- Lightning Experience habilitado.
- La licencia Platform es suficiente — no se requiere una licencia completa de Salesforce.
