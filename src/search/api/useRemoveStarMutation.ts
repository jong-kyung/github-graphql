import { graphql, useMutation } from 'react-relay'

const RemoveStarMutation = graphql`
  mutation useRemoveStarMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`

const useRemoveStarMutation = () => {
  const [commitRemoveStar] = useMutation(RemoveStarMutation)

  return commitRemoveStar
}

export default useRemoveStarMutation
