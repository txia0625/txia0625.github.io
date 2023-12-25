// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tong',
  tagline: 'Share what I learned.',
  url: 'https://messiahhh.github.io/',
  baseUrl: '/blog/', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'txia0625', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  plugins: ['@docusaurus/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'no-referrer'
      }
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
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
      docs: {
        sidebar: {
          hideable: true
        }
      }, 
      navbar: {
        title: 'Tong\'s Blog',
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'start',
            position: 'right',
            label: 'Tech Notes',
          },
          {to: 'blog/test', label: 'Others', position: 'right'},
          {
            href: 'https://github.com/txia0625',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/tong-xia/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      }, 
      prism: { 
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['rust'],
      }, 
      colorMode: {
        respectPrefersColorScheme: true
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BWG0DEIDEP',
    
        // Public API key: it is safe to commit it
        apiKey: 'd3f9fff64e1510e7299229fb32996203',
    
        indexName: 'txia0625',
      }
    }),
};

module.exports = config;
