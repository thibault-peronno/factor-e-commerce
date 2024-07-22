<script setup lang="ts">

</script>


<template>
  <header>
    <img alt="Shop logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink class="montserrat-alternates-medium paintFont" to="/">Home</RouterLink>
        <RouterLink class="montserrat-alternates-medium paintFont" to="/about">About</RouterLink>
      </nav>
      <i class="pi pi-shopping-bag" style="color: #048A84; font-size: 2rem"></i>
      <i class="pi pi-user" style="color: #048A84; font-size: 2rem"></i>
    </div>
  </header>
</template>


<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
}

.wrapper{
  display: flex;
  gap: 2.5rem;
  flex-direction: row;
  align-items: center;
}
</style>