import { createSelector } from "reselect";


export const selectNotification = state=>state.notification;

export const selectNotificationMessages = createSelector(
    [selectNotification],
    notification=>notification.messages
);

