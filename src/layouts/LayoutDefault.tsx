import { ReactNode } from 'react'

import { Box } from '@mui/material'

import LayoutAppFooter from 'components/LayoutAppFooter'
import LayoutAppHeader from 'components/LayoutAppHeader'

interface IProps {
  children: ReactNode
}
const LayoutDefault = ({ children }: IProps) => (
  <>
    <LayoutAppHeader />
    <Box
      p={4}
      zIndex={10}
      width="100vw"
      overflow="auto"
      height="calc(100vh - 64px - 48px)"
    >
      {children}
    </Box>
    <LayoutAppFooter />
  </>
)

export default LayoutDefault
