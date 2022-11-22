import { Kovan, Mainnet } from '@usedapp/core';

export enum Subgraph {
  Aura = 'aura',
  Balancer = 'balancer',
  BalancerGovernance = 'balancerGovernance',
}

export const SUBGRAPH_URLS: Record<Subgraph, Record<number, string | undefined>> = {
  [Subgraph.Aura]: {
    [Kovan.chainId]: 'https://api.thegraph.com/subgraphs/name/0xbutterfield/aura-kovan',
    [Mainnet.chainId]: 'https://api.thegraph.com/subgraphs/name/aurafinance/aura',
  },
  [Subgraph.Balancer]: {
    [Kovan.chainId]: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2',
    [Mainnet.chainId]: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
  },
  [Subgraph.BalancerGovernance]: {
    [Kovan.chainId]: 'https://api.thegraph.com/subgraphs/name/mendesfabio/balancer-gauges',
    [Mainnet.chainId]: undefined,
  },
};
