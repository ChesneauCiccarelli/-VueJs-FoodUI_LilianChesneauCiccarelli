<script setup>
import { computed } from 'vue'
import Icon from './elements/MyIcons.vue'

const props = defineProps({
  title: String,
  description: String,
  iconName: String,
  iconVariant: String,
  iconSize: String,
  styleCard: String
})

const className = computed(() => ({
  ' -neuOver': props.styleCard === 'Neu-Over',
  ' -neuPressed': props.styleCard === 'Neu-Pressed'
}))
</script>

<template>
  <div class="card" :class="className">
    <Icon :name="iconName" :variant="iconVariant" :size="iconSize"></Icon>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  align-items: center;
  background: $white;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  gap: rem(42);
  max-width: rem(300);
  padding: rem(103) rem(52);

  font-family: Helvetica, sans-serif;
  text-align: center;

  &.-neuOver {
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
  }

  &.-neuPressed {
    border: 1px solid #b6b6b6;
  }

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
