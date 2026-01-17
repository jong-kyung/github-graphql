import StarToggleButton from '@/search/components/StarToggleButton'
import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { useStarRepository } from '@/search/api/useStarRepoistory'

interface StarButtonProps {
  repositoryId: fragment_repository$data['id']
  viewerHasStarred: fragment_repository$data['viewerHasStarred']
}

const StarButton = ({ repositoryId, viewerHasStarred }: StarButtonProps) => {
  const { toggleStar } = useStarRepository({
    id: repositoryId,
    viewerHasStarred,
  })

  return <StarToggleButton isStarred={viewerHasStarred} onClick={toggleStar} />
}

export default StarButton
