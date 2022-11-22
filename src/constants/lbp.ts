import { Kovan, Mainnet } from '@usedapp/core';
import { KovanContracts } from './contracts';

export interface LbpInfo {
  start: {
    block: number;
    time: number;
    weights: number[];
    balances: number[];
  };
  end: {
    time: number;
    weights: number[];
  };
  pool: string;
  pair: {
    address: string;
    symbol: string;
  }[];
  poolId: string;
  pairId: string;
  pricingAsset: string;
  bucketSize: number;
}

export const KovanLBP = {
  start: {
    block: 32052369,
    time: 1654602376,
    weights: [99, 1],
    balances: [2_200_000, 50],
  },
  end: {
    time: 1654602376 + 86400 * 4,
    weights: [25, 75],
  },
  pool: KovanContracts.lbpBpt,
  pair: [
    {
      symbol: 'AURA',
      address: KovanContracts.cvx,
    },
    {
      symbol: 'WETH',
      address: KovanContracts.weth,
    },
  ],
  poolId: `0x3551510fe29ab57fa1ac7d75954a7bdbcbcecec100020000000000000000092f`,
  pairId: `${KovanContracts.cvx.toLowerCase()}-${KovanContracts.weth.toLowerCase()}`,
  pricingAsset: 'WETH',
  bucketSize: 3600,
};

const MainnetLBP = {
  start: {
    // FIXME: Add correct block time + UTC time
    block: 14933897,
    time: 1654797600,
    weights: [99, 1],
    balances: [2_200_000, 100],
  },
  end: {
    time: 1655229600,
    weights: [25, 75],
  },
  pool: '0x6fc73b9d624b543f8b6b88fc3ce627877ff169ee',
  pair: [
    {
      symbol: 'AURA',
      address: '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf',
    },
    {
      symbol: 'WETH',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
  ],
  poolId: '0x6fc73b9d624b543f8b6b88fc3ce627877ff169ee000200000000000000000235',
  pairId: `0xc0c293ce456ff0ed870add98a0828dd4d2903dbf-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`,
  pricingAsset: 'WETH',
  bucketSize: 3600,
};

export const LBP_PARAMS: Record<number, LbpInfo> = {
  [Kovan.chainId]: KovanLBP,
  [Mainnet.chainId]: MainnetLBP,
};
