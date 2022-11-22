import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "RewardData": [
      "AuraLockerRewardData",
      "PoolRewardData"
    ]
  }
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};

export type Account = {
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  /**
   * Address
   *
   */
  id: Scalars['ID'];
  merkleDropClaims: Array<MerkleDropClaim>;
  poolAccounts: Array<PoolAccount>;
};


export type AccountMerkleDropClaimsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MerkleDropClaim_Filter>;
};


export type AccountPoolAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolAccount_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLockerAccount?: InputMaybe<Scalars['String']>;
  auraLockerAccount_contains?: InputMaybe<Scalars['String']>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_gt?: InputMaybe<Scalars['String']>;
  auraLockerAccount_gte?: InputMaybe<Scalars['String']>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars['String']>>;
  auraLockerAccount_lt?: InputMaybe<Scalars['String']>;
  auraLockerAccount_lte?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Account_OrderBy {
  AuraLockerAccount = 'auraLockerAccount',
  Id = 'id',
  MerkleDropClaims = 'merkleDropClaims',
  PoolAccounts = 'poolAccounts'
}

export type AuraLocker = {
  accounts: Array<AuraLockerAccount>;
  address: Scalars['Bytes'];
  /**
   * Singleton: "AuraLocker"
   *
   */
  id: Scalars['ID'];
  lockedSupply: Scalars['BigInt'];
  rewardData: Array<AuraLockerRewardData>;
  totalSupply: Scalars['BigInt'];
};


export type AuraLockerAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuraLockerAccount_Filter>;
};


export type AuraLockerRewardDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
};

export type AuraLockerAccount = {
  account: Account;
  auraLocker: AuraLocker;
  balance: Scalars['BigInt'];
  /**
   * AuraLocker.balances(account)
   *
   */
  balanceLocked: Scalars['BigInt'];
  balanceNextUnlockIndex: Scalars['Int'];
  /**
   * {Account.id}
   *
   */
  id: Scalars['ID'];
  /**
   * AuraLocker.userData(account)
   *
   */
  userData: Array<AuraLockerUserData>;
  /**
   * AuraLocker.userLocks(account)
   *
   */
  userLocks: Array<AuraLockerUserLock>;
};


export type AuraLockerAccountUserDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuraLockerUserData_Filter>;
};


export type AuraLockerAccountUserLocksArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
};

export type AuraLockerAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker?: InputMaybe<Scalars['String']>;
  auraLocker_contains?: InputMaybe<Scalars['String']>;
  auraLocker_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_ends_with?: InputMaybe<Scalars['String']>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_gt?: InputMaybe<Scalars['String']>;
  auraLocker_gte?: InputMaybe<Scalars['String']>;
  auraLocker_in?: InputMaybe<Array<Scalars['String']>>;
  auraLocker_lt?: InputMaybe<Scalars['String']>;
  auraLocker_lte?: InputMaybe<Scalars['String']>;
  auraLocker_not?: InputMaybe<Scalars['String']>;
  auraLocker_not_contains?: InputMaybe<Scalars['String']>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_not_ends_with?: InputMaybe<Scalars['String']>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_not_in?: InputMaybe<Array<Scalars['String']>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars['String']>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_starts_with?: InputMaybe<Scalars['String']>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balanceLocked?: InputMaybe<Scalars['BigInt']>;
  balanceLocked_gt?: InputMaybe<Scalars['BigInt']>;
  balanceLocked_gte?: InputMaybe<Scalars['BigInt']>;
  balanceLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceLocked_lt?: InputMaybe<Scalars['BigInt']>;
  balanceLocked_lte?: InputMaybe<Scalars['BigInt']>;
  balanceLocked_not?: InputMaybe<Scalars['BigInt']>;
  balanceLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceNextUnlockIndex?: InputMaybe<Scalars['Int']>;
  balanceNextUnlockIndex_gt?: InputMaybe<Scalars['Int']>;
  balanceNextUnlockIndex_gte?: InputMaybe<Scalars['Int']>;
  balanceNextUnlockIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  balanceNextUnlockIndex_lt?: InputMaybe<Scalars['Int']>;
  balanceNextUnlockIndex_lte?: InputMaybe<Scalars['Int']>;
  balanceNextUnlockIndex_not?: InputMaybe<Scalars['Int']>;
  balanceNextUnlockIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum AuraLockerAccount_OrderBy {
  Account = 'account',
  AuraLocker = 'auraLocker',
  Balance = 'balance',
  BalanceLocked = 'balanceLocked',
  BalanceNextUnlockIndex = 'balanceNextUnlockIndex',
  Id = 'id',
  UserData = 'userData',
  UserLocks = 'userLocks'
}

export type AuraLockerRewardData = RewardData & {
  auraLocker: AuraLocker;
  /**
   * {token.id}
   *
   */
  id: Scalars['ID'];
  lastUpdateTime: Scalars['Int'];
  periodFinish: Scalars['Int'];
  rewardPerTokenStored: Scalars['BigInt'];
  rewardRate: Scalars['BigInt'];
  token: Token;
};

export type AuraLockerRewardData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLocker?: InputMaybe<Scalars['String']>;
  auraLocker_contains?: InputMaybe<Scalars['String']>;
  auraLocker_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_ends_with?: InputMaybe<Scalars['String']>;
  auraLocker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_gt?: InputMaybe<Scalars['String']>;
  auraLocker_gte?: InputMaybe<Scalars['String']>;
  auraLocker_in?: InputMaybe<Array<Scalars['String']>>;
  auraLocker_lt?: InputMaybe<Scalars['String']>;
  auraLocker_lte?: InputMaybe<Scalars['String']>;
  auraLocker_not?: InputMaybe<Scalars['String']>;
  auraLocker_not_contains?: InputMaybe<Scalars['String']>;
  auraLocker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_not_ends_with?: InputMaybe<Scalars['String']>;
  auraLocker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_not_in?: InputMaybe<Array<Scalars['String']>>;
  auraLocker_not_starts_with?: InputMaybe<Scalars['String']>;
  auraLocker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auraLocker_starts_with?: InputMaybe<Scalars['String']>;
  auraLocker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdateTime?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTime_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  periodFinish?: InputMaybe<Scalars['Int']>;
  periodFinish_gt?: InputMaybe<Scalars['Int']>;
  periodFinish_gte?: InputMaybe<Scalars['Int']>;
  periodFinish_in?: InputMaybe<Array<Scalars['Int']>>;
  periodFinish_lt?: InputMaybe<Scalars['Int']>;
  periodFinish_lte?: InputMaybe<Scalars['Int']>;
  periodFinish_not?: InputMaybe<Scalars['Int']>;
  periodFinish_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardPerTokenStored?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardRate?: InputMaybe<Scalars['BigInt']>;
  rewardRate_gt?: InputMaybe<Scalars['BigInt']>;
  rewardRate_gte?: InputMaybe<Scalars['BigInt']>;
  rewardRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardRate_lt?: InputMaybe<Scalars['BigInt']>;
  rewardRate_lte?: InputMaybe<Scalars['BigInt']>;
  rewardRate_not?: InputMaybe<Scalars['BigInt']>;
  rewardRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum AuraLockerRewardData_OrderBy {
  AuraLocker = 'auraLocker',
  Id = 'id',
  LastUpdateTime = 'lastUpdateTime',
  PeriodFinish = 'periodFinish',
  RewardPerTokenStored = 'rewardPerTokenStored',
  RewardRate = 'rewardRate',
  Token = 'token'
}

