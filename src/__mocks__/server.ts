import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

export const prepareRoute = (route: string) =>
  `${process.env.REACT_APP_GITHUB_BASE_URL ?? ''}/${route}`

const handlers = [
  http.get(prepareRoute('users'), () => HttpResponse.json([])),
  http.get(prepareRoute('users/:login/repos'), () => HttpResponse.json({}))
]

export const mockServer = setupServer(...handlers)
