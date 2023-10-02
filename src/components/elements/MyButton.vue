<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: String,
  size: String,
  variant: String
})

const className = computed(() => ({
  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small'
}))
</script>

<template>
  <a v-if="href" :href="href" class="button" :class="className"><slot></slot></a>
  <button v-else class="button" :class="className"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
  background: linear-gradient(180deg, #efab68 0%, #f48e28 100%);
  border: none;
  border-radius: rem(15);
  display: inline-block;
  padding: 33px 67px;

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

  &.-small {
    padding: rem(14) rem(29);

    font-size: $small-font-size;
    font-weight: 400;
  }
}
</style>
