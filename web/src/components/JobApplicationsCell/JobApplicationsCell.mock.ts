// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  jobApplications: [
    {
      id: 42,
      company: { name: 'Company 1' },
      position: 'Position 1',
      country: 'Country 1',
      status: 'Draft',
    },
    {
      id: 43,
      company: { name: 'Company 2' },
      position: 'Position 2',
      country: 'Country 2',
      status: 'Draft',
    },
    {
      id: 44,
      company: { name: 'Company 3' },
      position: 'Position 3',
      country: 'Country 3',
      status: 'Sent',
    },
  ],
})
