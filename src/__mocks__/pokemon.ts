import {
  IEvolutionChain,
  INamedApiResourceList,
  IPokemon,
  IPokemonAbility,
  IPokemonMove,
  IPokemonMoveVersion,
  IPokemonSpecies,
  IPokemonType
} from 'pokeapi-typescript'

const mockApiUrl = 'https://www.mockPokeApi.co/api/v2'
export const mockPokemonList: INamedApiResourceList<{
  name: string
  url: string
}> = {
  count: 100,
  next: '',
  previous: '',
  results: Array.from({ length: 100 }).map((_, idx) => ({
    name: `pokemon-${idx}`,
    url: `${mockApiUrl}/pokemon/${idx}`
  }))
}

export const mockMoves: IPokemonMove[] = Array.from({ length: 20 }).map(
  (_, idx) => ({
    move: {
      name: `mock-move-${idx}`,
      url: `${mockApiUrl}/move/${idx}`
    },
    version_group_details: [] as IPokemonMoveVersion[]
  })
)

export const mockAbilities: IPokemonAbility[] = Array.from({ length: 20 }).map(
  (_, idx) => ({
    ability: {
      name: `mock-ability-${idx}`,
      url: `${mockApiUrl}/ability/${idx}`
    },
    is_hidden: true,
    slot: idx
  })
)

export const mockTypes: IPokemonType[] = Array.from({ length: 20 }).map(
  (_, idx) => ({
    slot: idx,
    type: {
      name: `mock-type-${idx}`,
      url: `${mockApiUrl}/type/${idx}`
    }
  })
)

export const mockPokemonDetails: IPokemon = {
  abilities: mockAbilities,
  base_experience: 20,
  forms: [],
  game_indices: [],
  height: 20,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: '',
  moves: mockMoves,
  name: 'mock-pokemon',
  order: 1,
  species: {
    name: 'Mock Species',
    url: `${mockApiUrl}/pokemon-species/3`
  },
  sprites: {
    front_default: `${mockApiUrl}/sprites/pokemon/front/1`,
    front_shiny: `${mockApiUrl}/sprites/pokemon/shiny/1`,
    front_female: `${mockApiUrl}/sprites/pokemon/front-female/1`,
    front_shiny_female: `${mockApiUrl}/sprites/pokemon/shiny-female/1`,
    back_default: `${mockApiUrl}/sprites/pokemon/back/1`,
    back_shiny: `${mockApiUrl}/sprites/pokemon/back-shiny/1`,
    back_female: `${mockApiUrl}/sprites/pokemon/back-female/1`,
    back_shiny_female: `${mockApiUrl}/sprites/pokemon/back-shiny-female/1`,
    other: {
      'official-artwork': {
        front_default:
          'https://mockPokeApi.com/sprites/pokemon/other/official-artwork/1'
      }
    }
  },
  stats: [],
  types: mockTypes,
  weight: 1000
}

export const mockPokemonSpecies: IPokemonSpecies = {
  id: 3,
  name: 'mock-species',
  order: 1,
  gender_rate: 1,
  capture_rate: 20,
  base_happiness: 1000,
  is_baby: false,
  hatch_counter: 50,
  has_gender_differences: true,
  forms_switchable: true,
  growth_rate: {
    name: 'mock-growth-rate',
    url: `${mockApiUrl}/growth-rate/5`
  },
  pokedex_numbers: [],
  egg_groups: [],
  color: {
    name: 'mock-color',
    url: `${mockApiUrl}/pokemon-color/5`
  },
  shape: {
    name: 'mock-shape',
    url: `${mockApiUrl}/pokemon-shape/8`
  },
  evolves_from_species: {
    name: 'mock-species',
    url: `${mockApiUrl}/pokemon-species/1`
  },
  evolution_chain: {
    url: `${mockApiUrl}/pokemon-species/10`
  },
  habitat: {
    name: 'mock-habitat',
    url: `${mockApiUrl}/pokemon-habitat/30`
  },
  generation: {
    name: 'mock-generation',
    url: `${mockApiUrl}/pokemon-generation/4`
  },
  names: [],
  pal_park_encounters: [],
  flavor_text_entries: [],
  form_descriptions: [],
  genera: [],
  varieties: []
}

export const mockPokemonEvolutions: IEvolutionChain = {
  baby_trigger_item: {
    name: 'mock-item',
    url: `${mockApiUrl}/pokemon-item/10`
  },
  id: 1,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [],
        evolves_to: [
          {
            evolution_details: [],
            evolves_to: [],
            is_baby: false,
            species: {
              name: 'mock-species-3',
              url: `${mockApiUrl}/pokemon-species/3`
            }
          }
        ],
        is_baby: false,
        species: {
          name: 'mock-species-2',
          url: `${mockApiUrl}/pokemon-species/2`
        }
      }
    ],
    is_baby: false,
    species: {
      name: 'mock-species',
      url: `${mockApiUrl}/pokemon-species/1`
    }
  }
}
