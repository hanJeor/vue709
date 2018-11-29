import Vue from 'vue'
import Router from 'vue-router'
import HomPage from '@/components/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomPage',
      component: HomPage
    }
  ]
})
