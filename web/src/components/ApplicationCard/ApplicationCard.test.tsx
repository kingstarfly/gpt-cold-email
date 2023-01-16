import { render } from '@redwoodjs/testing/web'

import ApplicationCard from './ApplicationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ApplicationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationCard />)
    }).not.toThrow()
  })
})
