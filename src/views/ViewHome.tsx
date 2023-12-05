import { useNavigate } from 'react-router-dom'

import { useGetPokemonQuery } from 'store/server'

import {
  Autocomplete,
  Box,
  ListItemButton,
  Paper,
  TextField,
  Typography
} from '@mui/material'

import { IPokemon } from 'types'

const ViewHome = () => {
  const navigate = useNavigate()
  const { pokemon } = useGetPokemonQuery(undefined, {
    selectFromResult: ({ data }) => ({
      pokemon: data?.results ?? []
    })
  })

  const handleChangePokemon = (value: IPokemon | null) => {
    if (value) {
      navigate(`/pokemon/${value.name}`)
    }
  }

  return (
    <Box display="flex">
      <Box component={Paper} flexBasis={400} bgcolor="grey.200" px={4} py={3}>
        <Typography variant="subtitle2">Previous Searches</Typography>
      </Box>
      <Box flexGrow={1} ml={2}>
        <Autocomplete
          onChange={(_, value) => handleChangePokemon(value)}
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
