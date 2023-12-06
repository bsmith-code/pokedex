import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INamedApiResourceList, IPokemon } from 'pokeapi-typescript'

const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL
  }),
  endpoints: build => ({
    getPokemon: build.query<
      INamedApiResourceList<{ name: string; url: string }>,
      void
    >({
      query: () => 'pokemon-species?limit=-1'
    }),
    getPokemonDetails: build.query<IPokemon, string>({
      query: name => `pokemon/${name}`
    })
  })
})

export const {
  util,
  reducer,
  endpoints,
  middleware,
  reducerPath,
  useGetPokemonQuery,
  useGetPokemonDetailsQuery
} = api
