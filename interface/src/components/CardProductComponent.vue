<script setup lang="ts">

defineProps(['productValue'])
</script>

<template>
    <div class="cardProduct">
        <img :src="productValue.picture" alt="image du produit">
        <div class="cardProduct_datas">
            <span class="card_cat-stock">
                <p class="cat">{{ productValue.category }}</p>
                <p class="stock">Stock : {{ productValue.available_quantity}}</p>
            </span>
            <h2>{{ productValue.name }}</h2>
            <!-- <p>{{ productValue.description }}</p> -->
            <button class="montserrat-alternates-medium" >
                <i class="pi pi-plus" style="color: #FFFFFF; font-size: 1.5rem"></i>
                Ajouter
            </button>
        </div>
    </div>
</template>

<style scoped>
.cardProduct {
    background-color: #FFFFFF;
    border-radius: 2px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 1px 0px #8DB8B6;
}

.cardProduct:hover{
    background-color: #DDF7F5;
    scale: 1.1;
    box-shadow: 0px 0px 0px 0px;
}

.cardProduct_datas{
    padding: 1rem;
}

h2{
    color: #048A84;
    margin: 0.5rem 0 ;
}

img{
    width: 100%;
}

.cat{
    color: #908080;
    font-size: small;
    background-color: #DDF7F5;
    border-radius: 100px;
    width: 50px;
    text-align: center;
}

.stock{
    color: #908080;
    font-size: small;
}

.card_cat-stock{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

button {
    width: 100%;
    margin: 1.5rem 0 0 0;
    font-weight: bold;
    display: flex;
    gap: 30%;
}

@media (max-width: 320px) {
    .cardProduct {
    max-width: 310px;
}
}
</style>