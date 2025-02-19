<script setup>
import { ref } from 'vue'

// 个人信息数据
const profile = {
  name: "Muyin",
  title: "Frontend Developer",
  description: "热爱前端开发，专注于Vue.js技术栈"
}

// 项目列表
const projects = ref([
  {
    name: "项目一",
    description: "项目描述",
    link: "#"
  },
  {
    name: "项目二",
    description: "项目描述",
    link: "#"
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
    <section class="profile-section">
      <h1 class="name">{{ profile.name }}</h1>
      <h2 class="title">{{ profile.title }}</h2>
      <p class="description">{{ profile.description }}</p>
      
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
    </section>

    <!-- 项目展示区域 -->
    <section class="projects-section">
      <h2 class="section-title">我的项目</h2>
      <div class="projects-grid">
        <div v-for="project in projects" 
             :key="project.name" 
             class="project-card">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link">查看详情</a>
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
  font-family: 'Inter', sans-serif;
}

.profile-section {
  text-align: center;
  margin-bottom: 4rem;
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
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

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

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 1.5rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.project-card p {
  color: #666;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #42b883;
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;
}

.project-link:hover {
  background: #3aa876;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }

  .name {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 