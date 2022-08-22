import React from 'react';
import './sign-in.styles.scss';
import LogIn from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignIn = () => {
    return (
        <div className='sign-in' >
            <LogIn />
            <SignUp />
             
        </div>
    )
}

export default SignIn;