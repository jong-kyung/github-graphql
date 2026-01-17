import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { Badge } from '@/shared/ui/badge'

interface RepositoryTopicListProps {
  nodeList: fragment_repository$data['repositoryTopics']['nodes']
}

const RepositoryTopicList = ({ nodeList }: RepositoryTopicListProps) => {
  if (!nodeList || nodeList.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {nodeList.map(
        (node) =>
          node?.topic && (
            <Badge
              key={node.topic.name}
              variant="secondary"
              className="transition-colors hover:bg-secondary/80">
              {node.topic.name}
            </Badge>
          ),
      )}
    </div>
  )
}

export default RepositoryTopicList
