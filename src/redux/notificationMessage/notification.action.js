import notificationTypes from "./notification.types"

export const setNotification = (message)=>{
    return {
        type  : notificationTypes.SET_NOTIFICATION,
        payload : message
    }
}
export const unsetNotification = ()=>{
    return {
        type :notificationTypes.UNSET_NOTIFICATION
    }
}