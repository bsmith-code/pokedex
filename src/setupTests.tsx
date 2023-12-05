import React, { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { mockServer } from '__mocks__/server'
import { createSerializer } from '@emotion/jest'
import { render } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'
import { lightTheme } from 'themes/index'

import store from 'store/index'
import { util } from 'store/server'

import { ThemeProvider } from '@mui/material/styles'

import '@testing-library/jest-dom'

global.React = React
global.customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <Provider store={store}>
        <SnackbarProvider>
          <ThemeProvider theme={lightTheme}>
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeProvider>
        </SnackbarProvider>
      </Provider>
    ),
    ...options
  })

// Adds emotion snapshot serializer for deterministic tests
expect.addSnapshotSerializer(createSerializer({ includeStyles: false }))

beforeAll(() => {
  mockServer.listen()
})

beforeEach(() => {
  store.dispatch(util.resetApiState())
})

afterAll(() => {
  mockServer.close()
})

afterEach(() => {
  mockServer.resetHandlers()
})
