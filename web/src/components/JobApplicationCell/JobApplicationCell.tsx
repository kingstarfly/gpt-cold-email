import type {
  FindJobApplicationQuery,
  FindJobApplicationQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { FileInput, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

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

const JobApplicationContent = ({
  jobApplication,
}: Partial<
  CellSuccessProps<FindJobApplicationQuery, FindJobApplicationQueryVariables>
>) => {
  const { currentUser, isAuthenticated, logOut } = useAuth()
  const [emailContent, setEmailContent] = React.useState('')
  const form = useForm({
    initialValues: {
      companyName: jobApplication?.company?.name ?? '',
      companyValues: jobApplication?.company?.companyValues ?? '',
      jobPosition: jobApplication?.position ?? '',
      jobDescription: jobApplication?.jobDescription ?? '',
      resumeFile: '',
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
    // TODO: Send email
    console.log(emailContent)
  }
  return (
    <>
      <div className="flex flex-1 py-4 border-r-2 border-r-slate-800">
        <form
          className="flex flex-col flex-1 gap-8 px-16"
          onSubmit={form.onSubmit((values) => console.log(values))}
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

          <FileInput
            label="Your resume"
            placeholder="Choose a file"
            variant="default"
            required
            {...form.getInputProps('resumeFile')}
            disabled={jobApplication?.status === 'Sent'}
          />
          <button
            type="submit"
            className="self-center px-4 py-2 text-lg bg-teal-300 rounded hover:bg-teal-200 hover:outline hover:outline-2 hover:outline-teal-700"
          >
            Generate
          </button>
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
            label="Email Content"
            value={emailContent}
            onChange={(event) => setEmailContent(event.currentTarget.value)}
            minRows={20}
          />
          <button
            className="px-4 py-2 text-base bg-teal-300 rounded hover:bg-teal-200 hover:outline hover:outline-2 hover:outline-teal-700"
            onClick={() => handleSend()}
          >
            Send Email
          </button>
        </div>
      </div>
    </>
  )
}