import { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LayoutDefault from 'layouts/LayoutDefault'

import ViewHome from 'views/ViewHome'

interface IProps {
  view: ReactNode
}
const PreparedView = ({ view }: IProps) => <LayoutDefault>{view}</LayoutDefault>

const RouterPublic = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/pokemon?/:name?"
        element={<PreparedView view={<ViewHome />} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)

export default RouterPublic
