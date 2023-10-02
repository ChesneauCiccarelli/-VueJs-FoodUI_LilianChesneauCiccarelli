<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: String
})

const className = computed(() => ({
  ' -pressed': props.variant === 'pressed'
}))

const getIcon = computed(() => {
  switch (props.name) {
    case 'Food_1':
      return Food_1
    case 'Food_2':
      return Food_2
    default:
      return Delivery
  }
})
</script>

<template>
  <div class="neumorphism" :class="className">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.neumorphism {
  background: $white;
  border: 1px solid rgba(182, 182, 182, 0);
  border-radius: 35px;
  box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.15);
  &.-pressed {
    background: $white;
    border: 1px solid #b6b6b6;
    border-radius: 35px;
    box-shadow: none;
  }
}
</style>
