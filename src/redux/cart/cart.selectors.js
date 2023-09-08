import {createSelector} from 'reselect';

const selectCart = state=>state.cart;

export const selectCartItems  = createSelector(
    [selectCart],
    cart=>cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (totalQuantity,cartItem)=>totalQuantity+cartItem.quantity,0
    )
)

export const selectCartTotalAmount = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (totalPrice,item)=>totalPrice+item.quantity*item.price,0
    )
)