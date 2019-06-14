import Vue from 'vue'
import Router from 'vue-router'
import ResumeHome from '@/views/ResumeHome'
import ResumeProject from '@/views/ResumeProject'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ResumeHome',
      component: ResumeHome
    },{
      path: '/Project',
      name: 'ResumeProject',
      component: ResumeProject
    }
  ]
})
