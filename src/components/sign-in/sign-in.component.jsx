import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }
    handleChange = e => {
        const { value, name } = e.target; // destructure, this saves us from writing e.target.value and etc.
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="Email" required />
            
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    

                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
};
export default SignIn;