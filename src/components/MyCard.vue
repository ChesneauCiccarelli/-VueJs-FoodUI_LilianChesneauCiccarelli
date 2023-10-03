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
  <div class="card">
    <Icon :name="iconName" :variant="iconVariant" :size="iconSize"></Icon>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  align-items: center;
  background: $white;
  border: 1px solid #b6b6b6;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  gap: rem(42);
  max-width: rem(300);
  padding: rem(103) rem(52);

  font-family: Helvetica, sans-serif;
  text-align: center;

  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
  }

  &__description {
    font-size: $regular-font-size;
    font-weight: 500;
  }
}
</style>
