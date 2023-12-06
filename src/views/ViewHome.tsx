import { useParams } from 'react-router-dom'

import { useGetPokemonQuery } from 'store/server'

import { Box } from '@mui/material'

import { DetailsPokemon } from 'components/DetailsPokemon'
import { GridPokemon } from 'components/GridPokemon'
import { SearchPokemon } from 'components/SearchPokemon'
import { SidebarHistory } from 'components/SidebarHistory'

const ViewHome = () => {
  const { pokemonName = '' } = useParams()

  const { pokemon } = useGetPokemonQuery(undefined, {
    selectFromResult: ({ data }) => ({
      pokemon: data?.results ?? []
    })
  })

  return (
    <Box display="flex" alignItems="flex-start">
      <SidebarHistory />
      <Box flexGrow={1} ml={4}>
        <SearchPokemon pokemon={pokemon} />
        {pokemonName ? (
          <DetailsPokemon pokemonName={pokemonName} />
        ) : (
          <GridPokemon pokemon={pokemon} />
        )}
      </Box>
    </Box>
  )
}

export default ViewHome
