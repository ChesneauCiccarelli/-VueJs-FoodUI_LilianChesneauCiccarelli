import IconSocials from '@/components/elements/IconSocials.vue'

export default {
  title: 'Elements/Icons/Socials',
  component: IconSocials,
  argTypes: {
    name: {
      control: 'select',
      options: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        IconSocials
      },
      setup() {
        return { args }
      },
      template: `<IconSocials v-bind="args" />`
    }
  },
  args: {
    name: 'Twitter'
  }
}
