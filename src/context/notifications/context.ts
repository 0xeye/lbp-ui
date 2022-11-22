import { createContext, useContext } from 'react';
import { AddNotificationPayload, RemoveNotificationPayload, Notification } from './model';

export const NotificationsContext = createContext<{
  notifications: Notification[];
  addNotification: (payload: AddNotificationPayload) => void;
  removeNotification: (payload: RemoveNotificationPayload) => void;
}>({
  notifications: [],
  addNotification: () => undefined,
  removeNotification: () => undefined,
});

export function useNotificationsContext() {
  return useContext(NotificationsContext);
}
