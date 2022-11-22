import { useEthers } from '@usedapp/core';
import { useCallback, useEffect } from 'react';
import { INFURA_ID, RPC_URLS } from '../constants';
import { useAccount } from './useAccount';
import WalletConnectProvider from '@walletconnect/web3-provider';

const lazyLaunchModal = async (cacheProvider: boolean = true) => {
  const Web3Modal = await import('web3modal');

  const providerOptions = {
    injected: {
      display: {
        name: 'Metamask',
        description: 'Connect with the provider in your Browser',
      },
      package: null,
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
        rpc: {
          1: RPC_URLS[1],
          3: RPC_URLS[3],
        },
      },
      display: {
        description: 'Scan with a wallet to connect',
      },
    },
  };

  if (!cacheProvider) {
    localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
    localStorage.removeItem('walletconnect');
  }

  const web3Modal = new Web3Modal.default({
    cacheProvider,
    providerOptions,
  });

  return web3Modal.connect();
};

export const useWeb3Connect = (): {
  activateProvider: () => Promise<void>;
  deactivateProvider: () => Promise<void>;
} => {
  const address = useAccount();
  const { activate, deactivate } = useEthers();

  const activateProvider = useCallback(async () => {
    if (!!address) return;

    try {
      const provider = await lazyLaunchModal();
      await activate(provider);
    } catch (error) {
      console.error('err', error);
    }
  }, [activate, address]);

  const deactivateProvider = useCallback(async () => {
    localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
    localStorage.removeItem('walletconnect');
    deactivate();
  }, [deactivate]);

  // Load cached provider
  useEffect(() => {
    if (localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER') !== null) {
      activateProvider().catch(console.warn);
    }
  }, [activateProvider]);

  return {
    activateProvider,
    deactivateProvider,
  };
};
