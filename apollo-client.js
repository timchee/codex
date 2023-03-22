import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql.codex.gjirafa.dev/v2/codex-dev/',
  cache: new InMemoryCache(),
})

export default client
