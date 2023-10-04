<script setup>
defineProps({
  title: String,
  description: String,
  imgSrc: String,
  imgAlt: String,
  reverse: Boolean
})
</script>

<template>
  <div v-if="reverse" class="itemCardReverse">
    <h2 class="itemCardReverse__title">{{ title }}</h2>
    <p class="itemCardReverse__description">{{ description }}</p>
    <img class="itemCardReverse__img" :src="imgSrc" :alt="imgAlt" />
  </div>
  <div v-else class="itemCard">
    <img class="itemCard__img" :src="imgSrc" :alt="imgAlt" />
    <h2 class="itemCard__title">{{ title }}</h2>
    <p class="itemCard__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.itemCard {
  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;
  max-width: 400px;

  &__img {
    height: 220px;
    margin-bottom: rem(45);
  }

  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
    margin-bottom: rem(25);
    text-transform: uppercase;
  }
}

.itemCardReverse {
  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;
  max-width: 400px;

  &__img {
    height: 220px;
  }

  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
    margin-bottom: rem(25);
    text-transform: uppercase;
  }

  &__description {
    margin-bottom: rem(45);
  }
}
</style>
