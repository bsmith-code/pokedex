import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { fireEvent, screen, waitFor, within } from '@testing-library/react'

import { PokemonContextProvider } from 'context/PokemonContext'

import { SearchPokemon } from 'components/SearchPokemon'

import { TESTID_SEARCH_POKEMON } from 'constants/testIds'

const MockComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        path="/pokemon?/:pokemonName?"
        element={
          <PokemonContextProvider>
            <SearchPokemon />
          </PokemonContextProvider>
        }
      />
    </Routes>
  </BrowserRouter>
)
describe('SearchPokemon', () => {
  it('correctly renders search options and navigates to chosen pokemon', async () => {
    const { baseElement } = customRender(<MockComponent />)

    const autocompleteEl = screen.getByTestId(TESTID_SEARCH_POKEMON)
    const buttonEl = within(autocompleteEl).getByTitle('Open')
    fireEvent.click(buttonEl)

    await waitFor(() => {
      expect(screen.getByRole('presentation')).toBeInTheDocument()
      expect(baseElement).toMatchSnapshot()
    })

    const optionEl = screen.getAllByRole('option')[4]
    fireEvent.click(optionEl)

    await waitFor(() => {
      expect(window.location.pathname).toBe(
        `/pokemon/${optionEl.textContent ?? ''}`
      )
    })
  })
})
