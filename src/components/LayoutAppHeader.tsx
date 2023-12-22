import { useNavigate } from 'react-router-dom'

import { Button, Divider, Toolbar, Typography } from '@mui/material'

const LayoutAppHeader = () => {
  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <>
      <Toolbar component="header" sx={{ bgcolor: 'secondary.main' }}>
        <Button onClick={handleClickLogo}>
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 800 }}
          >
            Brian M. Smith
          </Typography>
        </Button>
      </Toolbar>
      <Divider />
    </>
  )
}

export default LayoutAppHeader
