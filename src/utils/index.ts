import {
  IChainLink,
  INamedApiResource,
  IPokemonSpecies
} from 'pokeapi-typescript'

export const addLeadingZeros = (id: number) => String(id).padStart(4, '0')

export const getIdFromUrl = (url?: string) =>
  url?.split('/')?.filter(Boolean)?.pop() ?? ''

export const flattenChain = (chain?: IChainLink) => {
  if (!chain) return []

  const { evolves_to: evolvesTo, species } = chain
  let flattened: INamedApiResource<IPokemonSpecies>[] = species ? [species] : []

  if (evolvesTo?.length) {
    evolvesTo.forEach(innerChain => {
      if (innerChain.evolves_to) {
        flattened = flattened.concat(flattenChain(innerChain))
      }
    })
  }

  return flattened
}

export const getPokemonSprite = (id: string | number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
