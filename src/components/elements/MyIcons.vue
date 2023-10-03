<script setup>
import { computed } from 'vue'

import Cart from '@/components/icons/ui/CartIcon.vue'
import Clock from '@/components/icons/ui/ClockIcon.vue'
import Phone from '@/components/icons/ui/PhoneIcon.vue'
import Play from '@/components/icons/ui/PlayIcon.vue'
import Localisation from '@/components/icons/ui/LocalisationIcon.vue'
import Search from '@/components/icons/ui/SearchIcon.vue'
import Star from '@/components/icons/ui/Star/StarIcon.vue'
import ArrowLeft from '@/components/icons/ui/arrows/ArrowLeftIcon.vue'
import ArrowRight from '@/components/icons/ui/arrows/ArrowRightIcon.vue'
import Next from '@/components/icons/ui/arrows/NextIcon.vue'
import Previous from '@/components/icons/ui/arrows/PreviousIcon.vue'
import Food_1 from '@/components/icons/restaurant/Food_1Icon.vue'
import Food_2 from '@/components/icons/restaurant/Food_2Icon.vue'
import Delivery from '@/components/icons/restaurant/DeliveryIcon.vue'
import Facebook from '@/components/icons/socials/FacebookIcon.vue'
import Instagram from '@/components/icons/socials/InstagramIcon.vue'
import LinkedIn from '@/components/icons/socials/LinkedInIcon.vue'
import Twitter from '@/components/icons/socials/TwitterIcon.vue'

const props = defineProps({
  name: String,
  variant: String,
  size: String
})

const className = computed(() => ({
  ' -primary': props.variant === 'Primary',
  ' -secondary': props.variant === 'Secondary',
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
  color: $black;
  display: inline-flex;
  height: 20px;
  justify-content: center;
  padding: rem(15);
  width: 20px;
  svg {
    height: 20px;
    width: 20px;
  }

  &.-primary {
    background-color: $primary-color;
    border-radius: 100%;
    color: $white;
    fill: $white;
  }

  &.-secondary {
    background-color: $secondary-color;
    border-radius: 100%;
    color: $primary-color;
  }

  &.-white {
    background-color: $white;
    border-radius: 100%;
    color: $black;
    box-shadow: 0px 0px 25px rgba(131, 165, 255, 0.25);
  }

  &.-black {
    background-color: $black;
    border-radius: 100%;
    color: $white;
  }

  &.-medium {
    height: 42px;
    width: 42px;
    svg {
      height: 30px;
      width: 30px;
    }
  }

  &.-big {
    height: 98px;
    width: 98px;
    svg {
      height: 50px;
      width: 50px;
    }
  }
}
</style>
