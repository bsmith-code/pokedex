import { ThemeProvider } from '@emotion/react'
import { lightTheme } from 'themes'

import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import { useAppNotifications } from 'hooks/useAppNotifications'

import RouterPublic from 'routers/RouterPublic'

const App = () => {
  useAppNotifications()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <RouterPublic />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
