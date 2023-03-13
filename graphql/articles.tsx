import { gql } from "@apollo/client";

const articles = gql`
  query featuredArticles($lang: String!) {
    articlesgjirafaCollection {
      items {
        title
        __typename
        type
        articlePublishedDate
        placement
        image {
          path
          __typename
        }
        articleSnippet
        body {
          type
          text
          attrs
          content
          contentHTML
          __typename
        }
        id
        system {
          siteId
          insertedBy
          updatedBy
          versionId
          title
          slug
          metrics {
            wordCount
            characterCount
            sentenceCount
            imageCount
            readingTime
            __typename
          }
          __typename
          modelId
          modelAlias
          externalId
          status
          insertDateTime
          updateDateTime
          publishDateTime
          firstPublishDateTime
          unpublishDateTime
        }
        articleSnippet
        attrs
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        __typename
      }
    }
  }
`;

const allArticles = gql`
  query allArticles($lang: String!) {
    gjirafaadsarticleCollection(
      where: { language: { some: { contains: $lang } } }
      order: { system: { publishDateTime: ASC } }
    ) {
      items {
        id
        title
        system {
          slug
          publishDateTime
        }
        articleImage {
          path
        }
        articleCategory
        articleDescription
        language
      }
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
export { articles, articleDetails, allArticles };
