import React from 'react';

import './preview-collection.styles.scss'
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({title,items})=> (
    <div className='collection-preview'>
        <Link to={`/shop/${title.toLowerCase()}`} className='title'>{title.toUpperCase()}</Link>
        <div className="preview"> {
            items.filter((item,idx)=>idx<4).map((item)=>(
                <CollectionItem key = {item.id} name = {item.name}
                price = {item.price} item={item} imageUrl = {item.imageUrl}/>
            ))
              }
        </div>
    </div>
)

export default CollectionPreview