import { gql } from '@apollo/client'

const articles = gql`
  query featuredArticles($lang: String!) {
    gjirafaadsarticleCollection(
      where: {
        showAsHighlightArticle: { eq: true }
        language: { some: { contains: $lang } }
      }
      order: { system: { publishDateTime: ASC } }
      take: 3
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
      }
    }
  }
`

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
`

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
`
export { articles, articleDetails, allArticles }
