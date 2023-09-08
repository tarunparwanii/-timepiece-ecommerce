import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const key = 'pk_test_51K9oBZSGhwxrV7AXvjUCshsEGKhdl8urG04s7NiHfWGgf0l11p5Fbf4SvAoo0JqkVRMlCYyb9yR641vT9CoTHwX400sd3XkmDO';
    const onToken = token=>{
        console.log(token);
        alert('Payment Succesful!')
    }
    return (
        <StripeCheckout
        label="Pay Now"
        name=""
        billingAddress
        shippingAddress
        image="https://www.linkpicture.com/q/watch.svg"
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now!'
        token={onToken}
        stripeKey={key}
        />
    )
}
export default StripeCheckoutButton