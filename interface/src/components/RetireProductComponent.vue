<script setup lang="ts">

import Carousel from 'primevue/carousel';
import { useRetireProductStore } from '../stores/retireProduct'
import { onMounted } from 'vue';

const retireProductStore = useRetireProductStore()



// onMounted(())
</script>

<template>
    <h2>Ils vous intéresse</h2>

    <Carousel :value="retireProductStore.retireProduct" :numVisible="3" :numScroll="1" :responsiveOptions="retireProductStore.responsiveOptions">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                    <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/> -->
                </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
</template>

<style scoped>

</style>