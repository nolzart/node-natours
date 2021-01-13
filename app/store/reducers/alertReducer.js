const initialState = {
    status: '',
    message: '',
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ALERT':
            const { status, message } = action.payload;
            return {
                status,
                message,
            };
        case 'RESET_ALERT':
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default alertReducer;
