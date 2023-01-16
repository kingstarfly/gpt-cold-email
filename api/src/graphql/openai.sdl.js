export const schema = gql`
  type Openai {
    text: String!
    index: Int!
    finish_reason: String!
  }
  type Query {
    getColdEmail(input: String!): Openai! @skipAuth
  }
`
