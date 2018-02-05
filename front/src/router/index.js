import Vue from 'vue'
import Router from 'vue-router'
import Measures from '@/components/Measures'
import Explorer from '@/components/Explorer'
var pathToRegexp = require('path-to-regexp')

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*/?specs',
      name: 'Measures',
      component: Measures
    },
    {
      path: '/*',
      name: 'Explorer',
      component: Explorer
    }
  ]
})
