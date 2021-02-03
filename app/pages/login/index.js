import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import Redirect from '@/components/modules/Redirect'
import { loginUser } from '@/store/actions/authActions'
import InputEmail from '@/components/elements/InputEmail'
import InputPassword from '@/components/elements/InputPassword'

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
                        <InputEmail
                            labelContent="Email address"
                            inputId="email"
                            defaultValue=""
                            refAttribute={register({
                                required: true,
                            })}
                        />
                        <InputPassword
                            labelContent="Password"
                            inputId="password"
                            refAttribute={register({
                                required: true,
                                minLength: 8,
                            })}
                        />
                        <div className="form__group"></div>
                        <button className="btn btn--green">Login</button>
                    </form>
                </div>
            </main>
        </Redirect>
    )
}
export default Login
