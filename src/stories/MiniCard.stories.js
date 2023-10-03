import MiniCard from '@/components/MiniCard.vue'

export default {
  title: 'Components/MiniCard',
  component: MiniCard,
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    price: {
      control: 'text'
    },
    imgSrc: {
      control: 'text'
    },
    imgAlt: {
      control: 'text'
    }
  }
}

export const Burger = {
  render: (args) => {
    return {
      components: {
        MiniCard
      },
      setup() {
        return { args }
      },
      template: `<MiniCard v-bind="args" />`
    }
  },
  args: {
    title: 'Burger',
    description: 'Mushroom Sauce',
    price: '5.15',
    imgSrc: '/img/burger.png',
    imgAlt: 'Image of a burger'
  }
}

export const Menu = {
  ...Burger,
  args: {
    title: 'Food Combo',
    description: 'Mushroom Sauce',
    price: '9.15',
    imgSrc: '/img/menu.png',
    imgAlt: 'Image of a food combo'
  }
}

export const Pizza = {
  ...Burger,
  args: {
    title: 'Pizza',
    description: 'Mushroom Sauce',
    price: '6.15',
    imgSrc: '/img/pizza.png',
    imgAlt: 'Image of a pizza'
  }
}

export const Cake = {
  ...Burger,
  args: {
    title: 'Cake',
    description: 'Mushroom Sauce',
    price: '5.15',
    imgSrc: '/img/cake.png',
    imgAlt: 'Image of a cake'
  }
}
