import { graphql, useMutation } from 'react-relay'

const AddStarMutation = graphql`
  mutation useAddStarMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`

const useAddStarMutation = () => {
  const [commitAddStar] = useMutation(AddStarMutation)

  return commitAddStar
}

export default useAddStarMutation
