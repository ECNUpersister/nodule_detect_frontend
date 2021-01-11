import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import Login from '../components/Login'
import Layout from "../components/Layout";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    // 下面都是固定的写法
    {
      path:'/',
      component:Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Layout,
      meta:{
        requireAuth:true
      }
    }
  ]
})

