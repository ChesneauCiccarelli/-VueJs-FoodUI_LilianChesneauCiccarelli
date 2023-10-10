<template>
  <div class="bikeGelivery">
    <p class="bikeGelivery__title">Bike Delivery</p>
    <div class="bikeGelivery__img">
      <img src="src/assets/img/bikedelivery.jpg" alt="icon d'un livreur" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bikeGelivery {
  align-items: center;
  background-color: $secondary-color;
  border-radius: rem(50);
  color: $primary-color;
  display: flex;
  justify-content: space-between;
  gap: rem(60);
  margin-bottom: rem(70);
  padding-left: rem(25);
  padding-right: rem(5);
  padding-top: rem(5);
  padding-bottom: rem(5);
  width: fit-content;

  font-size: $regular-font-size;
  font-family: $primary-font-family;
  font-weight: 700;

  &__img {
    border-radius: 100%;
    overflow: hidden;
    height: 54px;
    width: 54px;
  }
}
</style>
