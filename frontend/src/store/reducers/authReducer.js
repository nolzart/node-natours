import { LOGIN_USER, LOGOUT_USER } from '../types/authTypes';

const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            const { token } = action.payload;
            const { user } = action.payload.data;
            return {
                isAuthenticated: true,
                user,
                token,
            };
        case LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
