import type { Prisma, JobApplication } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobApplicationCreateArgs>({
  jobApplication: {
    one: {
      data: {
        status: 'String',
        position: 'String',
        user: {
          create: {
            email: 'String2753210',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        company: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        status: 'String',
        position: 'String',
        user: {
          create: {
            email: 'String6479014',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        company: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<JobApplication, 'jobApplication'>
