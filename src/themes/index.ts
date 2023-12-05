import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    fontWeightMedium: 600
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#050614'
    },
    secondary: {
      main: '#8000ff'
    }
  }
})
