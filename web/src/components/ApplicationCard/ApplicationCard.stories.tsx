// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ApplicationCard> = (args) => {
//   return <ApplicationCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ApplicationCard from './ApplicationCard'

export const generated = () => {
  return <ApplicationCard />
}

export default {
  title: 'Components/ApplicationCard',
  component: ApplicationCard,
} as ComponentMeta<typeof ApplicationCard>
