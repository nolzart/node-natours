/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login',
            data: {
                email,
                password,
            },
        });
        showAlert('success', 'Logged in sucessfully!');

        setTimeout(() => window.location.assign('/'), 1500);
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};

export const logout = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:3000/api/v1/users/logout',
        });

        if (res) window.location.reload();
    } catch (err) {
        console.log(err.response);
        showAlert('error', 'Something was wrong! Try again.');
    }
};
