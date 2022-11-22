import { FC } from 'react';
import {
  Accordion,
  Box,
  AccordionSummary,
  styled,
  Typography,
  Stack,
  Divider,
  Tooltip,
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { BigNumber } from 'ethers';
import { exactToSimple, formatValue, simpleToExact } from '../../../utils';
import { ExchangeRate } from '../ExchangeRate';

interface Props {
  inputSimple?: number;
  expectedOutput?: BigNumber;
  priceImpact?: number;
  slippagePercent?: BigNumber;
  symbols: string[];
}

const InfoStack = styled(Stack)`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.appColors.slate[700]};
  border-radius: 0.5rem;
`;

const StyledAccordion = styled(Accordion)`
  & .MuiAccordionSummary-root {
    border: 1px solid ${({ theme }) => theme.appColors.slate[700]};
    transition: all 0.25s ease;
    min-height: 2.5rem;
  }

  & .MuiAccordionSummary-content {
    margin: 0;
  }

  &:first-of-type {
    box-shadow: none !important;
  }

  & .MuiAccordionSummary-root:hover,
  & .MuiAccordionSummary-root.Mui-expanded {
    background: ${({ theme }) => theme.appColors.slate[700]};
  }

  & .MuiAccordionSummary-expandIconWrapper {
    transform: rotate(90deg);
    svg {
      fill: ${({ theme }) => theme.palette.grey[500]};
    }
  }

  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(270deg);
  }
`;

const auraFormatter = { mantissa: 4, postfix: ' AURA', average: false, thousandSeparated: true };
const percentFormatter = { mantissa: 2, postfix: '%', average: false };

export const AccordionTransactionInfo: FC<Props> = ({
  inputSimple,
  slippagePercent = BigNumber.from('0.1'),
  priceImpact,
  expectedOutput,
  symbols,
}) => {
  // Formatted from percent: 0.1% -> 0.001
  const slippage = slippagePercent.div('100');
  const slippageReversed = simpleToExact(1).sub(slippage);

  const output = exactToSimple(expectedOutput);
  const outputWithSlippage = expectedOutput?.mul(slippageReversed).div(simpleToExact(1));

  const exchangeRate = !!(inputSimple && output) ? inputSimple / output : undefined;

  const outputFormatted = formatValue(output, auraFormatter);
  const outputWithSlippageFormatted = formatValue(exactToSimple(outputWithSlippage), auraFormatter);
  const priceImpactFormatted = formatValue(priceImpact ?? 0, percentFormatter);
  const slippagePercentFormatted = formatValue(exactToSimple(slippagePercent), percentFormatter);

  const showPriceImpactWarning = (priceImpact ?? 0) > 0.25;

  return (
    <Box>
      <StyledAccordion
        disableGutters
        elevation={0}
        TransitionProps={{
          timeout: 0,
        }}
        sx={{ width: '100%' }}
      >
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}>
          <ExchangeRate rate={exchangeRate} mantissa={8} symbols={symbols} />
        </AccordionSummary>
        <InfoStack mt={1} spacing={0.5}>
          <Stack direction="row" justifyContent="space-between">
            <Tooltip title="The amount you are expected to receive at the current market price. This may change if the market price moves before your trade is confirmed.">
              <Typography fontSize={'0.875rem'}>Expected Output</Typography>
            </Tooltip>
            <Typography fontSize={'0.875rem'} textAlign="right">
              {outputFormatted}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Tooltip title="The impact your trade has on the market price">
              <Typography fontSize={'0.875rem'}>Price Impact</Typography>
            </Tooltip>
            <Typography
              fontSize={'0.875rem'}
              textAlign="right"
              color={theme =>
                showPriceImpactWarning ? theme.appColors.red[400] : theme.palette.text.primary
              }
            >
              {priceImpactFormatted}
            </Typography>
          </Stack>
          <Divider sx={{ borderColor: theme => theme.appColors.slate[600] }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: theme => theme.appColors.slate[400] }}
          >
            <Tooltip title="The minimum amount you are guaranteed to receive. Your transaction will otherwise revert.">
              <Typography fontSize={'0.875rem'}>
                Min. after slippage ({slippagePercentFormatted})
              </Typography>
            </Tooltip>
            <Typography fontSize={'0.875rem'} textAlign="right">
              {outputWithSlippageFormatted}
            </Typography>
          </Stack>
        </InfoStack>
      </StyledAccordion>
    </Box>
  );
};
