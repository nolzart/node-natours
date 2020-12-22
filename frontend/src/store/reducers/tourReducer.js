import { GET_ALL_TOURS, GET_TOUR } from '../types/tourTypes';

const initialState = {
    tours: [],
    tour: {},
};

const tourReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TOURS:
            const tours = action.payload.data;

            return {
                ...state,
                tours,
            };
        case GET_TOUR:
            const tour = action.payload.data;
            return {
                ...state,
                tour,
            };
        default:
            return state;
    }
};

export default tourReducer;