export type AuraLockerUserData = {
  auraLockerAccount: AuraLockerAccount;
  /**
   * {AuraLockerAccount.id}.{Token.id}
   *
   */
  id: Scalars['ID'];
  rewardPerTokenPaid: Scalars['BigInt'];
  rewards: Scalars['BigInt'];
  token: Token;
};

export type AuraLockerUserData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auraLockerAccount?: InputMaybe<Scalars['String']>;
  auraLockerAccount_contains?: InputMaybe<Scalars['String']>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_gt?: InputMaybe<Scalars['String']>;
  auraLockerAccount_gte?: InputMaybe<Scalars['String']>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars['String']>>;
  auraLockerAccount_lt?: InputMaybe<Scalars['String']>;
  auraLockerAccount_lte?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardPerTokenPaid?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewards?: InputMaybe<Scalars['BigInt']>;
  rewards_gt?: InputMaybe<Scalars['BigInt']>;
  rewards_gte?: InputMaybe<Scalars['BigInt']>;
  rewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewards_lt?: InputMaybe<Scalars['BigInt']>;
  rewards_lte?: InputMaybe<Scalars['BigInt']>;
  rewards_not?: InputMaybe<Scalars['BigInt']>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum AuraLockerUserData_OrderBy {
  AuraLockerAccount = 'auraLockerAccount',
  Id = 'id',
  RewardPerTokenPaid = 'rewardPerTokenPaid',
  Rewards = 'rewards',
  Token = 'token'
}

export type AuraLockerUserLock = {
  amount: Scalars['BigInt'];
  auraLockerAccount: AuraLockerAccount;
  /**
   * {AuraLockerAccount.id}.{index}
   *
   */
  id: Scalars['ID'];
  unlockTime: Scalars['Int'];
};

export type AuraLockerUserLock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraLockerAccount?: InputMaybe<Scalars['String']>;
  auraLockerAccount_contains?: InputMaybe<Scalars['String']>;
  auraLockerAccount_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_ends_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_gt?: InputMaybe<Scalars['String']>;
  auraLockerAccount_gte?: InputMaybe<Scalars['String']>;
  auraLockerAccount_in?: InputMaybe<Array<Scalars['String']>>;
  auraLockerAccount_lt?: InputMaybe<Scalars['String']>;
  auraLockerAccount_lte?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_contains?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_ends_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
  auraLockerAccount_not_starts_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auraLockerAccount_starts_with?: InputMaybe<Scalars['String']>;
  auraLockerAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  unlockTime?: InputMaybe<Scalars['Int']>;
  unlockTime_gt?: InputMaybe<Scalars['Int']>;
  unlockTime_gte?: InputMaybe<Scalars['Int']>;
  unlockTime_in?: InputMaybe<Array<Scalars['Int']>>;
  unlockTime_lt?: InputMaybe<Scalars['Int']>;
  unlockTime_lte?: InputMaybe<Scalars['Int']>;
  unlockTime_not?: InputMaybe<Scalars['Int']>;
  unlockTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum AuraLockerUserLock_OrderBy {
  Amount = 'amount',
  AuraLockerAccount = 'auraLockerAccount',
  Id = 'id',
  UnlockTime = 'unlockTime'
}

export type AuraLocker_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lockedSupply?: InputMaybe<Scalars['BigInt']>;
  lockedSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lockedSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lockedSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockedSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lockedSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lockedSupply_not?: InputMaybe<Scalars['BigInt']>;
  lockedSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum AuraLocker_OrderBy {
  Accounts = 'accounts',
  Address = 'address',
  Id = 'id',
  LockedSupply = 'lockedSupply',
  RewardData = 'rewardData',
  TotalSupply = 'totalSupply'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type FactoryPoolData = {
  gauge: Scalars['Bytes'];
  /**
   * {pool.id}
   *
   */
  id: Scalars['ID'];
  isShutdown: Scalars['Boolean'];
  pool: Pool;
  stash: Scalars['Bytes'];
};

export type FactoryPoolData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  gauge?: InputMaybe<Scalars['Bytes']>;
  gauge_contains?: InputMaybe<Scalars['Bytes']>;
  gauge_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gauge_not?: InputMaybe<Scalars['Bytes']>;
  gauge_not_contains?: InputMaybe<Scalars['Bytes']>;
  gauge_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isShutdown?: InputMaybe<Scalars['Boolean']>;
  isShutdown_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isShutdown_not?: InputMaybe<Scalars['Boolean']>;
  isShutdown_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stash?: InputMaybe<Scalars['Bytes']>;
  stash_contains?: InputMaybe<Scalars['Bytes']>;
  stash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stash_not?: InputMaybe<Scalars['Bytes']>;
  stash_not_contains?: InputMaybe<Scalars['Bytes']>;
  stash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum FactoryPoolData_OrderBy {
  Gauge = 'gauge',
  Id = 'id',
  IsShutdown = 'isShutdown',
  Pool = 'pool',
  Stash = 'stash'
}

export type Global = {
  aura: Scalars['Bytes'];
  auraMaxSupply: Scalars['BigInt'];
  auraMinter: Scalars['Bytes'];
  auraMinterMinted: Scalars['BigInt'];
  auraReductionPerCliff: Scalars['BigInt'];
  auraTotalCliffs: Scalars['BigInt'];
  auraTotalSupply: Scalars['BigInt'];
  /**
   * Singleton: "global"
   *
   */
  id: Scalars['ID'];
};

export type Global_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aura?: InputMaybe<Scalars['Bytes']>;
  auraMaxSupply?: InputMaybe<Scalars['BigInt']>;
  auraMaxSupply_gt?: InputMaybe<Scalars['BigInt']>;
  auraMaxSupply_gte?: InputMaybe<Scalars['BigInt']>;
  auraMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraMaxSupply_lt?: InputMaybe<Scalars['BigInt']>;
  auraMaxSupply_lte?: InputMaybe<Scalars['BigInt']>;
  auraMaxSupply_not?: InputMaybe<Scalars['BigInt']>;
  auraMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraMinter?: InputMaybe<Scalars['Bytes']>;
  auraMinterMinted?: InputMaybe<Scalars['BigInt']>;
  auraMinterMinted_gt?: InputMaybe<Scalars['BigInt']>;
  auraMinterMinted_gte?: InputMaybe<Scalars['BigInt']>;
  auraMinterMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraMinterMinted_lt?: InputMaybe<Scalars['BigInt']>;
  auraMinterMinted_lte?: InputMaybe<Scalars['BigInt']>;
  auraMinterMinted_not?: InputMaybe<Scalars['BigInt']>;
  auraMinterMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraMinter_contains?: InputMaybe<Scalars['Bytes']>;
  auraMinter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  auraMinter_not?: InputMaybe<Scalars['Bytes']>;
  auraMinter_not_contains?: InputMaybe<Scalars['Bytes']>;
  auraMinter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  auraReductionPerCliff?: InputMaybe<Scalars['BigInt']>;
  auraReductionPerCliff_gt?: InputMaybe<Scalars['BigInt']>;
  auraReductionPerCliff_gte?: InputMaybe<Scalars['BigInt']>;
  auraReductionPerCliff_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraReductionPerCliff_lt?: InputMaybe<Scalars['BigInt']>;
  auraReductionPerCliff_lte?: InputMaybe<Scalars['BigInt']>;
  auraReductionPerCliff_not?: InputMaybe<Scalars['BigInt']>;
  auraReductionPerCliff_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraTotalCliffs?: InputMaybe<Scalars['BigInt']>;
  auraTotalCliffs_gt?: InputMaybe<Scalars['BigInt']>;
  auraTotalCliffs_gte?: InputMaybe<Scalars['BigInt']>;
  auraTotalCliffs_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraTotalCliffs_lt?: InputMaybe<Scalars['BigInt']>;
  auraTotalCliffs_lte?: InputMaybe<Scalars['BigInt']>;
  auraTotalCliffs_not?: InputMaybe<Scalars['BigInt']>;
  auraTotalCliffs_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraTotalSupply?: InputMaybe<Scalars['BigInt']>;
  auraTotalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  auraTotalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  auraTotalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auraTotalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  auraTotalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  auraTotalSupply_not?: InputMaybe<Scalars['BigInt']>;
  auraTotalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aura_contains?: InputMaybe<Scalars['Bytes']>;
  aura_in?: InputMaybe<Array<Scalars['Bytes']>>;
  aura_not?: InputMaybe<Scalars['Bytes']>;
  aura_not_contains?: InputMaybe<Scalars['Bytes']>;
  aura_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Global_OrderBy {
  Aura = 'aura',
  AuraMaxSupply = 'auraMaxSupply',
  AuraMinter = 'auraMinter',
  AuraMinterMinted = 'auraMinterMinted',
  AuraReductionPerCliff = 'auraReductionPerCliff',
  AuraTotalCliffs = 'auraTotalCliffs',
  AuraTotalSupply = 'auraTotalSupply',
  Id = 'id'
}

export type MasterChef = {
  endBlock: Scalars['BigInt'];
  /**
   * Address
   *
   */
  id: Scalars['ID'];
  poolInfos: Array<MasterChefPoolInfo>;
  rewardPerBlock: Scalars['BigInt'];
  startBlock: Scalars['BigInt'];
  totalAllocPoint: Scalars['BigInt'];
  userInfos: Array<MasterChefUserInfo>;
};


export type MasterChefPoolInfosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
};


