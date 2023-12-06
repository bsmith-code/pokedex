import { Box, List, ListItemButton, Paper, Typography } from '@mui/material'

import { useChangePokemon } from 'hooks/useChangePokemon'

export const SidebarHistory = () => {
  const { searchHistory, handleChangePokemon } = useChangePokemon()

  return (
    <Box
      px={4}
      py={3}
      flexShrink={0}
      flexBasis={300}
      component={Paper}
      bgcolor="grey.200"
    >
      <Typography variant="subtitle2">Search History</Typography>

      {searchHistory.length ? (
        <List>
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
        <Typography sx={{ mt: 2 }}>No previous searches.</Typography>
      )}
    </Box>
  )
}
