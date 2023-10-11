<script setup>
import Icon from '@/components/elements/MyIcons.vue'
import Newsletter from '@/components/elements/MyNewsletter.vue'
</script>

<template>
  <section class="footer">
    <div class="footer__item">
      <img class="footer__item--image" src="../../src/assets/img/logo.png" alt="Brand Logo" />
      <p class="footer__item--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio
        sit malesuada in quis. Arcu tristique elementum viverra integer id.
      </p>
      <div class="socials">
        <Icon name="Facebook" variant="Secondary" size="Small" />
        <Icon name="Twitter" variant="Secondary" size="Small" />
        <Icon name="LinkedIn" variant="Secondary" size="Small" />
        <Icon name="Instagram" variant="Secondary" size="Small" />
      </div>
    </div>
    <div class="footer__item">
      <h4 class="footer__item--title">Opening Restaurant</h4>
      <div class="flex">
        <p class="footer__item--text">Sat-Wet: 09:00am-10:00PM</p>
        <p class="footer__item--text">Thursdayt: 09:00am-11:00PM</p>
        <p class="footer__item--text">Friday: 09:00am-8:00PM</p>
      </div>
    </div>
    <div class="footer__item">
      <h4 class="footer__item--title">User Link</h4>
      <div>
        <nav>
          <ul class="flex">
            <li class="footer__item--text">About Us</li>
            <li class="footer__item--text">Contact Us</li>
            <li class="footer__item--text">Order Delivery</li>
            <li class="footer__item--text">Payment & Tax</li>
            <li class="footer__item--text">Terms of services</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footer__item">
      <h4 class="footer__item--title">Contact Us</h4>
      <div class="flex">
        <address class="footer__item--text">1234 Country Club Ave, NC 123456, London, UK</address>
        <a class="footer__item--text tel" href="tel:+0123 456 7891">+0123 456 7891</a>
        <Newsletter mini />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #fafaff;
  color: #b6b6b6;
  display: flex;
  flex-direction: row;
  gap: rem(100);
  margin-top: 150px;
  padding: 55px 150px;

  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;

  &__item {
    flex: 1;

    &--image {
      width: 180px;
      padding-bottom: 30px;
    }

    &--title {
      color: $black;
      margin-bottom: 110px;

      font-size: 26px;
      font-weight: 700;
    }
  }
}

.socials {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 15px;
}

.flex {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tel {
  text-decoration: none;
  color: inherit;
}
</style>
