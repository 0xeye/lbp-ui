import { FC } from 'react';
import { createInputContext } from '../hooks/useInput';

const [useTransactionSlippage, TransactionSlippageProvider] = createInputContext();
const [useTransactionDeadline, TransactionDeadlineProvider] = createInputContext();

export const TransactionInfoProvider: FC = ({ children }) => (
  <TransactionSlippageProvider initialValue={'0.5'}>
    <TransactionDeadlineProvider initialValue={'30'}>{children}</TransactionDeadlineProvider>
  </TransactionSlippageProvider>
);

export { useTransactionSlippage, useTransactionDeadline };
