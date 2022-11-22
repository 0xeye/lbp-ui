import { InputValue } from './useInput';

enum InputError {
  InsufficientBalance = 'Insufficient balance',
  HighPriceImpact = 'Warning! Price Impact is high',
  ZeroInput = 'Input must be greater than 0',
  NoInput = 'Input cannot be empty',
}

export const useInputError = (balance: number, input: InputValue, isDataLoading: boolean) => {
  if (!input.touched) return;
  if (input.formValue!.length > 0 && input.simple! <= 0) return InputError.ZeroInput;
  if (isDataLoading) return;
  if (!balance || balance <= 0) return InputError.InsufficientBalance;
  if (balance < (input?.simple ?? 0)) return InputError.InsufficientBalance;
};
