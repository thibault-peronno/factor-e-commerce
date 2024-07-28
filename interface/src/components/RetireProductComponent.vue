<script setup lang="ts">

import Carousel from 'primevue/carousel';
import { useRetireProductStore } from '../stores/retireProduct'
import { onMounted } from 'vue';

const retireProductStore = useRetireProductStore()



onMounted(()=>{
    retireProductStore.retireProductToApi();
})
</script>

<template>
    <div v-if="retireProductStore.isRetirePorduct">

        <h2>Ils vous intéresse</h2>
    
        <Carousel :value="retireProductStore.retireProduct" :numVisible="3" :numScroll="1" :responsiveOptions="retireProductStore.responsiveOptions">
        <template #item="slotProps">
            <routerLink :to="{ name: 'detailsProduct', params: { productId: slotProps.data.productID } }">
                <div class="retire-template">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img class="retire-image" :src="slotProps.data.picture" :alt="slotProps.data.name" />
                            <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/> -->
                        </div>
                    </div>
                    <div class="retire-name montserrat-alternates-semibold">{{ slotProps.data.name }}</div>
                </div>
            </routerLink>
        </template>
    </Carousel>
    </div>


</template>

<style scoped>
.retire-template{
    border: 1px solid #64a5c4;
    border-radius: 2px;
    margin : 10px;
    cursor: pointer;
    max-width: 300px;
}
.retire-image{
    width: 100%;
}

.retire-name{
    margin : 5px;
    color: #048a84;
}
</style>