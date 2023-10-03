import Card from '@/components/MyCard.vue'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    iconName: {
      control: 'text'
    },
    iconVariant: {
      control: 'text'
    },
    iconSize: {
      control: 'text'
    }
  }
}

export const Card_1 = {
  render: (args) => {
    return {
      components: {
        Card
      },
      setup() {
        return { args }
      },
      template: `<Card v-bind="args" />`
    }
  },
  args: {
    title: 'Quality Food',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
    iconName: 'Food_2',
    iconVariant: 'Secondary',
    iconSize: 'Medium'
  }
}

export const Card_2 = {
  args: {
    title: 'Healthy Food',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
    iconName: 'Food_1',
    iconVariant: 'Secondary',
    iconSize: 'Medium'
  }
}

export const Card_3 = {
  args: {
    title: 'Fast Delivery',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
    iconName: 'Delivery',
    iconVariant: 'Secondary',
    iconSize: 'Medium'
  }
}
