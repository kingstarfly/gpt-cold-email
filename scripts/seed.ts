import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { hashPassword } from '@redwoodjs/api'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

    // type UserData = Pick<
    //   Prisma.UserCreateArgs['data'],
    //   'firstName' | 'lastName' | 'email'
    // >
    type UserData = Pick<
      Prisma.UserCreateArgs['data'],
      'firstName' | 'lastName' | 'email' | 'JobApplication'
    >
    type UserDataWithPassword = UserData & { password: string }
    const usersData: UserDataWithPassword[] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
      {
        firstName: 'Alice',
        lastName: 'Doe',
        email: 'alicedoe@example.com',
        password: 'alicedoe',
      },
      {
        firstName: 'Bob',
        lastName: 'Doe',
        email: 'bobdoe@example.com',
        password: 'bobdoe',
      },
      {
        firstName: 'Charles',
        lastName: 'Doe',
        email: 'charledoe@example.com',
        password: 'charlesdoe',
      },
    ]

    const companies = [
      {
        name: 'Meta',
        recruiterName: 'Abigail Tan',
        recruiterEmail: 'abigailtan@meta.com',
        companyValues: 'Be bold, focus on impact, move fast, be open.',
      },
      {
        name: 'Google',
        recruiterName: 'Abigail Tan',
        recruiterEmail: 'abigailtan@google.com',
        companyValues:
          "Focus on the user, do one thing really well, great just isn't good enough.",
      },
      {
        name: 'CSIT',
        recruiterName: 'Abigail Tan',
        recruiterEmail: 'abigailtan@csit.com',
        companyValues: 'integrity, innovation, agility, lifelong-learning.',
      },
    ] satisfies Prisma.CompanyCreateArgs['data'][]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany

    const companyPromises = await Promise.all(
      companies.map(async (company) => {
        const record = await db.company.create({
          data: {
            name: company.name,
            recruiterName: company.recruiterName,
            recruiterEmail: company.recruiterEmail,
            companyValues: company.companyValues,
          },
        })
        console.log(record)
        return record
      })
    )

    const userPromises = await Promise.all(
      usersData.map(async (userData) => {
        const [hashedPassword, salt] = hashPassword(userData.password)
        const record = await db.user.create({
          data: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            hashedPassword,
            salt,
            JobApplication: {
              create: [
                {
                  company: {
                    connect: {
                      id: 1,
                    },
                  },
                  position: 'Software Engineer',
                  status: 'Draft',
                  country: 'Singapore',
                },
                {
                  company: {
                    connect: {
                      id: 2,
                    },
                  },
                  position: 'Data Analyst',
                  status: 'Draft',
                  country: 'Singapore',
                },
                {
                  company: {
                    connect: {
                      id: 3,
                    },
                  },
                  position: 'Product Manager',
                  status: 'Sent',
                  country: 'Singapore',
                },
              ],
            },
          },
        })
        console.log(record)
        return record
      })
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
