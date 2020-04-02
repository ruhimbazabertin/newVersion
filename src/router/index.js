import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Checkout from '../components/Checkout'
import MyCart from '../components/MyCart'
import SignIn from '../components/SignIn'
import Registration from '../components/Registration'
import JobCardDetail from '../components/JobCardDetail'
import Dashboard from '../Board/Dashboard'

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
    },
    {
      path: '/registration', component: Registration
    },
    {
      path: '/jobCardDetail', component: JobCardDetail
    },
    {
      path: '/Dashboard', component: Dashboard
    }
    
  ]
})
