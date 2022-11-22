import { Kovan, Mainnet } from '@usedapp/core';
import { constants } from 'ethers';

export const MAINNET_WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

export interface Contracts {
  multicall: string;
  crv: string;
  weth: string;
  crvBpt: string;
  voterProxy: string;
  cvx: string;
  minter: string;
  booster: string;
  boosterOwner: string;
  cvxCrv: string;
  cvxCrvBpt: string;
  cvxCrvRewards: string;
  initialCvxCrvStaking: string;
  crvDepositor: string;
  crvDepositorWrapper: string;
  poolManager: string;
  cvxLocker: string;
  cvxStakingProxy: string;
  chef: string;
  vestedEscrows: string[];
  lbpBpt: string;
  balLiquidityProvider: string;
  pool8020Bpt: string;
  claimZap: string;
  balVault: string;
  rewardDepositWrapper: string;
  balancerHelpers: string;
}

export const MainnetContracts: Contracts = {
  balLiquidityProvider: '0xa7429af4deb16827dad0e71d8aeea9c2bf70e32c',
  balVault: '0xba12222222228d8ba445958a75a0704d566bf2c8',
  balancerHelpers: '0x5aDDCCa35b7A0D07C74063c48700C8590E87864E',
  booster: '0x7818a1da7bd1e64c199029e86ba244a9798eee10',
  boosterOwner: '0xfa838af70314135159b309bf27f1dbf1f954ec34',
  chef: '0x1ab80f7fb46b25b7e0b2cfac23fc88ac37aaf4e9',
  claimZap: constants.AddressZero, // Phase 4
  crv: '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf',
  crvDepositor: '0xead792b55340aa20181a80d6a16db6a0ecd1b827',
  crvDepositorWrapper: '0x68655ad9852a99c87c0934c7290bb62cfa5d4123',
  cvx: '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf',
  cvxCrv: '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d',
  cvxCrvBpt: '0x6641a8c1d33bd3dec8dd85e69c63cafb5bf36388',
  cvxCrvRewards: '0x5e5ea2048475854a5702f5b8468a51ba1296efcc',
  cvxLocker: '0x3fa73f1e5d8a792c80f426fc8f84fbf7ce9bbcac',
  cvxStakingProxy: '0xd9e863b7317a66fe0a4d2834910f604fd6f89c6c',
  initialCvxCrvStaking: '0xc47162863a12227e5c3b0860715f9cf721651c0c',
  lbpBpt: '0x6fc73b9d624b543f8b6b88fc3ce627877ff169ee',
  minter: '0x59a5ccd34943cd0adcf5ce703ee9f06889e13707',
  multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  poolManager: '0xf843f61508fc17543412de55b10ed87f4c28de50',
  pool8020Bpt: constants.AddressZero, // Phase 3
  voterProxy: '0xaf52695e1bb01a16d33d7194c28c42b10e0dbec2',
  weth: MAINNET_WETH,
  crvBpt: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56',
  rewardDepositWrapper: constants.AddressZero, // Phase 4
  vestedEscrows: [
    '0x5bd3fca8d3d8c94a6419d85e0a76ec8da52d836a',
    '0x24346652e0e2ae0ce05c781501fdf4fe4553fac6',
    '0x45025ebc38647bcf7edd2b40cfdaf3fbfe1538f5',
    '0xfd72170339ac6d7bdda09d1eaca346b21a30d422',
    '0x43b17088503f4ce1aed9fb302ed6bb51ad6694fa',
  ],
};

export const KovanContracts: Contracts = {
  multicall: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
  voterProxy: '0xac4dd3cb87220090fbd77b65d5c8436ee7a6d08c',
  cvx: '0x16fe78b330b8c628dea89344db003a86b54bb69d',
  booster: '0x40f346097e608a9a2a7cd5f431c08a16261c994f',
  cvxCrv: '0x11b2655b2f64a70888bcaf4ad340992ab6fc8cfa',
  cvxCrvBpt: '0xd97b6a43ee27267950aa55e9e38cc0ee4cf211c6',
  cvxCrvRewards: '0xb53e98b3a715c83c93313875504f16f7d4571504',
  crvDepositor: '0xc8362a7454ee6f400d0376d37c703fbd8bcc22e8',
  crvDepositorWrapper: '0x04cad0f53d69ad75e3cc42f86405223783bcdd8e',
  cvxLocker: '0x117f8ec16c00c9f321129651abbc4a38cad350d2',
  chef: '0xa80dfc35d7f8bd2b6344752a3f5fdee10673dd36',
  lbpBpt: '0x3551510fe29ab57fa1ac7d75954a7bdbcbcecec1',
  pool8020Bpt: '0x5e43529b3135181497b94869b7115aa318d56b94',
  claimZap: '0x768ddfdcebf5d014710b8bf116fdba18acbd6db3',
  rewardDepositWrapper: '0xfd605db0511fe42d9f7cd7d62324cf9f0167175f',
  crv: '0xcb355677e36f390ccc4a5d4beadfbf1eb2071c81',
  crvBpt: '0xdc2ecfdf2688f92c85064be0b929693acc6dbca6',
  minter: '0xe86f1e7faad932e071fd37ec5da3a2877a31c51f',
  boosterOwner: '0xc586a417a512bc234a7327112e41284f2e98b953',
  initialCvxCrvStaking: '0xe66f0579fb7fccced6e18e9a0e610493811bfe79',
  poolManager: '0x2f2c0d5a60914ffd62d2bb48d189b1cd87bede61',
  cvxStakingProxy: '0x3a38c699e2b464d21a13efbd35cc71021994b032',
  vestedEscrows: [
    '0x0e0837c8da3c1931831cc9ac2c19265aaa16cf97',
    '0x1fad8b2af546f6f56115a5f17ab7a6e6946a771a',
    '0x156c44b88fba5b65083758e7d1634c9fd27f0a31',
    '0x700c22100691ae23498d2182f317a7bc2829043a',
  ],
  balLiquidityProvider: '0x179ae0b233bf0d14fb9d87f3ad2bf7625af96623',
  balVault: '0xba12222222228d8ba445958a75a0704d566bf2c8',
  weth: '0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1',
  balancerHelpers: '0x94905e703fEAd7f0fD0eEe355D267eE909784e6d',
};

export const ADDRESS: Record<number, Contracts> = {
  [Kovan.chainId]: KovanContracts,
  [Mainnet.chainId]: MainnetContracts as Contracts,
};
