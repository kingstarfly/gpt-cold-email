// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={NavigationLayout}>
          <Route path="/" page={HomePage} name="home" />
          <Route path="/application/{id:Int}" page={JobApplicationPage} name="jobApplication" />
          <Route path="/application/new" page={JobApplicationPage} name="newJobApplication" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
