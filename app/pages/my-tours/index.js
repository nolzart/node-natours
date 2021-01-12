import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { wrapper } from '../../store/store';
import Tour from '../../components/TourCard';
import { getMyTours } from '../../store/actions/tourActions';

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => await store.dispatch(getMyTours())
);

const MyBookings = () => {
    const myTours = useSelector(state => state.tour.myTours);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = 'Natours | My Tours';
        dispatch(getMyTours());
    }, [dispatch]);
    return (
        <main className='main'>
            <div className='card-container'>
                {myTours.length > 0 &&
                    myTours.map(tour => <Tour tour={tour} key={tour.id} />)}
            </div>
        </main>
    );
};

export default MyBookings;
