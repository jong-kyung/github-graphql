import { graphql } from 'react-relay'

export const repositoryCardFragment = graphql`
  fragment fragment_repository on Repository {
    id
    name
    owner {
      login
    }
    description
    url
    stargazerCount
    forkCount
    updatedAt
    licenseInfo {
      name
    }
    primaryLanguage {
      name
      color
    }
    repositoryTopics(first: 10) {
      nodes {
        topic {
          name
        }
      }
    }
  }
`

export const repositoryListFragment = graphql`
  fragment fragment_repositoryList on Query
  @argumentDefinitions(
    query: { type: "String!" }
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "RepositoryListPaginationQuery") {
    search(query: $query, type: REPOSITORY, first: $count, after: $cursor)
      @connection(key: "RepositoryList_search") {
      edges {
        node {
          ... on Repository {
            id
            ...fragment_repository
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
