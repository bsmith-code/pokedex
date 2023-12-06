import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IEvolutionChain,
  INamedApiResourceList,
  IPokemon,
  IPokemonSpecies
} from 'pokeapi-typescript'

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
      query: () => 'pokemon?limit=-1'
    }),
    getPokemonDetails: build.query<IPokemon, string>({
      query: name => `pokemon/${name}`
    }),
    getPokemonSpecies: build.query<IPokemonSpecies, string>({
      query: name => `pokemon-species/${name}`
    }),
    getPokemonEvolution: build.query<IEvolutionChain, string>({
      query: chainId => `evolution-chain/${chainId}`
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
  useGetPokemonSpeciesQuery,
  useGetPokemonDetailsQuery,
  useGetPokemonEvolutionQuery
} = api
