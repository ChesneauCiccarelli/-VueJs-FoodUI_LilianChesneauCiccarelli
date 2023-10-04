<script setup>
import Icon from './elements/MyIcons.vue'

defineProps({
  title: String,
  description: String,
  iconName: String,
  iconVariant: String,
  iconSize: String
})
</script>

<template>
  <div class="card" :class="className">
    <Icon :name="iconName" variant="Primary" size="Small"></Icon>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: rem(15);

  font-family: Helvetica, sans-serif;
  text-align: center;

  &__title {
    font-size: $regular-font-size;
    font-weight: 600;
  }

  &__description {
    font-size: $small-font-size;
    font-weight: 400;
    margin-top: -10px;
  }
}
</style>
