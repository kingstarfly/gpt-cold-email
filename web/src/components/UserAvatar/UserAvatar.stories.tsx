// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserAvatar> = (args) => {
//   return <UserAvatar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UserAvatar from './UserAvatar'

export const generated = () => {
  return <UserAvatar />
}

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>
