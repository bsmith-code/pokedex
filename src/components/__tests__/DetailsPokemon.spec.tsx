import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { mockServer, prepareRoute } from '__mocks__/server'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'

import { DetailsPokemon } from 'components/DetailsPokemon'

import {
  TESTID_DETAILS_ERROR,
  TESTID_DETAILS_LOADING,
  TESTID_DETAILS_POKEMON,
  TESTID_DETAILS_RETURN
} from 'constants/testIds'

const MockComponent = () => (
  <MemoryRouter initialEntries={['/pokemon/mock-pokemon']}>
    <Routes>
      <Route index path="pokemon?/:pokemonName?" element={<DetailsPokemon />} />
    </Routes>
  </MemoryRouter>
)

describe('DetailsPokemon', () => {
  it('renders correctly while loading', async () => {
    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_DETAILS_LOADING)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('renders correctly with data', async () => {
    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_DETAILS_POKEMON)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('renders correctly with invalid data', async () => {
    mockServer.use(
      http.get(prepareRoute('pokemon/:pokemonName'), () => HttpResponse.error())
    )

    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_DETAILS_ERROR)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('returns to grid correctly', async () => {
    customRender(<MockComponent />)

    const goBackBtn = await screen.findByTestId(TESTID_DETAILS_RETURN)
    fireEvent.click(goBackBtn)

    expect(window.location.pathname).toBe('/')
  })
})