export type MasterChefUserInfosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
};

export type MasterChefPoolInfo = {
  accCvxPerShare: Scalars['BigInt'];
  allocPoint: Scalars['BigInt'];
  /**
   * Pool ID (pid)
   *
   */
  id: Scalars['ID'];
  lastRewardBlock: Scalars['BigInt'];
  lpSupply: Scalars['BigInt'];
  lpToken: Token;
  masterChef: MasterChef;
  rewarder: Scalars['Bytes'];
  userInfos: Array<MasterChefUserInfo>;
};


export type MasterChefPoolInfoUserInfosArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
};

export type MasterChefPoolInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accCvxPerShare?: InputMaybe<Scalars['BigInt']>;
  accCvxPerShare_gt?: InputMaybe<Scalars['BigInt']>;
  accCvxPerShare_gte?: InputMaybe<Scalars['BigInt']>;
  accCvxPerShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accCvxPerShare_lt?: InputMaybe<Scalars['BigInt']>;
  accCvxPerShare_lte?: InputMaybe<Scalars['BigInt']>;
  accCvxPerShare_not?: InputMaybe<Scalars['BigInt']>;
  accCvxPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocPoint?: InputMaybe<Scalars['BigInt']>;
  allocPoint_gt?: InputMaybe<Scalars['BigInt']>;
  allocPoint_gte?: InputMaybe<Scalars['BigInt']>;
  allocPoint_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocPoint_lt?: InputMaybe<Scalars['BigInt']>;
  allocPoint_lte?: InputMaybe<Scalars['BigInt']>;
  allocPoint_not?: InputMaybe<Scalars['BigInt']>;
  allocPoint_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastRewardBlock?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_gt?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_gte?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastRewardBlock_lt?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_lte?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_not?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpSupply?: InputMaybe<Scalars['BigInt']>;
  lpSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpToken?: InputMaybe<Scalars['String']>;
  lpToken_contains?: InputMaybe<Scalars['String']>;
  lpToken_contains_nocase?: InputMaybe<Scalars['String']>;
  lpToken_ends_with?: InputMaybe<Scalars['String']>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_gt?: InputMaybe<Scalars['String']>;
  lpToken_gte?: InputMaybe<Scalars['String']>;
  lpToken_in?: InputMaybe<Array<Scalars['String']>>;
  lpToken_lt?: InputMaybe<Scalars['String']>;
  lpToken_lte?: InputMaybe<Scalars['String']>;
  lpToken_not?: InputMaybe<Scalars['String']>;
  lpToken_not_contains?: InputMaybe<Scalars['String']>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_ends_with?: InputMaybe<Scalars['String']>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpToken_not_starts_with?: InputMaybe<Scalars['String']>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_starts_with?: InputMaybe<Scalars['String']>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef?: InputMaybe<Scalars['String']>;
  masterChef_contains?: InputMaybe<Scalars['String']>;
  masterChef_contains_nocase?: InputMaybe<Scalars['String']>;
  masterChef_ends_with?: InputMaybe<Scalars['String']>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_gt?: InputMaybe<Scalars['String']>;
  masterChef_gte?: InputMaybe<Scalars['String']>;
  masterChef_in?: InputMaybe<Array<Scalars['String']>>;
  masterChef_lt?: InputMaybe<Scalars['String']>;
  masterChef_lte?: InputMaybe<Scalars['String']>;
  masterChef_not?: InputMaybe<Scalars['String']>;
  masterChef_not_contains?: InputMaybe<Scalars['String']>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_ends_with?: InputMaybe<Scalars['String']>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterChef_not_starts_with?: InputMaybe<Scalars['String']>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_starts_with?: InputMaybe<Scalars['String']>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewarder?: InputMaybe<Scalars['Bytes']>;
  rewarder_contains?: InputMaybe<Scalars['Bytes']>;
  rewarder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewarder_not?: InputMaybe<Scalars['Bytes']>;
  rewarder_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewarder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MasterChefPoolInfo_OrderBy {
  AccCvxPerShare = 'accCvxPerShare',
  AllocPoint = 'allocPoint',
  Id = 'id',
  LastRewardBlock = 'lastRewardBlock',
  LpSupply = 'lpSupply',
  LpToken = 'lpToken',
  MasterChef = 'masterChef',
  Rewarder = 'rewarder',
  UserInfos = 'userInfos'
}

export type MasterChefUserInfo = {
  account: Account;
  amount: Scalars['BigInt'];
  /**
   * ${poolInfo.id}.${account.id}
   *
   */
  id: Scalars['ID'];
  masterChef: MasterChef;
  poolInfo: MasterChefPoolInfo;
  rewardDebt: Scalars['BigInt'];
};

