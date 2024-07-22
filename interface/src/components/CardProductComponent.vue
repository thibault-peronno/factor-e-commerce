<script setup lang="ts">

defineProps(['productValue'])
</script>

<template>
    <div>
        <img :src="productValue.picture" alt="image du produit">
        <span class="card_cat-stock">
            <p class="cat">{{ productValue.category }}</p>
            <p class="stock">Stock : {{ productValue.available_quantity}}</p>
        </span>
        <h2>{{ productValue.name }}</h2>
        <p>{{ productValue.description }}</p>
        <button class="montserrat-alternates-medium">Ajouter</button>
    </div>
</template>

<style scoped>
div {
    padding: 1rem;
    background-color: #FFFFFF;
    border-radius: 2px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h2{
    color: #048A84;
    margin: 0.5rem 0;
}

img{
    width: 100%;
    margin: 0 0 0.5rem 0;
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
    background-color: #64A5C4;
    width: 100%;
    margin: 1.5rem 0 0 0;
    font-weight: bold;
}
</style>