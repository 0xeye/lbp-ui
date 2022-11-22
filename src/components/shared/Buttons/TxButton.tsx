import { CircularProgress, SxProps, Theme } from '@mui/material';
import { useEffect, useState, MouseEvent, FC, ReactChildren, ReactNode } from 'react';
import { ContractFunctionNames, TypedContract } from '@usedapp/core/dist/esm/src/model/types';
import { TransactionState, useContractFunction } from '@usedapp/core';

import { ContractFnProps } from '../../../types/useDapp';
import { BaseButton } from './BaseButton';
import { useValidChainId } from '../../../hooks/useValidChainId';

export interface Props<T extends TypedContract, FN extends ContractFunctionNames<T>> {
  className?: any;
  fontSize?: number | string;
  fontWeight?: number | string;
  fontColor?: string;
  text?: string;
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  sx?: SxProps<Theme>;
  rainbow?: boolean;

  contractFn: ContractFnProps<T, FN>;

  onCheckBeforeSend?(): boolean;
  onSuccess?(): void;
  onFinally?(): void;
}

type ButtonColors =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'loading'
  | 'info'
  | 'warning'
  | undefined;

const getButtonContent = (status: TransactionState = 'None'): JSX.Element | string | undefined => {
  switch (status) {
    case 'PendingSignature':
    case 'Mining':
      return <CircularProgress size={'1.25rem'} />;
    case 'Success':
      return 'Success!';
    case 'Fail':
    case 'Exception':
      return 'Failed!';
    default:
      return undefined;
  }
};

const buttonColor: Record<TransactionState, ButtonColors> = {
  None: 'primary',
  PendingSignature: 'loading',
  Mining: 'loading',
  Success: 'success',
  Exception: 'error',
  Fail: 'error',
  CollectingSignaturePool: 'loading',
};

export const TxButton = <T extends TypedContract, FN extends ContractFunctionNames<T>>({
  className,
  fontSize,
  fontWeight,
  fontColor,
  contractFn: { functionName, getParams, contract, options },
  sx,
  onCheckBeforeSend,
  onSuccess,
  onFinally,
  disabled: _disabled = false,
  rainbow,
  text,
  variant = 'contained',
}: Props<T, FN> & { children?: ReactChildren | ReactNode }): ReturnType<FC<Props<T, FN>>> => {
  const contractFunction = useContractFunction(contract, functionName, options);
  const { isChainValid } = useValidChainId();
  const [disabled, setDisabled] = useState<boolean>(false);

  let timeout!: NodeJS.Timeout;

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [timeout]);

  const handleAction = async (event?: MouseEvent<HTMLButtonElement | undefined>) => {
    event?.stopPropagation();

    if (onCheckBeforeSend && !onCheckBeforeSend()) return;

    const params = getParams?.();

    if (disabled || !params || contractFunction.state.status !== 'None') return;

    // Loading
    setDisabled(true);

    contractFunction
      .send(...params)
      .then(() => {
        onSuccess?.();
        timeout = setTimeout(() => {
          setDisabled(false);
          contractFunction.resetState();
        }, 2500);
      })
      .catch(err => {
        console.error(err);
        timeout = setTimeout(() => contractFunction.resetState(), 2500);
      })
      .finally(() => {
        onFinally?.();
        timeout = setTimeout(() => contractFunction.resetState(), 2500);
      });
  };

  return (
    <BaseButton
      onClick={handleAction}
      sx={sx}
      variant={variant}
      disabled={!isChainValid || _disabled}
      className={className}
      rainbow={rainbow && contractFunction.state.status === 'None'}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
      color={buttonColor[contractFunction?.state.status ?? 'None']}
    >
      {getButtonContent(contractFunction.state.status) ?? text}
    </BaseButton>
  );
};
