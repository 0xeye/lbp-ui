import { FC, useMemo } from 'react';
import { Box, Button, InputBase, Stack, styled, Typography } from '@mui/material';
import { useToggle } from 'react-use';
import {
  useTransactionDeadline,
  useTransactionSlippage,
} from '../../../context/TransactionInfoProvider';
import { PointerContainer } from '../../../hooks/usePointerContainer';
import SettingsIcon from '@mui/icons-material/Settings';
import { BoxProps } from '@mui/system';

const DEFAULT_DEADLINE = 30;
const DEFAULT_SLIPPAGE_PERCENT = 0.5; // 0.5% = 0.005
const MAX_DEADLINE_MINUTES = 72 * 60;
const MAX_SLIPPAGE = 5;

const StyledInput = styled(InputBase, { shouldForwardProp: prop => prop !== 'hasError' })<{
  hasError: number;
}>`
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? theme.palette.error.main : theme.appColors.slate[600])};
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  transition: border 0.2s ease;

  input {
    padding-right: 0.25rem;
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 2.25rem;
  right: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.appColors.slate[700]};
  border: 1px solid ${({ theme }) => theme.appColors.slate[600]};
`;

export const TransactionSettings: FC<BoxProps> = props => {
  const [show, setShow] = useToggle(false);
  const [slippage, handleChangeSlippage, setSlippagePercent] = useTransactionSlippage();
  const [deadline, handleChangeDeadline, setDeadline] = useTransactionDeadline();

  const isDefaultSlippage = slippage.simple === DEFAULT_SLIPPAGE_PERCENT;

  const validateDeadline = useMemo(() => {
    if (!deadline.simple) return;
    if (deadline.simple <= 0) return 'Deadline must be bigger than 0';
    if (deadline.simple > MAX_DEADLINE_MINUTES)
      return `Deadline cannot be longer than ${MAX_DEADLINE_MINUTES / 60} hours`;
  }, [deadline]);

  const validateSlippage = useMemo(() => {
    if (!slippage.simple) return;
    if (slippage.simple > MAX_SLIPPAGE) return `Enter a valid slippage value`;
  }, [slippage]);

  return (
    <PointerContainer
      {...props}
      onOutside={() => {
        if (!show) return;
        if (validateDeadline) setDeadline(DEFAULT_DEADLINE.toString());
        if (validateSlippage) setSlippagePercent(DEFAULT_SLIPPAGE_PERCENT.toString());
        setShow(false);
      }}
    >
      <Button onClick={setShow} sx={{ padding: 0, minWidth: 0 }}>
        <SettingsIcon sx={{ fill: theme => theme.appColors.slate[600] }} />
      </Button>
      {show && (
        <StyledBox>
          <Stack spacing={1}>
            <Typography variant="h6" fontSize="1.125rem">
              Transaction Settings
            </Typography>
            <Stack spacing={1}>
              <Typography sx={{ color: theme => theme.appColors.slate[400] }}>
                Slippage tolerance
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  onClick={() => setSlippagePercent(DEFAULT_SLIPPAGE_PERCENT.toString())}
                  variant={isDefaultSlippage ? 'contained' : 'outlined'}
                >
                  <Typography>Auto</Typography>
                </Button>
                <StyledInput
                  name="slippage"
                  hasError={+!!validateSlippage}
                  placeholder={slippage.formValue}
                  value={slippage.touched ? slippage.formValue : ''}
                  onChange={handleChangeSlippage}
                  sx={{ input: { textAlign: 'right' } }}
                  renderSuffix={() => <Typography>%</Typography>}
                />
              </Stack>
              {!!validateSlippage && (
                <Typography color={theme => theme.palette.error.main} fontSize={12}>
                  {validateSlippage}
                </Typography>
              )}
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ color: theme => theme.appColors.slate[400] }}>
                Transaction deadline
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <StyledInput
                  name="deadline"
                  hasError={+!!validateDeadline}
                  placeholder={deadline.formValue}
                  value={deadline.touched ? deadline.formValue : ''}
                  onChange={handleChangeDeadline}
                />
                <Typography>minutes</Typography>
              </Stack>
              {!!validateDeadline && (
                <Typography color={theme => theme.palette.error.main} fontSize={12}>
                  {validateDeadline}
                </Typography>
              )}
            </Stack>
          </Stack>
        </StyledBox>
      )}
    </PointerContainer>
  );
};
