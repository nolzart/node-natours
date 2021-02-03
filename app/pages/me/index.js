import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Head from 'next/head'

import ImageUpload from '@/components/modules/ImageUpload'
import Redirect from '@/components/modules/Redirect'
import InputEmail from '@/components/elements/InputEmail'
import InputText from '@/components/elements/InputText'
import InputPassword from '@/components/elements/InputPassword'

import { updateUserData, updateUserPassword } from '@/store/actions/authActions'

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
)

const Account = () => {
    const { register, handleSubmit } = useForm()
    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        reset,
    } = useForm()

    const { user, isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState('')

    const submitData = data => {
        if (photo) data.photo = photo
        const form = new FormData()
        form.append('name', data.name)
        form.append('email', data.email)
        form.append('photo', data.photo)
        dispatch(updateUserData(form))
    }
    const submitPassword = data => {
        dispatch(updateUserPassword(data))
        reset()
    }
    return (
        <Redirect shouldRedirect={isAuthenticated !== true} path="/login">
            <Head>
                <title>{`Natours | Your account`}</title>
            </Head>
            <main className="main">
                <div className="user-view">
                    <input
                        type="checkbox"
                        name="navi-toggle"
                        id="navi-toggle"
                        className="nav__checkbox"
                    />
                    <label htmlFor="navi-toggle" className="nav__button">
                        <span className="nav__icon"></span>
                    </label>
                    <nav className="user-view__menu">
                        <ul className="side-nav">
                            {navItem('#', 'Settings', 'settings', true)}
                            {navItem('/my-tours', 'My bookings', 'briefcase')}
                            {navItem('#', 'My reviews', 'star')}
                            {navItem('#', 'Billing', 'credit-card')}
                            {isAuthenticated && user.role === 'admin' && (
                                <div className="admin-nav">
                                    <h5 className="admin-nav__heading">
                                        Admin
                                    </h5>
                                    <ul className="side-nav">
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
                    <div className="user-view__content">
                        <div className="user-view__form-container">
                            <h2 className="heading-secondary ma-bt-md">
                                Tour account settings
                            </h2>
                            <form
                                className="form form-user-data"
                                onSubmit={handleSubmit(submitData)}
                            >
                                <InputText
                                    labelContent="Name"
                                    inputId="name"
                                    refAttribute={register({ required: true })}
                                    defaultValue={user.name}
                                />
                                <InputEmail
                                    refAttribute={register({ required: true })}
                                    labelContent="Email"
                                    inputId="email"
                                    defaultValue={user.email}
                                />
                                <ImageUpload
                                    name={user.name}
                                    userPhoto={user.photo}
                                    setPhoto={setPhoto}
                                />
                                <div className="form__group right">
                                    <button className="btn btn--small btn--green">
                                        Save settings
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="line">&nbsp;</div>

                        <div className="user-view__form-container">
                            <h2 className="heading-secondary ma-bt-md">
                                Password change
                            </h2>
                            <form
                                className="form form-user-password"
                                onSubmit={handleSubmitPassword(submitPassword)}
                            >
                                <InputPassword
                                    labelContent="Current Password"
                                    inputId="currentPassword"
                                    refAttribute={registerPassword({
                                        required: true,
                                        minLength: 8,
                                    })}
                                />
                                <InputPassword
                                    labelContent="New Password"
                                    inputId="password"
                                    refAttribute={registerPassword({
                                        required: true,
                                        minLength: 8,
                                    })}
                                />
                                <InputPassword
                                    labelContent="Confirm Password"
                                    inputId="passwordConfirm"
                                    refAttribute={registerPassword({
                                        required: true,
                                        minLength: 8,
                                    })}
                                />
                                <div className="form__group">
                                    <button className="btn btn--small btn--green btn--password">
                                        Save password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Redirect>
    )
}

export default Account
