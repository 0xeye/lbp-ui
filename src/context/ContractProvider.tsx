import { FC, useEffect } from 'react';
import { createStateContext } from 'react-use';
import { Contract } from 'ethers';

import { useAddresses } from '../hooks/useAddresses';
import {
  BaseRewardPool,
  BaseRewardPool__factory,
  Booster,
  Booster__factory,
  ClaimZap,
  ClaimZap__factory,
  CrvDepositor,
  CrvDepositor__factory,
  CrvDepositorWrapper,
  CrvDepositorWrapper__factory,
  AuraLocker,
  AuraLocker__factory,
  BalancerVault,
  BalancerVault__factory,
  AuraBalRewardPool,
  AuraBalRewardPool__factory,
  ConvexMasterChef,
  ConvexMasterChef__factory,
  AuraVestedEscrow,
  AuraVestedEscrow__factory,
  BalancerHelpers__factory,
  BalancerHelpers,
} from '../typechain';
import { Contracts } from '../constants/contracts';
import { isArray, isEmpty } from 'lodash';
import { RewardPoolDepositWrapper } from '../typechain/RewardPoolDepositWrapper';
import { RewardPoolDepositWrapper__factory } from '../typechain/factories/RewardPoolDepositWrapper__factory';

export interface State {
  booster: Booster;
  claimZap: ClaimZap;
  crvDepositor: CrvDepositor;
  crvDepositorWrapper: CrvDepositorWrapper;
  cvxCrvRewards: BaseRewardPool;
  cvxLocker: AuraLocker;
  balVault: BalancerVault;
  initialCvxCrvStaking: AuraBalRewardPool;
  chef: ConvexMasterChef;
  vestedEscrows: AuraVestedEscrow[];
  rewardDepositWrapper: RewardPoolDepositWrapper;
  balancerHelpers: BalancerHelpers;
}

const contractAbis: Record<keyof Required<State> & keyof Contracts, any[]> = {
  booster: Booster__factory.abi,
  claimZap: ClaimZap__factory.abi,
  crvDepositor: CrvDepositor__factory.abi,
  crvDepositorWrapper: CrvDepositorWrapper__factory.abi,
  cvxCrvRewards: BaseRewardPool__factory.abi,
  cvxLocker: AuraLocker__factory.abi,
  balVault: BalancerVault__factory.abi,
  initialCvxCrvStaking: AuraBalRewardPool__factory.abi,
  chef: ConvexMasterChef__factory.abi,
  vestedEscrows: AuraVestedEscrow__factory.abi,
  rewardDepositWrapper: RewardPoolDepositWrapper__factory.abi,
  balancerHelpers: BalancerHelpers__factory.abi,
};

const [useContractCtx, ContractProvider] = createStateContext<State>({} as never);

(ContractProvider as FC).displayName = 'ContractProvider';

export const ContractUpdater: FC = () => {
  const addresses = useAddresses();
  const [state, setState] = useContractCtx();

  useEffect(() => {
    if (!isEmpty(state)) return;
    setState(
      Object.fromEntries(
        Object.entries(contractAbis)
          .filter(([key]) => addresses[key as keyof typeof addresses])
          .map(([key, abi]) => {
            const value = addresses[key as keyof typeof addresses];
            if (isArray(value)) return [key, value.map(address => new Contract(address, abi))];
            return [key, new Contract(value as string, abi)];
          }),
      ) as unknown as State,
    );
  });

  return null;
};

export const useContracts = (): State => useContractCtx()[0];

export const useContract = <T extends keyof State>(contractName: T): State[T] => {
  const [{ [contractName]: contract }] = useContractCtx();
  return contract;
};

export { ContractProvider };
