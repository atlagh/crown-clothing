import React from 'react';
// import SignIn from '../../pages/sign-in/sign-in.component';
import './login.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.util';

class LogIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password:''})
        }catch (e){
            console.log(e);

        }


        
    }



    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }


    render() {
        return(
            <div className='log-in' >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" lable="Email" handleChange={this.handleChange} value={this.state.email} required />
                    
                    <FormInput name="password" type="password" lable="Password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                    
                 </form>

            </div>
        )
    }
}

export default LogIn;