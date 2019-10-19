import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../Collection-items/Collection-item.component';



const PreviewCollection = ({title, items}) =>(

    <div>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview-collection'>
            {
                items
                .filter((item,idx)=>idx < 4)
                .map(({id, ...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
             </div>

    </div>


)
export default PreviewCollection;
