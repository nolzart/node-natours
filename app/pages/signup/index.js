import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Redirect from '../../components/Redirect';
import { signupUser } from '../../store/actions/authActions';

const Signup = () => {
    useEffect(() => (document.title = 'Sign up into your account'), []);
    const { register, handleSubmit, reset } = useForm();
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit = data => {
        dispatch(signupUser(data));
        reset();
        router.push('/');
    };

    return (
        <Redirect shouldRedirect={isAuthenticated === true} path='/'>
            <main className='main'>
                <div className='login-form'>
                    <h2 className='heading-secondary ma-bt-lg'>
                        Sign up into your account
                    </h2>
                    <form
                        className='form form--login'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='form__group'>
                            <label htmlFor='name' className='form__label'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                className='form__input'
                                ref={register({
                                    required: true,
                                })}
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
                                ref={register({
                                    required: true,
                                })}
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
                                ref={register({
                                    required: true,
                                    minLength: 8,
                                })}
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
                                ref={register({
                                    required: true,
                                })}
                                placeholder='••••••••'
                                required
                            />
                        </div>
                        <div className='form__group'></div>
                        <button className='btn btn--green'>Signup</button>
                    </form>
                </div>
            </main>
        </Redirect>
    );
};

export default Signup;
