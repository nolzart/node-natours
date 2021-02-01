import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Redirect from '../../components/Redirect';
import { wrapper } from '../../store/store';
import Tour from '../../components/TourCard';
import { getMyTours } from '../../store/actions/tourActions';

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => await store.dispatch(getMyTours())
);

const MyBookings = () => {
    const { myTours } = useSelector(state => state.tour);
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = 'Natours | My Tours';
        dispatch(getMyTours());
    }, [dispatch]);
    return (
        <Redirect shouldRedirect={isAuthenticated !== true} path='login'>
            <main className='main'>
                <div className='card-container'>
                    {myTours.length > 0 &&
                        myTours.map(tour => <Tour tour={tour} key={tour.id} />)}
                </div>
            </main>
        </Redirect>
    );
};

export default MyBookings;
