import axios from 'axios';
import { GET_ALL_TOURS, GET_TOUR } from '../types/tourTypes';

export const getTours = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/tours', {
            // baseUrl: 'http://127.0.0.1:500',
        });

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
        const resId = await axios.get(`/api/v1/tours?slug=${slug}&fields=id`);

        const resTour = await axios.get(
            `/api/v1/tours/${resId.data.data.data[0].id}`
        );

        dispatch({
            type: GET_TOUR,
            payload: resTour.data.data,
        });
    } catch (err) {
        console.log(err);
    }
};
