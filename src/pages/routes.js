import { createRouter } from 'vue-router'
import Homepage from './home/Home.vue';
import Library from './library/Library.vue';

const routes = [
    {
        path: '/',
        component: Homepage
    },

    {
        path: '/library',
        component: Library
    },
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}