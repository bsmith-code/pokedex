import { Toolbar, Typography } from '@mui/material'

const LayoutAppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Toolbar
      variant="dense"
      component="footer"
      sx={{ bgcolor: 'primary.main', justifyContent: 'center' }}
    >
      <Typography color="#fff">
        &copy; Brian Matthew Smith, {year}. All Rights Reserved.
      </Typography>
    </Toolbar>
  )
}

export default LayoutAppFooter
