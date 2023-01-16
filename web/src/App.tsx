import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { createEmotionCache, Global, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

const myCache = createEmotionCache({ key: 'mantine', prepend: false })

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider type="dbAuth">
        <RedwoodApolloProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ fontFamily: 'Inter' }}
            emotionCache={myCache}
          >
            <NotificationsProvider position="top-center" zIndex={2077}>
              <Global
                styles={[
                  {
                    '@font-face': {
                      fontFamily: 'Inter',
                      src: `local(''),
                  url('../fonts/Inter-VariableFont_slnt,wght.ttf') format('ttf'),`,
                    },
                  },
                ]}
              />
              <Routes />
            </NotificationsProvider>
          </MantineProvider>
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
