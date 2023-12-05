import { useNavigate } from 'react-router-dom'

import { IconButton, Toolbar } from '@mui/material'

const LayoutAppHeader = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <Toolbar component="header" sx={{ bgcolor: 'primary.main' }}>
      <IconButton onClick={handleLogoClick}>
        <img
          alt="PrizePicks"
          src="/assets/logo.svg"
          width="140px"
          height="auto"
        />
      </IconButton>
    </Toolbar>
  )
}

export default LayoutAppHeader
