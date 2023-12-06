import { useNavigate } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography
} from '@mui/material'

import { usePokemonDetails } from 'hooks/usePokemonDetails'

import { GridEvolution } from 'components/GridEvolution'

export const DetailsPokemon = () => {
  const {
    name,
    details,
    sprites,
    evolutions,
    speciesName,
    isFetchingDetails,
    isFetchingEvolutions
  } = usePokemonDetails()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  return !isFetchingDetails ? (
    <>
      <Box display="flex" mt={2}>
        <Box flexShrink={0} position="relative">
          <IconButton
            onClick={handleGoBack}
            sx={{ position: 'absolute', top: '16px', left: 0 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <img
            alt={name}
            src={sprites.other['official-artwork'].front_default}
          />
        </Box>
        <Box p={2} flexGrow={1}>
          <Box mb={2}>
            <Typography component="h1" variant="h4">
              {name}
            </Typography>
            <Typography fontSize={14} color="grey.700" sx={{ mt: 1 }}>
              species: {speciesName}
            </Typography>
          </Box>
          {details.map(({ title, content }) => (
            <Card
              key={`details-${title}`}
              sx={{ bgcolor: 'secondary.main', color: 'common.white', mb: 2 }}
            >
              <CardHeader title={title} />
              <CardContent>{content}</CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <GridEvolution
        evolutions={evolutions}
        isFetching={isFetchingEvolutions}
      />
    </>
  ) : (
    <div>Loading...</div>
  )
}
