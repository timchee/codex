import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql-stg.codex.gjirafa.tech/v1/gjirafa-stg/',
  cache: new InMemoryCache(),
})

export default client