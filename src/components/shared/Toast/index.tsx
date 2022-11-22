import { Box, Grid, Link, styled, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import { Notification as BaseNotification, useEthers } from '@usedapp/core';
import { Notification } from '../../../context/notifications/model';
import { useEtherscan } from '../../../hooks/useEtherscan';

import { SuccessIcon, ErrorIcon, PendingIcon, CloseIcon } from '../Icons';
import { useAllNotifications } from '../../../context/notifications/hooks';

export interface ToastProps {
  notification: Notification | BaseNotification;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.appColors.gray[400]};
  font-weight: 300;

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
    text-decoration: none;
  }
`;

const StyledBox = styled(Box)<Pick<Notification | BaseNotification, 'type'>>`
  background: ${({ theme }) => theme.appColors.slate[800]};
  color: 'black';
  position: static;
  width: 18rem;
  min-height: 4rem;
  padding-top: 0.25rem;
  margin-bottom: 0.5rem;

  /* Card Outline */
  box-shadow: 0 0 0 0.5px ${({ theme }) => theme.appColors.slate[700]};
  border-radius: 0.5rem;
`;

export const Toast: FC<ToastProps> = ({ notification }) => {
  const { chainId } = useEthers();
  const { removeNotification, removeBaseNotification } = useAllNotifications();
  const { type, id } = notification;
  const etherscanify = useEtherscan();

  const { icon: Icon, title } = useMemo(() => {
    let title = (notification as Notification).title ?? notification.type;
    let icon = PendingIcon;

    if ('transaction' in notification) {
      [icon, title] = {
        transactionSucceed: [SuccessIcon, 'confirmed'],
        transactionFailed: [ErrorIcon, 'failed'],
        transactionStarted: [PendingIcon, 'pending'],
      }[notification.type] as [typeof PendingIcon, string];
      const txName =
        (notification as Extract<BaseNotification, { transactionName?: string }>).transactionName ??
        'Transaction';
      title = `${txName} ${title}`;
    } else if (notification.type === 'success') {
      icon = SuccessIcon;
    } else if (notification.type === 'error') {
      icon = ErrorIcon;
    } else if (notification.type === 'walletConnected') {
      icon = SuccessIcon;
      title = 'Wallet connected';
    }

    return { icon, title };
  }, [notification]);

  return (
    <StyledBox type={type}>
      <Grid alignItems={'center'} container wrap="nowrap" sx={{ overflow: 'auto' }}>
        <Grid item xs={1} ml="0.75rem" mb="0.5rem" mr="1rem" mt="1rem">
          <Icon />
        </Grid>
        <Grid item container direction={'column'} minWidth={'175px'}>
          <Grid item>
            <Typography fontWeight={400}>{title}</Typography>
          </Grid>
          {'transaction' in notification && (
            <Grid item>
              <StyledLink
                href={etherscanify(notification.transaction.hash, 'tx')}
                target="_blank"
                rel="noopener noreferrer"
              >
                View transaction
              </StyledLink>
            </Grid>
          )}
        </Grid>

        <Grid item mt={'0.5rem'}>
          <CloseIcon
            onClick={() => {
              const payload = { chainId: chainId as number, notificationId: id };
              removeNotification(payload);
              removeBaseNotification(payload);
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};
