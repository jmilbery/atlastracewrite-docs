// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AtlasTraceWrite',
  tagline: 'Speak it. Edit it. Trace it. Handwriting practice for young learners.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jmilbery.github.io',
  baseUrl: '/atlastracewrite-docs/',

  organizationName: 'jmilbery',
  projectName: 'atlastracewrite-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',

      navbar: {
        title: 'AtlasTraceWrite',
        logo: {
          alt: 'AtlasTraceWrite Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            href: 'https://jmilbery.github.io/AtlasOne/privacy.html',
            label: 'Privacy',
            position: 'right',
          },
          {
            href: 'https://jmilbery.github.io/AtlasOne/support.html',
            label: 'Support',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [
          {
            title: 'Guide',
            items: [
              { label: 'Getting Started', to: '/' },
              { label: 'Settings', to: '/settings' },
              { label: 'Troubleshooting', to: '/troubleshooting' },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://jmilbery.github.io/AtlasOne/privacy.html',
              },
              {
                label: 'Support',
                href: 'https://jmilbery.github.io/AtlasOne/support.html',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} AtlasTraceWrite. All rights reserved.`,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
