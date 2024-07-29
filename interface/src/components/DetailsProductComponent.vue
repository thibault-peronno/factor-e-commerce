<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { useDetailsProductStore } from '../stores/detailsProduct'
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue'

const detailsProduct = useDetailsProductStore()
const cartStore = useCartStore()

onMounted(() => {
  detailsProduct.callProductApi()
})
</script>

<template>
  <div class="product">
    <div class="product_div_img">
      <img class="product_div-img" :src="detailsProduct.product.picture" alt="L'image du produit" />
    </div>
    <div class="product_div-data">
      <h1>{{ detailsProduct.product.name }}</h1>
      <div>
        <p class="product_description">{{ detailsProduct.product.description }}</p>
        <span>
          <p class="product_cat">{{ detailsProduct.product.category }}</p>
          <p class="product_quantity">Stock : {{ detailsProduct.product.available_quantity }}</p>
          <p>{{ detailsProduct.product.price }} €</p>
          <div class="product_datas_quantity-add">
            <div class="card flex justify-center">
              <InputNumber
                class="personnalCss"
                v-model="detailsProduct.quantityProduct"
                showButtons
                buttonLayout="vertical"
                style="width: 3rem"
                :min="0"
                :max="detailsProduct.product.available_quantity"
              >
                <template #incrementbuttonicon>
                  <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                  <span class="pi pi-minus" />
                </template>
              </InputNumber>
            </div>
            <button
              class="montserrat-alternates-medium"
              @click="
                cartStore.addProductInCart({
                  id: detailsProduct.product.id,
                  name: detailsProduct.product.name,
                  description: detailsProduct.product.description,
                  picture: detailsProduct.product.picture,
                  price: detailsProduct.product.price,
                  cart_id: 0
                })
              "
            >
              <i
                class="pi pi-cart-arrow-down"
                style="color: #ffffff; font-size: 1.5rem; margin: 0 1.5rem 0 0"
              ></i>
              Ajouter
            </button>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-transform: uppercase;
  color: #048a84;
  font-size: xxx-large;
  margin: 0;
}
.product {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.product_div-img {
  width: 100%;
}

.product_cat {
  color: #908080;
  font-size: small;
  background-color: #ddf7f5;
  border-radius: 100px;
  width: 50px;
  text-align: center;
}

.product_description {
  margin: 1.5rem 0;
}

.product_quantity {
  margin: 0.5rem 0;
}

.product_datas_quantity-add {
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
  margin: 1rem 0 0 0;
}

button {
  width: 200px;
  margin: 1.5rem 0 0 0;
  font-weight: bold;
  display: flex;
  align-items: center;
}

@media (min-width: 760px) {
  button {
    width: max-content;
    height: max-content;
  }

  .product_div_img {
    max-width: 45%;
  }

  .product_div-img {
    width: 100%;
  }

  .product_div-data {
    width: 45%;
    align-self: baseline;
  }
}
</style>
