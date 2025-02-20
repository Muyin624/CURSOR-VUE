<script setup>
const navItems = [
  { name: '首页', path: '/', icon: '🏠' },
  { name: '技术栈', path: '/tech', icon: '💻' },
  { name: '项目', path: '/projects', icon: '🚀' },
  { name: '关于我', path: '/about', icon: '👨‍💻' }
]
</script>

<template>
  <nav class="nav-container">
    <div class="nav-content">
      <router-link 
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: $route.path === item.path }"
      >
        <span class="icon">{{ item.icon }}</span>
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  width: 200px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 0;
}

.nav-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: #666;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: #f5f5f5;
  color: #42b883;
}

.nav-item.active {
  background: #42b883;
  color: white;
}

.icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .nav-container {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    top: auto;
    border-right: none;
    border-top: 1px solid #eee;
    padding: 0.5rem 0;
    z-index: 100;
  }

  .nav-content {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 0.5rem;
  }

  .nav-item {
    flex-direction: column;
    padding: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  }
}
</style> 