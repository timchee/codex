import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles  {
    codexguidearticlesCollection  {
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
