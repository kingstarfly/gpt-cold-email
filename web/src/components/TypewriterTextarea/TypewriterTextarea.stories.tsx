// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TypewriterTextarea> = (args) => {
//   return <TypewriterTextarea {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TypewriterTextarea from './TypewriterTextarea'

export const generated = () => {
  return <TypewriterTextarea />
}

export default {
  title: 'Components/TypewriterTextarea',
  component: TypewriterTextarea,
} as ComponentMeta<typeof TypewriterTextarea>
