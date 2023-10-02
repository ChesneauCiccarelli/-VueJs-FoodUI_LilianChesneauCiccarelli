import Neumorphism from '@/components/layouts/Neumorphism.vue'

export default {
  title: 'Elements/Layouts/Neumorphism',
  component: Neumorphism,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pressed']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        Neumorphism
      },
      setup() {
        return { args }
      },
      template: `<Neumorphism v-bind="args" />`
    }
  },
  args: {
    variant: 'default'
  }
}
