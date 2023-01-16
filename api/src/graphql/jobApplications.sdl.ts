export const schema = gql`
  type JobApplication {
    id: Int!
    userId: Int!
    companyId: Int!
    status: String!
    position: String!
    dateApplied: DateTime
    resumeContent: String
    jobDescription: String
    user: User!
    company: Company!
  }

  type Query {
    jobApplications: [JobApplication!]! @requireAuth
    jobApplication(id: Int!): JobApplication @requireAuth
  }

  input CreateJobApplicationInput {
    userId: Int!
    companyId: Int!
    status: String!
    position: String!
    dateApplied: DateTime
    resumeContent: String
    jobDescription: String
  }

  input UpdateJobApplicationInput {
    userId: Int
    companyId: Int
    status: String
    position: String
    dateApplied: DateTime
    resumeContent: String
    jobDescription: String
  }

  type Mutation {
    createJobApplication(input: CreateJobApplicationInput!): JobApplication!
      @requireAuth
    updateJobApplication(
      id: Int!
      input: UpdateJobApplicationInput!
    ): JobApplication! @requireAuth
    deleteJobApplication(id: Int!): JobApplication! @requireAuth
  }
`
