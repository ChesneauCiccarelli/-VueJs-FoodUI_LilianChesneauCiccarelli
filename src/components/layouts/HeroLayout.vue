<script setup>
import Button from '@/components/elements/MyButton.vue'
import Icon from '@/components/elements/MyIcons.vue'

import BikeDelivery from '@/components/elements/BikeElement.vue'
import ArrowSVG from '@/components/icons/svg/ArrowSVG.vue'

import BestSellersLayout from '@/components/layouts/BestSellersLayout.vue'
</script>

<template>
  <section class="flex">
    <div class="flex__left">
      <BikeDelivery />
      <div class="flex__left--title">
        <p>The Fastest</p>
        <p>Delivery</p>
        <p>In<strong>Your City</strong></p>
      </div>
      <p class="flex__left--content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a
        vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
      </p>
      <div class="heroActions">
        <Button size="regular" variant="Default">Order Now</Button>
        <Icon name="Play" size="Medium" variant="Secondary"></Icon>
        <p>Order Process</p>
      </div>
    </div>

    <div class="flex__right">
      <BestSellersLayout />
    </div>

    <ArrowSVG class="svg" />
    <div class="fade"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: rem(90);
  margin-top: rem(40);
}
.flex {
  align-items: center;
  display: flex;
  gap: rem(10);
  position: relative;
}
.flex__left {
  width: 40%;

  font-family: Helvetica, sans-serif;
  font-size: $medium-font-size;
  font-weight: 700;

  &--title {
    font-family: Helvetica, sans-serif;
    font-size: $giant-font-size;
    font-weight: 700;
  }

  &--content {
    margin-bottom: rem(90);
    margin-top: rem(50);

    font-family: Helvetica, sans-serif;
    font-size: $regular-font-size;
    font-weight: 500;
  }
}
.flex__right {
  margin-top: 4%;
  margin-right: 3%;
  width: 35%;
}

.heroActions {
  align-items: center;
  display: flex;
  gap: rem(25);
}

.svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-60%, -50%);
  z-index: -1;
}

strong {
  color: $primary-color;
}

.fade {
  background-image: linear-gradient(180deg, #d9d9d9 0%, #d9d9d900 100%);
  border-radius: rem(30);
  height: 837px;
  position: absolute;
  top: 0;
  right: 0;
  width: 445px;
  z-index: -1;
}
</style>
