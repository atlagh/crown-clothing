import React from 'react';
// import SignIn from '../../pages/sign-in/sign-in.component';
import './login.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';


class LogIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password:''})
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
                    
                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>

            </div>
        )
    }
}

export default LogIn;