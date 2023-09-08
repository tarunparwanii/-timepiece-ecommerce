import React from 'react'
import './CheckoutItem.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action'


const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div onClick={()=>clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>  
        </div>
    )
}



export default connect(null,{clearItemFromCart, addItem, removeItem})(CheckoutItem)
