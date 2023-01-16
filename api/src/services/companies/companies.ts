import type {
  QueryResolvers,
  MutationResolvers,
  CompanyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const companies: QueryResolvers['companies'] = () => {
  return db.company.findMany()
}

export const company: QueryResolvers['company'] = ({ id }) => {
  return db.company.findUnique({
    where: { id },
  })
}

export const createCompany: MutationResolvers['createCompany'] = ({
  input,
}) => {
  return db.company.create({
    data: input,
  })
}

export const updateCompany: MutationResolvers['updateCompany'] = ({
  id,
  input,
}) => {
  return db.company.update({
    data: input,
    where: { id },
  })
}

export const deleteCompany: MutationResolvers['deleteCompany'] = ({ id }) => {
  return db.company.delete({
    where: { id },
  })
}

export const Company: CompanyRelationResolvers = {
  JobApplication: (_obj, { root }) => {
    return db.company.findUnique({ where: { id: root?.id } }).JobApplication()
  },
}
