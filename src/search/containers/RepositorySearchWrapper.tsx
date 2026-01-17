import useRepositoryQuery from '@/search/api/useRepositoryQuery'
import RepositoryList from '@/search/components/RepositoryList'
import RepositorySearchForm from '@/search/components/RepositorySearchForm'
import { RepositorySearchContext } from '@/search/model/RepositorySearchContext'
import { useState, type ReactNode } from 'react'

const RepositorySearchWrapper = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>('')

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
  }

  const { search: searchResult } = useRepositoryQuery({ query })

  return (
    <RepositorySearchContext.Provider value={{ searchResult, handleSearch }}>
      {children}
    </RepositorySearchContext.Provider>
  )
}

RepositorySearchWrapper.Input = RepositorySearchForm
RepositorySearchWrapper.Result = RepositoryList

export default RepositorySearchWrapper
