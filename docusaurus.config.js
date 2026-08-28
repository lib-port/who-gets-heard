const repositoryUrl = 'https://github.com/lib-port/who-gets-heard';

const config = {
  title: 'Who Gets Heard',
  tagline: 'The Work Behind the Work',

  url: 'https://lib-port.github.io',
  baseUrl: '/who-gets-heard/',
  organizationName: 'lib-port',
  projectName: 'who-gets-heard',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          include: ['[0-1][0-9]-*.md'],
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'organisational politics, workplace influence, decision-making, accountability, employee voice',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Who Gets Heard',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bookSidebar',
          position: 'left',
          label: 'Contents',
        },
        {
          href: repositoryUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright:
        'Copyright © 2026 lib-port. Book content is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a> and <a href="https://pages.github.com/">GitHub Pages</a>.'
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  },
};

module.exports = config;
