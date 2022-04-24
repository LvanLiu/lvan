module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: "lvan's blog",
    description: '一个分享 Java 相关技术的博客',
    base: "/lvan/",
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        navbar: []
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    }
                },
            },
        ],
    ],
}