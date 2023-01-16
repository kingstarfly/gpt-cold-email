import { render } from '@redwoodjs/testing/web'

import TypewriterTextarea from './TypewriterTextarea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TypewriterTextarea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TypewriterTextarea />)
    }).not.toThrow()
  })
})
