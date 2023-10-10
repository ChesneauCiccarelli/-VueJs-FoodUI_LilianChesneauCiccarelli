<script setup>
import MiniCard from '@/components/MiniCard.vue'
import { computed, onMounted, ref } from 'vue'

import axios from 'axios'
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const recipes = ref([])
const getRecipesAxios = async () => {
  const response = await client.get('/recipes')
  return response.data
}

const recipesBestSellers = 4
const bestSellers = computed(() => {
  // return recipes.value.filter((item) => item.image_url.toLowerCase().includes('.png'))
  return recipes.value.slice(0, recipesBestSellers)
})

onMounted(async () => {
  recipes.value = await getRecipesAxios()
})
</script>

<template>
  <div class="grid">
    <MiniCard
      v-for="recipe in bestSellers"
      :key="recipe.id"
      :title="recipe.recipe_name"
      :description="recipe.recipe_description"
      :price="recipe.price"
      :imgSrc="'src/assets/img/' + recipe.image_url"
      imgAlt="Image of a gyro sandwich"
    ></MiniCard>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
