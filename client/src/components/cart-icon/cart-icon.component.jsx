import React from 'react';
import { connect } from 'react-redux'; 
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import { ShoppingIcon, CartContainer, ItemCountContainer } from './cart-icon.styles';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <CartContainer>
        <ShoppingIcon  onClick={toggleCartHidden}/>
        <ItemCountContainer> {itemCount}</ItemCountContainer>
    </CartContainer>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)