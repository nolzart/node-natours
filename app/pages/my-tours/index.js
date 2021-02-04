import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Redirect from '@/components/modules/Redirect'
import Tour from '@/components/templates/TourCard'
import { wrapper } from '@/store/store'
import { getMyTours } from '@/store/actions/tourActions'

export const getStaticProps = wrapper.getStaticProps(
    async ({ store }) => await store.dispatch(getMyTours())
)

const MyBookings = () => {
    const { myTours } = useSelector(state => state.tour)
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => dispatch(getMyTours()), [dispatch])
    return (
        <Redirect shouldRedirect={isAuthenticated !== true} path="login">
            <Head>
                <title>{`Natours | My Tours`}</title>
            </Head>
            <main className="main">
                <div className="card-container">
                    {myTours.length > 0 &&
                        myTours.map(tour => <Tour tour={tour} key={tour.id} />)}
                </div>
            </main>
        </Redirect>
    )
}

export default MyBookings
