import { BigNumber } from 'ethers';

export interface RewardApr {
  token: Token;
  value: number;
}

export interface RewardAprs {
  total: number;
  stakingToken: Token;
  aprs: RewardApr[];
}

export interface Reward {
  id: string;
  token: Token;
  tokenPrice?: BigNumber;
  rewardRate: BigNumber;
  earned: BigNumber;
}

export interface Token {
  id: string;
  symbol: string;
  name: string;
  decimals: number;
}

export interface Pool {
  id: string; // pid
  token: Token; // AKA depositToken
  lpToken: Token;
  rewardPool: string;
  deposited: BigNumber; // account.balance
  staked: BigNumber; // account.staked
  totalSupply: BigNumber;
  totalStaked: BigNumber;
  rewards: Reward[];

  // Additional (Balancer subgraph + prices)
  tokens: Token[];
  price?: number;
  tvl: number;
  rewardAprs: RewardAprs;
}

export interface FactoryPool extends Pool {
  name?: string;
  gauge: string;
  stash: string;
  balancerPoolId?: string;
  isShutdown: boolean;
}

export type AuraBalPool = Pool;

export interface AuraLocker extends Pool {
  userLocks: {
    total: BigNumber;
    unlockable: BigNumber;
    locked: BigNumber;
    lockData: {
      amount: BigNumber;
      unlockTime: BigNumber;
    }[];
  };
  totalSupply: BigNumber;
  rewardAprs: RewardAprs;
}

export interface MasterChefPool extends Pool {
  pid: number;
  balancerPoolId?: string;
}

export interface MasterChef {
  address: string;
  endBlock: number;
  startBlock: number;
  rewardPerBlock: BigNumber;
  totalAllocPoint: BigNumber;
  pools: Map<number, MasterChefPool>;
}
