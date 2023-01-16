export const getColdEmail = async ({ resume, description }) => {
  const { Configuration, OpenAIApi } = require('openai')

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(resume, description),
    temperature: 0,
    max_tokens: 512,
  })

  return response.data.choices[0]
}

function generatePrompt(resume, description) {
  return `
  This is my resume:
  ${resume}

  This is the job description of the position that I'm applying for:
  ${description}

  Write a tailored cold email of 3-4 paragraphs to a recruiter. From the requirements in the job description, identify 1-2 of my most related experiences. Do not repeat my resume or the job description verbatim. Please end the email with "Let me know what the next steps look like for the interview process. I have attached my resume below."`
}
