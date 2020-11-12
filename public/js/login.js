/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
    try {
        const res = await axios.post(
            'http://127.0.0.1:3000/api/v1/users/login',
            {
                email,
                password,
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers':
                        'Content-Type, Authorization',
                },
            }
        );
        console.log(res);
        showAlert('success', 'Logged in sucessfully!');

        setTimeout(() => window.location.assign('/'), 1500);
    } catch (err) {
        console.log(err);
        if (err.response.data.message)
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
