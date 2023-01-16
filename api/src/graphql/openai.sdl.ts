export const schema = gql`
  type Openai {
    text: String!
    index: Int!
    finish_reason: String!
  }
  type Query {
    getColdEmail(
      resumeUrl: String!
      description: String!
      companyValues: String!
      recruiterName: String!
    ): Openai! @skipAuth
  }
`
