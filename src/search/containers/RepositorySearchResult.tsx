import useRepositoryQuery from '@/search/api/useRepositoryQuery'
import RepositoryList from '@/search/components/RepositoryList'
import { useRepositorySearchContext } from '@/search/model/RepositorySearchContext'

const RepositorySearchResult = () => {
  const { query } = useRepositorySearchContext()
  const queryData = useRepositoryQuery({ query })

  return <RepositoryList fragmentKey={queryData} />
}

export default RepositorySearchResult
