import { useMemo, useState } from 'react'
import { INamedApiResource } from 'pokeapi-typescript'

import {
  Box,
  Grid,
  ListItemButton,
  Pagination,
  styled,
  Typography
} from '@mui/material'

import { usePokemonContext } from 'context/PokemonContext'

import { getPokemonSprite } from 'utils'

const StyledGridItem = styled(ListItemButton)`
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #efefef;
`

export const GridPokemon = () => {
  const {
    pokemon,
    currentPage,
    paginatedPokemon,
    handleChangePage,
    handleChangePokemon
  } = usePokemonContext()

  return (
    <Box mt={4}>
      <Grid container spacing={2}>
        {paginatedPokemon.map(({ name }, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`pokemon-grid-${name}`}>
            <StyledGridItem onClick={() => handleChangePokemon(name)}>
              <img alt={name} src={getPokemonSprite((idx + 1) * currentPage)} />
              <Typography>{name}</Typography>
            </StyledGridItem>
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Pagination
          page={currentPage}
          count={Math.floor(pokemon.length / 20)}
          onChange={(_, page) => handleChangePage(page)}
        />
      </Box>
    </Box>
  )
}
