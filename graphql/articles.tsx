import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles {
    asset(id: "as8iCoNjMybJv3anV") {
      url
    }
    codexguidearticlesCollection {
      items {
        id
        title
        description
      }
    }
  }
`;

export const ARTICLE_QUERY = gql`
  query Article ($id: String!) {
    codexguidearticles (id: $id) {
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
`;
