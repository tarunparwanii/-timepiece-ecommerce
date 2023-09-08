import React from 'react'
import './home-banner.scss'
import { Link } from 'react-router-dom'
import HomeImage from '../../assets/model-1.png'

const HomeBanner = () => {
    return (
        <div>
            <div className="home-banner">
                <div className="home-banner__left">
                    <h1 className="heading">Winter 21'</h1>
                    <p className="sub-heading">Grad the latest Winter Sale Collection with 30% Off and other special discounts</p>
 
                    <p className="price">Prices starts at : <span>250$ </span></p>
                    <div className="shop-button-container">
                    <button  className="shop-button"><Link to = "/shop">Shop Now!</Link></button>
                    </div>
                </div>
                <div className="home-banner__right">
                   <img src={HomeImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
