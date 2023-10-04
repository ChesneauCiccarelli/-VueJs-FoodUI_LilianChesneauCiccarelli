<script setup>
import Star from '@/components/icons/ui/star/StarIcon.vue'
import MyButton from '@/components/elements/MyButton.vue'

defineProps({
  title: String,
  rating: String,
  price: String,
  imgSrc: String,
  imgAlt: String
})
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="card__content">
      <div class="card__content--top">
        <h2>{{ title }}</h2>
        <div class="card__content--rating">
          <Star class="Star" />
          <p>{{ rating }}</p>
        </div>
      </div>
      <div class="card__content--bottom">
        <MyButton size="Small" variant="Rounded">Add to cart</MyButton>
        <p>${{ price }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: $white;
  border-radius: 35px;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
  overflow: hidden;
  width: fit-content;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px 32px 42px 32px;

    font-family: Helvetica, sans-serif;
  }

  &__content--top {
    align-items: center;
    display: flex;
    justify-content: space-between;

    font-size: $medium-font-size;
    font-weight: 700;
  }

  &__content--rating {
    display: flex;
    gap: 10px;
    justify-content: space-between;

    font-size: $small-font-size;
    font-weight: 400;
  }

  &__content--bottom {
    display: flex;
    justify-content: space-between;

    font-size: $regular-font-size;
    font-weight: 500;
  }
}

.Star {
  fill: $primary-color;
  height: rem(12);
  width: rem(12);
}
</style>
