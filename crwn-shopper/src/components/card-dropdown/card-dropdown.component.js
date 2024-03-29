import React from 'react';
import './card-dropdown.styles.scss';
import CustomButton from '../custome-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

const CartDropDown =({cartItems}) =>(

    <div className='cart-dropdown' >
        <div className='cart-items'>
        {
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector (
   { cartItems:selectCartItems}
);
export default connect(mapStateToProps)(CartDropDown);
