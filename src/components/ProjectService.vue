<script setup>
// 项目详情数据
const project = {
  name: '售后服务系统',
  description: '基于Vue.js开发的现代化售后服务管理系统',
  overview: '一个完整的售后服务管理平台，提供工单管理、客户服务、数据统计等功能。采用前后端分离架构，实现高效的售后服务流程。',
  features: [
    '智能工单分配和管理',
    '客户信息管理和跟踪',
    '实时服务状态监控',
    '多维度数据统计分析',
    '客户满意度评价系统',
    '售后知识库管理'
  ],
  technologies: [
    {
      name: 'Vue.js',
      version: '3.x',
      description: '使用Composition API构建高性能界面'
    },
    {
      name: 'Element Plus',
      version: '2.x',
      description: '使用企业级UI组件库'
    },
    {
      name: 'ECharts',
      version: '5.x',
      description: '实现数据可视化展示'
    },
    {
      name: 'Axios',
      version: '1.x',
      description: '处理API请求和响应'
    }
  ],
  architecture: {
    frontend: [
      'Vue3 + TypeScript开发',
      'Pinia状态管理',
      'Vue Router路由管理',
      'WebSocket实时通信'
    ],
    backend: [
      'Node.js + Koa2',
      'MySQL数据库',
      'Redis缓存',
      'WebSocket服务'
    ]
  },
  performance: [
    'WebSocket长连接优化',
    '大数据量表格虚拟滚动',
    '图表按需渲染',
    '页面按需加载'
  ],
  demoLink: 'https://demo.service-system.com',
  githubLink: 'https://github.com/xxx/service-system'
}
</script>

<template>
  <div class="project-container">
    <div class="project-header">
      <h1>{{ project.name }}</h1>
      <p class="description">{{ project.description }}</p>
      <p class="overview">{{ project.overview }}</p>
      
      <div class="action-buttons">
        <a :href="project.demoLink" 
           target="_blank" 
           class="demo-button">
          在线演示
        </a>
        <a :href="project.githubLink" 
           target="_blank" 
           class="github-button">
          GitHub
        </a>
      </div>
    </div>

    <div class="project-content">
      <section class="features">
        <h2>主要功能</h2>
        <ul>
          <li v-for="feature in project.features" 
              :key="feature"
              class="feature-item">
            {{ feature }}
          </li>
        </ul>
      </section>

      <section class="tech-stack">
        <h2>技术栈</h2>
        <div class="tech-grid">
          <div v-for="tech in project.technologies" 
               :key="tech.name" 
               class="tech-card">
            <h3>{{ tech.name }} <span class="version">{{ tech.version }}</span></h3>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </section>

      <section class="architecture">
        <h2>项目架构</h2>
        <div class="arch-grid">
          <div class="arch-column">
            <h3>前端技术</h3>
            <ul>
              <li v-for="item in project.architecture.frontend" 
                  :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="arch-column">
            <h3>后端技术</h3>
            <ul>
              <li v-for="item in project.architecture.backend" 
                  :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="performance">
        <h2>性能优化</h2>
        <ul class="performance-list">
          <li v-for="item in project.performance" 
              :key="item">
            {{ item }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.project-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 0.8s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.overview {
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.demo-button,
.github-button {
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.demo-button {
  background: #42b883;
  color: white;
}

.github-button {
  background: #24292e;
  color: white;
}

.demo-button:hover,
.github-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

section:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

section h2 {
  color: #42b883;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  position: relative;
  padding-left: 1rem;
}

section h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: #42b883;
  border-radius: 2px;
}

.feature-item {
  padding: 0.8rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
  transition: all 0.3s ease;
}

.feature-item:hover {
  color: #42b883;
  transform: translateX(5px);
}

.feature-item::before {
  content: "→";
  color: #42b883;
  position: absolute;
  left: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.tech-card {
  background: #f8f9fa;
  padding: 1.2rem;
  border-radius: 8px;
  border-left: 4px solid #42b883;
}

.tech-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.version {
  color: #666;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.arch-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.arch-column h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.arch-column ul {
  list-style: none;
  padding: 0;
}

.arch-column li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.arch-column li::before {
  content: "•";
  color: #42b883;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.performance-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.performance-list li {
  background: #f0f7f4;
  padding: 1rem;
  border-radius: 8px;
  color: #42b883;
  text-align: center;
  transition: all 0.3s ease;
}

.performance-list li:hover {
  transform: translateY(-3px);
  background: #42b883;
  color: white;
}

@media (max-width: 768px) {
  .project-container {
    padding: 1rem;
  }

  .project-content {
    grid-template-columns: 1fr;
  }

  .arch-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .demo-button,
  .github-button {
    width: 100%;
    text-align: center;
  }
}
</style> 