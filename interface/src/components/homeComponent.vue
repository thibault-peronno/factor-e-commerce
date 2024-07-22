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
  width: max-content;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 760px) {
  .divCard {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
}

@media (min-width: 1024px) {
  .divCard {
    grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}
}
@media (min-width: 1300px) {
  .divCard {
    grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}
}
</style>
