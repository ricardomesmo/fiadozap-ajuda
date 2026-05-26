import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ajuda Fiado Zap',
  tagline: 'Aprenda a usar o Fiado Zap passo a passo',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Domínio final da central de ajuda
  url: 'https://ajuda.fiadozap.com.br',

  // Como será usado com domínio próprio, o baseUrl fica na raiz
  baseUrl: '/',

  // Dados do GitHub
  organizationName: 'ricardomesmo',
  projectName: 'fiadozap-ajuda',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ricardomesmo/fiadozap-ajuda/tree/main/',
        },

        // Para uma central de ajuda simples, eu recomendo desativar o blog
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },

    navbar: {
      title: 'Ajuda Fiado Zap',
      logo: {
        alt: 'Fiado Zap',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Como usar',
        },
        {
          href: 'https://fiadozap.com.br',
          label: 'Site Fiado Zap',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ajuda',
          items: [
            {
              label: 'Como usar o Fiado Zap',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Fiado Zap',
          items: [
            {
              label: 'Site oficial',
              href: 'https://fiadozap.com.br',
            },
            {
              label: 'Suporte',
              href: 'mailto:contato@sete.digital',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Fiado Zap. Todos os direitos reservados.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;