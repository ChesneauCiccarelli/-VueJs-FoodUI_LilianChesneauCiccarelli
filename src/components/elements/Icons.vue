<script setup>
import { computed } from 'vue'

import Cart from '@/components/icons/ui/Cart.vue'
import Clock from '@/components/icons/ui/Clock.vue'
import Phone from '@/components/icons/ui/Phone.vue'
import Play from '@/components/icons/ui/Play.vue'
import Localisation from '@/components/icons/ui/Localisation.vue'
import Search from '@/components/icons/ui/Search.vue'
import Star from '@/components/icons/ui/Star/Star.vue'
import ArrowLeft from '@/components/icons/ui/arrows/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ui/arrows/ArrowRight.vue'
import Next from '@/components/icons/ui/arrows/Next.vue'
import Previous from '@/components/icons/ui/arrows/Previous.vue'
import Food_1 from '@/components/icons/restaurant/Food_1.vue'
import Food_2 from '@/components/icons/restaurant/Food_2.vue'
import Delivery from '@/components/icons/restaurant/Delivery.vue'
import Facebook from '@/components/icons/socials/Facebook.vue'
import Instagram from '@/components/icons/socials/Instagram.vue'
import LinkedIn from '@/components/icons/socials/LinkedIn.vue'
import Twitter from '@/components/icons/socials/Twitter.vue'

const props = defineProps({
  name: String,
  variant: String,
  size: String
})

const className = computed(() => ({
  ' -primary': props.variant === 'Primary',
  ' -white': props.variant === 'White',
  ' -black': props.variant === 'Black',
  ' -small': props.size === 'Small',
  ' -medium': props.size === 'Medium',
  ' -big': props.size === 'Big'
}))

const getIcon = computed(() => {
  switch (props.name) {
    case 'Cart':
      return Cart
    case 'Clock':
      return Clock
    case 'Phone':
      return Phone
    case 'Play':
      return Play
    case 'Localisation':
      return Localisation
    case 'Search':
      return Search
    case 'Star':
      return Star
    case 'ArrowLeft':
      return ArrowLeft
    case 'ArrowRight':
      return ArrowRight
    case 'Next':
      return Next
    case 'Previous':
      return Previous
    case 'Food_1':
      return Food_1
    case 'Food_2':
      return Food_2
    case 'Delivery':
      return Delivery
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
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  fill: $black;
  display: inline-flex;
  height: 20px;
  justify-content: center;
  padding: rem(15);
  width: 20px;

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

  &.-medium {
    height: 42px;
    width: 42px;
  }

  &.-big {
    height: 98px;
    width: 98px;
  }
}
</style>
