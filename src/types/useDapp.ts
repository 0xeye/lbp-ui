import { TransactionOptions, TransactionStatus } from '@usedapp/core';
import {
  ContractFunctionNames,
  Params,
  TypedContract,
} from '@usedapp/core/dist/esm/src/model/types';
import { LogDescription } from 'ethers/lib/utils';

export interface ContractFunction<T extends TypedContract, FN extends ContractFunctionNames<T>> {
  send: (...args: Params<T, FN>) => Promise<void>;
  state: TransactionStatus;
  events: LogDescription[] | undefined;
  resetState: () => void;
}

export interface ContractFnProps<T extends TypedContract, FN extends ContractFunctionNames<T>> {
  functionName: FN;
  contract: T;
  options?: TransactionOptions;
  getParams?(): Params<T, FN> | undefined;
}
