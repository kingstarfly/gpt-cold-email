import { MetaTags } from '@redwoodjs/web'
import JobApplicationCell from 'src/components/JobApplicationCell'

type Props = {
  id?: number
}

const JobApplicationPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Application" description="Application page" />

      <JobApplicationCell id={id} />
    </>
  )
}

export default JobApplicationPage
