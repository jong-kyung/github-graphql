import RepositoryCard from '@/search/components/RepositoryCard'
import type { fragment_repositoryList$key } from '@/search/model/__generated__/fragment_repositoryList.graphql'
import { repositoryListFragment } from '@/search/model/fragment'

import { usePaginationFragment } from 'react-relay'

interface RepositoryListProps {
  fragmentKey: fragment_repositoryList$key
}

const RepositoryList = ({ fragmentKey }: RepositoryListProps) => {
  const { data } = usePaginationFragment(repositoryListFragment, fragmentKey)

  return (
    <div className="mx-auto mt-4 max-w-4xl space-y-4">
      {data.search.edges?.map((edge) => {
        if (!edge?.node) {
          return null
        }
        return <RepositoryCard key={edge.node.id} repository={edge.node} />
      })}
    </div>
  )
}

export default RepositoryList
