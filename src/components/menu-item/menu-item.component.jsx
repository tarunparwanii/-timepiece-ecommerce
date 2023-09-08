    import React from 'react'
    import './menu-item.styles.scss'
    import { withRouter } from 'react-router';

    const MenuItem = (props)=>{
        return(
        <div className={`${props.size} menu-item`}
            onClick = {()=>props.history.push(props.linkUrl)}
        >
            <div  style={{
            background: `url(${props.img}) center center/cover no-repeat`
        }} className="background-image"> </div>
                <div className="content">
                    <h1 className="title">{props.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        );
    }

    export default withRouter(MenuItem);