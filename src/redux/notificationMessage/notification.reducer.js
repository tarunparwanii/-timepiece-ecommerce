import notificationTypes from "./notification.types"
import { popElementOfArray } from "./notification.utils"
const InitialState={
    messages : []
}

const notificationReducer = (state=InitialState, action)=>{

    switch(action.type) {
        case notificationTypes.SET_NOTIFICATION : 
        return {
            messages : [action.payload,...state.messages]
        }
        case notificationTypes.UNSET_NOTIFICATION : return {
            messages : popElementOfArray(state.messages)
        }
        default : return state;
    }

}

export default notificationReducer