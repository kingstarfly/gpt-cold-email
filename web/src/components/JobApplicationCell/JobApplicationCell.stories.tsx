import { AuthContext } from '@redwoodjs/auth/dist/AuthProvider'
import type { ComponentStory } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './JobApplicationCell'
import { draft, newApp, sent } from './JobApplicationCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty /> : <></>
}

export const failure: ComponentStory<typeof Failure> = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const successSent: ComponentStory<typeof Success> = (args) => {
  return Success ? <Success {...sent()} {...args} /> : <></>
}

export const successDraft: ComponentStory<typeof Success> = (args) => {
  return Success ? <Success {...draft()} {...args} /> : <></>
}

export const successNew: ComponentStory<typeof Success> = (args) => {
  return Success ? <Success {...newApp()} {...args} /> : <></>
}

export default { title: 'Cells/JobApplicationCell' }
