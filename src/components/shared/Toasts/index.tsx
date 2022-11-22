import { styled } from '@mui/system';
import { FC } from 'react';
import { Notification as BaseNotification } from '@usedapp/core';
import { Toast } from '../Toast';
import { useAllNotifications } from '../../../context/notifications/hooks';
import { Notification } from '../../../context/notifications/model';

export interface ToastProps {
  notification: Notification | BaseNotification;
}

const Container = styled('div')`
  position: fixed;
  top: 4.5rem;
  right: 1rem;
  width: 20%;
  min-width: 280px;
  z-index: 2000; // Must be above MUI modal backdrop
  user-select: none;
  > * {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > * {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Toasts: FC = () => {
  const { notifications } = useAllNotifications();
  return (
    <Container>
      <div>
        {notifications.map(notification => (
          <Toast notification={notification} key={notification.id} />
        ))}
      </div>
    </Container>
  );
};
