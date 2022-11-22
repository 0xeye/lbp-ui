import { useEthers } from '@usedapp/core';
import { useImpersonateCtx } from '../components/App';

export const useAccount = (noImpersonate?: boolean) => {
  const { account } = useEthers();
  const [impersonatedAccount] = useImpersonateCtx();
  return (noImpersonate ? account : impersonatedAccount ?? account)?.toLowerCase();
};

export const useImpersonate = () => useImpersonateCtx()[1];
