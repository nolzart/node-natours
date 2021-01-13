import { UPDATE_ALERT } from '../store/types/alertTypes';
const catchAsyncError = (cb, dispatch) =>
    cb().catch(err => {
        const message = err.response ? err.response : 'Something was wrong :(!';
        dispatch({
            type: UPDATE_ALERT,
            payload: {
                status: 'success',
                message,
            },
        });
    });

export default catchAsyncError;
