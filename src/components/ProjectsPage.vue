<script setup>
const projects = [
  {
    name: '电商管理系统',
    description: '基于Vue3和Element Plus的现代化电商管理平台',
    features: [
      '商品管理与分类',
      '订单管理与处理',
      '用户管理与权限控制',
      '数据统计与分析'
    ],
    technologies: ['Vue3', 'Element Plus', 'ECharts', 'Node.js', 'MySQL'],
    image: '🛍️'
  },
  {
    name: '在线教育平台',
    description: '支持直播课程和录播课程的在线教育系统',
    features: [
      '课程管理与播放',
      '实时互动直播',
      '作业与考试系统',
      '学习进度追踪'
    ],
    technologies: ['Vue3', 'WebRTC', 'Socket.io', 'Express', 'MongoDB'],
    image: '📚'
  },
  {
    name: '社交媒体应用',
    description: '类似Twitter的社交媒体平台',
    features: [
      '动态发布与分享',
      '实时消息通知',
      '用户关注系统',
      '话题标签功能'
    ],
    technologies: ['Vue3', 'Vuex', 'WebSocket', 'Node.js', 'Redis'],
    image: '💬'
  },
  {
    name: '任务管理系统',
    description: '团队协作的项目管理工具',
    features: [
      '任务创建与分配',
      '进度追踪',
      '团队协作',
      '数据报表'
    ],
    technologies: ['Vue3', 'TypeScript', 'Element Plus', 'Express', 'PostgreSQL'],
    image: '📋'
  },
  {
    name: '花园商城系统',
    description: '基于Vue.js开发的现代化商城系统',
    features: [
      '响应式设计',
      '用户友好界面',
      '购物车功能',
      '订单管理'
    ],
    technologies: ['Vue.js', 'Vuex', 'Vue Router', 'Element Plus'],
    image: '🌺'
  },
  {
    name: '售后服务系统',
    description: '现代化的售后服务管理系统',
    features: [
      '工单管理',
      '客户管理',
      '服务跟踪',
      '评价反馈'
    ],
    technologies: ['Vue.js', 'Element Plus', 'ECharts', 'Axios'],
    image: '🛠️'
  }
]
</script>

<template>
  <div class="projects-container">
    <h1 class="title">项目展示</h1>
    
    <div class="projects-grid">
      <div v-for="(project, index) in projects" 
           :key="project.name" 
           class="project-card"
           :style="{ '--index': index }">
        <div class="project-header">
          <span class="project-icon">{{ project.image }}</span>
          <h2>{{ project.name }}</h2>
        </div>
        
        <p class="description">{{ project.description }}</p>
        
        <div class="features">
          <h3>主要功能</h3>
          <ul>
            <li v-for="feature in project.features" 
                :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="technologies">
          <h3>技术栈</h3>
          <div class="tech-tags">
            <span v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.projects-grid {
  column-count: 3;
  column-gap: 2rem;
  padding: 1rem;
}

.project-card {
  break-inside: avoid;
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f7f4;
}

.project-icon {
  font-size: 2.5rem;
  background: #f0f7f4;
  padding: 0.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.project-card:hover .project-icon {
  transform: scale(1.1) rotate(5deg);
}

.project-header h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 0;
  background: linear-gradient(45deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
}

.features h3,
.technologies h3 {
  color: #42b883;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1rem;
}

.features h3::before,
.technologies h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 16px;
  background: #42b883;
  border-radius: 2px;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  color: #666;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  transition: transform 0.2s ease;
}

.features li:hover {
  transform: translateX(5px);
  color: #42b883;
}

.features li::before {
  content: "→";
  color: #42b883;
  position: absolute;
  left: 0;
  transition: transform 0.2s ease;
}

.features li:hover::before {
  transform: translateX(3px);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #f0f7f4;
  color: #42b883;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.tech-tag:hover {
  background: #42b883;
  color: #fff;
  transform: translateY(-2px);
  border-color: #42b883;
}

@media (max-width: 1200px) {
  .projects-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
    padding-bottom: 5rem;
  }

  .title {
    font-size: 2rem;
  }

  .projects-grid {
    column-count: 1;
    padding: 0.5rem;
  }

  .project-card {
    margin-bottom: 1.5rem;
  }
}
</style> 