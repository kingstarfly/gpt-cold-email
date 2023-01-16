export const schema = gql`
  type Openai {
    text: String!
    index: Int!
    finish_reason: String!
  }
  type Query {
    getColdEmail(resume: String!, description: String!): Openai! @skipAuth
  }
`
