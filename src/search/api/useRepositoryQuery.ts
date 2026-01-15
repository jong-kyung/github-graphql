import { graphql, useLazyLoadQuery } from "react-relay";
import type { useRepositoryQueryQuery as RepositoryQueryType } from "./__generated__/useRepositoryQueryQuery.graphql";

const repositoryQuery = graphql`
  query useRepositoryQueryQuery($query: String!, $first: Int = 10) {
    search(query: $query, type: REPOSITORY, first: $first) @connection(key: "RepositoryList_search") {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            stargazerCount
            url
            description
          }
        }
      }
    }
  }
`;

export default function useRepositoryQuery({ query, first }: { query: string; first?: number }) {
  const { search } = useLazyLoadQuery<RepositoryQueryType>(
    repositoryQuery,
    { query, first: first ?? 10 },
    { fetchPolicy: "store-or-network" }
  );

  return { search };
}
