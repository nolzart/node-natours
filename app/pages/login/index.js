import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });

    const singin = inputValues => dispatch(loginUser(inputValues));

    const handleChange = e => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        singin(inputValues);
        router.push('/');
    };

    return (
        <main className='main'>
            <div className='login-form'>
                <h2 className='heading-secondary ma-bt-lg'>
                    Log into your account
                </h2>
                <form className='form form--login' onSubmit={handleSubmit}>
                    <div className='form__group'>
                        <label htmlFor='email' className='form__label'>
                            Email address
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='form__input'
                            value={inputValues.email}
                            onChange={handleChange}
                            placeholder='you@example.com'
                            required
                        />
                    </div>
                    <div className='form__group ma-bt-md'>
                        <label htmlFor='password' className='form__label'>
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='form__input'
                            placeholder='••••••••'
                            value={inputValues.password}
                            onChange={handleChange}
                            minLength='8'
                            required
                        />
                    </div>
                    <div className='form__group'></div>
                    <button className='btn btn--green'>Login</button>
                </form>
            </div>
        </main>
    );
};

export default Login;
