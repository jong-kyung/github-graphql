import RepositorySearchForm from '@/search/components/RepositorySearchForm'
import RepositorySearchResult from '@/search/containers/RepositorySearchResult'
import { RepositorySearchContext } from '@/search/model/RepositorySearchContext'
import Loading from '@/shared/ui/Loading'
import { Suspense, useState, type ReactNode } from 'react'

const RepositorySearchWrapper = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>('')

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
  }

  return (
    <RepositorySearchContext.Provider value={{ query, handleSearch }}>
      {children}
    </RepositorySearchContext.Provider>
  )
}

RepositorySearchWrapper.Input = RepositorySearchForm
RepositorySearchWrapper.Result = () => (
  <Suspense fallback={<Loading />}>
    <RepositorySearchResult />
  </Suspense>
)

export default RepositorySearchWrapper
