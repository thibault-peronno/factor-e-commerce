<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import { useDetailsProductStore } from '../stores/detailsProduct';
import { useCartStore } from '@/stores/cart';
import { onMounted } from 'vue';

const detailsProduct = useDetailsProductStore();
const cartStore = useCartStore();


onMounted(() => {
    detailsProduct.callProductApi();

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
                <p>{{ detailsProduct.product.description }}</p>
                <span>
                    <p>{{ detailsProduct.product.category }}</p>
                    <p>{{ detailsProduct.product.available_quantity }}</p>
                    <p>{{ detailsProduct.product.price }} €</p>
                    <div class="product_datas_quantity-add">
                        <div class="card flex justify-center">
                            <InputNumber class="personnalCss" v-model="detailsProduct.value" showButtons
                                buttonLayout="vertical" style="width: 3rem" :min="0"
                                :max="detailsProduct.product.available_quantity">
                                <template #incrementbuttonicon>
                                    <span class="pi pi-plus" />
                                </template>
                                <template #decrementbuttonicon>
                                    <span class="pi pi-minus" />
                                </template>
                            </InputNumber>
                        </div>
                        <button class="montserrat-alternates-medium" @click="cartStore.addProductInCart({
                            id: detailsProduct.product.id,
                            name: detailsProduct.product.name,
                            description: detailsProduct.product.description,
                            picture: detailsProduct.product.picture,
                            price: detailsProduct.product.price,
                            cart_id:0
                        })">
                            <i class="pi pi-cart-arrow-down"
                                style="color: #FFFFFF; font-size: 1.5rem; margin: 0 1.5rem 0 0;"></i>
                            Ajouter
                        </button>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.product_datas_quantity-add {
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
}

button {
    width: 100%;
    margin: 1.5rem 0 0 0;
    font-weight: bold;
    display: flex;
    padding: 1rem;
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
    }
}
</style>
