import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GITHUB_BASE_URL
  }),
  endpoints: build => ({
    // getUsers: build.query<IUser[], void>({
    //   query: () => 'users',
    //   providesTags: ['IUser']
    // }),
  })
})

export const { util, reducer, endpoints, middleware, reducerPath } = api
