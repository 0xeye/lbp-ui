import { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { LBP_PARAMS } from '../constants/lbp';
import { BigNumber, constants } from 'ethers';
import { Params } from '@usedapp/core/dist/esm/src/model/types';
import { BalancerVault, BalancerVault__factory } from '../typechain';
import { useAccount } from './useAccount';
import { useAddresses } from './useAddresses';
import { exactToSimple, simpleToExact, toUnixTime } from '../utils';
import { useValidChainId } from './useValidChainId';

const MIN_ETH_AMOUNT = simpleToExact(0.00001);

/**
 * @dev IMPORTANT: - LIMIT needs to be passed for actual transaction call.
 */
export const getLBPTransactionParams = (
  chainId: number,
  amount: BigNumber,
  account: string,
  limit = BigNumber.from(0),
  _deadline = 30,
) => {
  const poolInfo = LBP_PARAMS[chainId];
  const poolId = poolInfo.poolId;
  const auraAddress = poolInfo.pair[0].address;

  const now = toUnixTime(Date.now());
  const deadline = now + _deadline * 60;

  const singleSwapStruct = {
    poolId,
    kind: 0,
    assetIn: constants.AddressZero,
    assetOut: auraAddress,
    amount,
    userData: '0x',
  };

  const fundManagementStruct = {
    sender: account,
    fromInternalBalance: false,
    recipient: account,
    toInternalBalance: false,
  };

  return [
    singleSwapStruct,
    fundManagementStruct,
    limit,
    deadline,
    {
      value: amount,
      gasLimit: 200000,
    },
  ] as Params<BalancerVault, 'swap'>;
};

// 👋 gm bunni dudes – this hook can be cleaned up with useCall ->
// https://usedapp-docs.netlify.app/docs/guides/reading/custom%20hooks/
export const useLBPExpectedOutput = (amount?: BigNumber) => {
  const [value, setValue] = useState<{
    output?: BigNumber;
    priceImpact?: number;
  }>({});
  const { library } = useEthers();
  const { chainId } = useValidChainId();
  const addresses = useAddresses();
  const account = useAccount();
  const contract = library && BalancerVault__factory.connect(addresses.balVault, library);

  useEffect(() => {
    (async () => {
      if (!contract || !account || !amount || !exactToSimple(amount)) {
        setValue({});
        return;
      }
      try {
        setValue({});
        const promises = [
          (async () => {
            const params = getLBPTransactionParams(chainId, MIN_ETH_AMOUNT, account);
            const output = await contract.callStatic.swap(...params);
            return output;
          })(),
          (async () => {
            const params = getLBPTransactionParams(chainId, amount, account);
            const output = await contract.callStatic.swap(...params);
            return output;
          })(),
        ];
        const [min, output] = await Promise.all(promises);
        const outputExchangeRate = exactToSimple(output.div(amount), 0);
        const minExchangeRate = exactToSimple(min.div(MIN_ETH_AMOUNT), 0);
        const priceImpact = (1 - outputExchangeRate / minExchangeRate) * 100;
        setValue({ output, priceImpact });
      } catch (error) {
        console.log('ERROR', error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return value;
};
