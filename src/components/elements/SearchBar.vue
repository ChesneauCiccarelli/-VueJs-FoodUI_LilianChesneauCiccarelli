<script setup>
import Icon from '@/components/elements/MyIcons.vue'
</script>

<template>
  <div class="searchbar searchbar__research">
    <div class="searchbar__left">
      <Icon variant="Default" name="Search" size="Small" />
      <input class="searchbar__input" type="text" placeholder="Search" />
    </div>
    <div class="searchbar__icon">
      <Icon variant="Default" name="Cart" size="Small" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  &__left {
    align-items: center;
    display: flex;
  }

  &__research {
    align-items: center;
    background-color: $white;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
    border-radius: rem(18);
    display: flex;
    justify-content: space-between;
    padding: rem(5) rem(10);
  }

  &__input {
    border: none;
    background-color: none;
    border-radius: none;

    &::placeholder {
      color: $black;
      font-size: $regular-font-size;
      font-family: $primary-font-family;
      font-weight: 500;
    }

    &:focus {
      outline: none;
    }
  }

  &__icon {
    padding-left: rem(10);
    border-left: solid 1px $gray;
  }
}
</style>
