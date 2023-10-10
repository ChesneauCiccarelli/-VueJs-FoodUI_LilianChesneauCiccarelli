<script setup>
import MenuCard from '@/components/MenuCard.vue'
import Button from '@/components/elements/MyButton.vue'
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
const gridPage = ref(1)
const menuItems = computed(() => {
  const recipesByPage = 6
  return recipes.value.slice(
    recipesBestSellers,
    recipesBestSellers + recipesByPage * gridPage.value
  )
})

const moreRecipesToShow = computed(() => {
  return menuItems.value.length < recipes.value.length - recipesBestSellers
})

const showMore = () => {
  gridPage.value++
}

onMounted(async () => {
  recipes.value = await getRecipesAxios()
})
</script>

<template>
  <div class="grid">
    <MenuCard
      v-for="recipe in menuItems"
      :key="recipe.id"
      :title="recipe.recipe_name"
      :rating="recipe.rating"
      :price="recipe.price"
      :imgSrc="'src/assets/img/' + recipe.image_url"
      imgAlt="Image of a gyro sandwich"
    ></MenuCard>
  </div>
  <Button
    v-if="moreRecipesToShow"
    class="product__button"
    size="Small"
    variant="Rounded"
    showIcon
    @click="showMore"
  >
    See More Products
  </Button>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
}

.product__button {
  display: flex;
  justify-content: center;
  margin-top: rem(50);
}
</style>
