import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selector';
const Directory= ({sections})=> {

        return(
            <>
            <div className="directory-heading">Categories</div>
            <div className="directory-menu">
                {
                    sections.map((section)=>(
                        <MenuItem key = {section.id} title= {section.title} img={section.img} size={section.size} linkUrl = {section.linkUrl}></MenuItem>
                    ))
                }
            </div>
            </>
        )
    
}

const mapStateToProps = createStructuredSelector({
    sections : selectSections
})

export default connect(mapStateToProps)(Directory);