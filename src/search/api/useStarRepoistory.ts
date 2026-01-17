import { useCallback } from 'react'
import useAddStarMutation from '@/search/api/useAddStarMutation'
import useRemoveStarMutation from '@/search/api/useRemoveStarMutation'

interface UseStarRepositoryProps {
  id: string
  viewerHasStarred: boolean
}

export const useStarRepository = ({
  id,
  viewerHasStarred,
}: UseStarRepositoryProps) => {
  const commitAddStar = useAddStarMutation()
  const commitRemoveStar = useRemoveStarMutation()

  const toggleStar = useCallback(
    (e: React.MouseEvent) => {
      // 이벤트 전파 방지 (리스트 아이템 클릭 방지용)
      e.preventDefault()
      e.stopPropagation()

      if (viewerHasStarred) {
        commitRemoveStar({
          variables: { input: { starrableId: id } },
          optimisticResponse: {
            removeStar: {
              starrable: {
                __typename: 'Repository',
                id: id,
                viewerHasStarred: false,
              },
            },
          },
        })
      } else {
        commitAddStar({
          variables: { input: { starrableId: id } },
          optimisticResponse: {
            addStar: {
              starrable: {
                __typename: 'Repository',
                id: id,
                viewerHasStarred: true,
              },
            },
          },
        })
      }
    },
    [commitAddStar, commitRemoveStar, id, viewerHasStarred],
  )

  return { toggleStar }
}
