import type { JobApplication } from '@prisma/client'

import {
  jobApplications,
  jobApplication,
  createJobApplication,
  updateJobApplication,
  deleteJobApplication,
} from './jobApplications'
import type { StandardScenario } from './jobApplications.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobApplications', () => {
  scenario(
    'returns all jobApplications',
    async (scenario: StandardScenario) => {
      const result = await jobApplications()

      expect(result.length).toEqual(Object.keys(scenario.jobApplication).length)
    }
  )

  scenario(
    'returns a single jobApplication',
    async (scenario: StandardScenario) => {
      const result = await jobApplication({
        id: scenario.jobApplication.one.id,
      })

      expect(result).toEqual(scenario.jobApplication.one)
    }
  )

  scenario('creates a jobApplication', async (scenario: StandardScenario) => {
    const result = await createJobApplication({
      input: {
        userId: scenario.jobApplication.two.userId,
        companyId: scenario.jobApplication.two.companyId,
        status: 'String',
        position: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.jobApplication.two.userId)
    expect(result.companyId).toEqual(scenario.jobApplication.two.companyId)
    expect(result.status).toEqual('String')
    expect(result.position).toEqual('String')
  })

  scenario('updates a jobApplication', async (scenario: StandardScenario) => {
    const original = (await jobApplication({
      id: scenario.jobApplication.one.id,
    })) as JobApplication
    const result = await updateJobApplication({
      id: original.id,
      input: { status: 'String2' },
    })

    expect(result.status).toEqual('String2')
  })

  scenario('deletes a jobApplication', async (scenario: StandardScenario) => {
    const original = (await deleteJobApplication({
      id: scenario.jobApplication.one.id,
    })) as JobApplication
    const result = await jobApplication({ id: original.id })

    expect(result).toEqual(null)
  })
})
