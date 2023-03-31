import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles  {
    codexguidearticlesCollection  (order: {number: ASC}) {
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
