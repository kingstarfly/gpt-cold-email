import type { ComponentMeta } from '@storybook/react'

import JobApplicationPage from './JobApplicationPage'

export const generated = () => {
  return <JobApplicationPage />
}

export default {
  title: 'Pages/JobApplicationPage',
  component: JobApplicationPage,
} as ComponentMeta<typeof JobApplicationPage>
