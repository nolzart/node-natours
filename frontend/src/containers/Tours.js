import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tour from '../components/TourCard';
import { getTours } from '../store/actions/tourActions';

const Tours = () => {
    const tours = useSelector(state => state.tour.tours);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = 'Natours | All tours';

        dispatch(getTours());
    }, []);

    return (
        <main className='main'>
            <div className='card-container'>
                {tours.length > 0 &&
                    tours.map(tour => <Tour tour={tour} key={tour.id} />)}
            </div>
        </main>
    );
};

export default Tours;
