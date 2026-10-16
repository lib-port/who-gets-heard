import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repositoryUrl = 'https://github.com/lib-port/who-gets-heard';

const config: Config = {
  title: 'Who Gets Heard',
  tagline: 'The Work Behind the Work',

  url: 'https://lib-port.github.io',
  baseUrl: '/who-gets-heard/',
  organizationName: 'lib-port',
  projectName: 'who-gets-heard',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

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
          sidebarPath: './sidebars.ts',
        },
        blog: false,
      } satisfies Preset.Options,
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
          label: 'Book',
        },
        {
          to: '/worksheet',
          label: 'Worksheet',
          position: 'left',
        },
        {
          href: repositoryUrl,
          target: '_self',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright:
        'Copyright © 2026 lib-port. Book content is licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a> and <a href="https://pages.github.com/">GitHub Pages</a>.',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
