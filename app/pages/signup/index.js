import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { signupUser } from '../../store/actions/authActions';

const Signup = () => {
    useEffect(() => (document.title = 'Signup into your account'), []);
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const singup = inputValues => dispatch(signupUser(inputValues));

    const handleChange = e => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        singup(inputValues);
        router.push('/');
    };

    return (
        <main className='main'>
            <div className='login-form'>
                <h2 className='heading-secondary ma-bt-lg'>
                    Signup into your account
                </h2>
                <form className='form form--login' onSubmit={handleSubmit}>
                    <div className='form__group'>
                        <label htmlFor='name' className='form__label'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='form__input'
                            value={inputValues.name}
                            onChange={handleChange}
                            placeholder='Laura'
                            required
                        />
                    </div>
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
                    <div className='form__group'>
                        <label
                            htmlFor='passwordConfirm'
                            className='form__label'
                        >
                            Password Confirm
                        </label>
                        <input
                            type='password'
                            id='passwordConfirm'
                            name='passwordConfirm'
                            className='form__input'
                            value={inputValues.passwordConfirm}
                            onChange={handleChange}
                            placeholder='••••••••'
                            required
                        />
                    </div>
                    <div className='form__group'></div>
                    <button className='btn btn--green'>Signup</button>
                </form>
            </div>
        </main>
    );
};

export default Signup;
