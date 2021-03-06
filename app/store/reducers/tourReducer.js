// import { HYDRATE } from 'next-redux-wrapper'
import { GET_ALL_TOURS, GET_TOUR, GET_MY_TOURS } from '../types/tourTypes'

const initialState = {
    tours: [],
    tour: {},
    myTours: [],
}

const tourReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TOURS:
            return {
                ...state,
                tours: action.payload,
            }
        case GET_TOUR:
            return {
                ...state,
                tour: action.payload,
            }
        case GET_MY_TOURS:
            return {
                ...state,
                myTours: action.payload,
            }
        default:
            return state
    }
}

export default tourReducer
