import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../card-dropdown/card-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';


const Header = ({currentUser, hidden}) => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />

        </Link>
        <div className='options' >
            {
            currentUser ?
            <span className='welcome'>  Welcome {currentUser.displayName}</span>
            :
            <span className='welcome'>  Welcome Guest</span>

            }

            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
            currentUser ?
            (<div className='option' onClick={()=>auth.signOut()} >  SIGN OUT </div>)
            :
            (<Link className='option' to='/signin' >SIGN IN </Link>)

            }
            <CartIcon />

        </div>
        {
            hidden?
            null
            :
            (<CartDropDown />)

        }

    </div>

)

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
