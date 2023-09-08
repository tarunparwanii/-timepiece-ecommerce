import React from 'react'
import './Checkout.styles.scss'
import { connect } from 'react-redux'

import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotalAmount } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

const Checkout = ({cartItems, total, user}) => {

    if (!user) {
        return <div className="no-item">
            <div className="no-item-heading">Please Login before proceeding to  checkout</div>
            <div className="no-item-img"></div>
        </div>
        
    }
    return (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item)=>(
                <CheckoutItem key={item.id}  cartItem={item}/>
            ))
        }
        <div className="total">
            <span>TOTAL : {total}   </span>
        </div>

{total!==0&&<StripeCheckoutButton price={total}/>}

    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotalAmount,
    user : selectCurrentUser
});


export default connect(mapStateToProps)(Checkout);
