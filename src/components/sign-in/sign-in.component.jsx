// UNFINISHED GOOGLE LOGIN BUTTON
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state // destructure
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' })

        } catch(error){
            console.log(error);
        }

    }
    handleChange = e => {
        const { value, name } = e.target; // destructure, this saves us from writing e.target.value and etc.
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2> I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} handleChange={this.handleChange} label="Email" required />
            
                    <FormInput name='password' type='password' value={password} handleChange={this.handleChange} label="Password" required />
                    
                    <div className='buttons'>
                    <CustomButton type="submit"> LOGIN </CustomButton>
                    <CustomButton onClick={signInWithGoogle } isGoogleSignIn> 
                    GOOGLE LOGIN
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};
export default SignIn;