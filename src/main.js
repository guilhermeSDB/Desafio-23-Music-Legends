import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'

import createRouter from './pages/routes.js'
import './assets/css/index.css'
import App from './App.vue'

const router = createRouter(createWebHistory())

createApp(App).use(router).mount('#app')
