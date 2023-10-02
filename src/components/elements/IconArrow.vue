<script setup>
import { computed } from 'vue'

import ArrowLeft from '@/components/icons/ui/arrows/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ui/arrows/ArrowRight.vue'
import Next from '@/components/icons/ui/arrows/Next.vue'
import Previous from '@/components/icons/ui/arrows/Previous.vue'

const props = defineProps({
  name: String,
  variant: String
})

const className = computed(() => ({
  ' -primary': props.variant === 'Primary',
  ' -white': props.variant === 'White',
  ' -black': props.variant === 'Black'
}))

const getIcon = computed(() => {
  switch (props.name) {
    case 'ArrowLeft':
      return ArrowLeft
    case 'ArrowRight':
      return ArrowRight
    case 'Next':
      return Next
    default:
      return Previous
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
  height: 40px;
  justify-content: center;
  padding: rem(15);
  width: 40px;

  &.-primary {
    background-color: $primary-color;
    border-radius: 100%;
    fill: $white;
  }

  &.-white {
    background-color: $white;
    border-radius: 100%;
    fill: $black;
    box-shadow: 0px 0px 25px rgba(131, 165, 255, 0.25);
  }

  &.-black {
    background-color: $black;
    border-radius: 100%;
    fill: $white;
  }
}
</style>
