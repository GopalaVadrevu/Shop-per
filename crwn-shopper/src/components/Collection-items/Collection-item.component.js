import React from 'react';

import './Collection-item.styles.scss';
import CustomButton from '../custome-button/custom-button.component';

const CollectionItem =({id, name, price, imageUrl}) => (

    <div className='collection-item'>

        <div
            className ='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />

        <div className='collection-footer' >
            <span className='name' >{name}</span>
            <span className='price' >${price}</span>
        </div>
        <CustomButton>Add to Cart</CustomButton>
    </div>



)

export default CollectionItem;
