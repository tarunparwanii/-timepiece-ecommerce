import React, { useEffect } from 'react'
import './notification.styles.scss'
import { connect } from 'react-redux'
import { unsetNotification } from '../redux/notificationMessage/notification.action'
const Notification = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.unsetNotification();
        }, 2000)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
            <div className="heading">Notification</div>
            <div className="content">{props.content}</div>
        </div>
    )
}

export default connect(null,{
    unsetNotification
})(Notification)