export type MasterChefUserInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterChef?: InputMaybe<Scalars['String']>;
  masterChef_contains?: InputMaybe<Scalars['String']>;
  masterChef_contains_nocase?: InputMaybe<Scalars['String']>;
  masterChef_ends_with?: InputMaybe<Scalars['String']>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_gt?: InputMaybe<Scalars['String']>;
  masterChef_gte?: InputMaybe<Scalars['String']>;
  masterChef_in?: InputMaybe<Array<Scalars['String']>>;
  masterChef_lt?: InputMaybe<Scalars['String']>;
  masterChef_lte?: InputMaybe<Scalars['String']>;
  masterChef_not?: InputMaybe<Scalars['String']>;
  masterChef_not_contains?: InputMaybe<Scalars['String']>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_ends_with?: InputMaybe<Scalars['String']>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterChef_not_starts_with?: InputMaybe<Scalars['String']>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_starts_with?: InputMaybe<Scalars['String']>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolInfo?: InputMaybe<Scalars['String']>;
  poolInfo_contains?: InputMaybe<Scalars['String']>;
  poolInfo_contains_nocase?: InputMaybe<Scalars['String']>;
  poolInfo_ends_with?: InputMaybe<Scalars['String']>;
  poolInfo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolInfo_gt?: InputMaybe<Scalars['String']>;
  poolInfo_gte?: InputMaybe<Scalars['String']>;
  poolInfo_in?: InputMaybe<Array<Scalars['String']>>;
  poolInfo_lt?: InputMaybe<Scalars['String']>;
  poolInfo_lte?: InputMaybe<Scalars['String']>;
  poolInfo_not?: InputMaybe<Scalars['String']>;
  poolInfo_not_contains?: InputMaybe<Scalars['String']>;
  poolInfo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolInfo_not_ends_with?: InputMaybe<Scalars['String']>;
  poolInfo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolInfo_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolInfo_not_starts_with?: InputMaybe<Scalars['String']>;
  poolInfo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolInfo_starts_with?: InputMaybe<Scalars['String']>;
  poolInfo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardDebt?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_gt?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_gte?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardDebt_lt?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_lte?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_not?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum MasterChefUserInfo_OrderBy {
  Account = 'account',
  Amount = 'amount',
  Id = 'id',
  MasterChef = 'masterChef',
  PoolInfo = 'poolInfo',
  RewardDebt = 'rewardDebt'
}

export type MasterChef_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  endBlock?: InputMaybe<Scalars['BigInt']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardPerBlock?: InputMaybe<Scalars['BigInt']>;
  rewardPerBlock_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerBlock_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerBlock_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerBlock_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerBlock_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock?: InputMaybe<Scalars['BigInt']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocPoint?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocPoint_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum MasterChef_OrderBy {
  EndBlock = 'endBlock',
  Id = 'id',
  PoolInfos = 'poolInfos',
  RewardPerBlock = 'rewardPerBlock',
  StartBlock = 'startBlock',
  TotalAllocPoint = 'totalAllocPoint',
  UserInfos = 'userInfos'
}

export type MerkleDrop = {
  claims: Array<MerkleDropClaim>;
  expiryTime: Scalars['Int'];
  /**
   * Address
   *
   */
  id: Scalars['ID'];
  merkleRoot: Scalars['Bytes'];
  startTime: Scalars['Int'];
};


export type MerkleDropClaimsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MerkleDropClaim_Filter>;
};

export type MerkleDropClaim = {
  account: Account;
  amount: Scalars['BigInt'];
  /**
   * {merkleDrop.id}.{account.id}
   *
   */
  id: Scalars['ID'];
  locked: Scalars['Boolean'];
  merkleDrop: MerkleDrop;
};

export type MerkleDropClaim_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  locked?: InputMaybe<Scalars['Boolean']>;
  locked_in?: InputMaybe<Array<Scalars['Boolean']>>;
  locked_not?: InputMaybe<Scalars['Boolean']>;
  locked_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  merkleDrop?: InputMaybe<Scalars['String']>;
  merkleDrop_contains?: InputMaybe<Scalars['String']>;
  merkleDrop_contains_nocase?: InputMaybe<Scalars['String']>;
  merkleDrop_ends_with?: InputMaybe<Scalars['String']>;
  merkleDrop_ends_with_nocase?: InputMaybe<Scalars['String']>;
  merkleDrop_gt?: InputMaybe<Scalars['String']>;
  merkleDrop_gte?: InputMaybe<Scalars['String']>;
  merkleDrop_in?: InputMaybe<Array<Scalars['String']>>;
  merkleDrop_lt?: InputMaybe<Scalars['String']>;
  merkleDrop_lte?: InputMaybe<Scalars['String']>;
  merkleDrop_not?: InputMaybe<Scalars['String']>;
  merkleDrop_not_contains?: InputMaybe<Scalars['String']>;
  merkleDrop_not_contains_nocase?: InputMaybe<Scalars['String']>;
  merkleDrop_not_ends_with?: InputMaybe<Scalars['String']>;
  merkleDrop_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  merkleDrop_not_in?: InputMaybe<Array<Scalars['String']>>;
  merkleDrop_not_starts_with?: InputMaybe<Scalars['String']>;
  merkleDrop_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  merkleDrop_starts_with?: InputMaybe<Scalars['String']>;
  merkleDrop_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum MerkleDropClaim_OrderBy {
  Account = 'account',
  Amount = 'amount',
  Id = 'id',
  Locked = 'locked',
  MerkleDrop = 'merkleDrop'
}

export type MerkleDrop_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  expiryTime?: InputMaybe<Scalars['Int']>;
  expiryTime_gt?: InputMaybe<Scalars['Int']>;
  expiryTime_gte?: InputMaybe<Scalars['Int']>;
  expiryTime_in?: InputMaybe<Array<Scalars['Int']>>;
  expiryTime_lt?: InputMaybe<Scalars['Int']>;
  expiryTime_lte?: InputMaybe<Scalars['Int']>;
  expiryTime_not?: InputMaybe<Scalars['Int']>;
  expiryTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  merkleRoot?: InputMaybe<Scalars['Bytes']>;
  merkleRoot_contains?: InputMaybe<Scalars['Bytes']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['Bytes']>>;
  merkleRoot_not?: InputMaybe<Scalars['Bytes']>;
  merkleRoot_not_contains?: InputMaybe<Scalars['Bytes']>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  startTime?: InputMaybe<Scalars['Int']>;
  startTime_gt?: InputMaybe<Scalars['Int']>;
  startTime_gte?: InputMaybe<Scalars['Int']>;
  startTime_in?: InputMaybe<Array<Scalars['Int']>>;
  startTime_lt?: InputMaybe<Scalars['Int']>;
  startTime_lte?: InputMaybe<Scalars['Int']>;
  startTime_not?: InputMaybe<Scalars['Int']>;
  startTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum MerkleDrop_OrderBy {
  Claims = 'claims',
  ExpiryTime = 'expiryTime',
  Id = 'id',
  MerkleRoot = 'merkleRoot',
  StartTime = 'startTime'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pool = {
  accounts: Array<PoolAccount>;
  /**
   * The Aura deposit token; a 1:1 token representing an LP deposit.
   * - Factory pools    => an auraLP token
   * - auraBAL staking  => auraBAL
   *
   */
  depositToken: Token;
  factoryPoolData?: Maybe<FactoryPoolData>;
  /**
   * Pool ID (pid)
   *
   */
  id: Scalars['ID'];
  isFactoryPool: Scalars['Boolean'];
  /**
   * LP Token refers to:
   * - Factory pools    => e.g. a given BPT
   * - auraBAL staking  => BAL
   *
   */
  lpToken: Token;
  /**
   * List of rewards per-token
   *
   */
  rewardData: Array<PoolRewardData>;
  /**
   * BaseRewardPool (for factory pools)
   *
   */
  rewardPool: Scalars['Bytes'];
  /**
   * auraBal initial staking only
   *
   */
  startTime?: Maybe<Scalars['Int']>;
  /**
   * Total staked in the rewardPool
   *
   */
  totalStaked: Scalars['BigInt'];
  /**
   * Total supply of the depositToken
   *
   */
  totalSupply: Scalars['BigInt'];
};


export type PoolAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolAccount_Filter>;
};


