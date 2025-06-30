<template>
  <div class="layout">
    <SideBar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SideBar from './SideBar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb;;
}

.main-content {
  flex: 1;
  padding: 1rem;
  background-color: rgb(254, 251, 251);
  border-left: 1px solid #e5e7eb;
  box-shadow: 04px 0 8px rgba(0, 0, 0, 0.03);
}

</style>