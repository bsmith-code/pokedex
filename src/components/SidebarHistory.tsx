import { Box, List, ListItemButton, Paper, Typography } from '@mui/material'

import { usePokemonContext } from 'context/PokemonContext'

import { TESTID_SEARCH_EMPTY, TESTID_SEARCH_HISTORY } from 'constants/testIds'

export const SidebarHistory = () => {
  const { searchHistory, handleChangePokemon } = usePokemonContext()

  return (
    <Box
      px={4}
      py={3}
      flexShrink={1}
      flexBasis={300}
      component={Paper}
      bgcolor="grey.200"
      sx={{ '@media (max-width: 767px)': { order: 2, flexGrow: 1 } }}
    >
      <Typography variant="subtitle2">Search History</Typography>

      {searchHistory.length ? (
        <List data-testid={TESTID_SEARCH_HISTORY}>
          {searchHistory.map(name => (
            <ListItemButton
              component="li"
              key={`search-${name}`}
              onClick={() => handleChangePokemon(name)}
            >
              {name}
            </ListItemButton>
          ))}
        </List>
      ) : (
        <Typography data-testid={TESTID_SEARCH_EMPTY} sx={{ mt: 2 }}>
          No previous searches.
        </Typography>
      )}
    </Box>
  )
}
