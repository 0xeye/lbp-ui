import React, { FC, createContext, useContext, useCallback, useMemo } from 'react';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  Operation,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { Subgraph, SUBGRAPH_URLS } from '../constants/subgraph';
import { onError } from '@apollo/client/link/error';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { useAddErrorNotification } from './notifications/hooks';
import { useValidChainId } from '../hooks/useValidChainId';

const fallbackClient = new ApolloClient<NormalizedCacheObject>({ cache: new InMemoryCache() });

const createCaches = (): Record<Subgraph, InMemoryCache> =>
  Object.freeze({
    aura: new InMemoryCache(),
    balancer: new InMemoryCache(),
    balancerGovernance: new InMemoryCache(),
  });

type ApolloClients = Record<Subgraph, ApolloClient<NormalizedCacheObject>>;

const context = createContext<ApolloClients>(null as never);

export const useApolloClients = () => useContext(context);

export const ApolloProvider: FC = ({ children }) => {
  const { chainId } = useValidChainId();
  const addErrorNotification = useAddErrorNotification();

  const handleError = useCallback(
    (message: string, error?: unknown): void => {
      console.error(message, error);

      // Not significant at the moment; falls back to the hosted service
      if (message.includes('Exhausted list of indexers')) return;

      let title = 'Apollo Error';
      if (message.includes('Failed to query subgraph deployment')) {
        title = `Subgraph: ${message.split(': ')[1] ?? message}`;
      }

      if ((error as { operation?: Operation })?.operation?.operationName) {
        title = `Subgraph: ${(error as { operation: Operation }).operation.operationName}`;
      }

      addErrorNotification(title);
    },
    [addErrorNotification],
  );

  const apollo = useMemo<{ ready: true; clients: ApolloClients } | { ready: false }>(() => {
    const caches = createCaches();

    const errorLink = onError(error => {
      const { networkError, graphQLErrors } = error;
      if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
        graphQLErrors.forEach(({ message }) => handleError(message, error));
      }
      if (!networkError) return;
      handleError(networkError.message, error);
    });

    const retryIf = (error: { statusCode: number }) => {
      const doNotRetryCodes = [500, 400];
      return !!error && !doNotRetryCodes.includes(error.statusCode);
    };

    const clients = Object.entries(SUBGRAPH_URLS)
      .map(([name, endpoints]) => {
        const subgraphId = name as Subgraph;
        const endpoint = endpoints[chainId as keyof typeof endpoints];

        if (!endpoint) return { [subgraphId]: fallbackClient } as ApolloClients;

        const httpLink = new HttpLink({ uri: endpoint });
        const timeoutLink = new ApolloLinkTimeout(30000);
        const endpointNameLink = new ApolloLink((operation, forward) => {
          operation.extensions.endpointName = name;
          return forward(operation);
        });
        const retryLink = new RetryLink({
          delay: { initial: 1e3, max: 5e3, jitter: true },
          attempts: { max: 1, retryIf },
        });

        return {
          [subgraphId]: new ApolloClient({
            link: ApolloLink.from([endpointNameLink, retryLink, timeoutLink, errorLink, httpLink]),
            cache: caches[subgraphId],
            connectToDevTools: subgraphId === 'aura',
            defaultOptions: {
              watchQuery: {
                fetchPolicy: 'cache-and-network',
                nextFetchPolicy: 'cache-first',
                errorPolicy: 'all',
              },
              query: { fetchPolicy: 'cache-first', errorPolicy: 'all' },
            },
          }),
        } as ApolloClients;
      })
      .reduce((a, b) => ({ ...a, ...b }));

    return { ready: true, clients };
  }, [chainId, handleError]);

  return apollo.ready ? (
    <context.Provider value={apollo.clients}>{children}</context.Provider>
  ) : null;
};
