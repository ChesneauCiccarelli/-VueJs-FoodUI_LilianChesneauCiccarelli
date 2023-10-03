import Icons from '@/components/elements/MyIcons.vue'

export default {
  title: 'Elements/Ui-Icons',
  component: Icons,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Cart',
        'Clock',
        'Localisation',
        'Search',
        'Phone',
        'Star',
        'Play',
        'ArrowLeft',
        'ArrowRight',
        'Next',
        'Previous',
        'Food_1',
        'Food_2',
        'Delivery',
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Twitter'
      ]
    },
    variant: {
      control: 'select',
      options: ['Default', 'Primary', 'White', 'Black']
    },
    size: {
      control: 'select',
      options: ['Small', 'Medium', 'Big']
    }
  }
}

export const ArrowLeft = {
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
    name: 'ArrowLeft',
    variant: 'Default',
    size: 'Small'
  }
}

export const ArrowLeftBlack = {
  ...ArrowLeft,
  args: {
    name: 'ArrowLeft',
    variant: 'Black',
    size: 'Small'
  }
}

export const ArrowLeftPrimary = {
  ...ArrowLeft,
  args: {
    name: 'ArrowLeft',
    variant: 'Primary',
    size: 'Small'
  }
}

export const ArrowRight = {
  ...ArrowLeft,
  args: {
    name: 'ArrowRight',
    variant: 'Default',
    size: 'Small'
  }
}

export const ArrowRightBlack = {
  ...ArrowLeft,
  args: {
    name: 'ArrowRight',
    variant: 'Black',
    size: 'Small'
  }
}

export const ArrowRightPrimary = {
  ...ArrowLeft,
  args: {
    name: 'ArrowRight',
    variant: 'Primary',
    size: 'Small'
  }
}

export const Previous = {
  ...ArrowLeft,
  args: {
    name: 'Previous',
    variant: 'Default',
    size: 'Small'
  }
}

export const PreviousBlack = {
  ...ArrowLeft,
  args: {
    name: 'Previous',
    variant: 'Black',
    size: 'Small'
  }
}

export const PreviousWhite = {
  ...ArrowLeft,
  args: {
    name: 'Previous',
    variant: 'White',
    size: 'Small'
  }
}

export const Next = {
  ...ArrowLeft,
  args: {
    name: 'Next',
    variant: 'Default',
    size: 'Small'
  }
}

export const NextBlack = {
  ...ArrowLeft,
  args: {
    name: 'Next',
    variant: 'Black',
    size: 'Small'
  }
}

export const NextWhite = {
  ...ArrowLeft,
  args: {
    name: 'Next',
    variant: 'White',
    size: 'Small'
  }
}

export const Food_1 = {
  ...ArrowLeft,
  args: {
    name: 'Food_1',
    variant: 'Default',
    size: 'Medium'
  }
}

export const Food_1Secondary = {
  ...ArrowLeft,
  args: {
    name: 'Food_1',
    variant: 'Secondary',
    size: 'Medium'
  }
}

export const Food_2 = {
  ...ArrowLeft,
  args: {
    name: 'Food_2',
    variant: 'Default',
    size: 'Medium'
  }
}

export const Food_2Secondary = {
  ...ArrowLeft,
  args: {
    name: 'Food_2',
    variant: 'Secondary',
    size: 'Medium'
  }
}

export const Delivery = {
  ...ArrowLeft,
  args: {
    name: 'Delivery',
    variant: 'Default',
    size: 'Medium'
  }
}

export const DeliverySecondary = {
  ...ArrowLeft,
  args: {
    name: 'Delivery',
    variant: 'Secondary',
    size: 'Medium'
  }
}

export const Cart = {
  ...ArrowLeft,
  args: {
    name: 'Cart',
    variant: 'Default',
    size: 'Small'
  }
}

export const Search = {
  ...ArrowLeft,
  args: {
    name: 'Search',
    variant: 'Default',
    size: 'Small'
  }
}

export const Clock = {
  ...ArrowLeft,
  args: {
    name: 'Clock',
    variant: 'Default',
    size: 'Small'
  }
}
export const Localisation = {
  ...ArrowLeft,
  args: {
    name: 'Localisation',
    variant: 'Default',
    size: 'Small'
  }
}
export const Phone = {
  ...ArrowLeft,
  args: {
    name: 'Phone',
    variant: 'Default',
    size: 'Small'
  }
}
export const Star = {
  ...ArrowLeft,
  args: {
    name: 'Star',
    variant: 'Default',
    size: 'Small'
  }
}

export const Facebook = {
  ...ArrowLeft,
  args: {
    name: 'Facebook',
    variant: 'Secondary',
    size: 'Small'
  }
}

export const Instagram = {
  ...ArrowLeft,
  args: {
    name: 'Instagram',
    variant: 'Secondary',
    size: 'Small'
  }
}

export const LinkedIn = {
  ...ArrowLeft,
  args: {
    name: 'LinkedIn',
    variant: 'Secondary',
    size: 'Small'
  }
}

export const Twitter = {
  ...ArrowLeft,
  args: {
    name: 'Twitter',
    variant: 'Secondary',
    size: 'Small'
  }
}
