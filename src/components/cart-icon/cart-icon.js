import React from "react";
// import {connect} from 'react-redux';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import {createStructuredSelector} from 'reselect';

import "./cart-icon.styles.scss";

// import {toggleCart} from '../../redux/cart/cart.actions';
// import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

export default CartIcon;
