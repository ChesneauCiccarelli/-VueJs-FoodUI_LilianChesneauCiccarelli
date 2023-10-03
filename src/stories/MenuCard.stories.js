import MenuCard from '@/components/MenuCard.vue'

export default {
  title: 'Components/MenuCard',
  component: MenuCard,
  argTypes: {
    title: {
      control: 'text'
    },
    rating: {
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

export const GyroSandwich = {
  render: (args) => {
    return {
      components: {
        MenuCard
      },
      setup() {
        return { args }
      },
      template: `<MenuCard v-bind="args" />`
    }
  },
  args: {
    title: 'Gyro Sandwich',
    rating: '4.9',
    price: '15.00',
    imgSrc: '/img/gyro.jpg',
    imgAlt: 'Image of a gyro sandwich'
  }
}

export const Enchilade = {
  ...GyroSandwich,
  args: {
    title: 'Enchilade',
    rating: '5.0',
    price: '22.50',
    imgSrc: '/img/enchilade.jpg',
    imgAlt: 'Image of an enchilade'
  }
}

export const GreenBeans = {
  ...GyroSandwich,
  args: {
    title: 'Green Beans',
    rating: '5.0',
    price: '12.00',
    imgSrc: '/img/greenbeans.jpg',
    imgAlt: 'Image of a green beens dish'
  }
}

export const Pizza = {
  ...GyroSandwich,
  args: {
    title: 'Pizza',
    rating: '5.0',
    price: '18.50',
    imgSrc: '/img/pizza.jpg',
    imgAlt: 'Image of a pizza'
  }
}

export const ChickenPotPie = {
  ...GyroSandwich,
  args: {
    title: 'Chicken Pot Pie',
    rating: '4.0',
    price: '25.00',
    imgSrc: '/img/chickenpot.jpg',
    imgAlt: 'Image of a chicken pot pie'
  }
}

export const GreenSalad = {
  ...GyroSandwich,
  args: {
    title: 'Green Salad',
    rating: '4.9',
    price: '15.00',
    imgSrc: '/img/salad.jpg',
    imgAlt: 'Image of a salad'
  }
}
