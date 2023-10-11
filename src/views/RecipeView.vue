<script setup>
import Header from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyButton from '@/components/elements/MyButton.vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { client } from '@/utils/axios.js'

const route = useRoute()

const recipe = ref({})
const getRecipeByIdAxios = async (id) => {
  const response = await client.get(`/recipes/${id}`)
  return response.data
}

onMounted(() => {
  const id = route.params.id
  getRecipeByIdAxios(id).then((data) => {
    recipe.value = data
  })
})
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <div class="card">
      <h1 class="card__title">{{ recipe.recipe_name }}</h1>
      <img :src="'../src/assets/img/' + recipe.image_url" alt="Recipe Image" />
      <p>{{ recipe.recipe_description }}</p>
      <div class="card__infos">
        <div>
          <p>Rating</p>
          <p>{{ recipe.rating }}</p>
        </div>
        <div>
          <p>Price</p>
          <p>${{ recipe.price }}</p>
        </div>
      </div>

      <MyButton size="Small" variant="Rounded">
        <RouterLink to="/" class="RouterLink">Retour à l'accueuil</RouterLink>
      </MyButton>
    </div>
  </main>

  <footer>
    <MyFooter />
  </footer>
</template>

<style lang="scss" scoped>
.RouterLink {
  color: $white;

  font-family: Helvetica, sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
}

main {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.card {
  background: $secondary-color;
  border-radius: 15px;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: rem(20);
  height: fit-content;
  margin-top: rem(100);
  padding: rem(50);
  width: 500px;

  font-family: Helvetica, sans-serif;
  font-size: $medium-font-size;
  font-weight: 500;
  text-align: center;

  &__title {
    font-size: $big-font-size;
    font-weight: 700;
  }

  &__infos {
    display: flex;
    justify-content: space-around;

    font-size: $regular-font-size;
    font-weight: 700;
  }
}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 16px;
}

.card button {
  padding: 8px 25px;
  display: block;
  margin: auto;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  background: #6b64f3;
  color: white;
  font-weight: 600;
}
</style>
