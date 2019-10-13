import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Homepage = () => import('../views/Home_page/Home_page.vue')
const category = () => import('../views/Category/category.vue')
const cart = () => import('../views/Cart/cart.vue')
const mine = () => import('../views/Mine/mine.vue')

export default new Router({
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
            path: '/category',
            name: 'category',
            component: category,

        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,

        },
        {
            path: '/mine',
            name: 'mine',
            component: mine,
        },
    ]
})
