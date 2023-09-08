import React from 'react'
import './contact.styles.scss'

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-page-form">
            <div className="picture"></div>
            <div className="form">
                <div className="form-heading">Contact Us</div>
                <div className="inputs">
                    <div className="input-1">
                    <label htmlFor="Full Name">
                        Full Name
                    </label>
                    <input type="text" />
                    </div>
                    <div className="input-1">
                    <label htmlFor="Full Name">
                        Email Address
                    </label>
                    <input type="text" />
                    </div>
                    <div className="input-1">
                    <label htmlFor="Full Name">
                       Message
                    </label>
                    <textarea type="text" className='message' />
                    </div>
                    <button>Send</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContactPage
