import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Homepage = () => import('../views/Home_page/Home_page.vue')
const popular = () => import('../views/Category/fire.vue')
const video = () => import('../views/video/video.vue')
const mine = () => import('../views/Mine/mine.vue')
const login = () => import('../views/login/Login.vue')
const register = () => import('../views/register/Register.vue')
const account = () => import('../views/Mine/account.vue')
const search = ()=> import('../views/Mine/account.vue')
const MetaInfo = {
    title: "Youtuba"
}
const router = new Router({

    mode: 'history',
    base: process.env.BASE_URL,
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

        },
        {
            path: '/video/:id',
            name: "VideoDetail",
            component: video,

        },
        {
            path: '/mine',
            name: 'mine',
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
            component: account
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