export type PoolRewardDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolRewardData_Filter>;
};

export type PoolAccount = {
  account: Account;
  /**
   * depositToken.balanceOf(account)
   *
   */
  balance: Scalars['BigInt'];
  /**
   * {Pool.id}.{Account.id}
   *
   */
  id: Scalars['ID'];
  pool: Pool;
  /**
   * userRewardPerTokenPaid(account)
   *
   */
  rewardPerTokenPaid: Scalars['BigInt'];
  /**
   * rewards(account)
   *
   */
  rewards: Scalars['BigInt'];
  /**
   * rewardsPool.balanceOf(account)
   * i.e. the account's staked LP tokens
   *
   */
  staked: Scalars['BigInt'];
};

export type PoolAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardPerTokenPaid?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerTokenPaid_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenPaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewards?: InputMaybe<Scalars['BigInt']>;
  rewards_gt?: InputMaybe<Scalars['BigInt']>;
  rewards_gte?: InputMaybe<Scalars['BigInt']>;
  rewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewards_lt?: InputMaybe<Scalars['BigInt']>;
  rewards_lte?: InputMaybe<Scalars['BigInt']>;
  rewards_not?: InputMaybe<Scalars['BigInt']>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  staked?: InputMaybe<Scalars['BigInt']>;
  staked_gt?: InputMaybe<Scalars['BigInt']>;
  staked_gte?: InputMaybe<Scalars['BigInt']>;
  staked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  staked_lt?: InputMaybe<Scalars['BigInt']>;
  staked_lte?: InputMaybe<Scalars['BigInt']>;
  staked_not?: InputMaybe<Scalars['BigInt']>;
  staked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum PoolAccount_OrderBy {
  Account = 'account',
  Balance = 'balance',
  Id = 'id',
  Pool = 'pool',
  RewardPerTokenPaid = 'rewardPerTokenPaid',
  Rewards = 'rewards',
  Staked = 'staked'
}

export type PoolRewardData = RewardData & {
  /**
   * {pool.id}.{token.id}
   *
   */
  id: Scalars['ID'];
  lastUpdateTime: Scalars['Int'];
  periodFinish: Scalars['Int'];
  pool: Pool;
  rewardPerTokenStored: Scalars['BigInt'];
  rewardRate: Scalars['BigInt'];
  token: Token;
};

