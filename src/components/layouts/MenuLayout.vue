<script setup>
import MenuCard from '@/components/MenuCard.vue'
</script>

<template>
  <div class="grid">
    <MenuCard
      title="Gyro Sandwich"
      rating="4.9"
      price="15.00"
      imgSrc="src/assets/img/gyro.jpg"
      imgAlt="Image of a gyro sandwich"
    ></MenuCard>
    <MenuCard
      title="Enchilade"
      rating="5.0"
      price="22.50"
      imgSrc="src/assets/img/enchilade.jpg"
      imgAlt="Image of an enchilade"
    ></MenuCard>
    <MenuCard
      title="Green Beans"
      rating="4.9"
      price="12.00"
      imgSrc="src/assets/img/greenbeans.jpg"
      imgAlt="Image of a green beans"
    ></MenuCard>
    <MenuCard
      title="Pizza"
      rating="5.0"
      price="18.50"
      imgSrc="src/assets/img/pizza.jpg"
      imgAlt="Image of a pizza"
    ></MenuCard>
    <MenuCard
      title="Chicken Pot Pie"
      rating="4.9"
      price="25.00"
      imgSrc="src/assets/img/chickenpot.jpg"
      imgAlt="Image of a chicken pot pie"
    ></MenuCard>
    <MenuCard
      title="Green Salad"
      rating="4.9"
      price="15.00"
      imgSrc="src/assets/img/salad.jpg"
      imgAlt="Image of a salad"
    ></MenuCard>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
}
</style>
