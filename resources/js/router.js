import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './views/NotFound'
import Index from './views/Index'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Index },
        { path: '*', component: NotFound }
    ],
    mode: 'history'
})