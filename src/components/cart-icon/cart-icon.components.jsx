import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

const CartIcon = (props)=>(
    <div className="cart-icon" onClick={()=>props.handleSetCart()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className= 'item-count'>{props.itemCount}</span>
    </div>
);


const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount,
})

export default connect(mapStateToProps, {
    toggleCartHidden
})(CartIcon);