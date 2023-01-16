import { render } from '@redwoodjs/testing/web'

import UserAvatar from './UserAvatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserAvatar />)
    }).not.toThrow()
  })
})
