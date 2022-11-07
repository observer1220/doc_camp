// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "貓鼻頭露營莊園",
  tagline: '永恆的國境之南',
  url: 'https://github.com',
  baseUrl: '/doc_camp/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'observer1220', // Usually your GitHub org/user name.
  projectName: 'doc_camp', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "cf8e1169aabead63a438c734bf145b93",
        appId: "EQ378FJWR1",
        indexName: "doc_camp",
      },
      navbar: {
        title: '貓鼻頭露營莊園',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '營區介紹',
          },
          // { to: '/blog', label: '生態旅遊', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '營區介紹',
            items: [
              {
                label: '露營設施',
                to: '/docs/intro',
              },
              {
                label: '營位介紹',
                to: '/doc_camp/docs/category/營位介紹',
              },
              {
                label: '交通方式',
                to: '/doc_camp/docs/聯絡我們',
              },
            ],
          },
          {
            title: '生態旅遊',
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //   },
            //   {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            //   },
            //   {
            //     label: 'Twitter',
            //     href: 'https://twitter.com/docusaurus',
            //   },
            // ],
          },
          {
            title: 'More',
            // items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
            //   {
            //     label: 'GitHub',
            //     href: 'https://github.com/facebook/docusaurus',
            //   },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 貓鼻頭露營莊園－箴雅設計`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
