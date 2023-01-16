
# ColdMaiL

<img src="https://user-images.githubusercontent.com/38955962/212740229-80f690da-70fa-4e27-9627-5f61d670151d.png" width="100" height="100" />

Introducing ColdMaiL - an advanced AI web app that reads your resume and creates a tailored cold email and sends it to your desired tech company. The email is personalized, professional, and tailored to highlight how you are a good fit at the company!

## Web App Screenshots
![image](https://user-images.githubusercontent.com/38955962/212739722-6cc7abed-2404-47af-84c8-bc5c4f7c3681.png)
![image](https://user-images.githubusercontent.com/38955962/212739559-9a4c109b-f0d3-49cd-a7c8-d8bb12ff582c.png)
## Motivation
Struggling with job application? That's a problem that we face too! That's why we created ColdMaiL, an AI powered cold email generator to help you increase your chances of landing interviews!

### Why cold emails?

Cold emails are more effective than applications in the job portal because they allow you to directly target potential employers, as opposed to relying on a job portal to match you with employers. Cold emails also allow you to introduce yourself to potential employers, highlighting your experience and skills, which can be more effective than simply filling out an online application.

## Installation

- [Node.js](https://nodejs.org/en/download/) (>=14.19.x <=16.x) is required
- [Yarn](https://yarnpkg.com/getting-started/install) (>=1.15) is required

Install project dependencies with yarn

```bash
  yarn install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SESSION_SECRET` - Generate a session secret key with `yarn redwood generate secret`

`OPENAI_API_KEY` - Create an [OpenAI](https://openai.com/blog/openai-api/) account and generate an API key

`REDWOOD_ENV_FILESTACK_API_KEY` - Create an [Filestack](https://www.filestack.com/) account and generate an API key



## Getting Started
This project utilises [RedwoodJS](https://redwoodjs.com), a fullstack development framework. Start the development server to get started:

```
yarn redwood dev
```

Your browser should automatically open to http://localhost:8910


Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```
yarn rw prisma migrate dev
```
