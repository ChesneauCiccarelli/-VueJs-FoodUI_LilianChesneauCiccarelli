<script setup>
import { computed } from 'vue'

import Food_1 from '@/components/icons/restaurant/Food_1.vue'
import Food_2 from '@/components/icons/restaurant/Food_2.vue'
import Delivery from '@/components/icons/restaurant/Delivery.vue'

const props = defineProps({
  name: String,
  variant: String
})

const className = computed(() => ({
  ' -colored': props.variant === 'colored'
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
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  fill: $black;
  display: inline-flex;
  height: 50px;
  justify-content: center;
  padding: rem(15);
  width: 50px;
  &.-colored {
    background-color: $secondary-color;
    border-radius: 100%;
    fill: $primary-color;
  }
}
</style>
