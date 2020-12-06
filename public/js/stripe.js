/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
    'pk_test_51HnrF2KyEVMDo9Wn6KEslURceFslGebjrSODFs03WIqCuwsZeVKKZ3OWtR3wpnyzZnqFLdlc6jImGCPdVppmF6ON00NAZU5OLi'
);

exports.getCheckoutSession = async tourId => {
    try {
        const session = await axios(
            `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
        );
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (error) {
        showAlert('error', 'Something was wrong!');
    }
};
