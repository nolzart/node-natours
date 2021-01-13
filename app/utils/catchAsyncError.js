import { UPDATE_ALERT } from '../store/types/alertTypes';
const catchAsyncError = (cb, dispatch) => {
    cb().catch(err => {
        dispatch({
            type: UPDATE_ALERT,
            payload: {
                status: 'success',
                message: err.response.data.message,
            },
        });
    });
};

export default catchAsyncError;
