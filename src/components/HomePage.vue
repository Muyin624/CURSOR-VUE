<script setup>
import { ref } from 'vue'

// 个人信息数据
const profile = {
  name: "Muyin",
  title: "Frontend Developer",
  description: "热爱前端开发，专注于Vue.js技术栈",
  avatar: "🧑‍💻", // 可以替换为实际的头像图片URL
  skills: [
    { name: 'Vue.js', icon: '⚡', color: '#42b883' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'Node.js', icon: '🟢', color: '#339933' }
  ]
}

// 项目列表
const projects = ref([
  {
    name: "花园商城系统",
    description: "基于Vue.js开发的现代化商城系统，提供完整的购物体验",
    icon: "🛍️",
    tags: ['Vue.js', 'Element Plus', 'Vuex'],
    link: "/CURSOR-VUE/project/garden"
  },
  {
    name: "售后服务系统",
    description: "现代化的售后服务管理系统，提供完整的工单管理和客户服务解决方案",
    icon: "🛠️",
    tags: ['Vue.js', 'ECharts', 'Express'],
    link: "/CURSOR-VUE/project/service"
  }
])

// 社交媒体链接
const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Muyin624",
    icon: "🐱"
  },
  {
    name: "Blog",
    link: "#",
    icon: "📝"
  }
]
</script>

<template>
  <div class="home-container">
    <!-- 个人信息区域 -->
    <section class="hero-section">
      <div class="profile-card">
        <div class="avatar">{{ profile.avatar }}</div>
        <h1 class="name">{{ profile.name }}</h1>
        <h2 class="title">{{ profile.title }}</h2>
        <p class="description">{{ profile.description }}</p>
        
        <!-- 技能标签 -->
        <div class="skills">
          <div v-for="skill in profile.skills" 
               :key="skill.name" 
               class="skill-tag"
               :style="{ '--skill-color': skill.color }">
            <span class="skill-icon">{{ skill.icon }}</span>
            {{ skill.name }}
          </div>
        </div>
        
        <!-- 社交媒体链接 -->
        <div class="social-links">
          <a v-for="social in socialLinks" 
             :key="social.name" 
             :href="social.link" 
             target="_blank"
             class="social-link">
            <span class="icon">{{ social.icon }}</span>
            {{ social.name }}
          </a>
        </div>
      </div>
    </section>

    <!-- 项目展示区域 -->
    <section class="projects-section">
      <h2 class="section-title">我的项目</h2>
      <div class="projects-container">
        <!-- 左侧项目 -->
        <div class="project-column">
          <div class="project-card">
            <div class="project-icon">{{ projects[0].icon }}</div>
            <div class="project-content">
              <h3>{{ projects[0].name }}</h3>
              <p>{{ projects[0].description }}</p>
              <div class="project-tags">
                <span v-for="tag in projects[0].tags" 
                      :key="tag" 
                      class="tag">
                  {{ tag }}
                </span>
              </div>
              <a :href="projects[0].link" 
                 class="project-link">
                查看详情
              </a>
            </div>
          </div>
        </div>

        <!-- 右侧项目 -->
        <div class="project-column">
          <div class="project-card">
            <div class="project-icon">{{ projects[1].icon }}</div>
            <div class="project-content">
              <h3>{{ projects[1].name }}</h3>
              <p>{{ projects[1].description }}</p>
              <div class="project-tags">
                <span v-for="tag in projects[1].tags" 
                      :key="tag" 
                      class="tag">
                  {{ tag }}
                </span>
              </div>
              <a :href="projects[1].link" 
                 class="project-link">
                查看详情
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.1) 0%, rgba(53, 73, 94, 0.1) 100%);
  border-radius: 16px;
  z-index: -1;
}

.profile-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  animation: fadeInUp 1s ease;
}

.avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* 技能标签 */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.skill-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #f5f5f5;
  color: var(--skill-color);
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: var(--skill-color);
  color: white;
}

.skill-icon {
  font-size: 1.2rem;
}

/* 社交链接 */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  background: #f5f5f5;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #eee;
  transform: translateY(-2px);
}

/* 项目区域 */
.projects-section {
  padding: 2rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(45deg, #42b883, #35495e);
  border-radius: 2px;
}

/* 项目区域 - 新样式 */
.projects-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  perspective: 1000px;
}

.project-column {
  flex: 1;
  animation: fadeInSlide 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px) rotateY(10deg);
}

.project-column:first-child {
  animation-delay: 0.2s;
  transform-origin: left center;
}

.project-column:last-child {
  animation-delay: 0.4s;
  transform-origin: right center;
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(20px) rotateY(10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateY(0);
  }
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.project-icon {
  font-size: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  text-align: center;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.project-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  background: #f0f7f4;
  color: #42b883;
  font-size: 0.9rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: #42b883;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #3aa876;
  transform: translateX(5px);
}

/* 动画 */
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

/* 响应式设计 */
@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
    gap: 2rem;
  }

  .hero-section {
    min-height: auto;
    padding: 2rem 0;
  }

  .profile-card {
    padding: 2rem 1rem;
  }

  .name {
    font-size: 2.5rem;
  }

  .projects-container {
    flex-direction: column;
    gap: 1.5rem;
  }

  .project-column {
    animation: fadeInUp 0.6s ease forwards;
  }

  .project-column:first-child {
    animation-delay: 0.1s;
  }

  .project-column:last-child {
    animation-delay: 0.3s;
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
}
</style> 