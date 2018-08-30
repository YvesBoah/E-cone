import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Pages/Acceuil'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{
  	  path: '*',
      redirect: '/'
     
  	},
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil
      // meta:{Layout:'Simple'}
    }
  ]
})
