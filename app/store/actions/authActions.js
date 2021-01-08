import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from '../types/authTypes';

export const loginUser = ({ email, password }) => async dispatch => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email,
                password,
            },
            headers: {
                withCredentials: true,
            },
        });

        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const logoutUser = () => async dispatch => {
    try {
        await axios.get(
            '/api/v1/users/logout'
        );
        dispatch({
            type: LOGOUT_USER,
        });
    } catch (err) {
        console.log(err);
    }
};
