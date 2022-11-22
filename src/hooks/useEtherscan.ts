import { useCallback } from 'react';
import { Kovan, Mainnet, useEthers } from '@usedapp/core';

export const useEtherscan = () => {
  const { chainId } = useEthers();

  return useCallback(
    (data?: string, type: 'address' | 'tx' = 'address') => {
      switch (chainId) {
        case Mainnet.chainId:
          return `https://etherscan.io/${type}/${data}`;
        case Kovan.chainId:
          return `https://kovan.etherscan.io/${type}/${data}`;
        default:
          return `https://etherscan.io/${type}/${data}`;
      }
    },
    [chainId],
  );
};
