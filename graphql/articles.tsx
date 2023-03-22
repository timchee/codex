import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles {
    codexguidearticlesCollection (offset: 1,) {
      items {
        id
        title
        description
        articleBody {
          type
          contentHTML
          attrs
          __typename
        }
      }
    }
  }
`;