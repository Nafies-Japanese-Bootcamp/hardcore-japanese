import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Japanese Bootcamp',
  tagline: 'JLPT N2 & Business-level Japanese in 8 Months',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hardcore-japanese.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nafies-Japanese-Bootcamp', // Usually your GitHub org/user name.
  projectName: 'hardcore-japanese', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs', // Changed from '/' to '/docs'
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies import('@docusaurus/preset-classic').Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/japanese-learning-social-card.jpg',
    navbar: {
      title: 'Japanese Hardcore Learning ',
      logo: {
        alt: 'Japanese Learning Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learningSidebar',
          position: 'left',
          label: 'Learning Plan',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Learning Resources',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learning Plan',
          items: [
            {
              label: 'Phase 1: Foundation',
              to: '/phase-1',
            },
            {
              label: 'Phase 2: Speed Climb',
              to: '/phase-2',
            },
            {
              label: 'Phase 3: Business',
              to: '/phase-3',
            },
          ],
        },
        {
          title: 'Learning Resources',
          items: [
            {
              label: 'Grammar',
              to: '/resources/grammar',
            },
            {
              label: 'Vocabulary',
              to: '/resources/vocabulary',
            },
            {
              label: 'Kanji',
              to: '/resources/kanji',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Japanese Hardcore Learning `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies import('@docusaurus/preset-classic').ThemeConfig,
};

export default config;
