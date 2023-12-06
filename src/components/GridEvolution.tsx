import { IEvolutionChain } from 'pokeapi-typescript'

import { Box, Grid, ListItemButton, styled, Typography } from '@mui/material'

import { usePokemonContext } from 'context/PokemonContext'

import { flattenChain, getIdFromUrl, getPokemonSprite } from 'utils'

interface IProps {
  isFetching: boolean
  evolutions?: IEvolutionChain
}

const StyledGridItem = styled(ListItemButton)(({ theme }) => ({
  flexDirection: 'column',
  borderRadius: '4px',
  color: '#fff',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: '#6704c9'
  }
}))

export const GridEvolution = ({ evolutions, isFetching }: IProps) => {
  const { handleChangePokemon } = usePokemonContext()
  const flattenedChain = flattenChain(evolutions?.chain)

  return !isFetching ? (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Evolutions
      </Typography>
      {flattenedChain?.length ? (
        <Grid container spacing={2}>
          {flattenedChain.map(({ url, name }) => {
            const id = getIdFromUrl(url)
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} key={`evolution-${name}`}>
                <StyledGridItem onClick={() => handleChangePokemon(name)}>
                  <img
                    alt={name}
                    src={getPokemonSprite(id)}
                    width="120px"
                    height="120px"
                    style={{ objectFit: 'contain' }}
                  />
                  <Typography variant="subtitle2">{name}</Typography>
                </StyledGridItem>
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <Typography>No available evolutions</Typography>
      )}
    </Box>
  ) : (
    <Typography>Loading...</Typography>
  )
}
