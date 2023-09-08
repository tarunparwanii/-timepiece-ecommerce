import React, {useState} from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { loginUser, signInWithGoogle } from '../../firebase/firebase.utils';
import { setNotification } from '../../redux/notificationMessage/notification.action';
import { connect } from 'react-redux';


const SignIn = (props)=>{
    const [form,setForm] = useState({email : '', password : ''});


    const handleSubmit = async event=>{
        event.preventDefault();
        const {email,password} = form;
        try {
            const user = await loginUser(email,password);
            console.log(user.user);
            setForm({email : '', password : ''});
        }
        catch(e){
            console.log("Error logging In : " + e.message );
            props.setNotification(e.message);
        }

    }

    const handleChange  = event=>{
        const{value,name} = event.target;

        setForm({...form,[name]:value})
        //this [] will dynamically set the values
    }

   const  googleSignIn = async ()=>{
        try {
        const res = await signInWithGoogle();
        console.log(res.user);
        }catch(err) {
            console.log('Error Signing In With Google!' + err);
            props.setNotification(err.message);
        }
    }

 
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email" label = "Email" value = {form.email}
                        onChange = {handleChange} required
                        
                    />
                    <FormInput type="password" name="password" value = {form.password}
                     onChange = {handleChange} label="Password"
                     required />

                     <div className="buttons">
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton onClick={googleSignIn} isGoogleSignIn>
                        {''}
                        Sign in with google {''}
                    </CustomButton>
                    </div>                         
                </form>
            </div>
        )
    
}


export default connect(null, {
    setNotification
})(SignIn);