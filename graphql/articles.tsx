import { gql } from "@apollo/client";

const articles = gql`
  query articles {
    codexGuideArticlesCollection {
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

const allArticles = gql`
  query allArticles($lang: String!) {
    entryCollection(
      where: { language: { some: { contains: $lang } } }
      order: { system: { publishDateTime: ASC } }
    ) {
      items {
        id
        __typename
        system {
          siteId
          externalId
          firstPublishDateTime
          title
          slug
          status
          metrics {
            wordCount
            characterCount
            sentenceCount
            imageCount
            readingTime
            __typename
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        __typename
      }
      totalCount
      __typename
    }
  }
`;

const articleDetails = gql`
  query articleContent($articleSlug: String!) {
    gjirafaadsarticleCollection(
      where: { system: { slug: { eq: $articleSlug } } }
    ) {
      items {
        id
        title
        system {
          slug
          publishDateTime
        }
        contentArticle {
          contentHTML
        }
        articleImage {
          path
        }
        articleCategory
        language
        translation {
          entry {
            id
          }
        }
      }
    }
  }
`;
export {articles,articleDetails, allArticles };
