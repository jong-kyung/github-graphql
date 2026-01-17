import { graphql, useLazyLoadQuery } from 'react-relay'
import type { useRepositoryQuery as TUseRepositoryQuery } from './__generated__/useRepositoryQuery.graphql'

const repositoryQuery = graphql`
  query useRepositoryQuery($query: String!) {
    ...fragment_repositoryList @arguments(query: $query)
  }
`

interface UseRepositoryQueryParams {
  query: string
}

const useRepositoryQuery = ({ query }: UseRepositoryQueryParams) => {
  const data = useLazyLoadQuery<TUseRepositoryQuery>(
    repositoryQuery,
    { query },
    { fetchPolicy: 'store-or-network' },
  )

  return data
}

export default useRepositoryQuery
