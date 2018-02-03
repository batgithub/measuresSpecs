import Vue from 'vue'
import Router from 'vue-router'
import Measures from '@/components/Measures'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Measures',
      component: Measures
    },
    {
     path: '/posts',
     name: 'Posts',
     component: Posts
    }
  ]
})
