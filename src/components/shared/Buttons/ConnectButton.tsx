import { FC } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { shortAddress } from '../../../utils';
import { DisconnectIcon, ImpersonateIcon } from '../Icons';
import { useAccount, useImpersonate } from '../../../hooks/useAccount';
import { useWeb3Connect } from '../../../hooks/useWeb3Connect';
import { useLookupAddress } from '@usedapp/core';
import { useValidChainId } from '../../../hooks/useValidChainId';

const allowImpersonate = !!(
  process.env.ALLOW_IMPERSONATE || process.env.NODE_ENV === 'development'
);

const ConnectWalletButton = styled(Button)<{ connected: number }>(({ theme, connected }) => ({
  whiteSpace: 'nowrap',
  height: '2.5rem',
  marginRight: '0.5rem',
  cursor: !connected ? 'pointer' : 'default',
  ':hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const DefaultTypography = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
});

export const ConnectButton: FC = () => {
  const address = useAccount();
  const ensName = useLookupAddress(address);
  const { isChainValid } = useValidChainId();

  const nonImpersonatedAddress = useAccount(true);
  const impersonationActive = address !== nonImpersonatedAddress;
  const impersonate = useImpersonate();

  const { activateProvider, deactivateProvider } = useWeb3Connect();

  return (
    <ConnectWalletButton
      connected={address ? 1 : 0}
      variant="contained"
      color={isChainValid ? (!address ? 'secondary' : 'primary') : 'error'}
      sx={
        isChainValid
          ? undefined
          : { '&:hover': { backgroundColor: theme => theme.palette.error.light } }
      }
      onClick={isChainValid ? (!address ? activateProvider : deactivateProvider) : undefined}
    >
      {!isChainValid && <Typography fontSize={15}> Unsupported Network</Typography>}
      <DefaultTypography>
        {isChainValid ? (address ? ensName.ens ?? shortAddress(address) : 'Connect Wallet') : ''}
      </DefaultTypography>{' '}
      {isChainValid && address && <DisconnectIcon />}
      {isChainValid && allowImpersonate && (
        <ImpersonateIcon
          active={impersonationActive ? 1 : 0}
          onClick={() => {
            if (impersonationActive) {
              impersonate(undefined);
            } else {
              impersonate(window.prompt('Enter an address to impersonate') ?? undefined);
            }
          }}
        />
      )}
    </ConnectWalletButton>
  );
};
