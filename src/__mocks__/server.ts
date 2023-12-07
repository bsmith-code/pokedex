import {
  mockPokemonDetails,
  mockPokemonEvolutions,
  mockPokemonList,
  mockPokemonSpecies
} from '__mocks__/pokemon'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

export const prepareRoute = (route: string) =>
  `${process.env.REACT_APP_API_BASE_URL ?? ''}/${route}`

const handlers = [
  http.get(prepareRoute('pokemon'), () => HttpResponse.json(mockPokemonList)),
  http.get(prepareRoute('pokemon/:name'), () =>
    HttpResponse.json(mockPokemonDetails)
  ),
  http.get(prepareRoute('pokemon-species/:name'), () =>
    HttpResponse.json(mockPokemonSpecies)
  ),
  http.get(prepareRoute('evolution-chain/:chainId'), () =>
    HttpResponse.json(mockPokemonEvolutions)
  )
]

export const mockServer = setupServer(...handlers)
