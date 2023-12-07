import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mockServer, prepareRoute } from '__mocks__/server'
import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import { http, HttpResponse } from 'msw'

import { PokemonContextProvider } from 'context/PokemonContext'

import { GridPokemon } from 'components/GridPokemon'

import {
  TESTID_GRID_ERROR,
  TESTID_GRID_LOADING,
  TESTID_GRID_POKEMON
} from 'constants/testIds'

const MockComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        path="/pokemon?/:pokemonName?"
        element={
          <PokemonContextProvider>
            <GridPokemon />
          </PokemonContextProvider>
        }
      />
    </Routes>
  </BrowserRouter>
)

describe('GridPokemon', () => {
  it('renders correctly while loading', async () => {
    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_GRID_LOADING)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('renders correctly with data', async () => {
    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_GRID_POKEMON)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('renders correctly with invalid data', async () => {
    mockServer.use(
      http.get(prepareRoute('pokemon'), () => HttpResponse.error())
    )
    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_GRID_ERROR)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('correctly changes pokemon', async () => {
    customRender(<MockComponent />)

    const pokemon = await screen.findByTestId(TESTID_GRID_POKEMON)
    const pokemonBtn = within(pokemon).getAllByRole('button')[0]
    fireEvent.click(pokemonBtn)

    await waitFor(() => {
      expect(window.location.pathname).toBe(
        `/pokemon/${pokemonBtn.textContent ?? ''}`
      )
    })
  })
})
