import { FC } from 'react';
import { Box, Skeleton, Stack, styled, Typography } from '@mui/material';
import { Params } from '@usedapp/core/dist/esm/src/model/types';
import { useEtherBalance } from '@usedapp/core';
import { Input } from '../../shared/Input/index';
import { TxButton } from '../../shared/Buttons/TxButton';
import { exactToSimple, formatValue, simpleToExact } from '../../../utils';
import { PhaseCard } from '../../shared/PhaseCard';
import { useContracts } from '../../../context/ContractProvider';
import { BalancerVault } from '../../../typechain/BalancerVault';
import { useAccount } from '../../../hooks/useAccount';
import { getLBPTransactionParams, useLBPExpectedOutput } from '../../../hooks/useLBPExpectedOutput';
import { AccordionTransactionInfo } from '../../shared/AccordionTransactionInfo';
import {
  TransactionInfoProvider,
  useTransactionDeadline,
  useTransactionSlippage,
} from '../../../context/TransactionInfoProvider';
import { TransactionSettings } from '../../shared/TransactionSettings';
import { useInput } from '../../../hooks/useInput';
import { BaseButton } from '../../shared/Buttons/BaseButton';
import { useToggle } from 'react-use';
import { useInputError } from '../../../hooks/useInputError';
import { RainbowTypography } from '../../shared/Typography/RainbowTypography';
import { useValidChainId } from '../../../hooks/useValidChainId';

enum PriceImpact {
  Low = 1,
  Medium = 2.5,
  High = 4,
}

const SLIPPAGE_WARNING = `This transaction has a price impact of at least ${PriceImpact.High}%. Please confirm you would like to continue`;

const EthHelperTypography = styled(Typography)(({ theme }) => ({
  color: theme.appColors.slate[400],
  marginBottom: '0.75rem',
  marginLeft: '0.9rem',
  marginTop: '0.25rem',
}));

export const LBPContribution: FC = () => (
  <TransactionInfoProvider>
    <LBPContributionContent />
  </TransactionInfoProvider>
);

const LBPContributionContent: FC = () => {
  const account = useAccount();
  const userBalance = useEtherBalance(account);
  const userBalanceSimple = userBalance ? exactToSimple(userBalance) : 0;
  const contracts = useContracts();
  const { chainId } = useValidChainId();

  const [slippagePercent] = useTransactionSlippage();
  const [deadline] = useTransactionDeadline();

  const [input, handleChangeInput, setInputFormValue] = useInput();
  const [showWarning, toggleWarning] = useToggle(true);
  const error = useInputError(userBalanceSimple, input, false);

  const { output: expectedOutput, priceImpact = 0 } = useLBPExpectedOutput(input.bn);

  const slippage = !!slippagePercent.bn && simpleToExact(1).sub(slippagePercent.bn.div('100'));
  const minReceive = !!slippage && expectedOutput?.mul(slippage).div(simpleToExact(1));

  const showPriceImpactWarning = priceImpact >= PriceImpact.Low && showWarning;

  const disabled = userBalanceSimple <= 0 || !account || !!error || !input.formValue;

  const handlePriceImpactDismiss = () => {
    if (priceImpact > PriceImpact.High) {
      // eslint-disable-next-line no-restricted-globals
      if (!confirm(SLIPPAGE_WARNING)) return;
    }
    toggleWarning();
  };

  return (
    <PhaseCard>
      <Stack spacing={2}>
        <Box width="100%" alignItems="flex-end">
          <TransactionSettings sx={{ display: 'flex', justifyContent: 'flex-end' }} />
        </Box>
        <Stack direction={'column'} alignItems={'center'} mt={2}>
          <Typography
            sx={{ color: theme => theme.appColors.slate[200] }}
            fontSize={18}
            fontWeight={400}
          >
            You will receive at least
          </Typography>
          <RainbowTypography noGlow fontSize={30}>
            {!error && minReceive ? (
              <>
                {formatValue(exactToSimple(minReceive), {
                  postfix: ' ',
                  mantissa: 2,
                  average: false,
                  thousandSeparated: true,
                })}
                <span style={{ fontSize: 24 }}>AURA</span>
              </>
            ) : (
              `–`
            )}
          </RainbowTypography>
        </Stack>
        <Stack>
          <Input
            error={!!error}
            helperText={error}
            sx={{ minWidth: '10rem', width: '100%' }}
            placeholder={'0'}
            value={input.formValue ?? ''}
            onMaxClick={() => setInputFormValue(userBalanceSimple.toFixed(18))}
            label={'Amount of ETH to Contribute'}
            onChange={handleChangeInput}
          />
          <Stack direction={'row'}>
            {!userBalance ? (
              <Skeleton animation={'wave'} width={'2rem'} sx={{ mr: '0.5rem' }} />
            ) : (
              <EthHelperTypography fontSize={12} fontWeight={400}>
                {formatValue(userBalanceSimple, { mantissa: 3 })} ETH in wallet
              </EthHelperTypography>
            )}
          </Stack>
        </Stack>
        {!!input.touched && (
          <AccordionTransactionInfo
            inputSimple={input?.simple}
            slippagePercent={slippagePercent?.bn}
            expectedOutput={expectedOutput}
            priceImpact={priceImpact}
            symbols={['ETH', 'AURA']}
          />
        )}
        {showPriceImpactWarning ? (
          <BaseButton
            variant="contained"
            sx={{
              height: '3rem',
              bgcolor: theme =>
                priceImpact > PriceImpact.Medium
                  ? theme.appColors.red[500]
                  : theme.appColors.violet[500],
            }}
            onClick={handlePriceImpactDismiss}
          >
            Accept Price Impact
          </BaseButton>
        ) : (
          <TxButton
            contractFn={{
              contract: contracts.balVault,
              functionName: 'swap',
              options: { transactionName: 'Swap ETH' },
              getParams: () => {
                if (!account || !expectedOutput || !deadline.simple || !minReceive || !input.bn)
                  return;

                const params = getLBPTransactionParams(
                  chainId,
                  input.bn,
                  account,
                  minReceive,
                  deadline.simple,
                );
                return params as Params<BalancerVault, 'swap'>;
              },
            }}
            disabled={disabled}
            text="Swap ETH"
            sx={{ height: '3rem' }}
          />
        )}
      </Stack>
    </PhaseCard>
  );
};
