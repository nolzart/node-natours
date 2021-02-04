import axios from 'axios'

import { GET_ALL_TOURS, GET_TOUR, GET_MY_TOURS } from '../types/tourTypes'
import catchAsyncError from '@/utils/catchAsyncError'

export const getTours = () => async dispatch =>
    catchAsyncError(async () => {
        const res = await axios.get('/api/v1/tours')
        dispatch({
            type: GET_ALL_TOURS,
            payload: res.data.data.data,
        })
    }, dispatch)

export const getTour = slug => async dispatch =>
    catchAsyncError(async () => {
        const res = await axios.get(`/api/v1/tours/${slug}`)

        dispatch({
            type: GET_TOUR,
            payload: res.data.data.data,
        })
    }, dispatch)

export const getMyTours = () => async dispatch =>
    catchAsyncError(async () => {
        const res = await axios.get(`/api/v1/bookings/my-tours`)

        dispatch({ type: GET_MY_TOURS, payload: res.data.data.data })
    }, dispatch)
