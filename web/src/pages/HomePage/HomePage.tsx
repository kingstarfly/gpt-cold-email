import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex min-h-screen flex-col bg-gradient-to-tr from-indigo-50 to-lime-50">
        <header className="bg-teal-200 px-2 py-4">Header</header>
        <main className="flex flex-1 flex-row">
          <div className="flex flex-1 border-r-2 border-r-slate-800 py-4">
            <form className="flex flex-col gap-8 px-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="resume">Upload Resume</label>
                <input type="file" name="resume" id="resume" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company-values-content">
                  Company Values Content
                </label>
                <textarea
                  name="company-values-content"
                  id="company-values-content"
                  rows={10}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                  name="job-description"
                  id="job-description"
                  rows={10}
                />
              </div>
            </form>
          </div>

          <button className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-teal-300 py-2 px-4 text-lg hover:bg-teal-200 hover:outline hover:outline-2 hover:outline-teal-700">
            Make Cover Letter!
          </button>

          <div className="flex flex-1 border-r-2 py-4">
            <div className="flex flex-col gap-8 px-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Cover Letter</h1>
                <textarea />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
