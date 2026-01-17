import RepositoryCard from '@/search/components/RepositoryCard'
import { useRepositorySearchContext } from '@/search/model/RepositorySearchContext'

const RepositoryList = () => {
  const { searchResult } = useRepositorySearchContext()

  if (!searchResult?.edges || searchResult.edges.length === 0) {
    return (
      <div className="mt-8 text-center text-muted-foreground">
        No repositories found.
      </div>
    )
  }

  return (
    <div className="mx-auto mt-4 max-w-4xl space-y-4">
      {searchResult.edges.map((edge) => {
        if (!edge?.node) {
          return null
        }
        return <RepositoryCard key={edge.node.id} repository={edge.node} />
      })}
    </div>
  )
}

export default RepositoryList
