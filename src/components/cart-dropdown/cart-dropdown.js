import React from 'react'
import CustomButton from '../button/custom-button'
import './cart-dropdown.styles.scss';


const CartDropdrown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdrown
