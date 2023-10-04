<script setup>
defineProps({
  section: String,
  title: String
})
</script>

<template>
  <div class="section">
    <p class="section__name">{{ section }}</p>
    <h1 class="section__title">{{ title }}</h1>
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.section {
  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;

  &__name {
    color: $primary-color;
    text-align: center;
  }

  &__title {
    padding-bottom: rem(50);

    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
  }
}
</style>
