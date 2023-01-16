// Define your own mock data here:
export const sent = (/* vars, { ctx, req } */) => ({
  jobApplication: {
    id: 42,
    company: {
      companyValues: 'Company Values ABC',
      name: 'CSIT',
      recruiterName: 'John Doe',
      recruiterEmail: 'johndoe@example.com',
    },
    dateApplied: '2021-01-01T00:00:00.000Z',
    jobDescription: 'Job Description ABC',
    position: 'Software Engineer',
    resumeContent: 'Resume Content ABC',
    status: 'Sent',
  },
})

export const draft = (/* vars, { ctx, req } */) => ({
  jobApplication: {
    id: 42,
    company: {
      name: 'CSIT',
      companyValues: 'Company Values ABC',
      recruiterName: 'John Doe',
      recruiterEmail: 'johndoe@example.com',
    },
    status: 'Draft',
  },
})

export const newApp = (/* vars, { ctx, req } */) => ({
  jobApplication: {
    id: 42,
  },
})
