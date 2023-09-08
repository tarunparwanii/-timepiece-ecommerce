import React from 'react';

import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { setNotification } from '../../redux/notificationMessage/notification.action';
import { withRouter } from 'react-router-dom';

const CollectionItem = ({item,addItem, setNotification, user, ...props})=>{


    const handleAddToCart = ()=>{
        if (user) {
            addItem(item);
        }
        else {
            setNotification('You need to Login for this action');
            props.history.push('/signin')
        }
    }
    const {name,price,imageUrl} = item;
    return (
    <div className="collection-item">
        <div
        className='image'
        style={{
            backgroundImage : `url(${imageUrl[1]})`
        }}/>
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <CustomButton onClick={handleAddToCart} inverted>Add to cart</CustomButton>
    </div>
    );
}


const mapStateToProps = (state)=>createStructuredSelector({
    user : selectCurrentUser
})


export default withRouter( connect(mapStateToProps, {
    addItem, setNotification
})(CollectionItem));