import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import News from '@/components/News.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/news',
            component:News
        },
        {
            path:'/home',
            component:Home
        }
    ]
});


export default router