import React from 'react';
import Registerformik from '../../components/pure/forms/registerFormik';

//style
import '../../styles/register.scss'

const RegisterPage = () => {
    return (
        <div className='register'>
            <h1>Register Page</h1>
            <Registerformik/>
        </div>
    );
}

export default RegisterPage;
