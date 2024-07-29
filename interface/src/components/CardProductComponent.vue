<script setup lang="ts">
defineProps(['productValue'])
</script>

<template>
  <div class="cardProduct">
    <img :src="productValue.picture" alt="image du produit" />
    <div class="cardProduct_datas">
      <span class="card_cat-stock">
        <p class="cat">{{ productValue.category }}</p>
        <p class="stock">Stock : {{ productValue.available_quantity }}</p>
      </span>
      <h2>{{ productValue.name }}</h2>
      <routerLink :to="{ name: 'detailsProduct', params: { productId: productValue.id } }">
        <button class="montserrat-alternates-medium">Details</button>
      </routerLink>
    </div>
  </div>
</template>

<style scoped>
.cardProduct {
  background-color: #ffffff;
  border-radius: 2px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 1px 0px #8db8b6;
}

.cardProduct:hover {
  background-color: #ddf7f5;
  scale: 1.1;
  box-shadow: 0px 0px 0px 0px;
}

.cardProduct_datas {
  padding: 1rem;
}

h2 {
  color: #048a84;
  margin: 0.5rem 0;
}

img {
  width: 100%;
}

.cat {
  color: #908080;
  font-size: small;
  background-color: #ddf7f5;
  border-radius: 100px;
  width: 50px;
  text-align: center;
}

.stock {
  color: #908080;
  font-size: small;
}

.card_cat-stock {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  width: 100%;
  margin: 1.5rem 0 0 0;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #048a84;
  color: #048a84;
  /* display: flex;
    gap: 30%; */
}

button:hover {
  background-color: #048a84;
  color: #ddf7f5;
}

@media (max-width: 320px) {
  .cardProduct {
    max-width: 310px;
  }
}
</style>
