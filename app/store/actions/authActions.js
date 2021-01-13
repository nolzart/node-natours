import axios from 'axios';
import catchAsyncError from '../../utils/catchAsyncError';
import {
    LOGIN_USER,
    LOGOUT_USER,
    GET_REFRESH_TOKEN,
    REFRESH_TOKEN,
    UPDATE_USER_DATA,
    UPDATE_USER_PASSWORD,
} from '../types/authTypes';
import { UPDATE_ALERT } from '../types/alertTypes';

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
    dispatch({
        type: GET_REFRESH_TOKEN,
    });
    catchAsyncError(async () => {
        const res = await axios.get('/api/v1/users/refreshToken');
        dispatch({
            type: REFRESH_TOKEN,
            payload: res.data,
        });
    }, dispatch);
};
