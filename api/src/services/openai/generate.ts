import { logger } from 'src/lib/logger'

const { Configuration, OpenAIApi } = require('openai')
const textract = require('textract')

export const getColdEmail = async ({
  resumeUrl,
  description,
  companyValues,
  recruiterName,
}: {
  resumeUrl: string
  description: string
  companyValues: string
  recruiterName: string
}) => {
  const parseTextPromise = () => {
    return new Promise((resolve, reject) => {
      textract.fromUrl(resumeUrl, function (error, text) {
        if (error) {
          reject(error)
        } else {
          resolve(text)
        }
      })
    })
  }

  const resumeText = (await parseTextPromise()) as string
  console.log('resumeText', resumeText)

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(
      resumeText,
      description,
      companyValues,
      recruiterName
    ),
    temperature: 0,
    max_tokens: 512,
  })

  return response.data.choices[0]
}

function generatePrompt(
  resumeText: string,
  description: string,
  companyValues: string,
  recruiterName: string
) {
  return `
  This is my resume:
${resumeText}

This is the job description of the position that I'm applying for:
${description}

The values of the company are:
${companyValues}

Write a tailored cold email of at most 125 words in the body to a recruiter named ${recruiterName}. From the requirements in the job description, identify 1-2 of my most related experiences and put them in the email. Do not use my resume, job description, or company values verbatim. Please end the email with "Let me know what the next steps look like for the interview process. I have attached my resume below."
`
}
