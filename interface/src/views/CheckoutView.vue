<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue';

const cartStore = useCartStore()

onMounted(()=>{
    cartStore.getCartProductFromDB();
})

</script>

<template>
  <main>
    <h1>Le résumé de votre panier</h1>

    <table>
      <thead>
        <tr>
          <th class="table-title" scope="col">Produit</th>
          <th class="table-title" scope="col">Nom</th>
          <th class="table-title" scope="col">Quantité</th>
          <th class="table-title" scope="col">Prix TTC</th>
          <th class="table-title" scope="col">Prix Total TTC</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cartProduct in cartStore.cartProductsFromDB" :key="cartProduct.productId">
          <td scope="row"><img class="cartSection-product_img" :src="cartProduct.picture" alt="image" /></td>
          <td>{{ cartProduct.name }}</td>
          <td>{{ cartProduct.quantity }}</td>
          <td>{{ cartProduct.price }} €</td>
          <td>{{ cartProduct.quantity * cartProduct.price }} €</td>
          <td @click="cartStore.removeProductInCart(cartProduct.cart_id)">
          <i class="pi pi-trash" style="color: #048a84; font-size: 1.5rem; cursor: pointer"></i>
        </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="table-title" scope="row" >Total de la commande</th>
          <td class="table_total-Price-Products" colspan="3">33 €</td>
        </tr>
      </tfoot>
    </table>
  </main>
</template>

<style scoped>
img{
    width: 100px;
}

table{
    width:100%;
}

.table-title{
    text-align: justify;
}

.table_total-Price-Products{
    text-align:end;
}
</style>
