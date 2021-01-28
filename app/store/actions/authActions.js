import axios from 'axios';

import {
    SIGNUP_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_REFRESH_TOKEN,
    REFRESH_TOKEN,
    UPDATE_USER_DATA,
    UPDATE_USER_PASSWORD,
} from '../types/authTypes';

import { UPDATE_ALERT } from '../types/alertTypes';
import catchAsyncError from '../../utils/catchAsyncError';

export const updateUserData = data => async dispatch =>
    catchAsyncError(async () => {
        const res = await axios.patch('/api/v1/users/updateMe', data);
        dispatch({ type: UPDATE_USER_DATA, payload: res.data.data });
        dispatch({
            type: UPDATE_ALERT,
            payload: {
                status: 'success',
                message: 'Data updated successfully!',
            },
        });
    }, dispatch);

export const updateUserPassword = data => async dispatch =>
    catchAsyncError(async () => {
        const res = await axios.patch('/api/v1/users/updateMyPassword', data);
        dispatch({ type: UPDATE_USER_PASSWORD, payload: res.data });
        dispatch({
            type: UPDATE_ALERT,
            payload: {
                status: 'success',
                message: 'Password updated successfully!',
            },
        });
    }, dispatch);

export const signupUser = ({
    name,
    email,
    password,
    passwordConfirm,
}) => async dispatch => {
    catchAsyncError(async () => {
        const res = await axios.post(
            '/api/v1/users/signup',
            {
                name,
                email,
                password,
                passwordConfirm,
            },
            {
                headers: {
                    withCredentials: true,
                },
            }
        );
        dispatch({
            type: UPDATE_ALERT,
            payload: { status: 'success', message: 'Signup successfully!' },
        });
        dispatch({
            type: SIGNUP_USER,
            payload: res.data,
        });
    }, dispatch);
};

export const loginUser = ({ email, password }) => async dispatch =>
    catchAsyncError(async () => {
        const res = await axios.post(
            '/api/v1/users/login',
            {
                email,
                password,
            },
            {
                headers: {
                    withCredentials: true,
                },
            }
        );
        dispatch({
            type: UPDATE_ALERT,
            payload: { status: 'success', message: 'Log in successfully!' },
        });
        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });
    }, dispatch);

export const logoutUser = () => async dispatch =>
    catchAsyncError(async () => {
        await axios.get('/api/v1/users/logout');
        dispatch({
            type: LOGOUT_USER,
        });
    }, dispatch);

export const refreshToken = () => async dispatch => {
    try {
        dispatch({
            type: GET_REFRESH_TOKEN,
        });
        const res = await axios.get('/api/v1/users/refreshToken');
        dispatch({
            type: REFRESH_TOKEN,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: REFRESH_TOKEN,
            payload: {
                token: '',
                data: {
                    user: {},
                },
            },
        });
    }
};
