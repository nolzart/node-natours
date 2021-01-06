/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
    try {
        const url =
            type === 'data'
                ? '/api/v1/users/updateMe'
                : '/api/v1/users/updateMyPassword';

        const res = await axios({
            method: 'PATCH',
            url,
            data,
        });

        if (res.data.status === 'success')
            showAlert(
                'success',
                `${type[0].toUpperCase()}${type.substring(
                    1
                )} updated successfully`
            );
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};
