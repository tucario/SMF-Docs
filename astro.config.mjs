// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tucario.github.io',
  base: '/SMF-Docs',
  output: 'static',
  integrations: [
    starlight({
      title: 'Smarter Files Docs',
      logo: {
        src: './src/assets/logo.png',
      },
      editLink: {
        baseUrl: 'https://github.com/tucario/SMF-Docs/edit/main/',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
        fr: { label: 'Français', lang: 'fr' },
        es: { label: 'Español', lang: 'es' },
        ja: { label: '日本語', lang: 'ja' },
        pt: { label: 'Português', lang: 'pt' },
        pl: { label: 'Polski', lang: 'pl' },
        ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tucario/SalesforceSmarterFiles' },
        { icon: 'external', label: 'getsmarterfiles.com', href: 'https://getsmarterfiles.com' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            de: 'Erste Schritte',
            fr: 'Premiers pas',
            es: 'Primeros pasos',
            ja: 'はじめに',
            pt: 'Primeiros passos',
            pl: 'Pierwsze kroki',
            ar: 'البداية',
          },
          items: [
            'getting-started/introduction',
            'getting-started/installation',
          ],
        },
        {
          label: 'Features',
          translations: {
            de: 'Funktionen',
            fr: 'Fonctionnalités',
            es: 'Características',
            ja: '機能',
            pt: 'Recursos',
            pl: 'Funkcje',
            ar: 'الميزات',
          },
          items: [
            'features/file-management',
            'features/views-and-sorting',
            'features/bulk-download',
            'features/file-actions',
            'features/public-links',
            'features/upload-restrictions',
            'features/custom-labels',
          ],
        },
        {
          label: 'AppExchange Edition',
          translations: {
            de: 'AppExchange Edition',
            fr: 'Édition AppExchange',
            es: 'Edición AppExchange',
            ja: 'AppExchange エディション',
            pt: 'Edição AppExchange',
            pl: 'Edycja AppExchange',
            ar: 'إصدار AppExchange',
          },
          items: [
            'features/storage-modes',
            'features/visibility-controls',
            'features/private-documents',
          ],
        },
        {
          label: 'Configuration',
          translations: {
            de: 'Konfiguration',
            fr: 'Configuration',
            es: 'Configuración',
            ja: '設定',
            pt: 'Configuração',
            pl: 'Konfiguracja',
            ar: 'الإعدادات',
          },
          items: [
            'configuration/component-setup',
            'configuration/admin-settings',
          ],
        },
      ],
    }),
  ],
});
