import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import { PokemonContextProvider } from 'context/PokemonContext'

import { DetailsPokemon } from 'components/DetailsPokemon'
import { GridPokemon } from 'components/GridPokemon'
import { SearchPokemon } from 'components/SearchPokemon'
import { SidebarHistory } from 'components/SidebarHistory'

const ViewHome = () => {
  const { pokemonName = '' } = useParams()

  return (
    <Box display="flex" alignItems="flex-start">
      <PokemonContextProvider>
        <SidebarHistory />
        <Box flexGrow={1} ml={4}>
          <SearchPokemon />
          {pokemonName ? <DetailsPokemon /> : <GridPokemon />}
        </Box>
      </PokemonContextProvider>
    </Box>
  )
}

export default ViewHome
