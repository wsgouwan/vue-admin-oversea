import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/index.vue'
import home from '../views/home.vue';
import page404 from '../views/404.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            hidden: true
        },
        {
            path: '/404',
            name: 'notFound',
            component: page404,
            hidden: true
        },
        {
            path: '/',
            name: 'home',
            meta: {
                desc: '用户',
            },
            component: home,
            children: [
                {path: '/user/feedback', name: 'feedback', meta: {desc: '用户反馈'}, component: require('../views/user/feedback/index.vue')}
            ]
        },

        {
            path: '/',
            name: 'home',
            meta: {
                desc: '版本'
            },
            component: home,
            children: [
                {path: '/version/update', name: 'updateVersion', meta: {desc: '版本更新'}, component: require('../views/version/update/index.vue')}
            ]
        },

        {
            path: '*',
            hidden: true,
            redirect: { path: '/404' }
        }
    ]
})
