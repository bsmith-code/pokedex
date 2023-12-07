import { createContext, ReactNode, useContext, useMemo } from 'react'
import { INamedApiResource } from 'pokeapi-typescript'

import { useGetPokemonQuery } from 'store/server'

import { useChangePokemon } from 'hooks/useChangePokemon'
import { usePagination } from 'hooks/usePagination'

export type IPokemonList = INamedApiResource<{ name: string; url: string }>[]
export interface IPokemonContext {
  pokemon: IPokemonList
  currentPage: number
  searchHistory: string[]
  handleChangePage: (page: number) => void
  handleChangePokemon: (name: string) => void
  paginatedPokemon: IPokemonList
  isErrorPokemon: boolean
  isFetchingPokemon: boolean
}

export const PokemonContext = createContext({} as IPokemonContext)

interface IProps {
  children: ReactNode
}
export const PokemonContextProvider = ({ children }: IProps) => {
  const {
    pokemon,
    isError: isErrorPokemon,
    isFetching: isFetchingPokemon
  } = useGetPokemonQuery(undefined, {
    selectFromResult: ({ data, ...restResult }) => ({
      pokemon: data?.results ?? [],
      ...restResult
    })
  })
  const { list, currentPage, handleChangePage } = usePagination(pokemon)
  const { searchHistory, handleChangePokemon } = useChangePokemon()

  const context = useMemo(
    () => ({
      pokemon,
      currentPage,
      searchHistory,
      isErrorPokemon,
      isFetchingPokemon,
      handleChangePage,
      handleChangePokemon,
      paginatedPokemon: list
    }),
    [
      list,
      pokemon,
      currentPage,
      searchHistory,
      isErrorPokemon,
      isFetchingPokemon,
      handleChangePage,
      handleChangePokemon
    ]
  )

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonContext = () => useContext(PokemonContext)
