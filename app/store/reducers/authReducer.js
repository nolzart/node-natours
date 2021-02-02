import {
    SIGNUP_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_REFRESH_TOKEN,
    REFRESH_TOKEN,
    UPDATE_USER_DATA,
    UPDATE_USER_PASSWORD,
} from '../types/authTypes'

const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
    loading: false,
    err: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REFRESH_TOKEN:
            return {
                ...state,
                loading: true,
            }
        case SIGNUP_USER:
        case LOGIN_USER:
        case REFRESH_TOKEN:
        case UPDATE_USER_PASSWORD:
            return {
                isAuthenticated: !!action.payload.token,
                user: action.payload.data.user,
                token: action.payload.token,
                loading: false,
                err: null,
            }
        case LOGOUT_USER:
            return initialState
        case UPDATE_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return state
    }
}

export default authReducer