export type PoolRewardData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdateTime?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTime_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  periodFinish?: InputMaybe<Scalars['Int']>;
  periodFinish_gt?: InputMaybe<Scalars['Int']>;
  periodFinish_gte?: InputMaybe<Scalars['Int']>;
  periodFinish_in?: InputMaybe<Array<Scalars['Int']>>;
  periodFinish_lt?: InputMaybe<Scalars['Int']>;
  periodFinish_lte?: InputMaybe<Scalars['Int']>;
  periodFinish_not?: InputMaybe<Scalars['Int']>;
  periodFinish_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardPerTokenStored?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardRate?: InputMaybe<Scalars['BigInt']>;
  rewardRate_gt?: InputMaybe<Scalars['BigInt']>;
  rewardRate_gte?: InputMaybe<Scalars['BigInt']>;
  rewardRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardRate_lt?: InputMaybe<Scalars['BigInt']>;
  rewardRate_lte?: InputMaybe<Scalars['BigInt']>;
  rewardRate_not?: InputMaybe<Scalars['BigInt']>;
  rewardRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PoolRewardData_OrderBy {
  Id = 'id',
  LastUpdateTime = 'lastUpdateTime',
  PeriodFinish = 'periodFinish',
  Pool = 'pool',
  RewardPerTokenStored = 'rewardPerTokenStored',
  RewardRate = 'rewardRate',
  Token = 'token'
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  depositToken?: InputMaybe<Scalars['String']>;
  depositToken_contains?: InputMaybe<Scalars['String']>;
  depositToken_contains_nocase?: InputMaybe<Scalars['String']>;
  depositToken_ends_with?: InputMaybe<Scalars['String']>;
  depositToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositToken_gt?: InputMaybe<Scalars['String']>;
  depositToken_gte?: InputMaybe<Scalars['String']>;
  depositToken_in?: InputMaybe<Array<Scalars['String']>>;
  depositToken_lt?: InputMaybe<Scalars['String']>;
  depositToken_lte?: InputMaybe<Scalars['String']>;
  depositToken_not?: InputMaybe<Scalars['String']>;
  depositToken_not_contains?: InputMaybe<Scalars['String']>;
  depositToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  depositToken_not_ends_with?: InputMaybe<Scalars['String']>;
  depositToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  depositToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  depositToken_not_starts_with?: InputMaybe<Scalars['String']>;
  depositToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  depositToken_starts_with?: InputMaybe<Scalars['String']>;
  depositToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factoryPoolData?: InputMaybe<Scalars['String']>;
  factoryPoolData_contains?: InputMaybe<Scalars['String']>;
  factoryPoolData_contains_nocase?: InputMaybe<Scalars['String']>;
  factoryPoolData_ends_with?: InputMaybe<Scalars['String']>;
  factoryPoolData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factoryPoolData_gt?: InputMaybe<Scalars['String']>;
  factoryPoolData_gte?: InputMaybe<Scalars['String']>;
  factoryPoolData_in?: InputMaybe<Array<Scalars['String']>>;
  factoryPoolData_lt?: InputMaybe<Scalars['String']>;
  factoryPoolData_lte?: InputMaybe<Scalars['String']>;
  factoryPoolData_not?: InputMaybe<Scalars['String']>;
  factoryPoolData_not_contains?: InputMaybe<Scalars['String']>;
  factoryPoolData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factoryPoolData_not_ends_with?: InputMaybe<Scalars['String']>;
  factoryPoolData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factoryPoolData_not_in?: InputMaybe<Array<Scalars['String']>>;
  factoryPoolData_not_starts_with?: InputMaybe<Scalars['String']>;
  factoryPoolData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factoryPoolData_starts_with?: InputMaybe<Scalars['String']>;
  factoryPoolData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isFactoryPool?: InputMaybe<Scalars['Boolean']>;
  isFactoryPool_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isFactoryPool_not?: InputMaybe<Scalars['Boolean']>;
  isFactoryPool_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lpToken?: InputMaybe<Scalars['String']>;
  lpToken_contains?: InputMaybe<Scalars['String']>;
  lpToken_contains_nocase?: InputMaybe<Scalars['String']>;
  lpToken_ends_with?: InputMaybe<Scalars['String']>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_gt?: InputMaybe<Scalars['String']>;
  lpToken_gte?: InputMaybe<Scalars['String']>;
  lpToken_in?: InputMaybe<Array<Scalars['String']>>;
  lpToken_lt?: InputMaybe<Scalars['String']>;
  lpToken_lte?: InputMaybe<Scalars['String']>;
  lpToken_not?: InputMaybe<Scalars['String']>;
  lpToken_not_contains?: InputMaybe<Scalars['String']>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_ends_with?: InputMaybe<Scalars['String']>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpToken_not_starts_with?: InputMaybe<Scalars['String']>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_starts_with?: InputMaybe<Scalars['String']>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewardPool?: InputMaybe<Scalars['Bytes']>;
  rewardPool_contains?: InputMaybe<Scalars['Bytes']>;
  rewardPool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardPool_not?: InputMaybe<Scalars['Bytes']>;
  rewardPool_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardPool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  startTime?: InputMaybe<Scalars['Int']>;
  startTime_gt?: InputMaybe<Scalars['Int']>;
  startTime_gte?: InputMaybe<Scalars['Int']>;
  startTime_in?: InputMaybe<Array<Scalars['Int']>>;
  startTime_lt?: InputMaybe<Scalars['Int']>;
  startTime_lte?: InputMaybe<Scalars['Int']>;
  startTime_not?: InputMaybe<Scalars['Int']>;
  startTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalStaked?: InputMaybe<Scalars['BigInt']>;
  totalStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Pool_OrderBy {
  Accounts = 'accounts',
  DepositToken = 'depositToken',
  FactoryPoolData = 'factoryPoolData',
  Id = 'id',
  IsFactoryPool = 'isFactoryPool',
  LpToken = 'lpToken',
  RewardData = 'rewardData',
  RewardPool = 'rewardPool',
  StartTime = 'startTime',
  TotalStaked = 'totalStaked',
  TotalSupply = 'totalSupply'
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auraLocker?: Maybe<AuraLocker>;
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  auraLockerAccounts: Array<AuraLockerAccount>;
  auraLockerRewardData?: Maybe<AuraLockerRewardData>;
  auraLockerRewardDatas: Array<AuraLockerRewardData>;
  auraLockerUserData?: Maybe<AuraLockerUserData>;
  auraLockerUserDatas: Array<AuraLockerUserData>;
  auraLockerUserLock?: Maybe<AuraLockerUserLock>;
  auraLockerUserLocks: Array<AuraLockerUserLock>;
  auraLockers: Array<AuraLocker>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  factoryPoolDatas: Array<FactoryPoolData>;
  global?: Maybe<Global>;
  globals: Array<Global>;
  masterChef?: Maybe<MasterChef>;
  masterChefPoolInfo?: Maybe<MasterChefPoolInfo>;
  masterChefPoolInfos: Array<MasterChefPoolInfo>;
  masterChefUserInfo?: Maybe<MasterChefUserInfo>;
  masterChefUserInfos: Array<MasterChefUserInfo>;
  masterChefs: Array<MasterChef>;
  merkleDrop?: Maybe<MerkleDrop>;
  merkleDropClaim?: Maybe<MerkleDropClaim>;
  merkleDropClaims: Array<MerkleDropClaim>;
  merkleDrops: Array<MerkleDrop>;
  pool?: Maybe<Pool>;
  poolAccount?: Maybe<PoolAccount>;
  poolAccounts: Array<PoolAccount>;
  poolRewardData?: Maybe<PoolRewardData>;
  poolRewardDatas: Array<PoolRewardData>;
  pools: Array<Pool>;
  rewardData?: Maybe<RewardData>;
  rewardDatas: Array<RewardData>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAuraLockerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuraLockerAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuraLockerAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerAccount_Filter>;
};


export type QueryAuraLockerRewardDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuraLockerRewardDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
};


export type QueryAuraLockerUserDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuraLockerUserDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserData_Filter>;
};


export type QueryAuraLockerUserLockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuraLockerUserLocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
};


export type QueryAuraLockersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLocker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLocker_Filter>;
};


export type QueryFactoryPoolDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFactoryPoolDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryPoolData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryPoolData_Filter>;
};


export type QueryGlobalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGlobalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Global_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Global_Filter>;
};


export type QueryMasterChefArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMasterChefPoolInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMasterChefPoolInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
};


export type QueryMasterChefUserInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMasterChefUserInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
};


export type QueryMasterChefsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChef_Filter>;
};


export type QueryMerkleDropArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMerkleDropClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMerkleDropClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDropClaim_Filter>;
};


export type QueryMerkleDropsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MerkleDrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDrop_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccount_Filter>;
};


export type QueryPoolRewardDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolRewardDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardData_Filter>;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryRewardDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardData_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type RewardData = {
  /**
   * Last time any user took action
   *
   */
  lastUpdateTime: Scalars['Int'];
  /**
   * Timestamp for current period finish
   *
   */
  periodFinish: Scalars['Int'];
  /**
   * Ever increasing rewardPerToken rate, based on % of total supply
   *
   */
  rewardPerTokenStored: Scalars['BigInt'];
  /**
   * RewardRate for the rest of the period
   *
   */
  rewardRate: Scalars['BigInt'];
  token: Token;
};

export type RewardData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  lastUpdateTime?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_gt?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_gte?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_in?: InputMaybe<Array<Scalars['Int']>>;
  lastUpdateTime_lt?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_lte?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_not?: InputMaybe<Scalars['Int']>;
  lastUpdateTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  periodFinish?: InputMaybe<Scalars['Int']>;
  periodFinish_gt?: InputMaybe<Scalars['Int']>;
  periodFinish_gte?: InputMaybe<Scalars['Int']>;
  periodFinish_in?: InputMaybe<Array<Scalars['Int']>>;
  periodFinish_lt?: InputMaybe<Scalars['Int']>;
  periodFinish_lte?: InputMaybe<Scalars['Int']>;
  periodFinish_not?: InputMaybe<Scalars['Int']>;
  periodFinish_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardPerTokenStored?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerTokenStored_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerTokenStored_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardRate?: InputMaybe<Scalars['BigInt']>;
  rewardRate_gt?: InputMaybe<Scalars['BigInt']>;
  rewardRate_gte?: InputMaybe<Scalars['BigInt']>;
  rewardRate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardRate_lt?: InputMaybe<Scalars['BigInt']>;
  rewardRate_lte?: InputMaybe<Scalars['BigInt']>;
  rewardRate_not?: InputMaybe<Scalars['BigInt']>;
  rewardRate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RewardData_OrderBy {
  LastUpdateTime = 'lastUpdateTime',
  PeriodFinish = 'periodFinish',
  RewardPerTokenStored = 'rewardPerTokenStored',
  RewardRate = 'rewardRate',
  Token = 'token'
}

