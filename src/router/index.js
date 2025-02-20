import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import TechStack from '../components/TechStack.vue'
import About from '../components/About.vue'
import ProjectGarden from '../components/ProjectGarden.vue'
import ProjectService from '../components/ProjectService.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/tech',
    name: 'tech',
    component: TechStack
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/project/garden',
    name: 'projectGarden',
    component: ProjectGarden
  },
  {
    path: '/project/service',
    name: 'projectService',
    component: ProjectService
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