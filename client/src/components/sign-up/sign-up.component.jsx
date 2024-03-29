import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { SignUpContainer, SignUpTitle } from './sign-up.styles.jsx';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const Signup = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("password don't match!");
            return;
        }
        signUpStart({ displayName, email, password })
    };
    const handleChange = e => {
        const { value, name } = e.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }
    return (
        <SignUpContainer>
            <SignUpTitle>Don't have an Account ?</SignUpTitle>
            <span> Sign Up with your email and password </span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> SIGNUP </CustomButton>
            </form>
        </SignUpContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCred => dispatch(signUpStart(userCred))
})


export default connect(null, mapDispatchToProps)(Signup);