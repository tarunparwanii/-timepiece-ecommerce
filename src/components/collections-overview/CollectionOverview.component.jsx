import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../preview-collection/preview-collection.component'
import './CollectionOverview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCollectionAsArrayOfValues } from '../../redux/shop/shop.selectors';
const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                  collections.map(collection=>{
                    return(
                        <CollectionPreview key = {collection.id}
                        items = {collection.items}
                        title = {collection.title}
                        ></CollectionPreview>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections : selectCollectionAsArrayOfValues
})


export default connect(mapStateToProps)(CollectionOverview)
