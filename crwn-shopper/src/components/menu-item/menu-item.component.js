import React from 'react';

import './menu-item.styles.scss';

import {withRouter} from 'react-router-dom';


const MenuItem =({title,imageUrl,size,history, linkUrl,match}) =>(

    <div
        className={`menu-item ${size}`}
        onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style ={{
                backgroundImage:`url(${imageUrl})`
            }}

        />
        <div className='item-content'>
            <h1 className='item-title'>{title.toUpperCase()}</h1>
            <span className='item-subtitle'>Shop Now</span>

         </div>
        </div>


)
export default withRouter(MenuItem);
