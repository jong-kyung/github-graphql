import { graphql } from 'react-relay'

export const repositoryCardFragment = graphql`
  fragment fragment_repository on Repository {
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
