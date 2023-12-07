import {
  Box,
  Grid,
  ListItemButton,
  Pagination,
  styled,
  Typography
} from '@mui/material'

import { usePokemonContext } from 'context/PokemonContext'

import { getIdFromUrl, getPokemonSprite } from 'utils'

import {
  TESTID_GRID_ERROR,
  TESTID_GRID_LOADING,
  TESTID_GRID_POKEMON
} from 'constants/testIds'

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
    isErrorPokemon,
    isFetchingPokemon,
    handleChangePage,
    handleChangePokemon
  } = usePokemonContext()

  if (isFetchingPokemon) {
    return <div data-testid={TESTID_GRID_LOADING}>Loading...</div>
  }

  if (!pokemon.length || isErrorPokemon) {
    return <div data-testid={TESTID_GRID_ERROR}>Pokemon unavailable.</div>
  }

  return (
    <Box mt={4} data-testid={TESTID_GRID_POKEMON}>
      <Grid container spacing={2}>
        {paginatedPokemon.map(({ url, name }) => {
          const imageSrc = getPokemonSprite(getIdFromUrl(url))

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`pokemon-grid-${name}`}
            >
              <StyledGridItem onClick={() => handleChangePokemon(name)}>
                <img
                  alt={name}
                  src={imageSrc}
                  width="120px"
                  height="120px"
                  style={{ objectFit: 'contain' }}
                />
                <Typography>{name}</Typography>
              </StyledGridItem>
            </Grid>
          )
        })}
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
