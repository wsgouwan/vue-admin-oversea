// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

router.beforeEach((to, from, next) => {
    // NProgress.start();
    console.log(to);
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    // if (!user && to.path != '/login') {
    //     next({path: '/login'})
    // } else {
    //     next()
    // }
    next()
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});



