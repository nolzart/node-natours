import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    GET_REFRESH_TOKEN,
    REFRESH_TOKEN,
} from '../types/authTypes';

const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
    loading: false,
    err: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REFRESH_TOKEN:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_USER:
        case REFRESH_TOKEN:
            const { token } = action.payload;
            const { user } = action.payload.data;
            return {
                isAuthenticated: true,
                user,
                token,
                loading: false,
                err: null,
            };
        case LOGIN_USER_ERROR:
            return {
                isAuthenticated: false,
                user: {},
                token: '',
                loading: false,
                err: action.payload,
            };
        case LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
