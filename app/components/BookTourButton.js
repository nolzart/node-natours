import React from 'react';
import { getStripe, getCheckoutSession } from '../utils/stripe';

const BookTourButton = ({ tourId }) => {
    const stripe = getStripe();
    console.log(tourId);
    const getCheckout = () => getCheckoutSession(tourId, stripe);
    return (
        <button
            className='btn btn--green span-all-rows'
            id='book-tour'
            type='button'
            onClick={getCheckout}
        >
            Book tour now!
        </button>
    );
};

export default BookTourButton;
