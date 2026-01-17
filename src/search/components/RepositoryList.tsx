import { useRepositorySearchContext } from '@/search/model/RepositorySearchContext'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'

const RepositoryList = () => {
  const { searchResult } = useRepositorySearchContext()

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {searchResult?.edges?.map((edge) => {
        if (!edge?.node) {
          return null
        }
        const repo = edge.node
        return (
          <Card key={repo.id}>
            <CardHeader>
              <CardTitle>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.owner?.login}/{repo.name}
                </a>
              </CardTitle>
              <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p>🌟{repo.stargazerCount}</p>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default RepositoryList
