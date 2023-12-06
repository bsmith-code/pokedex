import { IPokemon } from 'pokeapi-typescript'

import {
  useGetPokemonDetailsQuery,
  useGetPokemonEvolutionQuery,
  useGetPokemonSpeciesQuery
} from 'store/server'

import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'

import { GridEvolution } from 'components/GridEvolution'

import { addLeadingZeros, getIdFromUrl } from 'utils'

interface IProps {
  pokemonName: string
}

export const DetailsPokemon = ({ pokemonName }: IProps) => {
  const { data: pokemonDetails, isFetching: isFetchingDetails } =
    useGetPokemonDetailsQuery(pokemonName, {
      skip: !pokemonName
    })

  const { id, name, moves, types, sprites, abilities, species } =
    pokemonDetails ?? ({} as IPokemon)
  const preparedName = `${name} #${addLeadingZeros(id)}`

  const { data: pokemonSpecies, isFetching: isFetchingSpecies } =
    useGetPokemonSpeciesQuery(species?.name, { skip: !species?.name })

  const chainId = getIdFromUrl(pokemonSpecies?.evolution_chain?.url)

  const { data: pokemonEvolutions, isFetching: isFetchingEvolutions } =
    useGetPokemonEvolutionQuery(chainId, {
      skip: !chainId
    })

  return !isFetchingDetails ? (
    <>
      <Box display="flex" mt={2}>
        <Box flexShrink={0}>
          <img
            alt={name}
            src={sprites.other['official-artwork'].front_default}
          />
        </Box>

        <Box p={2} flexGrow={1}>
          <Box mb={2}>
            <Typography component="h1" variant="h4">
              {preparedName}
            </Typography>
            <Typography fontSize={14} color="grey.700" sx={{ mt: 1 }}>
              species: {species.name}
            </Typography>
          </Box>
          <Card
            sx={{ bgcolor: 'secondary.main', color: 'common.white', mb: 2 }}
          >
            <CardHeader title="Abilities" />
            <CardContent>
              {abilities.length
                ? abilities
                    .map(({ ability: { name: abilityName } }) => abilityName)
                    .join(', ')
                : 'No abilities available.'}
            </CardContent>
          </Card>
          <Card
            sx={{ bgcolor: 'secondary.main', color: 'common.white', mb: 2 }}
          >
            <CardHeader title="Moves" />
            <CardContent>
              {moves.length
                ? moves
                    .map(({ move: { name: moveName } }) => moveName)
                    .join(', ')
                : 'No moves available.'}
            </CardContent>
          </Card>
          <Card sx={{ bgcolor: 'secondary.main', color: 'common.white' }}>
            <CardHeader title="Types" />
            <CardContent>
              {types.length
                ? types
                    .map(({ type: { name: typeName } }) => typeName)
                    .join(', ')
                : 'No types available.'}
            </CardContent>
          </Card>
        </Box>
      </Box>
      <GridEvolution evolutions={pokemonEvolutions} />
    </>
  ) : (
    <div>Loading...</div>
  )
}

// Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.
