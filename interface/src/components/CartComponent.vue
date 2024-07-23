<script setup lang="ts">
import Divider from 'primevue/divider';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

</script>

<template>
    <section class="cartSectionHidden" :class="{ cartSectionActive : cartStore.cartIsactive }">
        <div>
            <span class="cartSection_title-icons">
                <h3>Votre panier</h3>
                <i class="pi pi-times" @click="cartStore.toggleCart" style="color: #048A84; font-size: 2rem; cursor: pointer;"></i>
            </span>
            <Divider />
            <div class="cartSection_product">
                <img src="" alt="image">
                <div class="cartSection_name-quantity">
                    <p class="cartSection_name">title</p>
                    <p class="cartSection-product_quantity-price">1 x 30€</p> 
                </div>
                <div>
                    <i class="pi pi-trash" style="color: #048A84; font-size: 1.5rem; cursor: pointer;"></i>
                </div>
            </div>
            <div class="cartSection_product">
                <img src="" alt="image">
                <div class="cartSection_name-quantity">
                    <p class="cartSection_name">title</p>
                    <p class="cartSection-product_quantity-price">1 x 30€</p> 
                </div>
                <div>
                    <i class="pi pi-trash" style="color: #048A84; font-size: 1.5rem; cursor: pointer;"></i>
                </div>
            </div>
            <div class="cartSection_product">
                <img src="" alt="image">
                <div class="cartSection_name-quantity">
                    <p class="cartSection_name">title</p>
                    <p class="cartSection-product_quantity-price">1 x 30€</p> 
                </div>
                <div>
                    <i class="pi pi-trash" style="color: #048A84; font-size: 1.5rem"></i>
                </div>
            </div>
            
        </div>
    </section>

</template>

<style scoped>
.cartSectionActive{
    right: 0!important;
}
.cartSectionHidden{
    position: fixed;
    top: 0;
    right: -1000px;
    background-color: white;
    height: 100vh;
    width: 100%;
    padding: 1rem;
}
.cartSection_title-icons{
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
}
.cartSection_product{
    display: flex;
    align-items: center;
    gap:1rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color: #DDF7F5;
    height: 100px;
}
.cartSection-product_quantity-price{
    color: #908080;
    font-size: small;
}
.cartSection_name-quantity{
    flex-grow: 1;
}
.cartSection_name{
    text-transform: uppercase;
}

@media (min-width: 760px) {
    .cartSectionHidden{
    width: 350px;
}
}
</style>