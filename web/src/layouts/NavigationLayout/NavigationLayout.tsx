import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import UserAvatar from 'src/components/UserAvatar/UserAvatar'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-indigo-50 to-lime-50">
      <header className="flex flex-row items-center justify-between px-2 py-4 bg-teal-200">
        <h1>coldMaiL</h1>
        <UserAvatar />
      </header>
      <main className="flex flex-row flex-1">{children}</main>
    </div>
  )
}

export default NavigationLayout
