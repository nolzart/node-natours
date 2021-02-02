import axios from 'axios'
// import { useDispatch } from "react-redux"
import { useState, useEffect } from 'react'

export const getStripe = () => {
    const [stripe, setStripe] = useState('')
    useEffect(() => {
        setStripe(
            window.Stripe(
                'pk_test_51HnrF2KyEVMDo9Wn6KEslURceFslGebjrSODFs03WIqCuwsZeVKKZ3OWtR3wpnyzZnqFLdlc6jImGCPdVppmF6ON00NAZU5OLi'
            )
        )
    }, [])
    return stripe
}

export const getCheckoutSession = async (tourId, stripe) => {
    try {
        const session = await axios.get(
            `/api/v1/bookings/checkout-session/${tourId}`
        )
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        })
    } catch (err) {
        return null
    }
}
