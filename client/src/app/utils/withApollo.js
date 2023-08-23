import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { useMemo } from 'react';

export function initializeApollo(initialState = null) {
  const _apolloClient = new ApolloClient({
    // Local GraphQL Endpoint
    // uri: 'http://localhost:8080/graphql',

    // Online GraphQL Endpoint
    uri: 'https://fortnite-db-backend-server.onrender.com/graphql',

    cache: new InMemoryCache().restore(initialState || {}),
  });

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}

export default function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = useApollo(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // On the server

  if (typeof window === 'undefined') {
    WithApollo.getInitialProps = async (ctx) => {
      const apolloClient = initializeApollo();

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (ctx.res && ctx.res.finished) {
        // When redirecting, the response is finished.

        // No point in continuing to render

        return pageProps;
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,

        apolloState,
      };
    };
  }

  return WithApollo;
}
