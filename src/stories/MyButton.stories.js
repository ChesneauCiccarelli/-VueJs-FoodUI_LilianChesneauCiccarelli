import MyButton from '@/components/elements/MyButton.vue'

export default {
  title: 'Elements/Buttons',
  component: MyButton,
  argTypes: {
    href: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['Regular', 'Small', 'Medium']
    },
    variant: {
      control: 'select',
      options: ['Default', 'Rounded']
    },
    showIcon: {
      control: 'boolean'
    }
  }
}

export const OrderBTN = {
  render: (args) => {
    return {
      components: {
        MyButton
      },
      setup() {
        return { args }
      },
      template: `<MyButton v-bind="args" >{{ args.text }}</MyButton>`
    }
  },
  args: {
    size: 'Regular',
    variant: 'Default',
    text: 'Order Now',
    showIcon: false
  }
}

export const LearnMore = {
  ...OrderBTN,
  args: {
    size: 'Medium',
    variant: 'Rounded',
    text: 'Learn More',
    showIcon: false
  }
}

export const SeeMore = {
  ...OrderBTN,
  args: {
    size: 'Small',
    variant: 'Rounded',
    text: 'See More Products',
    showIcon: true
  }
}

export const OrderNow = {
  ...OrderBTN,
  args: {
    size: 'Small',
    variant: 'Rounded',
    text: 'Order Now',
    showIcon: false
  }
}
