import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'use-hooks'

import { useGetPokemonQuery } from 'store/server'

import {
  Autocomplete,
  Box,
  List,
  ListItemButton,
  Paper,
  TextField,
  Typography
} from '@mui/material'

import { IPokemon } from 'types'

const ViewHome = () => {
  const navigate = useNavigate()
  const [prevSearches, saveSearch] = useLocalStorage<string[]>(
    'prevSearches',
    []
  )

  const { pokemon } = useGetPokemonQuery(undefined, {
    selectFromResult: ({ data }) => ({
      pokemon: data?.results ?? []
    })
  })

  const handleChangePokemon = (value: string) => {
    if (value) {
      const preparedSearches = Array.from(new Set([...prevSearches, value]))

      saveSearch(preparedSearches)
      navigate(`/pokemon/${value}`)
    }
  }

  return (
    <Box display="flex">
      <Box component={Paper} flexBasis={400} bgcolor="grey.200" px={4} py={3}>
        <Typography variant="subtitle2">Previous Searches</Typography>

        {prevSearches.length ? (
          <List>
            {prevSearches.map(search => (
              <ListItemButton
                component="li"
                key={`search-${search}`}
                onClick={() => handleChangePokemon(search)}
              >
                {search}
              </ListItemButton>
            ))}
          </List>
        ) : (
          <Typography sx={{ mt: 2 }}>No previous searches.</Typography>
        )}
      </Box>
      <Box flexGrow={1} ml={2}>
        <Autocomplete
          onChange={(_, value) => handleChangePokemon(value?.name ?? '')}
          options={pokemon}
          renderInput={params => (
            <TextField {...params} label="Search Pokemon" />
          )}
          getOptionLabel={({ name }) => name}
          renderOption={(props, { name }) => (
            <ListItemButton
              {...props}
              component="li"
              key={`pokemon-${name}`}
              data-testid={`pokemon-${name}`}
            >
              {name}
            </ListItemButton>
          )}
        />

        <div>Details</div>
      </Box>
    </Box>
  )
}

export default ViewHome
