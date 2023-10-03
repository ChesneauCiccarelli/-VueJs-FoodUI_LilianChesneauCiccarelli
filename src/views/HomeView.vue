<script setup>
import MyCard from '@/components/MyCard.vue'
</script>

<template>
  <h1>Hello World</h1>
  <MyCard>
    <template #image>
      <img src="@/assets/img/enchilade.jpg" alt="Image d'une Enchilade" />
    </template>
    <template #title>
      <h2>Enchilade</h2>
    </template>
    <template #rating>
      <p>5.0</p>
    </template>
    <template #price>
      <p>$ 25.50</p>
    </template>
  </MyCard>
</template>

<style></style>
