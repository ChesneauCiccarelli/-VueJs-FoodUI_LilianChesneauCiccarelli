<script setup>
import Section from '@/components/layouts/SectionLayout.vue'
import MenuLayout from '@/components/layouts/MenuLayout.vue'
import Button from '@/components/elements/MyButton.vue'
</script>

<template>
  <main>
    <h1>Hello World</h1>
    <Section section="Product" title="Most Popular Items">
      <template #content>
        <MenuLayout></MenuLayout>
        <div class="product__button">
          <Button size="Small" variant="Rounded" href="#">See More Products</Button>
        </div>
      </template>
    </Section>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 0 200px;
}
.product__button {
  display: flex;
  justify-content: center;
  margin-top: rem(50);
}
</style>
