export default {
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ("../views/home.vue")
        },
        {
            path: "/webside/aboutUs", //有关我们
            name: 'aboutUs',
            component: () =>
                import ("../views/aboutUs.vue")
        },
        {
            path: "/webside/contributeNeedKnow", //投稿须知
            name: 'contributeNeedKnow',
            component: () =>
                import ("../views/contributeNeedKnow.vue")
        },
        {
            path: '/webside/newspaperTrends', //本刊动态
            name: 'newspaperTrends',
            component: () =>
                import ("../views/newspaperTrends.vue")
        },
        {
            path: '/webside/news', //行业资讯
            name: 'news',
            component: () =>
                import ("../views/news.vue")
        },
        {
            path: '/webside/webread', //在线阅读
            name: 'webread',
            component: () =>
                import ("../views/webread.vue")
        },
        {
            path: '/webside/webContribute', //在线投稿
            name: 'webContribute',
            component: () =>
                import ("../views/webContribute.vue")
        },
        {
            path: '/webside/ceeMonograph', //高考专刊
            name: 'ceeMonograph',
            component: () =>
                import ("../views/ceeMonograph.vue")
        },
        {
            path: '/webside/feedback', //意见反馈
            name: 'feedback',
            component: () =>
                import ("../views/feedback.vue")
        },
        {
            path: '/webside/details/:id/:channelId', //意见反馈  //使用动态路由
            name: 'book',
            component: () =>
                import ("../views/book.vue")
        }
    ],
    mode: "history",
}