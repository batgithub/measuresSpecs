import Vue from 'vue'
import Router from 'vue-router'
import Explorer from '@/components/Explorer'
import Doc from '@/components/Doc'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/measures/'
    },

    {
      path: '/measures/*',
      name: 'Explorer',
      component: Explorer
      },
      {
        path: '/doc/*',
        name: 'Doc',
        component: Doc
      }
  ]
})
