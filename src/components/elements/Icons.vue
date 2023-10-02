<script setup>
import { computed } from 'vue'

import Cart from '@/components/icons/ui/Cart.vue'
import Clock from '@/components/icons/ui/Clock.vue'
import Phone from '@/components/icons/ui/Phone.vue'
import Localisation from '@/components/icons/ui/Localisation.vue'
import Search from '@/components/icons/ui/Search.vue'

const props = defineProps({
  name: String
})

const getIcon = computed(() => {
  switch (props.name) {
    case 'Cart':
      return Cart
    case 'Clock':
      return Clock
    case 'Phone':
      return Phone
    case 'Localisation':
      return Localisation
    default:
      return Search
  }
})
</script>

<template>
  <i class="icon">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  height: rem(20);
  padding: rem(2);
  width: rem(20);
}
</style>
