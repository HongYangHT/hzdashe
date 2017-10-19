import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// views
const Index = () => import(/* webpackChunkName: "index" */'@/views/index.vue')
const Productlist = () => import(/* webpackChunkName: "productlist" */'@/views/productlist.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: Productlist
    }
  ]
})
