module.exports = {
  title: 'reactpatterns',
  tagline: 'React Patterns, techniques, tips and tricks in development for Ract developer.',
  url: 'https://reactpatterns.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'reactpatterns', // Usually your GitHub org/user name.
  projectName: 'reactpatterns', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like reactpatterns, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/reactpatterns/reactpatterns">GitHub</a>! ⭐️',
      backgroundColor: '#ea8684',
      isCloseable: false,
    },
    navbar: {
      title: 'reactpatterns',
      logo: {
        alt: 'React Patterns',
        src: 'img/reactpatterns.png',
        href: '/docs',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Home',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/reactpatterns',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/reactjspatterns',
            },
            {
              label: 'Facebook',
              href: 'https://web.facebook.com/ReactJSPatterns',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/reactpatterns',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/reactpatterns',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Patterns Org.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
