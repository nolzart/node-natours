import axios from 'axios';
import { GET_ALL_TOURS, GET_TOUR } from '../types/tourTypes';

export const getTours = () => async dispatch => {
    try {
        const res = await axios.get(
            'https://mern-natours.herokuapp.com/api/v1/tours'
        );

        dispatch({
            type: GET_ALL_TOURS,
            payload: res.data.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getSingleTour = slug => async dispatch => {
    try {
        const resId = await axios.get(
            `https://mern-natours.herokuapp.com/api/v1/tours?slug=${slug}&fields=id`
        );

        const resTour = await axios.get(
            `https://mern-natours.herokuapp.com/api/v1/tours/${resId.data.data.data.id}`
        );
        dispatch({
            type: GET_TOUR,
            payload: resTour.data.data,
        });
    } catch (err) {
        console.log(err);
    }
};
