import React from 'react';
import './sign-in-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage =() =>(

    <div className='sign-in-and-sign-up'>
        <SignUp />
        <SignIn />
    </div>
)

export default SignInAndSignUpPage;
