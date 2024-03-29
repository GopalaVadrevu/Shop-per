import React from 'react';

import './Collection-item.styles.scss';
import CustomButton from '../custome-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem =({item, addItem}) => (

    <div className='collection-item'>

        <div
            className ='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
            />

        <div className='collection-footer' >
            <span className='name' >{item.name}</span>
            <span className='price' >${item.price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted>Add to Cart</CustomButton>
    </div>



)

const mapDispatchToProps  = dispatch => ({
    addItem: item =>dispatch(addItem(item))

})

export default connect(null,mapDispatchToProps)(CollectionItem);
