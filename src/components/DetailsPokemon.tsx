import { IPokemon } from 'pokeapi-typescript'

import { useGetPokemonDetailsQuery } from 'store/server'

import { Box, List, ListItem, Typography } from '@mui/material'

interface IProps {
  pokemonName: string
}

const addLeadingZeros = (id: number) => String(id).padStart(4, '0')

export const DetailsPokemon = ({ pokemonName }: IProps) => {
  const { data } = useGetPokemonDetailsQuery(pokemonName, {
    skip: !pokemonName
  })
  const { id, name, height, sprites, abilities } = data ?? ({} as IPokemon)

  return (
    <Box display="flex">
      <Box flexShrink={0}>
        <img alt={name} src={sprites.other['official-artwork'].front_default} />
      </Box>

      <Box ml={2}>
        <Typography component="h1" variant="h5">{`${name} #${addLeadingZeros(
          id
        )}`}</Typography>
        <Box p={1} bgcolor="secondary.main" borderRadius="4px" color="#fff">
          <List>
            <ListItem>Height: {height}</ListItem>
          </List>
        </Box>
        abilities moves species
      </Box>
    </Box>
  )
}

// Able to see details about abilities, moves, species, sprites and types upon searching.
// Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.
