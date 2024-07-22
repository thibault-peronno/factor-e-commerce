<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HearderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HearderComponent />
  <RouterView />
</template>

<style scoped>
</style>
