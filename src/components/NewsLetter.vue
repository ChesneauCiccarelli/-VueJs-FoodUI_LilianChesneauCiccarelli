<script setup></script>

<template>
  <section class="flex relative">
    <div class="absolute">
      <img class="image" src="@/assets/img/burger.png" alt="Image of a burger" />
    </div>
    <div class="newsletter">
      <h3 class="newsletter__title">Subcribe To Our Newsletter</h3>
      <p class="newsletter__text">
        Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna
        venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.
      </p>
      <form action="submit" class="newsletter__form">
        <div class="newsletter__form--container">
          <input class="newsletter__form--input" placeholder="Type your email ....." type="email" />
          <button class="newsletter__form--btn" type="button">Subscribe</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex {
  align-items: center;
  background-color: $black;
  border-radius: 50px;
  color: $white;
  display: flex;
  margin: rem(75) 0;
  padding: rem(105) rem(75);
}

.relative {
  position: relative;
}
.absolute {
  position: absolute;
  bottom: -170px;
  left: -10px;
}

.image {
  scale: 1.2;
}

.newsletter {
  display: flex;
  flex-direction: column;
  gap: rem(15);
  transform: translateX(100%);
  width: 50%;

  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;

  &__title {
    font-size: $big-font-size;
    font-weight: 700;
  }

  &__form {
    background-color: $white;
    border-radius: 15px;
    display: flex;
    padding: rem(10);

    &--container {
      background-color: $white;
      display: flex;
      width: 100%;
    }

    &--input {
      border: none;
      border: none;
      outline: none;
      padding-left: rem(30);
      width: 100%;
    }

    &--btn {
      background-color: $primary-color;
      border: none;
      border-radius: 15px;
      color: $white;
      padding: rem(14) rem(24);

      font-size: $regular-font-size;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
