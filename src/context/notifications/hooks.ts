import { useCallback } from 'react';
import { useNotifications as useBaseNotifications } from '@usedapp/core';
import { useNotificationsContext } from './context';

export const useAddErrorNotification = () => {
  const { addNotification } = useNotificationsContext();
  return useCallback(
    (error: string) => {
      addNotification({ notification: { type: 'error', submittedAt: Date.now(), title: error } });
    },
    [addNotification],
  );
};

export const useAddSuccessNotification = () => {
  const { addNotification } = useNotificationsContext();
  return useCallback(
    (title: string) => {
      addNotification({ notification: { type: 'success', submittedAt: Date.now(), title } });
    },
    [addNotification],
  );
};

export const useAllNotifications = () => {
  const baseNotifications = useBaseNotifications();

  const { addNotification, notifications, removeNotification } = useNotificationsContext();

  return {
    notifications: [...notifications, ...baseNotifications.notifications],
    addNotification,
    removeNotification,
    removeBaseNotification: baseNotifications.removeNotification,
  };
};
