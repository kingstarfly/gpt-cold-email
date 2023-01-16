export const getColdEmail = async ({ input }) => {
  const { Configuration, OpenAIApi } = require('openai')

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: input,
    temperature: 0,
    max_tokens: 7,
  })

  return response.data.choices[0]
}

function generatePrompt(resume, description) {
  return `
  Resume {$resume}
  Description {$description}`
}
