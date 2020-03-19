import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Checkout from '../components/Checkout'
import MyCart from '../components/MyCart'
import SignIn from '../components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'Home', component: Home
    },
    {
      path: '/checkout', component: Checkout
    },
      {
      path: '/myCart', component:  MyCart
    },
    {
      path: '/signin', component:  SignIn
    }
  ]
})
