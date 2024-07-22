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
  <div class="divCard">
    <CardProductComponent v-for="product in productsStore.products" :key="product.id" :productValue=product />
  </div>
</template>


<style scoped>
.divCard {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 760px) {
  .divCard {
  justify-content: space-evenly;
  gap: 1rem;
}
}

@media (min-width: 1024px) {
  .divCard {
  justify-content: space-evenly;
  gap: 2.5rem;
}
}
</style>
