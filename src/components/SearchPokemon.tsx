import { INamedApiResource } from 'pokeapi-typescript'

import {
  Autocomplete,
  createFilterOptions,
  ListItemButton,
  TextField
} from '@mui/material'

import { useChangePokemon } from 'hooks/useChangePokemon'

interface IProps {
  pokemon: INamedApiResource<void>[]
}

export const SearchPokemon = ({ pokemon }: IProps) => {
  const { handleChangePokemon } = useChangePokemon()

  return (
    <Autocomplete
      filterOptions={createFilterOptions({ limit: 20 })}
      onChange={(_, value) => handleChangePokemon(value?.name ?? '')}
      options={pokemon}
      renderInput={params => <TextField {...params} label="Search Pokemon" />}
      getOptionLabel={({ name }) => name}
      renderOption={(props, { name }) => (
        <ListItemButton
          {...props}
          component="li"
          key={`pokemon-list-${name}`}
          data-testid={`pokemon-${name}`}
        >
          {name}
        </ListItemButton>
      )}
    />
  )
}
