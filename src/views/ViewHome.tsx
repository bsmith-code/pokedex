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
    <Box display="flex" flexWrap="wrap" alignItems="flex-start">
      <PokemonContextProvider>
        <SidebarHistory />
        <Box
          ml={4}
          flexGrow={1}
          flexBasis={372}
          sx={{
            '@media (max-width: 767px)': { ml: 0, mb: 4, flexBasis: 'auto' }
          }}
        >
          <SearchPokemon />
          {pokemonName ? <DetailsPokemon /> : <GridPokemon />}
        </Box>
      </PokemonContextProvider>
    </Box>
  )
}

export default ViewHome
