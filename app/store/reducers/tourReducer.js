import { GET_ALL_TOURS, GET_TOUR, GET_MY_TOURS } from '../types/tourTypes';

const initialState = {
    tours: [],
    tour: {},
    myTours: [],
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
        case GET_MY_TOURS:
            return {
                ...state,
                myTours: action.payload,
            };
        default:
            return state;
    }
};

export default tourReducer;
