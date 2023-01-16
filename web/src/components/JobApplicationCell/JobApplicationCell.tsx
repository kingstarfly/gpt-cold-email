import type {
  FindJobApplicationQuery,
  FindJobApplicationQueryVariables,
  GenerateColdEmail,
  Openai,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import {
  Anchor,
  Button,
  FileInput,
  Group,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { useAuth } from '@redwoodjs/auth'
import { PickerDropPane } from 'filestack-react'
import { useLazyQuery } from '@apollo/client'
import { GenerateColdEmailVariables } from '../../../types/graphql'
import TypewriterTextarea from '../TypewriterTextarea/TypewriterTextarea'

export const QUERY = gql`
  query FindJobApplicationQuery($id: Int) {
    jobApplication: jobApplication(id: $id) {
      id
      company {
        companyValues
        name
        recruiterName
        recruiterEmail
      }

      dateApplied
      jobDescription
      position
      resumeContent
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <JobApplicationContent />
export const Failure = ({
  error,
}: CellFailureProps<FindJobApplicationQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  jobApplication,
}: CellSuccessProps<
  FindJobApplicationQuery,
  FindJobApplicationQueryVariables
>) => {
  return <JobApplicationContent jobApplication={jobApplication} />
}

const GENERATE_EMAIL_QUERY = gql`
  query GenerateColdEmail(
    $resumeUrl: String!
    $description: String!
    $companyValues: String!
    $recruiterName: String!
  ) {
    getColdEmail(
      resumeUrl: $resumeUrl
      description: $description
      companyValues: $companyValues
      recruiterName: $recruiterName
    ) {
      text
      index
      finish_reason
    }
  }
`

const JobApplicationContent = ({
  jobApplication,
}: Partial<
  CellSuccessProps<FindJobApplicationQuery, FindJobApplicationQueryVariables>
>) => {
  const { currentUser, isAuthenticated, logOut } = useAuth()
  const [resumeUrl, setResumeUrl] = React.useState('')
  const [resumeFileName, setResumeFileName] = React.useState('')
  const [emailContent, setEmailContent] = React.useState('')
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)

  const [hasUploaded, setHasUploaded] = React.useState(false)

  const [generateColdEmailContent] = useLazyQuery<
    GenerateColdEmail,
    GenerateColdEmailVariables
  >(GENERATE_EMAIL_QUERY)

  const form = useForm({
    initialValues: {
      companyName: jobApplication?.company?.name ?? '',
      companyValues: jobApplication?.company?.companyValues ?? '',
      jobPosition: jobApplication?.position ?? '',
      jobDescription: jobApplication?.jobDescription ?? '',
      resumeUrl: '',
    },

    validate: {
      companyName: (value) => {
        if (!value) {
          return 'Company name is required'
        }
      },
      companyValues: (value) => {
        if (!value && !jobApplication?.company.companyValues) {
          return 'Company values are required'
        }
      },
      jobPosition: (value) => {
        if (!value) {
          return 'Job position is required'
        }
      },
      jobDescription: (value) => {
        if (!value) {
          return 'Job description is required'
        }
      },
    },
  })

  function handleSend() {
    showNotification({
      title: 'Success',
      message: 'Email has been sent!',
      autoClose: 2000,
    })
    console.log(emailContent)
  }

  async function handleGenerateEmail() {
    setIsGenerating(true)
    console.log('Attempt to generate email')
    console.log('resumeUrl', resumeUrl)
    console.log('jobDescription', form.values.jobDescription)

    console.log(form.values)

    const { data, loading, error } = await generateColdEmailContent({
      variables: {
        description: form.values.jobDescription,
        companyValues: form.values.companyValues,
        resumeUrl: resumeUrl,
        recruiterName: jobApplication.company.recruiterName,
      },
    })

    console.log(data)
    setIsGenerating(false)
    setEmailContent(data.getColdEmail.text)
  }
  return (
    <>
      <div className="flex flex-1 border-r-2 border-r-slate-800">
        <form
          className="flex flex-col flex-1 gap-8 px-16"
          onSubmit={(event) => {
            event.preventDefault()
            handleGenerateEmail()
          }}
        >
          <h1 className="text-4xl font-semibold">
            {jobApplication?.status ?? 'New'} Application
          </h1>

          <TextInput
            label="Company Name"
            {...form.getInputProps('companyName')}
            required
            disabled={jobApplication?.status === 'Sent'}
          />

          <Textarea
            label="Company Values"
            {...form.getInputProps('companyValues')}
            rows={10}
            required
            disabled={jobApplication?.status === 'Sent'}
          />

          <TextInput
            label="Job Position"
            {...form.getInputProps('jobPosition')}
            required
            disabled={jobApplication?.status === 'Sent'}
          />

          <Textarea
            label="Job Description"
            {...form.getInputProps('jobDescription')}
            rows={10}
            required
            disabled={jobApplication?.status === 'Sent'}
          />
          <div className="flex flex-col gap-1">
            <label className="mb-0 mantine-InputWrapper-label mantine-Textarea-label mantine-ittua2">
              Resume
            </label>
            {hasUploaded ? (
              <div className="flex flex-col items-center">
                <a className="underline" href={resumeUrl}>
                  {resumeFileName}
                </a>
                <button
                  className="text-red-400 hover:cursor-pointer"
                  onClick={() => {
                    setHasUploaded(false)
                    setResumeFileName('')
                    setResumeUrl('')
                  }}
                >
                  Re-upload
                </button>
              </div>
            ) : (
              <PickerDropPane
                pickerOptions={{
                  disableTransformer: true,
                  viewType: 'grid',
                }}
                onUploadDone={(res: any) => {
                  console.log('Upload done')
                  console.log(res)
                  setHasUploaded(true)
                  setResumeFileName(res.filesUploaded[0].filename)
                  setResumeUrl(res.filesUploaded[0].url)
                }}
                onError={(err) => {
                  setHasUploaded(true)
                  console.log('I am at onError')
                  console.log(err)
                }}
                apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
              />
            )}
          </div>

          <div className="flex flex-row justify-center">
            <Button
              type="submit"
              loading={isGenerating}
              variant="gradient"
              gradient={{ from: '#1d4ed8', to: '#06b6d4' }}
              disabled={resumeUrl === '' || form.values.jobDescription === ''}
            >
              Generate
            </Button>
          </div>
        </form>
      </div>

      <div className="flex flex-1 py-4 border-r-2">
        <div className="flex flex-col flex-1 gap-4 px-16">
          <p>
            <span className="font-semibold">To: </span>
            {jobApplication?.company.recruiterEmail}
          </p>
          <p>
            <span className="font-semibold">Title: </span>
            {currentUser?.firstName} {currentUser?.lastName}'s Application for{' '}
            {jobApplication?.position} position at{' '}
            {jobApplication?.company.name}
          </p>
          <Textarea
            value={
              isGenerating
                ? 'Generating your custom email...'
                : emailContent
                ? emailContent
                : 'Click "Generate" to generate your custom email'
            }
            onChange={(event) => setEmailContent(event.currentTarget.value)}
            minRows={20}
          />
          {/*
          {!emailContent ? (
            <Textarea
              value={"Click 'Generate' to generate your custom email"}
              minRows={20}
            />
          ) : isEditing ? (
            <Textarea
              value={
                isGenerating ? 'Generating your custom email...' : emailContent
              }
              onChange={(event) => setEmailContent(event.currentTarget.value)}
              minRows={20}
            />
          ) : (
            <TypewriterTextarea content={emailContent} />
          )}
          */}

          <div className="flex flex-row justify-center gap-16">
            {/* <Button
              variant="outline"
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? 'Done' : 'Edit'}
            </Button> */}
            <Button
              className="px-4 py-2 text-base bg-blue-300 rounded hover:bg-blue-200 hover:outline hover:outline-2 hover:outline-blue-700"
              onClick={() => handleSend()}
              variant="gradient"
              gradient={{ from: '#1d4ed8', to: '#06b6d4' }}
              disabled={emailContent === ''}
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
