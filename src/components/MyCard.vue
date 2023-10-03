<script setup>
import Star from '@/components/icons/ui/star/Star.vue'
import MyButton from '@/components/elements/MyButton.vue'
</script>

<template>
  <div class="card">
    <div class="card__image">
      <slot name="image"></slot>
    </div>
    <div class="card__content">
      <div class="card__content--top">
        <slot name="title"></slot>
        <div class="card__content--rating">
          <Star class="Star" />
          <slot name="rating"></slot>
        </div>
      </div>
      <div class="card__content--bottom">
        <MyButton size="small" variant="rounded">Add to cart</MyButton>
        <slot name="price"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: $white;
  border-radius: 35px;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
  height: rem(485);
  width: rem(485);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;

    font-family: Helvetica, sans-serif;
  }

  &__content--top {
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
