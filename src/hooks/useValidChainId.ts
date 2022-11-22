import { useEthers } from '@usedapp/core';
import { useMemo } from 'react';
import { DEFAULT_CHAIN_ID, RPC_URLS } from '../constants';

export const useValidChainId = () => {
  const { chainId } = useEthers();
  const isChainValid = !!(chainId && chainId in RPC_URLS);
  return useMemo(() => ({ chainId: isChainValid ? chainId : DEFAULT_CHAIN_ID, isChainValid }), [
    chainId,
    isChainValid,
  ]);
};
