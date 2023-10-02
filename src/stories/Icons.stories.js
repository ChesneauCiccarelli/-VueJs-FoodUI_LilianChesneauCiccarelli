import Icons from '@/components/elements/Icons.vue'

export default {
  title: 'Elements/Icons/Ui',
  component: Icons,
  argTypes: {
    name: {
      control: 'select',
      options: ['Cart', 'Clock', 'Localisation', 'Search', 'Phone']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        Icons
      },
      setup() {
        return { args }
      },
      template: `<Icons v-bind="args" />`
    }
  },
  args: {
    name: 'Search'
  }
}
