<script setup lang="ts">
import CardProductComponent from './CardProductComponent.vue';
import { useProductStore } from '../stores/product';
import { onMounted } from 'vue';

const productsStore = useProductStore();

onMounted(() => {
  productsStore.callProductsApi();
})
</script>

<template>
  <h1>Découvre nos produits</h1>
  <div v-for="product in productsStore.products"  :key="product.id">
    <CardProductComponent />
  </div>
</template>
