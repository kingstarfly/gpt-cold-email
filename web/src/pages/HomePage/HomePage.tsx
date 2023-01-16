import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import JobApplicationsCell from 'src/components/JobApplicationsCell'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-col px-8">
        <h1 className="mb-16 text-5xl font-semibold">My Applications</h1>
        <JobApplicationsCell userId={currentUser.id} />
      </div>
    </>
  )
}

export default HomePage
