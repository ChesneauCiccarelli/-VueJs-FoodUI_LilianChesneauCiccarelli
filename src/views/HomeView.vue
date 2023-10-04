<script setup>
import Section from '@/components/layouts/SectionLayout.vue'
import MenuLayout from '@/components/layouts/MenuLayout.vue'
import Button from '@/components/elements/MyButton.vue'
import Card from '@/components/MyCard.vue'
import ProcessCard from '@/components/ProcessCard.vue'
import Icon from '@/components/elements/MyIcons.vue'
</script>

<template>
  <main>
    <h1>Hello World</h1>
    <Section class="section" section="Product" title="Most Popular Items">
      <template #content>
        <MenuLayout></MenuLayout>
        <div class="product__button">
          <Button size="Small" variant="Rounded" href="#" showIcon>See More Products</Button>
        </div>
      </template>
    </Section>

    <Section class="section" section="Services" title="Why Choose Our Favorite Food">
      <template #content>
        <div class="flex">
          <Card
            title="Qualityfull Food"
            description="But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
            iconName="Food_2"
            iconVariant="Secondary"
            iconSize="Medium"
            styleCard="Neu-Pressed"
          ></Card>
          <Card
            title="Healthy Food"
            description="But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
            iconName="Food_1"
            iconVariant="Secondary"
            iconSize="Medium"
            styleCard="Neu-Over"
          ></Card>
          <Card
            title="Fast Delivery"
            description="But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
            iconName="Delivery"
            iconVariant="Secondary"
            iconSize="Medium"
            styleCard="Neu-Pressed"
          ></Card>
        </div>
      </template>
    </Section>

    <Section
      class="section"
      section="How To Work"
      title="Food Us An Important Part Of A Balanced Diet"
    >
      <template #content>
        <div class="flex process">
          <ProcessCard
            title="Choose"
            description="Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!"
            imgSrc="src/assets/img/pc.png"
            imgAlt="Image of a computer"
          />
          <ProcessCard
            title="Prepare Food"
            description="Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!"
            imgSrc="src/assets/img/chicken.png"
            imgAlt="Image of a chicken plate menu"
            reverse
          />
          <ProcessCard
            title="Deliver"
            description="Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!"
            imgSrc="src/assets/img/package.png"
            imgAlt="Image of a to go bag"
          />
        </div>
      </template>
    </Section>

    <Section class="section" section="Testimonials" title="Our Happy Client Says">
      <template #content>
        <div class="flex testimonial">
          <div class="flexRow flex1">
            <Icon class="testimonial__iconLeft" name="ArrowLeft" variant="Primary" size="Small" />
            <div class="testimonial__content">
              <div class="flex testimonial__content--container">
                <img
                  class="testimonial__content--picture"
                  src="src/assets/img/man.jpg"
                  alt="Image of a man"
                />
                <div>
                  <p class="testimonial__content--name">Willias Jhone</p>
                  <p class="testimonial__content--job">CEO & Co-Founder</p>
                </div>
              </div>
              <p class="testimonial__content--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui officiis
                molestiae quos neque incidunt repellendus quo quibusdam doloremque, fugit mollitia.
                Magni suscipit consequuntur earum porro quia odio perspiciatis tempora?
              </p>
            </div>
            <Icon class="testimonial__iconRight" name="ArrowRight" variant="Primary" size="Small" />
          </div>

          <div class="flex1">
            <img src="src/assets/img/burgerfriesmenu.png" alt="Image of a familly menu" />
          </div>
        </div>
      </template>
    </Section>
  </main>
</template>

<style lang="scss" scoped>
//General
main {
  margin: 0 150px;
}
.section {
  padding: rem(62) 0;
}

.flex {
  display: flex;
  justify-content: space-between;
}
.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex1 {
  flex: 1;
}

// First Section
.product__button {
  display: flex;
  justify-content: center;
  margin-top: rem(50);
}

// Second Section

// Third Section
div.process {
  text-align: center;

  :first-child {
    text-align: left;
  }

  :last-child {
    text-align: right;
  }
}

// Fourth Section
.testimonial {
  &__content {
    background: $white;
    border-radius: 35px;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
    padding: rem(110) rem(50);

    font-family: Helvetica, sans-serif;
    font-size: $regular-font-size;
    font-weight: 500;

    &--container {
      align-items: center;
      justify-content: center;
      gap: rem(15);
    }

    &--picture {
      clip-path: circle(50% at 50% 50%);
      height: rem(75);
    }

    &--name {
      font-size: $regular-font-size;
      font-weight: 600;
    }

    &--job {
      font-size: $small-font-size;
      font-weight: 400;
    }

    &--description {
      margin-top: rem(30);
      text-align: center;
    }
  }

  &__iconLeft {
    transform: translateX(50%);
  }

  &__iconRight {
    transform: translateX(-50%);
  }
}
</style>
