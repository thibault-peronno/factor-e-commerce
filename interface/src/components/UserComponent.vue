<script setup lang="ts">
import RetireProductComponent from './RetireProductComponent.vue'
</script>

<template>
  <h1 class="account">Votre compte</h1>
  <div class="account_picture-datas">
    <i class="pi pi-user" style="color: #048a84; font-size: 5rem"></i>
    <div class="account_datas montserrat-alternates-bold">
      <p>Thibault Peronno</p>
    </div>
  </div>
  <RetireProductComponent />
</template>

<style scoped>
.account_picture-datas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
}

.account_datas {
  color: #048a84;
  font-size: 2rem;
}

@media (min-width: 760px) {
  .account_picture-datas {
    justify-content: start;
  }
}
</style>
