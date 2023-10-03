<script setup>
import { computed } from 'vue'
import Icon from '@/components/elements/Icons.vue'

const props = defineProps({
  href: String,
  size: String,
  variant: String,
  showIcon: {
    type: Boolean,
    default: false
  }
})

const className = computed(() => ({
  ' -rounded': props.variant === 'Rounded',
  ' -small': props.size === 'Small',
  ' -medium': props.size === 'Medium'
}))
</script>

<template>
  <a v-if="href" :href="href" class="button" :class="className"><slot></slot></a>
  <button v-else class="button" :class="className">
    <slot></slot>
    <Icon v-if="showIcon" name="Next" variant="White" size="Small" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  align-items: center;
  background: linear-gradient(180deg, #efab68 0%, #f48e28 100%);
  border: none;
  border-radius: rem(15);
  display: inline-flex;
  gap: rem(20);
  justify-content: center;
  padding: rem(33) rem(67);

  color: $white;
  font-family: $primary-font-family;
  font-size: $regular-font-size;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  &.-rounded {
    background: $primary-color;
    border-radius: rem(37);
    padding: rem(26) rem(64);

    font-weight: 500;
  }

  &.-medium {
    padding: rem(26) rem(64);
  }

  &.-small {
    padding: rem(14) rem(29);

    font-size: $small-font-size;
    font-weight: 400;
  }
}
</style>
