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
