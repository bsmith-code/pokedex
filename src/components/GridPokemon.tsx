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

import { useChangePokemon } from 'hooks/useSelectPokemon'

interface IProps {
  pokemon: INamedApiResource<void>[]
}

const count = 20

const StyledGridItem = styled(ListItemButton)`
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #efefef;
`

export const GridPokemon = ({ pokemon }: IProps) => {
  const { handleChangePokemon } = useChangePokemon()
  const [currentPage, setCurrentPage] = useState(1)

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const gridPage = currentPage - 1 // Grid is zero based
  const startIndex = gridPage * count
  const endIndex = startIndex + count

  const preparedPokemon = useMemo(
    () => pokemon.slice(startIndex, endIndex),
    [pokemon, startIndex, endIndex]
  )

  const getPokemonSprite = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      (id + 1) * currentPage
    }.png`

  return (
    <Box mt={4}>
      <Grid container spacing={2}>
        {preparedPokemon.map(({ name }, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`pokemon-grid-${name}`}>
            <StyledGridItem onClick={() => handleChangePokemon(name)}>
              <img alt={name} src={getPokemonSprite(idx)} />
              <Typography>{name}</Typography>
            </StyledGridItem>
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Pagination
          page={currentPage}
          count={Math.floor(pokemon.length / count)}
          onChange={(_, page) => handleChangePage(page)}
        />
      </Box>
    </Box>
  )
}
