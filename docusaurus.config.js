// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Karing - Clash compatible & Powerful proxy utility',
    tagline: '兼容Clash的通用网络代理工具, 支持clash/v2ray/ss订阅',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://karing.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'KaringX', // Usually your GitHub org/user name.
    projectName: 'karing-docu', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    onBrokenLinks: 'throw', //'ignore' | 'log' | 'warn' | 'throw'
    onBrokenMarkdownLinks: 'warn',
    onBrokenAnchors: 'ignore',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Pre routing uri compatible with download/faq
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/KaringX/karing-docu/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    blogSidebarCount: 15,
                    onUntruncatedBlogPosts: 'ignore',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                gtag: { // google analytics
                    trackingID: 'G-44BN2EHX2M',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social cardsocial card
            image: 'img/karing-main.webp',
            navbar: {
                title: 'Karing - Powerful proxy utility',
                logo: {
                    alt: 'Karing App',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/KaringX/karing',
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
                                label: 'Tutorial',
                                to: '/quickstart',
                            },
                            {
                                label: 'FAQ',
                                to: '/faq',
                            },
                            {
                                label: 'Download',
                                to: '/download',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Contact us',
                                to: '/clashforios-offical',
                            },
                            {
                                label: 'GitHub Issues',
                                href: 'https://github.com/KaringX/karing-docu/issues',
                            },
                            {
                                label: 'Telegram',
                                href: 'https://t.me/KaringApp',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: '捐赠 | donate',
                                href: '/donate',
                            },
                            {
                                label: 'Developer Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/KaringX/karing-docu',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Karing App, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    scripts: [
        {
            src: '/js/setting.js?v=0617',
            async: true,
        },
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6660718818470329',
            async: true,
            crossorigin: 'anonymous',
        }
    ],
    // plugins: [
    //     [
    //         '@docusaurus/plugin-client-redirects',
    //         {
    //             redirects: [{
    //                 from: '/donate', // 自定义的路径
    //                 to: '/newuser', // 目标外部链接
    //             },]
    //         },//END redirects
    //     ],
    // ],
};

export default config;
