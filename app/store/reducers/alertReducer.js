const initialState = {
    status: '',
    message: '',
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ALERT':
            return {
                status: action.payload.status,
                message: action.payload.message,
            }
        case 'RESET_ALERT':
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default alertReducer
