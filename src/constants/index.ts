import { Kovan, Mainnet } from '@usedapp/core';

export const INFURA_ID = process.env.REACT_APP_INFURA_ID;

export const RPC_URLS: { [key: number]: string } = {
  [Mainnet.chainId]: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  [Kovan.chainId]: `https://kovan.infura.io/v3/${INFURA_ID}`,
};

export const DEFAULT_CHAIN_ID = Mainnet.chainId;

export enum ClaimZapOptions {
  Default = 0,
  ClaimCvx = 1,
  ClaimCvxAndStake = 2,
  ClaimCvxCrv = 4,
  ClaimLockedCvx = 8,
  ClaimLockedCvxStake = 16,
  LockCrvDeposit = 32,
  UseAllWalletFunds = 64,
  LockCvx = 128,
}
