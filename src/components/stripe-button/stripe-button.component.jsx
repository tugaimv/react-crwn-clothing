import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I6FqJCOuaZjg34bLbevUO4TTi7JklqddpNhNGLickbW9myB0vLRb3RuwgkK95QacSnJag8et01ue6oiM76oFcUY00Gbe1wlDY'

    const onToken = token => {
        console.log(token)
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;