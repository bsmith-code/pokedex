import { Divider, Toolbar, Typography } from '@mui/material'

const LayoutAppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <Divider />
      <Toolbar
        variant="dense"
        component="footer"
        sx={{ bgcolor: 'secondary.main', justifyContent: 'center' }}
      >
        <Typography>
          &copy; Brian Matthew Smith, {year}. All Rights Reserved.
        </Typography>
      </Toolbar>
    </>
  )
}

export default LayoutAppFooter
