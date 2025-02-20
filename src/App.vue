<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  background: #f9f9f9;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.app-container {
  display: flex;
}

.main-content {
  flex: 1;
  margin-left: 200px;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    margin-bottom: 60px;
  }
}
</style>
