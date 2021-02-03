import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Head from 'next/head'

import { signupUser } from '@/store/actions/authActions'
import Redirect from '@/components/modules/Redirect'
import InputEmail from '@/components/elements/InputEmail'
import InputText from '@/components/elements/InputText'
import InputPassword from '@/components/elements/InputPassword'

const Signup = () => {
    const { register, handleSubmit, reset } = useForm()
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    const onSubmit = data => {
        dispatch(signupUser(data))
        reset()
        router.push('/')
    }

    return (
        <Redirect shouldRedirect={isAuthenticated === true} path="/">
            <Head>
                <title>{`Sign up into your account`}</title>
            </Head>
            <main className="main">
                <div className="login-form">
                    <h2 className="heading-secondary ma-bt-lg">
                        Sign up into your account
                    </h2>
                    <form
                        className="form form--login"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <InputText
                            labelContent="Name"
                            inputId="name"
                            refAttribute={register({
                                required: true,
                            })}
                            defaultValue=""
                        />
                        <InputEmail
                            labelConten="Email"
                            inputId="email"
                            refAttribute={register({
                                required: true,
                            })}
                            defaultValue=""
                        />
                        <InputPassword
                            labelContent="Password"
                            inputId="password"
                            refAttribute={register({
                                required: true,
                                minLength: 8,
                            })}
                        />
                        <InputPassword
                            labelContent="Password Confirm"
                            inputId="passwordConfirm"
                            refAttribute={register({
                                required: true,
                                minLength: 8,
                            })}
                        />
                        <div className="form__group">
                            <button className="btn btn--green">Signup</button>
                        </div>
                    </form>
                </div>
            </main>
        </Redirect>
    )
}

export default Signup
