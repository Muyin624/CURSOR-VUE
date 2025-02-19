import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
  // 这里可以添加更多路由
]

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 历史记录模式，设置基础路径
  history: createWebHistory('/CURSOR-VUE/'),
  routes
})

export default router 