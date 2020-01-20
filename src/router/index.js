import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
      },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
