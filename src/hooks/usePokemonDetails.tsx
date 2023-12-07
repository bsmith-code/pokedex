import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { IPokemon } from 'pokeapi-typescript'

import {
  useGetPokemonDetailsQuery,
  useGetPokemonEvolutionQuery,
  useGetPokemonSpeciesQuery
} from 'store/server'

import { addLeadingZeros, getIdFromUrl } from 'utils'

export const usePokemonDetails = () => {
  const { pokemonName = '' } = useParams()

  const {
    data: pokemonDetails,
    isFetching: isFetchingDetails,
    isError: isErrorDetails
  } = useGetPokemonDetailsQuery(pokemonName, {
    skip: !pokemonName
  })

  const { id, name, moves, types, sprites, abilities, species } =
    pokemonDetails ?? ({} as IPokemon)
  const preparedName = `${name} #${addLeadingZeros(id)}`

  const { data: pokemonSpecies, isFetching: isFetchingSpecies } =
    useGetPokemonSpeciesQuery(species?.name, {
      skip: !species?.name
    })

  const chainId = getIdFromUrl(pokemonSpecies?.evolution_chain?.url)

  const { data: pokemonEvolutions, isFetching: isFetchingEvolutions } =
    useGetPokemonEvolutionQuery(chainId, {
      skip: !chainId
    })

  const preparedCards = useMemo(
    () => [
      {
        title: 'Abilities',
        content: abilities?.length
          ? abilities
              .map(({ ability: { name: abilityName } }) => abilityName)
              .join(', ')
          : 'No abilities available.'
      },
      {
        title: 'Moves',
        content: moves?.length
          ? moves.map(({ move: { name: moveName } }) => moveName).join(', ')
          : 'No moves available.'
      },
      {
        title: 'Types',
        content: types?.length
          ? types.map(({ type: { name: typeName } }) => typeName).join(', ')
          : 'No types available.'
      }
    ],
    [pokemonDetails]
  )

  return {
    sprites,
    isErrorDetails,
    isFetchingDetails,
    name: preparedName,
    details: preparedCards,
    evolutions: pokemonEvolutions,
    speciesName: species?.name ?? '',
    isFetchingEvolutions: isFetchingSpecies || isFetchingEvolutions
  }
}
