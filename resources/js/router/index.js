import { createRouter, createWebHistory } from 'vue-router'

import productIndex from '../components/products/index.vue'
import notFound from '../components/notFound.vue'
import create from '../components/products/create.vue'

const routes = [

    {
        path: '/',
        component: productIndex
    },

    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },

    {
        path: '/create',
        component: create
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
