import type {
  QueryResolvers,
  MutationResolvers,
  JobApplicationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobApplications: QueryResolvers['jobApplications'] = () => {
  return db.jobApplication.findMany()
}

export const jobApplication: QueryResolvers['jobApplication'] = ({ id }) => {
  return db.jobApplication.findUnique({
    where: { id },
  })
}

export const createJobApplication: MutationResolvers['createJobApplication'] =
  ({ input }) => {
    return db.jobApplication.create({
      data: input,
    })
  }

export const updateJobApplication: MutationResolvers['updateJobApplication'] =
  ({ id, input }) => {
    return db.jobApplication.update({
      data: input,
      where: { id },
    })
  }

export const deleteJobApplication: MutationResolvers['deleteJobApplication'] =
  ({ id }) => {
    return db.jobApplication.delete({
      where: { id },
    })
  }

export const JobApplication: JobApplicationRelationResolvers = {
  user: (_obj, { root }) => {
    return db.jobApplication.findUnique({ where: { id: root?.id } }).user()
  },
  company: (_obj, { root }) => {
    return db.jobApplication.findUnique({ where: { id: root?.id } }).company()
  },
}
