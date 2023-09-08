import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.styles.scss'
const PageNotFound = () => {
    return (
        <div className='pagenotfound'>
            <h1 className="pagenotfound-heading">Page Not Found! ~ 404</h1>
            <p className="pagenotfound-sub">Looks like you lost? Go Back to <Link className='link' to="/">Home</Link></p>
            <div className="pagenotfound-img"></div>
            
        </div>
    )
}

export default PageNotFound
