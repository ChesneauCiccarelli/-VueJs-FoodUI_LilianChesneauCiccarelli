<script setup>
import Icon from './elements/MyIcons.vue'

defineProps({
  title: String,
  description: String,
  price: String,
  imgSrc: String,
  imgAlt: String
})
</script>

<template>
  <div class="card">
    <div class="card__top">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="card__bottom">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
      <p class="card__price"><strong class="card__price--logo">$</strong>{{ price }}</p>
    </div>
    <div class="card__arrows">
      <Icon name="ArrowRight" variant="Black" size="Small"></Icon>
      <Icon name="ArrowLeft" variant="White" size="Small"></Icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  max-width: rem(258);

  font-family: Helvetica, sans-serif;
  text-align: center;

  &__top {
    scale: 1.3;
  }

  &__bottom {
    align-items: center;
    background: $white;
    border-radius: 30px;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: rem(110);
    padding: 120px 30px 40px 30px;
    margin-top: -140px;
  }

  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
  }

  &__description {
    font-size: $regular-font-size;
    font-weight: 500;
  }

  &__price {
    font-size: $regular-font-size;
    font-weight: 600;

    &--logo {
      color: #ee140a;
    }
  }

  &__arrows {
    align-items: center;
    display: flex;
    gap: 35px;
    justify-content: center;

    transform: translateY(-50%);
  }
}
</style>
