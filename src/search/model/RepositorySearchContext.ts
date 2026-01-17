import type { useRepositoryQueryQuery$data } from '@/search/api/__generated__/useRepositoryQueryQuery.graphql'
import { createContext, useContext } from 'react'

interface RepositorySearchContextProps {
  searchResult: useRepositoryQueryQuery$data['search']
  handleSearch: (searchQuery: string) => void
}

export const RepositorySearchContext =
  createContext<RepositorySearchContextProps | null>(null)

export const useRepositorySearchContext = () => {
  const context = useContext(RepositorySearchContext)
  if (!context) {
    throw new Error(
      'useRepositorySearchContext must be used within a RepositorySearchProvider',
    )
  }
  return context
}
