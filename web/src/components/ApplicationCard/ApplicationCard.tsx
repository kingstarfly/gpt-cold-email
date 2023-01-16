import { navigate, routes } from '@redwoodjs/router'
import { JobApplicationsQuery } from 'types/graphql'

type Props = {
  item: JobApplicationsQuery['jobApplications'][0]
}

const ApplicationCard = ({ item }: Props) => {
  return (
    <div
      className="h-32 p-4 duration-150 ease-in-out bg-white rounded-md shadow-md w-72 hover:-translate-y-1 hover:cursor-pointer"
      onClick={() => {
        navigate(routes.jobApplication({ id: item.id }))
      }}
    >
      <h2 className="text-2xl">{item.company.name}</h2>
      <h3 className="text-base font-semibold truncate">{item.position}</h3>
      <p className="text-xs font-light">{item.country}</p>
    </div>
  )
}

export default ApplicationCard
