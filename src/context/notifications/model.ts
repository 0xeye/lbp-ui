interface NotificationPayload {
  submittedAt: number;
  type: string;
  title?: string;
}

export type Notification = { id: string } & NotificationPayload;

export type AddNotificationPayload = {
  notification: NotificationPayload;
  chainId?: number;
};

export type RemoveNotificationPayload = {
  notificationId: string;
  chainId?: number;
};
