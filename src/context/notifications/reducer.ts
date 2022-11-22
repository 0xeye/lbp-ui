import { Notification } from './model';

interface AddNotification {
  type: 'ADD_NOTIFICATION';
  notification: Notification;
}

interface RemoveNotification {
  type: 'REMOVE_NOTIFICATION';
  notificationId: string;
}

type Action = AddNotification | RemoveNotification;

export function notificationReducer(state: Notification[], action: Action): Notification[] {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [action.notification, ...state];
    case 'REMOVE_NOTIFICATION':
      return state.filter(notification => notification.id !== action.notificationId);
  }
}
