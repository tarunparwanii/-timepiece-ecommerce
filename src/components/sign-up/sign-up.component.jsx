import React from 'react';

import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'
import {createUser, AddUserToDataBase} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { setNotification } from '../../redux/notificationMessage/notification.action';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }


    handleSubmit = async event =>{
        event.preventDefault();
        let user = null;
        const {displayName, email,password,confirmPassword} = this.state;
        if (password!==confirmPassword) {
            this.props.setNotification('Please Re-check password')
            return;
        }
        try {
            const res = await createUser(email,password);
            user = res.user;
        }
        catch(err) {
            this.props.setNotification(`Error while creating the account : ${err.message}`)
            return;
        }
        try {
            AddUserToDataBase({displayName, email,id : user.uid}, user.uid);
        }
        catch(err){
            this.props.setNotification(`Error while creating the account : ${err.message}`)
        }
        this.setState({displayName : '', email: '', password : '', confirmPassword : ''})
    }


    handleChange = event=>{
        const {name,value} = event.target;

        this.setState({[name]:value});

    }

    render() {
        const {displayName, email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2>I do not have a account!</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange={this.handleChange}
                    label = 'Display Name'
                    required
                />
                <FormInput
                    type = 'email'
                    name = 'email'
                    value = {email}
                    onChange={this.handleChange}
                    label = 'Email'
                />
                <FormInput
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange={this.handleChange}
                    label = 'Password'
                />
                <FormInput
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange={this.handleChange}
                    label = 'Confirm Password'
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default connect(null, {
    setNotification
})(SignUp)
