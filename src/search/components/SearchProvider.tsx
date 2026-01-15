import { SearchContext } from '@/search/model/SearchContext'
import { useState, type ReactNode } from 'react'

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
  }

  return (
    <SearchContext.Provider value={{ query, handleSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
