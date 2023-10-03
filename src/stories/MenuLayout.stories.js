import MenuLayout from '@/components/layouts/MenuLayout.vue'

export default {
  title: 'Components/Layouts/Menu',
  component: MenuLayout
}

export const Layout = {
  render: (args) => {
    return {
      components: {
        MenuLayout
      },
      setup() {
        return { args }
      },
      template: `<MenuLayout />`
    }
  }
}
