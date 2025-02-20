<script setup>
const techStacks = [
  {
    category: '前端框架',
    items: [
      { 
        name: 'Vue.js', 
        level: 90, 
        icon: '⚡', 
        color: '#42b883',
        link: 'https://cn.vuejs.org/'
      },
      { 
        name: 'React', 
        level: 80, 
        icon: '⚛️', 
        color: '#61dafb',
        link: 'https://zh-hans.react.dev/'
      }
    ]
  },
  {
    category: 'UI框架',
    items: [
      { 
        name: 'Element Plus', 
        level: 85, 
        icon: '🎨', 
        color: '#409eff',
        link: 'https://element-plus.org/zh-CN/'
      },
      { 
        name: 'Ant Design', 
        level: 80, 
        icon: '🐜', 
        color: '#1890ff',
        link: 'https://ant.design/index-cn'
      }
    ]
  },
  {
    category: '构建工具',
    items: [
      { 
        name: 'Vite', 
        level: 85, 
        icon: '⚡', 
        color: '#646cff',
        link: 'https://cn.vitejs.dev/'
      },
      { 
        name: 'Webpack', 
        level: 75, 
        icon: '📦', 
        color: '#8dd6f9',
        link: 'https://webpack.docschina.org/'
      }
    ]
  },
  {
    category: '版本控制',
    items: [
      { 
        name: 'Git', 
        level: 88, 
        icon: '📝', 
        color: '#f54d27',
        link: 'https://git-scm.com/'
      },
      { 
        name: 'GitHub', 
        level: 85, 
        icon: '🐱', 
        color: '#24292e',
        link: 'https://github.com/'
      }
    ]
  },
  {
    category: '后端技术',
    items: [
      { 
        name: 'Node.js', 
        level: 75, 
        icon: '🟢', 
        color: '#339933',
        link: 'https://nodejs.org/zh-cn'
      },
      { 
        name: 'Express', 
        level: 70, 
        icon: '🚂', 
        color: '#000000',
        link: 'https://expressjs.com/'
      }
    ]
  },
  {
    category: '数据库',
    items: [
      { 
        name: 'MongoDB', 
        level: 70, 
        icon: '🍃', 
        color: '#47a248',
        link: 'https://www.mongodb.com/'
      },
      { 
        name: 'MySQL', 
        level: 65, 
        icon: '💾', 
        color: '#4479a1',
        link: 'https://www.mysql.com/'
      }
    ]
  }
]
</script>

<template>
  <div class="tech-container">
    <h1 class="title">技术栈</h1>
    
    <div class="masonry-grid">
      <div v-for="stack in techStacks" 
           :key="stack.category" 
           class="tech-category"
           :style="{ animationDelay: $index * 0.1 + 's' }">
        <h2>{{ stack.category }}</h2>
        
        <div class="tech-items">
          <div v-for="item in stack.items" 
               :key="item.name"
               class="tech-item"
               :style="{ '--item-color': item.color }">
            <div class="tech-header">
              <span class="tech-icon">{{ item.icon }}</span>
              <a :href="item.link" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="tech-name">
                {{ item.name }}
              </a>
            </div>
            
            <div class="progress-bar">
              <div class="progress" :style="{ width: item.level + '%' }">
                <span class="level">{{ item.level }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-container {
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

.masonry-grid {
  columns: 3;
  column-gap: 1.5rem;
}

.tech-category {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-category {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.tech-category h2 {
  color: #42b883;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
}

.tech-category h2::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(45deg, #42b883, #35495e);
  border-radius: 3px;
}

.tech-items {
  display: grid;
  gap: 1rem;
}

.tech-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid var(--item-color, #42b883);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateX(5px);
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tech-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.tech-icon {
  font-size: 1.5rem;
}

.tech-name {
  font-weight: 500;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-right: 1.2em;
}

.tech-name::after {
  content: '↗';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
  opacity: 0;
  transition: all 0.3s ease;
}

.tech-name:hover {
  color: var(--item-color);
  padding-right: 1.5em;
}

.tech-name:hover::after {
  opacity: 1;
  transform: translate(0.2em, -50%);
}

.progress-bar {
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: var(--item-color, #42b883);
  border-radius: 3px;
  position: relative;
  transition: width 1s ease;
}

.level {
  position: absolute;
  right: 0.5rem;
  top: -1.5rem;
  font-size: 0.8rem;
  color: #666;
}

@media (max-width: 1024px) {
  .masonry-grid {
    columns: 2;
  }
}

@media (max-width: 768px) {
  .tech-container {
    padding: 1rem;
    padding-bottom: 5rem;
  }

  .masonry-grid {
    columns: 1;
  }

  .title {
    font-size: 2rem;
  }

  .tech-category {
    margin-bottom: 1rem;
  }
}
</style> 