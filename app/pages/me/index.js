import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import ImageUpload from '../../components/ImageUpload';

const navItem = (link, text, icon, active) => (
    <li className={`${active ? 'side__nav--active' : ''}`}>
        <a href={link}>
            <svg
                dangerouslySetInnerHTML={{
                    __html: `<use xlink:href="/img/icons.svg#icon-${icon}" />`,
                }}
            />
            {text}
        </a>
    </li>
);

const Account = () => {
    const { register, handleSubmit } = useForm();
    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
    } = useForm();
    const { user, isAuthenticated, token } = useSelector(state => state.auth);

    const [photo, setPhoto] = useState(
        `https://mern-natours.herokuapp.com/img/users/${user.photo}`
    );

    const onSubmit = async data => {
        data.photo = data.name !== undefined ? photo : undefined;
        try {
            const url =
                data.name !== undefined
                    ? 'http://127.0.0.1:5000/api/v1/users/updateMe'
                    : 'http://127.0.0.1:5000/api/v1/users/updateMyPassword';
            await axios({
                method: 'PATCH',
                url,
                data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <main className='main'>
            <div className='user-view'>
                <nav className='user-view__menu'>
                    <ul className='side-nav'>
                        {navItem('#', 'Settings', 'settings', true)}
                        {navItem('/my-tours', 'My bookings', 'briefcase')}
                        {navItem('#', 'My reviews', 'star')}
                        {navItem('#', 'Billing', 'credit-card')}
                        {isAuthenticated && user.role === 'admin' && (
                            <div className='admin-nav'>
                                <h5 className='admin-nav__heading'>Admin</h5>
                                <ul className='side-nav'>
                                    {navItem('#', 'Manage users', 'users')}
                                    {navItem('#', 'Manage reviews', 'star')}
                                    {navItem(
                                        '#',
                                        'Manage bookings',
                                        'briefcase'
                                    )}
                                </ul>
                            </div>
                        )}
                    </ul>
                </nav>
                <div className='user-view__content'>
                    <div className='user-view__form-container'>
                        <h2 className='heading-secondary ma-bt-md'>
                            Tour account settings
                        </h2>
                        <form
                            className='form form-user-data'
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
                                    defaultValue={user.name}
                                    ref={register({ required: true })}
                                />
                            </div>
                            <div className='form__group ma-bt-md'>
                                <label htmlFor='email' className='form__label'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className='form__input'
                                    defaultValue={user.email}
                                    ref={register({ required: true })}
                                />
                            </div>
                            <ImageUpload
                                name={user.name}
                                photo={photo}
                                setPhoto={setPhoto}
                            />
                            <div className='form__group right'>
                                <button className='btn btn--small btn--green'>
                                    Save settings
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='line'>&nbsp;</div>

                    <div className='user-view__form-container'>
                        <h2 className='heading-secondary ma-bt-md'>
                            Password change
                        </h2>
                        <form
                            className='form form-user-password'
                            onSubmit={handleSubmitPassword(onSubmit)}
                        >
                            <div className='form__group'>
                                <label
                                    htmlFor='currentPassword'
                                    className='form__label'
                                >
                                    Current password
                                </label>
                                <input
                                    type='password'
                                    id='currentPassword'
                                    name='currentPassword'
                                    placeholder='••••••••'
                                    defaultValue=''
                                    className='form__input'
                                    ref={registerPassword({
                                        required: true,
                                        minLengt: 8,
                                    })}
                                />
                            </div>
                            <div className='form__group'>
                                <label
                                    htmlFor='password'
                                    className='form__label'
                                >
                                    New password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    placeholder='••••••••'
                                    className='form__input'
                                    defaultValue=''
                                    ref={registerPassword({
                                        required: true,
                                        minLengt: 8,
                                    })}
                                />
                            </div>
                            <div className='form__group'>
                                <label
                                    htmlFor='passwordConfirm'
                                    className='form__label'
                                >
                                    Confirm password
                                </label>
                                <input
                                    type='password'
                                    id='passwordConfirm'
                                    name='passwordConfirm'
                                    defaultValue=''
                                    placeholder='••••••••'
                                    className='form__input'
                                    ref={registerPassword({
                                        required: true,
                                        minLengt: 8,
                                    })}
                                />
                            </div>
                            <div className='form__group'>
                                <button className='btn btn--small btn--green btn--password'>
                                    Save password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Account;
