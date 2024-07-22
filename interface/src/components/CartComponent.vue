<script setup lang="ts">
import Divider from 'primevue/divider';

</script>

<template>
    <section class="cart-section">
        <div>
            <span class="cart-section_title-icons">
                <h3>Votre panier</h3>
                <i class="pi pi-times" style="color: #048A84; font-size: 2rem; cursor: pointer;"></i>
            </span>
            <Divider />
            <div class="cart-section_product">
                <img src="" alt="image">
                <div class="cart-section_name-quantity">
                    <p class="cart-section_name">title</p>
                    <p class="cart-section-product_quantity-price">1 x 30€</p> 
                </div>
                <div>
                    <i class="pi pi-trash" style="color: #048A84; font-size: 1.5rem; cursor: pointer;"></i>
                </div>
            </div>
            <div class="cart-section_product">
                <img src="" alt="image">
                <div class="cart-section_name-quantity">
                    <p class="cart-section_name">title</p>
                    <p class="cart-section-product_quantity-price">1 x 30€</p> 
                </div>
                <div>
                    <i class="pi pi-trash" style="color: #048A84; font-size: 1.5rem; cursor: pointer;"></i>
                </div>
            </div>
            <div class="cart-section_product">
                <img src="" alt="image">
                <div class="cart-section_name-quantity">
                    <p class="cart-section_name">title</p>
                    <p class="cart-section-product_quantity-price">1 x 30€</p> 
                </div>
                <div>
                    <i class="pi pi-trash" style="color: #048A84; font-size: 1.5rem"></i>
                </div>
            </div>
            
        </div>
    </section>

</template>

<style scoped>
.cart-section{
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    height: 100vh;
    width: 350px;
    padding: 1rem;
}
.cart-section_title-icons{
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
}
.cart-section_product{
    display: flex;
    align-items: center;
    gap:1rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color: #DDF7F5;
    height: 100px;
}
.cart-section-product_quantity-price{
    color: #908080;
    font-size: small;
}
.cart-section_name-quantity{
    flex-grow: 1;
}
.cart-section_name{
    text-transform: uppercase;
}
</style>