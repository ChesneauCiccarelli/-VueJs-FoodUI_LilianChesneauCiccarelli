import IconArrow from '@/components/elements/IconArrow.vue'

export default {
  title: 'Elements/Icons/Arrow',
  component: IconArrow,
  argTypes: {
    name: {
      control: 'select',
      options: ['ArrowLeft', 'ArrowRight', 'Next', 'Previous']
    },
    variant: {
      control: 'select',
      options: ['Default', 'Primary', 'White', 'Black']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        IconArrow
      },
      setup() {
        return { args }
      },
      template: `<IconArrow v-bind="args" />`
    }
  },
  args: {
    name: 'ArrowLeft',
    variant: 'Default'
  }
}
