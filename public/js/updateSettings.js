/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

export const updateUserData = async (name, email) => {
    try {
        const user = await axios({
            method: 'PATCH',
            url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
            data: {
                name,
                email,
            },
        });
        showAlert('success', 'data updated successfully');
        return user;
    } catch (err) {
        showAlert('error', 'Problem update data');
    }
};
