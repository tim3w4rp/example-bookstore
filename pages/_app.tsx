import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import { JsonApiLink } from 'apollo-link-json-api'

const jsonApiLink = new JsonApiLink({
  uri: 'https://jsonapiplayground.reyesoft.com/v2/',
})

const client = new ApolloClient({
  link: jsonApiLink as any,
  cache: new InMemoryCache(),
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
   <ApolloProvider client={client}>
     <Component {...pageProps} />
   </ApolloProvider> 
  )
}

export default MyApp