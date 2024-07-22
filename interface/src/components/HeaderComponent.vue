<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

</script>


<template>
  <header>
    <img alt="Shop logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink class="montserrat-alternates-medium paintFont" to="/">Home</RouterLink>
        <RouterLink class="montserrat-alternates-medium paintFont" to="/about">About</RouterLink>
      </nav>
      <span class="wrapper_shopIcon-count" @click="cartStore.toggleCart">
        <i class="pi pi-shopping-bag" 
          style="color: #048A84; font-size: 2rem"></i>
        <p v-if="cartStore.countProductsInCart > 0" class="wrapper_count">{{ cartStore.countProductsInCart }}</p>
      </span>
      <i class="pi pi-user" style="color: #048A84; font-size: 2rem; cursor: pointer;"></i>
    </div>
  </header>
</template>


<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #DDF7F5;
  padding: 1rem;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
}

.wrapper {
  display: flex;
  gap: 2.5rem;
  flex-direction: row;
  align-items: center;
}

.wrapper_shopIcon-count {
  position: relative;
  cursor: pointer;
}

.wrapper_count {
  position: absolute;
  bottom: -3px;
  right: -7px;
  background-color: #64A5C4;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  text-align: center;
  color: white;
}
</style>