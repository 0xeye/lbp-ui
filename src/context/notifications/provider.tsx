import { FC, ReactNode, useCallback, useReducer } from 'react';
import { nanoid } from 'nanoid';
import { NotificationsContext } from './context';
import { AddNotificationPayload, RemoveNotificationPayload } from './model';
import { notificationReducer } from './reducer';

interface Props {
  children: ReactNode;
}

export const NotificationsProvider: FC<Props> = ({ children }) => {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  const addNotification = useCallback(
    ({ notification }: AddNotificationPayload) => {
      dispatch({
        type: 'ADD_NOTIFICATION',
        notification: { ...notification, id: nanoid() },
      });
    },
    [dispatch],
  );

  const removeNotification = useCallback(
    ({ notificationId }: RemoveNotificationPayload) => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        notificationId,
      });
    },
    [dispatch],
  );

  return (
    <NotificationsContext.Provider
      value={{ addNotification, notifications, removeNotification }}
      children={children}
    />
  );
};
