module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: "coding with lvan",
    description: 'Java 技术栈 🧑‍💻  | 坚持原创 🎨',
    base: "/lvan/",
    head: [['link', {rel: 'icon', href: '/lvan/images/logo.png'}]],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        navbar: []
    },
    plugins: [
        [
            '@vuepress/docsearch',
            {
                apiId: 'REKGOD84BF',
                apiKey: '5bbef8c73ba214a090d9f8d32e1080e9',
                indexName: 'blog',
                locales: {
                    '/': {
                        placeholder: 'Search Documentation',
                        translations: {
                            button: {
                                buttonText: 'Search Documentation',
                            },
                        },
                    }
                },
            },
        ],
    ],
}