import { render } from '@redwoodjs/testing/web'

import JobApplicationPage from './JobApplicationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobApplicationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobApplicationPage />)
    }).not.toThrow()
  })
})
