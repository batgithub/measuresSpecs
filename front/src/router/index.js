import Vue from 'vue'
import Router from 'vue-router'
import Measures from '@/components/Measures'
import Explorer from '@/components/Explorer'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/e',
      name: 'Explorer',
      component: Explorer
    },
    {
      path: '/m',
      name: 'Measures',
      component: Measures
    }
  ]
})