export type Subscription = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auraLocker?: Maybe<AuraLocker>;
  auraLockerAccount?: Maybe<AuraLockerAccount>;
  auraLockerAccounts: Array<AuraLockerAccount>;
  auraLockerRewardData?: Maybe<AuraLockerRewardData>;
  auraLockerRewardDatas: Array<AuraLockerRewardData>;
  auraLockerUserData?: Maybe<AuraLockerUserData>;
  auraLockerUserDatas: Array<AuraLockerUserData>;
  auraLockerUserLock?: Maybe<AuraLockerUserLock>;
  auraLockerUserLocks: Array<AuraLockerUserLock>;
  auraLockers: Array<AuraLocker>;
  factoryPoolData?: Maybe<FactoryPoolData>;
  factoryPoolDatas: Array<FactoryPoolData>;
  global?: Maybe<Global>;
  globals: Array<Global>;
  masterChef?: Maybe<MasterChef>;
  masterChefPoolInfo?: Maybe<MasterChefPoolInfo>;
  masterChefPoolInfos: Array<MasterChefPoolInfo>;
  masterChefUserInfo?: Maybe<MasterChefUserInfo>;
  masterChefUserInfos: Array<MasterChefUserInfo>;
  masterChefs: Array<MasterChef>;
  merkleDrop?: Maybe<MerkleDrop>;
  merkleDropClaim?: Maybe<MerkleDropClaim>;
  merkleDropClaims: Array<MerkleDropClaim>;
  merkleDrops: Array<MerkleDrop>;
  pool?: Maybe<Pool>;
  poolAccount?: Maybe<PoolAccount>;
  poolAccounts: Array<PoolAccount>;
  poolRewardData?: Maybe<PoolRewardData>;
  poolRewardDatas: Array<PoolRewardData>;
  pools: Array<Pool>;
  rewardData?: Maybe<RewardData>;
  rewardDatas: Array<RewardData>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAuraLockerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuraLockerAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuraLockerAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerAccount_Filter>;
};


export type SubscriptionAuraLockerRewardDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuraLockerRewardDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerRewardData_Filter>;
};


export type SubscriptionAuraLockerUserDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuraLockerUserDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerUserData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserData_Filter>;
};


export type SubscriptionAuraLockerUserLockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuraLockerUserLocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLockerUserLock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLockerUserLock_Filter>;
};


export type SubscriptionAuraLockersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuraLocker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuraLocker_Filter>;
};


export type SubscriptionFactoryPoolDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFactoryPoolDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryPoolData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FactoryPoolData_Filter>;
};


export type SubscriptionGlobalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGlobalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Global_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Global_Filter>;
};


export type SubscriptionMasterChefArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMasterChefPoolInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMasterChefPoolInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefPoolInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefPoolInfo_Filter>;
};


export type SubscriptionMasterChefUserInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMasterChefUserInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChefUserInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChefUserInfo_Filter>;
};


export type SubscriptionMasterChefsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MasterChef_Filter>;
};


export type SubscriptionMerkleDropArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMerkleDropClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMerkleDropClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MerkleDropClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDropClaim_Filter>;
};


export type SubscriptionMerkleDropsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MerkleDrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MerkleDrop_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolAccount_Filter>;
};


export type SubscriptionPoolRewardDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolRewardDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolRewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolRewardData_Filter>;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionRewardDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardData_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Token = {
  decimals: Scalars['Int'];
  /**
   * Address
   *
   */
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol'
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AllTokenFragment = { id: string, decimals: number, symbol: string, name: string };

export type AllPoolFragment = { id: string, isFactoryPool: boolean, rewardPool: string, totalSupply: string, totalStaked: string, depositToken: { id: string, decimals: number, symbol: string, name: string }, lpToken: { id: string, decimals: number, symbol: string, name: string }, factoryPoolData?: { id: string, isShutdown: boolean, stash: string, gauge: string } | null, rewardData: Array<{ id: string, periodFinish: number, lastUpdateTime: number, rewardPerTokenStored: string, rewardRate: string, token: { id: string, decimals: number, symbol: string, name: string } }> };

export type AllPoolAccountFragment = { id: string, balance: string, staked: string, rewards: string, rewardPerTokenPaid: string };

export type AllAuraLockerFragment = { id: string, address: string, lockedSupply: string, totalLocked: string, rewardData: Array<{ id: string, periodFinish: number, lastUpdateTime: number, rewardPerTokenStored: string, rewardRate: string, token: { id: string, decimals: number, symbol: string, name: string } }> };

export type AuraStaticQueryVariables = Exact<{ [key: string]: never; }>;


export type AuraStaticQuery = { global?: { id: string, aura: string, auraTotalSupply: string, auraMaxSupply: string, auraReductionPerCliff: string, auraTotalCliffs: string } | null, masterChefs: Array<{ id: string, endBlock: string, startBlock: string, totalAllocPoint: string, rewardPerBlock: string }>, tokens: Array<{ id: string, decimals: number, symbol: string, name: string }> };

export type MerkleDropsQueryVariables = Exact<{
  accountId: Scalars['String'];
  hasAccount: Scalars['Boolean'];
}>;


export type MerkleDropsQuery = { merkleDrops: Array<{ id: string, startTime: number, expiryTime: number, merkleRoot: string, claims?: Array<{ id: string, amount: string, locked: boolean }> }> };

export type AuraQueryVariables = Exact<{
  accountId: Scalars['String'];
  hasAccount: Scalars['Boolean'];
}>;


export type AuraQuery = { auraLocker?: { id: string, address: string, lockedSupply: string, totalLocked: string, accounts?: Array<{ id: string, balance: string, balanceLocked: string, balanceNextUnlockIndex: number, userLocks: Array<{ id: string, amount: string, unlockTime: number }>, userData: Array<{ id: string, rewards: string, rewardPerTokenPaid: string, token: { id: string, decimals: number, symbol: string, name: string } }> }>, rewardData: Array<{ id: string, periodFinish: number, lastUpdateTime: number, rewardPerTokenStored: string, rewardRate: string, token: { id: string, decimals: number, symbol: string, name: string } }> } | null, auraBal?: { id: string, isFactoryPool: boolean, rewardPool: string, totalSupply: string, totalStaked: string, accounts?: Array<{ id: string, balance: string, staked: string, rewards: string, rewardPerTokenPaid: string }>, depositToken: { id: string, decimals: number, symbol: string, name: string }, lpToken: { id: string, decimals: number, symbol: string, name: string }, factoryPoolData?: { id: string, isShutdown: boolean, stash: string, gauge: string } | null, rewardData: Array<{ id: string, periodFinish: number, lastUpdateTime: number, rewardPerTokenStored: string, rewardRate: string, token: { id: string, decimals: number, symbol: string, name: string } }> } | null, initialAuraBal?: { id: string, isFactoryPool: boolean, rewardPool: string, totalSupply: string, totalStaked: string, accounts?: Array<{ id: string, balance: string, staked: string, rewards: string, rewardPerTokenPaid: string }>, depositToken: { id: string, decimals: number, symbol: string, name: string }, lpToken: { id: string, decimals: number, symbol: string, name: string }, factoryPoolData?: { id: string, isShutdown: boolean, stash: string, gauge: string } | null, rewardData: Array<{ id: string, periodFinish: number, lastUpdateTime: number, rewardPerTokenStored: string, rewardRate: string, token: { id: string, decimals: number, symbol: string, name: string } }> } | null, factoryPools: Array<{ id: string, isFactoryPool: boolean, rewardPool: string, totalSupply: string, totalStaked: string, accounts?: Array<{ id: string, balance: string, staked: string, rewards: string, rewardPerTokenPaid: string }>, depositToken: { id: string, decimals: number, symbol: string, name: string }, lpToken: { id: string, decimals: number, symbol: string, name: string }, factoryPoolData?: { id: string, isShutdown: boolean, stash: string, gauge: string } | null, rewardData: Array<{ id: string, periodFinish: number, lastUpdateTime: number, rewardPerTokenStored: string, rewardRate: string, token: { id: string, decimals: number, symbol: string, name: string } }> }>, masterChefPoolInfos: Array<{ id: string, accCvxPerShare: string, allocPoint: string, lastRewardBlock: string, rewarder: string, lpSupply: string, lpToken: { id: string, decimals: number, symbol: string, name: string }, userInfos?: Array<{ id: string, amount: string, rewardDebt: string }> }> };

export const AllTokenFragmentDoc = gql`
    fragment AllToken on Token {
  id
  decimals
  symbol
  name
}
    `;
export const AllPoolFragmentDoc = gql`
    fragment AllPool on Pool {
  id
  depositToken {
    ...AllToken
  }
  lpToken {
    ...AllToken
  }
  isFactoryPool
  factoryPoolData {
    id
    isShutdown
    stash
    gauge
  }
  rewardPool
  rewardData {
    id
    token {
      ...AllToken
    }
    periodFinish
    lastUpdateTime
    rewardPerTokenStored
    rewardRate
  }
  totalSupply
  totalStaked
}
    ${AllTokenFragmentDoc}`;
export const AllPoolAccountFragmentDoc = gql`
    fragment AllPoolAccount on PoolAccount {
  id
  balance
  staked
  rewards
  rewardPerTokenPaid
}
    `;
export const AllAuraLockerFragmentDoc = gql`
    fragment AllAuraLocker on AuraLocker {
  id
  address
  lockedSupply
  totalLocked: totalSupply
  rewardData {
    id
    token {
      ...AllToken
    }
    periodFinish
    lastUpdateTime
    rewardPerTokenStored
    rewardRate
  }
}
    ${AllTokenFragmentDoc}`;
export const AuraStaticDocument = gql`
    query AuraStatic {
  global(id: "global") {
    id
    aura
    auraTotalSupply
    auraMaxSupply
    auraReductionPerCliff
    auraTotalCliffs
  }
  masterChefs {
    id
    endBlock
    startBlock
    totalAllocPoint
    rewardPerBlock
  }
  tokens {
    ...AllToken
  }
}
    ${AllTokenFragmentDoc}`;

/**
 * __useAuraStaticQuery__
 *
 * To run a query within a React component, call `useAuraStaticQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraStaticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraStaticQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuraStaticQuery(baseOptions?: Apollo.QueryHookOptions<AuraStaticQuery, AuraStaticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuraStaticQuery, AuraStaticQueryVariables>(AuraStaticDocument, options);
      }
export function useAuraStaticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuraStaticQuery, AuraStaticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuraStaticQuery, AuraStaticQueryVariables>(AuraStaticDocument, options);
        }
export type AuraStaticQueryHookResult = ReturnType<typeof useAuraStaticQuery>;
export type AuraStaticLazyQueryHookResult = ReturnType<typeof useAuraStaticLazyQuery>;
export type AuraStaticQueryResult = Apollo.QueryResult<AuraStaticQuery, AuraStaticQueryVariables>;
export const MerkleDropsDocument = gql`
    query MerkleDrops($accountId: String!, $hasAccount: Boolean!) {
  merkleDrops {
    id
    startTime
    expiryTime
    merkleRoot
    claims(where: {account: $accountId}) @include(if: $hasAccount) {
      id
      amount
      locked
    }
  }
}
    `;

/**
 * __useMerkleDropsQuery__
 *
 * To run a query within a React component, call `useMerkleDropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMerkleDropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerkleDropsQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      hasAccount: // value for 'hasAccount'
 *   },
 * });
 */
export function useMerkleDropsQuery(baseOptions: Apollo.QueryHookOptions<MerkleDropsQuery, MerkleDropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MerkleDropsQuery, MerkleDropsQueryVariables>(MerkleDropsDocument, options);
      }
export function useMerkleDropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MerkleDropsQuery, MerkleDropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MerkleDropsQuery, MerkleDropsQueryVariables>(MerkleDropsDocument, options);
        }
export type MerkleDropsQueryHookResult = ReturnType<typeof useMerkleDropsQuery>;
export type MerkleDropsLazyQueryHookResult = ReturnType<typeof useMerkleDropsLazyQuery>;
export type MerkleDropsQueryResult = Apollo.QueryResult<MerkleDropsQuery, MerkleDropsQueryVariables>;
export const AuraDocument = gql`
    query Aura($accountId: String!, $hasAccount: Boolean!) {
  auraLocker(id: "auraLocker") {
    ...AllAuraLocker
    accounts(where: {account: $accountId}) @include(if: $hasAccount) {
      id
      balance
      balanceLocked
      balanceNextUnlockIndex
      userLocks {
        id
        amount
        unlockTime
      }
      userData {
        id
        token {
          ...AllToken
        }
        rewards
        rewardPerTokenPaid
      }
    }
  }
  auraBal: pool(id: "auraBal") {
    ...AllPool
    accounts(where: {account: $accountId}) @include(if: $hasAccount) {
      ...AllPoolAccount
    }
  }
  initialAuraBal: pool(id: "initialAuraBalRewards") {
    ...AllPool
    accounts(where: {account: $accountId}) @include(if: $hasAccount) {
      ...AllPoolAccount
    }
  }
  factoryPools: pools(where: {isFactoryPool: true}) {
    ...AllPool
    accounts(where: {account: $accountId}) @include(if: $hasAccount) {
      ...AllPoolAccount
    }
  }
  masterChefPoolInfos {
    id
    accCvxPerShare
    allocPoint
    lastRewardBlock
    rewarder
    lpToken {
      ...AllToken
    }
    lpSupply
    userInfos(where: {account: $accountId}) @include(if: $hasAccount) {
      id
      amount
      rewardDebt
    }
  }
}
    ${AllAuraLockerFragmentDoc}
${AllTokenFragmentDoc}
${AllPoolFragmentDoc}
${AllPoolAccountFragmentDoc}`;

/**
 * __useAuraQuery__
 *
 * To run a query within a React component, call `useAuraQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuraQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      hasAccount: // value for 'hasAccount'
 *   },
 * });
 */
export function useAuraQuery(baseOptions: Apollo.QueryHookOptions<AuraQuery, AuraQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuraQuery, AuraQueryVariables>(AuraDocument, options);
      }
export function useAuraLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuraQuery, AuraQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuraQuery, AuraQueryVariables>(AuraDocument, options);
        }
export type AuraQueryHookResult = ReturnType<typeof useAuraQuery>;
export type AuraLazyQueryHookResult = ReturnType<typeof useAuraLazyQuery>;
export type AuraQueryResult = Apollo.QueryResult<AuraQuery, AuraQueryVariables>;