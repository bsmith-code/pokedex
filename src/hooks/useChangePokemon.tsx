import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'use-hooks'

export const useChangePokemon = () => {
  const navigate = useNavigate()
  const [searchHistory, saveSearchHistory] = useLocalStorage<string[]>(
    'searchHistory',
    []
  )

  const handleChangePokemon = (name: string) => {
    if (name) {
      const preparedSearches = searchHistory.includes(name)
        ? searchHistory
        : [name, ...searchHistory]

      saveSearchHistory(preparedSearches)
      navigate(`/pokemon/${name}`)
    }
  }

  return {
    searchHistory,
    handleChangePokemon
  }
}
