import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mockPokemonEvolutions } from '__mocks__/pokemon'
import { fireEvent, screen, waitFor, within } from '@testing-library/react'

import { PokemonContextProvider } from 'context/PokemonContext'

import { GridEvolution } from 'components/GridEvolution'

import { TESTID_GRID_EVOLUTIONS, TESTID_GRID_LOADING } from 'constants/testIds'

const defaultProps = {
  isFetching: false,
  evolutions: mockPokemonEvolutions
}

const MockComponent = (overrideProps: Partial<typeof defaultProps>) => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        path="/pokemon?/:pokemonName?"
        element={
          <PokemonContextProvider>
            <GridEvolution {...defaultProps} {...overrideProps} />
          </PokemonContextProvider>
        }
      />
    </Routes>
  </BrowserRouter>
)

describe('GridEvolution', () => {
  it('renders correctly while loading', async () => {
    const { container } = customRender(<MockComponent isFetching />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_GRID_LOADING)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('renders correctly with data', async () => {
    const { container } = customRender(<MockComponent />)

    await waitFor(() => {
      expect(screen.getByTestId(TESTID_GRID_EVOLUTIONS)).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })

  it('correctly changes pokemon', async () => {
    customRender(<MockComponent />)

    const evolutions = screen.getByTestId(TESTID_GRID_EVOLUTIONS)
    const evolutionBtn = within(evolutions).getAllByRole('button')[0]
    fireEvent.click(evolutionBtn)

    await waitFor(() => {
      expect(window.location.pathname).toBe(
        `/pokemon/${evolutionBtn.textContent ?? ''}`
      )
    })
  })
})
