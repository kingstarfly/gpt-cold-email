import type { ComponentMeta, ComponentStory } from '@storybook/react'

import NavigationLayout from './NavigationLayout'

export const generated: ComponentStory<typeof NavigationLayout> = (args) => {
  return <NavigationLayout {...args} />
}

export default {
  title: 'Layouts/NavigationLayout',
  component: NavigationLayout,
} as ComponentMeta<typeof NavigationLayout>
