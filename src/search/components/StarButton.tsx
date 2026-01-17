import useAddStarMutation from '@/search/api/useAddStarMutation'
import useRemoveStarMutation from '@/search/api/useRemoveStarMutation'
import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { Button } from '@/shared/ui/button'
import { Star } from 'lucide-react'

interface StarButtonProps {
  repositoryId: fragment_repository$data['id']
  viewerHasStarred: fragment_repository$data['viewerHasStarred']
}

const StarButton = ({ repositoryId, viewerHasStarred }: StarButtonProps) => {
  const commitAddStar = useAddStarMutation()
  const commitRemoveStar = useRemoveStarMutation()

  const handleToggleStar = () => {
    if (viewerHasStarred) {
      commitRemoveStar({
        variables: { input: { starrableId: repositoryId } },
        optimisticResponse: {
          removeStar: {
            starrable: {
              __typename: 'Repository',
              id: repositoryId,
              viewerHasStarred: false,
            },
          },
        },
      })
    } else {
      commitAddStar({
        variables: { input: { starrableId: repositoryId } },
        optimisticResponse: {
          addStar: {
            starrable: {
              __typename: 'Repository',
              id: repositoryId,
              viewerHasStarred: true,
            },
          },
        },
      })
    }
  }

  return (
    <Button
      size="sm"
      variant={viewerHasStarred ? 'default' : 'outline'}
      onClick={handleToggleStar}>
      <Star fill="white" />
      {viewerHasStarred ? 'Unstar' : 'Star'}
    </Button>
  )
}

export default StarButton
