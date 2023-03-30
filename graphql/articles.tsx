import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
<<<<<<< HEAD
  query Articles {
    asset(id: "as8iCoNjMybJv3anV") {
      url
    }
    codexguidearticlesCollection {
=======
  query Articles  {
    codexguidearticlesCollection  {
>>>>>>> 56427b55a93beb1725b4337f39e2846d0fdea053
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
