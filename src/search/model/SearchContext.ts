import { createContext } from 'react'

interface SearchContextProps {
  query: string
  handleSearch: (searchQuery: string) => void
}

export const SearchContext = createContext<SearchContextProps | null>(null)
