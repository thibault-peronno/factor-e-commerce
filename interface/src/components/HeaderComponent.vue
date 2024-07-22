<template>
    <header>
    <img alt="Shop logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink class="montserrat-alternates-medium paintFont" to="/">Home</RouterLink>
        <RouterLink class="montserrat-alternates-medium paintFont" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav{
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
}
</style>