'use client';
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

function apoloClient(): ApolloClient<any> {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://spacex-production.up.railway.app',
  });
}

function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={apoloClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper;
