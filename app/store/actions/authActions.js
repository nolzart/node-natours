import axios from 'axios';
import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    GET_REFRESH_TOKEN,
    REFRESH_TOKEN,
    UPDATE_USER_DATA,
    UPDATE_USER_PASSWORD,
} from '../types/authTypes';

export const updateUserData = data => async dispatch => {
    try {
        const res = await axios.patch('/api/v1/users/updateMe', data);
        dispatch({ type: UPDATE_USER_DATA, payload: res.data.data });
    } catch (err) {
        console.log(err);
    }
};

export const updateUserPassword = data => async dispatch => {
    try {
        const res = await axios.patch('/api/v1/users/updateMyPassword', data);
        dispatch({ type: UPDATE_USER_PASSWORD, payload: res.data });
    } catch (err) {
        console.log(err);
    }
};

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
        dispatch({
            type: LOGIN_USER_ERROR,
            payload: err.message,
        });
    }
};

export const logoutUser = () => async dispatch => {
    try {
        await axios.get('/api/v1/users/logout');
        dispatch({
            type: LOGOUT_USER,
        });
    } catch (err) {
        console.log(err);
    }
};

export const refreshToken = () => async dispatch => {
    dispatch({
        type: GET_REFRESH_TOKEN,
    });
    try {
        const res = await axios.get('/api/v1/users/refreshToken');
        dispatch({
            type: REFRESH_TOKEN,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
