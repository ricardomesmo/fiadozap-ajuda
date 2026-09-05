import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ajuda Fiado Zap',
  tagline: 'Aprenda a usar o Fiado Zap passo a passo',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ajuda.fiadozap.com.br',
  baseUrl: '/',

  organizationName: 'ricardomesmo',
  projectName: 'fiadozap-ajuda',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-NPMPP29MHK',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WP25TGLH',
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
        createSitemapItems: async (params: any) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item: any) => !item.url.includes('/page/'));
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },

    metadata: [
      {
        name: 'description',
        content:
          'Central de ajuda do Fiado Zap. Aprenda como cadastrar clientes, registrar vendas, controlar pagamentos, recuperar senha e remover anúncios.',
      },
      {
        name: 'keywords',
        content:
          'Fiado Zap, ajuda Fiado Zap, controlar fiado, app de fiado, controle de clientes, controle de vendas, vendas fiadas, cobrança pelo WhatsApp',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Ajuda Fiado Zap',
      },
      {
        property: 'og:locale',
        content: 'pt_BR',
      },
      {
        property: 'og:image',
        content: 'https://ajuda.fiadozap.com.br/img/fiadozap-social-card.jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:alt',
        content: 'Fiado Zap - Central de ajuda para controlar clientes, vendas e pagamentos',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: 'https://ajuda.fiadozap.com.br/img/fiadozap-social-card.jpg',
      },
      {
        name: 'twitter:image:alt',
        content: 'Fiado Zap - Central de ajuda para controlar clientes, vendas e pagamentos',
      },
    ],

    navbar: {
      title: 'Ajuda Fiado Zap',
      logo: {
        alt: 'Fiado Zap',
        src: 'img/fiadozap.png',
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