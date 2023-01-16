export const schema = gql`
  type Company {
    id: Int!
    name: String!
    displayPhoto: String
    companyValues: String
    recruiterEmail: String
    recruiterName: String
    JobApplication: [JobApplication]!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: Int!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    displayPhoto: String
    companyValues: String
    recruiterEmail: String
    recruiterName: String
  }

  input UpdateCompanyInput {
    name: String
    displayPhoto: String
    companyValues: String
    recruiterEmail: String
    recruiterName: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
