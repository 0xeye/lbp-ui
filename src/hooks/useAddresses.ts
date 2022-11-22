import { ADDRESS, Contracts } from '../constants/contracts';
import { useValidChainId } from './useValidChainId';

export const useAddresses = (): Contracts => {
  const { chainId } = useValidChainId();
  return ADDRESS[chainId as keyof typeof ADDRESS];
};
