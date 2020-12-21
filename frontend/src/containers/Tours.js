import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Tour from '../components/TourCard';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        document.title = 'Natours | All tours';
        axios
            .get('https://mern-natours.herokuapp.com/api/v1/tours')
            .then(response => setTours(response.data.data.data));
    }, []);

    return (
        <main className='main'>
            <div className='card-container'>
                {tours && tours.map(tour => <Tour tour={tour} key={tour.id} />)}
            </div>
        </main>
    );
};

export default Tours;
