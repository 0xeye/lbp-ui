import { Kovan, Mainnet, useEthers } from '@usedapp/core';

export const useBalancerPoolLink = (poolId?: string) => {
  const { chainId } = useEthers();

  if (!poolId) return;

  switch (chainId) {
    case Mainnet.chainId:
      return `https://app.balancer.fi/#/pool/${poolId}`;
    case Kovan.chainId:
      return `https://kovan.balancer.fi/#/pool/${poolId}`;
    default:
      return `https://app.balancer.fi/#/pool/${poolId}`;
  }
};
