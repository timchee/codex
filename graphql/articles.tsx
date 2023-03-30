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
export const FIRTS_ENTRY = gql`
query Entry{
  codexguidearticlesCollection (limit: 1){
    items {
      id
    }
  }

}
`;