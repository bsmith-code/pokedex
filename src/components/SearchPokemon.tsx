import {
  Autocomplete,
  createFilterOptions,
  ListItemButton,
  TextField
} from '@mui/material'

import { usePokemonContext } from 'context/PokemonContext'

import { TESTID_SEARCH_POKEMON } from 'constants/testIds'

export const SearchPokemon = () => {
  const { pokemon, handleChangePokemon } = usePokemonContext()

  return (
    <Autocomplete
      data-testid={TESTID_SEARCH_POKEMON}
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
