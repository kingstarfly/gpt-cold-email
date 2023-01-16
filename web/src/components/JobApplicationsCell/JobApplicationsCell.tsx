import type { JobApplicationsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ApplicationCard from '../ApplicationCard/ApplicationCard'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query JobApplicationsQuery($userId: Int!) {
    jobApplications(userId: $userId) {
      id
      company {
        name
      }
      position
      country
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  jobApplications,
}: CellSuccessProps<JobApplicationsQuery>) => {
  const draftApplications = jobApplications.filter(
    (item) => item.status === 'Draft'
  )
  const sentApplications = jobApplications.filter(
    (item) => item.status === 'Sent'
  )

  function handleNewApplication() {
    console.log('New Application')
    navigate(routes.newJobApplication())
  }

  return (
    <div className="flex flex-row gap-16">
      <div>
        <div className="flex flex-row items-end justify-between">
          <h2 className="text-3xl font-semibold">
            Draft {`(${draftApplications.length})`}
          </h2>
          <button
            className="font-semibold opacity-50 cursor-pointer hover:opacity-100"
            onClick={() => handleNewApplication()}
          >
            + New
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {draftApplications.map((item) => {
            return <ApplicationCard key={item.id} item={item} />
          })}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold">
          Sent {`(${sentApplications.length})`}
        </h2>
        <div className="flex flex-col gap-4 mt-8">
          {sentApplications.map((item) => {
            return <ApplicationCard key={item.id} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}
