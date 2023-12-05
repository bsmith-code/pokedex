export interface IPokemon {
  name: string
  url: string
}

export interface IPokemonRequest {
  count: number
  next: string | null
  previous: string | null
  results: IPokemon[]
}
