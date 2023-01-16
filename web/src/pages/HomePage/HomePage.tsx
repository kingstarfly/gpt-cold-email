import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobApplicationsCell from 'src/components/JobApplicationsCell'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <JobApplicationsCell userId={currentUser.id} />
    </>
  )
}

export default HomePage
