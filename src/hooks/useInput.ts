import { BigNumber } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createStateContext } from 'react-use';
import { exactToSimple } from '../utils';

export interface InputValue {
  formValue?: string;
  simple?: number;
  bn?: BigNumber;
  decimals: number;
  touched: boolean;
}

export type UseInputReturnValue = [
  InputValue,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => void,
  (formValue: string) => void,
];

// match escaped "." characters via in a non-capturing group
const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

// $& means the whole matched string  return
const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getExcessDecimals = (value: string, decimals: number) =>
  decimals - (value.split('.')?.[1]?.length || decimals);

const tryParseString = (value: string, decimals: number) => {
  try {
    const excess = getExcessDecimals(value, decimals);
    if (excess < 0) return;

    return parseUnits(value || '0', decimals);
  } catch (e) {
    // don't update the input on invalid values
    return;
  }
};

const createUseInputHook =
  (useInputCtx = useState) =>
  (decimals = 18): UseInputReturnValue => {
    const [formValue, setFormValue] = useInputCtx<string>('');

    // Handle callback, no change if number is invalid
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
        if (!event) return;

        let nextUserInput = event.target.value.replace(/,/g, '.');

        if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
          const [whole, fraction] = nextUserInput.split('.');
          if (fraction && fraction.length > decimals) {
            nextUserInput = `${whole}.${fraction.slice(0, decimals)}`;
          }
          setFormValue(nextUserInput);
        }
      },
      [setFormValue, decimals],
    );

    // Trim existing if beyond decimal limit
    useEffect(() => {
      setFormValue(prev => {
        const [whole, fraction] = prev.split('.');
        return fraction && fraction.length > decimals
          ? `${whole}.${fraction.slice(0, decimals)}`
          : prev;
      });
    }, [setFormValue, decimals]);

    // State change on formValue / decimals
    const state = useMemo(() => {
      const bn = tryParseString(formValue, decimals);
      return {
        formValue,
        decimals,
        simple: exactToSimple(bn, decimals),
        bn,
        touched: formValue !== '',
      };
    }, [decimals, formValue]);

    return [state, handleChange, setFormValue];
  };

export const useInput = createUseInputHook(undefined);

export const createInputContext = (): [
  () => UseInputReturnValue,
  FC<{ initialValue?: string }>,
] => {
  const [useInputCtx, Provider] = createStateContext<string>('');
  return [createUseInputHook(useInputCtx), Provider];
};
