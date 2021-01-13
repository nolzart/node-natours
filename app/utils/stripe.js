import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import catchAsyncError from './catchAsyncError';

export const getStripe = () => {
    const [stripe, setStripe] = useState('');
    useEffect(() => {
        setStripe(
            window.Stripe(
                'pk_test_51HnrF2KyEVMDo9Wn6KEslURceFslGebjrSODFs03WIqCuwsZeVKKZ3OWtR3wpnyzZnqFLdlc6jImGCPdVppmF6ON00NAZU5OLi'
            )
        );
    }, []);
    return stripe;
};
export const getCheckoutSession = async (tourId, stripe) => {
    const dispatch = useDispatch();
    try {
        const session = await axios.get(
            `/api/v1/bookings/checkout-session/${tourId}`
        );
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });
    } catch (err) {
        const message = err.response
            ? err.response.data.message
            : 'Something was wrong :(!';
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {
                status: 'error',
                message,
            },
        });
        console.log(err);
    }
};
