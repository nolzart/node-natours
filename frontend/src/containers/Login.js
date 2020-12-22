import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });

    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://mern-natours.herokuapp.com/api/v1/users/login',
                data: {
                    email: inputValues.email,
                    password: inputValues.password,
                },
                headers: {
                    withCredentials: true,
                },
            });

            if (res.data.status === 'success') history.push('/');
        } catch (err) {
            console.log(err);
        }
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
