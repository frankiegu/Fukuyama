import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 基础视图
const Homepage = () => import('../views/Home_page/Home_page.vue')
const popular = () => import('../views/Category/Fire.vue')
const video = () => import('../views/video/video-play.vue')
const mine = () => import('../views/Mine/mine.vue')
const login = () => import('../views/login/Login.vue')
const register = () => import('../views/register/Register.vue')

// 个人详细信息
const accountFunc = () => import('../views/Mine/account-func')
const account = () => import('../views/Mine/account.vue')
const accountInfo = () => import('../views/Mine/account-info');

//分类页排序
const AnimeHotList = () => import('../components/category-anime');
const AnimeTimeList = () => import('../components/category-anime');
const TVlist = () => import('../views/Category/category-TV');
const FilmList = () => import('../views/Category/category-film');

const Details = () => import('../views/video/video-details')


const MetaInfo = {
    title: "Youtuba"
}
const router = new Router({

    mode: 'history',
    routes: [
        {
            path: '/'
            , redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Homepage,

        },
        {
            path: '/popular',
            name: 'popular',
            component: popular,

            children: [
                {
                    path: 'anime/hot',
                    name: 'hot',
                    component: AnimeHotList,

                },
                {
                    path: 'anime/time',
                    name: 'time',
                    component: AnimeTimeList,
                },
                {
                    path: 'film',
                    component: FilmList,

                },
                {
                    path: 'TV',
                    component: TVlist,

                }
            ]

        },
        {
            path: '/video/:id/:episode',
            name: "VideoDetail",
            component: video,

        },
        {
            path: '/details/:id',
            name: "details",
            component: Details,

        },
        {
            path: '/mine',
            name: 'MMM',
            component: mine,
            children: []
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            component: register,
        },
        {
            path: '/account',
            name: 'account',
            component: account,
            children: [
                {
                    path: 'info',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
                    name: 'info',
                    component: accountInfo,
                }
                , {
                    path: 'func',//账号详细功能 eg: 设置、premium
                    component: accountFunc,
                }
            ]
        }
    ]
})


router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {//判断是否有标题
        document.title = to.meta.title
    } else {
        document.title = MetaInfo.title
    }
    next()//执行进入路由，如果不写就不会进入目标页
})

export default router

