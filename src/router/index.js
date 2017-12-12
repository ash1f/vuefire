import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
