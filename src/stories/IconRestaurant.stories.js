import IconRestaurant from '@/components/elements/IconRestaurant.vue'

export default {
  title: 'Elements/Icons/Restaurant',
  component: IconRestaurant,
  argTypes: {
    name: {
      control: 'select',
      options: ['Food_1', 'Food_2', 'Delivery']
    },
    variant: {
      control: 'select',
      options: ['default', 'colored']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        IconRestaurant
      },
      setup() {
        return { args }
      },
      template: `<IconRestaurant v-bind="args" />`
    }
  },
  args: {
    name: 'Delivery',
    variant: 'default'
  }
}
