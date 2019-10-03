import React from 'react';

import './menu-item.styles.scss';

const MenuItem =({title,imageUrl,size}) =>(

    <div
        style ={{
            backgroundImage:`url(${imageUrl})`
        }}
        className={`menu-item ${size}`}
    >
        <div className='item-content'>
            <h1 className='item-title'>{title}</h1>
            <span className='item-subtitle'>Shop Now</span>
        </div>
    </div>
)
export default MenuItem;
