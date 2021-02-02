import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import Redirect from '@/components/elements/Redirect'
import { loginUser } from '@/store/actions/authActions'

const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    const onSubmit = data => {
        dispatch(loginUser(data))
        reset()
        router.push('/')
    }

    return (
        <Redirect shouldRedirect={isAuthenticated === true} path="/">
            <Head>
                <title>{`Natours | Log into your account`}</title>
            </Head>
            <main className="main">
                <div className="login-form">
                    <h2 className="heading-secondary ma-bt-lg">
                        Log into your account
                    </h2>
                    <form
                        className="form form--login"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form__group">
                            <label htmlFor="email" className="form__label">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form__input"
                                ref={register({
                                    required: true,
                                })}
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="form__group ma-bt-md">
                            <label htmlFor="password" className="form__label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form__input"
                                placeholder="••••••••"
                                ref={register({
                                    required: true,
                                    minLength: 8,
                                })}
                                minLength="8"
                                required
                            />
                        </div>
                        <div className="form__group"></div>
                        <button className="btn btn--green">Login</button>
                    </form>
                </div>
            </main>
        </Redirect>
    )
}
export default Login
