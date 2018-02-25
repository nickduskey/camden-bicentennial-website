import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RegisterPage from '@/components/RegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
