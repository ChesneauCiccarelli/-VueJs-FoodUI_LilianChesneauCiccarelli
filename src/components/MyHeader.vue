<script setup>
import Searchbar from '@/components/elements/Searchbar.vue'
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <img src="../../src/assets/img/logo.png" alt="Logo" />
    </div>
    <div class="header__links">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Service</a>
      <a href="#">Shop</a>
    </div>
    <div>
      <Searchbar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
.header {
  align-items: center;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  margin-top: rem(10);
  padding: 0 150px;
  z-index: 100;

  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 600;

  &__logo {
    width: 100px;
    padding: rem(10) 0;
  }

  &__links {
    display: flex;
    gap: rem(65);
  }
}
</style>
