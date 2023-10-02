<script setup>
import { computed } from 'vue'

import Facebook from '@/components/icons/socials/Facebook.vue'
import Instagram from '@/components/icons/socials/Instagram.vue'
import LinkedIn from '@/components/icons/socials/LinkedIn.vue'
import Twitter from '@/components/icons/socials/Twitter.vue'

const props = defineProps({
  name: String
})

const getIcon = computed(() => {
  switch (props.name) {
    case 'Facebook':
      return Facebook
    case 'Instagram':
      return Instagram
    case 'LinkedIn':
      return LinkedIn
    default:
      return Twitter
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
  align-items: center;
  background-color: $secondary-color;
  border-radius: 100%;
  display: inline-flex;
  height: rem(42);
  justify-content: center;
  width: rem(42);
}
</style>
