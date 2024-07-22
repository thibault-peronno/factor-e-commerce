<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HearderComponent from './components/HeaderComponent.vue'
import CartComponent from './components/CartComponent.vue';
</script>

<template>
  <HearderComponent />
  <RouterView />
  <CartComponent />
</template>

<style scoped>
</style>
