# ColdMaiL

![image](https://user-images.githubusercontent.com/60282894/212743538-2d667cb5-66c2-4e6e-b4b8-3637628aa4ce.png)


Introducing ColdMaiL - an advanced AI machine that reads your resume and creates a tailored cold email job application to your desired tech company, making it personalized, professional, and tailored to the specific needs of the company!

## Motivation
Struggling with job application? That's a problem that we face too! That's why we created ColdMaiL, an AI powered cold email generator for job application. Craft personalized cold emails to employers and increasing your chances of landing interviews today!

### Why cold emails?

Cold emails are more effective than applications in the job portal because they allow you to directly target potential employers, as opposed to relying on a job portal to match you with employers. Cold emails also allow you to introduce yourself to potential employers, highlighting your experience and skills, which can be more effective than simply filling out an online application.

## Installation

This README assumes that [NodeJS](https://nodejs.org/en/) is already installed on the system.


This project depends on yarn for package installation. Install yarn with the following command
```bash
  npm install --global yarn
```

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
