import { useMemo } from 'react'
import { mockSearchHistory } from '__mocks__/searchHistory'
import { fireEvent, screen, within } from '@testing-library/react'

import { IPokemonContext, PokemonContext } from 'context/PokemonContext'

import { SidebarHistory } from 'components/SidebarHistory'

import { TESTID_SEARCH_EMPTY, TESTID_SEARCH_HISTORY } from 'constants/testIds'

const defaultValue = {
  searchHistory: mockSearchHistory,
  handleChangePokemon: jest.fn()
}

const MockComponent = (overrideValue: Partial<IPokemonContext>) => {
  const value = useMemo(() => ({ ...defaultValue, ...overrideValue }), [])

  return (
    <PokemonContext.Provider value={value as IPokemonContext}>
      <SidebarHistory />
    </PokemonContext.Provider>
  )
}

describe('SidebarHistory', () => {
  it('renders correctly WITHOUT data', () => {
    const { container } = customRender(<MockComponent searchHistory={[]} />)

    expect(screen.getByTestId(TESTID_SEARCH_EMPTY)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders correctly WITH data', () => {
    const { container } = customRender(<MockComponent />)

    expect(screen.getByTestId(TESTID_SEARCH_HISTORY)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('correctly changes pokemon', () => {
    customRender(<MockComponent />)

    const searchHistory = screen.getByTestId(TESTID_SEARCH_HISTORY)
    const searchItem = within(searchHistory).getAllByRole('button')[4]
    fireEvent.click(searchItem)

    const searchValue = searchItem.textContent ?? ''
    expect(defaultValue.handleChangePokemon).toHaveBeenCalledWith(searchValue)
  })
})
