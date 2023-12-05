import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPokemon, IPokemonRequest } from 'types'

const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL
  }),
  endpoints: build => ({
    getPokemon: build.query<IPokemonRequest, void>({
      query: () => 'pokemon'
    })
  })
})

export const {
  util,
  reducer,
  endpoints,
  middleware,
  reducerPath,
  useGetPokemonQuery
} = api
