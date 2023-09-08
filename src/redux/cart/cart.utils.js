import {updateCart} from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    let updatedCart = cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    if (auth.currentUser) { 
    updateCart(auth.currentUser.uid, updatedCart);
    }
    return updatedCart;
  }
  let updatedCart = [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  if (auth.currentUser) { 
    updateCart(auth.currentUser.uid, updatedCart);
    }
  return updatedCart;

};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    let updatedCart = cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    updateCart(auth.currentUser.uid, updatedCart);
    return updatedCart;
  }
  let updatedCart = cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  if (auth.currentUser) { 
    updateCart(auth.currentUser.uid, updatedCart);
    }
  return updatedCart;
};


export const deleteItem = (cartItems, cartItemToRemove)=>{
  let updatedCart = cartItems.filter((item)=>item.id!==cartItemToRemove.id);
  if (auth.currentUser) { 
    updateCart(auth.currentUser.uid, updatedCart);
    }
  return updatedCart;
}