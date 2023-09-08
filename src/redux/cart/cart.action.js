import { CartActionTypes } from "./cart.types";
import notificationActionTypes from "../notificationMessage/notification.types";
import { fetchCartItemsFromUser } from "../../firebase/firebase.utils";

export const toggleCartHidden = (status)=>({
    type : CartActionTypes.TOGGLE_CART_HIDDEN,
    payload : status
})

export const addItem = item=>{
    return (dispatch)=>{
        dispatch({type : CartActionTypes.ADD_ITEM, payload : item})
        dispatch({type : notificationActionTypes.SET_NOTIFICATION, payload : `${item.name} has been added to your cart`})

    }
}

export const clearItemFromCart = item=>({
    type : CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload : item
})

export const removeItem = item=>({
    type : CartActionTypes.REMOVE_ITEM,
    payload : item
})



export const fillCart = ()=>{
    return async(dispatch,getState)=>{
        let state = getState();
        let userId = state.user.currentUser.uid
        try {
            const cart = await fetchCartItemsFromUser(userId);
            dispatch({
                type : CartActionTypes.FILL_CART,
                payload : cart
            })
        } catch(err){
            dispatch({
                type : notificationActionTypes.SET_NOTIFICATION,
                payload : 'Cart Items Not Found!'
            })
        }
    }
}

export const emptyCart = ()=>{
    return {
        type:  CartActionTypes.EMPTY_CART
    }
}