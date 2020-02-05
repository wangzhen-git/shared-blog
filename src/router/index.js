import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Index/template.vue')
    },
    {
        path: '/detail/:blogId',
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Detail/template.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Login/template.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Register/template.vue')
    },
    {
        path: '/edit/:blogId',
        name: 'edit',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Edit/template.vue'),
        meta: {requiresAuth: true}

    },
    {
        path: '/user/:userId',
        component: () => import(/* webpackChunkName: "about" */ '../pages/User/template.vue'),
    },
    {
        path: '/create',
        name: 'create',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Create/template.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/my',
        component: () => import(/* webpackChunkName: "about" */ '../pages/my/template.vue'),
        meta: {requiresAuth: true}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        store.dispatch('checkLogin').then(isLogin => {
            if (!store.getters.isLogin) {
                next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                })
            } else {
                next()
            }
        })
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router
