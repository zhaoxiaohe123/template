import Vue from 'vue'
import Router from 'vue-router'

import Layout from 'views/layout/layout'

import settings from './modules/settings'
import reportList from './modules/reportList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: r =>
        require.ensure([], () => r(require('views/login/login'), 'login')),
      hidden: true
    },
    { path: '*', redirect: '/home', hidden: true },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Home',
      hidden: true,
      children: [
        {
          path: 'home',
          component: r =>
            require.ensure([], () => r(require('views/home/home'), 'home')),
          meta: { title: 'Home', needLogin: true }
        }
      ]
    },
    reportList,
    settings
  ]
})
