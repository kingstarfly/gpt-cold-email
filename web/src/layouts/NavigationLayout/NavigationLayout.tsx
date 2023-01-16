import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import UserAvatar from 'src/components/UserAvatar/UserAvatar'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-blue-200">
      <header className="flex flex-row items-center justify-between px-4 py-2 rounded-md shadow-md">
        <Link to={routes.home()}>coldMaiL</Link>
        <UserAvatar />
      </header>
      <main className="flex flex-row flex-1 py-8">{children}</main>
    </div>
  )
}

export default NavigationLayout
